const express = require("express");
var router = express.Router();
var Student = require("../models/student");

router.get("/", (req, res, next) => {
	res.send("Student Dashboard");
});
router.get("/profile", (req, res, next) => {
	Teacher.findById(req.params.id)
	.then(
		(student) => {
			res.statusCode = 200;
			res.setHeader("Content-Type", "application/json");
			res.json(student);
		},
		(err) => next(err)
	)
	.catch((err) => next(err)); 

	res.send("Student view profile");
});


module.exports = router;
