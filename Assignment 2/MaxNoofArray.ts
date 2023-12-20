function Maximum(A1:number[]):number
{
    var MaxNo:number=0;
    var i:number=0;
    for(i=0;i<A1.length;i++)
    {
        if(MaxNo<A1[i])
        {
            MaxNo=A1[i];
        }
    }
    return MaxNo;
}

var Arr1:number[]=[23,89,6,29,56,45,77,32];
var Max:number=0;
Max=Maximum(Arr1);

console.log("MAximun no is "+Max);