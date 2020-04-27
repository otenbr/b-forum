const request = require('supertest');
const express = require('express');

const routes = require('../routes/posts');
const app = express();
app.use(express.json());
app.use(routes);

beforeAll(() => {
	require('./mocks/ModelsMock');
});

describe('Posts', () => {
	it('should be able to create a new post', async () => {
		const response = await request(app).post('/posts').send({
			title: 'Title Post 1',
			content: 'Content post 1',
			userName: 'neto',
		});

		expect(response.status).toBe(200);

		expect(response.body._id).not.toBe(null);

		expect(response.body).toMatchObject({
			_id: '5ea48ba8ffb70675c585f5cc',
			title: 'Title Post 1',
			content: 'Content post 1',
			userName: 'neto',
			likes: 0,
			dislikes: 0,
			answers: [],
		});
	});

	it('should be able to like a post', async () => {
		const response = await request(app)
			.put('/posts/5ea48ba8ffb70675c585f5cc/like')
			.send();

		expect(response.status).toBe(200);

		expect(response.body.likes).toBe(1);
	});

	it('should be able to dislike a post', async () => {
		const response = await request(app)
			.put('/posts/5ea48ba8ffb70675c585f5cc/dislike')
			.send();

		expect(response.status).toBe(200);

		expect(response.body.dislikes).toBe(1);
	});
});
