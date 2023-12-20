function AreaofCircle(R) {
    var Result = 0;
    var Pi = 3.14;
    Result = Pi * (R * R);
    return Result;
}
var Area = 0;
var Radius = 5;
Area = AreaofCircle(Radius);
console.log("Area of circle is " + Area);
