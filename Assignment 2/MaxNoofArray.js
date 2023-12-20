function Maximum(A1) {
    var MaxNo = 0;
    var i = 0;
    for (i = 0; i < A1.length; i++) {
        if (MaxNo < A1[i]) {
            MaxNo = A1[i];
        }
    }
    return MaxNo;
}
var Arr1 = [23, 89, 6, 29, 56, 45, 77, 32];
var Max = 0;
Max = Maximum(Arr1);
console.log("MAximun no is " + Max);
