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