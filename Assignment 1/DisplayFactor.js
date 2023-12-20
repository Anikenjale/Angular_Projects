//var No1:number=20;
//for(var i:number=0;i<No1;i++)
//{
//    if(No1%i==0)
//    {
//        console.log(i);
//    }
//}
function Factors(Value1) {
    var temp = 0;
    for (var j = 0; j < Value1; j++) {
        if (Value1 % j == 0) {
            console.log(j);
        }
    }
}
var No1 = 20;
Factors(No1);
