// Full Documentation - https://docs.turbo360.co
const express = require('express')
const router = express.Router()

const Profile =  require('../models/Profile');


router.get('/profile', (req, res) =>{


	console.log('What is happening '+ Profile);

	Profile.find().then(profiles => {
		res.json({
			confirmation: 'Success'
			,data: profiles
		})
	}).catch( err => {
		res.json({
			confirmation: 'Failed'
			,data: err.message
		})
	})

})

module.exports = router