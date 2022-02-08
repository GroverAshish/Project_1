async function sip_ctr(data){
    
    // Calculation of Total Return
    let months = data.period*12;
    let rate = data.rate/12;
    let monInvest = data.monInvest;
    var sum = 0;
    var Return = 0;
    let graph = [];
    

    for(var i = 1; i<=months; i++)
    {
        sum = monInvest*(Math.pow((1 + rate/100),i)); 
        Return += sum; 
        if(i%12 == 0)
        {
            let obj = {
                "year": i/12,
                "return": Return
            };
            graph.push(obj);
        }
       
    }
    
    let Result = {
        "Data": data,
        "Graph": graph
    };

    return Result;

}

module.exports = {
    sip_ctr
}

