const Post = require('../models/Post');

class PostController {
	async store(req, res) {
		const post = await Post.create({
			title: req.body.title,
			content: req.body.content,
			userName: req.body.userName,
		});

		return res.json(post);
	}

	async showAll(req, res) {
		const { title, answered } = req.query;

		let filter = {};
		// Filter by title
		if (title) filter = { ...filter, title: new RegExp(title, 'i') };
		// Filter if there are answers
		if (answered === 'true')
			filter = { ...filter, answers: { $exists: true, $ne: [] } };
		else if (answered === 'false') filter = { ...filter, answers: [] };

		const posts = await Post.find(filter)
			.populate({
				path: 'answers',
				options: {
					sort: {
						createdAt: -1,
					},
				},
			})
			.sort({
				createdAt: -1,
			});

		return res.json(posts);
	}

	async show(req, res) {
		let post = null;
		try {
			post = await Post.findById(req.params.id).populate({
				path: 'answers',
				options: {
					sort: {
						createdAt: -1,
					},
				},
			});
		} catch (error) {
			return res.status(400).json({ error: 'Invalid post id.' });
		}

		if (!post) return res.status(400).json({ error: 'Post not found.' });

		return res.json(post);
	}

	async like(req, res) {
		let post = null;
		try {
			post = await Post.findById(req.params.id);
		} catch (error) {
			return res.status(400).json({ error: 'Invalid post id.' });
		}

		if (!post) return res.status(400).json({ error: 'Post not found.' });

		post.likes++;

		await post.save();

		return res.json(post);
	}

	async dislike(req, res) {
		let post = null;
		try {
			post = await Post.findById(req.params.id);
		} catch (error) {
			return res.status(400).json({ error: 'Invalid post id.' });
		}

		if (!post) return res.status(400).json({ error: 'Post not found.' });

		post.dislikes++;

		await post.save();

		return res.json(post);
	}
}

module.exports = new PostController();
