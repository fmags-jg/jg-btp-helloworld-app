sap.ui.jsview("views.Buyer.UpgradeDowngrade", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf views.Buyer.UpgradeDowngrade
	*/ 
	getControllerName : function() {
		return "views.Buyer.UpgradeDowngrade";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf views.Buyer.UpgradeDowngrade
	*/ 
	createContent : function(oController) {
		var oCell;
		
		//Create a matrix layout for Panel
        var oLayout = new sap.ui.commons.layout.MatrixLayout({
			columns : 5,
			width : "100%",
			widths : [ '100px', '150px', '60%', '120px', '120px' ]});

        var lblReqNo = new sap.ui.commons.Label({text: "AA Number: " , design: sap.ui.commons.LabelDesign.Bold, icon: "sap-icon://employee-approvals"});
        lblReqNo.addStyleClass("layoutTitle");

		var oTFReqNo = new sap.ui.commons.TextField({
			width : "100%",
			value : '{/tranDetail/Refnumber}',
			editable: false
		});
		oTFReqNo.addStyleClass("layoutTitle");

		lblReqNo.setLabelFor(oTFReqNo);

    	//Layout 1 Title
        var oCellReqNoLbl = new sap.ui.commons.layout.MatrixLayoutCell({vAlign : sap.ui.commons.layout.VAlign.Bottom});

        oCellReqNoLbl.setHAlign(sap.ui.commons.layout.HAlign.Begin);
        oCellReqNoLbl.addContent(lblReqNo);
        oCellReqNoLbl.addStyleClass("noPads");

        var oCellReqNo = new sap.ui.commons.layout.MatrixLayoutCell({vAlign : sap.ui.commons.layout.VAlign.Bottom, colSpan: 2});
        oCellReqNo.addContent(oTFReqNo);
        oCellReqNo.addStyleClass("noPads");

        ///////////////////////////////////
        var lblDateSub = new sap.ui.commons.Label({text: "Date Submitted: " , design: sap.ui.commons.LabelDesign.Bold});
        lblDateSub.addStyleClass("layoutTitle");

		var oTFDateSub = new sap.ui.commons.TextField({
			width : "100%",
			value : '{/tranDetail/Date}',
			editable: false
		});
		oTFDateSub.addStyleClass("layoutTitle");

		lblDateSub.setLabelFor(oTFDateSub);

        var oCellDateSubLbl = new sap.ui.commons.layout.MatrixLayoutCell({vAlign : sap.ui.commons.layout.VAlign.Bottom});

        oCellDateSubLbl.setHAlign(sap.ui.commons.layout.HAlign.Begin);
        oCellDateSubLbl.addContent(lblDateSub);
        oCellDateSubLbl.addStyleClass("noPads");

        var oCellDateSub = new sap.ui.commons.layout.MatrixLayoutCell({vAlign : sap.ui.commons.layout.VAlign.Bottom});
        oCellDateSub.addContent(oTFDateSub);
        oCellDateSub.addStyleClass("noPads");
        ///////////////////////////////////

        var oRow = new sap.ui.commons.layout.MatrixLayoutRow();
        oLayout.addRow(oRow);
		oRow.addStyleClass("layoutTitle");
		
        oRow.addCell(oCellReqNoLbl);
        oRow.addCell(oCellReqNo);
        oRow.addCell(null);
        oRow.addCell(oCellDateSubLbl);
        oRow.addCell(oCellDateSub);
        ////////////////////////////////////////////////////////////////////////////////////////////////////
       
		var oFields = [{row1: [{type:"Label",value:"Client Name",align: ""}
							  ,{type:"Text",value:"{/tranDetail/Name}",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"Label",value:"JG Summit Employee",align: ""}
							  ,{type:"Text",value:"{/tranDetail/Employee}",align: ""}
							  ]}
		];

		var oBasicInfo = formDynamic(oFields ,[]
									,[ '80px', '200px','8%', '120px', '150px','30%' ]
									);
		
		//***************************** CURRENT UNIT ******************************************/
		var tblCurrUnit = new sap.ui.table.Table({
            selectionMode : sap.ui.table.SelectionMode.Single,
        	selectionBehavior : sap.ui.table.SelectionBehavior.RowOnly,
        	editable: false,
        	height : "300px",
        	visibleRowCount: 1,
            //cellClick : function(oEvent){
            //	tblItems.setSelectedIndex(oEvent.getParameter("rowIndex"));
            //},
			enabled : false 
		});


		tblCurrUnit.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Building"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "Project"),
        	editable: false,
        	width: "40%"
        }));

		tblCurrUnit.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Unit"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "Unit"),
        	editable: false,
        	width: "15%"
        }));

		tblCurrUnit.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Unit Type"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "UnitType"),
        	editable: false,
        	width: "15%"
        }));

		tblCurrUnit.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Total Floor Area(SQM)"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "FloorArea"),
        	editable: false,
        	width: "15%"
        }));

		tblCurrUnit.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Date of Sale"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "SaleDate"),
        	editable: false,
        	width: "15%"
        }));

		tblCurrUnit.setModel(this.getModel());
		tblCurrUnit.bindRows("/tranDetail/CurrentUnit"); 
		//************************ CURRENT UNIT *******************************************/
		
		//***************************** NEW UNIT ******************************************/
		var tblNewUnit = new sap.ui.table.Table({
            selectionMode : sap.ui.table.SelectionMode.Single,
        	selectionBehavior : sap.ui.table.SelectionBehavior.RowOnly,
        	editable: false,
        	height : "300px",
        	visibleRowCount: 1,
            //cellClick : function(oEvent){
            //	tblItems.setSelectedIndex(oEvent.getParameter("rowIndex"));
            //},
			enabled : false 
		});

		tblNewUnit.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Building"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "Project"),
        	editable: false,
        	width: "40%"
        }));

		tblNewUnit.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Unit"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "Unit"),
        	editable: false,
        	width: "15%"
        }));

		tblNewUnit.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Unit Type"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "UnitType"),
        	editable: false,
        	width: "15%"
        }));

		tblNewUnit.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Total Floor Area(SQM)"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "FloorArea"),
        	editable: false,
        	width: "15%"
        }));

		tblNewUnit.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Date of Sale"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "SaleDate"),
        	editable: false,
        	width: "15%"
        }));

		tblNewUnit.setModel(this.getModel());
		tblNewUnit.bindRows("/tranDetail/NewUnit"); 
		//************************ NEW UNIT *******************************************/

		var oFields = [{row1: [{type:"Label",value:"NPV Rate",align: ""}
					  ,{type:"Text",value:"{/tranDetail/CurrentAmount/0/Npv}",align: "End"}
					  ,{type:"",value:"",align: ""}
					  ,{type:"",value:"",align: ""}
					  ,{type:"",value:"",align: ""}
					  ,{type:"",value:"",align: ""}
					  ,{type:"",value:"",align: ""}
					  ]}
					
					,{row1: [{type:"Label",value:"Gross TCP",align: ""}
							  ,{type:"Text",value:"{/tranDetail/CurrentAmount/0/GrossTcp}",align: "End"}
							  ,{type:"",value:"",align: ""}
							  ,{type:"Text",value:"{/tranDetail/ProposedAmount/0/GrossTcp}",align: "End"}
							  ,{type:"",value:"",align: ""}
							  ,{type:"Text",value:"{/tranDetail/Adjustment/0/GrossTcp}",align: "End"}
							  ,{type:"",value:"",align: ""}
							  ]}
		///*
		    		 ,{row1: [{type:"Label",value:"Fall In Between Adjustment",align: ""}
							  ,{type:"Text",value:"{/tranDetail/CurrentAmount/0/FibAdj}",align: "End"}
							  ,{type:"",value:"",align: ""}
							  ,{type:"Text",value:"{/tranDetail/ProposedAmount/0/FibAdj}",align: "End"}
							  ,{type:"",value:"",align: ""}
							  ,{type:"Text",value:"{/tranDetail/Adjustment/0/FibAdj}",align: "End"}
							  ,{type:"",value:"",align: ""}
							  ]}
		//*/
		    		 ,{row1: [{type:"Label",value:"Less: Discount/Rebate",align: ""}
							  ,{type:"Text",value:"{/tranDetail/CurrentAmount/0/Discount}",align: "End"}
							  ,{type:"",value:"",align: ""}
							  ,{type:"Text",value:"{/tranDetail/ProposedAmount/0/Discount}",align: "End"}
							  ,{type:"",value:"",align: ""}
							  ,{type:"Text",value:"{/tranDetail/Adjustment/0/Discount}",align: "End"}
							  ,{type:"",value:"",align: ""}
							  ]}
		    		 ,{row1: [{type:"Label",value:"Net TCP",align: ""}
							  ,{type:"Text",value:"{/tranDetail/CurrentAmount/0/NetTcp}",align: "End"}
							  ,{type:"",value:"",align: ""}
							  ,{type:"Text",value:"{/tranDetail/ProposedAmount/0/NetTcp}",align: "End"}
							  ,{type:"",value:"",align: ""}
							  ,{type:"Text",value:"{/tranDetail/Adjustment/0/NetTcp}",align: "End"}
							  ,{type:"",value:"",align: ""}
							  ]}
		    		 ,{row1: [{type:"Label",value:"Total TCP Payments",align: ""}
							  ,{type:"Text",value:"{/tranDetail/CurrentAmount/0/TotalTcp}",align: "End"}
							  ,{type:"",value:"",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"",value:"",align: ""}
							  ]}
		    		 /*//commented as requested by Miracris Trangia 4.18.2016
		    		 ,{row1: [{type:"Label",value:"Amount to be Forfeited",align: ""}
							  ,{type:"Text",value:"<MISSING FIELD>",align: "End"}
							  ,{type:"",value:"",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"",value:"",align: ""}
							  ]}
					  */
		    		 ,{row1 :[]}
		    		 ,{row1: [{type:"Label",value:"Amount to be Applied as Payment",align: ""}
							  ,{type:"Text",value:"{/tranDetail/CurrentAmount/0/AppliedPay}",align: "End"}
							  ,{type:"",value:"",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"",value:"",align: ""}
					  ]}
		    		 /*//commented as requested by Miracris Trangia 4.18.2016
		    		 ,{row1: [{type:"Label",value:"Net Amount for Restructuring",align: ""}
							  ,{type:"Text",value:"<MISSING FIELD>",align: "End"}
							  ,{type:"",value:"",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"",value:"",align: ""}
						  ]}
				    */
		    		 ,{row1: []}
		    		 ,{row1: [{type:"Label",value:"Payment Scheme",align: ""}
							  ,{type:"Text",value:"{/tranDetail/CurrentAmount/0/PayschemeNo}",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"Text",value:"{/tranDetail/ProposedAmount/0/PayschemeNo}",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"",value:"",align: ""}
					  ]}
		    		 ,{row1: [{type:"Label",value:"Turn-over Taxes, Fees & Expenses",align: ""}
							  ,{type:"Text",value:"{/tranDetail/CurrentAmount/0/Ttfe}",align: "End"}
							  ,{type:"",value:"",align: ""}
							  ,{type:"Text",value:"{/tranDetail/ProposedAmount/0/Ttfe}",align: "End"}
							  ,{type:"",value:"",align: ""}
							  ,{type:"Text",value:"{/tranDetail/Adjustment/0/Ttfe}",align: "End"}
							  ,{type:"",value:"",align: ""}
					  ]}
		    		 ];

		var oBasicInfo2 = formDynamic(oFields ,[ '', 'CURRENT', '', 'PROPOSED', '','ADJUSTMENT','']
									,[ '200px', '150px','5%', '150px','5%','150px', '20%' ]
									);

		var oFields = [{row1: [{type:"Label",value:"Payment Scheme Type",align: ""}
							  ,{type:"Text",value:"{/tranDetail/CurrentScheme/0/PayschemeType}",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"Text",value:"{/tranDetail/ProposedScheme/0/PayschemeType}",align: ""}
					  ]}
					 ,{row1: [{type:"Label",value:"Scheme Overview",align: ""}
					  		 ,{type:"Text",value:"{/tranDetail/CurrentScheme/0/Overview}",align: ""}
							  ,{type:"",value:"",align: ""}
						  		 ,{type:"Text",value:"{/tranDetail/ProposedScheme/0/Overview}",align: ""}
					  ]}
					 ,{row1: [{type:"Label",value:"RF Deduction",align: ""}
					 		 ,{type:"Text",value:"{/tranDetail/CurrentScheme/0/RfDeduction}",align: ""}
							  ,{type:"",value:"",align: ""}
					 		 ,{type:"Text",value:"{/tranDetail/ProposedScheme/0/RfDeduction}",align: ""}
					  ]}
					 ,{row1: [{type:"Label",value:"Payment Type",align: ""}
			 		 		,{type:"Text",value:"{/tranDetail/CurrentScheme/0/Paytype}",align: ""}
							  ,{type:"",value:"",align: ""}
				 		 		,{type:"Text",value:"{/tranDetail/ProposedScheme/0/Paytype}",align: ""}
			 		  ]}
					 ,{row1: [{type:"Label",value:"Reservation Date",align: ""}
		 		 			 ,{type:"Text",value:"{/tranDetail/CurrentScheme/0/ReserveDate}",align: ""}
							  ,{type:"",value:"",align: ""}
			 		 			 ,{type:"Text",value:"{/tranDetail/ProposedScheme/0/ReserveDate}",align: ""}
		 		 	  ]}
					 ,{row1: [{type:"Label",value:"Reservation Fee",align: ""}
		 		 			 ,{type:"Text",value:"{/tranDetail/CurrentScheme/0/ReserveFee}",align: "End"}
							  ,{type:"",value:"",align: ""}
			 		 			 ,{type:"Text",value:"{/tranDetail/ProposedScheme/0/ReserveFee}",align: "End"}
		 		 	  ]}
					 ,{row1: []}
					 ,{row1: [{type:"Label",value:"Total Down Payment",align: ""}
		 		 			 ,{type:"Text",value:"{/tranDetail/CurrentScheme/0/DpAmt}",align: "End"}
							  ,{type:"",value:"",align: ""}
			 		 			 ,{type:"Text",value:"{/tranDetail/ProposedScheme/0/DpAmt}",align: "End"}
		 		 	  ]}
					 ,{row1: [{type:"Label",value:"Number of Months/Monthly",align: ""}
		 		 			 ,{type:"Text",value:"{/tranDetail/CurrentScheme/0/DpMos}",align: ""}
							  ,{type:"",value:"",align: ""}
			 		 			 ,{type:"Text",value:"{/tranDetail/ProposedScheme/0/DpMos}",align: ""}
		 		 	  ]}
					 ,{row1: [{type:"Label",value:"Down Payment Period",align: ""}
		 		 			 ,{type:"Text",value:"{/tranDetail/CurrentScheme/0/DpPeriod}",align: ""}
							  ,{type:"",value:"",align: ""}
			 		 			 ,{type:"Text",value:"{/tranDetail/ProposedScheme/0/DpPeriod}",align: ""}
		 		 	  ]}
					 ,{row1: []}
					 ,{row1: [{type:"Label",value:"Total Installment",align: ""}
		 		 			 ,{type:"Text",value:"{/tranDetail/CurrentScheme/0/InstPrinAmt}",align: "End"}
							  ,{type:"",value:"",align: ""}
			 		 			 ,{type:"Text",value:"{/tranDetail/ProposedScheme/0/InstPrinAmt}",align: "End"}
		 		 	  ]}
					 ,{row1: [{type:"Label",value:"Interest Rate",align: ""}
		 		 			 ,{type:"Text",value:"{/tranDetail/CurrentScheme/0/InstIntRate}",align: "End"}
							  ,{type:"",value:"",align: ""}
			 		 			 ,{type:"Text",value:"{/tranDetail/ProposedScheme/0/InstIntRate}",align: "End"}
		 		 	  ]}
					 ,{row1: [{type:"Label",value:"Number of Months/Monthly",align: ""}
		 		 			 ,{type:"Text",value:"{/tranDetail/CurrentScheme/0/InstPrinMos}",align: ""}
							  ,{type:"",value:"",align: ""}
			 		 			 ,{type:"Text",value:"{/tranDetail/ProposedScheme/0/InstPrinMos}",align: ""}
		 		 	  ]}
					 ,{row1: [{type:"Label",value:"Installment Period",align: ""}
		 		 			 ,{type:"Text",value:"{/tranDetail/CurrentScheme/0/InstPrinPeriod}",align: ""}
							  ,{type:"",value:"",align: ""}
			 		 			 ,{type:"Text",value:"{/tranDetail/ProposedScheme/0/InstPrinPeriod}",align: ""}
		 		 	  ]}
					 ,{row1: []}
					 ,{row1: [{type:"Label",value:"Total Retention",align: ""}
		 		 			 ,{type:"Text",value:"{/tranDetail/CurrentScheme/0/RetAmt}",align: "End"}
							  ,{type:"",value:"",align: ""}
			 		 			 ,{type:"Text",value:"{/tranDetail/ProposedScheme/0/RetAmt}",align: "End"}
		 		 	  ]}
					 ,{row1: [{type:"Label",value:"Number of Months/Monthly",align: ""}
		 		 			 ,{type:"Text",value:"{/tranDetail/CurrentScheme/0/RetMos}",align: ""}
							  ,{type:"",value:"",align: ""}
			 		 			 ,{type:"Text",value:"{/tranDetail/ProposedScheme/0/RetMos}",align: ""}
		 		 	  ]}
					 ,{row1: [{type:"Label",value:"Retention Period",align: ""}
		 		 			 ,{type:"Text",value:"{/tranDetail/CurrentScheme/0/RetPeriod}",align: ""}
							  ,{type:"",value:"",align: ""}
			 		 			 ,{type:"Text",value:"{/tranDetail/ProposedScheme/0/RetPeriod}",align: ""}
		 		 	  ]}
					 ,{row1: []}
					 ,{row1: [{type:"Label",value:"Total TTFE",align: ""}
		 		 			 ,{type:"Text",value:"{/tranDetail/CurrentScheme/0/TtfeAmt}",align: "End"}
							  ,{type:"",value:"",align: ""}
			 		 			 ,{type:"Text",value:"{/tranDetail/ProposedScheme/0/TtfeAmt}",align: "End"}
		 		 	  ]}
					 ,{row1: [{type:"Label",value:"TTFE Period",align: ""}
		 		 			 ,{type:"Text",value:"{/tranDetail/CurrentScheme/0/TtfePeriod}",align: ""}
							  ,{type:"",value:"",align: ""}
			 		 			 ,{type:"Text",value:"{/tranDetail/ProposedScheme/0/TtfePeriod}",align: ""}
		 		 	  ]}
					  ];

		var oSummary = formDynamic(oFields ,[ '', 'Current','','Proposed']
									,[ '200px', '150px', '5%', '150px','35%' ]
									);
		
		//***************************** RECOMMENDATION ******************************************/		
        var oRecomm = new sap.ui.commons.layout.MatrixLayout({
			columns : 6,
			width : "100%",
			widths : [ '80px', '140px', '30%', '120px', '140px', '30%' ]
        });

		//var oLRemarks = new sap.ui.commons.Label({text : "Remarks: "});	
		//oRemarks.createRow(null,oLRemarks);
		
		var oTRecomm = new sap.ui.commons.TextArea({
			tooltip : "Recommendation",
			value : '{/tranDetail/Recommendation}',
			width : "100%",
			rows : 5,
			enabled: false
		});

		oCell = new sap.ui.commons.layout.MatrixLayoutCell({
			colSpan : 4,
			hAlign : sap.ui.commons.layout.HAlign.Left,
			vAlign : sap.ui.commons.layout.VAlign.Bottom,
			content : [ oTRecomm ]
		});
		
		oRecomm.createRow(null,oCell);
		
		//***************************** REMARKS ******************************************/		
        var oRemarks = new sap.ui.commons.layout.MatrixLayout({
			columns : 6,
			width : "100%",
			widths : [ '80px', '140px', '30%', '120px', '140px', '30%' ]
        });

		//var oLRemarks = new sap.ui.commons.Label({text : "Remarks: "});	
		//oRemarks.createRow(null,oLRemarks);
		
		var oTRemarks = new sap.ui.commons.TextArea({
			tooltip : "Recommendation",
			value : '{/tranDetail/Remarks}',
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

		//***************************** PAYMENT APPLICATION ******************************************/
/* Christian de Leon 05/16/2018
		var tblPayment = new sap.ui.table.Table({
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


		tblPayment.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Particulars"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "Particular"),
        	editable: false,
        	width: "50%"
        }));

		tblPayment.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Amount"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "Amount"),
        	editable: false,
        	width: "25%"
        }));


		tblPayment.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Amount Paid"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "AmountPaid"),
        	editable: false,
        	width: "25%"
        }));
		
		tblPayment.setModel(this.getModel());
		tblPayment.bindRows("/tranDetail/Particulars"); 
*/
		//************************ PAYMENT APPLICATION *******************************************/

		//***************************** PROPOSED PAYMENT ******************************************/
		var tblProposedPay = new sap.ui.table.Table({
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


		tblProposedPay.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Due Date",textAlign: "Center"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "DueDate"),
        	editable: false,
        	width: "15%"
        }));

		tblProposedPay.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Particulars",textAlign: "Center"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "Type"),
        	editable: false,
        	width: "25%"
        }));

		tblProposedPay.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "TCP",textAlign: "Center"}),
        	template: new sap.ui.commons.TextView({textAlign: "End"}).bindProperty("text", "Tcp"),
        	editable: false,
        	width: "15%"
        }));

		tblProposedPay.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "TTFE",textAlign: "Center"}),
        	template: new sap.ui.commons.TextView({textAlign: "End"}).bindProperty("text", "Ttfe"),
        	editable: false,
        	width: "15%"
        }));

		tblProposedPay.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Total",textAlign: "Center"}),
        	template: new sap.ui.commons.TextView({textAlign: "End"}).bindProperty("text", "Total"),
        	editable: false,
        	width: "15%"
        }));

		tblProposedPay.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Payment For Application",textAlign: "Center"}),
        	template: new sap.ui.commons.TextView({textAlign: "End"}).bindProperty("text", "Status"),
        	editable: false,
        	width: "15%"
        }));
		tblProposedPay.setModel(this.getModel());
		tblProposedPay.bindRows("/tranDetail/PaySchedule"); 
		//************************ PROPOSED PAYMENT*******************************************/


		//***************************** PROPOSED PAYMENT ******************************************/
		var tblContracts = new sap.ui.table.Table({
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


		tblContracts.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Contract",textAlign: "Center"}),
        	template: new sap.ui.commons.TextView({textAlign: "End"}).bindProperty("text", "Recnnr"),
        	editable: false,
        	width: "10%"
        }));

		tblContracts.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Unit",textAlign: "Center"}),
        	template: new sap.ui.commons.TextView({textAlign: "End"}).bindProperty("text", "Smenr"),
        	editable: false,
        	width: "15%"
        }));

		tblContracts.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "TCP",textAlign: "Center"}),
        	template: new sap.ui.commons.TextView({textAlign: "End"}).bindProperty("text", "Tcp"),
        	editable: false,
        	width: "10%"
        }));

		tblContracts.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "TPM",textAlign: "Center"}),
        	template: new sap.ui.commons.TextView({textAlign: "End"}).bindProperty("text", "TotalPayments"),
        	editable: false,
        	width: "10%"
        }));

		tblContracts.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "%TPM",textAlign: "Center"}),
        	template: new sap.ui.commons.TextView({textAlign: "End"}).bindProperty("text", "PercentagePaid"),
        	editable: false,
        	width: "10%"
        }));

		tblContracts.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Payment Status",textAlign: "Center"}),
        	template: new sap.ui.commons.TextView({textAlign: "End"}).bindProperty("text", "PStat"),
        	editable: false,
        	width: "10%"
        }));
		tblContracts.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Contract Status",textAlign: "Center"}),
        	template: new sap.ui.commons.TextView({textAlign: "End"}).bindProperty("text", "Stat"),
        	editable: false,
        	width: "10%"
        }));
		tblContracts.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Lacking/Conditional Docs",textAlign: "Center"}),
        	template: new sap.ui.commons.TextView({textAlign: "End"}).bindProperty("text", "Lacking"),
        	editable: false,
        	//width: "15%"
        }));
		tblContracts.setModel(this.getModel());
		tblContracts.bindRows("/tranDetail/RelatedContracts"); 
		//************************ RELATED CONTRACTS *******************************************/

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
        	label: new sap.ui.commons.Label({text: "Alternative Approver"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "AlternateName"),
        	editable: false,
        	width: "300px"
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
		tblApprovers.bindRows("/tranDetail/Approver"); 
		//************************ APPROVAL PATH*******************************************/

		//************************* REMARKS ***********************************************/

        var oRemarksLayout = new sap.ui.commons.layout.MatrixLayout({
			columns : 6,
			width : "100%",
			widths : [ '80px', '140px', '30%', '120px', '140px', '30%' ]
        });
  		
		/*var oLblDisStat = new sap.ui.commons.Label({text : "Disapproval Status: "});	
		var oCbDisStat = new sap.ui.commons.ComboBox({
			width: "130px",
			items : [
			         new sap.ui.core.ListItem({text: ""}),
			         new sap.ui.core.ListItem({text: "Terminate"}),
			         new sap.ui.core.ListItem({text: "Resubmit"})
			         ]
		});*/
		/*oCell1 = new sap.ui.commons.layout.MatrixLayoutCell({
			colSpan : 2,
			hAlign : sap.ui.commons.layout.HAlign.Left,
			vAlign : sap.ui.commons.layout.VAlign.Bottom,
			content : [ oLblDisStat ]
		});*/
		/*oCell2 = new sap.ui.commons.layout.MatrixLayoutCell({
			colSpan : 2,
			hAlign : sap.ui.commons.layout.HAlign.Left,
			vAlign : sap.ui.commons.layout.VAlign.Bottom,
			content : [ oCbDisStat ]
		});
		oRemarksLayout.createRow(null,oLblDisStat,oCell2);*/
		
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
        
     	//Payment Application
        var oBasicInfoLayout = new sap.ui.commons.layout.MatrixLayout({
			columns : 1,
			width : "100%"
			//widths : [ '50%', '50%' ]
        });
        
        oBasicInfoLayout.createRow(oBasicInfo);
        oBasicInfoLayout.createRow(null);

		var oLblCurrent = new sap.ui.commons.Label({text : "Current Unit"}).addStyleClass("font14ptBold").addStyleClass("underline");
		oBasicInfoLayout.createRow(oLblCurrent);
		
        oBasicInfoLayout.createRow(tblCurrUnit);
        oBasicInfoLayout.createRow(null);

		var oLblNew = new sap.ui.commons.Label({text : "New Unit"}).addStyleClass("font14ptBold").addStyleClass("underline");
		oBasicInfoLayout.createRow(oLblNew);
        oBasicInfoLayout.createRow(tblNewUnit);

        oBasicInfoLayout.createRow(null);
        oBasicInfoLayout.createRow(oBasicInfo2);
        
     	//Basic Details
        var oSection1 = new sap.ui.commons.AccordionSection();     
        oSection1.setTitle("Basic Details");		
        oSection1.setTooltip("Basic Details");
        oSection1.addContent( oBasicInfoLayout);
        oAccordion.addSection( oSection1 );

        oCell = new sap.ui.commons.layout.MatrixLayoutCell({colSpan: 5, content: [oAccordion]})
        oLayout.createRow(oCell);
/* Christian de Leon 05/16/2018
        oAccordion = new sap.ui.commons.Accordion();
        oAccordion.setWidth("99.8%")
     	//Payment
        var oSection1a = new sap.ui.commons.AccordionSection();     
        oSection1a.setTitle("Payment Application");		
        oSection1a.setTooltip("Payment Application");
        oSection1a.addContent( tblPayment);
        oAccordion.addSection( oSection1a );

        oCell = new sap.ui.commons.layout.MatrixLayoutCell({colSpan: 3, content: [oAccordion]})
        oLayout.createRow(oCell);
*/     
     	//Summary
        oAccordion = new sap.ui.commons.Accordion();
        oAccordion.setWidth("99.8%")
        var oSection2 = new sap.ui.commons.AccordionSection();     
        oSection2.setTitle("Summary");		
        oSection2.setTooltip("Summary");
        oSection2.addContent( oSummary);
        oAccordion.addSection( oSection2 );

        oCell = new sap.ui.commons.layout.MatrixLayoutCell({colSpan: 5, content: [oAccordion]})
        oLayout.createRow(oCell);

        oAccordion = new sap.ui.commons.Accordion();
        oAccordion.setWidth("99.8%")
     	//Proposed Payment Schedule Details
        var oSection3 = new sap.ui.commons.AccordionSection();     
        oSection3.setTitle("Proposed Payment Schedule Details");		
        oSection3.setTooltip("Proposed Payment Schedule Details");
        oSection3.addContent( tblProposedPay);
        oAccordion.addSection( oSection3 );

        oCell = new sap.ui.commons.layout.MatrixLayoutCell({colSpan: 5, content: [oAccordion]})
        oLayout.createRow(oCell);

        oAccordion = new sap.ui.commons.Accordion();
        oAccordion.setWidth("99.8%")
        
     	//Related Contracts
        var oSection3b = new sap.ui.commons.AccordionSection();     
        oSection3b.setTitle("Related Contracts");		
        oSection3b.setTooltip("Related Contracts");
        oSection3b.addContent( tblContracts);
        oAccordion.addSection( oSection3b );

        oCell = new sap.ui.commons.layout.MatrixLayoutCell({colSpan: 5, content: [oAccordion]})
        oLayout.createRow(oCell);

        oAccordion = new sap.ui.commons.Accordion();
        oAccordion.setWidth("99.8%")
        
     	//Background and Recommendation
        var oSection3a = new sap.ui.commons.AccordionSection();     
        oSection3a.setTitle("Background and Recommendation");		
        oSection3a.setTooltip("Background and Recommendation");
        oSection3a.addContent( oRecomm);
        oAccordion.addSection( oSection3a );

        oCell = new sap.ui.commons.layout.MatrixLayoutCell({colSpan: 5, content: [oAccordion]})
        oLayout.createRow(oCell);

        oAccordion = new sap.ui.commons.Accordion();
        oAccordion.setWidth("99.8%")
        
     	//Remarks
        var oSection3b = new sap.ui.commons.AccordionSection();     
        oSection3b.setTitle("Remarks");		
        oSection3b.setTooltip("Remarks");
        oSection3b.addContent( oRemarks);
        oAccordion.addSection( oSection3b );

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
			tooltip : "Approve Upgrade/Downgrade",
			width : "100px",
			height : "30px",
			text : "Approve",
			press : function() {
				sap.ui.commons.MessageBox.show(
					      "Are you sure you want to approve request for Upgrade/Downgrade?",
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
									if (oController.approveDisapprove("APPROVE",tdlines,"")) {
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
		
		//*******************************************DIALOG FOR DISAPPROVAL STATUS**************************************//	
		var oLayoutDisStat = new sap.ui.commons.layout.MatrixLayout({
			columns : 2,
			width: "100%", 
			widths: ['35%','65%']
		});

		var oLblDisStat = new sap.ui.commons.Label({text : "Disapproval Status: "});	
		var oCbDisStat = new sap.ui.commons.ComboBox({
			width: "130px",
			items : [
			         new sap.ui.core.ListItem({text: ""}),
			         new sap.ui.core.ListItem({text: "Terminate"}),
			         new sap.ui.core.ListItem({text: "Resubmit"})
			         ]
		});
		oCbDisStat.setValue("");
		oLayoutDisStat.createRow(oLblDisStat,oCbDisStat);
  		var oDialogDisStat = new sap.ui.commons.Dialog({
  			modal: true, 
  			width : "380px",
  			title: "Select Disapproval Status",
  			content: [oLayoutDisStat],
  			showCloseButton: false
  		});
  		oDialogDisStat.attachBrowserEvent("keydown", function(e) {
  			if (e.keyCode == 27) { // escape key maps to keycode `27`
  				e.stopPropagation();
  				e.preventDefault();
  		    }
  		}); 
  		oDialogDisStat.addButton(new sap.ui.commons.Button({
  		       text: "OK", 
  		       press:function(oEvent){
	  		    	if(oCbDisStat.getValue() == ""){
						sap.ui.commons.MessageBox.show("Please select either Terminate or Resubmit Status.",
	                    sap.ui.commons.MessageBox.Icon.ERROR,"Error", [sap.ui.commons.MessageBox.Action.OK]);
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
									tdline = {"Line":arraySubstr};
									
									tdlines.push(tdline);
									cutStart = cutStart + 254;
								}
							}else{
								tdline = {"Line":oArray[a]};
								tdlines.push(tdline);
							}
						}
					}

					oController.approveDisapprove("REJECT",tdlines,oCbDisStat.getValue());
					oDialogDisStat.close(); //Close PopUp for Disapproval Status
  		       }
  		}));
		//*******************************************DIALOG FOR DISAPPROVAL STATUS**************************************//	
  		
		var oBtnDisapprove = new sap.ui.commons.Button(sessionCache["pageID"] + "oBtnDisapprove",{
			tooltip : "Disapprove Upgrade/Downgrade",
			width : "100px",
			height : "30px",
			text : "Disapprove",
			press : function() {
				jQuery.sap.require("sap.m.MessageBox");
				
				sap.ui.commons.MessageBox.show(
					      "Are you sure you want to disapprove request for Upgrade/Downgrade?",
					      sap.ui.commons.MessageBox.Icon.INFORMATION,
					      "Disapprove Request",
					      [sap.ui.commons.MessageBox.Action.YES, sap.ui.commons.MessageBox.Action.NO],
					      function(bResult) { 
								if (bResult == "YES") {
									if (oTAComments.getValue() == "") {
										sap.ui.commons.MessageBox.show("Please enter comments.",
                                                sap.ui.commons.MessageBox.Icon.ERROR,"Error",
                                     [sap.ui.commons.MessageBox.Action.OK]);
										oSection7.setCollapsed(false);
										return;
									}
									
									oDialogDisStat.open(); //Open PopUp for Disapproval Status
									
									/*
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

									if (oController.approveDisapprove("REJECT",tdlines,oCbDisStat.getValue())) {
						    			oBtnApprove.setEnabled(false);
						    			oBtnDisapprove.setEnabled(false);
						    			oTAComments.setValue("");
									}*/

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