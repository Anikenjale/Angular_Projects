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
