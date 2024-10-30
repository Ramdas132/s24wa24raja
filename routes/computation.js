var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  let x=req.query.x ? parseFloat(req.query.x):Math.random();
  let y=req.query.y ? parseFloat(req.query.y):Math.random();
  let a="Math.pow";
  let b="Math.sign";
  let c="Math.tanh";
  let d="Math.trunc";
  let result=Math.pow(x,y);
  let result2=Math.sign(x);
  let result3=Math.tanh(y);
  let result4=Math.trunc(x);
  res.send(`
    ${a} applied to ${x} and ${y} is: ${result}<br><br>
    ${b} applied to ${x} is: ${result2}<br><br>
    ${c} applied to ${y} is: ${result3}<br><br>
    ${d} applied to ${x} is: ${result4}
    `);
    
  
});

module.exports = router;
