sap.ui.controller("view.Home", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf cebms_sapui.Home
*/
	onInit: function() {
		//this.refreshItems();
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf cebms_sapui.Home
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf cebms_sapui.Home
*/
//	onAfterRendering: function() {
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf cebms_sapui.Home
*/
//	onExit: function() {
//
//	}
	
	refreshItems: function(oAccordion, oSection1, oSection2) {
		//jQuery.sap.log.error("This should never have happened!");
		var _this = this;
		var oBusyDialog = new sap.m.BusyDialog({text:'Loading ACTIONS ITEMS. Please wait...'});
		oBusyDialog.open();
		
		var data = [{ requestNum: "1", requestType: "UPGRADE" ,requestDate: "06/02/2015" ,itemgroup: "1"
					 ,contractNum: "123456" ,principalBuyer: "Andy Lim" ,businessPartner: "" ,role: ""
					 ,bldg_proj: "" , unit: "" 
		            },
		            { requestNum: "2", requestType: "DOWNGRADE" ,requestDate: "06/03/2015" ,itemgroup: "1"
						 ,contractNum: "123457" ,principalBuyer: "Kathy Ting" ,businessPartner: "" ,role: ""
						 ,bldg_proj: "" , unit: ""
			        },
		            { requestNum: "3", requestType: "RESTRUCTURE" ,requestDate: "06/04/2015" ,itemgroup: "1"
						 ,contractNum: "123458" ,principalBuyer: "Eva Yan" ,businessPartner: "" ,role: ""
						 ,bldg_proj: "" , unit: "" 
			        },
		            { requestNum: "0000000077", requestType: "Inclusion & Exclusion Of Buyer" ,requestDate: "06/04/2015" ,itemgroup: "1"
						 ,contractNum: "123458" ,principalBuyer: "Bill Li" ,businessPartner: "" ,role: ""
						 ,bldg_proj: "" , unit: "" 
			        },
		            { requestNum: "0000000040", requestType: "Create Agent" ,requestDate: "06/04/2015" ,itemgroup: "2"
						 ,contractNum: "123458" ,principalBuyer: "" ,businessPartner: "Kenneth Sy" ,role: "Sales Manager"
						 ,bldg_proj: "" , unit: "" 
			         },
			         { requestNum: "6", requestType: "Renew Agent" ,requestDate: "06/04/2015" ,itemgroup: "2"
							 ,contractNum: "123458" ,principalBuyer: "" ,businessPartner: "Lino Co" ,role: "Account Manager"
							 ,bldg_proj: "" , unit: ""
				      },
			         { requestNum: "7", requestType: "ATMI" ,requestDate: "06/01/2015" ,itemgroup: "3"
							 ,contractNum: "223458" ,principalBuyer: "Allen Sia" ,businessPartner: "" ,role: ""
							 ,bldg_proj: "234234" , unit: "IPC0105L"
				      },
			         { requestNum: "8", requestType: "Plan Revision" ,requestDate: "07/04/2015" ,itemgroup: "3"
							 ,contractNum: "223451" ,principalBuyer: "Sam Ting" ,businessPartner: "" ,role: ""
							 ,bldg_proj: "564234" , unit: "IPC0105D" 
				      },
			         { requestNum: "9", requestType: "Comm Rate" ,requestDate: "07/09/2015" ,itemgroup: "3"
							 ,contractNum: "243458" ,principalBuyer: "Tina Go" ,businessPartner: "" ,role: ""
							 ,bldg_proj: "93234" , unit: "IPC0105G"
				      }
					];
		
		var oModel = new sap.ui.model.json.JSONModel();
		oModel.setData({itemsData: []})
		this.getView().setModel(oModel);
/*
		var line,data1 =[],data2 = [],data3 =[];
		for(var i = 0; i < data.length; i++){
			line = {requestNum: data[i].requestNum, requestType: data[i].requestType ,requestDate: data[i].requestDate ,itemgroup: data[i].itemgroup
				 ,contractNum: data[i].contractNum ,principalBuyer: data[i].principalBuyer ,businessPartner: data[i].businessPartner ,role: data[i].role
					 ,bldg_proj: data[i].bldg_proj , unit: data[i].unit};
			
			if (data[i].itemgroup == "1") {
				data1.push(line);
			} else if (data[i].itemgroup == "2") {
				data2.push(line);
			} else if (data[i].itemgroup == "3") {
				data3.push(line);
			}
		}
		
		oModel.setProperty('/group1',data1);
		oModel.setProperty('/group2',data2);
		oModel.setProperty('/group3',data3);
		
*/
		$.ajax({
			type : "GET",
			//headers: {"Accept-Encoding":"gzip, deflate"},
			url : "/sap/opu/odata/sap/ZGW_RLC_SALES_SRV/actionItemsSet?$format=json",
			dataType : "json",
			success : function(aData) {
				///////////////////
				 if (!aData) {  
					  jQuery.sap.log.fatal("The following problem occurred: No data was retrieved by service: ");  
					  }  
				////////////////////////////////
				data = aData.d.results;
				var line,data1 =[],data2 = [],data3 =[];
				var reqDate;
				for(var i = 0; i < data.length; i++){
					reqDate = new Date(parseInt(data[i].RequestDate)).toLocaleString();

					/*
        			if (data[i].RequestDate.substr(0,8) == "00000000" || (data[i].RequestDate.substr(0,1)).trim() == "" || data[i].RequestDate == null) {
        				reqDate = "";
        			} else {
        				reqDate = data[i].RequestDate.substr(4,2) + "/" + data[i].RequestDate.substr(6,2) + "/" + data[i].RequestDate.substring(0,4);
        				reqDate = reqDate + " " + data[i].RequestDate.substr(8,2) + ":" + data[i].RequestDate.substr(10,2) + ":" + data[i].RequestDate.substr(12,2);
        			}
					*/
					line = {requestNum: data[i].RequestNumber, requestType: data[i].RequestType ,requestDate: data[i].RequestDateFormatted ,itemgroup: data[i].Grouping
						 ,contractNum: data[i].ContractNumber ,principalBuyer: data[i].PrincipalBuyer ,businessPartner: data[i].BusinessPartner ,role: data[i].Role
							 ,bldg_proj: data[i].BldgprojDesc , unit: data[i].Unit, Application: data[i].Application};
					
					if (data[i].Grouping == "ADJADVICE") {
						data1.push(line);
					} else if (data[i].Grouping == "MASTERDATA") {
						data2.push(line);
					} else { // if (data[i].Grouping == "3") {
						data3.push(line);
					}
				}
				
				oModel.setProperty('/group1',data1);
				oModel.setProperty('/group2',data2);
				oModel.setProperty('/group3',data3);
				
				if (data1.length == 0) {
					//var oAccordion, oSection;
					if (data2.length > 0) {
						oAccordion.openSection(oSection1);
					 // oAccordion = document.getElementById("oAccordion");
					 // oSection = document.getElementById("HomeSection2");
					} else if (data3.length > 0) {
						oAccordion.openSection(oSection2);
					  //oAccordion = document.getElementById("oAccordion");
					 // oSection = document.getElementById("HomeSection3");
					}
					//oAccordion.closeSection(oSection);
					//oAccordion.openSection(oSection);
				}

				oBusyDialog.close();
			},
			error : function(XMLHttpRequest, textStatus, errorThrown){
				///////////////////////////////////////////
 
					  var oError = { message : textStatus, statusCode : XMLHttpRequest.status, statusText : XMLHttpRequest.statusText, responseText : XMLHttpRequest.responseText};  
					  jQuery.sap.log.fatal("The following problem occurred: " + textStatus, XMLHttpRequest.responseText + ","  
					  + XMLHttpRequest.status + "," + XMLHttpRequest.statusText);  
					  //_this.fireRequestCompleted({url : sURL, type : sType, async : bAsync, headers: mHeaders,  
					  //info : "cache="+bCache+";bMerge=" + bMerge, infoObject: {cache : bCache, merge : bMerge}, success: false, errorobject: oError});  
					  //_this.fireRequestFailed(oError);  
					 // alert("my:"+ oError);
				////////////////////////////////////////////
				oBusyDialog.close();
				alert("Status Code: " + XMLHttpRequest.status + "\nStatus Text: " + XMLHttpRequest.statusText + "\nMessage: " + XMLHttpRequest.responseText );
			}
		});
	
		oBusyDialog.close();
	},

	displayDetails: function(_data) {
		var _this = this;
		var oBusyDialog;
		/******************* B U Y E R S   I N C L U S I O N   A N D  E X C L U S I O N  **********************/
		if (_data.Application == "RES_INEXBUYER") {
			oBusyDialog = new sap.m.BusyDialog({text:'Retrieving Buyers details. Please wait...'});
			oBusyDialog.open();
			$.ajax({
				type : "GET",
				url : "/sap/opu/odata/sap/ZGW_RLC_SALES_SRV/inexSet(Refnumber='"+ _data.requestNum+"')?$expand=inexToDetail,inexToApprover/approverComment,inexToRemarks,inexToDisplayOld,inexToDisplayNew&$format=json",
				dataType : "json",
				success : function(aData) {
					aData.d.inexToRemarks = aData.d.inexToRemarks.results;
					aData.d.inexToDisplayOld = aData.d.inexToDisplayOld.results;
					aData.d.inexToDisplayNew = aData.d.inexToDisplayNew.results;
					aData.d.inexToApprover = aData.d.inexToApprover.results;
					aData.d.DateOfSale = sapDateFormat(aData.d.DateOfSale);
					
					var comments = "";
					for(var a = 0; a < aData.d.inexToApprover.length; a++){
						comments = "";
						for(var b = 0; b < aData.d.inexToApprover[a].approverComment.results.length; b++){
							//if (comments != "") comments = comments + "\n";
							comments = comments + aData.d.inexToApprover[a].approverComment.results[b].Line;
						}
						aData.d.inexToApprover[a].approverComment = comments;
					}

					comments = "";
					for(var a = 0; a < aData.d.inexToRemarks.length; a++){
						if (comments != "") comments = comments + "\n";
						comments = comments + aData.d.inexToRemarks[a].Line;
					}
					aData.d.remarks = comments;

					//get Attachments
					_this.getAttachments(aData.d,_data.requestNum);
					
					document.getElementById("currentItem").innerHTML = " > Inclusion & Exclusion Of Buyer";
					showContent("inExApproval" ,"views.Buyer.InclusionExclusion" , "Inclusion & Exclusion Of Buyer", aData.d);

					oBusyDialog.close();
				},
				error : function(err) {
					oBusyDialog.close();
					alert("No data retrieved for the selected request.\nStatus Code: " + err.status + "\ndescription: " + err.statusText + "\n" + err.responseText);
				}
			});
			/******************B U Y E R S    C H A N G E    I N F O R M A T I O N  **************************/
			} else if (_data.Application == "RES_BUYERINFO") {
				oBusyDialog = new sap.m.BusyDialog({text:'Retrieving Buyers details. Please wait...'});
				oBusyDialog.open();
				$.ajax({
					type : "GET",
					url : "/sap/opu/odata/sap/ZGW_RLC_SALES_SRV/basicBuyerInfoSet(REFNUMBER='"+ _data.requestNum+"')?$expand=buyerInfoFrom,buyerInfoTo,buyerInfoAddressFrom,buyerInfoAddressTo,buyerInfoContracts,buyerInfoContractAddress,approver/approverComment,remarks,buyerInfoPassport,buyerAttyFrSet,buyerAttyToSet&$format=json",
					dataType : "json",
					success : function(aData) {
						aData.d.approver = aData.d.approver.results;
						aData.d.buyerInfoFrom = aData.d.buyerInfoFrom.results;
						aData.d.buyerInfoTo = aData.d.buyerInfoTo.results;
						aData.d.buyerInfoAddressFrom = aData.d.buyerInfoAddressFrom.results;
						aData.d.buyerInfoAddressTo = aData.d.buyerInfoAddressTo.results;
						aData.d.buyerInfoContracts = aData.d.buyerInfoContracts.results;
						aData.d.buyerInfoContractAddress = aData.d.buyerInfoContractAddress.results;
						aData.d.buyerInfoPassport = aData.d.buyerInfoPassport.results;
						aData.d.buyerAttyFrSet = aData.d.buyerAttyFrSet.results;
						aData.d.buyerAttyToSet = aData.d.buyerAttyToSet.results;
						
						//***********REPRESENTATIVES******************//
						var rep1Fr = "";
						var rep2Fr = "";
						var rep1To = "";
						var rep2To = "";
						for(var i = 0; i < aData.d.buyerAttyFrSet.length; i++){
							if(aData.d.buyerAttyFrSet[i].Counter == "0001"){
							//if ( i == 0) {
								rep1Fr = aData.d.buyerAttyFrSet[i].Text;
							}
							if(aData.d.buyerAttyFrSet[i].Counter == "0002"){ //else if (i == 1) { 
								rep2Fr = aData.d.buyerAttyFrSet[i].Text;
								//break;
							}
						}
						for(var i = 0; i < aData.d.buyerAttyToSet.length; i++){
							if(aData.d.buyerAttyToSet[i].Counter == "0001"){
							//if ( i == 0) {
								rep1To = aData.d.buyerAttyToSet[i].Text;
							}
							if(aData.d.buyerAttyToSet[i].Counter == "0002"){ //else if (i == 1) { 
							   rep2To = aData.d.buyerAttyToSet[i].Text;
							   //break;
							} 
						}
						var buyerAttySets = {
							"Rep1From" : rep1Fr, "Rep2From" : rep2Fr,
							"Rep1To" : rep1To, "Rep2To" : rep2To
						};
						aData.d.buyerAttySet = buyerAttySets;
						//***********REPRESENTATIVES******************//
						
						aData.d.buyerInfoTo[0].BIRTHDATE = sapDateFormat(aData.d.buyerInfoTo[0].BIRTHDATE);
						aData.d.buyerInfoFrom[0].BIRTHDATE = sapDateFormat(aData.d.buyerInfoFrom[0].BIRTHDATE);
						aData.d.buyerInfoTo[0].SPOUSE_BIRTHDATE = sapDateFormat(aData.d.buyerInfoTo[0].SPOUSE_BIRTHDATE);
						aData.d.buyerInfoFrom[0].SPOUSE_BIRTHDATE = sapDateFormat(aData.d.buyerInfoFrom[0].SPOUSE_BIRTHDATE);

						aData.d.buyerInfoTo[0].SPOUSE_RELATIONSHIP_FROM = sapDateFormat(aData.d.buyerInfoTo[0].SPOUSE_RELATIONSHIP_FROM);
						aData.d.buyerInfoFrom[0].SPOUSE_RELATIONSHIP_FROM = sapDateFormat(aData.d.buyerInfoFrom[0].SPOUSE_RELATIONSHIP_FROM);
						aData.d.buyerInfoTo[0].SPOUSE_RELATIONSHIP_TO = sapDateFormat(aData.d.buyerInfoTo[0].SPOUSE_RELATIONSHIP_TO);
						aData.d.buyerInfoFrom[0].SPOUSE_RELATIONSHIP_TO = sapDateFormat(aData.d.buyerInfoFrom[0].SPOUSE_RELATIONSHIP_TO);
						
						aData.d.buyerInfoPassport[0].ValidDateFrom = sapDateFormat(aData.d.buyerInfoPassport[0].ValidDateFrom);
						aData.d.buyerInfoPassport[0].ValidDateTo = sapDateFormat(aData.d.buyerInfoPassport[0].ValidDateTo);
						
						var comments = "";
						for(var a = 0; a < aData.d.approver.length; a++){
							comments = "";
							for(var b = 0; b < aData.d.approver[a].approverComment.results.length; b++){
								//if (comments != "") comments = comments + "\n";
								comments = comments + aData.d.approver[a].approverComment.results[b].Line;
							}
							aData.d.approver[a].approverComment = comments;
						}

						comments = "";
						for(var a = 0; a < aData.d.remarks.results.length; a++){
							if (comments != "") comments = comments + "\n";
							comments = comments + aData.d.remarks.results[a].Line;
						}
						aData.d.remarks = comments;

						//oCBICitizen = aData.d.buyerInfoTo[0].CITIZENSHIP_TEXT;
						if(aData.d.buyerInfoFrom[0].CITIZENSHIP_TEXT != aData.d.buyerInfoTo[0].CITIZENSHIP_TEXT){
							oCBICitizen = true;
						}
						
						oBPType = aData.d.buyerInfoFrom[0].BPTYPE;
						if (oBPType == 1) {
						   if ( aData.d.buyerInfoFrom[0].MARITALSTATUS_TEXT == "Married" || aData.d.buyerInfoTo[0].MARITALSTATUS_TEXT == "Married") {
							   oBuyerMStatus = "Married";
						   }
						}

						//get Attachments
						_this.getAttachments(aData.d,_data.requestNum);
						
						document.getElementById("currentItem").innerHTML = " > Change Of Buyer Information";
						showContent("chgBuyerApproval" ,"views.Buyer.ChangeBuyerInfo" , "Change Of Buyer Information", aData.d);

						oBusyDialog.close();
					},
					error : function(err) {
						oBusyDialog.close();
						alert("No data retrieved for the selected request.\nStatus Code: " + err.status + "\ndescription: " + err.statusText + "\n" + err.responseText);
					}
				});

				/******************A R E A    A D J U S T M E N T  **************************/
				} else if (_data.Application == "RES_AREAADJUST") {
					oBusyDialog = new sap.m.BusyDialog({text:'Retrieving Area Adjustment details. Please wait...'});
					oBusyDialog.open();
					$.ajax({
						type : "GET",
						url : "/sap/opu/odata/sap/ZGW_RLC_SALES_SRV/aa_headerSet(Refnumber='"+ _data.requestNum+"')?$expand=aa_headerToOldArea,aa_headerToNewArea,aa_headerToPaymentTerms,aa_headerToApprover/approverComment,aa_headerToRemarks&$format=json",
						dataType : "json",
						success : function(aData) {
							aData.d.aa_headerToOldArea = aData.d.aa_headerToOldArea.results;
							aData.d.aa_headerToNewArea = aData.d.aa_headerToNewArea.results;
							aData.d.aa_headerToPaymentTerms = aData.d.aa_headerToPaymentTerms.results;
							aData.d.aa_headerToApprover = aData.d.aa_headerToApprover.results;
							aData.d.aa_headerToRemarks = aData.d.aa_headerToRemarks.results;
							aData.d.DateOfSale = sapDateFormat(aData.d.DateOfSale);
							
							var comments = "";
							for(var a = 0; a < aData.d.aa_headerToApprover.length; a++){
								comments = "";
								for(var b = 0; b < aData.d.aa_headerToApprover[a].approverComment.results.length; b++){
									//if (comments != "") comments = comments + "\n";
									comments = comments + aData.d.aa_headerToApprover[a].approverComment.results[b].Line;
								}
								aData.d.aa_headerToApprover[a].approverComment = comments;
							}
							
							comments = "";
							for(var a = 0; a < aData.d.aa_headerToRemarks.length; a++){
								if (comments != "") comments = comments + "\n";
								comments = comments + aData.d.aa_headerToRemarks[a].Line;
							}
							aData.d.aa_headerToRemarks = comments;

							//get Attachments
							_this.getAttachments(aData.d,_data.requestNum);
							
							document.getElementById("currentItem").innerHTML = " > Area Adjustment";
							showContent("areaAdjustApproval" ,"views.Buyer.AreaAdjustment" , "Area Adjustment", aData.d);

							oBusyDialog.close();
						},
						error : function(err) {
							oBusyDialog.close();
							alert("No data retrieved for the selected request.\nStatus Code: " + err.status + "\ndescription: " + err.statusText + "\n" + err.responseText);
						}
					});

				/****************** T R A N S F E R     O F     O W N E R S H I P  **************************/
				} else if (_data.Application == "RES_TRANSOWNER") {
					oBusyDialog = new sap.m.BusyDialog({text:'Retrieving Buyers details. Please wait...'});
					oBusyDialog.open();
					$.ajax({
						type : "GET",
						url : "/sap/opu/odata/sap/ZGW_RLC_SALES_SRV/transownSet(Refnumber='"+ _data.requestNum+"',Agent='')?$expand=transownBuyerFrom,transownBuyerTo,transownToapprover/approverComment,transownToattachment,transownToremarks&$format=json",
						dataType : "json",
						success : function(aData) {
							aData.d.Refnumber = _data.requestNum;
							aData.d.transownBuyerFrom = aData.d.transownBuyerFrom.results;
							aData.d.transownBuyerTo = aData.d.transownBuyerTo.results;
							aData.d.transownToapprover = aData.d.transownToapprover.results;
							aData.d.transownToremarks = aData.d.transownToremarks.results;
							aData.d.SaleDate = sapDateFormat(aData.d.SaleDate);
							
							var comments = "";
							for(var a = 0; a < aData.d.transownToapprover.length; a++){
								comments = "";
								for(var b = 0; b < aData.d.transownToapprover[a].approverComment.results.length; b++){
									//if (comments != "") comments = comments + "\n";
									comments = comments + aData.d.transownToapprover[a].approverComment.results[b].Line;
								}
								aData.d.transownToapprover[a].approverComment = comments;
							}

							comments = "";
							for(var a = 0; a < aData.d.transownToremarks.length; a++){
								if (comments != "") comments = comments + "\n";
								comments = comments + aData.d.transownToremarks[a].Line;
							}
							aData.d.remarks = comments;

							//get Attachments
							_this.getAttachments(aData.d,_data.requestNum);
							
							document.getElementById("currentItem").innerHTML = " > Transfer of Ownership";
							showContent("transOwnershipApproval" ,"views.Buyer.TransferOfOwnership" , "Transfer of Ownership", aData.d);

							oBusyDialog.close();
						},
						error : function(err) {
							oBusyDialog.close();
							alert("No data retrieved for the selected request.\nStatus Code: " + err.status + "\ndescription: " + err.statusText + "\n" + err.responseText);
						}
					});

					/****************** B U Y E R S    C A N C E L L A T I O N  **************************/
					} else if (_data.Application == "RES_CANCELATN") {
						oBusyDialog = new sap.m.BusyDialog({text:'Retrieving Buyers details for cancellation. Please wait...'});
						oBusyDialog.open();
						$.ajax({
							type : "GET",
							url : "/sap/opu/odata/sap/ZGW_RLC_SALES_SRV/cnCancelSet(Refnumber='"+ _data.requestNum+"')?$expand=cnContractDetailsSet,cnParkedContractsSet,cnBuyersSet,cnContractOtherDetailsSet,cnPaymentDetailsSet,cnCommissionDetailsSet,cnCancellationDetailsSet,cnRefundSet,cnForfeitSet,cnTransferSet,cnInstructionsSet,approverSet/approverComment,cnNocRemarksSet,cnInstructionRemarksSet,cnOtherReasonSet,cnAmtConversionSet,cnRemarksSet&$format=json",
							dataType : "json",
							success : function(aData) {
								aData.d.cnContractDetailsSet = aData.d.cnContractDetailsSet.results;
								aData.d.cnCancellationDetailsSet = aData.d.cnCancellationDetailsSet.results;
								aData.d.cnCancellationDetailsSet[0].Totalpaid = util.Formatter.amount(aData.d.cnCancellationDetailsSet[0].Totalpaid.replace(/,/g,""));
								aData.d.cnBuyersSet = aData.d.cnBuyersSet.results;
								aData.d.approverSet = aData.d.approverSet.results;
								aData.d.cnNocRemarksSet = aData.d.cnNocRemarksSet.results;
								aData.d.cnOtherReasonSet = aData.d.cnOtherReasonSet.results;
								aData.d.cnRefundSet = aData.d.cnRefundSet.results;
								aData.d.cnPaymentDetailsSet = aData.d.cnPaymentDetailsSet.results;
								aData.d.cnCommissionDetailsSet = aData.d.cnCommissionDetailsSet.results;
								aData.d.cnInstructionsSet = aData.d.cnInstructionsSet.results;
								aData.d.cnTransferSet = aData.d.cnTransferSet.results;
								aData.d.cnParkedContractsSet = aData.d.cnParkedContractsSet.results;
								aData.d.cnForfeitSet = aData.d.cnForfeitSet.results;
								aData.d.cnContractOtherDetailsSet = aData.d.cnContractOtherDetailsSet.results;
								aData.d.cnAmtConversionSet = aData.d.cnAmtConversionSet.results;
								aData.d.cnRemarksSet = aData.d.cnRemarksSet.results;
								
								aData.d.cnAmtConversionSet[0].Date = sapDateFormat(aData.d.cnAmtConversionSet[0].Date);
								
								aData.d.cnContractDetailsSet[0].SaleDate = sapDateFormat(aData.d.cnContractDetailsSet[0].SaleDate);
								aData.d.cnContractDetailsSet[0].TcpAmountGross = util.Formatter.amount(aData.d.cnContractDetailsSet[0].TcpAmountGross.replace(/,/g,""));
								aData.d.cnContractDetailsSet[0].TotalDiscount = util.Formatter.amount(aData.d.cnContractDetailsSet[0].TotalDiscount.replace(/,/g,""));
								aData.d.cnContractDetailsSet[0].TcpAmountNet = util.Formatter.amount(aData.d.cnContractDetailsSet[0].TcpAmountNet.replace(/,/g,""));
								aData.d.cnContractDetailsSet[0].TtfeTotal = util.Formatter.amount(aData.d.cnContractDetailsSet[0].TtfeTotal.replace(/,/g,""));
								aData.d.cnContractOtherDetailsSet[0].Aaeffectivedate = sapDateFormat(aData.d.cnContractOtherDetailsSet[0].Aaeffectivedate);
								aData.d.cnContractOtherDetailsSet[0].Lastpaiddateclr = sapDateFormat(aData.d.cnContractOtherDetailsSet[0].Lastpaiddateclr);
								aData.d.cnContractOtherDetailsSet[0].Lastpaiddate = sapDateFormat(aData.d.cnContractOtherDetailsSet[0].Lastpaiddate);
								aData.d.cnContractOtherDetailsSet[0].Arntcmailed = sapDateFormat(aData.d.cnContractOtherDetailsSet[0].Arntcmailed);
								aData.d.cnContractOtherDetailsSet[0].Nocmailed = sapDateFormat(aData.d.cnContractOtherDetailsSet[0].Nocmailed);
								aData.d.cnContractOtherDetailsSet[0].Remainingpdc = util.Formatter.amount(aData.d.cnContractOtherDetailsSet[0].Remainingpdc.replace(/,/g,""));

								for(var a = 0; a < aData.d.cnParkedContractsSet.length; a++) {
									if (aData.d.cnParkedContractsSet[a].Exclude == "") {
										aData.d.cnParkedContractsSet[a].Exclude = false;
									} else {
										aData.d.cnParkedContractsSet[a].Exclude = true;
									}
								}

								for(var a = 0; a < aData.d.cnContractOtherDetailsSet.length; a++) {
									if (aData.d.cnContractOtherDetailsSet[a].Urgent = "") {
										aData.d.cnContractOtherDetailsSet[a].Urgent = false;
									} else {
										aData.d.cnContractOtherDetailsSet[a].Urgent = true;
									}
								}

								aData.d.cnInstructionRemarksSet = aData.d.cnInstructionRemarksSet.results;
								
								var comments = "";
								
								for(var a = 0; a < aData.d.approverSet.length; a++){
									comments = "";
									for(var b = 0; b < aData.d.approverSet[a].approverComment.results.length; b++){
										//if (comments != "") comments = comments + "\n";
										comments = comments + aData.d.approverSet[a].approverComment.results[b].Line;
									}
									aData.d.approverSet[a].approverComment = comments;
								}
								
								comments = "";
								for(var a = 0; a < aData.d.cnNocRemarksSet.length; a++){
									if (comments != "") comments = comments + "\n";
									comments = comments + aData.d.cnNocRemarksSet[a].Line;
								}
								aData.d.cnNocRemarksSet = comments;

								comments = "";
								for(var a = 0; a < aData.d.cnRemarksSet.length; a++){
									if (comments != "") comments = comments + "\n";
									comments = comments + aData.d.cnRemarksSet[a].Line;
								}
								aData.d.cnRemarksSet = comments;

								comments = "";
								for(var a = 0; a < aData.d.cnInstructionRemarksSet.length; a++){
									if (comments != "") comments = comments + "\n";
									comments = comments + aData.d.cnInstructionRemarksSet[a].Line;
								}
								aData.d.cnInstructionRemarksSet = comments;

								comments = "";
								for(var a = 0; a < aData.d.cnOtherReasonSet.length; a++){
									if (comments != "") comments = comments + "\n";
									comments = comments + aData.d.cnOtherReasonSet[a].Line;
								}
								aData.d.cnOtherReasonSet = comments;

								//get Attachments
								_this.getAttachments(aData.d,_data.requestNum);
								
								oRefundType = aData.d.cnInstructionsSet[0].Refundtype;
									
								document.getElementById("currentItem").innerHTML = " > Contract Cancellation";
								showContent("contractCancellation" ,"views.Buyer.ContractCancellation" , "Contract Cancellation", aData.d);

								oBusyDialog.close();
							},
							error : function(err) {
								oBusyDialog.close();
								alert("No data retrieved for the selected request.\nStatus Code: " + err.status + "\ndescription: " + err.statusText + "\n" + err.responseText);
							}
						});

						/****************** B U Y E R S    R E I N S T A T E M E N T  **************************/
						} else if (_data.Application == "RES_REINSTATE") {
							oBusyDialog = new sap.m.BusyDialog({text:'Retrieving Buyers details for reinstatement. Please wait...'});
							oBusyDialog.open();
							$.ajax({
								type : "GET",
								url : "/sap/opu/odata/sap/ZGW_RLC_SALES_SRV/zri_headerSet(Refnumber='"+ _data.requestNum+"',Agent='')?$expand=zri_adjustment,zri_contractdet,zri_deductions,zri_installment,zri_new_agents,zri_new_amt,zri_old_agents,zri_old_amt,zri_old_buyers,zri_particulars,zri_prev_payment,zri_prev_penalty,zri_related_contracts,zri_rodetail,zri_scheme,zri_scheme2,zri_spread,zri_summary_new,zri_summary_old,approver/approverComment,remarks,zri_recommendations&$format=json",
								dataType : "json",
								success : function(aData) {
									
									aData.d.zri_recommendations = aData.d.zri_recommendations.results;
									aData.d.remarks = aData.d.remarks.results;
									aData.d.approver = aData.d.approver.results;
									aData.d.zri_summary_old = aData.d.zri_summary_old.results;
									aData.d.zri_summary_new = aData.d.zri_summary_new.results;
									aData.d.zri_spread = aData.d.zri_spread.results;
									aData.d.zri_scheme2 = aData.d.zri_scheme2.results;
									aData.d.zri_scheme = aData.d.zri_scheme.results;
									aData.d.zri_rodetail = aData.d.zri_rodetail.results;
									aData.d.zri_related_contracts = aData.d.zri_related_contracts.results;
									aData.d.zri_prev_penalty = aData.d.zri_prev_penalty.results;
									aData.d.zri_prev_payment = aData.d.zri_prev_payment.results;
									aData.d.zri_particulars = aData.d.zri_particulars.results;
									aData.d.zri_old_buyers = aData.d.zri_old_buyers.results;
									aData.d.zri_old_agents = aData.d.zri_old_agents.results;
									aData.d.zri_new_agents = aData.d.zri_new_agents.results;
									aData.d.zri_new_amt = aData.d.zri_new_amt.results;
									aData.d.zri_new_amt[0].TcpGross = util.Formatter.amount(aData.d.zri_new_amt[0].TcpGross.replace(/,/g,""));
									aData.d.zri_new_amt[0].Discount = util.Formatter.amount(aData.d.zri_new_amt[0].Discount.replace(/,/g,""));
									aData.d.zri_new_amt[0].TcpNet = util.Formatter.amount(aData.d.zri_new_amt[0].TcpNet.replace(/,/g,""));
									aData.d.zri_new_amt[0].TcpPayments = util.Formatter.amount(aData.d.zri_new_amt[0].TcpPayments.replace(/,/g,""));
									aData.d.zri_new_amt[0].Deductions = util.Formatter.amount(aData.d.zri_new_amt[0].Deductions.replace(/,/g,""));
									aData.d.zri_new_amt[0].PaymentApplc = util.Formatter.amount(aData.d.zri_new_amt[0].PaymentApplc.replace(/,/g,""));
									aData.d.zri_new_amt[0].AmtReinst = util.Formatter.amount(aData.d.zri_new_amt[0].AmtReinst.replace(/,/g,""));
									aData.d.zri_new_amt[0].Ttfe = util.Formatter.amount(aData.d.zri_new_amt[0].Ttfe.replace(/,/g,""));
									aData.d.zri_old_amt = aData.d.zri_old_amt.results;
									aData.d.zri_old_amt[0].TcpGross = util.Formatter.amount(aData.d.zri_old_amt[0].TcpGross.replace(/,/g,""));
									aData.d.zri_old_amt[0].Discount = util.Formatter.amount(aData.d.zri_old_amt[0].Discount.replace(/,/g,""));
									aData.d.zri_old_amt[0].TcpNet = util.Formatter.amount(aData.d.zri_old_amt[0].TcpNet.replace(/,/g,""));
									aData.d.zri_old_amt[0].TcpPayments = util.Formatter.amount(aData.d.zri_old_amt[0].TcpPayments.replace(/,/g,""));
									aData.d.zri_old_amt[0].Deductions = util.Formatter.amount(aData.d.zri_old_amt[0].Deductions.replace(/,/g,""));
									aData.d.zri_old_amt[0].PaymentApplc = util.Formatter.amount(aData.d.zri_old_amt[0].PaymentApplc.replace(/,/g,""));
									aData.d.zri_old_amt[0].AmtReinst = util.Formatter.amount(aData.d.zri_old_amt[0].AmtReinst.replace(/,/g,""));
									aData.d.zri_old_amt[0].Ttfe = util.Formatter.amount(aData.d.zri_old_amt[0].Ttfe.replace(/,/g,""));
									aData.d.zri_installment = aData.d.zri_installment.results;
									aData.d.zri_deductions = aData.d.zri_deductions.results;
									aData.d.zri_contractdet = aData.d.zri_contractdet.results;
									aData.d.zri_adjustment = aData.d.zri_adjustment.results;
									aData.d.zri_adjustment[0].TcpGross = util.Formatter.amount(aData.d.zri_adjustment[0].TcpGross.replace(/,/g,""));
									aData.d.zri_adjustment[0].Discount = util.Formatter.amount(aData.d.zri_adjustment[0].Discount.replace(/,/g,""));
									aData.d.zri_adjustment[0].TcpNet = util.Formatter.amount(aData.d.zri_adjustment[0].TcpNet.replace(/,/g,""));
									aData.d.zri_adjustment[0].TcpPayments = util.Formatter.amount(aData.d.zri_adjustment[0].TcpPayments.replace(/,/g,""));
									aData.d.zri_adjustment[0].Deductions = util.Formatter.amount(aData.d.zri_adjustment[0].Deductions.replace(/,/g,""));
									aData.d.zri_adjustment[0].PaymentApplc = util.Formatter.amount(aData.d.zri_adjustment[0].PaymentApplc.replace(/,/g,""));
									aData.d.zri_adjustment[0].AmtReinst = util.Formatter.amount(aData.d.zri_adjustment[0].AmtReinst.replace(/,/g,""));
									aData.d.zri_adjustment[0].Ttfe = util.Formatter.amount(aData.d.zri_adjustment[0].Ttfe.replace(/,/g,""));
									aData.d.DateReinst = sapDateFormat(aData.d.DateReinst);

									/*********TOTAL - Proposed Payment Schedule Details********/
									/*var payapp = 0;
									var tcp = 0;
									var ttfe = 0;
									var totalSpread = 0;

									for (var i = 0; i < aData.d.zri_spread.length; i++) {	
										payapp = payapp + (Number(aData.d.zri_spread[i].Status.replace(/,/g,"")));
										tcp = tcp + (Number(aData.d.zri_spread[i].Tcp.replace(/,/g,"")));
										ttfe = ttfe + (Number(aData.d.zri_spread[i].Ttfe.replace(/,/g,"")));
										totalSpread = totalSpread + (Number(aData.d.zri_spread[i].Total.replace(/,/g,"")));
									}	
									aData.d.TotalSpreadSet = { 
											totalPayApp : util.Formatter.amount(payapp), 
											totalTCP : util.Formatter.amount(tcp), 
											totalTTFE : util.Formatter.amount(ttfe), 
											totalSpread : util.Formatter.amount(totalSpread) 
									};*/
									/*********TOTAL - Proposed Payment Schedule Details********/
									
									var line, cobuyer = [];
									for(var a = 0; a < aData.d.zri_old_buyers.length; a++){
										if (aData.d.zri_old_buyers[a].Rltxt == "Principal Buyer" ) {
											aData.d.oldprinbuyer = aData.d.zri_old_buyers[a].Name;
										}
										if (aData.d.zri_old_buyers[a].Rltxt == "Co-buyer" ) {
											line = {Name: aData.d.zri_new_agents[a].Name};
											cobuyer.push(line);
										}
									}
									aData.d.oldcobuyers = cobuyer;
									cobuyer = [];
									
									for(var a = 0; a < aData.d.zri_new_agents.length; a++){
										if (aData.d.zri_new_agents[a].Rltxt == "Principal Buyer" ) {
											aData.d.newprinbuyer = aData.d.zri_new_agents[a].Name;
										}
										if (aData.d.zri_new_agents[a].Rltxt == "Co-buyer" ) {
											line = {Name: aData.d.zri_new_agents[a].Name};
											cobuyer.push(line);
										}
										//as per Miracris Trangia 3/3/2016
										if (aData.d.zri_new_agents[a].RoleType == "ZRS200" || aData.d.zri_new_agents[a].RoleType == "ZRS201") {
											aData.d.newamagent = aData.d.zri_new_agents[a].Name;
										}
										if (aData.d.zri_new_agents[a].RoleType == "ZRS220" || aData.d.zri_new_agents[a].RoleType == "ZRS221") {
											aData.d.newsmagent = aData.d.zri_new_agents[a].Name;
										}
										if (aData.d.zri_new_agents[a].RoleType == "ZRS241" || aData.d.zri_new_agents[a].RoleType == "ZRS242") {
											aData.d.newsdagent = aData.d.zri_new_agents[a].Name;
										}
									}

									aData.d.newcobuyers = cobuyer;

									for(var a = 0; a < aData.d.zri_old_agents.length; a++){
										//as per Miracris Trangia 3/3/2016
										if (aData.d.zri_old_agents[a].RoleType == "ZRS200" || aData.d.zri_old_agents[a].RoleType == "ZRS201") {
											aData.d.oldamagent = aData.d.zri_old_agents[a].Name;
										}
										if (aData.d.zri_old_agents[a].RoleType == "ZRS220" || aData.d.zri_old_agents[a].RoleType == "ZRS221") {
											aData.d.oldsmagent = aData.d.zri_old_agents[a].Name;
										}
										if (aData.d.zri_old_agents[a].RoleType == "ZRS241" || aData.d.zri_old_agents[a].RoleType == "ZRS242") {
											aData.d.oldsdagent = aData.d.zri_old_agents[a].Name;
										}
									}
									
									var comments = "";
									
									for(var a = 0; a < aData.d.approver.length; a++){
										comments = "";
										for(var b = 0; b < aData.d.approver[a].approverComment.results.length; b++){
											//if (comments != "") comments = comments + "\n";
											comments = comments + aData.d.approver[a].approverComment.results[b].Line;
										}
										aData.d.approver[a].approverComment = comments;
									}
									
									comments = "";
									for(var a = 0; a < aData.d.zri_recommendations.length; a++){
										if (comments != "") comments = comments + "\n";
										comments = comments + aData.d.zri_recommendations[a].Line;
									}
									aData.d.zri_recommendations = comments;

									comments = "";
									for(var a = 0; a < aData.d.remarks.length; a++){
										if (comments != "") comments = comments + "\n";
										comments = comments + aData.d.remarks[a].Line;
									}
									aData.d.remarks = comments;

									//get Attachments
									_this.getAttachments(aData.d,_data.requestNum);
									
									document.getElementById("currentItem").innerHTML = " > Reinstatement";
									showContent("reInstatement" ,"views.Buyer.Reinstatement" , "Reinstatement", aData.d);

									oBusyDialog.close();
								},
								error : function(err) {
									oBusyDialog.close();
									alert("No data retrieved for the selected request.\nStatus Code: " + err.status + "\ndescription: " + err.statusText + "\n" + err.responseText);
								}
							});

							/****************** B U Y E R S    U P G R A D E / D O W N G R A D E **************************/
							} else if (_data.Application == "RES_UPDWNGRADE") {
								oBusyDialog = new sap.m.BusyDialog({text:'Retrieving Upgrade/Downgrade details. Please wait...'});
								oBusyDialog.open();
								$.ajax({
									type : "GET",
									url : "/sap/opu/odata/sap/ZGW_RLC_SALES_SRV/ud_headerSet(Refnumber='"+ _data.requestNum+"')?$expand=Remarks,RelatedContracts,Approver/approverComment,Recommendation,Particulars,PaySchedule,Totals,CurrentUnit,NewUnit,CurrentScheme,ProposedScheme,CurrentAmount,ProposedAmount,Adjustment&$format=json",
									dataType : "json",
									success : function(aData) {
										
										aData.d.Approver = aData.d.Approver.results;
										aData.d.Remarks = aData.d.Remarks.results;
										aData.d.Recommendation = aData.d.Recommendation.results;
										aData.d.Particulars = aData.d.Particulars.results;
										aData.d.RelatedContracts = aData.d.RelatedContracts.results;

										if(aData.d.Particulars.length > 0){
											for(var a = 0; a < aData.d.Particulars.length; a++){
												aData.d.Particulars[a].Amount = util.Formatter.amount(aData.d.Particulars[a].Amount.replace(/,/g,""));
												aData.d.Particulars[a].AmountPaid = util.Formatter.amount(aData.d.Particulars[a].AmountPaid.replace(/,/g,""));
											}
										}
										if(aData.d.RelatedContracts.length > 0){
											for(var a = 0; a < aData.d.RelatedContracts.length; a++){
												aData.d.RelatedContracts[a].Tcp = util.Formatter.amount(aData.d.RelatedContracts[a].Tcp.replace(/,/g,""));
												aData.d.RelatedContracts[a].TotalPayments = util.Formatter.amount(aData.d.RelatedContracts[a].TotalPayments.replace(/,/g,""));
											}
										}
										aData.d.PaySchedule = aData.d.PaySchedule.results;
										if(aData.d.PaySchedule.length > 0){
											for(var a = 0; a < aData.d.PaySchedule.length; a++){
												aData.d.PaySchedule[a].Tcp = util.Formatter.amount(aData.d.PaySchedule[a].Tcp.replace(/,/g,""));
												aData.d.PaySchedule[a].Ttfe = util.Formatter.amount(aData.d.PaySchedule[a].Ttfe.replace(/,/g,""));
												aData.d.PaySchedule[a].Total = util.Formatter.amount(aData.d.PaySchedule[a].Total.replace(/,/g,""));
												aData.d.PaySchedule[a].DueDate = sapDateFormat(aData.d.PaySchedule[a].DueDate);
											}
										}
										aData.d.Adjustment = aData.d.Adjustment.results;
										if(aData.d.Adjustment.length > 0){
											aData.d.Adjustment[0].GrossTcp = util.Formatter.amount(aData.d.Adjustment[0].GrossTcp.replace(/,/g,""));
											aData.d.Adjustment[0].Discount = util.Formatter.amount(aData.d.Adjustment[0].Discount.replace(/,/g,""));
											aData.d.Adjustment[0].NetTcp = util.Formatter.amount(aData.d.Adjustment[0].NetTcp.replace(/,/g,""));
											aData.d.Adjustment[0].Ttfe = util.Formatter.amount(aData.d.Adjustment[0].Ttfe.replace(/,/g,""));
											aData.d.Adjustment[0].FibAdj = util.Formatter.amount(aData.d.Adjustment[0].FibAdj.replace(/,/g,"")); //fhizon 10.26.2016
										}
										aData.d.CurrentAmount = aData.d.CurrentAmount.results;
										if(aData.d.CurrentAmount.length > 0){
											aData.d.CurrentAmount[0].GrossTcp = util.Formatter.amount(aData.d.CurrentAmount[0].GrossTcp.replace(/,/g,""));
											aData.d.CurrentAmount[0].Discount = util.Formatter.amount(aData.d.CurrentAmount[0].Discount.replace(/,/g,""));
											aData.d.CurrentAmount[0].NetTcp = util.Formatter.amount(aData.d.CurrentAmount[0].NetTcp.replace(/,/g,""));
											aData.d.CurrentAmount[0].TotalTcp = util.Formatter.amount(aData.d.CurrentAmount[0].TotalTcp.replace(/,/g,""));
											aData.d.CurrentAmount[0].AppliedPay = util.Formatter.amount(aData.d.CurrentAmount[0].AppliedPay.replace(/,/g,""));
											//aData.d.CurrentAmount[0].PayschemeNo = util.Formatter.amount(aData.d.CurrentAmount[0].PayschemeNo.replace(/,/g,""));
											aData.d.CurrentAmount[0].Ttfe = util.Formatter.amount(aData.d.CurrentAmount[0].Ttfe.replace(/,/g,""));
											aData.d.CurrentAmount[0].FibAdj = util.Formatter.amount(aData.d.CurrentAmount[0].FibAdj.replace(/,/g,"")); //fhizon 10.26.2016
										}
										aData.d.ProposedScheme = aData.d.ProposedScheme.results;
										if(aData.d.ProposedScheme.length > 0){
											aData.d.ProposedScheme[0].ReserveFee = util.Formatter.amount(aData.d.ProposedScheme[0].ReserveFee.replace(/,/g,""));
										}
										aData.d.CurrentScheme = aData.d.CurrentScheme.results;
										if(aData.d.CurrentScheme.length > 0){
											aData.d.CurrentScheme[0].ReserveFee = util.Formatter.amount(aData.d.CurrentScheme[0].ReserveFee.replace(/,/g,""));
										}
										aData.d.NewUnit = aData.d.NewUnit.results;
										aData.d.CurrentUnit = aData.d.CurrentUnit.results;
										aData.d.ProposedAmount = aData.d.ProposedAmount.results;
										if(aData.d.ProposedAmount.length > 0){
											aData.d.ProposedAmount[0].GrossTcp = util.Formatter.amount(aData.d.ProposedAmount[0].GrossTcp.replace(/,/g,""));
											aData.d.ProposedAmount[0].Discount = util.Formatter.amount(aData.d.ProposedAmount[0].Discount.replace(/,/g,""));
											aData.d.ProposedAmount[0].NetTcp = util.Formatter.amount(aData.d.ProposedAmount[0].NetTcp.replace(/,/g,""));
											//aData.d.ProposedAmount[0].PayschemeNo = util.Formatter.amount(aData.d.ProposedAmount[0].PayschemeNo.replace(/,/g,""));
											aData.d.ProposedAmount[0].Ttfe = util.Formatter.amount(aData.d.ProposedAmount[0].Ttfe.replace(/,/g,""));
											aData.d.ProposedAmount[0].FibAdj = util.Formatter.amount(aData.d.ProposedAmount[0].FibAdj.replace(/,/g,"")); //fhizon 10.26.2016
										}
										aData.d.Totals = aData.d.Totals.results;
										aData.d.Date = sapDateFormat(aData.d.Date);
										
										var comments = "";
										
										for(var a = 0; a < aData.d.Approver.length; a++){
											comments = "";
											for(var b = 0; b < aData.d.Approver[a].approverComment.results.length; b++){
												//if (comments != "") comments = comments + "\n";
												comments = comments + aData.d.Approver[a].approverComment.results[b].Line;
											}
											aData.d.Approver[a].approverComment = comments;
										}

										comments = "";
										for(var a = 0; a < aData.d.Remarks.length; a++){
											if (comments != "") comments = comments + "\n";
											comments = comments + aData.d.Remarks[a].Line;
										}
										aData.d.Remarks = comments;

										comments = "";
										for(var a = 0; a < aData.d.Recommendation.length; a++){
											if (comments != "") comments = comments + "\n";
											comments = comments + aData.d.Recommendation[a].Line;
										}
										aData.d.Recommendation = comments;

										//get Attachments
										_this.getAttachments(aData.d,_data.requestNum);
										
										document.getElementById("currentItem").innerHTML = " > Upgrade/Downgrade";
										showContent("upgradeDowngrade" ,"views.Buyer.UpgradeDowngrade" , "Upgrade/Downgrade", aData.d);

										oBusyDialog.close();
									},
									error : function(err) {
										oBusyDialog.close();
										alert("No data retrieved for the selected request.\nStatus Code: " + err.status + "\ndescription: " + err.statusText + "\n" + err.responseText);
									}
								});

								/****************** B U Y E R S    P E N A L T Y   O F   W A I V E R S **************************/
								} else if (_data.Application == "RES_PNLTYWAIVE") {
									oBusyDialog = new sap.m.BusyDialog({text:'Retrieving Waiver of Penalties details. Please wait...'});
									oBusyDialog.open();
									$.ajax({
										type : "GET",
										url : "/sap/opu/odata/sap/ZGW_RLC_SALES_SRV/pw_headerSet(RefNumber='"+ _data.requestNum+"')?$format=json&$expand=pw_contractdetSet,pw_overdueitemsSet,pw_appfromSet,pw_apptoSet,approverSet/approverComment,attachmentSet,pw_requestSet,pw_backgroundSet,pw_recommendationSet,pw_instructionsSet,pw_futureinstructionsSet",
										
										dataType : "json",
										success : function(aData) {
											aData.d.RefNumber = _data.requestNum;
											aData.d.approverSet = aData.d.approverSet.results;
											//aData.d.Remarks = aData.d.Remarks.results;
											aData.d.pw_overdueitemsSet = aData.d.pw_overdueitemsSet.results;
											
											//Total OverdueItemSet
											var TotalAmountDue = 0;
											var TotalPaidPenalty = 0;
											var TotalUnpaidPenalty = 0;
											var TotalOverDue = 0;
											var TotalCollectible = 0;
											var TotalForWaiver = 0;

											for (var i = 0; i < aData.d.pw_overdueitemsSet.length; i++) {	
												TotalAmountDue = TotalAmountDue + (Number(aData.d.pw_overdueitemsSet[i].AmountDue.replace(/,/g,"")));
												TotalPaidPenalty = TotalPaidPenalty + (Number(aData.d.pw_overdueitemsSet[i].PaidPenalty.replace(/,/g,"")));
												TotalUnpaidPenalty = TotalUnpaidPenalty + (Number(aData.d.pw_overdueitemsSet[i].UnpaidPenalty.replace(/,/g,"")));
												TotalOverDue = TotalOverDue + (Number(aData.d.pw_overdueitemsSet[i].Total.replace(/,/g,"")));
												TotalCollectible = TotalCollectible + (Number(aData.d.pw_overdueitemsSet[i].Collectible.replace(/,/g,"")));
												TotalForWaiver = TotalForWaiver + (Number(aData.d.pw_overdueitemsSet[i].ForWaiver.replace(/,/g,"")));
											}	
											aData.d.TotalOverdueSet = { 
													TotalAmountDue : util.Formatter.amount(TotalAmountDue), 
													TotalPaidPenalty : util.Formatter.amount(TotalPaidPenalty), 
													TotalUnpaidPenalty : util.Formatter.amount(TotalUnpaidPenalty),
													TotalOverDue : util.Formatter.amount(TotalOverDue), 
													TotalCollectible : util.Formatter.amount(TotalCollectible), 
													TotalForWaiver : util.Formatter.amount(TotalForWaiver)  
											};
											
											aData.d.attachmentSet = aData.d.attachmentSet.results;
											aData.d.pw_appfromSet = aData.d.pw_appfromSet.results;
											aData.d.pw_apptoSet = aData.d.pw_apptoSet.results;
											aData.d.pw_contractdetSet = aData.d.pw_contractdetSet.results;

											aData.d.pw_requestSet = aData.d.pw_requestSet.results;
											aData.d.pw_recommendationSet = aData.d.pw_recommendationSet.results;
											aData.d.pw_instructionsSet = aData.d.pw_instructionsSet.results;
											aData.d.pw_backgroundSet = aData.d.pw_backgroundSet.results;
											aData.d.pw_futureinstructionsSet = aData.d.pw_futureinstructionsSet.results;
											
											//aData.d.AssessedDate = sapDateFormat(aData.d.AssessedDate);
											assessdate = aData.d.AssessedDate;
											
											var comments = "";
											
											for(var a = 0; a < aData.d.approverSet.length; a++){
												for(var b = 0; b < aData.d.approverSet[a].approverComment.results.length; b++){
													//if (comments != "") comments = comments + "\n";
													comments = comments + aData.d.approverSet[a].approverComment.results[b].Line;
												}

												aData.d.approverSet[a].approverComment = comments;
												comments = "";
												//Add Christian de Leon 06/21/2018
												//Get User details once logged in
												//Get User details by using srv;
												var oUserName;
												var getUser = '/sap/bc/ui2/start_up';
												var xmlHttp = null;
												xmlHttp = new XMLHttpRequest();
												xmlHttp.onreadystatechange = function() {
												if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
												   var oUserData = JSON.parse(xmlHttp.responseText);
												   console.log(oUserData);
												   oUserName = oUserData.id;
												   }
												 };
												 xmlHttp.open( 'GET', getUser, false );
												 xmlHttp.send(null);												 
												 if (aData.d.approverSet[a].UserName === oUserName ){
													oShowEscalate = aData.d.approverSet[a].Escalate;
												};										
												//end Christian de Leon 06/21/2018
											}
											
											comments = "";
											for(var a = 0; a < aData.d.pw_requestSet.length; a++){
												if (comments != "") comments = comments + "\n";
												comments = comments + aData.d.pw_requestSet[a].Line;
											}
											aData.d.pw_requestSet = comments;
		
											comments = "";
											for(var a = 0; a < aData.d.pw_recommendationSet.length; a++){
												if (comments != "") comments = comments + "\n";
												comments = comments + aData.d.pw_recommendationSet[a].Line;
											}
											aData.d.pw_recommendationSet = comments;
											
											comments = "";
											for(var a = 0; a < aData.d.pw_instructionsSet.length; a++){
												if (comments != "") comments = comments + "\n";
												comments = comments + aData.d.pw_instructionsSet[a].Line;
											}
											aData.d.pw_instructionsSet = comments;

											comments = "";
											for(var a = 0; a < aData.d.pw_backgroundSet.length; a++){
												if (comments != "") comments = comments + "\n";
												comments = comments + aData.d.pw_backgroundSet[a].Line;
											}
											aData.d.pw_backgroundSet = comments;

											comments = "";
											for(var a = 0; a < aData.d.pw_futureinstructionsSet.length; a++){
												if (comments != "") comments = comments + "\n";
												comments = comments + aData.d.pw_futureinstructionsSet[a].Line;
											}
											aData.d.pw_futureinstructionsSet = comments;
											
											
											//get Attachments
											_this.getAttachments(aData.d,_data.requestNum);
											
											document.getElementById("currentItem").innerHTML = " > Waiver of Penalties";
											showContent("upgradeDowngrade" ,"views.Buyer.WaiverPenalties" , "Waiver of Penalties", aData.d);

											oBusyDialog.close();
										},
										error : function(err) {
											oBusyDialog.close();
											alert("No data retrieved for the selected request.\nStatus Code: " + err.status + "\ndescription: " + err.statusText + "\n" + err.responseText);
										}
									});


		//*******************  C R E A T E   A G E N T  *******************************************/
		} else if (_data.Application == "RES_CRTEAGENT") {
			oBusyDialog = new sap.m.BusyDialog({text:'Retrieving New Agent details. Please wait...'});
			oBusyDialog.open();
			$.ajax({
				type : "GET",
				url : "/sap/opu/odata/sap/ZGW_RLC_SALES_SRV/basicInfoSet(Refnumber='"+ _data.requestNum+"',Agent='')?$expand=basicInfoToAddressInfo,basicInfoToApprover/approverComment,basicInfoToCommission,basicInfoToContract1,basicInfoToUpline,basicInfoToRemarks,basicInfoToSpecialCommission,terminateSet,basicInfoTobasicInfo2,basicInfoToOldbasicInfo2,basicInfoTobankDetails,basicInfoToOldbankDetails&$format=json",
				//url : "/sap/opu/odata/sap/ZGW_RLC_SALES_SRV/basicInfoSet(Refnumber='"+ _data.requestNum+"',Agent='')?$expand=basicInfoToAddressInfo,basicInfoToApprover/approverComment,basicInfoToCommission,basicInfoToContract1,basicInfoToUpline,basicInfoToRemarks,terminateSet&$format=json",
				dataType : "json",
				success : function(aData) {

					aData.d.Birthdate = sapDateFormat(aData.d.Birthdate);
					
					//added by fhizon 9.13.2016 - start here...
					oAgentTitle = aData.d.TitleText; 
					aData.d.basicInfoToUpline = aData.d.basicInfoToUpline.results;
					if (aData.d.basicInfoToUpline.length > 0) {
						aData.d.basicInfoToUpline[0].ValidFrom = sapDateFormat(aData.d.basicInfoToUpline[0].ValidFrom);
						aData.d.basicInfoToUpline[0].ValidTo = sapDateFormat(aData.d.basicInfoToUpline[0].ValidTo);
					} 
					//added by fhizon 9.13.2016 - end here..
					
					aData.d.basicInfoToRemarks = aData.d.basicInfoToRemarks.results;
					aData.d.basicInfoToApprover = aData.d.basicInfoToApprover.results;
					aData.d.basicInfoToAddressInfo = aData.d.basicInfoToAddressInfo.results;
					aData.d.basicInfoToContract1 = aData.d.basicInfoToContract1.results;
					aData.d.basicInfoToContract1[0].Contractstart = sapDateFormat(aData.d.basicInfoToContract1[0].Contractstart);
					aData.d.basicInfoToContract1[0].Contractend = sapDateFormat(aData.d.basicInfoToContract1[0].Contractend);
					aData.d.basicInfoToContract1[0].AgentAllowance = util.Formatter.amount(aData.d.basicInfoToContract1[0].AgentAllowance);
					//aData.d.basicInfoToContract2 = aData.d.basicInfoToContract2.results;
					//aData.d.basicInfoToEmail = aData.d.basicInfoToEmail.results;
					aData.d.basicInfoToCommission = aData.d.basicInfoToCommission.results;
					aData.d.basicInfoToSpecialCommission = aData.d.basicInfoToSpecialCommission.results;
					aData.d.terminateSet = aData.d.terminateSet.results;
					//Add Christian de Leon 12/11/2018 TR#JGDK901786
					aData.d.basicInfoTobasicInfo2 = aData.d.basicInfoTobasicInfo2.results;
					aData.d.basicInfoTobasicInfo2[0].ReblExpdate = sapDateFormat(aData.d.basicInfoTobasicInfo2[0].ReblExpdate);
					aData.d.basicInfoToOldbasicInfo2 = aData.d.basicInfoToOldbasicInfo2.results;
					aData.d.basicInfoToOldbasicInfo2[0].ReblExpdate = sapDateFormat(aData.d.basicInfoToOldbasicInfo2[0].ReblExpdate);
					aData.d.basicInfoTobankDetails = aData.d.basicInfoTobankDetails.results;
					aData.d.basicInfoToOldbankDetails = aData.d.basicInfoToOldbankDetails.results;
					//Add Christian de Leon 12/11/2018 
					var comments = "";
					for(var a = 0; a < aData.d.basicInfoToApprover.length; a++){
						comments = "";
						for(var b = 0; b < aData.d.basicInfoToApprover[a].approverComment.results.length; b++){
							//if (comments != "") comments = comments + "\n";
							comments = comments + aData.d.basicInfoToApprover[a].approverComment.results[b].Line;
						}
						aData.d.basicInfoToApprover[a].approverComment = comments;
					}

					comments = "";
					for(var a = 0; a < aData.d.basicInfoToRemarks.length; a++){
						if (comments != "") comments = comments + "\n";
						comments = comments + aData.d.basicInfoToRemarks[a].Line;
					}
					aData.d.remarks = comments;

					comments = "";
					for(var a = 0; a < aData.d.terminateSet.length; a++){
						if (comments != "") comments = comments + "\n";
						comments = comments + aData.d.terminateSet[a].Line;
					}
					aData.d.termRemarks = comments;

					//get Attachments
					_this.getAttachments(aData.d,_data.requestNum);
					
					document.getElementById("currentItem").innerHTML = " > New Agent";
            		showContent("newAgentApproval" ,"views.Agent.NewAgent" , "Create New Agent", aData.d);

					oBusyDialog.close();
				},
				error : function(err) {
					oBusyDialog.close();
					alert("No data retrieved for the selected Agent.\nStatus Code: " + err.status + "\ndescription: " + err.statusText + "\n" + err.responseText);
				}
			});
		} else if (_data.Application == "RES_RENWAGENT" || _data.Application == "RES_AGENTINFO") {
			oBusyDialog = new sap.m.BusyDialog({text:'Retrieving Agent details. Please wait...'});
			oBusyDialog.open();
			$.ajax({
				type : "GET",
				url : "/sap/opu/odata/sap/ZGW_RLC_SALES_SRV/basicInfoSet(Refnumber='"+ _data.requestNum+"',Agent='')?$expand=basicInfoToAddressInfo,basicInfoToApprover/approverComment,basicInfoToCommission,basicInfoToContract1,basicInfoToUpline,basicInfoToRemarks,basicInfoToSpecialCommission,basicInfoToOldbasicInfo,basicInfoToOldAddressInfo,basicInfoToOldContract1,basicInfoToOldUpline,basicInfoToOldSpecialCommission,terminateSet,basicInfoTobasicInfo2,basicInfoToOldbasicInfo2,basicInfoTobankDetails,basicInfoToOldbankDetails&$format=json",
				//url : "/sap/opu/odata/sap/ZGW_RLC_SALES_SRV/basicInfoSet(Refnumber='"+ _data.requestNum+"',Agent='')?$expand=basicInfoToAddressInfo,basicInfoToApprover/approverComment,basicInfoToCommission,basicInfoToContract1,basicInfoToUpline,basicInfoToRemarks,terminateSet&$format=json",
				dataType : "json",
				success : function(aData) {

					aData.d.Birthdate = sapDateFormat(aData.d.Birthdate);
					aData.d.basicInfoToOldbasicInfo = aData.d.basicInfoToOldbasicInfo.results;
					aData.d.basicInfoToUpline = aData.d.basicInfoToUpline.results;
					aData.d.basicInfoToOldUpline = aData.d.basicInfoToOldUpline.results;
					aData.d.basicInfoToRemarks = aData.d.basicInfoToRemarks.results;
					aData.d.basicInfoToApprover = aData.d.basicInfoToApprover.results;
					aData.d.basicInfoToAddressInfo = aData.d.basicInfoToAddressInfo.results;
					aData.d.basicInfoToOldAddressInfo = aData.d.basicInfoToOldAddressInfo.results;
					aData.d.basicInfoToContract1 = aData.d.basicInfoToContract1.results;
					aData.d.basicInfoToOldbasicInfo[0].Birthdate = sapDateFormat(aData.d.basicInfoToOldbasicInfo[0].Birthdate);
					aData.d.basicInfoToContract1[0].Contractstart = sapDateFormat(aData.d.basicInfoToContract1[0].Contractstart);
					aData.d.basicInfoToContract1[0].Contractend = sapDateFormat(aData.d.basicInfoToContract1[0].Contractend);
					aData.d.basicInfoToContract1[0].AgentAllowance = util.Formatter.amount2(aData.d.basicInfoToContract1[0].AgentAllowance);
					aData.d.basicInfoToOldContract1 = aData.d.basicInfoToOldContract1.results;
					aData.d.basicInfoToOldContract1[0].Contractstart = sapDateFormat(aData.d.basicInfoToOldContract1[0].Contractstart);
					aData.d.basicInfoToOldContract1[0].Contractend = sapDateFormat(aData.d.basicInfoToOldContract1[0].Contractend);
					aData.d.basicInfoToOldContract1[0].AgentAllowance = util.Formatter.amount(aData.d.basicInfoToOldContract1[0].AgentAllowance);
					
					//aData.d.basicInfoToContract2 = aData.d.basicInfoToContract2.results;
					//aData.d.basicInfoToEmail = aData.d.basicInfoToEmail.results;
					aData.d.basicInfoToCommission = aData.d.basicInfoToCommission.results;
					aData.d.basicInfoToSpecialCommission = aData.d.basicInfoToSpecialCommission.results;
					aData.d.basicInfoToOldSpecialCommission = aData.d.basicInfoToOldSpecialCommission.results;
					aData.d.terminateSet = aData.d.terminateSet.results;
					//Add Christian de Leon 12/11/2018 TR#JGDK901786
					aData.d.basicInfoTobasicInfo2 = aData.d.basicInfoTobasicInfo2.results;
					aData.d.basicInfoTobasicInfo2[0].ReblExpdate = sapDateFormat(aData.d.basicInfoTobasicInfo2[0].ReblExpdate);
					aData.d.basicInfoToOldbasicInfo2 = aData.d.basicInfoToOldbasicInfo2.results;
					aData.d.basicInfoToOldbasicInfo2[0].ReblExpdate = sapDateFormat(aData.d.basicInfoToOldbasicInfo2[0].ReblExpdate);
					aData.d.basicInfoTobankDetails = aData.d.basicInfoTobankDetails.results;
					aData.d.basicInfoToOldbankDetails = aData.d.basicInfoToOldbankDetails.results;
					//End Add Christian de Leon 12/11/2018 
					
					var comments = "";
					for(var a = 0; a < aData.d.basicInfoToApprover.length; a++){
						comments = "";
						for(var b = 0; b < aData.d.basicInfoToApprover[a].approverComment.results.length; b++){
							//if (comments != "") comments = comments + "\n";
							comments = comments + aData.d.basicInfoToApprover[a].approverComment.results[b].Line;
						}
						aData.d.basicInfoToApprover[a].approverComment = comments;
					}

					comments = "";
					for(var a = 0; a < aData.d.basicInfoToRemarks.length; a++){
						if (comments != "") comments = comments + "\n";
						comments = comments + aData.d.basicInfoToRemarks[a].Line;
					}
					aData.d.remarks = comments;

					comments = "";
					for(var a = 0; a < aData.d.terminateSet.length; a++){
						if (comments != "") comments = comments + "\n";
						comments = comments + aData.d.terminateSet[a].Line;
					}
					aData.d.termRemarks = comments;
					
					//get Attachments
					_this.getAttachments(aData.d,_data.requestNum);
					
					if (_data.Application == "RES_RENWAGENT") {
						document.getElementById("currentItem").innerHTML = " > Renew Agent Contract";
	            		showContent("renewAgentApproval" ,"views.Agent.RenewAgent" , "Renew Agent Contract", aData.d);
					} else {
						document.getElementById("currentItem").innerHTML = " > Change Agent Info";
	            		showContent("updateAgentApproval" ,"views.Agent.UpdateAgent" , "Change Agent Info", aData.d);
					}
						
					oBusyDialog.close();
				},
				error : function(err) {
					oBusyDialog.close();
					alert("No data retrieved for the selected Agent.\nStatus Code: " + err.status + "\ndescription: " + err.statusText + "\n" + err.responseText);
				}
			}); 


			//*******************  ATMI  *******************************************/
		} else if (_data.Application == "RES_ATMI") {
			oBusyDialog = new sap.m.BusyDialog({text:'Retrieving Authority to Move-In details. Please wait...'});
			oBusyDialog.open();
			$.ajax({
				type : "GET",
				url : "/sap/opu/odata/sap/ZGW_RLC_SALES_SRV/ATMI_DetailsSet(RefNo='"+ _data.requestNum+"')?$expand=ATMI_AMR_DetailSet,financial_instSet,reasonSet,remarksSet,approverSet/approverComment&$format=json",
				dataType : "json",
				success : function(aData) {

					aData.d.CondoDues = sapDateFormat(aData.d.CondoDues);
					aData.d.ReservationDate = sapDateFormat(aData.d.ReservationDate);
					aData.d.CreationDate = sapDateFormat(aData.d.CreationDate);

					if(aData.d.BuyerReqDate == "00000000") aData.d.BuyerReqDate = "";					
					if(aData.d.SignedDosDate == "00000000") aData.d.SignedDosDate = "";
					if(aData.d.BirDate == "00000000") aData.d.BirDate = "";
					if(aData.d.NoteDate == "00000000") aData.d.NoteDate = "";
					if(aData.d.BirthCert == "00000000") aData.d.BirthCert = "";
					if(aData.d.ViewDate == "00000000") aData.d.ViewDate = "";
					if(aData.d.MarriageContract == "00000000") aData.d.MarriageContract = "";
					//aData.d.SignedDosDate = sapDateFormat(aData.d.SignedDosDate);
					//aData.d.BirDate = sapDateFormat(aData.d.BirDate);
					//aData.d.NoteDate = sapDateFormat(aData.d.NoteDate);
					//aData.d.BirthCert = sapDateFormat(aData.d.BirthCert);
					//aData.d.ViewDate = sapDateFormat(aData.d.ViewDate);
					//aData.d.MarriageContract = sapDateFormat(aData.d.MarriageContract);
					//Add Christian de Leon
					oDatepicker = aData.d.BuyerReqDate;
					//End Christian de Leon
					
					aData.d.ATMI_AMR_DetailSet = aData.d.ATMI_AMR_DetailSet.results;
					aData.d.financial_instSet = aData.d.financial_instSet.results;
					aData.d.reasonSet = aData.d.reasonSet.results;
					aData.d.remarksSet = aData.d.remarksSet.results;
					aData.d.approverSet = aData.d.approverSet.results;
					
					var comments = "";
					
					for(var a = 0; a < aData.d.approverSet.length; a++){
						comments = "";
						for(var b = 0; b < aData.d.approverSet[a].approverComment.results.length; b++){
							//if (comments != "") comments = comments + "\n";
							comments = comments + aData.d.approverSet[a].approverComment.results[b].Line;
						}
						aData.d.approverSet[a].approverComment = comments;
					}
					
					comments = "";
					for(var a = 0; a < aData.d.reasonSet.length; a++){
						if (comments != "") comments = comments + "\n";
						comments = comments + aData.d.reasonSet[a].Line;
					}
					aData.d.reasonSet = comments;

					comments = "";
					for(var a = 0; a < aData.d.remarksSet.length; a++){
						if (comments != "") comments = comments + "\n";
						comments = comments + aData.d.remarksSet[a].Line;
					}
					aData.d.remarksSet = comments;
					
					//get Attachments
					_this.getAttachments(aData.d,_data.requestNum);
					
					document.getElementById("currentItem").innerHTML = " > Authority to Move-In";
					showContent("ATMI" ,"views.ATMI.ATMI" , "ATMI", aData.d);

					oBusyDialog.close();
				},
				error : function(err) {
					oBusyDialog.close();
					alert("No data retrieved for the selected request.\nStatus Code: " + err.status + "\ndescription: " + err.statusText + "\n" + err.responseText);
				}
			});

			//*******************  E A R L Y   M O V E - I N  *******************************************/
		} else if (_data.Application == "RES_EMI") {
			oBusyDialog = new sap.m.BusyDialog({text:'Retrieving Early Move-In details. Please wait...'});
			oBusyDialog.open();
			$.ajax({
				type : "GET",
				url : "/sap/opu/odata/sap/ZGW_RLC_SALES_SRV/EMI_GetDetailsSet(RefNumber='"+ _data.requestNum+"')?$expand=EMI_HeaderSet,EMI_PaymentSet,EMI_PayReqSet,EMI_OperReqSet,EMI_ScheduleSet,EMI_Remarks1Set,EMI_Remarks2Set,EMI_Remarks3Set,approverSet/approverComment,EMI_OtherReqSet&$format=json",				                                           
				dataType : "json",
				success : function(aData) {

					aData.d.RefNumber = _data.requestNum;

					aData.d.EMI_HeaderSet = aData.d.EMI_HeaderSet.results;
					aData.d.EMI_PaymentSet = aData.d.EMI_PaymentSet.results;
					aData.d.EMI_PayReqSet = aData.d.EMI_PayReqSet.results;
					aData.d.EMI_ScheduleSet = aData.d.EMI_ScheduleSet.results;
					aData.d.EMI_OperReqSet = aData.d.EMI_OperReqSet.results;
					aData.d.approverSet = aData.d.approverSet.results;
					aData.d.EMI_Remarks1Set = aData.d.EMI_Remarks1Set.results;
					aData.d.EMI_Remarks2Set = aData.d.EMI_Remarks2Set.results;
					aData.d.EMI_Remarks3Set = aData.d.EMI_Remarks3Set.results;
					aData.d.EMI_OtherReqSet = aData.d.EMI_OtherReqSet.results;

					aData.d.EMI_HeaderSet[0].CreationDate = sapDateFormat(aData.d.EMI_HeaderSet[0].CreationDate);
					aData.d.EMI_HeaderSet[0].SaleDate = sapDateFormat(aData.d.EMI_HeaderSet[0].SaleDate);

					aData.d.EMI_ScheduleSet[0].ReleaseDate = sapDateFormat(aData.d.EMI_ScheduleSet[0].ReleaseDate);
					aData.d.EMI_ScheduleSet[0].ATMIRegDate = sapDateFormat(aData.d.EMI_ScheduleSet[0].ATMIRegDate);

					aData.d.EMI_OtherReqSet[0].PreApprove = sapDateFormat(aData.d.EMI_OtherReqSet[0].PreApprove);
					aData.d.EMI_OtherReqSet[0].ATMIRegDate = util.Formatter.amount(aData.d.EMI_OtherReqSet[0].DuoAmount);
					
					for(var a = 0; a < aData.d.EMI_PaymentSet.length; a++) {
						aData.d.payments = [{Particular:"Total Contract Price(TCP)"
												,DueAmt:util.Formatter.amount(aData.d.EMI_PaymentSet[a].TcpDue)
							 					,PaidAmt: util.Formatter.amount(aData.d.EMI_PaymentSet[a].TcpPaid)
							 					,BalAmt:util.Formatter.amount(aData.d.EMI_PaymentSet[a].TcpBalance)
							 					,Remarks:""
										    },
										    {Particular:"TTFE/Conversion Fees"
										    	,DueAmt:util.Formatter.amount(aData.d.EMI_PaymentSet[a].TtfeDue)
								 				,PaidAmt:util.Formatter.amount(aData.d.EMI_PaymentSet[a].TtfePaid)
								 				,BalAmt:util.Formatter.amount(aData.d.EMI_PaymentSet[a].TtfeBalance)
								 				,Remarks:""
											},
											{Particular:"Penalties/Others"
												,DueAmt:util.Formatter.amount(aData.d.EMI_PaymentSet[a].PenaltyDue)
								 				,PaidAmt:util.Formatter.amount(aData.d.EMI_PaymentSet[a].PenaltyPaid)
								 				,BalAmt:util.Formatter.amount(aData.d.EMI_PaymentSet[a].PenaltyBalance)
								 				,Remarks:""
											},
											{Particular:"Total"
												,DueAmt:util.Formatter.amount(aData.d.EMI_PaymentSet[a].TotalDue)
								 				,PaidAmt:util.Formatter.amount(aData.d.EMI_PaymentSet[a].TotalPaid)
								 				,BalAmt:util.Formatter.amount(aData.d.EMI_PaymentSet[a].TotalBalance)
								 				,Remarks:""
											},
											{Particular:"TCP Paid Percentage" 
												,DueAmt:aData.d.EMI_PaymentSet[a].TcpPaidDue
								 				,PaidAmt:aData.d.EMI_PaymentSet[a].TcpPaidPaid
								 				,BalAmt:aData.d.EMI_PaymentSet[a].TcpPaidBalance
								 				,Remarks:""
											}
										   ];
					}

					for(var a = 0; a < aData.d.EMI_OperReqSet.length; a++) {
						aData.d.Operations = [{Particular:"Signed COL Received Date", Date1: sapDateFormat(aData.d.EMI_OperReqSet[a].SignedCTS)
							 					,Remarks:""
										    },
										    {Particular:"Signed DAS/DOASPS Received Date", Date1: sapDateFormat(aData.d.EMI_OperReqSet[a].SignedDAS)
							 					,Remarks:""
											},
											{Particular:"BIR 1904", Date1: sapDateFormat(aData.d.EMI_OperReqSet[a].BIR1904)
							 					,Remarks:""
											},
											{Particular:"PDC Undertaking", Date1: sapDateFormat(aData.d.EMI_OperReqSet[a].PDCUndertaking)
							 					,Remarks:""
											},
											{Particular:"TIN", Date1: aData.d.EMI_OperReqSet[a].Tin
							 					,Remarks:""
											}
										   ];
					}
					
					var comments = "";
					for(var a = 0; a < aData.d.approverSet.length; a++){
						comments = "";
						for(var b = 0; b < aData.d.approverSet[a].approverComment.results.length; b++){
							//if (comments != "") comments = comments + "\n";
							comments = comments + aData.d.approverSet[a].approverComment.results[b].Line;
						}
						aData.d.approverSet[a].approverComment = comments;
					}

					comments = "";
					for(var a = 0; a < aData.d.EMI_Remarks1Set.length; a++){
						if (comments != "") comments = comments + "\n";
						comments = comments + aData.d.EMI_Remarks1Set[a].Line;
					}
					aData.d.EMI_Remarks1Set = comments;

					comments = "";
					for(var a = 0; a < aData.d.EMI_Remarks2Set.length; a++){
						if (comments != "") comments = comments + "\n";
						comments = comments + aData.d.EMI_Remarks2Set[a].Line;
					}
					aData.d.EMI_Remarks2Set = comments;

					comments = "";
					for(var a = 0; a < aData.d.EMI_Remarks3Set.length; a++){
						if (comments != "") comments = comments + "\n";
						comments = comments + aData.d.EMI_Remarks3Set[a].Line;
					}
					aData.d.EMI_Remarks3Set = comments;

					oEMI_Type = aData.d.EMI_HeaderSet[0].Type;
					
					//get Attachments
					_this.getAttachments(aData.d,_data.requestNum);
					
					document.getElementById("currentItem").innerHTML = " > Early Move-In";
					showContent("EMI" ,"views.Buyer.EarlyMoveIn" , "EMI", aData.d);

					oBusyDialog.close();
				},
				error : function(err) {
					oBusyDialog.close();
					alert("No data retrieved for the selected request.\nStatus Code: " + err.status + "\ndescription: " + err.statusText + "\n" + err.responseText);
				}
			});

			//*******************  Change in Commission Rate  *******************************************/
		} else if (_data.Application == "RES_COMM_RATE") {
			oBusyDialog = new sap.m.BusyDialog({text:'Retrieving Change in Commission Rate details. Please wait...'});
			oBusyDialog.open();
			$.ajax({
				type : "GET",
				url : "/sap/opu/odata/sap/ZGW_RLC_SALES_SRV/cr1ComRateSet(Refnumber='"+ _data.requestNum+"')?$format=json&$expand=cr2DetailsSet,cr3CommentSet,cr4RemarksSet,cr5ApproversSet/cr5CommentsSet",
				dataType : "json",
				success : function(aData) {

					aData.d.cr2DetailsSet = aData.d.cr2DetailsSet.results;
					aData.d.cr3CommentSet = aData.d.cr3CommentSet.results;
					aData.d.cr4RemarksSet = aData.d.cr4RemarksSet.results;
					aData.d.cr5ApproversSet = aData.d.cr5ApproversSet.results;
					aData.d.EffectDate = sapDateFormat(aData.d.EffectDate);
					aData.d.DateReq = sapDateFormat(aData.d.DateReq);
					
					var comments = "";
					
					for(var a = 0; a < aData.d.cr5ApproversSet.length; a++){
						comments = "";
						for(var b = 0; b < aData.d.cr5ApproversSet[a].cr5CommentsSet.results.length; b++){
							//if (comments != "") comments = comments + "\n";
							comments = comments + aData.d.cr5ApproversSet[a].cr5CommentsSet.results[b].Line;
						}
						aData.d.cr5ApproversSet[a].cr5CommentsSet = comments;
					}
					
					comments = "";
					for(var a = 0; a < aData.d.cr3CommentSet.length; a++){
						if (comments != "") comments = comments + "\n";
						comments = comments + aData.d.cr3CommentSet[a].Line;
					}
					aData.d.cr3CommentSet = comments;

					comments = "";
					for(var a = 0; a < aData.d.cr4RemarksSet.length; a++){
						if (comments != "") comments = comments + "\n";
						comments = comments + aData.d.cr4RemarksSet[a].Line;
					}
					aData.d.cr4RemarksSet = comments;

					//get Attachments
					_this.getAttachments(aData.d,_data.requestNum);
					
					document.getElementById("currentItem").innerHTML = " > Change in Commission Rate";
					showContent("COMMRATE" ,"views.Seller.CommissionRate" , "COMMRATE", aData.d);

					oBusyDialog.close();
				},
				error : function(err) {
					oBusyDialog.close();
					alert("No data retrieved for the selected request.\nStatus Code: " + err.status + "\ndescription: " + err.statusText + "\n" + err.responseText);
				}
			});

			//*******************  Change in Commission Rate  *******************************************/
		} else if (_data.Application == "RES_ROUTESHEET") {
			oBusyDialog = new sap.m.BusyDialog({text:'Retrieving Route Sheet details. Please wait...'});
			oBusyDialog.open();
			$.ajax({
				type : "GET",
				url : "/sap/opu/odata/sap/ZGW_RLC_SALES_SRV/zrs_routesheet_mainSet(RefNumber='"+ _data.requestNum+"')?$expand=zrs_routesheet_headerSet,zrs_routesheet_detailsSet,approverSet/approverComment,inputData&$format=json",
				dataType : "json", 
				success : function(aData) {
					aData.d.approverSet = aData.d.approverSet.results;
					aData.d.zrs_routesheet_headerSet = aData.d.zrs_routesheet_headerSet.results;
					aData.d.zrs_routesheet_detailsSet = aData.d.zrs_routesheet_detailsSet.results;
					aData.d.zrs_routesheet_headerSet[0].Contractprice = util.Formatter.amount(aData.d.zrs_routesheet_headerSet[0].Contractprice);
					aData.d.zrs_routesheet_headerSet[0].Totalarea = util.Formatter.amount(aData.d.zrs_routesheet_headerSet[0].Totalarea);
					
					aData.d.zrs_routesheet_headerSet[0].SaleDate = sapDateFormat(aData.d.zrs_routesheet_headerSet[0].SaleDate);
					aData.d.zrs_routesheet_headerSet[0].Date = sapDateFormat(aData.d.zrs_routesheet_headerSet[0].Date);
					aData.d.zrs_routesheet_headerSet[0].Aadate = sapDateFormat(aData.d.zrs_routesheet_headerSet[0].Aadate); 
					aData.d.zrs_routesheet_detailsSet[0].CValidFrom = sapDateFormat(aData.d.zrs_routesheet_detailsSet[0].CValidFrom);
					//aData.d.zrs_routesheet_detailsSet[0].NValidFrom = sapDateFormat(aData.d.zrs_routesheet_detailsSet[0].NValidFrom);
					if(aData.d.zrs_routesheet_detailsSet[0].NValidFrom == "00000000"){
						aData.d.zrs_routesheet_detailsSet[0].NValidFrom = new Date().format("yyyymmdd");
					}
					aData.d.zrs_routesheet_detailsSet[0].Currentunitprice = util.Formatter.amount(aData.d.zrs_routesheet_detailsSet[0].Currentunitprice);
					aData.d.zrs_routesheet_detailsSet[0].Newunitprice = util.Formatter.amount(aData.d.zrs_routesheet_detailsSet[0].Newunitprice);
					
					aData.d.zrs_routesheet_detailsSet[0].Mcondolotarea = util.Formatter.amount(aData.d.zrs_routesheet_detailsSet[0].Mcondolotarea);
					aData.d.zrs_routesheet_detailsSet[0].Bcondolotarea = util.Formatter.amount(aData.d.zrs_routesheet_detailsSet[0].Bcondolotarea);

					aData.d.zrs_routesheet_detailsSet[0].Mbalconyarea = util.Formatter.amount(aData.d.zrs_routesheet_detailsSet[0].Mbalconyarea);
					aData.d.zrs_routesheet_detailsSet[0].Bbalconyarea = util.Formatter.amount(aData.d.zrs_routesheet_detailsSet[0].Bbalconyarea);
					
					aData.d.zrs_routesheet_detailsSet[0].Mgardenarea = util.Formatter.amount(aData.d.zrs_routesheet_detailsSet[0].Mgardenarea);
					aData.d.zrs_routesheet_detailsSet[0].Bgardenarea = util.Formatter.amount(aData.d.zrs_routesheet_detailsSet[0].Bgardenarea);
					
					aData.d.zrs_routesheet_detailsSet[0].Macledgearea = util.Formatter.amount(aData.d.zrs_routesheet_detailsSet[0].Macledgearea);
					aData.d.zrs_routesheet_detailsSet[0].Bacledgearea = util.Formatter.amount(aData.d.zrs_routesheet_detailsSet[0].Bacledgearea);
					
					aData.d.zrs_routesheet_detailsSet[0].Mtotalarea = util.Formatter.amount(aData.d.zrs_routesheet_detailsSet[0].Mtotalarea);
					aData.d.zrs_routesheet_detailsSet[0].Btotalarea = util.Formatter.amount(aData.d.zrs_routesheet_detailsSet[0].Btotalarea);
					

					var comments = "";
					for(var a = 0; a < aData.d.approverSet.length; a++){
						comments = "";
						for(var b = 0; b < aData.d.approverSet[a].approverComment.results.length; b++){
							//if (comments != "") comments = comments + "\n";
							comments = comments + aData.d.approverSet[a].approverComment.results[b].Line;
						}
						aData.d.approverSet[a].approverComment = comments;
						aData.d.approverSet[a].CompleteName1 = aData.d.approverSet[a].CompleteName;
						var approver = (aData.d.approverSet[a].CompleteName).split("/");
						aData.d.approverSet[a].CompleteName = approver[2];
						aData.d.approverSet[a].Department = approver[1];
					}										

					//get Attachments
					_this.getAttachments(aData.d,_data.requestNum);
					
					document.getElementById("currentItem").innerHTML = " > Route Sheet";
					showContent("ROUTESHEET" ,"views.RouteSheet.RouteSheet" , "ROUTESHEET", aData.d);

					oBusyDialog.close();
				},
				error : function(err) {
					oBusyDialog.close();
					alert("No data retrieved for the selected request.\nStatus Code: " + err.status + "\ndescription: " + err.statusText + "\n" + err.responseText);
				}
			});

			//*******************  KB Incentive  *******************************************/
		} else if (_data.Application == "RES_KBINCENTIVE") {
			oBusyDialog = new sap.m.BusyDialog({text:'Retrieving KB Incentive details. Please wait...'});
			oBusyDialog.open();
			$.ajax({
				type : "GET",
				url : "/sap/opu/odata/SAP/ZGW_RLC_SALES_SRV/kb01refnumberSet(Refnumber='"+ _data.requestNum+"')?$format=json&$expand=kb02terx_reasonSet,kb03schemeSet,kb04scheme_2Set,kb05approversSet,kb06headerSet,kb07proposed_schedSet,kb08adjustment_schedSet,kb09summary_proposedSet,kb10summary_proposed_2Set,kb11deductionsSet,kb12discountsSet,kb13resubmissionSet,kb14contractdetail_expandedSet,kb15current_priceSet,kb16buyerSet,kb17agentSet,kb18related_contractsSet,kb19paymentsSet,kb20penaltiesSet,kb21summary_oldSet,kb22summary_old_1Set,kb23summary_old_2Set,kb24summary_newSet,kb25summary_new_1Set,kb26summary_new_2Set,kb27installmentSet,kb28particularsSet,kb29scheduleSet,kb30spreadSet,kb31remarksSet,kb32save_reasonSet,kb33recommendationSet,kb34current_schedSet",
				dataType : "json", 
				success : function(aData) {
					aData.d.kb02terx_reasonSet = aData.d.kb02terx_reasonSet.results;
					aData.d.kb03schemeSet = aData.d.kb03schemeSet.results;
					aData.d.kb04scheme_2Set = aData.d.kb04scheme_2Set.results;
					aData.d.kb05approversSet = aData.d.kb05approversSet.results;

					aData.d.kb06headerSet = aData.d.kb06headerSet.results;
					aData.d.kb07proposed_schedSet = aData.d.kb07proposed_schedSet.results;
					aData.d.kb07proposed_schedSet[0].GrossTcp = util.Formatter.amount(aData.d.kb07proposed_schedSet[0].GrossTcp);
					aData.d.kb07proposed_schedSet[0].Discount = util.Formatter.amount(aData.d.kb07proposed_schedSet[0].Discount);
					aData.d.kb07proposed_schedSet[0].NetTcp = util.Formatter.amount(aData.d.kb07proposed_schedSet[0].NetTcp);
					aData.d.kb07proposed_schedSet[0].Ttfe = util.Formatter.amount(aData.d.kb07proposed_schedSet[0].Ttfe);
					aData.d.kb07proposed_schedSet[0].FibAdj = util.Formatter.amount(aData.d.kb07proposed_schedSet[0].FibAdj);
					
					aData.d.kb08adjustment_schedSet = aData.d.kb08adjustment_schedSet.results;
					aData.d.kb08adjustment_schedSet[0].GrossTcp = util.Formatter.amount(aData.d.kb08adjustment_schedSet[0].GrossTcp);
					aData.d.kb08adjustment_schedSet[0].Discount = util.Formatter.amount(aData.d.kb08adjustment_schedSet[0].Discount);
					aData.d.kb08adjustment_schedSet[0].NetTcp = util.Formatter.amount(aData.d.kb08adjustment_schedSet[0].NetTcp);
					aData.d.kb08adjustment_schedSet[0].Ttfe = util.Formatter.amount(aData.d.kb08adjustment_schedSet[0].Ttfe);
					aData.d.kb08adjustment_schedSet[0].FibAdj = util.Formatter.amount(aData.d.kb08adjustment_schedSet[0].FibAdj);

					aData.d.kb09summary_proposedSet = aData.d.kb09summary_proposedSet.results;
					aData.d.kb10summary_proposed_2Set = aData.d.kb10summary_proposed_2Set.results;
					
					aData.d.kb11deductionsSet = aData.d.kb11deductionsSet.results;
					aData.d.kb12discountsSet = aData.d.kb12discountsSet.results;
					aData.d.kb13resubmissionSet = aData.d.kb13resubmissionSet.results;
					aData.d.kb14contractdetail_expandedSet = aData.d.kb14contractdetail_expandedSet.results;
					aData.d.kb14contractdetail_expandedSet[0].SaleDate = sapDateFormat(aData.d.kb14contractdetail_expandedSet[0].SaleDate);
					
					aData.d.kb15current_priceSet = aData.d.kb15current_priceSet.results;
					aData.d.kb15current_priceSet[0].GrossTcp = util.Formatter.amount(aData.d.kb15current_priceSet[0].GrossTcp);
					aData.d.kb15current_priceSet[0].Discount = util.Formatter.amount(aData.d.kb15current_priceSet[0].Discount);
					aData.d.kb15current_priceSet[0].NetTcp = util.Formatter.amount(aData.d.kb15current_priceSet[0].NetTcp);
					aData.d.kb15current_priceSet[0].TotalTcp = util.Formatter.amount(aData.d.kb15current_priceSet[0].TotalTcp);
					aData.d.kb15current_priceSet[0].Forfeited = util.Formatter.amount(aData.d.kb15current_priceSet[0].Forfeited);
					aData.d.kb15current_priceSet[0].AppliedPay = util.Formatter.amount(aData.d.kb15current_priceSet[0].AppliedPay);
					aData.d.kb15current_priceSet[0].NetRestruc = util.Formatter.amount(aData.d.kb15current_priceSet[0].NetRestruc);
					aData.d.kb15current_priceSet[0].Ttfe = util.Formatter.amount(aData.d.kb15current_priceSet[0].Ttfe);
					aData.d.kb15current_priceSet[0].FibAdj = util.Formatter.amount(aData.d.kb15current_priceSet[0].FibAdj);
					
					aData.d.kb16buyerSet = aData.d.kb16buyerSet.results;
					aData.d.kb17agentSet = aData.d.kb17agentSet.results;
					aData.d.kb18related_contractsSet = aData.d.kb18related_contractsSet.results;
					aData.d.kb19paymentsSet = aData.d.kb19paymentsSet.results;
					aData.d.kb20penaltiesSet = aData.d.kb20penaltiesSet.results;
					
					aData.d.kb21summary_oldSet = aData.d.kb21summary_oldSet.results;
					aData.d.kb22summary_old_1Set = aData.d.kb22summary_old_1Set.results;
					aData.d.kb23summary_old_2Set = aData.d.kb23summary_old_2Set.results;
					aData.d.kb24summary_newSet = aData.d.kb24summary_newSet.results;
					aData.d.kb25summary_new_1Set = aData.d.kb25summary_new_1Set.results;

					aData.d.kb26summary_new_2Set = aData.d.kb26summary_new_2Set.results;
					aData.d.kb27installmentSet = aData.d.kb27installmentSet.results;
					aData.d.kb28particularsSet = aData.d.kb28particularsSet.results;
					aData.d.kb29scheduleSet = aData.d.kb29scheduleSet.results;
					aData.d.kb30spreadSet = aData.d.kb30spreadSet.results;
					
					aData.d.kb31remarksSet = aData.d.kb31remarksSet.results;
					aData.d.kb32save_reasonSet = aData.d.kb32save_reasonSet.results;
					aData.d.kb33recommendationSet = aData.d.kb33recommendationSet.results;
					aData.d.kb34current_schedSet = aData.d.kb34current_schedSet.results;

					document.getElementById("currentItem").innerHTML = " > KBIncentive";
					showContent("kbIncentive" ,"views.KBIncentive.KBIncentive" , "KBIncentive", aData.d);
					
					oBusyDialog.close();
				},
				error : function(err) {
					oBusyDialog.close();
					alert("No data retrieved for the selected request.\nStatus Code: " + err.status + "\ndescription: " + err.statusText + "\n" + err.responseText);
				}
			});
			//*******************  Plan Revision  *******************************************/
		} else if (_data.Application == "RES_PLANREV") {
			oBusyDialog = new sap.m.BusyDialog({text:'Retrieving Plan Revision details. Please wait...'});
			oBusyDialog.open();

			var fModel = new sap.ui.model.json.JSONModel();
			
			$.ajax({
			type : "GET",
			url : "/sap/opu/odata/SAP/ZGW_RLC_SALES_SRV/fldImportSet(Application='"+_data.Application+"')?$format=json&$expand=fldstatusSet",
			dataType : "json",
			success : function(fData) {
				
				fModel.setData({fieldData: fData});
				sap.ui.getCore().setModel(fModel);
			
				$.ajax({
					type : "GET",
					url : "/sap/opu/odata/sap/ZGW_RLC_SALES_SRV/PR_GetDetailsSet(RefNumber='"+ _data.requestNum+"')?$expand=PV_ReqPropSet,PV_BackDetSet,PV_RecommendationSet,approverSet/approverComment,PV_PlanRevDescriptionSet,PV_PlanRevSet&$format=json",
					dataType : "json",
					success : function(aData) {
						aData.d.PV_PlanRevDescriptionSet = aData.d.PV_PlanRevDescriptionSet.results[0];
						aData.d.PV_PlanRevSet = aData.d.PV_PlanRevSet.results;
						aData.d.PV_ReqPropSet = aData.d.PV_ReqPropSet.results;
						aData.d.PV_BackDetSet = aData.d.PV_BackDetSet.results;
						aData.d.PV_RecommendationSet = aData.d.PV_RecommendationSet.results;
						aData.d.approverSet = aData.d.approverSet.results;
						
						aData.d.PV_PlanRevDescriptionSet.Punit3Tot = util.Formatter.amount(aData.d.PV_PlanRevDescriptionSet.Punit3Tot);
						aData.d.PV_PlanRevDescriptionSet.Punit3Tcp = util.Formatter.amount(aData.d.PV_PlanRevDescriptionSet.Punit3Tcp);
						aData.d.PV_PlanRevDescriptionSet.Punit2Tot = util.Formatter.amount(aData.d.PV_PlanRevDescriptionSet.Punit2Tot);
						aData.d.PV_PlanRevDescriptionSet.Punit2Tcp = util.Formatter.amount(aData.d.PV_PlanRevDescriptionSet.Punit2Tcp);
						aData.d.PV_PlanRevDescriptionSet.Punit1Tot = util.Formatter.amount(aData.d.PV_PlanRevDescriptionSet.Punit1Tot);
						aData.d.PV_PlanRevDescriptionSet.Punit1Tcp = util.Formatter.amount(aData.d.PV_PlanRevDescriptionSet.Punit1Tcp);
						aData.d.PV_PlanRevDescriptionSet.Unit3Tot = util.Formatter.amount(aData.d.PV_PlanRevDescriptionSet.Unit3Tot);
						aData.d.PV_PlanRevDescriptionSet.Unit3Tcp = util.Formatter.amount(aData.d.PV_PlanRevDescriptionSet.Unit3Tcp);
						aData.d.PV_PlanRevDescriptionSet.Unit2Tot = util.Formatter.amount(aData.d.PV_PlanRevDescriptionSet.Unit2Tot);
						aData.d.PV_PlanRevDescriptionSet.Unit2Tcp = util.Formatter.amount(aData.d.PV_PlanRevDescriptionSet.Unit2Tcp);
						aData.d.PV_PlanRevDescriptionSet.Unit1Tot = util.Formatter.amount(aData.d.PV_PlanRevDescriptionSet.Unit1Tot);
						aData.d.PV_PlanRevDescriptionSet.Unit1Tcp = util.Formatter.amount(aData.d.PV_PlanRevDescriptionSet.Unit1Tcp);
						
						aData.d.PV_PlanRevSet[0].CostBdd = util.Formatter.amount(aData.d.PV_PlanRevSet[0].CostBdd);
						aData.d.PV_PlanRevSet[0].CostDpd = util.Formatter.amount(aData.d.PV_PlanRevSet[0].CostDpd);
						aData.d.PV_PlanRevSet[0].CostPmd = util.Formatter.amount(aData.d.PV_PlanRevSet[0].CostPmd);
						/*aData.d.PV_PlanRevSet[0].BddDate = sapDateFormat(aData.d.PV_PlanRevSet[0].BddDate);
						aData.d.PV_PlanRevSet[0].DpdDate = sapDateFormat(aData.d.PV_PlanRevSet[0].DpdDate);
						aData.d.PV_PlanRevSet[0].PmdDate = sapDateFormat(aData.d.PV_PlanRevSet[0].PmdDate);
						aData.d.PV_PlanRevSet[0].ExpiryDate = sapDateFormat(aData.d.PV_PlanRevSet[0].ExpiryDate);*/
						
						if(aData.d.PV_PlanRevSet[0].BddDate == "00000000"){
							aData.d.PV_PlanRevSet[0].BddDate = "";
						}
						if(aData.d.PV_PlanRevSet[0].DpdDate == "00000000"){
							aData.d.PV_PlanRevSet[0].DpdDate = "";
						}
						if(aData.d.PV_PlanRevSet[0].PmdDate == "00000000"){
							aData.d.PV_PlanRevSet[0].PmdDate = "";
						}
						if(aData.d.PV_PlanRevSet[0].ExpiryDate == "00000000"){
							aData.d.PV_PlanRevSet[0].ExpiryDate = "";
						}
						
						aData.d.Refnumber = aData.d.PV_PlanRevDescriptionSet.Refnumber;
						aData.d.cutoff = "";
						aData.d.costPMD = "0.00";
						aData.d.costDPD = "0.00";
						aData.d.costBDD = "0.00";
						aData.d.datePMD = "";
						aData.d.dateDPD = "";
						aData.d.dateBDD = "";
						
						var comments = "";
						comments = "";
						for(var a = 0; a < aData.d.PV_ReqPropSet.length; a++){
							if (comments != "") comments = comments + "\n";
							comments = comments + aData.d.PV_ReqPropSet[a].Line;
						}
						aData.d.PV_ReqPropSet = comments;
	
						comments = "";
						for(var a = 0; a < aData.d.PV_BackDetSet.length; a++){
							if (comments != "") comments = comments + "\n";
							comments = comments + aData.d.PV_BackDetSet[a].Line;
						}
						aData.d.PV_BackDetSet = comments;
	
						comments = "";
						for(var a = 0; a < aData.d.PV_RecommendationSet.length; a++){
							if (comments != "") comments = comments + "\n";
							comments = comments + aData.d.PV_RecommendationSet[a].Line;
						}
						aData.d.PV_RecommendationSet = comments;
	
						comments = "";
						for(var a = 0; a < aData.d.approverSet.length; a++){
							comments = "";
							for(var b = 0; b < aData.d.approverSet[a].approverComment.results.length; b++){
								//if (comments != "") comments = comments + "\n";
								comments = comments + aData.d.approverSet[a].approverComment.results[b].Line;
							}
							aData.d.approverSet[a].approverComment = comments;
						}
	
						
						//get Attachments
						_this.getAttachments(aData.d,_data.requestNum);

						var bFound = false;
						var len = (aData.d.Attachments.length) - 1;
				        for (var a = len; a >= 0; a--){
							bFound = false;
							for(var b = 0; b < fData.d.fldstatusSet.results.length; b++){
								if (fData.d.fldstatusSet.results[b].Fieldname == aData.d.Attachments[a].Filecategory
									&& fData.d.fldstatusSet.results[b].Hide != "X") {
									bFound = true;
									break;
								}
							}
							if (!bFound) {
								delete aData.d.Attachments[a];
								aData.d.Attachments.splice(a,1);
							}
						}
						
						
						oPlanRev_Type = aData.d.PV_PlanRevDescriptionSet.RequestType;
						
						document.getElementById("currentItem").innerHTML = " > Plan Revision";
						showContent("PLANREVISION" ,"views.Buyer.PlanRevision" , "PLANREVISION", aData.d);
	
						oBusyDialog.close();
					},
					error : function(err) {
						oBusyDialog.close();
						alert("No data retrieved for the selected request.\nStatus Code: " + err.status + "\ndescription: " + err.statusText + "\n" + err.responseText);
					}

				});
				},
				error : function(err) {
					oBusyDialog.close();
					alert("No data retrieved for the selected request1.\nStatus Code: " + err.status + "\ndescription: " + err.statusText + "\n" + err.responseText);
				}
			});

			//*******************  Un-Tag Logging  *******************************************/
		} else if (_data.Application == "RES_UNTAGLOG") {
			oBusyDialog = new sap.m.BusyDialog({text:'Retrieving Un-Tag Logging details. Please wait...'});
			oBusyDialog.open();
			$.ajax({
				type : "GET",
				url : "/sap/opu/odata/sap/ZGW_RLC_SALES_SRV/TagLog_DetailSet(Refnumber='"+ _data.requestNum+"')?$expand=TagLog_JustificationText,TagLog_BackgroundText,TagLog_Items,TagLog_Approver/approverComment&$format=json",
				dataType : "json",
				success : function(aData) {
					//aData.d = aData.d.results[0];
					aData.d.TagLog_JustificationText = aData.d.TagLog_JustificationText.results;
					aData.d.TagLog_BackgroundText = aData.d.TagLog_BackgroundText.results;
					aData.d.TagLog_Items = aData.d.TagLog_Items.results;
					aData.d.TagLog_Approver = aData.d.TagLog_Approver.results;
					aData.d.OutBal = util.Formatter.amount(aData.d.OutBal);
					aData.d.TotTcp = util.Formatter.amount(aData.d.TotTcp);
					aData.d.Tcp = util.Formatter.amount(aData.d.Tcp);
					aData.d.Recnbeg = sapDateFormat(aData.d.Recnbeg);
					aData.d.RcvdDate = sapDateFormat(aData.d.RcvdDate);
					aData.d.Xgetxt = aData.d.Xgetxt + " " + aData.d.Xgrtxt;
					//aData.d.PV_RecommendationSet = aData.d.PV_RecommendationSet.results;
					//aData.d.approverSet = aData.d.approverSet.results;
					
					var comments = "";
					
					comments = "";
					for(var a = 0; a < aData.d.TagLog_JustificationText.length; a++){
						if (comments != "") comments = comments + "\n";
						comments = comments + aData.d.TagLog_JustificationText[a].Tdline;
					}
					aData.d.TagLog_JustificationText = comments;

					comments = "";
					for(var a = 0; a < aData.d.TagLog_BackgroundText.length; a++){
						if (comments != "") comments = comments + "\n";
						comments = comments + aData.d.TagLog_BackgroundText[a].Tdline;
					}
					aData.d.TagLog_BackgroundText = comments;

					for(var a = 0; a < aData.d.TagLog_Approver.length; a++){
						comments = "";
						for(var b = 0; b < aData.d.TagLog_Approver[a].approverComment.results.length; b++){
							//if (comments != "") comments = comments + "\n";
							comments = comments + aData.d.TagLog_Approver[a].approverComment.results[b].Line;
						}
						aData.d.TagLog_Approver[a].approverComment = comments;
					}

					//get Attachments
					_this.getAttachments(aData.d,_data.requestNum);
					document.getElementById("currentItem").innerHTML = " > Un-Tag LOG Items";
					showContent("UNTAGLOG" ,"views.UnTag.LogItems" , "UNTAGLOG", aData.d);

					oBusyDialog.close();
				},
				error : function(err) {
					oBusyDialog.close();
					alert("No data retrieved for the selected request.\nStatus Code: " + err.status + "\ndescription: " + err.statusText + "\n" + err.responseText);
				}
			});

			//*******************  Add/Edit Assignment  *******************************************/
		} else if (_data.Application == "RES_ADDEDIT") {
			oBusyDialog = new sap.m.BusyDialog({text:'Retrieving Agent Assignment details. Please wait...'});
			oBusyDialog.open();
			$.ajax({
				type : "GET",
				url : "/sap/opu/odata/sap/ZGW_RLC_SALES_SRV/AEAgent_HeaderSet(Refnumber='"+ _data.requestNum+"')?$expand=agents,approvers/approverComment,remarks&$format=json",
				dataType : "json",
				success : function(aData) {
					aData.d.agents = aData.d.agents.results;
					aData.d.approvers = aData.d.approvers.results;
					aData.d.remarks = aData.d.remarks.results;
					aData.d.genDetails = [{ "Project" : aData.d.Project
						, "UnitType" : aData.d.UnitType
						, "LotUnit" : aData.d.LotUnit
						, "Area" : aData.d.Area
						, "DateOfSale" : aData.d.DateOfSale
						, "TcpAmount" : aData.d.TcpAmount
						, "RelTranche" : aData.d.RelTranche
						
					}];
					
					var comments = "";
					
					comments = "";
					for(var a = 0; a < aData.d.remarks.length; a++){
						if (comments != "") comments = comments + "\n";
						comments = comments + aData.d.remarks[a].Line;
					}
					aData.d.remarks = comments;

					for(var a = 0; a < aData.d.approvers.length; a++){
						comments = "";
						for(var b = 0; b < aData.d.approvers[a].approverComment.results.length; b++){
							//if (comments != "") comments = comments + "\n";
							comments = comments + aData.d.approvers[a].approverComment.results[b].Line;
						}
						aData.d.approvers[a].approverComment = comments;
					}

					//get Attachments
					_this.getAttachments(aData.d,_data.requestNum);
					
					document.getElementById("currentItem").innerHTML = " > Add/Edit Agent Assignment";
					showContent("ASSIGNMENT" ,"views.Agent.Assignment" , "ASSIGNMENT", aData.d);

					oBusyDialog.close();
				},
				error : function(err) {
					oBusyDialog.close();
					alert("No data retrieved for the selected request.\nStatus Code: " + err.status + "\ndescription: " + err.statusText + "\n" + err.responseText);
				}
			});

			//*******************  Account Adjustment Special  *******************************************/
		} else if (_data.Application == "RES_AASPECIAL") {
			oBusyDialog = new sap.m.BusyDialog({text:'Retrieving Agent Assignment details. Please wait...'});
			oBusyDialog.open();
			$.ajax({
				type : "GET",
				url : "/sap/opu/odata/sap/ZGW_RLC_SALES_SRV/aas_headerSet(RefNumber='"+ _data.requestNum+"')?$expand=aas_DetailsSet,approverSet/approverComment,remarksSet&$format=json",
				dataType : "json",
				success : function(aData) {
					aData.d.aas_DetailsSet = aData.d.aas_DetailsSet.results;
					aData.d.approverSet = aData.d.approverSet.results;
					aData.d.remarksSet = aData.d.remarksSet.results;
					
					aData.d.Refnumber = aData.d.aas_DetailsSet[0].Refnumber;
					

					aData.d.aas_DetailsSet[0].ForfeitAmt = util.Formatter.amount(aData.d.aas_DetailsSet[0].ForfeitAmt);
					aData.d.aas_DetailsSet[0].RefundAmt = util.Formatter.amount(aData.d.aas_DetailsSet[0].RefundAmt);
					aData.d.aas_DetailsSet[0].TotPenalty = util.Formatter.amount(aData.d.aas_DetailsSet[0].TotPenalty);
					aData.d.aas_DetailsSet[0].TotTransfer = util.Formatter.amount(aData.d.aas_DetailsSet[0].TotTransfer);
					aData.d.aas_DetailsSet[0].TcpAmount = util.Formatter.amount(aData.d.aas_DetailsSet[0].TcpAmount);
					aData.d.aas_DetailsSet[0].SaleDate = sapDateFormat(aData.d.aas_DetailsSet[0].SaleDate);

					if (aData.d.aas_DetailsSet[0].JgEmployee == "") {
						aData.d.aas_DetailsSet[0].JgEmployee = "No";
					} else {
						aData.d.aas_DetailsSet[0].JgEmployee = "Yes";
					}
					
					aData.d.contractdet = [{ "Building" : aData.d.aas_DetailsSet[0].Building
						, "UnitType" : aData.d.aas_DetailsSet[0].UnitType
						, "Lot" : aData.d.aas_DetailsSet[0].Lot
						, "Area" : aData.d.aas_DetailsSet[0].Area
						, "SaleDate" : aData.d.aas_DetailsSet[0].SaleDate
						, "TcpAmount" : aData.d.aas_DetailsSet[0].TcpAmount
						, "Scheme" : aData.d.aas_DetailsSet[0].Scheme
						
					}];
					
					var comments = "";

					for(var a = 0; a < aData.d.remarksSet.length; a++){
						if (comments != "") comments = comments + "\n";
						comments = comments + aData.d.remarksSet[a].Line;
					}
					aData.d.remarksSet = comments;

					comments = "";
					for(var a = 0; a < aData.d.approverSet.length; a++){
						comments = "";
						for(var b = 0; b < aData.d.approverSet[a].approverComment.results.length; b++){
							//if (comments != "") comments = comments + "\n";
							comments = comments + aData.d.approverSet[a].approverComment.results[b].Line;
						}
						aData.d.approverSet[a].approverComment = comments;
					}

					//get Attachments
					_this.getAttachments(aData.d,_data.requestNum);
					
					document.getElementById("currentItem").innerHTML = " > Account Adjustment Special";
					showContent("AASPECIAL" ,"views.Buyer.AccntAdjSpecial" , "AASPECIAL", aData.d);

					oBusyDialog.close();
				},
				error : function(err) {
					oBusyDialog.close();
					alert("No data retrieved for the selected request.\nStatus Code: " + err.status + "\ndescription: " + err.statusText + "\n" + err.responseText);
				}
			});
			
			/****************** R E S T R U C T U R E  **************************/
		} else if (_data.Application == "RES_RESTRUCTRE") {
			oBusyDialog = new sap.m.BusyDialog({text:'Retrieving details for restructure. Please wait...'});
			oBusyDialog.open();
			$.ajax({
				type : "GET",
				url : "/sap/opu/odata/SAP/ZGW_RLC_SALES_SRV/C01ContainerSet(Refnumber='"+ _data.requestNum+"')?$format=json&$expand=C02TerxReasonSet,C03SchemeSet,C04Scheme2Set,C05ApproversSet/C05CommentsSet,C06HeaderSet,C07ProposedScheSet,C08AdjustmentScSet,C09SummaryPropoSet,C10SummaryProp2Set,C11DeductionsSet,C12DiscountsSet,C13ResubmissionSet,C14ContractDetaSet,C15CurrentPriceSet,C16BuyerSet,C17AgentSet,C18RelatedContrSet,C19PaymentsSet,C20PenaltiesSet,C21SummaryOldSet,C22SummaryOld1Set,C23SummaryOld2Set,C24SummaryNewSet,C25SummaryNew1Set,C26SummaryNew2Set,C27InstallmentSet,C28ParticularsSet,C29ScheduleSet,C30SpreadSet,C31RemarksSet,C32SaveReasonSet,C33RecommendatiSet",
				dataType : "json",
				success : function(aData) {
					
					aData.d.C02TerxReasonSet = aData.d.C02TerxReasonSet.results;
					aData.d.C03SchemeSet = aData.d.C03SchemeSet.results;
					aData.d.C04Scheme2Set = aData.d.C04Scheme2Set.results;
					aData.d.C05ApproversSet = aData.d.C05ApproversSet.results;
					aData.d.C06HeaderSet = aData.d.C06HeaderSet.results;
					aData.d.C07ProposedScheSet = aData.d.C07ProposedScheSet.results;
					aData.d.C07ProposedScheSet[0].GrossTcp = util.Formatter.amount(aData.d.C07ProposedScheSet[0].GrossTcp);
					aData.d.C07ProposedScheSet[0].Discount = util.Formatter.amount(aData.d.C07ProposedScheSet[0].Discount);
					aData.d.C07ProposedScheSet[0].NetTcp = util.Formatter.amount(aData.d.C07ProposedScheSet[0].NetTcp);
					aData.d.C07ProposedScheSet[0].Ttfe = util.Formatter.amount(aData.d.C07ProposedScheSet[0].Ttfe);
					aData.d.C07ProposedScheSet[0].FibAdj = util.Formatter.amount(aData.d.C07ProposedScheSet[0].FibAdj);
					aData.d.C08AdjustmentScSet = aData.d.C08AdjustmentScSet.results;
					aData.d.C08AdjustmentScSet[0].GrossTcp = util.Formatter.amount(aData.d.C08AdjustmentScSet[0].GrossTcp);
					aData.d.C08AdjustmentScSet[0].Discount = util.Formatter.amount(aData.d.C08AdjustmentScSet[0].Discount);
					aData.d.C08AdjustmentScSet[0].NetTcp = util.Formatter.amount(aData.d.C08AdjustmentScSet[0].NetTcp);
					aData.d.C08AdjustmentScSet[0].Ttfe = util.Formatter.amount(aData.d.C08AdjustmentScSet[0].Ttfe);
					aData.d.C08AdjustmentScSet[0].FibAdj = util.Formatter.amount(aData.d.C08AdjustmentScSet[0].FibAdj);
					aData.d.C09SummaryPropoSet = aData.d.C09SummaryPropoSet.results;
					aData.d.C10SummaryProp2Set = aData.d.C10SummaryProp2Set.results;
					aData.d.C11DeductionsSet = aData.d.C11DeductionsSet.results;
					aData.d.C12DiscountsSet = aData.d.C12DiscountsSet.results;
					aData.d.C13ResubmissionSet = aData.d.C13ResubmissionSet.results;
					aData.d.C14ContractDetaSet = aData.d.C14ContractDetaSet.results;
					aData.d.C14ContractDetaSet[0].SaleDate = sapDateFormat(aData.d.C14ContractDetaSet[0].SaleDate);
					aData.d.C15CurrentPriceSet = aData.d.C15CurrentPriceSet.results;
					aData.d.C15CurrentPriceSet[0].GrossTcp = util.Formatter.amount(aData.d.C15CurrentPriceSet[0].GrossTcp);
					aData.d.C15CurrentPriceSet[0].Discount = util.Formatter.amount(aData.d.C15CurrentPriceSet[0].Discount);
					aData.d.C15CurrentPriceSet[0].NetTcp = util.Formatter.amount(aData.d.C15CurrentPriceSet[0].NetTcp);
					aData.d.C15CurrentPriceSet[0].TotalTcp = util.Formatter.amount(aData.d.C15CurrentPriceSet[0].TotalTcp);
					aData.d.C15CurrentPriceSet[0].Forfeited = util.Formatter.amount(aData.d.C15CurrentPriceSet[0].Forfeited);
					aData.d.C15CurrentPriceSet[0].AppliedPay = util.Formatter.amount(aData.d.C15CurrentPriceSet[0].AppliedPay);
					aData.d.C15CurrentPriceSet[0].NetRestruc = util.Formatter.amount(aData.d.C15CurrentPriceSet[0].NetRestruc);
					aData.d.C15CurrentPriceSet[0].Ttfe = util.Formatter.amount(aData.d.C15CurrentPriceSet[0].Ttfe);
					aData.d.C15CurrentPriceSet[0].FibAdj = util.Formatter.amount(aData.d.C15CurrentPriceSet[0].FibAdj);
					aData.d.C16BuyerSet = aData.d.C16BuyerSet.results;
					aData.d.C17AgentSet = aData.d.C17AgentSet.results;
					aData.d.C18RelatedContrSet = aData.d.C18RelatedContrSet.results;
					aData.d.C19PaymentsSet = aData.d.C19PaymentsSet.results;
					aData.d.C20PenaltiesSet = aData.d.C20PenaltiesSet.results;
					aData.d.C21SummaryOldSet = aData.d.C21SummaryOldSet.results;
					aData.d.C22SummaryOld1Set = aData.d.C22SummaryOld1Set.results;
					aData.d.C23SummaryOld2Set = aData.d.C23SummaryOld2Set.results;
					aData.d.C24SummaryNewSet = aData.d.C24SummaryNewSet.results;
					aData.d.C25SummaryNew1Set = aData.d.C25SummaryNew1Set.results;
					aData.d.C26SummaryNew2Set = aData.d.C26SummaryNew2Set.results;
					aData.d.C27InstallmentSet = aData.d.C27InstallmentSet.results;
					aData.d.C28ParticularsSet = aData.d.C28ParticularsSet.results;
					aData.d.C29ScheduleSet = aData.d.C29ScheduleSet.results;
					aData.d.C30SpreadSet = aData.d.C30SpreadSet.results;
					aData.d.C31RemarksSet = aData.d.C31RemarksSet.results;
					aData.d.C32SaveReasonSet = aData.d.C32SaveReasonSet.results;
					aData.d.C33RecommendatiSet = aData.d.C33RecommendatiSet.results;

					/*********TOTAL - Proposed Payment Schedule Details********/
					var payapp = 0;
					var tcp = 0;
					var ttfe = 0;
					var totalSpread = 0;

					for (var i = 0; i < aData.d.C30SpreadSet.length; i++) {	
						payapp = payapp + (Number(aData.d.C30SpreadSet[i].Status.replace(/,/g,"")));
						tcp = tcp + (Number(aData.d.C30SpreadSet[i].Tcp.replace(/,/g,"")));
						ttfe = ttfe + (Number(aData.d.C30SpreadSet[i].Ttfe.replace(/,/g,"")));
						totalSpread = totalSpread + (Number(aData.d.C30SpreadSet[i].Total.replace(/,/g,"")));
					}	
					aData.d.TotalSpreadSet = { 
							totalPayApp : util.Formatter.amount(payapp), 
							totalTCP : util.Formatter.amount(tcp), 
							totalTTFE : util.Formatter.amount(ttfe), 
							totalSpread : util.Formatter.amount(totalSpread) 
					};
					/*********TOTAL - Proposed Payment Schedule Details********/
					
					var comments = "";
					for(var a = 0; a < aData.d.C05ApproversSet.length; a++){
						comments = "";
						for(var b = 0; b < aData.d.C05ApproversSet[a].C05CommentsSet.results.length; b++){
							//if (comments != "") comments = comments + "\n";
							comments = comments + aData.d.C05ApproversSet[a].C05CommentsSet.results[b].Line;
						}
						aData.d.C05ApproversSet[a].C05CommentsSet = comments;
					}
					
					comments = "";
					for(var a = 0; a < aData.d.C33RecommendatiSet.length; a++){
						if (comments != "") comments = comments + "\n";
						comments = comments + aData.d.C33RecommendatiSet[a].Line;
					}
					aData.d.C33RecommendatiSet = comments;

					comments = "";
					for(var a = 0; a < aData.d.C31RemarksSet.length; a++){
						if (comments != "") comments = comments + "\n";
						comments = comments + aData.d.C31RemarksSet[a].Line;
					}
					aData.d.C31RemarksSet = comments;

					//get Attachments
					_this.getAttachments(aData.d,_data.requestNum);
					
					document.getElementById("currentItem").innerHTML = " > Restructure";
					showContent("reStructure" ,"views.Buyer.Restructure" , "Restructure", aData.d);

					oBusyDialog.close();
				},
				error : function(err) {
					oBusyDialog.close();
					alert("No data retrieved for the selected request.\nStatus Code: " + err.status + "\ndescription: " + err.statusText + "\n" + err.responseText);
				}
			});
		}
	},

	getAttachments: function(aData, refNumber ) {

		//get security token
		$.ajax({
			type : "GET",
			url : "/sap/opu/odata/sap/ZGW_RLC_SALES_ATTACHMENT_SRV/AttachmentSet?$filter=Refnumber eq '"+ refNumber +"'&$format=json",
			headers: {"X-CSRF-Token":"Fetch","X-Requested-With":"XMLHttpRequest"},
			async:false,
			contentType:"application/json",
			success : function(data,response,xhrObj){
				aData.Attachments = data.d.results;
		},
		error : function(err) {
			alert("Error: \nStatus Code: " + err.status + "\ndescription: " + err.statusText + "\n" + err.responseText);
		}
		})

	},
	sample4POS: function() {

		//get security token
		$.ajax({
			type : "GET",
			url : "/sap/opu/odata/sap/ZGW_SAP_POS_SERVICE_SRV/",
			headers: {"X-CSRF-Token":"Fetch","X-Requested-With":"XMLHttpRequest"},
			async:false,
			contentType:"application/json",
			success : function(data,response,xhrObj){
				var vToken = xhrObj.getResponseHeader("X-CSRF-Token");

				var oData = {"Mandt":"600",
	                       "Auton":"1",
	                       "Vkorg":"BCFG",
	                       "Vtweg":"99",
	                       "Kunnr":"UI5",
	                       "Spart":"95",
	                       "Werks":"6000",
	                       "Artnr":"223341",
	                       "Trtyp":"1",
	                       "Trdat":"11/17/2015",
	                       "Crdno":"MTCB",
	                       "Waers":"PHP",
	                       "NonCash":"1000.00",
	                       "Cash":"0.00",
	                       "Disct":"0.00",
	                       "Vatmt":"120.00",
	                       "Menge":"1.00",
	                       "Meins":"KG"
				};
			
				//save request
				$.ajax({
					type : "POST",
					url : "/sap/opu/odata/sap/ZGW_SAP_POS_SERVICE_SRV/S_ITEMSet",
					headers: {"X-CSRF-Token":vToken,"X-Requested-With":"JSONHttpRequest"}, //,Authorization:	'Basic ' + validUser},
					async:true,
					contentType:"application/json",
					dataType:"json", 
		            data: JSON.stringify(oData),
					success : function(data,response,xhrObj) {

						alert("Success!/n" + data);
				},
				error : function(err) {
					alert("Error2!\nStatus Code: " + err.status + "\ndescription: " + err.statusText + "\n" + err.responseText);
				}
				})

		},
		error : function(err) {
			alert("Error!\nStatus Code: " + err.status + "\ndescription: " + err.statusText + "\n" + err.responseText);
		}
		})

	},

	sampleGetToken: function() {

		//get security token
		$.ajax({
			type : "GET",
			url : "/sap/opu/odata/IWWRK/WFSERVICE",
			headers: {"X-CSRF-Token":"Fetch","X-Requested-With":"XMLHttpRequest"},
			async:false,
			contentType:"application/json",
			success : function(data,response,xhrObj){
				var vToken = xhrObj.getResponseHeader("X-CSRF-Token");
				alert("vToken!"+vToken);
			},
		error : function(err) {
				alert("Error2!\nStatus Code: " + err.status + "\ndescription: " + err.statusText + "\n" + err.responseText);
		}
		})
	},
});