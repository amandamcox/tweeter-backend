const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tweetSchema = new Schema({
	tweetContent: {
		type: String,
		required: true
	},
	created: {
		type: Date,
		default: Date.now
	},
	user: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	}
})

tweetSchema.set('toJSON', {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id.toString()
		delete returnedObject.__v
		delete returnedObject._id
	}
})

module.exports = mongoose.model('Tweets', tweetSchema)
