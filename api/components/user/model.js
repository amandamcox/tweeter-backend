const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
	username: {
		type: String,
		required: true
	},
	tweets: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Tweets'
		}
	]
})

userSchema.set('toJSON', {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id.toString()
		delete returnedObject.passwordHash
		delete returnedObject.__v
		delete returnedObject._id
	}
})

module.exports = mongoose.model('User', userSchema)
