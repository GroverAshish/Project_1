var srv = require('../Services/user');

const sip_ctr = (req, res)=>{
    var period = req.body.period*12;
    var rate = req.body.rate/12;
    var monInvest = req.body.monInvest;
    if(!isNaN(period) && !isNaN(rate) && !isNaN(monInvest))
    {
        if(period > 0 && rate > 0 && monInvest > 0)
        {
            var Result = srv.sip_srv(period, rate, monInvest);
            res.status(200).json(Result);
        }
        res.status(400).send("Incorrect Value Entered");
    }
    res.status(400).send("Incorrect Value Entered");

}

module.exports = {
    sip_ctr
}