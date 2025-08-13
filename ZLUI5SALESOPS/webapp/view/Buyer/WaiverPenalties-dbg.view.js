sap.ui.jsview("views.Buyer.WaiverPenalties", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf views.Buyer.WaiverPenalties
	*/ 
	getControllerName : function() {
		return "views.Buyer.WaiverPenalties";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf views.Buyer.WaiverPenalties
	*/ 
	createContent : function(oController) {
		var oCell;
		
		//Create a matrix layout for Panel
        var oLayout = new sap.ui.commons.layout.MatrixLayout({
			columns : 5,
			width : "100%",
			widths : [ '100px', '150px', '30%', '150px', '150px' ]}).addStyleClass("page-break");

        var lblReqNo = new sap.ui.commons.Label({text: "Request Number: " , design: sap.ui.commons.LabelDesign.Bold, icon: "sap-icon://employee-approvals"});
        lblReqNo.addStyleClass("layoutTitle");

		// CFP Number
		var oTFReqNo = new sap.ui.commons.TextField({
			width : "100%",
			value : '{/tranDetail/RefNumber}',
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

		var oFields = [{row1: [{type:"Label",value:"Company Code",align: ""}
							  ,{type:"Text",value:"{/tranDetail/CompCode}",align: ""}
					  ]}
					 ,{row1: [{type:"Label",value:"Business Partner",align: ""}
					  ,{type:"Text",value:"{/tranDetail/PartnerName}",align: ""}
					  ]}
					 ,{row1: [{type:"Label",value:"Validity Date",align: ""}
					  ,{type:"Text",value:"{/tranDetail/ValidityDate}",align: ""}
					  ]}
					 ];
		
		var oSelDetails = formDynamic(oFields, [], [ '100px', '200px', '50%' ]);

		//***************************** CONTRACT DETAILS ******************************************/
		var tblContract = new sap.ui.table.Table({
            selectionMode : sap.ui.table.SelectionMode.Single,
        	selectionBehavior : sap.ui.table.SelectionBehavior.RowOnly,
        	editable: false,
        	height : "300px",
        	width: "780px",
        	visibleRowCount: 4,
            //cellClick : function(oEvent){
            //	tblItems.setSelectedIndex(oEvent.getParameter("rowIndex"));
            //},
			enabled : false 
		});

		tblContract.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Contract No.", width:"130px"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "ContractNumber"),
        	editable: false,
        	width:"130px"
        }));
		tblContract.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Project", width:"150px"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "ProjectText"),
        	editable: false,
        	width:"150px"
        }));
		tblContract.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Land/Building", width:"200px"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "BuildingText"),
        	editable: false,
        	width:"200px"
        }));

		tblContract.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Unit", width:"80px"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "UnitText"),
        	editable: false,
        	width:"80px"
        }));

		tblContract.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "TCP", width:"120px"}),
        	template: new sap.ui.commons.TextView({textAlign: "End"}).bindProperty("text", "TCPAmount"
          	),
        	editable: false,
        	width:"120px"
        }));

		tblContract.setModel(this.getModel());
		tblContract.bindRows("/tranDetail/pw_contractdetSet"); 
		//************************ CONTRACT DETAILS*******************************************/

		//***************************** ROUTING MATRIX ******************************************/
		var tblOverdueItems = new sap.ui.table.Table({
            selectionMode : sap.ui.table.SelectionMode.Single,
        	selectionBehavior : sap.ui.table.SelectionBehavior.RowOnly,
        	editable: false,
        	height : "300px",
        	visibleRowCount: 8,
            //cellClick : function(oEvent){
            //	tblItems.setSelectedIndex(oEvent.getParameter("rowIndex"));
            //},
			enabled : false 
		});
		
		tblOverdueItems.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Contract No.", textAlign: "Center"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "Contact"),
        	editable: false,
        	//width: "25%"
        }));

		tblOverdueItems.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Flow Type", textAlign: "Center"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "FlowType"),
        	editable: false,
        	//width: "15%"
        }));

		tblOverdueItems.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Due Date", textAlign: "Center"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "DueDate"),
        	editable: false,
        	//width: "15%"
        }));

		tblOverdueItems.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "No. of Days", textAlign: "Center"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "NoDays"),
        	editable: false,
        	//width: "15%"
        }));

		tblOverdueItems.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Amount Due", textAlign: "Center"}),
        	template: new sap.ui.commons.TextView({textAlign: "End"}).bindProperty("text", "AmountDue"),
        	editable: false,
        	//width: "30%"
        }));

		tblOverdueItems.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Paid Penalty", textAlign: "Center"}),
        	template: new sap.ui.commons.TextView({textAlign: "End"}).bindProperty("text", "PaidPenalty"),
        	editable: false,
        	//width: "30%"
        }));
		
		tblOverdueItems.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Unpaid Penalty", textAlign: "Center"}),
        	template: new sap.ui.commons.TextView({textAlign: "End"}).bindProperty("text", "UnpaidPenalty"),
        	editable: false,
        	//width: "30%"
        }));

		tblOverdueItems.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Total", textAlign: "Center"}),
        	template: new sap.ui.commons.TextView({textAlign: "End"}).bindProperty("text", "Total"),
        	editable: false,
        	//width: "30%"
        }));

		tblOverdueItems.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Collectible", textAlign: "Center"}),
        	template: new sap.ui.commons.TextView({textAlign: "End"}).bindProperty("text", "Collectible"),
        	editable: false,
        	//width: "30%"
        }));

		tblOverdueItems.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "For Waiver", textAlign: "Center"}),
        	template: new sap.ui.commons.TextView({textAlign: "End"}).bindProperty("text", "ForWaiver"),
        	editable: false,
        	//width: "30%"
        }));
		
		tblOverdueItems.setModel(this.getModel());
		tblOverdueItems.bindRows("/tranDetail/pw_overdueitemsSet");

     	//Overdue Items
        var oOverdueLayout = new sap.ui.commons.layout.MatrixLayout({
			columns : 7,
			width : "100%",
			widths : [ '500px', '125px', '125px', '125px', '125px', '125px', '125px' ]
        });

        oCell = new sap.ui.commons.layout.MatrixLayoutCell({vAlign : sap.ui.commons.layout.VAlign.Bottom, colSpan: 7});
        oCell.addContent(tblOverdueItems);
        oOverdueLayout.createRow(oCell);
        oOverdueLayout.createRow(null);
        
        /***********************TOTALS*************************/
        var oLblTotal = new sap.ui.commons.Label({text: "TOTALS", width: "100%"}).addStyleClass("font14ptBold");
        var oTFAmountDue = new sap.ui.commons.TextField({
        	value:"{/tranDetail/TotalOverdueSet/TotalAmountDue}", 
        	width: "100%", 
        	textAlign: "End", 
        	enabled : false
        }).addStyleClass("font14ptBold");
        
        var oTFPaid = new sap.ui.commons.TextField({
        	value:"{/tranDetail/TotalOverdueSet/TotalPaidPenalty}", 
        	width: "100%", 
        	textAlign: "End", 
        	enabled : false
        }).addStyleClass("font14ptBold");
        
        var oTFUnpaid = new sap.ui.commons.TextField({
        	value:"{/tranDetail/TotalOverdueSet/TotalUnpaidPenalty}", 
        	width: "100%", 
        	textAlign: "End", 
        	enabled : false
        }).addStyleClass("font14ptBold");
        
        var oTFOverdue = new sap.ui.commons.TextField({
        	value:"{/tranDetail/TotalOverdueSet/TotalOverDue}", 
        	width: "100%", 
        	textAlign: "End", 
        	enabled : false
        }).addStyleClass("font14ptBold");
        
        var oTFCollectible = new sap.ui.commons.TextField({
        	value:"{/tranDetail/TotalOverdueSet/TotalCollectible}", 
        	width: "100%", 
        	textAlign: "End", 
        	enabled : false
        }).addStyleClass("font14ptBold");
        
        var oTFForWaiver = new sap.ui.commons.TextField({
        	value:"{/tranDetail/TotalOverdueSet/TotalForWaiver}", 
        	width: "100%", 
        	textAlign: "End", 
        	enabled : false
        }).addStyleClass("font14ptBold");
        
        oOverdueLayout.createRow(oLblTotal,oTFAmountDue,oTFPaid,oTFUnpaid,oTFOverdue,oTFCollectible,oTFForWaiver);
        /***********************TOTALS*************************/

		//***************************** APPLICATION FROM ******************************************/
		var tblAppfrom = new sap.ui.table.Table({
            selectionMode : sap.ui.table.SelectionMode.Single,
        	selectionBehavior : sap.ui.table.SelectionBehavior.RowOnly,
        	editable: false,
        	height : "300px",
        	visibleRowCount: 3,
        	width: "780px",
            //cellClick : function(oEvent){
            //	tblItems.setSelectedIndex(oEvent.getParameter("rowIndex"));
            //},
			enabled : false 
		});

		tblAppfrom.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Contract", width:"200px"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "Contract"),
        	editable: false,
        	width: "200px",
        	//autoResizable: true
        }));
		tblAppfrom.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Paid Penalty" ,width:"120px" }),
        	template: new sap.ui.commons.TextView({textAlign: "End"}).bindProperty("text", "PaidPenalty"),
        	editable: false,
        	width: "120px",
        	//autoResizable: true
        }));
		tblAppfrom.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Unpaid Penalty", width:"120px" }),
        	template: new sap.ui.commons.TextView({textAlign: "End"}).bindProperty("text", "UnpaidPenalty"),
        	editable: false,
        	width: "120px",
        	//autoResizable: true
        }));

		tblAppfrom.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "For Waiver", width:"120px" }),
        	template: new sap.ui.commons.TextView({textAlign: "End"}).bindProperty("text", "ForWaiver"),
        	editable: false,
        	width: "120px",
        	//autoResizable: true
        }));

		tblAppfrom.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Available Amount", width:"130px" }),
        	template: new sap.ui.commons.TextView({textAlign: "End"}).bindProperty("text", "Balance"),
        	editable: false,
        	width: "130px",
        	//autoResizable: true
        }));

		tblAppfrom.setModel(this.getModel());
		tblAppfrom.bindRows("/tranDetail/pw_appfromSet"); 
		//************************ APPLICATION FROM*******************************************/

		//***************************** APPLICATION TO ******************************************/
		var tblAppto = new sap.ui.table.Table({
            selectionMode : sap.ui.table.SelectionMode.Single,
        	selectionBehavior : sap.ui.table.SelectionBehavior.RowOnly,
        	editable: false,
        	height : "300px",
        	visibleRowCount: 3,
        	width: "780px",
            //cellClick : function(oEvent){
            //	tblItems.setSelectedIndex(oEvent.getParameter("rowIndex"));
            //},
			enabled : false 
		});

		tblAppto.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "From Contract No.", width:"150px" }),
        	template: new sap.ui.commons.TextView().bindProperty("text", "ContractFrom"),
        	editable: false,
        	width:"150px" 
        	//width: "70%"
        }));
		tblAppto.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "To Contract No.", width:"150px"}),
        	template: new sap.ui.commons.TextView({textAlign: "End"}).bindProperty("text", "ContractTo"),
        	editable: false,
        	width:"150px" 
        }));
		tblAppto.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Application TCP", width:"150px"}),
        	template: new sap.ui.commons.TextView({textAlign: "End"}).bindProperty("text", "AppTCP"),
        	editable: false,
        	width:"150px" 
        }));

		tblAppto.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Application Others", width:"150px"}),
        	template: new sap.ui.commons.TextView({textAlign: "End"}).bindProperty("text", "AppOthers"),
        	editable: false,
        	width:"150px" 
        }));

		tblAppto.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Total App", width:"150px"}),
        	template: new sap.ui.commons.TextView({textAlign: "End"}).bindProperty("text", "TotApp"),
        	editable: false,
        	width:"150px" 
        }));

		tblAppto.setModel(this.getModel());
		tblAppto.bindRows("/tranDetail/pw_apptoSet"); 
		//************************ APPLICATION TO*******************************************/
		//************************ REMARKS   *******************************************/

        var oRemarks = new sap.ui.commons.layout.MatrixLayout({
			columns : 6,
			width : "100%",
			widths : [ '80px', '200px', '30%', '120px', '140px', '30%' ]
        });

		var oLRemarks = new sap.ui.commons.Label({text : "Request: "});	
		oRemarks.createRow(null,oLRemarks);
		
		//Request
		var oTRemarks = new sap.ui.commons.TextArea({
			tooltip : "Request",
			value : '{/tranDetail/pw_requestSet}',
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

		//Background
		oLRemarks = new sap.ui.commons.Label({text : "Background: "});	
		oRemarks.createRow(null,oLRemarks);
		
		oTRemarks = new sap.ui.commons.TextArea({
			tooltip : "Background",
			value : '{/tranDetail/pw_backgroundSet}',
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

		//Recommendation and Justification
		oLRemarks = new sap.ui.commons.Label({text : "Recommendation and Justification: "});	
		oRemarks.createRow(null,oLRemarks);
		
		oTRemarks = new sap.ui.commons.TextArea({
			tooltip : "Recommendation and Justification",
			value : '{/tranDetail/pw_recommendationSet}',
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

		//Other Instruction
		oLRemarks = new sap.ui.commons.Label({text : "Other Instruction: "});	
		oRemarks.createRow(null,oLRemarks);
		
		oTRemarks = new sap.ui.commons.TextArea({
			tooltip : "Other Instruction",
			value : '{/tranDetail/pw_instructionsSet}',
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

		//Future Penalty
		oLRemarks = new sap.ui.commons.Label({text : "Future Penalty: "});	
		oRemarks.createRow(null,oLRemarks);
		
		oTRemarks = new sap.ui.commons.TextArea({
			tooltip : "Future Penalty",
			value : '{/tranDetail/pw_futureinstructionsSet}',
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
		
		//************************ REMARKS   *******************************************/

		//************************ APPROVAL PATH*******************************************/
		var tblApprovers = new sap.ui.table.Table({
            selectionMode : sap.ui.table.SelectionMode.Single,
        	selectionBehavior : sap.ui.table.SelectionBehavior.RowOnly,
        	editable: false,
        	height : "300px",
        	width : "900px",
        	visibleRowCount: 5,
           // cellClick : function(oEvent){
            //	tblItems.setSelectedIndex(oEvent.getParameter("rowIndex"));
           // },
			enabled : false 
		});

		tblApprovers.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Approver", width:"230px"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "CompleteName"),
        	editable: false,
        	width: "350px"
        }));

		tblApprovers.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Level", width:"50px"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "Level"),
        	editable: false,
        	width: "80px"
        }));

		tblApprovers.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Status", width:"100px"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "Status"),
        	editable: false,
        	width: "120px"
        }));

		tblApprovers.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Status Date", width:"140px"}),
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
        	label: new sap.ui.commons.Label({text: "Comments", width:"300px"}),
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
        
     	//Selection Details
        var oAccordionBasic = new sap.ui.commons.Accordion();
        oAccordionBasic.setWidth("99.8%")
        var oSection1 = new sap.ui.commons.AccordionSection();     
        oSection1.setTitle("Selection Details");		
        oSection1.setTooltip("Selection Details");
        oSection1.addContent( oSelDetails);
        oAccordionBasic.addSection( oSection1 );
        oCell = new sap.ui.commons.layout.MatrixLayoutCell({colSpan: 5, content: [oAccordionBasic]})
        oLayout.createRow(oCell);

        //Contract/s Details
        var oAccordionContract = new sap.ui.commons.Accordion();
        oAccordionContract.setWidth("99.8%")
        var oSection2 = new sap.ui.commons.AccordionSection();     
        oSection2.setTitle('Contract/s Details');		
        oSection2.setTooltip('Contract/s Details');
        oSection2.addContent( tblContract);
        oAccordionContract.addSection( oSection2 );
        oCell = new sap.ui.commons.layout.MatrixLayoutCell({colSpan: 5, content: [oAccordionContract]})
        oLayout.createRow(oCell);

        //Overdue Items
        var oAccordionOverdueItems = new sap.ui.commons.Accordion();
        oAccordionOverdueItems.setWidth("99.8%")
        var oSection3 = new sap.ui.commons.AccordionSection();     
        var title1 = "Overdue Items as of '" + assessdate + "'";
        oSection3.setTitle(title1);		
        oSection3.setTooltip(title1);
        oSection3.addContent( oOverdueLayout );
        oAccordionOverdueItems.addSection( oSection3 );
        oCell = new sap.ui.commons.layout.MatrixLayoutCell({colSpan: 5, content: [oAccordionOverdueItems]})
        oLayout.createRow(oCell);

     	//Application
        var oAccordionApp = new sap.ui.commons.Accordion();
        oAccordionApp.setWidth("99.8%")
        var oAppLayout = new sap.ui.commons.layout.MatrixLayout({
			columns : 2,
			width : "100%",
			widths : [ '90%', '10%' ]
        }).addStyleClass("page-break");

		var oLbl = new sap.ui.commons.Label({text : "From"}).addStyleClass("font14ptBold").addStyleClass("underline");
        oAppLayout.createRow(oLbl, null);

        oAppLayout.createRow(tblAppfrom, null);
        oAppLayout.createRow(null, null);

        oLbl = new sap.ui.commons.Label({text : "To"}).addStyleClass("font14ptBold").addStyleClass("underline");
        oAppLayout.createRow(oLbl, null);
        oAppLayout.createRow(tblAppto, null);

        var oSection4 = new sap.ui.commons.AccordionSection();     
        oSection4.setTitle("Application");		
        oSection4.setTooltip("Application");
        oSection4.addContent( oAppLayout);
        oAccordionApp.addSection( oSection4 );
        oCell = new sap.ui.commons.layout.MatrixLayoutCell({colSpan: 5, content: [oAccordionApp]})
        oLayout.createRow(oCell);

        //Remarks
        var oAccordionRemarks = new sap.ui.commons.Accordion().addStyleClass("accremarks");
        oAccordionRemarks.setWidth("99.8%")
        var oSection41 = new sap.ui.commons.AccordionSection(sessionCache["pageID"] + "oSectionRemarks");   
        oSection41.setTitle("Remarks");		
        oSection41.setTooltip("Remarks");
        oSection41.addContent( oRemarks);
        oAccordionRemarks.addSection( oSection41 );
        oCell = new sap.ui.commons.layout.MatrixLayoutCell({colSpan: 5, content: [oAccordionRemarks]})
        oLayout.createRow(oCell);

        //Attachments
        var oAccordionDocs = new sap.ui.commons.Accordion();
        oAccordionDocs.setWidth("99.8%")
        var oSection5 = new sap.ui.commons.AccordionSection();     
        oSection5.setTitle("Attachments");		
        oSection5.setTooltip("Attachments");
        oSection5.addContent( oTableDocs);
        oAccordionDocs.addSection( oSection5 );
        oCell = new sap.ui.commons.layout.MatrixLayoutCell({colSpan: 5, content: [oAccordionDocs]})
        oLayout.createRow(oCell);
       
     	//Approval Path
        var oAccordionApprovers = new sap.ui.commons.Accordion();
        oAccordionApprovers.setWidth("99.8%")
        var oSection6 = new sap.ui.commons.AccordionSection();     
        oSection6.setTitle("Approval Path");		
        oSection6.setTooltip("Approval Path");
        oSection6.addContent( tblApprovers);
        oAccordionApprovers.addSection( oSection6 );
        oCell = new sap.ui.commons.layout.MatrixLayoutCell({colSpan: 5, content: [oAccordionApprovers]})
        oLayout.createRow(oCell);
        
        //Approver's Remarks
        var oAccordionAppRemarks = new sap.ui.commons.Accordion().addStyleClass("noprint");
        oAccordionAppRemarks.setWidth("99.8%")
        var oSection7 = new sap.ui.commons.AccordionSection();     
        oSection7.setTitle("Approver's Remarks");		
        oSection7.setTooltip("Approver's Remarks");
        oSection7.addContent( oRemarksLayout);
        oAccordionAppRemarks.addSection( oSection7 );
        oCell = new sap.ui.commons.layout.MatrixLayoutCell({colSpan: 5, content: [oAccordionAppRemarks]})
        oLayout.createRow(oCell);
        

        //************************  BUTTONS *********************************************/
		jQuery.sap.require("sap.ui.commons.MessageBox");
		var oBtnApprove = new sap.ui.commons.Button(sessionCache["pageID"] + "oBtnApprove",{
			tooltip : "Approve Waiver of Penalties",
			width : "100px",
			height : "30px",
			text : "Approve",
			press : function() {
				sap.ui.commons.MessageBox.show(
					      "Are you sure you want to approve request for Waiver of Penalties?",
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
		}).addStyleClass("noprint");
		

		var oBtnDisapprove = new sap.ui.commons.Button(sessionCache["pageID"] + "oBtnDisapprove",{
			tooltip : "Disapprove Waiver of Penalties",
			width : "100px",
			height : "30px",
			text : "Disapprove",
			press : function() {
				sap.ui.commons.MessageBox.show(
					      "Are you sure you want to disapprove request for Waiver of Penalties",
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
		}).addStyleClass("noprint");

// Add Christian de Leon - New button for Escalate
		    if(oShowEscalate === 'X'){
		    	var oBtnEscalate = new sap.ui.commons.Button(sessionCache["pageID"] + "oBtnEscalate",{
					tooltip : "Escalate Waiver of Penalties",
					width : "100px",
					height : "30px",
					text : "Escalate",
					press : function() {
						sap.ui.commons.MessageBox.show(
							      "Are you sure you want to escalate request for Waiver of Penalties",
							      sap.ui.commons.MessageBox.Icon.INFORMATION,
							      "Escalate Request",
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
											
											if (oController.approveDisapprove("ESCALATE",tdlines)) {
								    			/*oBtnApprove.setEnabled(false);
								    			oBtnDisapprove.setEnabled(false);
								    			oTAComments.setValue("");*/
											}

											}
										}
								 );
					},
					icon : sap.ui.core.IconPool.getIconURI("undo")
				}).addStyleClass("noprint");
		    };
		
// End Christian de Leon		
		
		/*
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
*/		
        oLayout.createRow(null);
        oLayout.createRow(null,null,oBtnApprove ,oBtnDisapprove, oBtnEscalate);
        
		return oLayout;
	}

});