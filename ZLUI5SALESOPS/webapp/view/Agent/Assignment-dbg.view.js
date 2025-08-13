sap.ui.jsview("views.Agent.Assignment", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf views.Agent.Assignment
	*/ 
	getControllerName : function() {
		return "views.Agent.Assignment";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf views.Agent.Assignment
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

		var oFields = [{row1: [{type:"Label",value:"Priority Level",align: ""}
							  ,{type:"Text",value:"{/tranDetail/Urgency}",align: ""}
					  ]}
					 ,{row1: [{type:"",value:"",align: ""}
					  ,{type:"",value:"",align: ""}
					  ]}
					 ,{row1: [{type:"Label",value:"Contract Number",align: ""}
					  ,{type:"Text",value:"{/tranDetail/ContractNumber}",align: ""}
					  ]}
					 ,{row1: [{type:"Label",value:"Buyer Name",align: ""}
					  ,{type:"Text",value:"{/tranDetail/Buyer}",align: ""}
					  ]}
					 ];
		
		var oGenDetails = formDynamic(oFields, [], [ '120px', '200px', '60%' ]);

		var tblGenDetails = new sap.ui.table.Table({
            selectionMode : sap.ui.table.SelectionMode.Single,
        	selectionBehavior : sap.ui.table.SelectionBehavior.RowOnly,
        	editable: false,
        	height : "300px",
        	visibleRowCount: 2,
           // cellClick : function(oEvent){
            //	tblItems.setSelectedIndex(oEvent.getParameter("rowIndex"));
           // },
			enabled : false 
		});

		tblGenDetails.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Project (Building/Land)"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "Project"),
        	editable: false
        	,width: "80px"
        }));

		tblGenDetails.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Unit Type"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "UnitType"),
        	editable: false
        	,width: "110px"
        }));

		tblGenDetails.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Lot/Unit"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "LotUnit"),
        	editable: false
        	,width: "80px"
        }));

		tblGenDetails.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Area(SQM)"}),
        	template: new sap.ui.commons.TextView({textAlign: "End"}).bindProperty("text", {
                parts: ["Area" ],
                formatter: function(amt) {
        			return  util.Formatter.amount(amt)  ;
        		}
        	}),
        	editable: false
        	,width: "80px"
        }));

		tblGenDetails.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Date of Sale"}),
        	template: new sap.ui.commons.TextView().bindProperty("text" ,{
                parts: ["DateOfSale" ],
                formatter: function(odate) {
        			return sapDateFormat(odate)  ;
        		}
        	})
        	,editable: false
        	,width: "110px"
        }));

		tblGenDetails.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "TCP Amount"}),
        	template: new sap.ui.commons.TextView({textAlign: "End"}).bindProperty("text", {
                parts: ["TcpAmount" ],
                formatter: function(amt) {
        			return  util.Formatter.amount(amt)  ;
        		}
        	}),
        	editable: false
        	,width: "80px"
        }));

		tblGenDetails.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Release Tranche"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "RelTranche"),
        	editable: false
        	,width: "80px"
        }));

		
		tblGenDetails.setModel(this.getModel());
		tblGenDetails.bindRows("/tranDetail/genDetails"); 

		//************************ AGENT ASSIGNMENT *******************************************/
		var tblAssignment = new sap.ui.table.Table({
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

		tblAssignment.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Agent"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "Agent"),
        	editable: false
        	,width: "18%"
        }));

		tblAssignment.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Position"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "Position"),
        	editable: false
        	,width: "10%"
        }));

		tblAssignment.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Sales Group"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "Group"),
        	editable: false
        	,width: "8%"
        }));

		tblAssignment.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Broker Type"}),
        	template: new sap.ui.commons.TextView().bindProperty("text" ,"Brokertype")
        	,editable: false
        	,width: "8%"
        }));
		
		tblAssignment.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Paid Commission"}),
        	template: new sap.ui.commons.TextView({textAlign: "End"}).bindProperty("text", {
                parts: ["Paidcomm" ],
                formatter: function(amt) {
        			return  util.Formatter.amount(amt)  ;
        		}
        	}),
        	editable: false
        	,width: "8%"
        }));

		tblAssignment.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Rate From"}),
        	template: new sap.ui.commons.TextView({textAlign: "End"}).bindProperty("text", {
                parts: ["Ratefrom" ],
                formatter: function(amt) {
        			return  util.Formatter.amount(amt)  ;
        		}
        	}),
        	editable: false
        	,width: "8%"
        }));

		tblAssignment.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Rate To"}),
        	template: new sap.ui.commons.TextView({textAlign: "End"}).bindProperty("text", {
                parts: ["Rateto" ],
                formatter: function(amt) {
        			return  util.Formatter.amount(amt)  ;
        		}
        	}),
        	editable: false
        	,width: "8%"
        }));

		tblAssignment.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "CDAF From"}),
        	template: new sap.ui.commons.TextView({textAlign: "End"}).bindProperty("text", {
                parts: ["Cdaffrom" ],
                formatter: function(amt) {
        			return  util.Formatter.amount(amt)  ;
        		}
        	}),
        	editable: false
        	,width: "8%"
        }));

		tblAssignment.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "CDAF To"}),
        	template: new sap.ui.commons.TextView({textAlign: "End"}).bindProperty("text", {
                parts: ["Cdafto" ],
                formatter: function(amt) {
        			return  util.Formatter.amount(amt)  ;
        		}
        	}),
        	editable: false
        	,width: "8%"
        }));

		tblAssignment.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Comm Advance"}),
        	template: new sap.ui.commons.TextView({textAlign: "End"}).bindProperty("text", {
                parts: ["Commadv" ],
                formatter: function(amt) {
        			return  util.Formatter.amount(amt)  ;
        		}
        	}),
        	editable: false
        	,width: "8%"
        }));

		tblAssignment.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Prod Credit"}),
        	template: new sap.ui.commons.TextView({textAlign: "End"}).bindProperty("text", {
                parts: ["Prodcredit" ],
                formatter: function(amt) {
        			return  util.Formatter.amount(amt)  ;
        		}
        	}),
        	editable: false
        	,width: "8%"
        }));
		
		tblAssignment.setModel(this.getModel());
		tblAssignment.bindRows("/tranDetail/agents"); 
		//************************ AGENT ASSIGNMENT *******************************************/

        var oRemarks = new sap.ui.commons.layout.MatrixLayout({
			columns : 6,
			width : "100%",
			widths : [ '80px', '140px', '30%', '120px', '140px', '30%' ]
        });

		var oLRemarks = new sap.ui.commons.Label({text : "Remarks: "});	
		oRemarks.createRow(null,oLRemarks);
		
		var oTRemarks = new sap.ui.commons.TextArea({
			tooltip : "Remarks",
			value : '{/tranDetail/remarks}',
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
		tblApprovers.bindRows("/tranDetail/approvers"); 
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
        
     	//General Details
        var oBasicLayout = new sap.ui.commons.layout.MatrixLayout({
			columns : 3,
			width : "100%",
			widths: ["50%","40%","10%"]
        });
        oBasicLayout.createRow(oGenDetails, null );
        oBasicLayout.createRow(null, null );

		oCell = new sap.ui.commons.layout.MatrixLayoutCell({
			colSpan : 2,
			hAlign : sap.ui.commons.layout.HAlign.Left,
			vAlign : sap.ui.commons.layout.VAlign.Bottom,
			content : [ tblGenDetails ]
		});
		
        oBasicLayout.createRow(oCell, null );
        
        var oSection1 = new sap.ui.commons.AccordionSection();     
        oSection1.setTitle("General Details");		
        oSection1.setTooltip("General Details");
        oSection1.addContent( oBasicLayout);
        oAccordion.addSection( oSection1 );

        oCell = new sap.ui.commons.layout.MatrixLayoutCell({colSpan: 5, content: [oAccordion]})
        oLayout.createRow(oCell);

        oAccordion = new sap.ui.commons.Accordion();
        oAccordion.setWidth("99.8%")
        //Agent Assignment
        var oSection2 = new sap.ui.commons.AccordionSection();     
        oSection2.setTitle('Agent Assignment');		
        oSection2.setTooltip('Agent Assignment');
        oSection2.addContent( tblAssignment);
        oAccordion.addSection( oSection2 );

        oCell = new sap.ui.commons.layout.MatrixLayoutCell({colSpan: 5, content: [oAccordion]})
        oLayout.createRow(oCell);

        oAccordion = new sap.ui.commons.Accordion();
        oAccordion.setWidth("99.8%")
     	//Remarks
        var oSection3a = new sap.ui.commons.AccordionSection();     
        oSection3a.setTitle("Remarks");		
        oSection3a.setTooltip("Remarks");
        oSection3a.addContent( oRemarks);
        oAccordion.addSection( oSection3a );

        oCell = new sap.ui.commons.layout.MatrixLayoutCell({colSpan: 5, content: [oAccordion]})
        oLayout.createRow(oCell);

        oAccordion = new sap.ui.commons.Accordion();
        oAccordion.setWidth("99.8%")
        //Attachments
        var oSection5 = new sap.ui.commons.AccordionSection();     
        oSection5.setTitle("Attachments");		
        oSection5.setTooltip("Attachments");
        oSection5.addContent( oTableDocs);
        oAccordion.addSection( oSection5 );

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
			tooltip : "Approve Agent Assignment",
			width : "100px",
			height : "30px",
			text : "Approve",
			press : function() {
				sap.ui.commons.MessageBox.show(
					      "Are you sure you want to approve request for Agent Assignment?",
					      sap.ui.commons.MessageBox.Icon.INFORMATION,
					      "Approve Request",
					      [sap.ui.commons.MessageBox.Action.YES, sap.ui.commons.MessageBox.Action.NO],
					      function(bResult) { 
								if (bResult == "YES") {
									//populate Approver's comments
									var tdline,tdlines = [];
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
			tooltip : "Disapprove Agent Assignment",
			width : "100px",
			height : "30px",
			text : "Disapprove",
			press : function() {
				sap.ui.commons.MessageBox.show(
					      "Are you sure you want to disapprove request for Agent Assignment",
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