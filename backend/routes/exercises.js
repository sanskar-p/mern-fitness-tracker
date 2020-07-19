const router = require('express').Router();
let Exercise = require('../models/exercise.model');

router.route('/').get((req, res) => {
	Exercise.find()
	.then(exercises => res.json(exercises))
	.catch(err => res.status(400).json('Error: ', err));
})

router.route('/add').post((req, res) => {
	const username = req.body.username;
	const description = req.body.description;
	const duration = Number(req.body.duration);
	const date = Date.parse(req.body.date);

	const newExercise = new Exercise({username, description, duration, date});

	newExercise.save()
	.then(() => res.json('exercise added'))
	.catch(err => res.status(400).json(err));
})

router.route('/:id').get((req, res) => {
	Exercise.findById(req.params.id)
	.then(exer => res.json(exer))
	.catch(err => res.status(400).json('could not get id:' + err));
})

router.route('/:id').delete((req, res) => {
	Exercise.findByIdAndDelete(req.params.id)
	.then(() => res.json('exercise deleted'))
	.catch(err => res.status(400).json('error: '+ err));
})

router.route('/update/:id').put((req, res) => {
	// Exercise.findById(req.params.id)
	// .then(exer => {
	// 	exer.username = req.body.username;
	// 	exer.description = req.body.description;
	// 	exer.duration = req.body.duration;
	// 	exer.date = req.body.date;

	// 	exer.save()
	// 	.then(() => res.json('exercise updated'))
	// 	.catch(err => res.status(400).json('error: '+ err));
	// })
	// .catch(err => res.status(400).json('error: '+ err));

	Exercise.update({_id: req.params.id}, {
		username: req.body.username,
		description: req.body.description,
		duration: req.body.duration,
		date: req.body.date
	})
	.then(() => res.json('exercise updated'))
		.catch(err => res.status(400).json('error: '+ err));
})

module.exports = router;