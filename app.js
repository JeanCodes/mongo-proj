// Full Documentation - https://docs.turbo360.co
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const express = require('express')

const app = express() // initialize app

const config = {
	views: 'views', 		// Set views directory 
	static: 'public', 		// Set static assets directory
	db: { 					// Database configuration. Remember to set env variables in .env file: MONGODB_URI, PROD_MONGODB_URI
		//url: (process.env.TURBO_ENV == 'dev') ? process.env.MONGODB_URI : process.env.PROD_MONGODB_URI,
		url: 'mongodb://mongProj:xyz123@127.0.0.1:27017/mongo-proj',
		type: 'mongo',
		onError: (err) => {
			console.log(err);
		},
		onSuccess: () => {
			console.log('DB Successfully Connected!')
		}
	}
}

vertex.configureApp(app, config) // remove line 30 below and replace with this

app.use(vertex.setContext(process.env))


// import routes
const index = require('./routes/index')
const api = require('./routes/api')

// set routes
app.use('/', index)
app.use('/api', api) // sample API Routes


module.exports = app