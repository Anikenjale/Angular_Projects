function Fibonacci(No1) {
    var Value1 = 0;
    var Value2 = 1;
    var Value3 = 0;
    for (var i = 1; i <= No1; i++) {
        if (Value1 <= No1) {
            console.log(Value1);
            Value3 = Value1 + Value2;
            Value1 = Value2;
            Value2 = Value3;
        }
        else {
            break;
        }
    }
}
var Num = 21;
Fibonacci(Num);
