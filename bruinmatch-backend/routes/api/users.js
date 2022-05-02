// routes/api/books.js

const express = require('express');
const router = express.Router();

// Load Book model
const User = require('../../models/User');

// @route GET api/books/test
// @description tests books route
// @access Public
router.get('/test', (req, res) => res.send('user route testing!'));

// @route GET api/users
// @description sign up
// @access Public
router.post('/signup', (req, res) => {
  User.create(req.body)
    .then(user => res.json({ msg: 'User added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this User' }));
});

// @route GET api/users
// @description Get all users
// @access Public
router.get('/login', (req, res) => {
    console.log("hello")
    User.find()
      .then(users => res.json(users))
      .catch(err => res.status(404).json({ nobooksfound: 'No Users found' }));
});

module.exports = router;