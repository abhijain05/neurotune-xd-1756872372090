sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/UIComponent"
], function(Controller, UIComponent) {
	"use strict";

	return Controller.extend("converted.podetailview.controller.App", {
		onInit: function() {
			// Get the router instance
			const oRouter = UIComponent.getRouterFor(this);

			if (oRouter) {
				// Add error handling for routing
				oRouter.attachBypassed(function(oEvent) {
					const sHash = oEvent.getParameter("hash");
					console.log(`Route bypassed: ${sHash}`);
					// Handle the bypassed route, e.g., display a 404 page
				});

				// Navigate to main view if no hash is set
				if (!window.location.hash || window.location.hash === "#") {
					setTimeout(() => {
						oRouter.navTo("RouteMain");
					}, 100); //Slight delay to allow UI to fully initialize.
				}
			} else {
				console.error("Router not found in App controller");
			}
		}
	});
});
