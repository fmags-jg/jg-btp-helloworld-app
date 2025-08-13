sap.ui.controller("views.Buyer.PlanRevision", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf views.Buyer.PlanRevision
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf views.Buyer.PlanRevision
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf views.Buyer.PlanRevision
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf views.Buyer.PlanRevision
*/
//	onExit: function() {
//
//	}

	approveDisapprove: function(oAction,oRemarks) {
		var oBusyDialog = new sap.m.BusyDialog({text: oAction + ' Plan Revision request. Please wait...'});
		oBusyDialog.open();
		
		var ret = false;
		var _this = this;
		var oDetail = this.getView().getModel().getProperty('/tranDetail'); 

		try {
			oDetail.PV_PlanRevSet[0].CostPmd = oDetail.PV_PlanRevSet[0].CostPmd.replace(/,/g,"");
			oDetail.PV_PlanRevSet[0].CostDpd = oDetail.PV_PlanRevSet[0].CostDpd.replace(/,/g,"");
			oDetail.PV_PlanRevSet[0].CostBdd = oDetail.PV_PlanRevSet[0].CostBdd.replace(/,/g,"");
		}
		catch(err) {
			//do nothing...
		}

		var _oData = {"action": oAction.toUpperCase(), "RequestNumber": oDetail.Refnumber, "approvalToCommentsSet":oRemarks
					 ,"approvalToPlanRevSet": [{"Refnumber" : oDetail.Refnumber ,"ExpiryDate" : oDetail.PV_PlanRevSet[0].ExpiryDate ,"CostPmd" : oDetail.PV_PlanRevSet[0].CostPmd
						 					 ,"CostDpd" : oDetail.PV_PlanRevSet[0].CostDpd , "CostBdd" : oDetail.PV_PlanRevSet[0].CostBdd , "PmdDate" : oDetail.PV_PlanRevSet[0].PmdDate
						 					 ,"DpdDate" : oDetail.PV_PlanRevSet[0].DpdDate , "BddDate" : oDetail.PV_PlanRevSet[0].BddDate}]
					 };

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
								showActionMsg("PLANREV-"+oAction.toUpperCase(), "ERROR",data.d.Message);
								return false;
							} 
							
							showActionMsg("PLANREV-"+oAction.toUpperCase(), "SUCCESS","",oDetail.Refnumber);
							sap.ui.getCore().byId(sessionCache["pageID"] + "oBtnApprove").setEnabled(false);
							sap.ui.getCore().byId(sessionCache["pageID"] + "oBtnDisapprove").setEnabled(false);
							sap.ui.getCore().byId(sessionCache["pageID"] + "oTAComments").setValue("");
							ret = true;
							
							oBusyDialog.close();
		                } catch(ex) {
							oBusyDialog.close();
							showActionMsg("PLANREV-"+oAction.toUpperCase(), "ERROR", ex.message);
		                }
					},
					error : function(err) {
						oBusyDialog.close();
						showActionMsg("PLANREV-"+oAction.toUpperCase(), "ERROR", "Unable to " + oAction + " Plan Revision Request.\nStatus Code: " + err.status + "\nStatus Text: " + err.statusText + "\nDescription: " + err.responseText);
					}
				});
			},
			error : function() {
				oBusyDialog.close();
				showActionMsg("PLANREV-"+oAction.toUpperCase(), "ERROR", oAction + " Plan Revision Request. Unable to fecth security token.");
			}
		});
		return ret;
	},

	doneUpload:function(oTableOther, FileUploader, oFirstDialog2, oAccordion, oSectionDoc){
		var oUploadModel = this.getView().getModel().getProperty("/tranDetail/newAttach");
		var oAttachModel = this.getView().getModel().getProperty("/tranDetail/Attachments");
		if(oUploadModel != undefined){
			if (oUploadModel.fileName != "") {
				
				if (oAttachModel == undefined) {
					oAttachModel = [];
				}
				
				oAttachModel.push(oUploadModel);

				//upload to Sharepoint
				this.uploadAttachment();
				
				this.getView().getModel().setProperty("/tranDetail/Attachments",oAttachModel);
				oTableOther.setVisibleRowCount(oAttachModel.length);
				oTableOther.setVisible(true);

				var obj = {
						"Refnumber" : "",
						"Attachtype" : "",
						"Filecategory" : "",
						"Filelocation" : "",
						"Filename"  : "",
						"PhysLocation"  : "SHAREPT",
						"Url"      : "",
						"file"      : "",
						"enable"    :false
			  		  };
				this.getView().getModel().setProperty("/tranDetail/newAttach",obj);
				
			}
		}
		FileUploader.setUploadUrl("");
		FileUploader.clear();
		oAccordion.closeSection(oSectionDoc);
		oAccordion.openSection(oSectionDoc);
		
		//sap.ui.getCore().byId(sessionCache["pageID"] + "suppDoc").setTitle("Supporting Documents (" + oAttachModel.length + ")");
	},

	//Add files to table
	fileUpload1:function(file, oTableOther, FileUploader){	
			var obj = {
					"Refnumber" : this.getView().getModel().getProperty('/tranDetail/Refnumber'),
					"Attachtype" : "A",
					"Filecategory" : this.getView().getModel().getProperty("/tranDetail/AddDocType"),
					"Filelocation" : "",
					"Filename"  : file.name.replace(/,/gi,""),
					"PhysLocation"  : "SHAREPT",
					"Url"      : "http://jgsmlaspsd001:9130/sites/AppDevPortal/Shared Documents1/RE_SALES/BUYERS_CORNER/0000001525/BUYERDOC/NOTES ON LTO.TXT",
					"file"      :file,
					"enable"    :true
		  		  };

			this.getView().getModel().setProperty("/tranDetail/newAttach",obj);
		},
		
		//Upload Attachment to Sharepoint
		uploadAttachment:function(){
			var _this = this;
			var ret = false;
			var slug = undefined;

			var oAttachModel = this.getView().getModel().getProperty("/tranDetail/newAttach");
			var oData1 = this.getView().getModel().getProperty("/tranDetail");
			var file = oAttachModel.file;

			slug = oData1.Refnumber + ";RES_PLANREV;" + oData1.AddDocType + ";"+ file.name.replace(/,/gi,""); //mainLoc+","+oDataCFP.buCode+"\\" + oDataCFP.cfpNo+","+encodeURIComponent(file.name.replace(/,/gi,""))+", ,"+oDataCFP.cfpNo+"-"+file.name.replace(/,/gi,"");
			
			var fileName = file.name.replace(/,/gi,"");
			var fileType = file.type;	
				if(fileType == ""){
					if(file.name.split(".")[1] == "docx"){
						fileType = "application/vnd.openxmlformats-officedocument.wordprocessingml.document";				
					}else if(file.name.split(".")[1] == "doc"){
						fileType = "application/msword";
					}else if(file.name.split(".")[1] == "xlsx"){
						fileType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
					}else if(file.name.split(".")[1] == "xls"){
						fileType = "application/vnd.ms-excel";
					}else if(file.name.split(".")[1] == "pptx"){
						fileType = "application/vnd.openxmlformats-officedocument.presentationml.presentation";
					}else if(file.name.split(".")[1] == "ppt"){
						fileType = "application/vnd.ms-powerpoint";
					}else if(file.name.split(".")[1] == "image/png"){
						fileType = "image/png";
					}
				}

			//get security token
			$.ajax({
				type : "GET",
				url : "/sap/opu/odata/sap/ZGW_RLC_SALES_SRV/FileAttachmentSet?$format=json",
				headers: {"X-CSRF-Token":"Fetch","X-Requested-With":"XMLHttpRequest"},
				async:false,
				contentType:"application/json",
				success : function(data,response,xhrObj){
					var vToken = xhrObj.getResponseHeader("X-CSRF-Token");
					var oHeaders = {
							"X-CSRF-Token":vToken,
							"X-Requested-With": "XMLHttpRequest",
							"slug": slug,
							"Accept": "application/json"
						}; 
					
			    	jQuery.ajax({
						type: 'POST',
						url: "/sap/opu/odata/sap/ZGW_RLC_SALES_SRV/FileAttachmentSet",
						cache : false,
						headers: oHeaders,
						cache: false,
						contentType: fileType,
						processData: false,
						async:false,
						data: file,
						success: function(data){
							//var link = spServer + oAttachModel[index].subFolder +"/"+oDataCFP.cfpNo+"/"+encodeURIComponent(oAttachModel[index].file.name.replace(/,/gi,""));
							//_this.getView().getModel().setProperty("/tranDetai/Attachments/"+index+"/enable",true);
							//_this.getView().getModel().setProperty("/tranDetai/Attachments/"+index+"/link",link);
							//_this.getView().getModel().setProperty("/tranDetai/Attachments/"+index+"/docNo",oDataCFP.cfpNo);
							_this.showMsg("Upload Documents","Uploading of document successful!","SUCCESS");
						    ret = true;
						},
						error: function(err) {
							_this.showMsg("Upload Documents","Error uploading supporting documents.\nStatus Code: " + err.status + "\nStatus Text: " + err.statusText + "\nDescription: " + err.responseText,"ERROR");
							ret = false;
						}
					});
			},
			error : function(err) {
				_this.showMsg("Upload Documents","Error getting security token.\nStatus Code: " + err.status + "\nStatus Text: " + err.statusText + "\nDescription: " + err.responseText,"ERROR");
				ret = false;
			}
				});
		},

	/*Delete File*/
	delAttachment:function(index){
		jQuery(".mvn-dp-busyIndicator").css("display","block");
		var ret = false;
		_this = this;
		var oAttachData = this.getView().getModel().getProperty("/tranDetail/DeletedAttachments");

		//get security token
		$.ajax({
			type : "GET",
			url : "/sap/opu/odata/sap/ZGW_RLC_SALES_SRV/FileAttachmentSet?$format=json",
			headers: {"X-CSRF-Token":"Fetch","X-Requested-With":"XMLHttpRequest"},
			async:false,
			contentType:"application/json",
			success : function(data,response,xhrObj){
				var vToken = xhrObj.getResponseHeader("X-CSRF-Token");
				
				jQuery.ajax({
					type: 'DELETE',
					url: "/sap/opu/odata/sap/ZGW_RLC_SALES_SRV/FileAttachmentSet(Filename='" + oAttachData[0].Filename + "',Refnumber='" + oAttachData[0].Refnumber + "',Application='RES_PLANREV')/$value",
					headers: {"X-CSRF-Token":vToken,"X-Requested-With":"JSONHttpRequest"}, //,Authorization:	'Basic ' + validUser},
					async:false,	
					success: function(data){
						_this.getView().getModel().setProperty("/tranDetail/DeletedAttachments",oAttachData);
						ret = true;
						
					},
					error: function(err){
						_this.showMsg("Delete Documents","Error deleting supporting documents.\nStatus Code: " + err.status + "\nStatus Text: " + err.statusText + "\nDescription: " + err.responseText,"ERROR");
						ret = false;
					}
				});
			},
			error : function(err) {
				_this.showMsg("Delete Documents","Error getting security token.\nStatus Code: " + err.status + "\nStatus Text: " + err.statusText + "\nDescription: " + err.responseText,"ERROR");
				ret = false;
			}
		});
		
		return ret;
	},
		
	delAttachment1:function(index,oTableOther,oSectionDoc){
		var _this = this;
		var ret = false;
		var oAttachModel = this.getView().getModel().getProperty("/tranDetail/Attachments");
		//if(oAttachModel[index].enable==true){
			var delAttach = this.getView().getModel().getProperty("/tranDetail/DeletedAttachments");
			if (delAttach == undefined) delAttach = [];
			delAttach.push(oAttachModel[index]);
			this.getView().getModel().setProperty("/tranDetail/DeletedAttachments",delAttach);
			ret = _this.delAttachment(index);
		//}
			if(ret){
				delete oAttachModel[index];
				oAttachModel.splice(index,1);
				this.getView().getModel().getProperty("/tranDetail/Attachments",oAttachModel);
				if(oAttachModel.length == 0){
					oTableOther.setVisible(false);
				}else{
					oTableOther.setVisibleRowCount(oAttachModel.length);
				}
				oTableOther.bindRows("/tranDetail/Attachments");
				if(oSectionDoc.getCollapsed() == false){
					oSectionDoc.setCollapsed(true);
					oSectionDoc.setCollapsed(false);
				}
			}
	},
	
	showMsg:function(title1, msg, icon1) {
		jQuery.sap.require("sap.m.MessageBox");
		
		sap.m.MessageBox.show(msg, {
			 icon: (icon1 == "ERROR") ? sap.m.MessageBox.Icon.ERROR : sap.m.MessageBox.Icon.SUCCESS
			,title: title1
			,actions: [sap.m.MessageBox.Action.OK]
		})
	}
});