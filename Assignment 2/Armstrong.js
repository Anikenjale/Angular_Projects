var Num = 153;
var Sum = 0;
var temp = 0;
temp = Num;
while (temp > 0) {
    var digit = 0;
    digit = temp % 10;
    Sum = Sum + (digit * digit * digit);
    temp = temp / 10;
}
if (Sum == Num) {
    console.log("It is a Armstrong number");
}
else {
    console.log("It is not a Armstrong number");
}
