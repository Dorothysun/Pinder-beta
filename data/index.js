var router = require('express').Router();

router.use('/testers', require('./testers'));
router.use('/companies', require('./companies'));

module.exports = router;
