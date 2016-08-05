const Nodest = require("nodest");

// pull in config and apply to settings
Nodest.applySettings({
	verbose: Nodest.config.server.verbose,
	errors: {
		expose: true
	},
	service: {
		templates: {
			cache: Nodest.config.server.cacheTemplates
		}
	}
});

// bootstrap the app using the App class
// in app.js
new Nodest.Bootstrapper("./src/app.js")
	.start((app) => { 

		// port defined in config/default.json
		app.listen(Nodest.config.server.port) 
	});