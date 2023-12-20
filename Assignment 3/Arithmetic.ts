class Arithmetic{
    Num1:number;
    Num2:number;

    constructor(A:number,B:number)
    {
        this.Num1=A;
        this.Num2=B;
    }

    Addition():number
    {
        var Add:number=0;
        Add=this.Num1+this.Num2;
        return Add;
    }
    Subtraction():number
    {
        var Sub:number;
        Sub=this.Num1-this.Num2;
        return Sub;
    }
    Multification():number
    {
        var Mul:number=0
        Mul=this.Num1*this.Num2;
        return Mul;
    }

    Divide():number
    {
        var Div:number=0;
        Div=this.Num1/this.Num2;
        return Div;
    }
}

var Obj1=new Arithmetic(10,5);
var Obj2=new Arithmetic(40,20);

var Result:number=0;
Result=Obj1.Addition();
console.log("Addition is:"+Result);
Result=Obj1.Subtraction();
console.log("Subtraction is:"+Result);
Result=Obj1.Multification();
console.log("Multification is:"+Result);
Result=Obj1.Divide();
console.log("Division is:"+Result);


Result=Obj2.Addition();
console.log("Addition is:"+Result);
Result=Obj2.Subtraction();
console.log("Subtraction is:"+Result);
Result=Obj2.Multification();
console.log("Multification is:"+Result);
Result=Obj2.Divide();
console.log("Division is:"+Result);
