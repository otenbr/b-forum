const Answer = require('../models/Answer');
const Post = require('../models/Post');

class AnswerController {
	async store(req, res) {
		let post = null;
		try {
			post = await Post.findById(req.params.id);
		} catch (error) {
			return res.status(400).json({ error: 'Invalid post id.' });
		}

		if (!post) return res.status(400).json({ error: 'Post not found.' });

		const answer = await Answer.create({
			content: req.body.content,
			userName: req.body.userName,
		});

		post.answers.push(answer);

		await post.save();

		return res.json(answer);
	}

	async like(req, res) {
		let post = null;
		try {
			post = await Post.findById(req.params.id);
		} catch (error) {
			return res.status(400).json({ error: 'Invalid post id.' });
		}

		if (!post) return res.status(400).json({ error: 'Post not found.' });

		let answer = null;
		try {
			answer = await Answer.findById(req.params.answerId);
		} catch (error) {
			return res.status(400).json({ error: 'Invalid answer id.' });
		}

		if (!answer) return res.status(400).json({ error: 'Answer not found.' });

		answer.likes++;

		await answer.save();

		return res.json(answer);
	}

	async dislike(req, res) {
		let post = null;
		try {
			post = await Post.findById(req.params.id);
		} catch (error) {
			return res.status(400).json({ error: 'Invalid post id.' });
		}

		if (!post) return res.status(400).json({ error: 'Post not found.' });

		let answer = null;
		try {
			answer = await Answer.findById(req.params.answerId);
		} catch (error) {
			return res.status(400).json({ error: 'Invalid answer id.' });
		}

		if (!answer) return res.status(400).json({ error: 'Answer not found.' });

		answer.dislikes++;

		await answer.save();

		return res.json(answer);
	}
}

module.exports = new AnswerController();
