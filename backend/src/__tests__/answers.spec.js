const request = require('supertest');
const express = require('express');

const routes = require('../routes/posts');
const app = express();
app.use(express.json());
app.use(routes);

beforeAll(() => {
	require('./mocks/ModelsMock');
});

describe('Answers', () => {
	it('should be able to add a new answer to a post', async () => {
		const response = await request(app)
			.post('/posts/5ea48ba8ffb70675c585f5cc/answers')
			.send({
				content: 'Content answer 1, post 1',
				userName: 'antonio',
			});

		expect(response.status).toBe(200);

		expect(response.body).toMatchObject({
			_id: '5ea48df8d8efa67859160ce0',
			content: 'Content answer 1, post 1',
			userName: 'neto',
			likes: 0,
			dislikes: 0,
		});
	});

	it('should be able to like a answer', async () => {
		const response = await request(app)
			.put(
				'/posts/5ea48ba8ffb70675c585f5cc/answers/5ea48df8d8efa67859160ce0/like',
			)
			.send();

		expect(response.status).toBe(200);

		expect(response.body.likes).toBe(1);
	});

	it('should be able to dislike a answer', async () => {
		const response = await request(app)
			.put(
				'/posts/5ea48ba8ffb70675c585f5cc/answers/5ea48df8d8efa67859160ce0/dislike',
			)
			.send();

		expect(response.status).toBe(200);

		expect(response.body.dislikes).toBe(1);
	});
});
