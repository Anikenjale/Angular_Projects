function ChkString(s1:string,s2:string):boolean
{
   var result=s1.includes(s2);
   return result;
    
}

var str:string="Pune kothrud Marvellous Infosystem";
var str1:string="Marvellous";

var Ans:boolean;
Ans=ChkString(str,str1);

if(Ans==true)
{
    console.log("String contains Marvellous in it");
}
else
{
    console.log("String does not contains Marvellous in it");
}