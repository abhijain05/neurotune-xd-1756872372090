sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageToast",
	"sap/ui/core/library"
], function(Controller, JSONModel, MessageToast, coreLibrary) {
	"use strict";

	const MessageType = coreLibrary.MessageType;

	return Controller.extend("converted.podetailview.controller.PoDetailView", {
		onInit: function() {
			// Load mock data
			this._loadMockData();
		},

		_loadMockData: function() {
			const oPoDataModel = new JSONModel({
				poData: {
					poType: "NB", // Example PO Type
					poNumber: "4500017100",
					vendor: "1012 Reihl & Müller",
					docDate: "2006-05-02",
					items: [
						{
							itemNumber: "10",
							acceptance: true,
							invoice: true,
							materialId: "NGL-PHARM-1R",
							materialDescription: "Kontrastmittel Ultravist 300",
							shortText: "NGL-PHARM-1R Kontrastmittel Ultravist 300",
							poQuantity: 2480,
							poQuantityUnit: "L",
							overdelivery: false,
							confirmation: false,
							deliveryDate: "2006-05-02",
							netPrice: 800.00,
							currency: "EUR",
							perUnit: 1,
							freeItem: false,
							otherFlag: false,
							materialGroup: "Pharmaceuti...",
							plant: "Hamburg",
							storageLocation: "Materiallager",
							selected: false,
              id: "ITEM-10",
              description: "Item 10"
						}
						// Add more items here...
					],
          selectedItem: {
            id: "ITEM-10"
          }
				},
        documentOverviewType: "Type A", //Example
        documentOverviewTypes: [{ key: "Type A", text: "Type A" }, {key: "Type B", text: "Type B"}], // Example
        poTypes: [{ key: "NB", text: "NB" }, { key: "Other", text: "Other" }] //Example
			});

			this.getView().setModel(oPoDataModel, "poData");
		},

    onActionBack: function() {
      MessageToast.show("Back button pressed");
    },
		// ... other event handlers (see below for examples) ...
	});
});
