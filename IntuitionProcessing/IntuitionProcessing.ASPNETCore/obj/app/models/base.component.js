"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BaseComponent = (function () {
    function BaseComponent() {
    }
    Object.defineProperty(BaseComponent.prototype, "error", {
        get: function () {
            return this._error;
        },
        set: function (value) {
            this._error = value;
            this.isError = value !== undefined && value !== null && value != "";
        },
        enumerable: true,
        configurable: true
    });
    return BaseComponent;
}());
exports.BaseComponent = BaseComponent;
//# sourceMappingURL=base.component.js.map