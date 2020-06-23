const tweetRouter = require('express').Router()

const { getAllTweets, saveTweet } = require('./controller')

tweetRouter.get('/', getAllTweets)
tweetRouter.post('/', saveTweet)

module.exports = tweetRouter
