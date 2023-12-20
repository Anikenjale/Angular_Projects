function Addition(A1:number[]):number
{
    var i:number=0;
    var Sum:number=0;
    for(i=0;i<A1.length;i++)
    {
        Sum=Sum+A1[i];
    }
    return Sum;
}

var Result:number=0;
var Nummbers:number[]=[23,6,7,4,5,7];

Result=Addition(Nummbers);

console.log("Summunation of Numbers="+Result);