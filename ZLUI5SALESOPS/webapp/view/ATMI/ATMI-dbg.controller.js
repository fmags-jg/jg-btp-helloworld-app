sap.ui.controller("views.ATMI.ATMI", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf views.ATMI.ATMI
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf views.ATMI.ATMI
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf views.ATMI.ATMI
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf views.ATMI.ATMI
*/
//	onExit: function() {
//
//	}
	approveDisapprove: function(oAction,oRemarks) {
		var oBusyDialog = new sap.m.BusyDialog({text: oAction + ' Authority to Move-In request. Please wait...'});
		oBusyDialog.open();
		
		var ret = false;
		var _this = this;
		var oDetail = this.getView().getModel().getProperty('/tranDetail'); 
		var _oData = {"action": oAction.toUpperCase(), "RequestNumber": oDetail.AtmiNo, "approvalToCommentsSet":oRemarks };
		var _oDataOpReq = {
				"Refnumber": oDetail.AtmiNo, 
				"UpdDetailsSet": [{
					"ActualNo":oDetail.ActualNo,
					"PriorityNo": oDetail.PriorityNo,
					"LastOrDate2": oDetail.LastOrDate2,
					"LastOrNo2": oDetail.LastOrNo2,
					"AmountPaid2": oDetail.AmountPaid2,
					"AmountDue2": oDetail.AmountDue2,
					"Requirement2": oDetail.Requirement2,
					"LastOrDate1": oDetail.LastOrDate1,
					"LastOrNo1": oDetail.LastOrNo1,
					"AmountPaid1": oDetail.AmountPaid1,
					"AmountDue1": oDetail.AmountDue1,
					"Requirement1": oDetail.Requirement1,
					"MarriageContract": UIDateTosapDate(oDetail.MarriageContract),
					"ViewDate": UIDateTosapDate(oDetail.ViewDate),
					"BirthCert": UIDateTosapDate(oDetail.BirthCert),
					"NoteDate": UIDateTosapDate(oDetail.NoteDate),
					"BirDate": UIDateTosapDate(oDetail.BirDate),
					"SignedDosDate": UIDateTosapDate(oDetail.SignedDosDate),
					"CondoDues": UIDateTosapDate(oDetail.CondoDues),
					"BuyerReqDate": UIDateTosapDate(oDetail.BuyerReqDate),
					"EmiRef": oDetail.EmiRef,
					"AppParking": oDetail.AppParking,
					"AsBuildArea": oDetail.AsBuildArea,
					"CtsArea": oDetail.CtsArea,
					"Unit": oDetail.Unit,
					"BuildLand": oDetail.BuildLand,
					"AtmiNo": oDetail.AtmiNo,
					"UnitTypeDesc": oDetail.UnitTypeDesc,
					"UnitType": oDetail.UnitType,
					"ReservationDate": UIDateTosapDate(oDetail.ReservationDate),
					"ContractNo": oDetail.ContractNo,
					"CoBuyer": oDetail.CoBuyer,
					"PBuyer": oDetail.PBuyer,
					"CreationDate": UIDateTosapDate(oDetail.CreationDate),
					"PriorityLevel": oDetail.PriorityLevel,
					"Bukrs": oDetail.Bukrs,
					"RefNo": oDetail.AtmiNo
				}]
			};

		/**********Update Operation requirements*****************/
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
					url : "/sap/opu/odata/sap/ZGW_RLC_SALES_SRV/UpdHeaderSet",
					headers: {"X-CSRF-Token":vToken,"X-Requested-With":"JSONHttpRequest"}, //,Authorization:	'Basic ' + validUser},
					async:true,
					contentType:"application/json",
					dataType:"json", 
		            data: JSON.stringify(_oDataOpReq),
					success : function(data,response,xhrObj) {
						try {
							
							/***************************APPROVE/REJECT************************/
							//get security token
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
											showActionMsg("ATMI-"+oAction.toUpperCase(), "ERROR",data.d.Message);
											return false;
										} 
										
										showActionMsg("ATMI-"+oAction.toUpperCase(), "SUCCESS","",oDetail.AtmiNo);
										sap.ui.getCore().byId(sessionCache["pageID"] + "oBtnApprove").setEnabled(false);
										sap.ui.getCore().byId(sessionCache["pageID"] + "oBtnDisapprove").setEnabled(false);
										sap.ui.getCore().byId(sessionCache["pageID"] + "oTAComments").setValue("");
										ret = true;
										
										oBusyDialog.close();
					                } catch(ex) {
										oBusyDialog.close();
										showActionMsg("ATMI-"+oAction.toUpperCase(), "ERROR", ex.message);
					                }
								},
								error : function(err) {
									oBusyDialog.close();
									showActionMsg("ATMI-"+oAction.toUpperCase(), "ERROR", "Unable to " + oAction + " Authority to Move-In Request.\nStatus Code: " + err.status + "\nStatus Text: " + err.statusText + "\nDescription: " + err.responseText);
								}
							});
		                } catch(ex) {
							oBusyDialog.close();
							showActionMsg("ATMI-"+oAction.toUpperCase(), "ERROR", ex.message);
							return false;
		                }
					},
					error : function(err) {
						oBusyDialog.close();
						showActionMsg("ATMI-"+oAction.toUpperCase(), "ERROR", "Unable to " + oAction + " Authority to Move-In Request.\nStatus Code: " + err.status + "\nStatus Text: " + err.statusText + "\nDescription: " + err.responseText);
						return false;
					}
				});
			},
			error : function() {
				oBusyDialog.close();
				showActionMsg("ATMI-"+oAction.toUpperCase(), "ERROR", oAction + " Authority to Move-In Request. Unable to fecth security token.");
				return false;
			}
		});
		return ret;
	},
});