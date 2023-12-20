function Maximum(Value1, Value2, Value3) {
    var temp = 0;
    if (Value1 > Value2 && Value1 > Value3) {
        temp = Value1;
    }
    else if (Value2 > Value1 && Value2 > Value3) {
        temp = Value2;
    }
    else {
        temp = Value3;
    }
    return temp;
}
var No1 = 23;
var No2 = 89;
var No3 = 6;
var MaxNo = 0;
MaxNo = Maximum(No1, No2, No3);
console.log("Maximum no is : " + MaxNo);
