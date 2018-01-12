var router = require('express').Router();

var companies = [{
   "companies" : [
		  {
			"name" : "A",
			"systems used": "",
			"qualifications" : "",
			"rating": "",
			"reviews": ""
		  },
		  {
			"name" : "B",
			"systems used": "",
			"qualifications" : "",
			"rating": "",
			"reviews": ""
		  },
		  {
			"name" : "C",
			"systems used": "",
			"qualifications" : "",
			"rating": "",
			"reviews": ""
		  },
		  {
			"name" : "D",
			"systems used": "",
			"qualifications" : "",
			"rating": "",
			"reviews": ""
		  },
		  {
			"name" : "E",
			"systems used": "",
			"qualifications" : "",
			"rating": "",
			"reviews": ""
		  }
	       ]
}]

router.get('/', function (req, res, next) {
  res.json(companies);
});

// router.post('/', function (req, res, next) {
//   // assuming req.body is well formed
//   users.push(req.body);
//   res.status(201).json(users);
// });

module.exports = router;