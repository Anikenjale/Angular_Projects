function Maximum(A1:number[]):number[]
{
    var temp:number=0;
    var i:number=0;
    var j:number=0;
    for(i=0;i<A1.length;i++)
    {
        for(j=i+1;j<A1.length;j++)
        {
            if(A1[i]<A1[j])
            {
                temp=A1[i];
                A1[i]=A1[j];
                A1[j]=temp;
            }
        }
    }
    return A1;
}

var Arr1:number[]=[23,89,6,29,56,45,77,32];
var AcArr:number[];

AcArr=Maximum(Arr1);

console.log("Second Maximum no is "+AcArr[1]);