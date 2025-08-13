sap.ui.jsview("views.Buyer.PlanRevision", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf views.Buyer.PlanRevision
	*/ 
	getControllerName : function() {
		return "views.Buyer.PlanRevision";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf views.Buyer.PlanRevision
	*/
	createContent : function(oController) {
		var oCell;
		var _this = this;
		var aData = sap.ui.getCore().getModel().oData;
		
		//Create a matrix layout for Panel
        var oLayout = new sap.ui.commons.layout.MatrixLayout({
			columns : 5,
			width : "100%",
			widths : [ '100px', '150px', '30%', '150px', '150px' ]});

        var lblReqNo = new sap.ui.commons.Label({text: "Request Number: " , design: sap.ui.commons.LabelDesign.Bold, icon: "sap-icon://employee-approvals"});
        lblReqNo.addStyleClass("layoutTitle");

		// CFP Number
		var oTFReqNo = new sap.ui.commons.TextField({
			width : "100%",
			value : '{/tranDetail/PV_PlanRevDescriptionSet/Refnumber}',
			editable: false
		});
		oTFReqNo.addStyleClass("layoutTitle");

		lblReqNo.setLabelFor(oTFReqNo);

        var oRow = new sap.ui.commons.layout.MatrixLayoutRow();
        oLayout.addRow(oRow);
		oRow.addStyleClass("layoutTitle");
    	//Layout 1 Title
        var oCellReqNoLbl = new sap.ui.commons.layout.MatrixLayoutCell({vAlign : sap.ui.commons.layout.VAlign.Bottom});

        oCellReqNoLbl.setHAlign(sap.ui.commons.layout.HAlign.Begin);
        oCellReqNoLbl.addContent(lblReqNo);
        oCellReqNoLbl.addStyleClass("noPads");

        var oCellReqNo = new sap.ui.commons.layout.MatrixLayoutCell({vAlign : sap.ui.commons.layout.VAlign.Bottom, colSpan: 4});
        oCellReqNo.addContent(oTFReqNo);
        oCellReqNo.addStyleClass("noPads");

        oRow.addCell(oCellReqNoLbl);
        oRow.addCell(oCellReqNo);
        ////////////////////////////////////////////////////////////////////////////////////////////////////
        var oFields;
        
        if (oPlanRev_Type == "Pre-Sales") {
        	oFields = [{row1: [{type:"Label",value:"Project",align: ""}
					  ,{type:"Text",value:"{/tranDetail/PV_PlanRevDescriptionSet/Project}",align: ""}
					  ]}
					 ,{row1: [{type:"Label",value:"Building",align: ""}
					  ,{type:"Text",value:"{/tranDetail/PV_PlanRevDescriptionSet/Building}",align: ""}
					  ]}
					 ,{row1: [{type:"Label",value:"Land",align: ""}
					  ,{type:"Text",value:"{/tranDetail/PV_PlanRevDescriptionSet/Land}",align: ""}
					  ]}
					 ];
        } else {
	        	oFields = [{row1: [{type:"Label",value:"Buyer",align: ""}
					  ,{type:"Text",value:"{/tranDetail/PV_PlanRevDescriptionSet/Buyer}",align: ""}
					  ]}
					 ,{row1: [{type:"Label",value:"Email",align: ""}
					  ,{type:"Text",value:"{/tranDetail/PV_PlanRevDescriptionSet/EmailBuyer}",align: ""}
					  ]}
					 ,{row1: [{type:"Label",value:"Contract Number",align: ""}
					  ,{type:"Text",value:"{/tranDetail/PV_PlanRevDescriptionSet/Contract}",align: ""}
					  ]}
					 ,{row1: [{type:"",value:"",align: ""}
					  ,{type:"",value:"",align: ""}
					  ]}
					 ,{row1: [{type:"Label",value:"Project",align: ""}
					  ,{type:"Text",value:"{/tranDetail/PV_PlanRevDescriptionSet/Project}",align: ""}
					  ]}
					 ,{row1: [{type:"Label",value:"Building",align: ""}
					  ,{type:"Text",value:"{/tranDetail/PV_PlanRevDescriptionSet/Building}",align: ""}
					  ]}
					 ,{row1: [{type:"Label",value:"Land",align: ""}
					  ,{type:"Text",value:"{/tranDetail/PV_PlanRevDescriptionSet/Land}",align: ""}
					  ]}
				 ];
        }
        	
		var oGenDetails = formDynamic(oFields, [], [ '100px', '300px', '40%' ]);

		//***************************** CURRENT UNIT ******************************************/
		oFields = [{row1: [{type:"Label",value:"Unit Number",align: ""}
							  ,{type:"Text",value:"{/tranDetail/PV_PlanRevDescriptionSet/Unit1No}",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"Text",value:"{/tranDetail/PV_PlanRevDescriptionSet/Unit2No}",align: ""}
					  ]}
					 ,{row1: [{type:"Label",value:"TCP",align: ""}
					  ,{type:"Text",value:"{/tranDetail/PV_PlanRevDescriptionSet/Unit1Tcp}",align: "End"}
					  ,{type:"",value:"",align: ""}
					  ,{type:"Text",value:"{/tranDetail/PV_PlanRevDescriptionSet/Unit2Tcp}",align: "End"}
					  ]}
					 ,{row1: [{type:"Label",value:"Unit Type",align: ""}
					  ,{type:"Text",value:"{/tranDetail/PV_PlanRevDescriptionSet/Unit1Typ}",align: ""}
					  ,{type:"",value:"",align: ""}
					  ,{type:"Text",value:"{/tranDetail/PV_PlanRevDescriptionSet/Unit2Typ}",align: ""}
					  ]}
					 ,{row1: [{type:"Label",value:"Total Area(SQM)",align: ""}
					  ,{type:"Text",value:"{/tranDetail/PV_PlanRevDescriptionSet/Unit1Tot}",align: ""}
					  ,{type:"",value:"",align: ""}
					  ,{type:"Text",value:"{/tranDetail/PV_PlanRevDescriptionSet/Unit2Tot}",align: ""}
					  ]}
					 ];
		
		var oCurrUnit = formDynamic(oFields, ['','Unit 1','','Unit 2',''], [ '100px', '200px', '2%', '200px', '40%' ]);

		//***************************** PROPOSED UNIT ******************************************/
		oFields = [{row1: [{type:"Label",value:"Unit Number",align: ""}
							  ,{type:"Text",value:"{/tranDetail/PV_PlanRevDescriptionSet/Punit1No}",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"Text",value:"{/tranDetail/PV_PlanRevDescriptionSet/Punit2No}",align: ""}
					  ]}
					 ,{row1: [{type:"Label",value:"TCP",align: ""}
					  ,{type:"Text",value:"{/tranDetail/PV_PlanRevDescriptionSet/Punit1Tcp}",align: "End"}
					  ,{type:"",value:"",align: ""}
					  ,{type:"Text",value:"{/tranDetail/PV_PlanRevDescriptionSet/Punit2Tcp}",align: "End"}
					  ]}
					 ,{row1: [{type:"Label",value:"Unit Type",align: ""}
					  ,{type:"Text",value:"{/tranDetail/PV_PlanRevDescriptionSet/Punit1Typ}",align: ""}
					  ,{type:"",value:"",align: ""}
					  ,{type:"Text",value:"{/tranDetail/PV_PlanRevDescriptionSet/Punit2Typ}",align: ""}
					  ]}
					 ,{row1: [{type:"Label",value:"Total Area(SQM)",align: ""}
					  ,{type:"Text",value:"{/tranDetail/PV_PlanRevDescriptionSet/Punit1Tot}",align: ""}
					  ,{type:"",value:"",align: ""}
					  ,{type:"Text",value:"{/tranDetail/PV_PlanRevDescriptionSet/Punit2Tot}",align: ""}
					  ]}
					 ];
		
		var oPropUnit = formDynamic(oFields, ['','Unit 1','','Unit 2',''], [ '100px', '200px', '2%', '200px', '40%' ]);

		//***************************** AGENT ******************************************/
		oFields = [{row1: [{type:"Label",value:"Agent",align: ""}
							  ,{type:"Text",value:"{/tranDetail/PV_PlanRevDescriptionSet/Agent}",align: ""}
					  ]}
					 ,{row1: [{type:"Label",value:"Position",align: ""}
					  ,{type:"Text",value:"{/tranDetail/PV_PlanRevDescriptionSet/Zposition}",align: ""}
					  ]}
					 ,{row1: [{type:"Label",value:"Mobile",align: ""}
					  ,{type:"Text",value:"{/tranDetail/PV_PlanRevDescriptionSet/Mobile}",align: ""}
					  ]}
					 ,{row1: [{type:"Label",value:"Email",align: ""}
					  ,{type:"Text",value:"{/tranDetail/PV_PlanRevDescriptionSet/EmailAgent}",align: ""}
					  ]}
					 ];
		
		var oAgent = formDynamic(oFields, [], [ '100px', '200px', '10%', '200px', '30%' ]);

		//***************************** REQUEST DETAILS ******************************************/
		oFields = [{row1: [{type:"Label",value:"Request Type",align: ""}
							  ,{type:"Text",value:"{/tranDetail/PV_PlanRevDescriptionSet/RequestType}",align: ""}
					  ]}
					 ,{row1: [{type:"Label",value:"Change in Original Unit",align: ""}
					  ,{type:"Text",value:"{/tranDetail/PV_PlanRevDescriptionSet/ChangeInOu}",align: ""}
					  ]}
					 ,{row1: [{type:"Label",value:"Type of Revision",align: ""}
					  ,{type:"Text",value:"{/tranDetail/PV_PlanRevDescriptionSet/RevisionType}",align: ""}
					  ]}
					 ,{row1: [{type:"Label",value:"Received Thru",align: ""}
					  ,{type:"Text",value:"{/tranDetail/PV_PlanRevDescriptionSet/ReceivedThru}",align: ""}
					  ]}
					 ,{row1: [{type:"Label",value:"Date Request Received",align: ""}
					  ,{type:"Text",value:"{/tranDetail/PV_PlanRevDescriptionSet/DateReqRcv}",align: ""}
					  ]}
					// ,{row1: [{type:"Label",value:"Days Completed",align: ""}
					//  ,{type:"Text",value:"{/tranDetail/PV_PlanRevDescriptionSet/DaysToComplete}",align: ""}
					//  ]}
					 ];
		
		var oRequestD = formDynamic(oFields, [], [ '150px', '200px', '10%', '200px', '30%' ]);
		
		//************************ ADDITIONAL DETAILS*******************************************/
		var oVLayout = new sap.ui.layout.VerticalLayout();
		var inpEnabled = false;
		var expdateReq = false;
		var costPMDReq = false;
		var costDPDReq = false;
		var costBDDReq = false;
		var PMDdateReq = false;
		var DPDdateReq = false;
		var BDDdateReq = false;

		//Construction Cutoff
		for(var a = 0; a < aData.fieldData.d.fldstatusSet.results.length; a++){
			if(aData.fieldData.d.fldstatusSet.results[a].Fieldname == "EXPIRY_DATE"){
				if(aData.fieldData.d.fldstatusSet.results[a].Hide != "X"){
					if(aData.fieldData.d.fldstatusSet.results[a].Required == "X"){
						expdateReq = true;
					}
					if(aData.fieldData.d.fldstatusSet.results[a].Inputfield == "X"){
						inpEnabled = true;
					}
					var DPExpDate = new sap.ui.commons.DatePicker( {
						enabled: inpEnabled,
	    				yyyymmdd: "{/tranDetail/PV_PlanRevSet/0/ExpiryDate}"
	    					/*
	    					 * value : { path : "/startdateValue", type : new
	    					 * sap.ui.model.type.Date({ style : "long" }) }
	    					 */
	    			}).attachBrowserEvent("keypress",function(e){  
	    	            e.preventDefault();   
	    			  }).setWidth("158px").setLocale("en-US").attachChange(function(oEvent) {
	    				if (oEvent.getParameter("invalidValue")) {
	    					oEvent.oSource.setValueState(sap.ui.core.ValueState.Error);
	    					this.setValue("");
	    					//showMsg("Create CFP Request","Please select valid date. \nFormat: yyyymmdd or mmddyyyy","ERROR");
	    					return;
	    				} else {
	    					oEvent.oSource.setValueState(sap.ui.core.ValueState.None);
	    				}
	    			});
					
					oVLayout.addContent(new sap.ui.layout.HorizontalLayout({
						content:[
								new sap.ui.commons.Label({text:"Construction Cutoff", width: "200px"}),
								DPExpDate
							]
						}).addStyleClass("padBottom5")
					);
				}
				break;
			}
		}

		//Additional Cost - PMD
		for(var a = 0; a < aData.fieldData.d.fldstatusSet.results.length; a++){
			if(aData.fieldData.d.fldstatusSet.results[a].Fieldname == "COST_PMD"){
				if(aData.fieldData.d.fldstatusSet.results[a].Hide != "X"){
					if(aData.fieldData.d.fldstatusSet.results[a].Required == "X"){
						costPMDReq = true;
					}
					if(aData.fieldData.d.fldstatusSet.results[a].Inputfield == "X"){
						inpEnabled = true;
					}
					var TFCostPMD = new sap.ui.commons.TextField({enabled:inpEnabled ,textAlign: "End"
						, width: "158px", value : '{/tranDetail/PV_PlanRevSet/0/CostPmd}'
							,change : function(oEvent) {  
						        var value = oEvent.getSource().getValue();  
						        if(value == "NaN" || value == ""){
						        	value = "0.00";
						        }
						        var floatValue = parseFloat(value.replace(/,/g,""));
						        this.setValue(util.Formatter.amount(floatValue));  
						      }
							}).attachBrowserEvent("keypress",function(e){  
								  var key_codes = [46, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 0, 8];  
						            if (!($.inArray(e.which, key_codes) >= 0)) {  
						              e.preventDefault();  
						            }   
		    			});
					oVLayout.addContent(new sap.ui.layout.HorizontalLayout({
							content:[
								new sap.ui.commons.Label({text:"Additional Cost - PMD", width: "200px"}),
								TFCostPMD
							]
						}).addStyleClass("padBottom5")
					);
				}
				break;
			}
		}

		//Additional Cost - DPD
		for(var a = 0; a < aData.fieldData.d.fldstatusSet.results.length; a++){
			if(aData.fieldData.d.fldstatusSet.results[a].Fieldname == "COST_DPD"){
				if(aData.fieldData.d.fldstatusSet.results[a].Hide != "X"){
					if(aData.fieldData.d.fldstatusSet.results[a].Required == "X"){
						costDPDReq = true;
					}
					if(aData.fieldData.d.fldstatusSet.results[a].Inputfield == "X"){
						inpEnabled = true;
					}
					var TFCostDPD = new sap.ui.commons.TextField({enabled:inpEnabled ,textAlign: "End"
						, width: "158px", value : '{/tranDetail/PV_PlanRevSet/0/CostDpd}'
							,change : function(oEvent) {  
						        var value = oEvent.getSource().getValue();  
						        if(value == "NaN" || value == ""){
						        	value = "0.00";
						        }
						        var floatValue = parseFloat(value.replace(/,/g,""));
						        this.setValue(util.Formatter.amount(floatValue));  
						      }
							}).attachBrowserEvent("keypress",function(e){  
								  var key_codes = [46, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 0, 8];  
						            if (!($.inArray(e.which, key_codes) >= 0)) {  
						              e.preventDefault();  
						            }   
		    			});
					oVLayout.addContent(new sap.ui.layout.HorizontalLayout({
							content:[
								new sap.ui.commons.Label({text:"Additional Cost - DPD", width: "200px"}),
								TFCostDPD
							]
						}).addStyleClass("padBottom5")
					);
				}
				break;
			}
		}

		//Additional Cost - BDD (Final)
		for(var a = 0; a < aData.fieldData.d.fldstatusSet.results.length; a++){
			if(aData.fieldData.d.fldstatusSet.results[a].Fieldname == "COST_BDD"){
				if(aData.fieldData.d.fldstatusSet.results[a].Hide != "X"){
					if(aData.fieldData.d.fldstatusSet.results[a].Required == "X"){
						costBDDReq = true;
					}
					if(aData.fieldData.d.fldstatusSet.results[a].Inputfield == "X"){
						inpEnabled = true;
					}
					var TFCostBDD = new sap.ui.commons.TextField({enabled:inpEnabled ,textAlign: "End"
						, width: "158px", value : '{/tranDetail/PV_PlanRevSet/0/CostBdd}'
							,change : function(oEvent) {  
						        var value = oEvent.getSource().getValue();  
						        if(value == "NaN" || value == ""){
						        	value = "0.00";
						        }
						        var floatValue = parseFloat(value.replace(/,/g,""));
						        this.setValue(util.Formatter.amount(floatValue));  
						      }
							}).attachBrowserEvent("keypress",function(e){  
								  var key_codes = [46, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 0, 8];  
						            if (!($.inArray(e.which, key_codes) >= 0)) {  
						              e.preventDefault();  
						            }   
		    			});
					oVLayout.addContent(new sap.ui.layout.HorizontalLayout({
							content:[
								new sap.ui.commons.Label({text:"Additional Cost - BDD (Final)", width: "200px"}),
								TFCostBDD
							]
						}).addStyleClass("padBottom5")
					);
				}
				break;
			}
		}

		
		//Addt'l Cost Due Date - PMD
		for(var a = 0; a < aData.fieldData.d.fldstatusSet.results.length; a++){
			if(aData.fieldData.d.fldstatusSet.results[a].Fieldname == "PMD_DATE"){
				if(aData.fieldData.d.fldstatusSet.results[a].Hide != "X"){
					if(aData.fieldData.d.fldstatusSet.results[a].Required == "X"){
						PMDdateReq = true;
					}
					if(aData.fieldData.d.fldstatusSet.results[a].Inputfield == "X"){
						inpEnabled = true;
					}
					var DPPMDdate = new sap.ui.commons.DatePicker( {
	    				enabled: inpEnabled,
	    				yyyymmdd: "{/tranDetail/PV_PlanRevSet/0/PmdDate}"
	    					/*
	    					 * value : { path : "/startdateValue", type : new
	    					 * sap.ui.model.type.Date({ style : "long" }) }
	    					 */
	    			}).attachBrowserEvent("keypress",function(e){  
	    	            e.preventDefault();   
	    			  }).setWidth("158px").setLocale("en-US").attachChange(function(oEvent) {
	    				if (oEvent.getParameter("invalidValue")) {
	    					oEvent.oSource.setValueState(sap.ui.core.ValueState.Error);
	    					this.setValue("");
	    					//showMsg("Create CFP Request","Please select valid date. \nFormat: yyyymmdd or mmddyyyy","ERROR");
	    					return;
	    				} else {
	    					oEvent.oSource.setValueState(sap.ui.core.ValueState.None);
	    				}
	    			});
					oVLayout.addContent(new sap.ui.layout.HorizontalLayout({
							content:[
								new sap.ui.commons.Label({text:"Addt'l Cost Due Date - PMD", width: "200px"}),
								DPPMDdate
							]
						}).addStyleClass("padBottom5")
					);
				}
				break;
			}
		}
		
		//Addt'l Cost Due Date - DPD
		for(var a = 0; a < aData.fieldData.d.fldstatusSet.results.length; a++){
			if(aData.fieldData.d.fldstatusSet.results[a].Fieldname == "DPD_DATE"){
				if(aData.fieldData.d.fldstatusSet.results[a].Hide != "X"){
					if(aData.fieldData.d.fldstatusSet.results[a].Required == "X"){
						DPDdateReq = true;
					}
					if(aData.fieldData.d.fldstatusSet.results[a].Inputfield == "X"){
						inpEnabled = true;
					}
					var DPDPDdate = new sap.ui.commons.DatePicker( {
	    				enabled: inpEnabled,
	    				yyyymmdd: "{/tranDetail/PV_PlanRevSet/0/DpdDate}"
	    					/*
	    					 * value : { path : "/startdateValue", type : new
	    					 * sap.ui.model.type.Date({ style : "long" }) }
	    					 */
	    			}).attachBrowserEvent("keypress",function(e){  
	    	            e.preventDefault();   
	    			  }).setWidth("158px").setLocale("en-US").attachChange(function(oEvent) {
	    				if (oEvent.getParameter("invalidValue")) {
	    					oEvent.oSource.setValueState(sap.ui.core.ValueState.Error);
	    					this.setValue("");
	    					//showMsg("Create CFP Request","Please select valid date. \nFormat: yyyymmdd or mmddyyyy","ERROR");
	    					return;
	    				} else {
	    					oEvent.oSource.setValueState(sap.ui.core.ValueState.None);
	    				}
	    			});
					oVLayout.addContent(new sap.ui.layout.HorizontalLayout({
							content:[
								new sap.ui.commons.Label({text:"Addt'l Cost Due Date - DPD", width: "200px"}),
								DPDPDdate
							]
						}).addStyleClass("padBottom5")
					);
				}
				break;
			}
		}
		
		//Addt'l Cost Due Date - BDD (Final)
		for(var a = 0; a < aData.fieldData.d.fldstatusSet.results.length; a++){
			if(aData.fieldData.d.fldstatusSet.results[a].Fieldname == "BDD_DATE"){
				if(aData.fieldData.d.fldstatusSet.results[a].Hide != "X"){
					if(aData.fieldData.d.fldstatusSet.results[a].Required == "X"){
						BDDdateReq = true;
					}
					if(aData.fieldData.d.fldstatusSet.results[a].Inputfield == "X"){
						inpEnabled = true;
					}
					var DPBDDdate = new sap.ui.commons.DatePicker( {
	    				enabled: inpEnabled,
	    				yyyymmdd: "{/tranDetail/PV_PlanRevSet/0/BddDate}"
	    					/*
	    					 * value : { path : "/startdateValue", type : new
	    					 * sap.ui.model.type.Date({ style : "long" }) }
	    					 */
	    			}).attachBrowserEvent("keypress",function(e){  
	    	            e.preventDefault();   
	    			  }).setWidth("158px").setLocale("en-US").attachChange(function(oEvent) {
	    				if (oEvent.getParameter("invalidValue")) {
	    					oEvent.oSource.setValueState(sap.ui.core.ValueState.Error);
	    					this.setValue("");
	    					//showMsg("Create CFP Request","Please select valid date. \nFormat: yyyymmdd or mmddyyyy","ERROR");
	    					return;
	    				} else {
	    					oEvent.oSource.setValueState(sap.ui.core.ValueState.None);
	    				}
	    			});
					oVLayout.addContent(new sap.ui.layout.HorizontalLayout({
						content:[
								new sap.ui.commons.Label({text:"Addt'l Cost Due Date - BDD (Final)", width: "200px"}),
								DPBDDdate
							]
						}).addStyleClass("padBottom5")
					);
				}
				break;
			}
		}
		
		//add blank row
		oVLayout.addContent(new sap.ui.layout.HorizontalLayout({
			content:[new sap.ui.commons.Label({text:"", width: "200px"})]
				}).addStyleClass("padBottom5"));
		
        var oLayoutAdd = new sap.ui.commons.layout.MatrixLayout({width : "100%"});
		oLayoutAdd.createRow(oVLayout);
        
		
		//************************ APPROVAL PATH*******************************************/
		var tblApprovers = new sap.ui.table.Table({
            selectionMode : sap.ui.table.SelectionMode.Single,
        	selectionBehavior : sap.ui.table.SelectionBehavior.RowOnly,
        	editable: false,
        	height : "300px",
        	visibleRowCount: 5,
           // cellClick : function(oEvent){
            //	tblItems.setSelectedIndex(oEvent.getParameter("rowIndex"));
           // },
			enabled : false 
		});

		tblApprovers.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Approver"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "CompleteName"),
        	editable: false,
        	width: "350px"
        }));

		tblApprovers.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Level"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "Level"),
        	editable: false,
        	width: "80px"
        }));

		tblApprovers.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Status"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "Status"),
        	editable: false,
        	width: "120px"
        }));

		tblApprovers.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Status Date"}),
        	template: new sap.ui.commons.TextView().bindProperty("text" ,{
                parts: ["Date","Time" ],
                formatter: function(odate, otime) {
        			return sapDateFormat(odate) + " " + sapTimeFormat(otime) ;
        			}
        	})
        	,editable: false,
        	width: "180px"
        }));
		
		tblApprovers.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Comments"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "approverComment").addStyleClass("sapUiTv1"),
        	editable: false
        }));
		
		tblApprovers.setModel(this.getModel());
		tblApprovers.bindRows("/tranDetail/approverSet"); 
		//************************ APPROVAL PATH*******************************************/

		//************************* REMARKS ***********************************************/

        var oRemarksLayout = new sap.ui.commons.layout.MatrixLayout({
			columns : 6,
			width : "100%",
			widths : [ '80px', '140px', '30%', '120px', '140px', '30%' ]
        });
  		
		var oLblComments = new sap.ui.commons.Label({text : "Enter Remarks: "});	
		oRemarksLayout.createRow(null,oLblComments);
		
		var oTAComments = new sap.ui.commons.TextArea(sessionCache["pageID"] + "oTAComments",{
			tooltip : "Enter Approver's Remarks",
			width : "100%",
			rows : 5
		});

		oCell = new sap.ui.commons.layout.MatrixLayoutCell({
			colSpan : 4,
			hAlign : sap.ui.commons.layout.HAlign.Left,
			vAlign : sap.ui.commons.layout.VAlign.Bottom,
			content : [ oTAComments ]
		});
		
		oRemarksLayout.createRow(null,oCell);

		//************************ ATTACHMENTS *******************************************/

		var oTableDocs = new sap.ui.table.Table({
			width : "80%",
			noData : "No attachments.",
	        visibleRowCount: 5,
			selectionMode : sap.ui.table.SelectionMode.None
		});

		oTableDocs.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Request Type"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "Filecategory"),
        	editable: false
        }));
		
		var oColumnOther = new sap.ui.table.Column({
			label : new sap.ui.commons.Label({
				text : "File Name"
			}),
			template : new sap.ui.commons.Link({
				text : "{Filename}",
				href: "{Url}",
				target:"_blank",
				enabled:"{enable}"
			}),
        	width: "60%",
		});
	
		oTableDocs.addColumn(oColumnOther);
		oTableDocs.addColumn(new sap.ui.table.Column(
				{
					template : new sap.ui.commons.Link(
							{
								text : "Delete",
								press : function() {		
									var _this = this;
									var index = _this.getParent().getIndex();
									var oAttachModel = _this.getModel().getProperty("/tranDetail/Attachments");
									sap.ui.commons.MessageBox.show(
										      "Are you sure you want to delete?",
										      sap.ui.commons.MessageBox.Icon.INFORMATION,
										      "Delete Attachment",
										      [sap.ui.commons.MessageBox.Action.YES, sap.ui.commons.MessageBox.Action.NO],
										      function(bResult) { 
													if (bResult == "YES") {
														oController.delAttachment1(index, oTableDocs,oSectionDoc);

													}
										      }
									);
									
									//var index = this.getParent().getIndex();
									//oController.delAttachment1(index, oTableDocs,oSectionDoc);
									//oAccordion.closeSection(oSectionDoc);
									//oAccordion.openSection(oSectionDoc);
								}
							}).addStyleClass("delAttach"),
				    width: "20%",
				}));

		oTableDocs.setModel(this.getModel());
		oTableDocs.bindRows("/tranDetail/Attachments");

		var oCellOther = new sap.ui.commons.layout.MatrixLayoutCell({
			content:[oTableDocs],
			colSpan: 2
		});
		
		var oSimpleFileUploaderOther = new sap.ui.unified.FileUploader(
		{
			uploadUrl : "",
			name : "simpleUploader",
			multiple:false,
			useMultipart:true,        
			change:function(oEvent){
				oController.fileUpload1(oEvent.mParameters.files[0]);
			}
		});
		
		var oLayoutAttach = new sap.ui.commons.layout.MatrixLayout({
			columns:1,
			width:"80%"//,
			//widths:["25%","75%"]
		});
		
	  var oBtnBrowse = new sap.ui.commons.Button({
             text: "Add document", 
             press:function(){
            	 oFirstDialog2.open();
             }
      })
		var oMatCellAttach = new sap.ui.commons.layout.MatrixLayoutCell({
			content:[oBtnBrowse,null]
		}); 
				
	  oLayoutAttach.createRow(oMatCellAttach);
	  oLayoutAttach.createRow(oCellOther);	

	    // ***********************  ATTACHMENT DIALOG **************************************//
	    var oFirstDialog2 = new sap.ui.commons.Dialog({modal: true, width : "400px"});
	    oFirstDialog2.setTitle("Attach Document");     
	    var comboReqType = new sap.ui.commons.ComboBox({
            tooltip: "Request Type",
            width: "150px",
            /*
            items: [new sap.ui.core.ListItem("STUDYPLAN",{id: "STUDYPLAN" ,text: "Study Plan"}),
                    new sap.ui.core.ListItem("CONFORME",{id: "CONFORME" ,text: "Buyer's Conforme"}),
                    new sap.ui.core.ListItem("COST",{id: "COST" ,text: "Cost BreakDown"}),
                    new sap.ui.core.ListItem("BUYERDOC",{id: "BUYERDOC" ,text: "Buyer's Request"}),
                    new sap.ui.core.ListItem("OTHERDOC",{id: "OTHERDOC" ,text: "Other Documents"})],
                    */
            change: function(oEvent){
                   _this.getModel().setProperty("/tranDetail/AddDocType",oEvent.oSource.getSelectedItemId());
            }
	    });
  
	     for(var a = 0; a < aData.fieldData.d.fldstatusSet.results.length; a++){
	            if(aData.fieldData.d.fldstatusSet.results[a].Fieldname == "STUDYPLAN" &&
	               aData.fieldData.d.fldstatusSet.results[a].Inputfield == "X"){
	                                comboReqType.addItem(new sap.ui.core.ListItem("STUDYPLAN",{id: "STUDYPLAN" ,text: "Study Plan"}));
	            }
	     }
	
	     for(var a = 0; a < aData.fieldData.d.fldstatusSet.results.length; a++){
	            if(aData.fieldData.d.fldstatusSet.results[a].Fieldname == "CONFORME" &&
	               aData.fieldData.d.fldstatusSet.results[a].Inputfield == "X"){
	                                comboReqType.addItem(new sap.ui.core.ListItem("CONFORME",{id: "CONFORME" ,text: "Buyer's Conforme"}));
	            }
	     }
	     for(var a = 0; a < aData.fieldData.d.fldstatusSet.results.length; a++){
	            if(aData.fieldData.d.fldstatusSet.results[a].Fieldname == "COST" &&
	               aData.fieldData.d.fldstatusSet.results[a].Inputfield == "X"){
	                                comboReqType.addItem(new sap.ui.core.ListItem("COST",{id: "COST" ,text: "Cost BreakDown"}));
	            }
	     }
	     for(var a = 0; a < aData.fieldData.d.fldstatusSet.results.length; a++){
	            if(aData.fieldData.d.fldstatusSet.results[a].Fieldname == "BUYERDOC" &&
	               aData.fieldData.d.fldstatusSet.results[a].Inputfield == "X"){
	                                comboReqType.addItem(new sap.ui.core.ListItem("BUYERDOC",{id: "BUYERDOC" ,text: "Buyer's Request"}));
	            }
	     }
	     for(var a = 0; a < aData.fieldData.d.fldstatusSet.results.length; a++){
	            if(aData.fieldData.d.fldstatusSet.results[a].Fieldname == "OTHERDOC" &&
	               aData.fieldData.d.fldstatusSet.results[a].Inputfield == "X"){
	                                comboReqType.addItem(new sap.ui.core.ListItem("OTHERDOC",{id: "OTHERDOC" ,text: "Other Documents"}));
	            }
	     }

		oFirstDialog2.addContent(comboReqType);
	    oFirstDialog2.addContent(oSimpleFileUploaderOther);
	    oFirstDialog2.addButton(new sap.ui.commons.Button({
	      		       text: "Done", 
	      		       press:function(oEvent){
	      		    	   if(oSimpleFileUploaderOther.getValue() != ""){ //kpartidas - 11/10/2015

	      		    		//fhizon 11.25.2015 - added checking for special chars
	      		    		var regex = new RegExp(/[\/:*?"<>|#{}%~&]/gi);
	      		    		if(regex.test(oSimpleFileUploaderOther.getValue()) == true) {
	      		    			showMsg("Attach Document", 'The file name is invalid. A file name cannot contain any of the following special characters: \ / : * ? " < > | # { } % ~ &', "ERROR");
	      		    			return;
	      		    		}
	      		    		 oController.doneUpload(oTableDocs, oSimpleFileUploaderOther, oFirstDialog2, oAccordion, oSectionDoc);
	      		    	   }
	      		    	   oFirstDialog2.close();
	      		       }
	      		}));
	    oFirstDialog2.addButton(new sap.ui.commons.Button({
	      		       text: "Cancel", 
	      		       press:function(){
	      		    	   oFirstDialog2.close();
	      		    	   oSimpleFileUploaderOther.setUploadUrl("");
	      		    	   oSimpleFileUploaderOther.clear();
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
	      		    	   _this.getModel().setProperty("/tranDetail/newAttach", obj);
	      		       }
	    }));
	      		
		//************************ ATTACHMENTS *******************************************/

        //************************ ACCORDION *********************************************/
        var oAccordion = new sap.ui.commons.Accordion();
        oAccordion.setWidth("99.8%")
        
     	//General Details
        var oSection1 = new sap.ui.commons.AccordionSection();     
        oSection1.setTitle("General Details");		
        oSection1.setTooltip("General Details");
        oSection1.addContent( oGenDetails);
        oAccordion.addSection( oSection1 );

        oCell = new sap.ui.commons.layout.MatrixLayoutCell({colSpan: 5, content: [oAccordion]})
        oLayout.createRow(oCell);

        oAccordion = new sap.ui.commons.Accordion();
        oAccordion.setWidth("99.8%")
        var oUnitLayout = new sap.ui.commons.layout.MatrixLayout({
			columns : 1,
			width : "100%"
        });
        
        var oLbl = new sap.ui.commons.Label({text : "CURRENT UNIT"}).addStyleClass("font14ptBold").addStyleClass("underline");
        oUnitLayout.createRow(oLbl, null,null );
		oUnitLayout.createRow(oCurrUnit, null,null );
		oUnitLayout.createRow(null, null,null );
		oLbl = new sap.ui.commons.Label({text : "PROPOSED UNIT"}).addStyleClass("font14ptBold").addStyleClass("underline");
        oUnitLayout.createRow(oLbl, null,null );
		oUnitLayout.createRow(oPropUnit, null,null );

		//Unit Details
        var oSection2 = new sap.ui.commons.AccordionSection();     
        oSection2.setTitle('Unit Details');		
        oSection2.setTooltip('Unit Details');
        oSection2.addContent( oUnitLayout);
        oAccordion.addSection( oSection2 );

        oCell = new sap.ui.commons.layout.MatrixLayoutCell({colSpan: 5, content: [oAccordion]})
        oLayout.createRow(oCell);

        oAccordion = new sap.ui.commons.Accordion();
        oAccordion.setWidth("99.8%")
        //Agent Details
        var oSection3 = new sap.ui.commons.AccordionSection();     
        oSection3.setTitle('Agent Details');		
        oSection3.setTooltip('Agent Details');
        oSection3.addContent( oAgent);
        oAccordion.addSection( oSection3 );

        oCell = new sap.ui.commons.layout.MatrixLayoutCell({colSpan: 5, content: [oAccordion]})
        oLayout.createRow(oCell);

        oAccordion = new sap.ui.commons.Accordion();
        oAccordion.setWidth("99.8%")
        var oRequestLayout = new sap.ui.commons.layout.MatrixLayout({
			columns : 5,
			width : "100%",
			widths : [ '150px', '200px', '10%', '200px', '30%' ]
        });

        var oRow1 = new sap.ui.commons.layout.MatrixLayoutRow();
        oRequestLayout.addRow(oRow1);
        var oCell1 = new sap.ui.commons.layout.MatrixLayoutCell({vAlign : sap.ui.commons.layout.VAlign.Bottom, colSpan: 5});
        oCell1.addContent(oRequestD);
        oRow1.addCell(oCell1);

        //Request/Proposal
        var lblReqProp = new sap.ui.commons.Label({text: "Request/Proposal"});
        var oProposals = new sap.ui.commons.TextArea({
			width : "80%",
			rows : 4,
			enabled: false,
			value : '{/tranDetail/PV_ReqPropSet}',
		});
        oCell1 = new sap.ui.commons.layout.MatrixLayoutCell({vAlign : sap.ui.commons.layout.VAlign.Bottom, colSpan: 4});
        oCell1.addContent(oProposals);

        oRequestLayout.createRow(lblReqProp, oCell1);
        
        //Background Details
        var lblBack = new sap.ui.commons.Label({text: "Background Details"});
        var oBackGrnd = new sap.ui.commons.TextArea({
			width : "80%",
			rows : 4,
			enabled: false,
			value : '{/tranDetail/PV_BackDetSet}',
		});
        oCell1 = new sap.ui.commons.layout.MatrixLayoutCell({vAlign : sap.ui.commons.layout.VAlign.Bottom, colSpan: 4});
        oCell1.addContent(oBackGrnd);

        oRequestLayout.createRow(lblBack, oCell1);

        //Recommendation/Justification
        var lblJusti = new sap.ui.commons.Label({text: "Recommendation/Justification"});
        var oJusti = new sap.ui.commons.TextArea({
			width : "80%",
			rows : 4,
			enabled: false,
			value : '{/tranDetail/PV_RecommendationSet}',
		});
        oCell1 = new sap.ui.commons.layout.MatrixLayoutCell({vAlign : sap.ui.commons.layout.VAlign.Bottom, colSpan: 4});
        oCell1.addContent(oJusti);

        oRequestLayout.createRow(lblJusti, oCell1);
        
        //Request Details
        var oSection4 = new sap.ui.commons.AccordionSection();     
        oSection4.setTitle('Request Details');		
        oSection4.setTooltip('Request Details');
        oSection4.addContent( oRequestLayout);
        oAccordion.addSection( oSection4 );

        oCell = new sap.ui.commons.layout.MatrixLayoutCell({colSpan: 5, content: [oAccordion]})
        oLayout.createRow(oCell);

        oAccordion = new sap.ui.commons.Accordion();
        oAccordion.setWidth("99.8%")
        //Additional Details
        var oSection45 = new sap.ui.commons.AccordionSection();     
        oSection45.setTitle('Additional Details');		
        oSection45.setTooltip('Additional Details');
        oSection45.addContent( oLayoutAdd);
        oAccordion.addSection( oSection45 );

        oCell = new sap.ui.commons.layout.MatrixLayoutCell({colSpan: 5, content: [oAccordion]})
        oLayout.createRow(oCell);

        oAccordion = new sap.ui.commons.Accordion();
        oAccordion.setWidth("99.8%")
        //Attachments
        var oSectionDoc = new sap.ui.commons.AccordionSection();     
        oSectionDoc.setTitle("Attachments");		
        oSectionDoc.setTooltip("Attachments");
        oSectionDoc.addContent( oLayoutAttach);
        oAccordion.addSection( oSectionDoc );

        oCell = new sap.ui.commons.layout.MatrixLayoutCell({colSpan: 5, content: [oAccordion]})
        oLayout.createRow(oCell);

        oAccordion = new sap.ui.commons.Accordion();
        oAccordion.setWidth("99.8%")
     	//Approval Path
        var oSection6 = new sap.ui.commons.AccordionSection();     
        oSection6.setTitle("Approval Path");		
        oSection6.setTooltip("Approval Path");
        oSection6.addContent( tblApprovers);
        oAccordion.addSection( oSection6 );

        oCell = new sap.ui.commons.layout.MatrixLayoutCell({colSpan: 5, content: [oAccordion]})
        oLayout.createRow(oCell);

        oAccordion = new sap.ui.commons.Accordion();
        oAccordion.setWidth("99.8%")
        //Approver's Remarks
        var oSection7 = new sap.ui.commons.AccordionSection();     
        oSection7.setTitle("Approver's Remarks");		
        oSection7.setTooltip("Approver's Remarks");
        oSection7.addContent( oRemarksLayout);
        oAccordion.addSection( oSection7 );
        
        oCell = new sap.ui.commons.layout.MatrixLayoutCell({colSpan: 5, content: [oAccordion]})
        oLayout.createRow(oCell);
        

        //************************  BUTTONS *********************************************/
		jQuery.sap.require("sap.ui.commons.MessageBox");
		var oBtnApprove = new sap.ui.commons.Button(sessionCache["pageID"] + "oBtnApprove",{
			tooltip : "Approve Plan Revision",
			width : "100px",
			height : "30px",
			text : "Approve",
			press : function() {
				sap.ui.commons.MessageBox.show(
					      "Are you sure you want to approve request for Plan Revision?",
					      sap.ui.commons.MessageBox.Icon.INFORMATION,
					      "Approve Request",
					      [sap.ui.commons.MessageBox.Action.YES, sap.ui.commons.MessageBox.Action.NO],
					      function(bResult) { 
								if (bResult == "YES") {									
									if(expdateReq){
										if(DPExpDate.getValue() == ""){
											sap.ui.commons.MessageBox.show("Please enter Construction Cutoff.",
	                                                sap.ui.commons.MessageBox.Icon.ERROR,"Error",
	                                                [sap.ui.commons.MessageBox.Action.OK])
											return;
										}
									}
									if(costPMDReq){
										if(TFCostPMD.getValue() == "0.00"){
											sap.ui.commons.MessageBox.show("Please enter Additional Cost - PMD.",
	                                                sap.ui.commons.MessageBox.Icon.ERROR,"Error",
	                                                [sap.ui.commons.MessageBox.Action.OK])
											return;
										}
									}
									if(costDPDReq){
										if(TFCostDPD.getValue() == "0.00"){
											sap.ui.commons.MessageBox.show("Please enter Additional Cost - DPD.",
	                                                sap.ui.commons.MessageBox.Icon.ERROR,"Error",
	                                                [sap.ui.commons.MessageBox.Action.OK])
											return;
										}
									}
									if(costBDDReq){
										if(TFCostBDD.getValue() == "0.00"){
											sap.ui.commons.MessageBox.show("Please enter Additional Cost - BDD.",
	                                                sap.ui.commons.MessageBox.Icon.ERROR,"Error",
	                                                [sap.ui.commons.MessageBox.Action.OK])
											return;
										}
									}
									if(PMDdateReq){
										if(DPPMDdate.getValue() == ""){
											sap.ui.commons.MessageBox.show("Please enter Additional Cost Due Date - PMD.",
	                                                sap.ui.commons.MessageBox.Icon.ERROR,"Error",
	                                                [sap.ui.commons.MessageBox.Action.OK])
											return;
										}
									}
									if(DPDdateReq){
										if(DPDPDdate.getValue() == ""){
											sap.ui.commons.MessageBox.show("Please enter Additional Cost Due Date - DPD.",
	                                                sap.ui.commons.MessageBox.Icon.ERROR,"Error",
	                                                [sap.ui.commons.MessageBox.Action.OK])
											return;
										}
									}
									if(BDDdateReq){
										if(DPBDDdate.getValue() == ""){
											sap.ui.commons.MessageBox.show("Please enter Additional Cost Due Date - BDD.",
	                                                sap.ui.commons.MessageBox.Icon.ERROR,"Error",
	                                                [sap.ui.commons.MessageBox.Action.OK])
											return;
										}
									}
									
									//populate Approver's comments
									var tdline,tdlines = [];
									var arraySubstr = "";
									if (oTAComments.getValue() != "") {
										var oArray = oTAComments.getValue().split("\n");
										for(var a = 0; a < oArray.length; a++){
											if(oArray[a].length > 253){
												arrayLen = (oArray[a].length / 253) + 1;
												cutStart = 0;
												for( var c = 1; c < arrayLen; c++){
													arraySubstr = oArray[a].substr(cutStart,254);
													//if(cutStart > 0){
													//	tdline = {"Line":"~" + arraySubstr};
													//}else{
														tdline = {"Line":arraySubstr};
													//}
													
													tdlines.push(tdline);
													cutStart = cutStart + 254;
												}
											}else{
												tdline = {"Line":oArray[a]};
												tdlines.push(tdline);
											}
										}
									}
									if (oController.approveDisapprove("APPROVE",tdlines)) {
						    			/*oBtnApprove.setEnabled(false);
						    			oBtnDisapprove.setEnabled(false);
						    			oTAComments.setValue("");*/
									}
									
								}
							}
						 );
			},
			icon : sap.ui.core.IconPool.getIconURI("accept")
		});
		

		var oBtnDisapprove = new sap.ui.commons.Button(sessionCache["pageID"] + "oBtnDisapprove",{
			tooltip : "Disapprove Plan Revision",
			width : "100px",
			height : "30px",
			text : "Disapprove",
			press : function() {
				sap.ui.commons.MessageBox.show(
					      "Are you sure you want to disapprove request for Plan Revision",
					      sap.ui.commons.MessageBox.Icon.INFORMATION,
					      "Disapprove Request",
					      [sap.ui.commons.MessageBox.Action.YES, sap.ui.commons.MessageBox.Action.NO],
					      function(bResult) { 
								if (bResult == "YES") {
									if (oTAComments.getValue() == "") {
										sap.ui.commons.MessageBox.show("Please enter comments.",
                                                sap.ui.commons.MessageBox.Icon.ERROR,"Error",
                                     [sap.ui.commons.MessageBox.Action.OK]);
										oSection10.setCollapsed(false);
										return;
									}

									var tdline,tdlines = [];
									var arraySubstr = "";
									if (oTAComments.getValue() != "") {
										var oArray = oTAComments.getValue().split("\n");
										for(var a = 0; a < oArray.length; a++){
											if(oArray[a].length > 253){
												arrayLen = (oArray[a].length / 253) + 1;
												cutStart = 0;
												for( var c = 1; c < arrayLen; c++){
													arraySubstr = oArray[a].substr(cutStart,254);
													//if(cutStart > 0){
													//	tdline = {"Line":"~" + arraySubstr};
													//}else{
														tdline = {"Line":arraySubstr};
													//}
													
													tdlines.push(tdline);
													cutStart = cutStart + 254;
												}
											}else{
												tdline = {"Line":oArray[a]};
												tdlines.push(tdline);
											}
										}
									}

									if (oController.approveDisapprove("REJECT",tdlines)) {
						    			/*oBtnApprove.setEnabled(false);
						    			oBtnDisapprove.setEnabled(false);
						    			oTAComments.setValue("");*/
									}

									}
								}
						 );
			},
			icon : sap.ui.core.IconPool.getIconURI("action")
		});

		var oBtnClose = new sap.ui.commons.Button({
			tooltip : "Close",
			width : "80px",
			height : "30px",
			text : "Close",
			press : function() {
				//window.print();
				app.back();//closeWin(); //fn_showContent("homePage", "VIEWS.Home","Home");
			},
			icon : sap.ui.core.IconPool.getIconURI("log")
		});
		oCell = new sap.ui.commons.layout.MatrixLayoutCell({
			colSpan : 2,
			hAlign : sap.ui.commons.layout.HAlign.Left,
			vAlign : sap.ui.commons.layout.VAlign.Bottom,
			content : [ oBtnApprove ,oBtnClose ]
		});
        oLayout.createRow(null);
        oLayout.createRow(null,null,oBtnApprove ,oBtnDisapprove);
        
		return oLayout;
	}

});