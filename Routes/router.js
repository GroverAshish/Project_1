const express = require('express');
const router = express.Router();
const path = require('path');
const bodyparser = require('body-parser');

const cors = require('cors');

router.use(cors());
router.use(bodyparser.json());

router.post('/', (req,res)=>{
   
    var months = req.body.period*12;
    var rate = req.body.rate/12;
    var monInvest = req.body.monInvest;
    var sum = 0;
    var Return = 0;

    for(var i = 1;i<=months;i++)
    {
        sum = monInvest*(Math.pow((1 + rate/100),i)); 
        Return += sum; 
    }

    res.status(200).json(Return);

})

module.exports = router;