function AreaofCircle(R:number):number
{
    var Result:number=0;
    var Pi:number=3.14;
    Result=Pi*(R*R);
    return Result;
}   

var Area:number=0;
var Radius:number=5;
Area=AreaofCircle(Radius);

console.log("Area of circle is "+Area);