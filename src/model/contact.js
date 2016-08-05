const Mongoose = require("mongoose");

// basic Contact schema
var Contact = Mongoose.model("contact", new Mongoose.Schema({
	name:           String,
	email:			String
}));

// add some helper methods
Contact.findById = function * (id) {
	return yield Contact.findOne({ _id: id })
}

Contact.merge = function (obj, src) {
	if (!src)
		throw "source is not valid";
	if (src && src.name)
		obj.name = src.name;
	if (src && src.email)
		obj.email = src.email;
	return obj;
}

module.exports = Contact;
