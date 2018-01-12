var router = require('express').Router();

var testers = [{
  "testers" : [
		  {
		     "name": "John",
		     "experience": "2 years",
		     "skills": "",
		     "certifications": "",
		     "writing sample": "",
		     "rating": "3/5",
		     "reviews": []
 		  },

		  {
		     "name": "Mark",
		     "experience": "4 years",
		     "skills": "",
		     "certifications": "",
		     "writing sample": "",
		     "rating": "2/5",
		     "reviews": []
 		  },
		  {
		     "name": "Chris",
		     "experience": "3 years",
		     "skills": "",
		     "certifications": "",
		     "writing sample": "",
		     "rating": "4/5",
		     "reviews": []
 		  },
		  {
		     "name": "Charlie",
		     "experience": "2 years",
		     "skills": "",
		     "certifications": "",
		     "writing sample": "",
		     "rating": "3/5",
		     "reviews": []
 		  },
		  {
		     "name": "Sam",
		     "experience": "5 years",
		     "skills": "",
		     "certifications": "",
		     "writing sample": "",
		     "rating": "5/5",
		     "reviews": []
 		  }
	]
}]

router.get('/', function (req, res, next) {
  res.json(testers);
});

// router.post('/', function (req, res, next) {
//   // assuming req.body is well formed
//   users.push(req.body);
//   res.status(201).json(users);
// });

module.exports = router;
