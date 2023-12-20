var Arithmetic = /** @class */ (function () {
    function Arithmetic(A, B) {
        this.Num1 = A;
        this.Num2 = B;
    }
    Arithmetic.prototype.Addition = function () {
        var Add = 0;
        Add = this.Num1 + this.Num2;
        return Add;
    };
    Arithmetic.prototype.Subtraction = function () {
        var Sub;
        Sub = this.Num1 - this.Num2;
        return Sub;
    };
    Arithmetic.prototype.Multification = function () {
        var Mul = 0;
        Mul = this.Num1 * this.Num2;
        return Mul;
    };
    Arithmetic.prototype.Divide = function () {
        var Div = 0;
        Div = this.Num1 / this.Num2;
        return Div;
    };
    return Arithmetic;
}());
var Obj1 = new Arithmetic(10, 5);
var Obj2 = new Arithmetic(40, 20);
var Result = 0;
Result = Obj1.Addition();
console.log("Addition is:" + Result);
Result = Obj1.Subtraction();
console.log("Subtraction is:" + Result);
Result = Obj1.Multification();
console.log("Multification is:" + Result);
Result = Obj1.Divide();
console.log("Division is:" + Result);
Result = Obj2.Addition();
console.log("Addition is:" + Result);
Result = Obj2.Subtraction();
console.log("Subtraction is:" + Result);
Result = Obj2.Multification();
console.log("Multification is:" + Result);
Result = Obj2.Divide();
console.log("Division is:" + Result);
