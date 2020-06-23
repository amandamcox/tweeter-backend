const Tweets = require('./model')
const User = require('../user/model')

const getAllTweetsService = async () => {
	try {
		return await Tweets.find({})
			.sort('-created')
			.populate({ path: 'user', select: 'username' })
	} catch (error) {
		throw error
	}
}

const saveTweetService = async req => {
	try {
		const user = await User.findById(req.userId)

		const newTweet = new Tweets({
			tweetContent: req.tweetContent,
			user: user._id
		})
		const savedTweet = await newTweet.save()

		user.tweets = [...user.tweets, savedTweet._id]
		await user.save()
		const completeNewTweet = await Tweets.findById(savedTweet._id).populate(
			{
				path: 'user',
				select: 'username'
			}
		)
		return completeNewTweet
	} catch (error) {
		throw error
	}
}

module.exports = {
	getAllTweetsService,
	saveTweetService
}
