sap.ui.controller("views.Buyer.UpgradeDowngrade", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf views.Buyer.UpgradeDowngrade
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf views.Buyer.UpgradeDowngrade
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf views.Buyer.UpgradeDowngrade
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf views.Buyer.UpgradeDowngrade
*/
//	onExit: function() {
//
//	}

	approveDisapprove: function(oAction,oRemarks, oDisStatus) {
		var oBusyDialog = new sap.m.BusyDialog({text: oAction + ' Upgrade/Downgrade request. Please wait...'});
		oBusyDialog.open();
		
		var ret = false;
		var _this = this;
		var oDetail = this.getView().getModel().getProperty('/tranDetail'); 
		var _oData = {"action": oAction.toUpperCase(), "RequestNumber": oDetail.Refnumber, 
				"approvalToCommentsSet":oRemarks, "UpdownStatus": oDisStatus };

		//get security token
		$.ajax({
			type : "GET",
			url : "/sap/opu/odata/sap/ZGW_RLC_SALES_SRV/approvalSet?$format=json",
			headers: {"X-CSRF-Token":"Fetch","X-Requested-With":"XMLHttpRequest"},
			async:true,
			contentType:"application/json",
			success : function(data,response,xhrObj){
				var vToken = xhrObj.getResponseHeader("X-CSRF-Token");

				//save request
				$.ajax({
					type : "POST",
					url : "/sap/opu/odata/sap/ZGW_RLC_SALES_SRV/approvalSet",
					headers: {"X-CSRF-Token":vToken,"X-Requested-With":"JSONHttpRequest"}, //,Authorization:	'Basic ' + validUser},
					async:false,
					contentType:"application/json",
					dataType:"json", 
		            data: JSON.stringify(_oData),
					success : function(data,response,xhrObj) {
						try {
							if(data.d.Type != "S") {
								oBusyDialog.close();
								showActionMsg("UPDOWN-"+oAction.toUpperCase(), "ERROR",data.d.Message);
								return false;
							} 
							
							showActionMsg("UPDOWN-"+oAction.toUpperCase(), "SUCCESS","",oDetail.Refnumber);
							sap.ui.getCore().byId(sessionCache["pageID"] + "oBtnApprove").setEnabled(false);
							sap.ui.getCore().byId(sessionCache["pageID"] + "oBtnDisapprove").setEnabled(false);
							sap.ui.getCore().byId(sessionCache["pageID"] + "oTAComments").setValue("");
							ret = true;
							
							oBusyDialog.close();
		                } catch(ex) {
							oBusyDialog.close();
							showActionMsg("UPDOWN-"+oAction.toUpperCase(), "ERROR2", ex.message);
		                }
					},
					error : function(err) {
						oBusyDialog.close();
						showActionMsg("UPDOWN-"+oAction.toUpperCase(), "ERROR", "Unable to " + oAction + " Upgrade/Downgrade Request.\nStatus Code: " + err.status + "\nStatus Text: " + err.statusText + "\nDescription: " + err.responseText);
					}
				});
			},
			error : function() {
				oBusyDialog.close();
				showActionMsg("UPDOWN-"+oAction.toUpperCase(), "ERROR", oAction + " Upgrade/Downgrade Request. Unable to fecth security token.");
			}
		});
		return ret;
	},
});