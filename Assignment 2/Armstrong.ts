var ChkArmstrong=(Num:number):number=>{
    var Sum:number=0;
    var temp:number=0;
    temp=Num;
    while(temp>0){
        var digit:number=0;
        digit=temp%10;
        Sum=Sum+(digit*digit*digit);
        temp=temp/10;
    }
    return Sum;
}

var result:number=0;
var No1:number=153;
result=ChkArmstrong(No1);
 if(result==No1){
    console.log("It is a Armstrong number");
 }
 else
 {
    console.log("It is not a Armstrong number");
 }