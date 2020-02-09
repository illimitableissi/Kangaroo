const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const users = require('./routes/api/users');
const app = express();
const routes = require('./routes');
const path = require('path');

// Bodyparser middleware
app.use(
	bodyParser.urlencoded({
		extended: true
	})
);
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
	.connect(process.env.MONGODB_URI || db, { useNewUrlParser: true })
	.then(() => console.log('MongoDB successfully connected'))
	.catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require('./config/passport')(passport);

// if (process.env.NODE_ENV === 'production') {
// 	app.use(express.static('client/build'));
// }

// app.get('*', function(req, res) {
// 	res.sendFile(path.join(__dirname, './kangaroo/build/index.html'));
// });

// Routes
app.use(routes);
app.use('/api/users', users);

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
	// Set static folder
	app.use(express.static('kangaroo/build'));

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'kangaroo', 'build', 'index.html'));
	});
}

const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there
app.listen(port, () => console.log(`Server up and running on port ${port} !`));
