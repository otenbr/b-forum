const mongoose = require('mongoose');

const Answer = new mongoose.Schema(
	{
		content: {
			type: mongoose.Schema.Types.String,
			required: true,
		},
		userName: {
			type: mongoose.Schema.Types.String,
			required: true,
		},
		likes: {
			type: mongoose.Schema.Types.Number,
			required: false,
			default: 0,
		},
		dislikes: {
			type: mongoose.Schema.Types.Number,
			required: false,
			default: 0,
		},
	},
	{
		collection: 'answers',
		timestamps: true,
	},
);

module.exports = mongoose.model('Answer', Answer);
