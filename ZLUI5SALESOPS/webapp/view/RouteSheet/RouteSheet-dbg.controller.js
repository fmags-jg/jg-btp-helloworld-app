sap.ui.controller("views.RouteSheet.RouteSheet", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf views.RouteSheet.RouteSheet
*/
//	onInit: function() {
//        
//	}

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf views.RouteSheet.RouteSheet
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf views.RouteSheet.RouteSheet
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf views.RouteSheet.RouteSheet
*/
//	onExit: function() {
//
//	}
	approveDisapprove: function(oAction,tdlines) {
		var oBusyDialog = new sap.m.BusyDialog({text: oAction + ' Route Sheet request. Please wait...'});
		oBusyDialog.open();
		
		var ret = false;
		var _this = this;
		var oDetail = this.getView().getModel().getProperty('/tranDetail'); 

		var newamt = oDetail.zrs_routesheet_detailsSet[0].Newunitprice;
		//Add Christian de Leon 03/11/2020
		var newlotprice = oDetail.zrs_routesheet_detailsSet[0].Newtlotprice;
		var newhouseprice = oDetail.zrs_routesheet_detailsSet[0].Newhouseprice;
		//Add Christian de Leon 03/11/2020
		
		//Add Christian de Leon 05/29/2018
		var newStatus = oDetail.zrs_routesheet_detailsSet[0].Newunitstatus;
		var oApprovers = this.getView().getModel().getProperty('/tranDetail/approverSet');
		var oApproverSet = oApprovers;
		var oUserName = "";
		//Get User details once logged in
		//Get User details by using srv;
		    var y = '/sap/bc/ui2/start_up';
		    var xmlHttp = null;
		    xmlHttp = new XMLHttpRequest();
		    xmlHttp.onreadystatechange = function() {
		    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
		       var oUserData = JSON.parse(xmlHttp.responseText);
		          console.log(oUserData);
		          oUserName = oUserData.id;
		       }
		    };
		    xmlHttp.open( 'GET', y, false );
		    xmlHttp.send(null);		    
		//Add Christian de Leon 05/29/2018
			for(var i = 0; i < oApproverSet.length; i++){
				lastApprover = oApproverSet[i].UserName;
			}
			if (lastApprover === oUserName){
				if (newamt === "0.00" || newStatus === "") {
//					Alert("Please input New Unit Status/Price.");
					oBusyDialog.close();
					showActionMsg("ROUTESHEET-"+oAction.toUpperCase(), "ERROR3", "Unable to " + oAction + 
							" Route Sheet Request.\nPlease enter New Unit Status/Price.");
				}
				else{
					//End - Add Christian de Leon 05/29/2018
					var _oData = {
							"Refnumber": oDetail.RefNumber, 
							"NewStatus":oDetail.zrs_routesheet_detailsSet[0].Newunitstatus , 
							"EvRefnumber":oDetail.zrs_routesheet_headerSet[0].Newcontnumber , 
							"NewUnitPrice": newamt, 
							"NewValidFromDate":oDetail.zrs_routesheet_detailsSet[0].NValidFrom,
							//Add Christian de Leon 03/11/2020
							"NewLotPrice": newlotprice, 
							"NewLotPriceValidFrom":oDetail.zrs_routesheet_detailsSet[0].Nlvalidfrom,
							"NewHousePrice": newhouseprice, 
							"NewHousePriceValidFrom":oDetail.zrs_routesheet_detailsSet[0].Nhvalidfrom,
							//Add Christian de Leon 03/11/2020
						    "rsapprovalToCommentsSet": tdlines
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
								url : "/sap/opu/odata/sap/ZGW_RLC_SALES_SRV/zrs_routesheet_actionSet",
								headers: {"X-CSRF-Token":vToken,"X-Requested-With":"JSONHttpRequest"}, //,Authorization:	'Basic ' + validUser},
								async:false,
								contentType:"application/json",
								dataType:"json", 
					            data: JSON.stringify(_oData),
								success : function(data,response,xhrObj) {
									try {
										if(data.d.Type != "S") {
											oBusyDialog.close();
											showActionMsg("ROUTESHEET-"+oAction.toUpperCase(), "ERROR1",data.d.Message);
											return false;
										} 
										
										showActionMsg("ROUTESHEET-"+oAction.toUpperCase(), "SUCCESS","",oDetail.RefNumber);
										sap.ui.getCore().byId(sessionCache["pageID"] + "oBtnApprove").setEnabled(false);
										sap.ui.getCore().byId(sessionCache["pageID"] + "oTAComments").setValue("");
										ret = true;
										
										oBusyDialog.close();
					                } catch(ex) {
										oBusyDialog.close();
										showActionMsg("ROUTESHEET-"+oAction.toUpperCase(), "ERROR2", ex.message);
					                }
								},
								error : function(err) {
									oBusyDialog.close();
									showActionMsg("ROUTESHEET-"+oAction.toUpperCase(), "ERROR3", "Unable to " + oAction + " Route Sheet Request.\nStatus Code: " + err.status + "\nStatus Text: " + err.statusText + "\nDescription: " + err.responseText);
								}
							});
						},
						error : function() {
							oBusyDialog.close();
							showActionMsg("ROUTESHEET-"+oAction.toUpperCase(), "ERROR4", oAction + " Route Sheet Request. Unable to fecth security token.");
						}
					});
					return ret;	
						}
			}
			else{
		//End - Add Christian de Leon 05/29/2018
		var _oData = {
				"Refnumber": oDetail.RefNumber, 
				"NewStatus":oDetail.zrs_routesheet_detailsSet[0].Newunitstatus , 
				"EvRefnumber":oDetail.zrs_routesheet_headerSet[0].Newcontnumber , 
				"NewUnitPrice": newamt, 
				//Add Christian de Leon 03/11/2020
				"NewLotPrice": newlotprice, 
				"NewLotPriceValidFrom":oDetail.zrs_routesheet_detailsSet[0].Nlvalidfrom,
				"NewHousePrice": newhouseprice, 
				"NewHousePriceValidFrom":oDetail.zrs_routesheet_detailsSet[0].Nhvalidfrom,
				//Add Christian de Leon 03/11/2020
				"NewValidFromDate":oDetail.zrs_routesheet_detailsSet[0].NValidFrom
			   ,"rsapprovalToCommentsSet": tdlines
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
					url : "/sap/opu/odata/sap/ZGW_RLC_SALES_SRV/zrs_routesheet_actionSet",
					headers: {"X-CSRF-Token":vToken,"X-Requested-With":"JSONHttpRequest"}, //,Authorization:	'Basic ' + validUser},
					async:false,
					contentType:"application/json",
					dataType:"json", 
		            data: JSON.stringify(_oData),
					success : function(data,response,xhrObj) {
						try {
							if(data.d.Type != "S") {
								oBusyDialog.close();
								showActionMsg("ROUTESHEET-"+oAction.toUpperCase(), "ERROR1",data.d.Message);
								return false;
							} 
							
							showActionMsg("ROUTESHEET-"+oAction.toUpperCase(), "SUCCESS","",oDetail.RefNumber);
							sap.ui.getCore().byId(sessionCache["pageID"] + "oBtnApprove").setEnabled(false);
							sap.ui.getCore().byId(sessionCache["pageID"] + "oTAComments").setValue("");
							ret = true;
							
							oBusyDialog.close();
		                } catch(ex) {
							oBusyDialog.close();
							showActionMsg("ROUTESHEET-"+oAction.toUpperCase(), "ERROR2", ex.message);
		                }
					},
					error : function(err) {
						oBusyDialog.close();
						showActionMsg("ROUTESHEET-"+oAction.toUpperCase(), "ERROR3", "Unable to " + oAction + " Route Sheet Request.\nStatus Code: " + err.status + "\nStatus Text: " + err.statusText + "\nDescription: " + err.responseText);
					}
				});
			},
			error : function() {
				oBusyDialog.close();
				showActionMsg("ROUTESHEET-"+oAction.toUpperCase(), "ERROR4", oAction + " Route Sheet Request. Unable to fecth security token.");
			}
		});
		return ret;	
			}
			},
	
	//************************* ATTACHMENTS ***************************//

	doneUpload:function(oTableOther, FileUploader, oFirstDialog2, oAccordion, oSectionDoc){
		var oUploadModel = this.getView().getModel().getProperty("/tranDetail/newAttach");
		//var oAttachModel = this.getView().getModel().getProperty("/tranDetail/Attachments");
		if(oUploadModel != undefined){
			if (oUploadModel.fileName != "") {
				
				//if (oAttachModel == undefined) {
				//	oAttachModel = [];
				//}
				
				//oAttachModel.push(oUploadModel);
				//this.getView().getModel().setProperty("/tranDetail/Attachments",oAttachModel);

				//upload to Sharepoint
				this.uploadAttachment(oUploadModel,oTableOther);

				//oTableOther.setVisibleRowCount(oAttachModel.length);
				//oTableOther.setVisible(true);

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
					"Refnumber" : this.getView().getModel().getProperty('/tranDetail/RefNumber'),
					"Attachtype" : "A",
					"Filecategory" : "RES_ROUTESHEET",
					"Filelocation" : "",
					"Filename"  : file.name.replace(/,/gi,""),
					"PhysLocation"  : "SHAREPT",
					"Url"      : "",
					"file"      :file,
					"enable"    :true
		  		  };

			this.getView().getModel().setProperty("/tranDetail/newAttach",obj);
		},
		
		//Upload Attachment to Sharepoint
		uploadAttachment:function(oUploadModel,oTableOther){
			var _this = this;
			var ret = false;
			var slug = undefined;

			var oAttachModel = this.getView().getModel().getProperty("/tranDetail/newAttach");
			var oAttachModel1 = this.getView().getModel().getProperty("/tranDetail/Attachments");
			var oData1 = this.getView().getModel().getProperty("/tranDetail");
			var file = oAttachModel.file;

			slug = oData1.RefNumber + ";RES_ROUTESHEET;RES_ROUTESHEET;"+ file.name.replace(/,/gi,""); //mainLoc+","+oDataCFP.buCode+"\\" + oDataCFP.cfpNo+","+encodeURIComponent(file.name.replace(/,/gi,""))+", ,"+oDataCFP.cfpNo+"-"+file.name.replace(/,/gi,"");
			
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

							if (oAttachModel1 == undefined) {
								oAttachModel1 = [];
							}
							oUploadModel.Url = data.d.URL;
							oAttachModel1.push(oUploadModel);
							_this.getView().getModel().setProperty("/tranDetail/Attachments",oAttachModel1);
							oTableOther.setVisibleRowCount(oAttachModel1.length);
							oTableOther.setVisible(true);

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
	delAttachment:function(){
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
					url: "/sap/opu/odata/sap/ZGW_RLC_SALES_SRV/FileAttachmentSet(Filename='" + oAttachData[0].Filename + "',Refnumber='" + oAttachData[0].Refnumber + "',Application='RES_ROUTESHEET')/$value",
					headers: {"X-CSRF-Token":vToken,"X-Requested-With":"JSONHttpRequest"}, //,Authorization:	'Basic ' + validUser},
					async:false,	
					success: function(data){
						_this.getView().getModel().setProperty("/tranDetail/DeletedAttachments",[]);
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
	},
	/*Add Christian de Leon for validating required field(New Unit status and price)*/
	validateNewUnitStatus:function(){
		var nameText = sap.ui.getCore().byId("iNewUnitStatus");
		if(nameText.getValue() === ""){
			alert("Please enter New Unit Status.");
		}
	},
	validateNewUnitPrice:function(){
		var nameText = sap.ui.getCore().byId("iNewUnitPrice");
		if(nameText.getValue() === ""){
			alert("Please enter New Unit Price.");
		}
	}
	/*End Christian de Leon 05/28/2018*/
});