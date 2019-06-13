/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { AnimationBuilder } from '@angular/animations';
// todo: add animations when https://github.com/angular/angular/issues/9947 solved
import { Directive, ElementRef, EventEmitter, HostBinding, Input, Output, Renderer2 } from '@angular/core';
import { collapseAnimation, expandAnimation } from './collapse-animations';
var CollapseDirective = /** @class */ (function () {
    function CollapseDirective(_el, _renderer, _builder) {
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
    Object.defineProperty(CollapseDirective.prototype, "display", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
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
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CollapseDirective.prototype, "collapse", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isExpanded;
        },
        /** A flag indicating visibility of content (shown or hidden) */
        set: /**
         * A flag indicating visibility of content (shown or hidden)
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.isExpanded = value;
            this.toggle();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CollapseDirective.prototype.ngAfterViewChecked = /**
     * @return {?}
     */
    function () {
        this._stylesLoaded = true;
    };
    /** allows to manually toggle content visibility */
    /**
     * allows to manually toggle content visibility
     * @return {?}
     */
    CollapseDirective.prototype.toggle = /**
     * allows to manually toggle content visibility
     * @return {?}
     */
    function () {
        if (this.isExpanded) {
            this.hide();
        }
        else {
            this.show();
        }
    };
    /** allows to manually hide content */
    /**
     * allows to manually hide content
     * @return {?}
     */
    CollapseDirective.prototype.hide = /**
     * allows to manually hide content
     * @return {?}
     */
    function () {
        var _this = this;
        this.isCollapsing = true;
        this.isExpanded = false;
        this.isCollapsed = true;
        this.isCollapsing = false;
        this.collapses.emit(this);
        this.animationRun(this.isAnimated, this._COLLAPSE_ACTION_NAME)(function () {
            _this.collapsed.emit(_this);
            _this._renderer.setStyle(_this._el.nativeElement, 'display', 'none');
        });
    };
    /** allows to manually show collapsed content */
    /**
     * allows to manually show collapsed content
     * @return {?}
     */
    CollapseDirective.prototype.show = /**
     * allows to manually show collapsed content
     * @return {?}
     */
    function () {
        var _this = this;
        this._renderer.setStyle(this._el.nativeElement, 'display', this._display);
        this.isCollapsing = true;
        this.isExpanded = true;
        this.isCollapsed = false;
        this.isCollapsing = false;
        this.expands.emit(this);
        this.animationRun(this.isAnimated, this._EXPAND_ACTION_NAME)(function () {
            _this.expanded.emit(_this);
        });
    };
    /**
     * @param {?} isAnimated
     * @param {?} action
     * @return {?}
     */
    CollapseDirective.prototype.animationRun = /**
     * @param {?} isAnimated
     * @param {?} action
     * @return {?}
     */
    function (isAnimated, action) {
        var _this = this;
        if (!isAnimated || !this._stylesLoaded) {
            return function (callback) { return callback(); };
        }
        this._renderer.setStyle(this._el.nativeElement, 'overflow', 'hidden');
        this._renderer.addClass(this._el.nativeElement, 'collapse');
        /** @type {?} */
        var factoryAnimation = (action === this._EXPAND_ACTION_NAME)
            ? this._factoryExpandAnimation
            : this._factoryCollapseAnimation;
        if (this._player) {
            this._player.destroy();
        }
        this._player = factoryAnimation.create(this._el.nativeElement);
        this._player.play();
        return function (callback) { return _this._player.onDone(callback); };
    };
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
    CollapseDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: AnimationBuilder }
    ]; };
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
    return CollapseDirective;
}());
export { CollapseDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGFwc2UuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9jb2xsYXBzZS8iLCJzb3VyY2VzIjpbImNvbGxhcHNlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLGdCQUFnQixFQUdqQixNQUFNLHFCQUFxQixDQUFDOztBQUc3QixPQUFPLEVBRUwsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osV0FBVyxFQUNYLEtBQUssRUFDTCxNQUFNLEVBQ04sU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFDTCxpQkFBaUIsRUFDakIsZUFBZSxFQUNoQixNQUFNLHVCQUF1QixDQUFDO0FBRS9CO0lBcUVFLDJCQUNVLEdBQWUsRUFDZixTQUFvQixFQUM1QixRQUEwQjtRQUZsQixRQUFHLEdBQUgsR0FBRyxDQUFZO1FBQ2YsY0FBUyxHQUFULFNBQVMsQ0FBVzs7OztRQTlEcEIsY0FBUyxHQUFvQyxJQUFJLFlBQVksRUFBRSxDQUFDOzs7O1FBRWhFLGNBQVMsR0FBb0MsSUFBSSxZQUFZLEVBQUUsQ0FBQzs7OztRQUVoRSxhQUFRLEdBQW9DLElBQUksWUFBWSxFQUFFLENBQUM7Ozs7UUFFL0QsWUFBTyxHQUFvQyxJQUFJLFlBQVksRUFBRSxDQUFDOztRQU14RSxlQUFVLEdBQUcsSUFBSSxDQUFDOztRQUVlLGdCQUFXLEdBQUcsS0FBSyxDQUFDOztRQUV0QixlQUFVLEdBQUcsSUFBSSxDQUFDOztRQUVoQixpQkFBWSxHQUFHLEtBQUssQ0FBQzs7OztRQXFCN0MsZUFBVSxHQUFHLEtBQUssQ0FBQztRQVlwQixhQUFRLEdBQUcsT0FBTyxDQUFDO1FBSW5CLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBRXRCLDBCQUFxQixHQUFHLFVBQVUsQ0FBQztRQUNuQyx3QkFBbUIsR0FBRyxRQUFRLENBQUM7UUFPckMsSUFBSSxDQUFDLHlCQUF5QixHQUFHLFFBQVEsQ0FBQyxL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O3FCQUMzQjtpQkFDRjs7OztnQkFuQkMsVUFBVTtnQkFLVixTQUFTO2dCQWRULGdCQUFnQjs7OzRCQStCZixNQUFNOzRCQUVOLE1BQU07MkJBRU4sTUFBTTswQkFFTixNQUFNOzZCQUdOLFdBQVcsU0FBQyxVQUFVLGNBQ3RCLFdBQVcsU0FBQyxZQUFZLGNBQ3hCLFdBQVcsU0FBQyxvQkFBb0I7OEJBR2hDLFdBQVcsU0FBQyxrQkFBa0I7NkJBRTlCLFdBQVcsU0FBQyxnQkFBZ0I7K0JBRTVCLFdBQVcsU0FBQyxrQkFBa0I7MEJBRTlCLEtBQUs7NkJBbUJMLEtBQUs7MkJBRUwsS0FBSzs7SUE0RlIsd0JBQUM7Q0FBQSxBQTlJRCxJQThJQztTQXZJWSxpQkFBaUI7Ozs7OztJQUU1QixzQ0FBMEU7Ozs7O0lBRTFFLHNDQUEwRTs7Ozs7SUFFMUUscUNBQXlFOzs7OztJQUV6RSxvQ0FBd0U7O0lBR3hFLHVDQUdrQjs7SUFFbEIsd0NBQXFEOztJQUVyRCx1Q0FBaUQ7O0lBRWpELHlDQUFzRDs7Ozs7SUFxQnRELHVDQUE0Qjs7Ozs7SUFZNUIscUNBQTJCOzs7OztJQUMzQixzREFBb0Q7Ozs7O0lBQ3BELG9EQUFrRDs7Ozs7SUFDbEQsb0NBQWlDOzs7OztJQUNqQywwQ0FBOEI7Ozs7O0lBRTlCLGtEQUEyQzs7Ozs7SUFDM0MsZ0RBQXVDOzs7OztJQUdyQyxnQ0FBdUI7Ozs7O0lBQ3ZCLHNDQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFuaW1hdGlvbkJ1aWxkZXIsXG4gIEFuaW1hdGlvbkZhY3RvcnksXG4gIEFuaW1hdGlvblBsYXllclxufSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcblxuLy8gdG9kbzogYWRkIGFuaW1hdGlvbnMgd2hlbiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy85OTQ3IHNvbHZlZFxuaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3Q2hlY2tlZCxcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7XG4gIGNvbGxhcHNlQW5pbWF0aW9uLFxuICBleHBhbmRBbmltYXRpb25cbn0gZnJvbSAnLi9jb2xsYXBzZS1hbmltYXRpb25zJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2NvbGxhcHNlXScsXG4gIGV4cG9ydEFzOiAnYnMtY29sbGFwc2UnLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5jb2xsYXBzZV0nOiAndHJ1ZSdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBDb2xsYXBzZURpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0NoZWNrZWQge1xuICAvKiogVGhpcyBldmVudCBmaXJlcyBhcyBzb29uIGFzIGNvbnRlbnQgY29sbGFwc2VzICovXG4gIEBPdXRwdXQoKSBjb2xsYXBzZWQ6IEV2ZW50RW1pdHRlcjxDb2xsYXBzZURpcmVjdGl2ZT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIC8qKiBUaGlzIGV2ZW50IGZpcmVzIHdoZW4gY29sbGFwc2luZyBpcyBzdGFydGVkICovXG4gIEBPdXRwdXQoKSBjb2xsYXBzZXM6IEV2ZW50RW1pdHRlcjxDb2xsYXBzZURpcmVjdGl2ZT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIC8qKiBUaGlzIGV2ZW50IGZpcmVzIGFzIHNvb24gYXMgY29udGVudCBiZWNvbWVzIHZpc2libGUgKi9cbiAgQE91dHB1dCgpIGV4cGFuZGVkOiBFdmVudEVtaXR0ZXI8Q29sbGFwc2VEaXJlY3RpdmU+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAvKiogVGhpcyBldmVudCBmaXJlcyB3aGVuIGV4cGFuc2lvbiBpcyBzdGFydGVkICovXG4gIEBPdXRwdXQoKSBleHBhbmRzOiBFdmVudEVtaXR0ZXI8Q29sbGFwc2VEaXJlY3RpdmU+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8vIHNob3duXG4gIEBIb3N0QmluZGluZygnY2xhc3MuaW4nKVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNob3cnKVxuICBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS1leHBhbmRlZCcpXG4gIGlzRXhwYW5kZWQgPSB0cnVlO1xuICAvLyBoaWRkZW5cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtaGlkZGVuJykgaXNDb2xsYXBzZWQgPSBmYWxzZTtcbiAgLy8gc3RhbGUgc3RhdGVcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5jb2xsYXBzZScpIGlzQ29sbGFwc2UgPSB0cnVlO1xuICAvLyBhbmltYXRpb24gc3RhdGVcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5jb2xsYXBzaW5nJykgaXNDb2xsYXBzaW5nID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgc2V0IGRpc3BsYXkodmFsdWU6IHN0cmluZykge1xuICAgIGlmICghdGhpcy5pc0FuaW1hdGVkKSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCAnZGlzcGxheScsIHZhbHVlKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX2Rpc3BsYXkgPSB2YWx1ZTtcblxuICAgIGlmICh2YWx1ZSA9PT0gJ25vbmUnKSB7XG4gICAgICB0aGlzLmhpZGUoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc2hvdygpO1xuICB9XG4gIC8qKiB0dXJuIG9uL29mZiBhbmltYXRpb24gKi9cbiAgQElucHV0KCkgaXNBbmltYXRlZCA9IGZhbHNlO1xuICAvKiogQSBmbGFnIGluZGljYXRpbmcgdmlzaWJpbGl0eSBvZiBjb250ZW50IChzaG93biBvciBoaWRkZW4pICovXG4gIEBJbnB1dCgpXG4gIHNldCBjb2xsYXBzZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuaXNFeHBhbmRlZCA9IHZhbHVlO1xuICAgIHRoaXMudG9nZ2xlKCk7XG4gIH1cblxuICBnZXQgY29sbGFwc2UoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaXNFeHBhbmRlZDtcbiAgfVxuXG4gIHByaXZhdGUgX2Rpc3BsYXkgPSAnYmxvY2snO1xuICBwcml2YXRlIF9mYWN0b3J5Q29sbGFwc2VBbmltYXRpb246IEFuaW1hdGlvbkZhY3Rvcnk7XG4gIHByaXZhdGUgX2ZhY3RvcnlFeHBhbmRBbmltYXRpb246IEFuaW1hdGlvbkZhY3Rvcnk7XG4gIHByaXZhdGUgX3BsYXllcjogQW5pbWF0aW9uUGxheWVyO1xuICBwcml2YXRlIF9zdHlsZXNMb2FkZWQgPSBmYWxzZTtcblxuICBwcml2YXRlIF9DT0xMQVBTRV9BQ1RJT05fTkFNRSA9ICdjb2xsYXBzZSc7XG4gIHByaXZhdGUgX0VYUEFORF9BQ1RJT05fTkFNRSA9ICdleHBhbmQnO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgX2J1aWxkZXI6IEFuaW1hdGlvbkJ1aWxkZXJcbiAgKSB7XG4gICAgdGhpcy5fZmFjdG9yeUNvbGxhcHNlQW5pbWF0aW9uID0gX2J1aWxkZXIuYnVpbGQoY29sbGFwc2VBbmltYXRpb24pO1xuICAgIHRoaXMuX2ZhY3RvcnlFeHBhbmRBbmltYXRpb24gPSBfYnVpbGRlci5idWlsZChleHBhbmRBbmltYXRpb24pO1xuICB9XG5cbiAgbmdBZnRlclZpZXdDaGVja2VkKCkge1xuICAgIHRoaXMuX3N0eWxlc0xvYWRlZCA9IHRydWU7XG4gIH1cblxuICAvKiogYWxsb3dzIHRvIG1hbnVhbGx5IHRvZ2dsZSBjb250ZW50IHZpc2liaWxpdHkgKi9cbiAgdG9nZ2xlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzRXhwYW5kZWQpIHtcbiAgICAgIHRoaXMuaGlkZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNob3coKTtcbiAgICB9XG4gIH1cblxuICAvKiogYWxsb3dzIHRvIG1hbnVhbGx5IGhpZGUgY29udGVudCAqL1xuICBoaWRlKCk6IHZvaWQge1xuICAgIHRoaXMuaXNDb2xsYXBzaW5nID0gdHJ1ZTtcbiAgICB0aGlzLmlzRXhwYW5kZWQgPSBmYWxzZTtcbiAgICB0aGlzLmlzQ29sbGFwc2VkID0gdHJ1ZTtcbiAgICB0aGlzLmlzQ29sbGFwc2luZyA9IGZhbHNlO1xuXG4gICAgdGhpcy5jb2xsYXBzZXMuZW1pdCh0aGlzKTtcblxuICAgIHRoaXMuYW5pbWF0aW9uUnVuKHRoaXMuaXNBbmltYXRlZCwgdGhpcy5fQ09MTEFQU0VfQUNUSU9OX05BTUUpKCgpID0+IHtcbiAgICAgIHRoaXMuY29sbGFwc2VkLmVtaXQodGhpcyk7XG4gICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCAnZGlzcGxheScsICdub25lJyk7XG4gICAgfSk7XG4gIH1cbiAgLyoqIGFsbG93cyB0byBtYW51YWxseSBzaG93IGNvbGxhcHNlZCBjb250ZW50ICovXG4gIHNob3coKTogdm9pZCB7XG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZWwubmF0aXZlRWxlbWVudCwgJ2Rpc3BsYXknLCB0aGlzLl9kaXNwbGF5KTtcblxuICAgIHRoaXMuaXNDb2xsYXBzaW5nID0gdHJ1ZTtcbiAgICB0aGlzLmlzRXhwYW5kZWQgPSB0cnVlO1xuICAgIHRoaXMuaXNDb2xsYXBzZWQgPSBmYWxzZTtcbiAgICB0aGlzLmlzQ29sbGFwc2luZyA9IGZhbHNlO1xuXG4gICAgdGhpcy5leHBhbmRzLmVtaXQodGhpcyk7XG5cbiAgICB0aGlzLmFuaW1hdGlvblJ1bih0aGlzLmlzQW5pbWF0ZWQsIHRoaXMuX0VYUEFORF9BQ1RJT05fTkFNRSkoKCkgPT4ge1xuICAgICAgdGhpcy5leHBhbmRlZC5lbWl0KHRoaXMpO1xuICAgIH0pO1xuICB9XG5cbiAgYW5pbWF0aW9uUnVuKGlzQW5pbWF0ZWQ6IGJvb2xlYW4sIGFjdGlvbjogc3RyaW5nKSB7XG4gICAgaWYgKCFpc0FuaW1hdGVkIHx8ICF0aGlzLl9zdHlsZXNMb2FkZWQpIHtcbiAgICAgIHJldHVybiAoY2FsbGJhY2s6ICgpID0+IHZvaWQpID0+IGNhbGxiYWNrKCk7XG4gICAgfVxuXG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZWwubmF0aXZlRWxlbWVudCwgJ292ZXJmbG93JywgJ2hpZGRlbicpO1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsICdjb2xsYXBzZScpO1xuXG4gICAgY29uc3QgZmFjdG9yeUFuaW1hdGlvbiA9IChhY3Rpb24gPT09IHRoaXMuX0VYUEFORF9BQ1RJT05fTkFNRSlcbiAgICAgID8gdGhpcy5fZmFjdG9yeUV4cGFuZEFuaW1hdGlvblxuICAgICAgOiB0aGlzLl9mYWN0b3J5Q29sbGFwc2VBbmltYXRpb247XG5cbiAgICBpZiAodGhpcy5fcGxheWVyKSB7XG4gICAgICB0aGlzLl9wbGF5ZXIuZGVzdHJveSgpO1xuICAgIH1cblxuICAgIHRoaXMuX3BsYXllciA9IGZhY3RvcnlBbmltYXRpb24uY3JlYXRlKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQpO1xuICAgIHRoaXMuX3BsYXllci5wbGF5KCk7XG5cbiAgICByZXR1cm4gKGNhbGxiYWNrOiAoKSA9PiB2b2lkKSA9PiB0aGlzLl9wbGF5ZXIub25Eb25lKGNhbGxiYWNrKTtcbiAgfVxufVxuIl19