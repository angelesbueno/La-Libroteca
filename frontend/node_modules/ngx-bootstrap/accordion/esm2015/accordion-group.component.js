/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, HostBinding, Inject, Input, Output, EventEmitter } from '@angular/core';
import { isBs3 } from 'ngx-bootstrap/utils';
import { AccordionComponent } from './accordion.component';
/**
 * ### Accordion heading
 * Instead of using `heading` attribute on the `accordion-group`, you can use
 * an `accordion-heading` attribute on `any` element inside of a group that
 * will be used as group's header template.
 */
export class AccordionPanelComponent {
    /**
     * @param {?} accordion
     */
    constructor(accordion) {
        /**
         * turn on/off animation
         */
        this.isAnimated = false;
        /**
         * Emits when the opened state changes
         */
        this.isOpenChange = new EventEmitter();
        this._isOpen = false;
        this.accordion = accordion;
    }
    // Questionable, maybe .panel-open should be on child div.panel element?
    /**
     * Is accordion group open or closed. This property supports two-way binding
     * @return {?}
     */
    get isOpen() {
        return this._isOpen;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set isOpen(value) {
        if (value !== this.isOpen) {
            if (value) {
                this.accordion.closeOtherPanels(this);
            }
            this._isOpen = value;
            Promise.resolve(null).then(() => {
                this.isOpenChange.emit(value);
            })
                .catch((error) => {
                /* tslint:disable: no-console */
                console.log(error);
            });
        }
    }
    /**
     * @return {?}
     */
    get isBs3() {
        return isBs3();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.panelClass = this.panelClass || 'panel-default';
        this.accordion.addGroup(this);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.accordion.removeGroup(this);
    }
    /**
     * @return {?}
     */
    toggleOpen() {
        if (!this.isDisabled) {
            this.isOpen = !this.isOpen;
        }
    }
}
AccordionPanelComponent.decorators = [
    { type: Component, args: [{
                selector: 'accordion-group, accordion-panel',
                template: "<div class=\"panel card\" [ngClass]=\"panelClass\">\n  <div class=\"panel-heading card-header\" role=\"tab\"\n       (click)=\"toggleOpen()\">\n    <div class=\"panel-title\">\n      <div role=\"button\" class=\"accordion-toggle\"\n           [attr.aria-expanded]=\"isOpen\">\n        <button class=\"btn btn-link\" *ngIf=\"heading\" [ngClass]=\"{'text-muted': isDisabled}\">\n          {{ heading }}\n        </button>\n        <ng-content select=\"[accordion-heading]\"></ng-content>\n      </div>\n    </div>\n  </div>\n  <div class=\"panel-collapse collapse\" role=\"tabpanel\" [collapse]=\"!isOpen\" [isAnimated]=\"isAnimated\">\n    <div class=\"panel-body card-block card-body\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n</div>\n",
                host: {
                    class: 'panel',
                    style: 'display: block'
                }
            }] }
];
/** @nocollapse */
AccordionPanelComponent.ctorParameters = () => [
    { type: AccordionComponent, decorators: [{ type: Inject, args: [AccordionComponent,] }] }
];
AccordionPanelComponent.propDecorators = {
    heading: [{ type: Input }],
    panelClass: [{ type: Input }],
    isDisabled: [{ type: Input }],
    isOpenChange: [{ type: Output }],
    isOpen: [{ type: HostBinding, args: ['class.panel-open',] }, { type: Input }]
};
if (false) {
    /**
     * turn on/off animation
     * @type {?}
     */
    AccordionPanelComponent.prototype.isAnimated;
    /**
     * Clickable text in accordion's group header, check `accordion heading` below for using html in header
     * @type {?}
     */
    AccordionPanelComponent.prototype.heading;
    /**
     * Provides an ability to use Bootstrap's contextual panel classes
     * (`panel-primary`, `panel-success`, `panel-info`, etc...).
     * List of all available classes [available here]
     * (https://getbootstrap.com/docs/3.3/components/#panels-alternatives)
     * @type {?}
     */
    AccordionPanelComponent.prototype.panelClass;
    /**
     * if <code>true</code> — disables accordion group
     * @type {?}
     */
    AccordionPanelComponent.prototype.isDisabled;
    /**
     * Emits when the opened state changes
     * @type {?}
     */
    AccordionPanelComponent.prototype.isOpenChange;
    /**
     * @type {?}
     * @protected
     */
    AccordionPanelComponent.prototype._isOpen;
    /**
     * @type {?}
     * @protected
     */
    AccordionPanelComponent.prototype.accordion;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvYWNjb3JkaW9uLyIsInNvdXJjZXMiOlsiYWNjb3JkaW9uLWdyb3VwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUFFLFlBQVksRUFDL0UsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7Ozs7O0FBZ0IzRCxNQUFNLE9BQU8sdUJBQXVCOzs7O0lBK0NsQyxZQUF3QyxTQUE2Qjs7OztRQTdDckUsZUFBVSxHQUFHLEtBQUssQ0FBQzs7OztRQVlULGlCQUFZLEdBQTBCLElBQUksWUFBWSxFQUFFLENBQUM7UUE4QnpELFlBQU8sR0FBRyxLQUFLLENBQUM7UUFJeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7SUFDN0IsQ0FBQzs7Ozs7O0lBL0JELElBRUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDOzs7OztJQUVELElBQUksTUFBTSxDQUFDLEtBQWM7UUFDdkIsSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUN6QixJQUFJLEtBQUssRUFBRTtnQkFDVCxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3ZDO1lBQ0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7WUFDckIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO2dCQUM5QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNoQyxDQUFDLENBQUM7aUJBQ0MsS0FBSyxDQUFDLENBQUMsS0FBWSxFQUFFLEVBQUU7Z0JBQ3RCLGdDQUFnQztnQkFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNyQixDQUFDLENBQUMsQ0FBQztTQUNOO0lBQ0gsQ0FBQzs7OztJQUVELElBQUksS0FBSztRQUNQLE9BQU8sS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQzs7OztJQVNELFFBQVE7UUFDTixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLElBQUksZUFBZSxDQUFDO1FBQ3JELElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hDLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7OztJQUVELFVBQVU7UUFDUixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNwQixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUM1QjtJQUNILENBQUM7OztZQXhFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtDQUFrQztnQkFDNUMsMnZCQUErQztnQkFDL0MsSUFBSSxFQUFFO29CQUNKLEtBQUssRUFBRSxPQUFPO29CQUNkLEtBQUssRUFBRSxnQkFBZ0I7aUJBQ3hCO2FBQ0Y7Ozs7WUFmUSxrQkFBa0IsdUJBK0RaLE1BQU0sU0FBQyxrQkFBa0I7OztzQkEzQ3JDLEtBQUs7eUJBTUwsS0FBSzt5QkFFTCxLQUFLOzJCQUVMLE1BQU07cUJBSU4sV0FBVyxTQUFDLGtCQUFrQixjQUM5QixLQUFLOzs7Ozs7O0lBakJOLDZDQUFtQjs7Ozs7SUFFbkIsMENBQXlCOzs7Ozs7OztJQU16Qiw2Q0FBNEI7Ozs7O0lBRTVCLDZDQUE2Qjs7Ozs7SUFFN0IsK0NBQW1FOzs7OztJQThCbkUsMENBQTBCOzs7OztJQUMxQiw0Q0FBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsIEhvc3RCaW5kaW5nLCBJbmplY3QsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc0JzMyB9IGZyb20gJ25neC1ib290c3RyYXAvdXRpbHMnO1xuaW1wb3J0IHsgQWNjb3JkaW9uQ29tcG9uZW50IH0gZnJvbSAnLi9hY2NvcmRpb24uY29tcG9uZW50JztcblxuLyoqXG4gKiAjIyMgQWNjb3JkaW9uIGhlYWRpbmdcbiAqIEluc3RlYWQgb2YgdXNpbmcgYGhlYWRpbmdgIGF0dHJpYnV0ZSBvbiB0aGUgYGFjY29yZGlvbi1ncm91cGAsIHlvdSBjYW4gdXNlXG4gKiBhbiBgYWNjb3JkaW9uLWhlYWRpbmdgIGF0dHJpYnV0ZSBvbiBgYW55YCBlbGVtZW50IGluc2lkZSBvZiBhIGdyb3VwIHRoYXRcbiAqIHdpbGwgYmUgdXNlZCBhcyBncm91cCdzIGhlYWRlciB0ZW1wbGF0ZS5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYWNjb3JkaW9uLWdyb3VwLCBhY2NvcmRpb24tcGFuZWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vYWNjb3JkaW9uLWdyb3VwLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAncGFuZWwnLFxuICAgIHN0eWxlOiAnZGlzcGxheTogYmxvY2snXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgQWNjb3JkaW9uUGFuZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIC8qKiB0dXJuIG9uL29mZiBhbmltYXRpb24gKi9cbiAgaXNBbmltYXRlZCA9IGZhbHNlO1xuICAvKiogQ2xpY2thYmxlIHRleHQgaW4gYWNjb3JkaW9uJ3MgZ3JvdXAgaGVhZGVyLCBjaGVjayBgYWNjb3JkaW9uIGhlYWRpbmdgIGJlbG93IGZvciB1c2luZyBodG1sIGluIGhlYWRlciAqL1xuICBASW5wdXQoKSBoZWFkaW5nOiBzdHJpbmc7XG4gIC8qKiBQcm92aWRlcyBhbiBhYmlsaXR5IHRvIHVzZSBCb290c3RyYXAncyBjb250ZXh0dWFsIHBhbmVsIGNsYXNzZXNcbiAgICogKGBwYW5lbC1wcmltYXJ5YCwgYHBhbmVsLXN1Y2Nlc3NgLCBgcGFuZWwtaW5mb2AsIGV0Yy4uLikuXG4gICAqIExpc3Qgb2YgYWxsIGF2YWlsYWJsZSBjbGFzc2VzIFthdmFpbGFibGUgaGVyZV1cbiAgICogKGh0dHBzOi8vZ2V0Ym9vdHN0cmFwLmNvbS9kb2NzLzMuMy9jb21wb25lbnRzLyNwYW5lbHMtYWx0ZXJuYXRpdmVzKVxuICAgKi9cbiAgQElucHV0KCkgcGFuZWxDbGFzczogc3RyaW5nO1xuICAvKiogaWYgPGNvZGU+dHJ1ZTwvY29kZT4g4oCUIGRpc2FibGVzIGFjY29yZGlvbiBncm91cCAqL1xuICBASW5wdXQoKSBpc0Rpc2FibGVkOiBib29sZWFuO1xuICAvKiogRW1pdHMgd2hlbiB0aGUgb3BlbmVkIHN0YXRlIGNoYW5nZXMgKi9cbiAgQE91dHB1dCgpIGlzT3BlbkNoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8vIFF1ZXN0aW9uYWJsZSwgbWF5YmUgLnBhbmVsLW9wZW4gc2hvdWxkIGJlIG9uIGNoaWxkIGRpdi5wYW5lbCBlbGVtZW50P1xuICAvKiogSXMgYWNjb3JkaW9uIGdyb3VwIG9wZW4gb3IgY2xvc2VkLiBUaGlzIHByb3BlcnR5IHN1cHBvcnRzIHR3by13YXkgYmluZGluZyAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnBhbmVsLW9wZW4nKVxuICBASW5wdXQoKVxuICBnZXQgaXNPcGVuKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9pc09wZW47XG4gIH1cblxuICBzZXQgaXNPcGVuKHZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYgKHZhbHVlICE9PSB0aGlzLmlzT3Blbikge1xuICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuYWNjb3JkaW9uLmNsb3NlT3RoZXJQYW5lbHModGhpcyk7XG4gICAgICB9XG4gICAgICB0aGlzLl9pc09wZW4gPSB2YWx1ZTtcbiAgICAgIFByb21pc2UucmVzb2x2ZShudWxsKS50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5pc09wZW5DaGFuZ2UuZW1pdCh2YWx1ZSk7XG4gICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yOiBFcnJvcikgPT4ge1xuICAgICAgICAgIC8qIHRzbGludDpkaXNhYmxlOiBuby1jb25zb2xlICovXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBnZXQgaXNCczMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGlzQnMzKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgX2lzT3BlbiA9IGZhbHNlO1xuICBwcm90ZWN0ZWQgYWNjb3JkaW9uOiBBY2NvcmRpb25Db21wb25lbnQ7XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChBY2NvcmRpb25Db21wb25lbnQpIGFjY29yZGlvbjogQWNjb3JkaW9uQ29tcG9uZW50KSB7XG4gICAgdGhpcy5hY2NvcmRpb24gPSBhY2NvcmRpb247XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnBhbmVsQ2xhc3MgPSB0aGlzLnBhbmVsQ2xhc3MgfHwgJ3BhbmVsLWRlZmF1bHQnO1xuICAgIHRoaXMuYWNjb3JkaW9uLmFkZEdyb3VwKHRoaXMpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5hY2NvcmRpb24ucmVtb3ZlR3JvdXAodGhpcyk7XG4gIH1cblxuICB0b2dnbGVPcGVuKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5pc0Rpc2FibGVkKSB7XG4gICAgICB0aGlzLmlzT3BlbiA9ICF0aGlzLmlzT3BlbjtcbiAgICB9XG4gIH1cbn1cbiJdfQ==