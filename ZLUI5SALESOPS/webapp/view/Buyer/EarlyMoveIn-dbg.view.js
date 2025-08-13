sap.ui.jsview("views.Buyer.EarlyMoveIn", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf views.Buyer.EarlyMoveIn
	*/ 
	getControllerName : function() {
		return "views.Buyer.EarlyMoveIn";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf views.Buyer.EarlyMoveIn
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

		var oFields = [{row1: [{type:"Label",value:"Priority Level",align: ""}
							  ,{type:"Text",value:"{/tranDetail/EMI_HeaderSet/0/PriorityLevel}",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"",value:"",align: ""}
							  ]}
					 ,{row1: [{type:"Label",value:"Creation Date",align: ""}
							  ,{type:"Text",value:"{/tranDetail/EMI_HeaderSet/0/CreationDate}",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"Label",value:"Reference Number",align: ""}
							  ,{type:"Text",value:"{/tranDetail/EMI_HeaderSet/0/RefNo}",align: ""}
							  ]}
					 ,{row1: [{type:"Label",value:"Principal Buyer",align: ""}
							  ,{type:"Text",value:"{/tranDetail/EMI_HeaderSet/0/PBuyer}",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"Label",value:"Building/Land",align: ""}
							  ,{type:"Text",value:"{/tranDetail/EMI_HeaderSet/0/BuildLand}",align: ""}
							  ]}
					 ,{row1: [{type:"Label",value:"Co-Buyer",align: ""}
							  ,{type:"Text",value:"{/tranDetail/EMI_HeaderSet/0/CoBuyer}",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"Label",value:"Unit",align: ""}
							  ,{type:"Text",value:"{/tranDetail/EMI_HeaderSet/0/UnitType}",align: ""}
							  ]}
					 ,{row1: [{type:"Label",value:"Contract Number",align: ""}
							  ,{type:"Text",value:"{/tranDetail/EMI_HeaderSet/0/ContractNo}",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"Label",value:"Unit Type",align: ""}
							  ,{type:"Text",value:"{/tranDetail/EMI_HeaderSet/0/UnitTypeDesc}",align: ""}
							  ]}
					 ,{row1: [{type:"Label",value:"Contract Type",align: ""}
							  ,{type:"Text",value:"{/tranDetail/EMI_HeaderSet/0/ContractType}",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"Label",value:"CTS Area",align: ""}
							  ,{type:"Text",value:"{/tranDetail/EMI_HeaderSet/0/CtsArea}",align: ""}
							  ]}
					 ,{row1: [{type:"Label",value:"Sale Date",align: ""}
							  ,{type:"Text",value:"{/tranDetail/EMI_HeaderSet/0/SaleDate}",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"Label",value:"As-Built Area",align: ""}
							  ,{type:"Text",value:"{/tranDetail/EMI_HeaderSet/0/AsBuildArea}",align: ""}
							  ]}
					 ,{row1: [{type:"Label",value:"Payment Scheme",align: ""}
							  ,{type:"Text",value:"{/tranDetail/EMI_HeaderSet/0/PaymentScheme}",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"Label",value:"Main Unit or Parking Slot(s)",align: ""}
							  ,{type:"Text",value:"{/tranDetail/EMI_HeaderSet/0/AppParking}",align: ""}
							  ]}
					 ];
		
		var oLTODetails = formDynamic(oFields, [], [ '100px', '300px', '60px', '120px', '300px','5%' ]);

		//***************************** Payment Requirements ******************************************/
		var oFields = [{row1: [{type:"Label",value:"Required Deposit",align: ""}
							  ,{type:"Text",value:"{/tranDetail/EMI_PayReqSet/0/ReqDep}",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"Label",value:"Required Rental",align: ""}
							  ,{type:"Text",value:"{/tranDetail/EMI_PayReqSet/0/ReqRent}",align: ""}
							  ]}
		];

		var oREQDetails1 = formDynamic(oFields, [], [ '180px', '200px', '100px', '100px', '200px','30%' ]);

		var oFields = [{row1: [{type:"Label",value:"Total Cash & Credit Memo",align: ""}
							  ,{type:"Text",value:"{/tranDetail/EMI_PayReqSet/0/TotalCash}",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"",value:"",align: ""}
							  ]}
						,{row1: [{type:"Label",value:"Total Dated Check Payment",align: ""}
						  ,{type:"Text",value:"{/tranDetail/EMI_PayReqSet/0/TotalDated}",align: ""}
						  ,{type:"",value:"",align: ""}
						  ,{type:"",value:"",align: ""}
						  ]}
						,{row1: [{type:"Label",value:"Total PDC Checks Stored",align: ""}
						  ,{type:"Text",value:"{/tranDetail/EMI_PayReqSet/0/TotalPdc}",align: ""}
						  ,{type:"",value:"",align: ""}
						  ,{type:"",value:"",align: ""}
						  ]}
						,{row1: [{type:"Label",value:"Less: Debit Memo",align: ""}
						  ,{type:"Text",value:"{/tranDetail/EMI_PayReqSet/0/LessDebit}",align: ""}
						  ,{type:"",value:"",align: ""}
						  ,{type:"",value:"",align: ""}
						  ]}
						,{row1: [{type:"Label",value:"Submitted Requirement",align: ""}
						  ,{type:"Text",value:"{/tranDetail/EMI_PayReqSet/0/SubmReqAmt}",align: ""}
						  ,{type:"",value:"",align: ""}
						  ,{type:"Text",value:"{/tranDetail/EMI_PayReqSet/0/SubmReqPerc}",align: ""}
						  ]}
		];

		var oREQDetails2 = formDynamic(oFields, [ '', 'Amount', '', '', '','']
											  , [ '180px', '200px', '10%', '100px', '200px','30%' ]);
		//***************************** Payments ******************************************/
		var tblPayments = new sap.ui.table.Table({
            selectionMode : sap.ui.table.SelectionMode.Single,
        	selectionBehavior : sap.ui.table.SelectionBehavior.RowOnly,
        	editable: false,
        	height : "300px",
        	visibleRowCount: 5,
        	width: "96%",
            //cellClick : function(oEvent){
            //	tblItems.setSelectedIndex(oEvent.getParameter("rowIndex"));
            //},
			enabled : false 
		});
		
		tblPayments.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Particulars", textAlign: "Center"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "Particular"),
        	editable: false,
        	width: "34%"
        }));

		tblPayments.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Due", textAlign: "Center"}),
        	template: new sap.ui.commons.TextView({textAlign: "End"}).bindProperty("text", "DueAmt"),
        	editable: false,
        	width: "20%"
        }));

		tblPayments.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Paid", textAlign: "Center"}),
        	template: new sap.ui.commons.TextView({textAlign: "End"}).bindProperty("text", "PaidAmt"),
        	editable: false,
        	width: "20%"
        }));

		tblPayments.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Balance", textAlign: "Center"}),
        	template: new sap.ui.commons.TextView({textAlign: "End"}).bindProperty("text", "BalAmt"),
        	editable: false,
        	width: "20%"
        }));
/*
		tblPayments.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Remarks", textAlign: "Center"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "Remarks"),
        	editable: false,
        	width: "20%"
        }));
*/		
		tblPayments.setModel(this.getModel());
		tblPayments.bindRows("/tranDetail/payments");

		//***************************** Operation Requirements ******************************************/
		var tblOperations = new sap.ui.table.Table({
            selectionMode : sap.ui.table.SelectionMode.Single,
        	selectionBehavior : sap.ui.table.SelectionBehavior.RowOnly,
        	editable: false,
        	height : "300px",
        	width: "96%",
        	visibleRowCount: 6,
            //cellClick : function(oEvent){
            //	tblItems.setSelectedIndex(oEvent.getParameter("rowIndex"));
            //},
			enabled : false 
		});
		
		tblOperations.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "", textAlign: "Center"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "Particular"),
        	editable: false,
        	width: "40%"
        }));

		tblOperations.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Date/Number", textAlign: "Center"}),
        	template: new sap.ui.commons.TextView({textAlign: "End"}).bindProperty("text", "Date1"),
        	editable: false,
        	width: "20%"
        }));
/*
		tblOperations.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Remarks", textAlign: "Center"}),
        	template: new sap.ui.commons.TextView({textAlign: "End"}).bindProperty("text", "Remarks"),
        	editable: false,
        	width: "40%"
        }));
*/
		tblOperations.setModel(this.getModel());
		tblOperations.bindRows("/tranDetail/Operations");

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
  		//Basic Details
        var oAccordion1 = new sap.ui.commons.Accordion();
        oAccordion1.setWidth("99.8%")
        
        var oSection1 = new sap.ui.commons.AccordionSection();     
        oSection1.setTitle("General Details");		
        oSection1.setTooltip("General Details");
        oSection1.addContent( oLTODetails);
        oAccordion1.addSection( oSection1 );
        
        oCell = new sap.ui.commons.layout.MatrixLayoutCell({colSpan: 5, content: [oAccordion1]})
        oLayout.createRow(oCell);

     	//Operations Requirements
        var oPRLayout2 = new sap.ui.commons.layout.MatrixLayout({
			columns : 3,
			width : "100%",
			widths : [ '40%', '30%', '20%' ]
        });

        //Remarks 22
		var oTRemarks22 = new sap.ui.commons.TextArea({
			tooltip : "Remarks",
			value : '{/tranDetail/EMI_Remarks2Set}',
			width : "100%",
			rows : 6,
			enabled: false
		});
		
		//Remarks
        var oRemLayout2 = new sap.ui.commons.layout.MatrixLayout({
			columns : 1,
			width : "100%"
        });

		var oLblComments = new sap.ui.commons.Label({text : "Remarks"}).addStyleClass("font14ptBold").addStyleClass("underline");	
		oRemLayout2.createRow(oLblComments);
		
		var oTRemarks2 = new sap.ui.commons.TextArea({
			tooltip : "Remarks",
			value : '{/tranDetail/EMI_Remarks1Set}',
			width : "100%",
			rows : 8,
			enabled: false
		});
		oCell = new sap.ui.commons.layout.MatrixLayoutCell({
			colSpan : 1,
			hAlign : sap.ui.commons.layout.HAlign.Left,
			vAlign : sap.ui.commons.layout.VAlign.Top,
			content : [ oTRemarks2 ]
		});
		oRemLayout2.createRow(oCell);

		oPRLayout2.createRow(tblPayments, oRemLayout2,null);

		//***************************** Payment ******************************************/
		if (oEMI_Type == "EMI-CTS") {
			var oFields = [{row1: [{type:"Label",value:"On-Time Payments on Unit/PS/TTFE",align: ""}
								  ,{type:"Text",value:"{/tranDetail/EMI_PaymentSet/0/OnTimePayment}",align: ""}
								  ]}
							,{row1: [{type:"Label",value:"With some delinquency in payments on Unit/PS/TTFE",align: ""}
							  ,{type:"Text",value:"{/tranDetail/EMI_PaymentSet/0/WithDelin}",align: ""}
							  ]}
							,{row1: [{type:"Label",value:"With balance on Unit/PS/TTFE",align: ""}
							  ,{type:"Text",value:"{/tranDetail/EMI_PaymentSet/0/WithBalance}",align: ""}
							  ]}
			];
	
			var oPaymentCTS = formDynamic(oFields, [], [ '270px', '120px','30%' ]);
			

			oCell = new sap.ui.commons.layout.MatrixLayoutCell({
				colSpan : 1,
				hAlign : sap.ui.commons.layout.HAlign.Left,
				vAlign : sap.ui.commons.layout.VAlign.Top,
				content : [ oTRemarks22 ]
			});
			
			oPRLayout2.createRow(oPaymentCTS, oCell,null);
		}

        var oAccordion2 = new sap.ui.commons.Accordion();
        oAccordion2.setWidth("99.8%")
        
        var oSection2 = new sap.ui.commons.AccordionSection();     
        oSection2.setTitle('Payments');		
        oSection2.setTooltip('Payments');
        oSection2.addContent( oPRLayout2);
        oAccordion2.addSection( oSection2 );

        oCell = new sap.ui.commons.layout.MatrixLayoutCell({colSpan: 5, content: [oAccordion2]})
        oLayout.createRow(oCell);
		//***************************** Payment ******************************************/
		if (oEMI_Type == "EMI-CTS") {
			var oFields = [{row1: [{type:"Label",value:"Coordinated w/ TAG. Unit is ready for viewing & acceptance",align: ""}
								  ,{type:"Text",value:"{/tranDetail/EMI_ScheduleSet/0/ViewingLetter}",align: ""}
								  ]}
							,{row1: [{type:"Label",value:"Requested/Target Key Release Date",align: ""}
							  ,{type:"Text",value:"{/tranDetail/EMI_ScheduleSet/0/ReleaseDate}",align: ""}
							  ]}
							,{row1: [{type:"Label",value:"Target ATMI Regularization Date",align: ""}
							  ,{type:"Text",value:"{/tranDetail/EMI_ScheduleSet/0/ATMIRegDate}",align: ""}
							  ]}
			];
	
			var oSchedCTS = formDynamic(oFields, [], [ '300px', '120px','50%' ]);

	        var oAccordion3 = new sap.ui.commons.Accordion();
	        oAccordion3.setWidth("99.8%")
	        
	        var oSection3 = new sap.ui.commons.AccordionSection();     
	        oSection3.setTitle('Schedule');		
	        oSection3.setTooltip('Schedule');
	        oSection3.addContent( oSchedCTS);
	        oAccordion3.addSection( oSection3 );

	        oCell = new sap.ui.commons.layout.MatrixLayoutCell({colSpan: 5, content: [oAccordion3]})
	        oLayout.createRow(oCell);
	        
			var oFields = [{row1: [{type:"Label",value:"Pre-approved by higher management",align: ""}
								  ,{type:"Text",value:"{/tranDetail/EMI_OtherReqSet/0/PreApprove}",align: ""}
								  ]}
							,{row1: [{type:"Label",value:"DOU Bank",align: ""}
							  ,{type:"Text",value:"{/tranDetail/EMI_OtherReqSet/0/DuoBank}",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"Label",value:"DOU Amount",align: ""}
							  ,{type:"Text",value:"{/tranDetail/EMI_OtherReqSet/0/DuoAmount}",align: ""}
							  ]}
			];
	
			var oOtherCTS = formDynamic(oFields, [], [ '200px', '120px','8%','80px', '120px','30%' ]);

	        var oAccordion4 = new sap.ui.commons.Accordion();
	        oAccordion4.setWidth("99.8%")

			var oSection4 = new sap.ui.commons.AccordionSection();     
	        oSection4.setTitle('Other Requirements');		
	        oSection4.setTooltip('Other Requirements');
	        oSection4.addContent( oOtherCTS);
	        oAccordion4.addSection( oSection4 );

	        oCell = new sap.ui.commons.layout.MatrixLayoutCell({colSpan: 5, content: [oAccordion4]})
	        oLayout.createRow(oCell);
		}
		
     	//Payment Requirements
		if (oEMI_Type != "EMI-CTS") {
	        var oPRLayout = new sap.ui.commons.layout.MatrixLayout({
				columns : 3,
				width : "100%",
				widths : [ '40%', '30%', '30%' ]
	        });
	
			//Remarks
	        var oRemLayout = new sap.ui.commons.layout.MatrixLayout({
				columns : 1,
				width : "100%"
	        });
	
			var oLblComments = new sap.ui.commons.Label({text : "Remarks"}).addStyleClass("font14ptBold").addStyleClass("underline");	
			oRemLayout.createRow(oLblComments);
			
			oCell = new sap.ui.commons.layout.MatrixLayoutCell({
				colSpan : 2,
				hAlign : sap.ui.commons.layout.HAlign.Left,
				vAlign : sap.ui.commons.layout.VAlign.Top,
				content : [ oTRemarks22 ]
			});
			oRemLayout.createRow(oCell);
	
			oCell = new sap.ui.commons.layout.MatrixLayoutCell({
				colSpan : 2,
				hAlign : sap.ui.commons.layout.HAlign.Left,
				vAlign : sap.ui.commons.layout.VAlign.Bottom,
				content : [ oREQDetails1 ]
			});
			//oRemarks.createRow(null,oCell);
	
	        oPRLayout.createRow(oCell,null);
	        oPRLayout.createRow(oREQDetails2, oRemLayout,null);

	        var oAccordion5 = new sap.ui.commons.Accordion();
	        oAccordion5.setWidth("99.8%")
		
	        var oSection5 = new sap.ui.commons.AccordionSection();     
	        oSection5.setTitle("Payment Requirement");		
	        oSection5.setTooltip("Payment Requirement");
	        oSection5.addContent( oPRLayout);
	        oAccordion5.addSection( oSection5 );

	        oCell = new sap.ui.commons.layout.MatrixLayoutCell({colSpan: 5, content: [oAccordion5]})
	        oLayout.createRow(oCell);
		}
		
     	//Operations Requirements
        var oPRLayout1 = new sap.ui.commons.layout.MatrixLayout({
			columns : 3,
			width : "100%",
			widths : [ '40%', '30%', '20%' ]
        });
        
		//Remarks
        var oRemLayout1 = new sap.ui.commons.layout.MatrixLayout({
			columns : 1,
			width : "100%"
        });

		var oLblComments = new sap.ui.commons.Label({text : "Remarks"}).addStyleClass("font14ptBold").addStyleClass("underline");	
		oRemLayout1.createRow(oLblComments);
		
		var oTRemarks1 = new sap.ui.commons.TextArea({
			tooltip : "Remarks",
			value : '{/tranDetail/EMI_Remarks3Set}',
			width : "100%",
			rows : 10,
			enabled: false
		});
		oCell = new sap.ui.commons.layout.MatrixLayoutCell({
			colSpan : 1,
			hAlign : sap.ui.commons.layout.HAlign.Left,
			vAlign : sap.ui.commons.layout.VAlign.Top,
			content : [ oTRemarks1 ]
		});
		oRemLayout1.createRow(oCell);

		oPRLayout1.createRow(tblOperations, oRemLayout1,null);
        

        var oAccordion6 = new sap.ui.commons.Accordion();
        oAccordion6.setWidth("99.8%")
        
        var oSection6 = new sap.ui.commons.AccordionSection();     
        oSection6.setTitle("Operations Requirements");		
        oSection6.setTooltip("Operations Requirements");
        oSection6.addContent( oPRLayout1);
        oAccordion6.addSection( oSection6 );

        oCell = new sap.ui.commons.layout.MatrixLayoutCell({colSpan: 5, content: [oAccordion6]})
        oLayout.createRow(oCell);
        
        //Attachments

        var oAccordion7 = new sap.ui.commons.Accordion();
        oAccordion7.setWidth("99.8%")

        var oSection7 = new sap.ui.commons.AccordionSection();     
        oSection7.setTitle("Attachments");		
        oSection7.setTooltip("Attachments");
        oSection7.addContent( oTableDocs);
        oAccordion7.addSection( oSection7 );

        oCell = new sap.ui.commons.layout.MatrixLayoutCell({colSpan: 5, content: [oAccordion7]})
        oLayout.createRow(oCell);
       
     	//Approval Path
        var oAccordion8 = new sap.ui.commons.Accordion();
        oAccordion8.setWidth("99.8%")

        var oSection8 = new sap.ui.commons.AccordionSection();     
        oSection8.setTitle("Approval Path");		
        oSection8.setTooltip("Approval Path");
        oSection8.addContent( tblApprovers);
        oAccordion8.addSection( oSection8 );

        oCell = new sap.ui.commons.layout.MatrixLayoutCell({colSpan: 5, content: [oAccordion8]})
        oLayout.createRow(oCell);
        
        //Approver's Remarks
        var oAccordion9 = new sap.ui.commons.Accordion();
        oAccordion9.setWidth("99.8%")

        var oSection9 = new sap.ui.commons.AccordionSection();     
        oSection9.setTitle("Approver's Remarks");		
        oSection9.setTooltip("Approver's Remarks");
        oSection9.addContent( oRemarksLayout);
        oAccordion9.addSection( oSection9 );

        oCell = new sap.ui.commons.layout.MatrixLayoutCell({colSpan: 5, content: [oAccordion9]})
        oLayout.createRow(oCell);

        //oCell = new sap.ui.commons.layout.MatrixLayoutCell({colSpan: 5, content: [oAccordion]})
        //oLayout.createRow(oCell);
        
        //************************  BUTTONS *********************************************/
		jQuery.sap.require("sap.ui.commons.MessageBox");
		var oBtnApprove = new sap.ui.commons.Button(sessionCache["pageID"] + "oBtnApprove",{
			tooltip : "Approve Early Move-In",
			width : "100px",
			height : "30px",
			text : "Approve",
			press : function() {
				sap.ui.commons.MessageBox.show(
					      "Are you sure you want to approve request for Early Move-In?",
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
			tooltip : "Disapprove Early Move-In",
			width : "100px",
			height : "30px",
			text : "Disapprove",
			press : function() {
				sap.ui.commons.MessageBox.show(
					      "Are you sure you want to disapprove request for Early Move-In",
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