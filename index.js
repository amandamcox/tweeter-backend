const express = require('express')
const app = express()
const http = require('http')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv').config()

const routes = require('./api/routes')

const PORT = process.env.PORT
const PROD_MONGODB_URI = process.env.PROD_MONGODB_URI

app.use(bodyParser.json())
app.use(express.static('build'))
app.use('/api', routes)

const server = http.createServer(app)
server.listen(PORT, () => console.log(`Server running on port ${PORT}`))

mongoose
	.connect(PROD_MONGODB_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
		useFindAndModify: false
	})
	.then(() => console.log('Connected to MongoDB'))
	.catch(error =>
		console.error('Error connecting to MongoDB:', error.message)
	)
