function PrimeNo(No1) {
    if (No1 % 1 == 0 && No1 % No1 == 0 && No1 % 2 != 0) {
        return true;
    }
    else {
        return false;
    }
}
var Value1 = 11;
var Result;
Result = PrimeNo(Value1);
if (Result == true) {
    console.log("It is Prime Number");
}
else {
    console.log("It is Not Prime number");
}
