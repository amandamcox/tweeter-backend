const { getAllTweetsService, saveTweetService } = require('./service')

const getAllTweets = async (req, res) => {
	try {
		const returnedTweets = await getAllTweetsService()
		res.json(returnedTweets)
	} catch (error) {
		res.status(500).json({
			status: 'error',
			message: error.message
		})
	}
}

const saveTweet = async (req, res) => {
	try {
		const savedTweet = await saveTweetService(req.body)
		res.json(savedTweet)
	} catch (error) {
		res.status(500).json({
			status: 'error',
			message: error.message
		})
	}
}

module.exports = { getAllTweets, saveTweet }
