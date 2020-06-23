const routes = require('express').Router()
const tweetRouter = require('./components/tweets/routes')

routes.get('/', (req, res) => {
	res.status(200).json({ message: 'Connected' })
})
routes.use('/tweets', tweetRouter)

module.exports = routes
