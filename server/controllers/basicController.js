const basicController = {};

basicController.get = (req, res) => {
				res.json({
								message: 'Welcome to the API'
				});
}

module.exports = basicController;