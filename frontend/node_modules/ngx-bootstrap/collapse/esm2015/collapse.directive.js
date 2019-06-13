/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { AnimationBuilder } from '@angular/animations';
// todo: add animations when https://github.com/angular/angular/issues/9947 solved
import { Directive, ElementRef, EventEmitter, HostBinding, Input, Output, Renderer2 } from '@angular/core';
import { collapseAnimation, expandAnimation } from './collapse-animations';
export class CollapseDirective {
    /**
     * @param {?} _el
     * @param {?} _renderer
     * @param {?} _builder
     */
    constructor(_el, _renderer, _builder) {
        this._el = _el;
        this._renderer = _renderer;
        /**
         * This event fires as soon as content collapses
         */
        this.collapsed = new EventEmitter();
        /**
         * This event fires when collapsing is started
         */
        this.collapses = new EventEmitter();
        /**
         * This event fires as soon as content becomes visible
         */
        this.expanded = new EventEmitter();
        /**
         * This event fires when expansion is started
         */
        this.expands = new EventEmitter();
        // shown
        this.isExpanded = true;
        // hidden
        this.isCollapsed = false;
        // stale state
        this.isCollapse = true;
        // animation state
        this.isCollapsing = false;
        /**
         * turn on/off animation
         */
        this.isAnimated = false;
        this._display = 'block';
        this._stylesLoaded = false;
        this._COLLAPSE_ACTION_NAME = 'collapse';
        this._EXPAND_ACTION_NAME = 'expand';
        this._factoryCollapseAnimation = _builder.build(collapseAnimation);
        this._factoryExpandAnimation = _builder.build(expandAnimation);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set display(value) {
        if (!this.isAnimated) {
            this._renderer.setStyle(this._el.nativeElement, 'display', value);
            return;
        }
        this._display = value;
        if (value === 'none') {
            this.hide();
            return;
        }
        this.show();
    }
    /**
     * A flag indicating visibility of content (shown or hidden)
     * @param {?} value
     * @return {?}
     */
    set collapse(value) {
        this.isExpanded = value;
        this.toggle();
    }
    /**
     * @return {?}
     */
    get collapse() {
        return this.isExpanded;
    }
    /**
     * @return {?}
     */
    ngAfterViewChecked() {
        this._stylesLoaded = true;
    }
    /**
     * allows to manually toggle content visibility
     * @return {?}
     */
    toggle() {
        if (this.isExpanded) {
            this.hide();
        }
        else {
            this.show();
        }
    }
    /**
     * allows to manually hide content
     * @return {?}
     */
    hide() {
        this.isCollapsing = true;
        this.isExpanded = false;
        this.isCollapsed = true;
        this.isCollapsing = false;
        this.collapses.emit(this);
        this.animationRun(this.isAnimated, this._COLLAPSE_ACTION_NAME)(() => {
            this.collapsed.emit(this);
            this._renderer.setStyle(this._el.nativeElement, 'display', 'none');
        });
    }
    /**
     * allows to manually show collapsed content
     * @return {?}
     */
    show() {
        this._renderer.setStyle(this._el.nativeElement, 'display', this._display);
        this.isCollapsing = true;
        this.isExpanded = true;
        this.isCollapsed = false;
        this.isCollapsing = false;
        this.expands.emit(this);
        this.animationRun(this.isAnimated, this._EXPAND_ACTION_NAME)(() => {
            this.expanded.emit(this);
        });
    }
    /**
     * @param {?} isAnimated
     * @param {?} action
     * @return {?}
     */
    animationRun(isAnimated, action) {
        if (!isAnimated || !this._stylesLoaded) {
            return (callback) => callback();
        }
        this._renderer.setStyle(this._el.nativeElement, 'overflow', 'hidden');
        this._renderer.addClass(this._el.nativeElement, 'collapse');
        /** @type {?} */
        const factoryAnimation = (action === this._EXPAND_ACTION_NAME)
            ? this._factoryExpandAnimation
            : this._factoryCollapseAnimation;
        if (this._player) {
            this._player.destroy();
        }
        this._player = factoryAnimation.create(this._el.nativeElement);
        this._player.play();
        return (callback) => this._player.onDone(callback);
    }
}
CollapseDirective.decorators = [
    { type: Directive, args: [{
                selector: '[collapse]',
                exportAs: 'bs-collapse',
                host: {
                    '[class.collapse]': 'true'
                }
            },] }
];
/** @nocollapse */
CollapseDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: AnimationBuilder }
];
CollapseDirective.propDecorators = {
    collapsed: [{ type: Output }],
    collapses: [{ type: Output }],
    expanded: [{ type: Output }],
    expands: [{ type: Output }],
    isExpanded: [{ type: HostBinding, args: ['class.in',] }, { type: HostBinding, args: ['class.show',] }, { type: HostBinding, args: ['attr.aria-expanded',] }],
    isCollapsed: [{ type: HostBinding, args: ['attr.aria-hidden',] }],
    isCollapse: [{ type: HostBinding, args: ['class.collapse',] }],
    isCollapsing: [{ type: HostBinding, args: ['class.collapsing',] }],
    display: [{ type: Input }],
    isAnimated: [{ type: Input }],
    collapse: [{ type: Input }]
};
if (false) {
    /**
     * This event fires as soon as content collapses
     * @type {?}
     */
    CollapseDirective.prototype.collapsed;
    /**
     * This event fires when collapsing is started
     * @type {?}
     */
    CollapseDirective.prototype.collapses;
    /**
     * This event fires as soon as content becomes visible
     * @type {?}
     */
    CollapseDirective.prototype.expanded;
    /**
     * This event fires when expansion is started
     * @type {?}
     */
    CollapseDirective.prototype.expands;
    /** @type {?} */
    CollapseDirective.prototype.isExpanded;
    /** @type {?} */
    CollapseDirective.prototype.isCollapsed;
    /** @type {?} */
    CollapseDirective.prototype.isCollapse;
    /** @type {?} */
    CollapseDirective.prototype.isCollapsing;
    /**
     * turn on/off animation
     * @type {?}
     */
    CollapseDirective.prototype.isAnimated;
    /**
     * @type {?}
     * @private
     */
    CollapseDirective.prototype._display;
    /**
     * @type {?}
     * @private
     */
    CollapseDirective.prototype._factoryCollapseAnimation;
    /**
     * @type {?}
     * @private
     */
    CollapseDirective.prototype._factoryExpandAnimation;
    /**
     * @type {?}
     * @private
     */
    CollapseDirective.prototype._player;
    /**
     * @type {?}
     * @private
     */
    CollapseDirective.prototype._stylesLoaded;
    /**
     * @type {?}
     * @private
     */
    CollapseDirective.prototype._COLLAPSE_ACTION_NAME;
    /**
     * @type {?}
     * @private
     */
    CollapseDirective.prototype._EXPAND_ACTION_NAME;
    /**
     * @type {?}
     * @private
     */
    CollapseDirective.prototype._el;
    /**
     * @type {?}
     * @private
     */
    CollapseDirective.prototype._renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGFwc2UuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9jb2xsYXBzZS8iLCJzb3VyY2VzIjpbImNvbGxhcHNlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLGdCQUFnQixFQUdqQixNQUFNLHFCQUFxQixDQUFDOztBQUc3QixPQUFPLEVBRUwsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osV0FBVyxFQUNYLEtBQUssRUFDTCxNQUFNLEVBQ04sU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFDTCxpQkFBaUIsRUFDakIsZUFBZSxFQUNoQixNQUFNLHVCQUF1QixDQUFDO0FBUy9CLE1BQU0sT0FBTyxpQkFBaUI7Ozs7OztJQThENUIsWUFDVSxHQUFlLEVBQ2YsU0FBb0IsRUFDNUIsUUFBMEI7UUFGbEIsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUNmLGNBQVMsR0FBVCxTQUFTLENBQVc7Ozs7UUE5RHBCLGNBQVMsR0FBb0MsSUFBSSxZQUFZLEVBQUUsQ0FBQzs7OztRQUVoRSxjQUFTLEdBQW9DLElBQUksWUFBWSxFQUFFLENBQUM7Ozs7UUFFaEUsYUFBUSxHQUFvQyxJQUFJLFlBQVksRUFBRSxDQUFDOzs7O1FBRS9ELFlBQU8sR0FBb0MsSUFBSSxZQUFZLEVBQUUsQ0FBQzs7UUFNeEUsZUFBVSxHQUFHLElBQUksQ0FBQzs7UUFFZSxnQkFBVyxHQUFHLEtBQUssQ0FBQzs7UUFFdEIsZUFBVSxHQUFHLElBQUksQ0FBQzs7UUFFaEIsaUJBQVksR0FBRyxLQUFLLENBQUM7Ozs7UUFxQjdDLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFZcEIsYUFBUSxHQUFHLE9BQU8sQ0FBQztRQUluQixrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUV0QiwwQkFBcUIsR0FBRyxVQUFVLENBQUM7UUFDbkMsd0JBQW1CLEdBQUcsUUFBUSxDQUFDO1FBT3JDLElBQUksQ0FBQyx5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V0FBVyxTQUFDLFlBQVksY0FDeEIsV0FBVyxTQUFDLG9CQUFvQjswQkFHaEMsV0FBVyxTQUFDLGtCQUFrQjt5QkFFOUIsV0FBVyxTQUFDLGdCQUFnQjsyQkFFNUIsV0FBVyxTQUFDLGtCQUFrQjtzQkFFOUIsS0FBSzt5QkFtQkwsS0FBSzt1QkFFTCxLQUFLOzs7Ozs7O0lBekNOLHNDQUEwRTs7Ozs7SUFFMUUsc0NBQTBFOzs7OztJQUUxRSxxQ0FBeUU7Ozs7O0lBRXpFLG9DQUF3RTs7SUFHeEUsdUNBR2tCOztJQUVsQix3Q0FBcUQ7O0lBRXJELHVDQUFpRDs7SUFFakQseUNBQXNEOzs7OztJQXFCdEQsdUNBQTRCOzs7OztJQVk1QixxQ0FBMkI7Ozs7O0lBQzNCLHNEQUFvRDs7Ozs7SUFDcEQsb0RBQWtEOzs7OztJQUNsRCxvQ0FBaUM7Ozs7O0lBQ2pDLDBDQUE4Qjs7Ozs7SUFFOUIsa0RBQTJDOzs7OztJQUMzQyxnREFBdUM7Ozs7O0lBR3JDLGdDQUF1Qjs7Ozs7SUFDdkIsc0NBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQW5pbWF0aW9uQnVpbGRlcixcbiAgQW5pbWF0aW9uRmFjdG9yeSxcbiAgQW5pbWF0aW9uUGxheWVyXG59IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuXG4vLyB0b2RvOiBhZGQgYW5pbWF0aW9ucyB3aGVuIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzk5NDcgc29sdmVkXG5pbXBvcnQge1xuICBBZnRlclZpZXdDaGVja2VkLFxuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtcbiAgY29sbGFwc2VBbmltYXRpb24sXG4gIGV4cGFuZEFuaW1hdGlvblxufSBmcm9tICcuL2NvbGxhcHNlLWFuaW1hdGlvbnMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbY29sbGFwc2VdJyxcbiAgZXhwb3J0QXM6ICdicy1jb2xsYXBzZScsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmNvbGxhcHNlXSc6ICd0cnVlJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIENvbGxhcHNlRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3Q2hlY2tlZCB7XG4gIC8qKiBUaGlzIGV2ZW50IGZpcmVzIGFzIHNvb24gYXMgY29udGVudCBjb2xsYXBzZXMgKi9cbiAgQE91dHB1dCgpIGNvbGxhcHNlZDogRXZlbnRFbWl0dGVyPENvbGxhcHNlRGlyZWN0aXZlPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgLyoqIFRoaXMgZXZlbnQgZmlyZXMgd2hlbiBjb2xsYXBzaW5nIGlzIHN0YXJ0ZWQgKi9cbiAgQE91dHB1dCgpIGNvbGxhcHNlczogRXZlbnRFbWl0dGVyPENvbGxhcHNlRGlyZWN0aXZlPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgLyoqIFRoaXMgZXZlbnQgZmlyZXMgYXMgc29vbiBhcyBjb250ZW50IGJlY29tZXMgdmlzaWJsZSAqL1xuICBAT3V0cHV0KCkgZXhwYW5kZWQ6IEV2ZW50RW1pdHRlcjxDb2xsYXBzZURpcmVjdGl2ZT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIC8qKiBUaGlzIGV2ZW50IGZpcmVzIHdoZW4gZXhwYW5zaW9uIGlzIHN0YXJ0ZWQgKi9cbiAgQE91dHB1dCgpIGV4cGFuZHM6IEV2ZW50RW1pdHRlcjxDb2xsYXBzZURpcmVjdGl2ZT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLy8gc2hvd25cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pbicpXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2hvdycpXG4gIEBIb3N0QmluZGluZygnYXR0ci5hcmlhLWV4cGFuZGVkJylcbiAgaXNFeHBhbmRlZCA9IHRydWU7XG4gIC8vIGhpZGRlblxuICBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS1oaWRkZW4nKSBpc0NvbGxhcHNlZCA9IGZhbHNlO1xuICAvLyBzdGFsZSBzdGF0ZVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmNvbGxhcHNlJykgaXNDb2xsYXBzZSA9IHRydWU7XG4gIC8vIGFuaW1hdGlvbiBzdGF0ZVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmNvbGxhcHNpbmcnKSBpc0NvbGxhcHNpbmcgPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBzZXQgZGlzcGxheSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgaWYgKCF0aGlzLmlzQW5pbWF0ZWQpIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsICdkaXNwbGF5JywgdmFsdWUpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fZGlzcGxheSA9IHZhbHVlO1xuXG4gICAgaWYgKHZhbHVlID09PSAnbm9uZScpIHtcbiAgICAgIHRoaXMuaGlkZSgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zaG93KCk7XG4gIH1cbiAgLyoqIHR1cm4gb24vb2ZmIGFuaW1hdGlvbiAqL1xuICBASW5wdXQoKSBpc0FuaW1hdGVkID0gZmFsc2U7XG4gIC8qKiBBIGZsYWcgaW5kaWNhdGluZyB2aXNpYmlsaXR5IG9mIGNvbnRlbnQgKHNob3duIG9yIGhpZGRlbikgKi9cbiAgQElucHV0KClcbiAgc2V0IGNvbGxhcHNlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5pc0V4cGFuZGVkID0gdmFsdWU7XG4gICAgdGhpcy50b2dnbGUoKTtcbiAgfVxuXG4gIGdldCBjb2xsYXBzZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pc0V4cGFuZGVkO1xuICB9XG5cbiAgcHJpdmF0ZSBfZGlzcGxheSA9ICdibG9jayc7XG4gIHByaXZhdGUgX2ZhY3RvcnlDb2xsYXBzZUFuaW1hdGlvbjogQW5pbWF0aW9uRmFjdG9yeTtcbiAgcHJpdmF0ZSBfZmFjdG9yeUV4cGFuZEFuaW1hdGlvbjogQW5pbWF0aW9uRmFjdG9yeTtcbiAgcHJpdmF0ZSBfcGxheWVyOiBBbmltYXRpb25QbGF5ZXI7XG4gIHByaXZhdGUgX3N0eWxlc0xvYWRlZCA9IGZhbHNlO1xuXG4gIHByaXZhdGUgX0NPTExBUFNFX0FDVElPTl9OQU1FID0gJ2NvbGxhcHNlJztcbiAgcHJpdmF0ZSBfRVhQQU5EX0FDVElPTl9OQU1FID0gJ2V4cGFuZCc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBfYnVpbGRlcjogQW5pbWF0aW9uQnVpbGRlclxuICApIHtcbiAgICB0aGlzLl9mYWN0b3J5Q29sbGFwc2VBbmltYXRpb24gPSBfYnVpbGRlci5idWlsZChjb2xsYXBzZUFuaW1hdGlvbik7XG4gICAgdGhpcy5fZmFjdG9yeUV4cGFuZEFuaW1hdGlvbiA9IF9idWlsZGVyLmJ1aWxkKGV4cGFuZEFuaW1hdGlvbik7XG4gIH1cblxuICBuZ0FmdGVyVmlld0NoZWNrZWQoKSB7XG4gICAgdGhpcy5fc3R5bGVzTG9hZGVkID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKiBhbGxvd3MgdG8gbWFudWFsbHkgdG9nZ2xlIGNvbnRlbnQgdmlzaWJpbGl0eSAqL1xuICB0b2dnbGUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNFeHBhbmRlZCkge1xuICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2hvdygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBhbGxvd3MgdG8gbWFudWFsbHkgaGlkZSBjb250ZW50ICovXG4gIGhpZGUoKTogdm9pZCB7XG4gICAgdGhpcy5pc0NvbGxhcHNpbmcgPSB0cnVlO1xuICAgIHRoaXMuaXNFeHBhbmRlZCA9IGZhbHNlO1xuICAgIHRoaXMuaXNDb2xsYXBzZWQgPSB0cnVlO1xuICAgIHRoaXMuaXNDb2xsYXBzaW5nID0gZmFsc2U7XG5cbiAgICB0aGlzLmNvbGxhcHNlcy5lbWl0KHRoaXMpO1xuXG4gICAgdGhpcy5hbmltYXRpb25SdW4odGhpcy5pc0FuaW1hdGVkLCB0aGlzLl9DT0xMQVBTRV9BQ1RJT05fTkFNRSkoKCkgPT4ge1xuICAgICAgdGhpcy5jb2xsYXBzZWQuZW1pdCh0aGlzKTtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsICdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICB9KTtcbiAgfVxuICAvKiogYWxsb3dzIHRvIG1hbnVhbGx5IHNob3cgY29sbGFwc2VkIGNvbnRlbnQgKi9cbiAgc2hvdygpOiB2b2lkIHtcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCAnZGlzcGxheScsIHRoaXMuX2Rpc3BsYXkpO1xuXG4gICAgdGhpcy5pc0NvbGxhcHNpbmcgPSB0cnVlO1xuICAgIHRoaXMuaXNFeHBhbmRlZCA9IHRydWU7XG4gICAgdGhpcy5pc0NvbGxhcHNlZCA9IGZhbHNlO1xuICAgIHRoaXMuaXNDb2xsYXBzaW5nID0gZmFsc2U7XG5cbiAgICB0aGlzLmV4cGFuZHMuZW1pdCh0aGlzKTtcblxuICAgIHRoaXMuYW5pbWF0aW9uUnVuKHRoaXMuaXNBbmltYXRlZCwgdGhpcy5fRVhQQU5EX0FDVElPTl9OQU1FKSgoKSA9PiB7XG4gICAgICB0aGlzLmV4cGFuZGVkLmVtaXQodGhpcyk7XG4gICAgfSk7XG4gIH1cblxuICBhbmltYXRpb25SdW4oaXNBbmltYXRlZDogYm9vbGVhbiwgYWN0aW9uOiBzdHJpbmcpIHtcbiAgICBpZiAoIWlzQW5pbWF0ZWQgfHwgIXRoaXMuX3N0eWxlc0xvYWRlZCkge1xuICAgICAgcmV0dXJuIChjYWxsYmFjazogKCkgPT4gdm9pZCkgPT4gY2FsbGJhY2soKTtcbiAgICB9XG5cbiAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCAnb3ZlcmZsb3cnLCAnaGlkZGVuJyk7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgJ2NvbGxhcHNlJyk7XG5cbiAgICBjb25zdCBmYWN0b3J5QW5pbWF0aW9uID0gKGFjdGlvbiA9PT0gdGhpcy5fRVhQQU5EX0FDVElPTl9OQU1FKVxuICAgICAgPyB0aGlzLl9mYWN0b3J5RXhwYW5kQW5pbWF0aW9uXG4gICAgICA6IHRoaXMuX2ZhY3RvcnlDb2xsYXBzZUFuaW1hdGlvbjtcblxuICAgIGlmICh0aGlzLl9wbGF5ZXIpIHtcbiAgICAgIHRoaXMuX3BsYXllci5kZXN0cm95KCk7XG4gICAgfVxuXG4gICAgdGhpcy5fcGxheWVyID0gZmFjdG9yeUFuaW1hdGlvbi5jcmVhdGUodGhpcy5fZWwubmF0aXZlRWxlbWVudCk7XG4gICAgdGhpcy5fcGxheWVyLnBsYXkoKTtcblxuICAgIHJldHVybiAoY2FsbGJhY2s6ICgpID0+IHZvaWQpID0+IHRoaXMuX3BsYXllci5vbkRvbmUoY2FsbGJhY2spO1xuICB9XG59XG4iXX0=