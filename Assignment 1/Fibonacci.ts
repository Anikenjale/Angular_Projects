function Fibonacci(No1:number):void
{
    var Value1:number=0;
    var Value2:number=1;
    var Value3:number=0;
    for(var i:number=1;i<=No1;i++){
        if(Value1<=No1){
            console.log(Value1);
            Value3=Value1+Value2;
            Value1=Value2;
            Value2=Value3;
        }
        else{
            break;
        }
        }
    }
var Num:number=21;
Fibonacci(Num);