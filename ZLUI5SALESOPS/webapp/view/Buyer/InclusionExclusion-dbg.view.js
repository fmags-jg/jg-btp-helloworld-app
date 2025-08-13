sap.ui.jsview("views.Buyer.InclusionExclusion", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf views.Buyer.InclusionExclusion
	*/ 
	getControllerName : function() {
		return "views.Buyer.InclusionExclusion";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf views.Buyer.InclusionExclusion
	*/ 
	createContent : function(oController) {
		var oCell;

		//Create a matrix layout for Panel
        var oLayout = new sap.ui.commons.layout.MatrixLayout({
			columns : 5,
			width : "100%",
			widths : [ '90px', '120px', '20%', '150px', '150px','20%' ]});

        var lblReqNo = new sap.ui.commons.Label({text: "Reference Number: " , design: sap.ui.commons.LabelDesign.Bold, icon: "sap-icon://company-view"});
        lblReqNo.addStyleClass("layoutTitle");

		// CFP Number
		var oTFReqNo = new sap.ui.commons.TextField({
			width : "100%",
			value : '{/tranDetail/Refnumber}',
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
		var oFields = [{group: "Basic Details"
					    ,fields: [{ label1: "Company",field1: "{/tranDetail/Bukrs}", field1desc: "{/tranDetail/Butxt}" ,label2: "Contract Number",field2: "{/tranDetail/Recnnr}",fld2align: "", fld2format: ""}
					    		 ,{ label1: "Building",field1: "{/tranDetail/Building}", field1desc: "{/tranDetail/BuildingName}" ,label2: "Date of Sale",field2: "{/tranDetail/DateOfSale}",fld2align: "", fld2format: "date"}
					    		 ,{ label1: "Unit",field1: "{/tranDetail/Unit}", field1desc: "{/tranDetail/UnitName}" ,label2: "TCP Amount",field2: "{/tranDetail/Tcp}",fld2align: "End", fld2format: ""}
					    		 ,{ label1: "Unit Type",field1: "{/tranDetail/UnitType}", field1desc: "{/tranDetail/UnitTypeDesc}" ,label2: "", field2: "",fld2align: "", fld2format: ""}
					    		 //,{ label1: "Principal Buyer",field1: "", field1desc: "" ,label2: "", field2: ""}
					    		 ]
						}
		               ];

        var oBasicInfo = new sap.ui.commons.layout.MatrixLayout({
			columns : 6,
			width : "100%",
			widths : [ '80px', '140px', '20%', '120px', '140px', '40%' ]});
        
		for (var i = 0; i < oFields.length; i++) {
			//write Groupings
	        //oCell = new sap.ui.commons.layout.MatrixLayoutCell({colSpan: 6, content: [new sap.ui.commons.Label({text: oFields[i].group , design: sap.ui.commons.LabelDesign.Bold}).addStyleClass("headerTitle")]})
	        //oCell.addStyleClass("headerTitle");
	        //oBasicInfo.createRow(oCell);

			// DIVIDER
			//oCell = new sap.ui.commons.layout.MatrixLayoutCell({
			//	colSpan : 6,
			//	hAlign : sap.ui.commons.layout.HAlign.Right,
			//	vAlign : sap.ui.commons.layout.VAlign.Bottom,
			//	content : [ new sap.ui.commons.HorizontalDivider() ]
			//});

			//oBasicInfo.createRow(oCell);
			
			//
			oFieldList = oFields[i].fields
			for (var j = 0; j < oFieldList.length; j++) {

				var oLable1 = new sap.ui.commons.Label({text : oFieldList[j].label1});
				var oTTfield1 = new sap.ui.commons.TextField({
					width : "100%",
					value : oFieldList[j].field1
					,enabled : false
				});
				oTTfield1.setTextAlign("End");
				
				var oDesc = new sap.ui.commons.TextView({text : oFieldList[j].field1desc});

				if (oFieldList[j].label2 != "") {
					var oLable2 = new sap.ui.commons.Label({text : oFieldList[j].label2});
					var oTTfield2 = new sap.ui.commons.TextField({
						width : "100%",
						value : oFieldList[j].field2
						,enabled : false
					});

					oTTfield2.setTextAlign("End");
					//if (oFieldList[j].fld2align != "") {
					//	oTTfield2.setTextAlign(oFieldList[j].fld2align);
					//}
					//if (oFieldList[j].fld2format != "") {
					//	if (oFieldList[j].fld2format == "date") {
					//		oTTfield2.setValue(dateFormat(oFieldList[j].field2));
					//	}
					//}
					
					oBasicInfo.createRow(oLable1, oTTfield1 , oDesc,oLable2, oTTfield2, null);
				} else {
					oBasicInfo.createRow(oLable1, oTTfield1, oDesc);
				}
				
			}
		}

		var oLRemarks = new sap.ui.commons.Label({text : "Remarks", TextAlign: sap.ui.core.TextAlign.Initial});
		//oBasicInfo.createRow(null, oLRemarks);
		var oTRemarks = new sap.ui.commons.TextArea({
			tooltip : "Remarks",
			width : "100%",
			rows : 5,
			value : '{/tranDetail/remarks}'
			,enabled : false
		});
        oCell = new sap.ui.commons.layout.MatrixLayoutCell({colSpan : 4, width : "100%"});
        oCell.addContent(oTRemarks)
		oBasicInfo.createRow(oLRemarks, oCell);
		
		//***************************** OLD CO-BUYERS DETAILS ******************************************/       
		var tblCoBuyers = new sap.ui.table.Table({
            selectionMode : sap.ui.table.SelectionMode.Single,
        	selectionBehavior : sap.ui.table.SelectionBehavior.RowOnly,
        	editable: false,
        	height : "300px",
        	visibleRowCount: 5,
            cellClick : function(oEvent){
            	tblCoBuyers.setSelectedIndex(oEvent.getParameter("rowIndex"));
            },
			enabled : false 
		});

		tblCoBuyers.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Business Partner"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "PartnerName"),
        	editable: false,
        	width: "40%"
        }));

		tblCoBuyers.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Role"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "RoleDescription"),
        	editable: false,
        	width: "20%"
        }));

		tblCoBuyers.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Spouse"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "SpouseName"),
        	editable: false,
        	width: "40%"
        }));
		
		tblCoBuyers.setModel(this.getModel());
		tblCoBuyers.bindRows("/tranDetail/inexToDisplayOld"); 

		//***************************** NEW CO-BUYERS DETAILS ******************************************/       
		var tblCoBuyers2 = new sap.ui.table.Table({
            selectionMode : sap.ui.table.SelectionMode.Single,
        	selectionBehavior : sap.ui.table.SelectionBehavior.RowOnly,
        	editable: false,
        	height : "300px",
        	visibleRowCount: 5,
            cellClick : function(oEvent){
            	tblCoBuyers2.setSelectedIndex(oEvent.getParameter("rowIndex"));
            },
			enabled : false 
		});

		tblCoBuyers2.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Business Partner"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "PartnerName"),
        	editable: false,
        	width: "40%"
        }));

		tblCoBuyers2.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Role"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "RoleDescription"),
        	editable: false,
        	width: "20%"
        }));

		tblCoBuyers2.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Spouse"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "SpouseName"),
        	editable: false,
        	width: "40%"
        }));
		
		tblCoBuyers2.setModel(this.getModel());
		tblCoBuyers2.bindRows("/tranDetail/inexToDisplayNew"); 

		//************************ APPROVAL PATH*******************************************/
		var tblApprovers = new sap.ui.table.Table({
            selectionMode : sap.ui.table.SelectionMode.Single,
        	selectionBehavior : sap.ui.table.SelectionBehavior.RowOnly,
        	editable: false,
        	height : "300px",
        	visibleRowCount: 5,
            cellClick : function(oEvent){
            	tblItems.setSelectedIndex(oEvent.getParameter("rowIndex"));
            },
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
                parts: ["Date","TIMEAPPROVED" ],
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
        	editable: false,
        	width: "40%"
        }));
		
		tblApprovers.setModel(this.getModel());
		tblApprovers.bindRows("/tranDetail/inexToApprover"); 
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
  					width : "50%",
  					noData : "No attachments.",
  					//visible: false,
  		        	//firstVisibleRow: 3,
  		        	visibleRowCount: 5,
  		        	//height : "300px",
  					selectionMode : sap.ui.table.SelectionMode.None
  				});

  				var oColumnOther = new sap.ui.table.Column({

  					label : new sap.ui.commons.Label({
  						text : "File Name"
  					}),
  					template : new sap.ui.commons.Link({
  						text : "{Filename}",
  						href: "{Url}",
  						target:"_blank"
  					}),
  		        	width: "100%",
  				});
  			
  				oTableDocs.addColumn(oColumnOther);

  				oTableDocs.setModel(this.getModel());
  				oTableDocs.bindRows("/tranDetail/Attachments");
		//************************ ATTACHMENTS *******************************************/
		
		
        //************************ ACCORDION *********************************************/
        var oAccordion = new sap.ui.commons.Accordion();
        oAccordion.setWidth("99.8%");
        
     	//Request Details
        var oSection1 = new sap.ui.commons.AccordionSection();     
        oSection1.setTitle("Request Details");		
        oSection1.setTooltip("Request Details");
        oSection1.addContent( oBasicInfo);
        oAccordion.addSection( oSection1 );
        
     	//Partners
        var oSection2 = new sap.ui.commons.AccordionSection();     
        oSection2.setTitle("Partners");		
        oSection2.setTooltip("Partners");

        var oBuyersLayout = new sap.ui.commons.layout.MatrixLayout({
			columns : 3,
			width : "100%",
			widths : [ '49%', '2%','49%' ]
        });

		var oLblOld = new sap.ui.commons.Label({text : "Current"}).addStyleClass("font14ptBold").addStyleClass("underline");
		var oLblNew = new sap.ui.commons.Label({text : "New"}).addStyleClass("font14ptBold").addStyleClass("underline");
		
        oBuyersLayout.createRow(oLblOld, null,oLblNew );
        oBuyersLayout.createRow(tblCoBuyers, null,tblCoBuyers2 );
		
        oSection2.addContent( oBuyersLayout);
        oAccordion.addSection( oSection2 );

        //Attachments
        var oSection5 = new sap.ui.commons.AccordionSection();     
        oSection5.setTitle("Attachments");		
        oSection5.setTooltip("Attachments");
        oSection5.addContent( oTableDocs);
        oAccordion.addSection( oSection5 );
       
     	//Approval Path
        var oSection3 = new sap.ui.commons.AccordionSection();     
        oSection3.setTitle("Approval Path");		
        oSection3.setTooltip("Approval Path");
        oSection3.addContent( tblApprovers);
        oAccordion.addSection( oSection3 );
        
     	//Approver's Remarks
        var oSection4 = new sap.ui.commons.AccordionSection();     
        oSection4.setTitle("Approver's Remarks");
        oSection4.setTooltip("Approver's Remarks");
        oSection4.addContent( oRemarksLayout);
        oAccordion.addSection( oSection4 );
        //************************ ACCORDION *********************************************/

        var oCell = new sap.ui.commons.layout.MatrixLayoutCell({colSpan : 5, content: [oAccordion], width : "98%"});
        oLayout.createRow(oCell);

        //************************  BUTTONS *********************************************/
		jQuery.sap.require("sap.ui.commons.MessageBox");
		var oBtnApprove = new sap.ui.commons.Button(sessionCache["pageID"] + "oBtnApprove",{
			tooltip : "Approve Request",
			width : "100px",
			height : "30px",
			text : "Approve",
			press : function() {
				sap.ui.commons.MessageBox.show(
					      "Are you sure you want to approve this request?",
					      sap.ui.commons.MessageBox.Icon.INFORMATION,
					      "Approve Request",
					      [sap.ui.commons.MessageBox.Action.YES, sap.ui.commons.MessageBox.Action.NO],
					      function(bResult) { 
								if (bResult == "YES") {

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
			tooltip : "Disapprove Request",
			width : "100px",
			height : "30px",
			text : "Disapprove",
			press : function() {
				sap.ui.commons.MessageBox.show(
					      "Are you sure you want to disapprove this request?",
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
			content : [ oBtnApprove ,oBtnDisapprove ,oBtnClose ]
		});
        oLayout.createRow(null);
        oLayout.createRow(null,null,oBtnApprove ,oBtnDisapprove);
        
		return oLayout;
	}

});