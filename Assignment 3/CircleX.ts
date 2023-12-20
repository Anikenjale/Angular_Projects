class Circle{
    
    Radius:number;

    constructor(R:number)
    {
        this.Radius=R;
    }

    Area():number{
        var pi:number=3.14;
        var CirArea:number=pi*(this.Radius*this.Radius);
        return CirArea;
    }
}

var Obj=new Circle(23);
var Obj5=new Circle(5);


var Result:number=0;
Result=Obj.Area()
console.log("Area of circle:"+Result);

Result=Obj5.Area()
console.log("Area of circle:"+Result);


class CircleX extends Circle
{
    CircumFer():number
    {
        var Pi:number=3.14;
        var CirFer:number=0;
        CirFer=2*Pi*this.Radius;
        return CirFer;
    }
}

var Obj6=new CircleX(7);
var Obj7=new CircleX(9);

var Result:number=0;

Result=Obj6.CircumFer();
console.log("Circumference of Circle :"+Result);
Result=Obj7.CircumFer();
console.log("Circumference of Circle :"+Result);
