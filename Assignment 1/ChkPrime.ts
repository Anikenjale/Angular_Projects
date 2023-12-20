function PrimeNo(No1:number): boolean
{
if(No1%1==0 && No1%No1==0 && No1%2!=0)
{
    return true;
}
else
{
    return false;
}
}
 var Value1:number=11;
 var Result:boolean;
 Result=PrimeNo(Value1);
 if(Result==true)
 {
    console.log("It is Prime Number");
 }
 else
 {
    console.log("It is Not Prime number");
 }
