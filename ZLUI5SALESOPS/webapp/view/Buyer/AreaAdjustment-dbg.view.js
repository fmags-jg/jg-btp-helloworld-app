sap.ui.jsview("views.Buyer.AreaAdjustment", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf views.Buyer.AreaAdjustment
	*/ 
	getControllerName : function() {
		return "views.Buyer.AreaAdjustment";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf views.Buyer.AreaAdjustment
	*/ 
	createContent : function(oController) {
		var oCell;
		
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
       
		var oFields = [{ label1: "Company Code",field1: "{/tranDetail/Bukrs}",label2: "Contract Number",field2: "{/tranDetail/Recnnr}"}
		    		 ,{ label1: "Principal Buyer",field1: "{/tranDetail/Buyer}",label2: "Date of Sale",field2: "{/tranDetail/DateOfSale}",fld2align: ""}
		    		 ,{ label1: "Unit",field1: "{/tranDetail/Unit}",label2: "Unit Type",field2: "{/tranDetail/UnitType}",fld2align: ""}];

		var oBasicInfo = formCreate(oFields,[ '80px', '150px', '8%', '80px', '150px','30%' ]);
		
		oFields = [{ label1: "Unit Area",field1: "{/tranDetail/aa_headerToOldArea/0/UnitArea}",field1a: "{/tranDetail/aa_headerToNewArea/0/UnitArea}",label2: "",field2: "",fld2align: "",field2a: ""}
		 ,{ label1: "Balcony Area",field1: "{/tranDetail/aa_headerToOldArea/0/Balcony}",field1a: "{/tranDetail/aa_headerToNewArea/0/Balcony}",label2: "",field2: "",fld2align: "",field2a: ""}
		 ,{ label1: "Garden Area",field1: "{/tranDetail/aa_headerToOldArea/0/Garden}",field1a: "{/tranDetail/aa_headerToNewArea/0/Garden}",label2: "",field2: "",fld2align: "",field2a: ""}
		 ,{ label1: "A/C Area",field1: "{/tranDetail/aa_headerToOldArea/0/AcArea}",field1a: "{/tranDetail/aa_headerToNewArea/0/AcArea}",label2: "",field2: "",fld2align: "",field2a: ""}
		 ,{ label1: "Total Floor Area",field1: "{/tranDetail/aa_headerToOldArea/0/TotalArea}", field1a: "{/tranDetail/aa_headerToNewArea/0/TotalArea}",label2: "",field2: "",fld2align: "",field2a: ""}
		 ,{ label1: "TCP Amount",field1: "{/tranDetail/aa_headerToOldArea/0/Tcp}", field1a: "{/tranDetail/aa_headerToNewArea/0/Tcp}",label2: "",field2: "",fld2align: "",field2a: ""}
		 ,{ label1: "Price per sqm",field1: "{/tranDetail/aa_headerToOldArea/0/PricePerSqm}", field1a: "{/tranDetail/aa_headerToNewArea/0/PricePerSqm}",label2: "",field2: "",fld2align: "",field2a: ""}
		 ];

		var oOtherDtls = formCreate6Cols(oFields,[ '100px', '200px', '5px', '200px', '10%', '130px', '200px', '5px', '200px','8px' ],true);

        var oRemarks = new sap.ui.commons.layout.MatrixLayout({
			columns : 6,
			width : "100%",
			widths : [ '80px', '140px', '30%', '120px', '140px', '30%' ]
        });

		var oLRemarks = new sap.ui.commons.Label({text : "Remarks: "});	
		oRemarks.createRow(null,oLRemarks);
		
		var oTRemarks = new sap.ui.commons.TextArea({
			tooltip : "Remarks",
			value : '{/tranDetail/aa_headerToRemarks}',
			width : "100%",
			rows : 5,
			enabled: false
		});

		oCell = new sap.ui.commons.layout.MatrixLayoutCell({
			colSpan : 4,
			hAlign : sap.ui.commons.layout.HAlign.Left,
			vAlign : sap.ui.commons.layout.VAlign.Bottom,
			content : [ oTRemarks ]
		});
		
		oRemarks.createRow(null,oCell);

		//*********************** P A Y M E N T    T E R M S ******************************************/
		var tblTerms = new sap.ui.table.Table({
            selectionMode : sap.ui.table.SelectionMode.Single,
        	selectionBehavior : sap.ui.table.SelectionBehavior.RowOnly,
        	editable: false,
        	height : "300px",
        	visibleRowCount: 5,
            //cellClick : function(oEvent){
            //	tblItems.setSelectedIndex(oEvent.getParameter("rowIndex"));
            //},
			enabled : false 
		});

		tblTerms.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Payment Term"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "TermText"),
        	editable: false,
        	width: "10%"
        }));

		tblTerms.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Number of Terms"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "NoOfTerms"),
        	editable: false,
        	width: "10%"
        }));

		tblTerms.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Total Amount"}),
        	template: new sap.ui.commons.TextView({textAlign : 'End'}).bindProperty("text", "TotalAmount", function(cellValue) {  
    			if (cellValue == undefined || cellValue == "") return "0.00";
          	     return util.Formatter.amount(cellValue);
           	}),
        	editable: false,
        	width: "20%"
        }));

		tblTerms.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Monthly Amount"}),
        	template: new sap.ui.commons.TextView({textAlign : 'End'}).bindProperty("text", "MonthlyAmount", function(cellValue) {  
    			if (cellValue == undefined || cellValue == "") return "0.00";
         	     return util.Formatter.amount(cellValue);
          	}),
        	editable: false,
        	width: "20%"
        }));

		tblTerms.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Start Date"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "StartDate", function(odate) {
    			if (odate == "00000000" || odate == "" || odate == null || odate == undefined) return "";
        		
			    return sapDateFormat(odate);
        	}),
        	editable: false,
        	width: "20%"
        }));

		tblTerms.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "End Date"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "EndDate", function(odate) {
            			if (odate == "00000000" || odate == "" || odate == null || odate == undefined) return "";
                		
        			    return sapDateFormat(odate);
        	}),
        	editable: false,
        	width: "20%"
        }));
		
		tblTerms.setModel(this.getModel());
		tblTerms.bindRows("/tranDetail/aa_headerToPaymentTerms"); 
		//************************ NEW BUYERS INFO*******************************************/

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
		tblApprovers.bindRows("/tranDetail/aa_headerToApprover"); 
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

		
        //************************ ACCORDION *********************************************/
        var oAccordion = new sap.ui.commons.Accordion();
        oAccordion.setWidth("99.8%")
        
     	//Basic Details
        var oSection1 = new sap.ui.commons.AccordionSection();     
        oSection1.setTitle("Basic Details");		
        oSection1.setTooltip("Basic Details");
        oSection1.addContent( oBasicInfo);
        oAccordion.addSection( oSection1 );

     	//Other Details
        var oSection1 = new sap.ui.commons.AccordionSection();     
        oSection1.setTitle("Other Details");		
        oSection1.setTooltip("Other Details");
        oSection1.addContent( oOtherDtls);
        oAccordion.addSection( oSection1 );

        //Payment Terms
        var oSection4 = new sap.ui.commons.AccordionSection();     
        oSection4.setTitle("Payment Terms");		
        oSection4.setTooltip("Payment Terms");
        oSection4.addContent( tblTerms);
        oAccordion.addSection( oSection4 );

     	//Remarks
        var oSection3a = new sap.ui.commons.AccordionSection();     
        oSection3a.setTitle("Remarks");		
        oSection3a.setTooltip("Remarks");
        oSection3a.addContent( oRemarks);
        oAccordion.addSection( oSection3a );

        //Attachments
        var oSection5 = new sap.ui.commons.AccordionSection();     
        oSection5.setTitle("Attachments");		
        oSection5.setTooltip("Attachments");
        oSection5.addContent( oTableDocs);
        oAccordion.addSection( oSection5 );
        
     	//Approval Path
        var oSection6 = new sap.ui.commons.AccordionSection();     
        oSection6.setTitle("Approval Path");		
        oSection6.setTooltip("Approval Path");
        oSection6.addContent( tblApprovers);
        oAccordion.addSection( oSection6 );
        
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
			tooltip : "Approve Area Adjustment",
			width : "100px",
			height : "30px",
			text : "Approve",
			press : function() {
				sap.ui.commons.MessageBox.show(
					      "Are you sure you want to approve request for Area Adjustment?",
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
			tooltip : "Disapprove Area Adjustment",
			width : "100px",
			height : "30px",
			text : "Disapprove",
			press : function() {
				sap.ui.commons.MessageBox.show(
					      "Are you sure you want to disapprove request for Area Adjustment?",
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