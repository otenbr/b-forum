const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config();
}

mongoose.connect(process.env.MONGODB_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});
mongoose.connection
	.once('open', () => console.log('Mongo connected!'))
	.on('error', (error) => {
		console.warn('Error on Mongo : ', error);
	});

const postsRoutes = require('./routes/posts');
const errorHandler = require('./errors');

const app = express();

app.disable('x-powered-by');

app.use(express.json());
app.use(cors());

app.use(postsRoutes);

app.use(errorHandler);

module.exports = app;
