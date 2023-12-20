function Addition(A1) {
    var i = 0;
    var Sum = 0;
    for (i = 0; i < A1.length; i++) {
        Sum = Sum + A1[i];
    }
    return Sum;
}
var Result = 0;
var Nummbers = [23, 6, 7, 4, 5, 7];
Result = Addition(Nummbers);
console.log("Summunation of Numbers=" + Result);
