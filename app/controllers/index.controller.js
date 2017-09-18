var path = require("path");

exports.help = (req, res) => {
	res.send('Help me');
}

exports.index = (req, res) => {
	res.sendFile((path.join(__dirname + '/../views/index.html')));
}

exports.home = (req, res) => {
	if (req.user) {
		res.sendFile((path.join(__dirname + '/../views/home.html')));
	}
	else {
		res.status(400).send({
			message: 'User is not signed in'
		});
	}
}