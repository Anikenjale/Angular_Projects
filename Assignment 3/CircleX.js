var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Circle = /** @class */ (function () {
    function Circle(R) {
        this.Radius = R;
    }
    Circle.prototype.Area = function () {
        var pi = 3.14;
        var CirArea = pi * (this.Radius * this.Radius);
        return CirArea;
    };
    return Circle;
}());
var Obj = new Circle(23);
var Obj5 = new Circle(5);
var Result = 0;
Result = Obj.Area();
console.log("Area of circle:" + Result);
Result = Obj5.Area();
console.log("Area of circle:" + Result);
var CircleX = /** @class */ (function (_super) {
    __extends(CircleX, _super);
    function CircleX() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CircleX.prototype.CircumFer = function () {
        var Pi = 3.14;
        var CirFer = 0;
        CirFer = 2 * Pi * this.Radius;
        return CirFer;
    };
    return CircleX;
}(Circle));
var Obj6 = new CircleX(7);
var Obj7 = new CircleX(9);
var Result = 0;
Result = Obj6.CircumFer();
console.log("Circumference of Circle :" + Result);
Result = Obj7.CircumFer();
console.log("Circumference of Circle :" + Result);
