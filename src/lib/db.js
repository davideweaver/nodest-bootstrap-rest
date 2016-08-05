const Nodest = require("nodest");
const Mongoose = require("mongoose");

class Db {
	constructor() {
	}
	
	connect() {
		var connstr = Nodest.config.db.connstr;
		Mongoose.Promise = global.Promise;
		Mongoose.connect(connstr);
	}
}

module.exports = Db;
