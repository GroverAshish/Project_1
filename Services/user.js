function sip_srv(period, rate, monInvest){
   var sum=0;
   var Result = 0;

   for(var i = 1;i<=period;i++)
   {
       sum = monInvest*(Math.pow((1 + rate/100),i)); 
       Result += sum; 
   }
   return Result;

}
module.exports = {
    sip_srv
}