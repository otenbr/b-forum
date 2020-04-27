const mongoose = require('mongoose');

const Post = new mongoose.Schema(
	{
		title: {
			type: mongoose.Schema.Types.String,
			required: true,
		},
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
		answers: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Answer',
			},
		],
	},
	{
		collection: 'posts',
		timestamps: true,
	},
);

module.exports = mongoose.model('Post', Post);
