const app = require('./app');

const port = process.env.PORT || 4000;

app.listen(port, () => {
	console.info(`Server listening on port *:${port}`);
});
