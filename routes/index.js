var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
	//  console.log(req);
 // console.log(res);
	// console.log("d");
    res.render('index.html');
});

module.exports = router;