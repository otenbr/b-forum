const sinon = require('sinon');
const Post = require('../../models/Post');
const Answer = require('../../models/Answer');

// Mocks for the Post model
const myPost = new Post({
	_id: '5ea48ba8ffb70675c585f5cc',
	title: 'Title Post 1',
	content: 'Content post 1',
	userName: 'neto',
	likes: 0,
	dislikes: 0,
	answers: [],
});

sinon.stub(Post, 'create').returns(
	new Promise((resolse) => {
		resolse(myPost);
	}),
);

sinon.stub(Post, 'findById').returns(
	new Promise((resolse) => {
		resolse(myPost);
	}),
);

sinon.stub(myPost, 'save').returns(
	new Promise((resolse) => {
		resolse();
	}),
);

// Mocks for the Answer model
const myAnswer = new Answer({
	_id: '5ea48df8d8efa67859160ce0',
	content: 'Content answer 1, post 1',
	userName: 'neto',
	likes: 0,
	dislikes: 0,
});

sinon.stub(Answer, 'create').returns(
	new Promise((resolse) => {
		resolse(myAnswer);
	}),
);
sinon.stub(Answer, 'findById').returns(
	new Promise((resolse) => {
		resolse(myAnswer);
	}),
);

sinon.stub(myAnswer, 'save').returns(
	new Promise((resolse) => {
		resolse();
	}),
);
