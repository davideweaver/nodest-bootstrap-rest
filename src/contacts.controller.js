const Nodest = require("nodest");
const Contact = require("./model/contact");

class ContactsController extends Nodest.ApiController {

  * index() {
    this.respond(yield Contact.find());
  }

  * get() {
		var contact = yield Contact.findById(this.vars.params.id);
		if (!contact)
			this.ctx.throw(404); 
		this.respond(contact);
  }

	* post() {
    var contact = Contact.merge(new Contact(), this.ctx.request.body);
    yield contact.save();
    this.respondWithStatus(contact, 201);
  }
    
  * update() {
		var contact = yield Contact.findById(this.vars.params.id);
		if (!contact)
			this.ctx.throw(404); 
    contact = Contact.merge(contact, this.ctx.request.body);
    yield contact.save();
    this.respondWithStatus(contact, 200);
  }
    
  * del() {
		var contact = yield Contact.findById(this.vars.params.id);
		if (!contact)
			this.ctx.throw(404); 
    yield contact.remove();
		this.respondWithNoContent();
  }
}

module.exports = ContactsController;