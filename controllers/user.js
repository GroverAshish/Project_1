module.exports.sip_ctr = function(req,res){

    var period = req.body.period;
    var rate = req.body.rate;
    var monInvest = req.body.monInvest;

    // Validation
    if(!isNaN(period) && !isNaN(rate) && !isNaN(monInvest))
    {
        if(period > 0 && rate > 0 && monInvest > 0)
        {
            return true;
        }
        return false;
    } 
    
    
    return false;
        
}
