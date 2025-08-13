sap.ui.jsview("views.UnTag.LogItems", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf views.UnTag.LogItems
	*/ 
	getControllerName : function() {
		return "views.UnTag.LogItems";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf views.UnTag.LogItems
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

		var oFields = [{row1: [{type:"Label",value:"Contract Number",align: ""}
							  ,{type:"Text",value:"{/tranDetail/Recnnr}",align: ""}
					  ]}
					 ,{row1: [{type:"Label",value:"Project",align: ""}
					  ,{type:"Text",value:"{/tranDetail/Xgetxt}",align: ""}
					  ]}
					 ,{row1: [{type:"Label",value:"Unit Number",align: ""}
					  ,{type:"Text",value:"{/tranDetail/Xmetxt}",align: ""}
					  ]}
					 ,{row1: [{type:"Label",value:"Buyer Name",align: ""}
					  ,{type:"Text",value:"{/tranDetail/Bpname}",align: ""}
					  ]}
					 ,{row1: [{type:"Label",value:"Total Contract Price",align: ""}
					  ,{type:"Text",value:"{/tranDetail/Tcp}",align: "End"}
					  ]}
					 ,{row1: [{type:"Label",value:"Total TCP Payments",align: ""}
					  ,{type:"Text",value:"{/tranDetail/TotTcp}",align: "End"}
					  ]}
					 ,{row1: [{type:"Label",value:"Outstanding Balance",align: ""}
					  ,{type:"Text",value:"{/tranDetail/OutBal}",align: "End"}
					  ]}
					 ,{row1: [{type:"Label",value:"Date of Sale",align: ""}
					  ,{type:"Text",value:"{/tranDetail/Recnbeg}",align: ""}
					  ]}
					 ,{row1: [{type:"Label",value:"Buyer's Email Address",align: ""}
					  ,{type:"Text",value:"{/tranDetail/Email}",align: ""}
					  ]}
					 ];
		
		var oGenDetails = formDynamic(oFields, [], [ '120px', '200px', '60%' ]);

		//***************************** REQUEST DETAILS ******************************************/
		oFields = [{row1: [{type:"Label",value:"Request Number",align: ""}
		  	,{type:"Text",value:"{/tranDetail/Refnumber}",align: ""}
			]}
			,{row1: [{type:"Label",value:"Received Through",align: ""}
			,{type:"Text",value:"{/tranDetail/Rthru}",align: ""}
			]}
			,{row1: [{type:"Label",value:"Date Received",align: ""}
			,{type:"Text",value:"{/tranDetail/RcvdDate}",align: ""}
			]}
			,{row1: [{type:"Label",value:"Urgency",align: ""}
			,{type:"Text",value:"{/tranDetail/Urgency}",align: ""}
			]}
			,{row1: [{type:"Label",value:"Days to Complete",align: ""}
			,{type:"Text",value:"{/tranDetail/DaysToComp}",align: ""}
			]}
			/*
			,{row1: [{type:"Label",value:"Background Details",align: ""}
			,{type:"Text",value:"{/tranDetail/TagLog_BackgroundText}",align: ""}
			]}
			,{row1: [{type:"Label",value:"Recommendation/ Justification",align: ""}
			,{type:"Text",value:"{/tranDetail/TagLog_JustificationText}",align: ""}
			]}
			*/
			];
			
		var oReqDetails = formDynamic(oFields, [], [ '200px', '200px', '50%' ]);

		//************************ LOG Items*******************************************/
		var tblLog = new sap.ui.table.Table({
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

		tblLog.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Line Item"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "Buzei"),
        	editable: false
        	,width: "80px"
        }));

		tblLog.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Doc. No."}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "Belnr"),
        	editable: false
        	,width: "110px"
        }));

		tblLog.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Due Date"}),
        	template: new sap.ui.commons.TextView().bindProperty("text" ,{
                parts: ["Zfbdt"],
                formatter: function(odate) {
            			if (odate == "00000000" || odate == "" || odate == null || odate == undefined) return "";
                		odate = odate.substr(4,2) + "/" + odate.substr(6,2) + "/" + odate.substring(0,4);
            			
        			    return odate;
        			}
        	})
        	,editable: false
        	,width: "110px"
        }));

		tblLog.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Doc. Type."}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "Blart"),
        	editable: false
        	,width: "80px"
        }));

		tblLog.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Flow Type"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "Vbewa"),
        	editable: false
        	,width: "80px"
        }));

		tblLog.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Text"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "Sgtxt"),
        	editable: false
        }));

		tblLog.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "LOG Amount From"}),
        	template: new sap.ui.commons.TextView({textAlign : 'End'}).bindProperty("text", "Xref2"
        			, function(cellValue) {  
    			if (cellValue == undefined) return;
    			return util.Formatter.amount(cellValue);
       	}),
        	editable: false
        	,width: "140px"
        }));
		
		tblLog.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "LOG Amount To"}),
        	template: new sap.ui.commons.TextView({textAlign : 'End'}).bindProperty("text", "Lgamt", function(cellValue) {  
    			if (cellValue == undefined) return;
    			return util.Formatter.amount(cellValue);
       	}),
        	editable: false
        	,width: "140px"
        }));

		tblLog.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Log Applied"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "Xref1"),
        	editable: false
        	,width: "100px"
        }));
		
		tblLog.setModel(this.getModel());
		tblLog.bindRows("/tranDetail/TagLog_Items"); 
		//************************ APPROVAL PATH*******************************************/

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
		tblApprovers.bindRows("/tranDetail/TagLog_Approver"); 
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
        oAccordion.setWidth("99.8%")
        
     	//Contract Details
        var oSection1 = new sap.ui.commons.AccordionSection();     
        oSection1.setTitle("Contract Details");		
        oSection1.setTooltip("Contract Details");
        oSection1.addContent( oGenDetails);
        oAccordion.addSection( oSection1 );

        oCell = new sap.ui.commons.layout.MatrixLayoutCell({colSpan: 5, content: [oAccordion]})
        oLayout.createRow(oCell);
        
        //Request Details
        var oContractLayout = new sap.ui.commons.layout.MatrixLayout({
			columns : 4,
			width : "100%",
			widths: ["200px","200px","10%","60%"]
        });

		oCell = new sap.ui.commons.layout.MatrixLayoutCell({
			colSpan : 2,
			hAlign : sap.ui.commons.layout.HAlign.Left,
			vAlign : sap.ui.commons.layout.VAlign.Bottom,
			content : [ oReqDetails ]
		});
        oContractLayout.createRow(oCell, null,null );
        //oContractLayout.createRow(oCurrUnit, null,null );
        //oContractLayout.createRow(null, null,null );

        //fhizon 9.4.2017 - start here...
		var oLblDetails = new sap.ui.commons.Label({text : "Background Details",width:"100%"});
		var oTADetails = new sap.ui.commons.TextArea({
			width : "100%",
			rows : 5,
			enabled: false,
			value: "{/tranDetail/TagLog_BackgroundText}"
		});

		oCell = new sap.ui.commons.layout.MatrixLayoutCell({
			colSpan : 2,
			hAlign : sap.ui.commons.layout.HAlign.Left,
			vAlign : sap.ui.commons.layout.VAlign.Bottom,
			content : [ oTADetails ]
		});
        oContractLayout.createRow(oLblDetails,oCell,null );

		var oLblJustif = new sap.ui.commons.Label({text : "Recommendation/ Justification",width:"100%"});
		var oTAJustif = new sap.ui.commons.TextArea({
			width : "100%",
			rows : 5,
			enabled: false,
			value: "{/tranDetail/TagLog_JustificationText}"
		});

		oCell = new sap.ui.commons.layout.MatrixLayoutCell({
			colSpan : 2,
			hAlign : sap.ui.commons.layout.HAlign.Left,
			vAlign : sap.ui.commons.layout.VAlign.Bottom,
			content : [ oTAJustif ]
		});
        oContractLayout.createRow(oLblJustif,oCell, null );
        //fhizon 9.4.2017- end here....
		
        
        oAccordion = new sap.ui.commons.Accordion();
        oAccordion.setWidth("99.8%")
        
        var oSection2 = new sap.ui.commons.AccordionSection();     
        oSection2.setTitle('Request Details');		
        oSection2.setTooltip('Request Details');
        oSection2.addContent( oContractLayout);
        oAccordion.addSection( oSection2 );

        oCell = new sap.ui.commons.layout.MatrixLayoutCell({colSpan: 5, content: [oAccordion]})
        oLayout.createRow(oCell);
        
        //Removal of LOG
        oAccordion = new sap.ui.commons.Accordion();
        oAccordion.setWidth("99.8%")
        
        var oSection3 = new sap.ui.commons.AccordionSection();     
        oSection3.setTitle('Removal of LOG');		
        oSection3.setTooltip('Removal of LOG');
        oSection3.addContent( tblLog);
        oAccordion.addSection( oSection3 );
        
        oCell = new sap.ui.commons.layout.MatrixLayoutCell({colSpan: 5, content: [oAccordion]})
        oLayout.createRow(oCell);

        //Attachments
        oAccordion = new sap.ui.commons.Accordion();
        oAccordion.setWidth("99.8%")
        
        var oSection5 = new sap.ui.commons.AccordionSection();     
        oSection5.setTitle("Attachments");		
        oSection5.setTooltip("Attachments");
        oSection5.addContent( oTableDocs);
        oAccordion.addSection( oSection5 );
        
        oCell = new sap.ui.commons.layout.MatrixLayoutCell({colSpan: 5, content: [oAccordion]})
        oLayout.createRow(oCell);
        
     	//Approval Path
        oAccordion = new sap.ui.commons.Accordion();
        oAccordion.setWidth("99.8%")
        
        var oSection6 = new sap.ui.commons.AccordionSection();     
        oSection6.setTitle("Approval Path");		
        oSection6.setTooltip("Approval Path");
        oSection6.addContent( tblApprovers);
        oAccordion.addSection( oSection6 );
        
        oCell = new sap.ui.commons.layout.MatrixLayoutCell({colSpan: 5, content: [oAccordion]})
        oLayout.createRow(oCell);
        
        //Approver's Remarks
        oAccordion = new sap.ui.commons.Accordion();
        oAccordion.setWidth("99.8%")
        
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
			tooltip : "Approve Un-Tag Log Items",
			width : "100px",
			height : "30px",
			text : "Approve",
			press : function() {
				sap.ui.commons.MessageBox.show(
					      "Are you sure you want to approve request for Un-Tag Log Items?",
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
			tooltip : "Disapprove Un-Tag Log Items",
			width : "100px",
			height : "30px",
			text : "Disapprove",
			press : function() {
				sap.ui.commons.MessageBox.show(
					      "Are you sure you want to disapprove request for Un-Tag Log Items",
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