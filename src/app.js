const Nodest = require("nodest");
const Db = require("./lib/db");

// App class
class App extends Nodest.Application {

	// init() gets called to initialize app
	// setup app routes, middleware, etc
	init() {
		this.use("./common.middleware.js");
		this.route("/contacts/:id?", "./contacts.controller.js");

		// connect mongodb
		var db = new Db();
		db.connect();
	}
}

module.exports = App;