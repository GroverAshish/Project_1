const service = require('../Services/user');

// Validation
const sip = async(req,res)=>{
     let data = req.body;
     
    //  Check If all inputs are numerical or not
    // Check if all inputs are more than zero or not
    if(isNaN(data.period) || isNaN(data.rate) || isNaN(data.monInvest))
    {
        res.status(400).send('Invalid Inputs');
    }   
    else if(data.period<=0 || data.rate<=0 || data.monInvest<=0)
    {
        res.status(400).send('Invalid Inputs');
    }
    else
    res.status(200).send(await service.sip_ctr(data));

}

module.exports = {
    sip
}