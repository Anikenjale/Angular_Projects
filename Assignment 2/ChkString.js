function ChkString(s1, s2) {
    var result = s1.includes(s2);
    return result;
}
var str = "Pune kothrud Marvellous Infosystem";
var str1 = "Marvellous";
var Ans;
Ans = ChkString(str, str1);
if (Ans == true) {
    console.log("String contains Marvelous in it");
}
else {
    console.log("String does not contains Marvelous in it");
}
