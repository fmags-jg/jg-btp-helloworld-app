sap.ui.jsview("views.KBIncentive.KBIncentive", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf views.KBIncentive.KBIncentive
	*/ 
	getControllerName : function() {
		return "views.KBIncentive.KBIncentive";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf views.KBIncentive.KBIncentive
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

		// REF Number
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
        //***************************** BASIC DETAILS ******************************************/
        var oFields;
        oFields = [{row1: [{type:"Label",value:"AA Number ",align: ""}
			  ,{type:"Text",value:"{/tranDetail/kb06headerSet/0/Refnumber}",align: ""}
			  ,{type:"",value:"",align: ""}
			  ,{type:"Label",value:"Date Submitted ",align: ""}
			  ,{type:"Text",value:"{/tranDetail/kb06headerSet/0/Date}",align: ""}
			]}
				,{row1: [{type:"Label",value:"Client Name ",align: ""}
				,{type:"Text",value:"{/tranDetail/kb06headerSet/0/Name}",align: ""}
				,{type:"",value:"",align: ""}
				,{type:"Label",value:"JG Summit Employee ",align: ""}
				,{type:"Text",value:"{/tranDetail/kb06headerSet/0/Employee}",align: ""}
			]}
		];
		var oHdrDetails = formDynamic(oFields, [], [ '70px', '150px', '30px', '90px', '110px','20%' ]);
		        
		var tblBasic = new sap.ui.table.Table({
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


		tblBasic.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Project"}),
        	//Change Christian de Leon - Reflect Building Name instead of BE Name 07/19/2018
//        	template: new sap.ui.commons.TextView().bindProperty("text" , "ProjectText"),/*{
        	template: new sap.ui.commons.TextView().bindProperty("text" , "BuildingText"),/*{
        	//End Change
            parts: ["ProjectText","BuildingText","CompanycodeText" ],
            formatter: function(projtxt, bldgtxt, butxt) {

    			return  projtxt+" "+bldgtxt+" "+butxt;
    			}
    	}),*/
        	editable: false,
        	width: "40%"
        }));

		tblBasic.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Unit"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "UnitText"),
        	editable: false,
        	width: "15%"
        }));

		tblBasic.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Unit Type"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "UnittypeText"),
        	editable: false,
        	width: "15%"
        }));
		
		tblBasic.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Total Floor Area(SQM)"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "FloorArea", function(cellValue) {  
    			if (cellValue == undefined || cellValue == "") return "0.00";
          	     return util.Formatter.amount(cellValue);
           	}),
        	editable: false,
        	width: "15%"
        }));

		tblBasic.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Date of Sale"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "SaleDate"),
        	editable: false,
        	width: "15%"
        }));

		tblBasic.setModel(this.getModel());
		tblBasic.bindRows("/tranDetail/kb14contractdetail_expandedSet"); 
		

        oFields = [{row1: [{type:"Label",value:"NPV Rate",align: ""}
				  ,{type:"Text",value:"{/tranDetail/kb03schemeSet/0/Npv}",align: "End"}
				  ,{type:"",value:"",align: ""}
				  ,{type:"",value:"",align: ""}
				  ,{type:"",value:"",align: ""}
				  ,{type:"",value:"",align: ""}
			]}        	
        	 	,{row1: [{type:"Label",value:"Gross TCP",align: ""}
			  		,{type:"Text",value:"{/tranDetail/kb15current_priceSet/0/GrossTcp}",align: "End"}
			  		,{type:"",value:"",align: ""}
			  		,{type:"Text",value:"{/tranDetail/kb07proposed_schedSet/0/GrossTcp}",align: "End"}
			  		,{type:"",value:"",align: ""}
			  		,{type:"Text",value:"{/tranDetail/kb08adjustment_schedSet/0/GrossTcp}",align: "End"}
			]}
				,{row1: [{type:"Label",value:"Less: Discount/Rebate",align: ""}
				  ,{type:"Text",value:"{/tranDetail/kb15current_priceSet/0/Discount}",align: "End"}
				  ,{type:"",value:"",align: ""}
				  ,{type:"Text",value:"{/tranDetail/kb07proposed_schedSet/0/Discount}",align: "End"}
				  ,{type:"",value:"",align: ""}
				  ,{type:"Text",value:"{/tranDetail/kb08adjustment_schedSet/0/Discount}",align: "End"}
			]}
				,{row1: [{type:"Label",value:"Fall in Between Adjustment",align: ""}
				  ,{type:"Text",value:"{/tranDetail/kb15current_priceSet/0/FibAdj}",align: "End"}
				  ,{type:"",value:"",align: ""}
				  ,{type:"Text",value:"{/tranDetail/kb07proposed_schedSet/0/FibAdj}",align: "End"}
				  ,{type:"",value:"",align: ""}
				  ,{type:"Text",value:"{/tranDetail/kb08adjustment_schedSet/0/FibAdj}",align: "End"}
			]}
				,{row1: [{type:"Label",value:"Net TCP",align: ""}
				  ,{type:"Text",value:"{/tranDetail/kb15current_priceSet/0/NetTcp}",align: "End"}
				  ,{type:"",value:"",align: ""}
				  ,{type:"Text",value:"{/tranDetail/kb07proposed_schedSet/0/NetTcp}",align: "End"}
				  ,{type:"",value:"",align: ""}
				  ,{type:"Text",value:"{/tranDetail/kb08adjustment_schedSet/0/NetTcp}",align: "End"}
			]}
				,{row1: [{type:"Label",value:"Total TCP Payments",align: ""}
				  ,{type:"Text",value:"{/tranDetail/kb15current_priceSet/0/TotalTcp}",align: "End"}
				  ,{type:"",value:"",align: ""}
				  ,{type:"",value:"",align: ""}
				  ,{type:"",value:"",align: ""}
				  ,{type:"",value:"",align: ""}
			]}
				,{row1: [{type:"Label",value:"Amount to be Forfeited",align: ""}
				  ,{type:"Text",value:"{/tranDetail/kb15current_priceSet/0/Forfeited}",align: "End"}
				  ,{type:"",value:"",align: ""}
				  ,{type:"",value:"",align: ""}
				  ,{type:"",value:"",align: ""}
				  ,{type:"",value:"",align: ""}
			]}
				,{row1: [{type:"Label",value:"Amount to be Applied as Payment",align: ""}
				  ,{type:"Text",value:"{/tranDetail/kb15current_priceSet/0/AppliedPay}",align: "End"}
				  ,{type:"",value:"",align: ""}
				  ,{type:"",value:"",align: ""}
				  ,{type:"",value:"",align: ""}
				  ,{type:"",value:"",align: ""}
			]}
				,{row1: [{type:"Label",value:"Net Amount for KB Incentive",align: ""}
				  ,{type:"Text",value:"{/tranDetail/kb15current_priceSet/0/NetRestruc}",align: "End"}
				  ,{type:"",value:"",align: ""}
				  ,{type:"",value:"",align: ""}
				  ,{type:"",value:"",align: ""}
				  ,{type:"",value:"",align: ""}
			]}
				,{row1: [{type:"",value:"",align: ""}
				  ,{type:"",value:"",align: ""}
				  ,{type:"",value:"",align: ""}
				  ,{type:"",value:"",align: ""}
				  ,{type:"",value:"",align: ""}
			]}
				,{row1: [{type:"Label",value:"Payment Scheme",align: ""}
				  ,{type:"Text",value:"{/tranDetail/kb15current_priceSet/0/ZzPaymnt1}",align: "End"}
				  ,{type:"",value:"",align: ""}
				  ,{type:"Text",value:"{/tranDetail/kb07proposed_schedSet/0/ZzPaymnt1}",align: "End"}
				  ,{type:"",value:"",align: ""}
				  ,{type:"",value:"",align: ""}
			]}
				,{row1: [{type:"Label",value:"Turn-over Taxes, Fees & Expenses (TTFE)",align: ""}
				  ,{type:"Text",value:"{/tranDetail/kb15current_priceSet/0/Ttfe}",align: "End"}
				  ,{type:"",value:"",align: ""}
				  ,{type:"Text",value:"{/tranDetail/kb07proposed_schedSet/0/Ttfe}",align: "End"}
				  ,{type:"",value:"",align: ""}
				  ,{type:"Text",value:"{/tranDetail/kb08adjustment_schedSet/0/Ttfe}",align: "End"}
			]}
		];
		var oTCPDetails = formDynamic(oFields, [ '', 'Current','','Proposed','','Adjustment'], [ '140px', '120px', '30px', '120px', '30px','120px' ]);
		
		//************************ BASIC DETAILS*******************************************/


		//************************ SUMMARY *******************************************/
		var oFields = [{row1: [{type:"Label",value:"Payment Scheme Type",align: ""}
		  					  ,{type:"Text",value:"{/tranDetail/kb21summary_oldSet/0/Xmbez}",align: ""}
							  ,{type:"",value:"",align: ""}
		  					  ,{type:"Text",value:"{/tranDetail/kb24summary_newSet/0/Xmbez}",align: ""}
					  ]}
					 ,{row1: [{type:"Label",value:"Scheme Overview",align: ""}
					  		 ,{type:"Text",value:"{/tranDetail/kb21summary_oldSet/0/Overview}",align: ""}
							  ,{type:"",value:"",align: ""}
		  					  ,{type:"Text",value:"{/tranDetail/kb24summary_newSet/0/Overview}",align: ""}
					  ]}
					 ,{row1: [{type:"Label",value:"RF Deduction",align: ""}
					 		 ,{type:"Text",value:"{/tranDetail/kb21summary_oldSet/0/ZzPaymnt3Desc}",align: ""}
							  ,{type:"",value:"",align: ""}
		  					  ,{type:"Text",value:"{/tranDetail/kb24summary_newSet/0/ZzPaymnt3Desc}",align: ""}
					  ]}
					 ,{row1: [{type:"Label",value:"Payment Type",align: ""}
			 		 		,{type:"Text",value:"{/tranDetail/kb21summary_oldSet/0/ZzPaytype}",align: ""}
							  ,{type:"",value:"",align: ""}
		  					  ,{type:"Text",value:"{/tranDetail/kb24summary_newSet/0/ZzPaytype}",align: ""}
			 		  ]}
					 ,{row1: [{type:"Label",value:"Reservation Date",align: ""}
		 		 			 ,{type:"Text",value:"{/tranDetail/kb21summary_oldSet/0/ReserveDate}",align: ""}
							  ,{type:"",value:"",align: ""}
		  					  ,{type:"Text",value:"{/tranDetail/kb24summary_newSet/0/ReserveDate}",align: ""}
		 		 	  ]}
					 ,{row1: [{type:"Label",value:"Reservation Fee",align: ""}
		 		 			 ,{type:"Text",value:"{/tranDetail/kb21summary_oldSet/0/ReserveFee}",align: ""}
							  ,{type:"",value:"",align: ""}
		  					  ,{type:"Text",value:"{/tranDetail/kb24summary_newSet/0/ReserveFee}",align: ""}
		 		 	  ]}
					 ,{row1: []}
					 ,{row1: [{type:"Label",value:"Total Down Payment",align: ""}
		 		 			 ,{type:"Text",value:"{/tranDetail/kb21summary_oldSet/0/DpAmt}",align: ""}
							  ,{type:"",value:"",align: ""}
		  					  ,{type:"Text",value:"{/tranDetail/kb24summary_newSet/0/DpAmt}",align: ""}
		 		 	  ]}
					 ,{row1: [{type:"Label",value:"Number of Months/Monthly",align: ""}
		 		 			 ,{type:"Text",value:"{/tranDetail/kb21summary_oldSet/0/DpMos}",align: ""}
							  ,{type:"",value:"",align: ""}
		  					  ,{type:"Text",value:"{/tranDetail/kb24summary_newSet/0/DpMos}",align: ""}
		 		 	  ]}
					 ,{row1: [{type:"Label",value:"Down Payment Period",align: ""}
		 		 			 ,{type:"Text",value:"{/tranDetail/kb21summary_oldSet/0/DpPeriod}",align: ""}
							  ,{type:"",value:"",align: ""}
		  					  ,{type:"Text",value:"{/tranDetail/kb24summary_newSet/0/DpPeriod}",align: ""}
		 		 	  ]}
					 ,{row1: []}
					 ,{row1: [{type:"Label",value:"Total Installment",align: ""}
		 		 			 ,{type:"Text",value:"{/tranDetail/kb21summary_oldSet/0/InstPrinAmt}",align: ""}
							  ,{type:"",value:"",align: ""}
		  					  ,{type:"Text",value:"{/tranDetail/kb24summary_newSet/0/InstPrinAmt}",align: ""}
		 		 	  ]}
					 ,{row1: [{type:"Label",value:"Interest Rate",align: ""}
		 		 			 ,{type:"Text",value:"{/tranDetail/kb21summary_oldSet/0/InstIntRate}",align: ""}
							  ,{type:"",value:"",align: ""}
		  					  ,{type:"Text",value:"{/tranDetail/kb24summary_newSet/0/InstIntRate}",align: ""}
		 		 	  ]}
					 ,{row1: [{type:"Label",value:"Number of Months/Monthly",align: ""}
		 		 			 ,{type:"Text",value:"{/tranDetail/kb21summary_oldSet/0/InstPrinMos}",align: ""}
							  ,{type:"",value:"",align: ""}
		  					  ,{type:"Text",value:"{/tranDetail/kb24summary_newSet/0/InstPrinMos}",align: ""}
		 		 	  ]}
					 ,{row1: [{type:"Label",value:"Installment Period",align: ""}
		 		 			 ,{type:"Text",value:"{/tranDetail/kb21summary_oldSet/0/InstPrinPeriod}",align: ""}
							  ,{type:"",value:"",align: ""}
		  					  ,{type:"Text",value:"{/tranDetail/kb24summary_newSet/0/InstPrinPeriod}",align: ""}
		 		 	  ]}
					 ,{row1: []}
					 ,{row1: [{type:"Label",value:"Total Retention",align: ""}
		 		 			 ,{type:"Text",value:"{/tranDetail/kb21summary_oldSet/0/RetAmt}",align: ""}
							  ,{type:"",value:"",align: ""}
		  					  ,{type:"Text",value:"{/tranDetail/kb24summary_newSet/0/RetAmt}",align: ""}
		 		 	  ]}
					 ,{row1: [{type:"Label",value:"Number of Months/Monthly",align: ""}
		 		 			 ,{type:"Text",value:"{/tranDetail/kb21summary_oldSet/0/RetMos}",align: ""}
							  ,{type:"",value:"",align: ""}
		  					  ,{type:"Text",value:"{/tranDetail/kb24summary_newSet/0/RetMos}",align: ""}
		 		 	  ]}
					 ,{row1: [{type:"Label",value:"Retention Period",align: ""}
		 		 			 ,{type:"Text",value:"{/tranDetail/kb21summary_oldSet/0/RetPeriod}",align: ""}
							  ,{type:"",value:"",align: ""}
		  					  ,{type:"Text",value:"{/tranDetail/kb24summary_newSet/0/RetPeriod}",align: ""}
		 		 	  ]}
					 ,{row1: []}
					 ,{row1: [{type:"Label",value:"Total TTFE",align: ""}
		 		 			 ,{type:"Text",value:"{/tranDetail/kb21summary_oldSet/0/TtfeAmt}",align: ""}
							  ,{type:"",value:"",align: ""}
		  					  ,{type:"Text",value:"{/tranDetail/kb24summary_newSet/0/TtfeAmt}",align: ""}
		 		 	  ]}
					 ,{row1: [{type:"Label",value:"TTFE Period",align: ""}
		 		 			 ,{type:"Text",value:"{/tranDetail/kb21summary_oldSet/0/TtfePeriod}",align: ""}
							  ,{type:"",value:"",align: ""}
		  					  ,{type:"Text",value:"{/tranDetail/kb24summary_newSet/0/TtfePeriod}",align: ""}
		 		 	  ]}
					  ];

		var oSummary = formDynamic(oFields ,[ '', 'Current','','Proposed','']
									,[ '180px', '160px','5%','160px', '30%' ]
									);
		//************************ SUMMARY *******************************************/
		
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
        	template: new sap.ui.commons.TextView().bindProperty("text", "DueDate", function(cellValue) {  
          	     return sapDateFormat(cellValue);
           	}),
        	editable: false,
        	width: "185px"
        }));

		tblProposedPay.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Particulars",textAlign: "Center"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "Type"),
        	editable: false,
        	width: "300px"
        }));
		
		tblProposedPay.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "TCP",textAlign: "Center"}),
        	template: new sap.ui.commons.TextView({textAlign: "End"}).bindProperty("text", "Tcp", function(cellValue) {  
    			if (cellValue == undefined || cellValue == "") return "0.00";
       	     return util.Formatter.amount(cellValue);
        	}),
        	editable: false,
        	width: "160px"
        }));

		tblProposedPay.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "TTFE",textAlign: "Center"}),
        	template: new sap.ui.commons.TextView({textAlign: "End"}).bindProperty("text", "Ttfe", function(cellValue) {  
    			if (cellValue == undefined || cellValue == "") return "0.00";
       	     return util.Formatter.amount(cellValue);
        	}),
        	editable: false,
        	width: "160px"
        }));

		tblProposedPay.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Total",textAlign: "Center"}),
        	template: new sap.ui.commons.TextView({textAlign: "End"}).bindProperty("text", "Total", function(cellValue) {  
    			if (cellValue == undefined || cellValue == "") return "0.00";
       	     return util.Formatter.amount(cellValue);
        	}),
        	editable: false,
        	width: "160px"
        }));

		tblProposedPay.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Payment For Application",textAlign: "Center"}),
        	template: new sap.ui.commons.TextView({textAlign: "End"}).bindProperty("text", "Status"),
        	editable: false,
        	width: "160px"
        }));
		tblProposedPay.setModel(this.getModel());
		tblProposedPay.bindRows("/tranDetail/kb30spreadSet"); 
		//************************ PROPOSED PAYMENT*******************************************/

		//***************************** RELATED CONTRACTS ******************************************/
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
        	template: new sap.ui.commons.TextView({textAlign: "End"}).bindProperty("text", "Tcp", function(cellValue) {  
    			if (cellValue == undefined || cellValue == "") return "0.00";
       	     return util.Formatter.amount(cellValue);
        	}),
        	editable: false,
        	width: "10%"
        }));

		tblContracts.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "TPM",textAlign: "Center"}),
        	template: new sap.ui.commons.TextView({textAlign: "End"}).bindProperty("text", "TotalPayments", function(cellValue) {  
    			if (cellValue == undefined || cellValue == "") return "0.00";
       	     return util.Formatter.amount(cellValue);
        	}),
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
		tblContracts.bindRows("/tranDetail/kb18related_contractsSet"); 
		//************************ RELATED CONTRACTS *******************************************/

        var oBackground = new sap.ui.commons.layout.MatrixLayout({
			columns : 6,
			width : "100%",
			widths : [ '80px', '140px', '30%', '120px', '140px', '30%' ]
        });

		var oTBackground = new sap.ui.commons.TextArea({
			tooltip : "Background and Recommendation",
			value : '{/tranDetail/kb33recommendationSet}',
			width : "100%",
			rows : 5,
			enabled: false
		});

		oCell = new sap.ui.commons.layout.MatrixLayoutCell({
			colSpan : 4,
			hAlign : sap.ui.commons.layout.HAlign.Left,
			vAlign : sap.ui.commons.layout.VAlign.Bottom,
			content : [ oTBackground ]
		});
		
		oBackground.createRow(null,oCell);

		//************************ REMARKS *******************************************/
        var oRemarks2 = new sap.ui.commons.layout.MatrixLayout({
			columns : 6,
			width : "100%",
			widths : [ '80px', '140px', '30%', '120px', '140px', '30%' ]
        });

		var oTRemarks2 = new sap.ui.commons.TextArea({
			tooltip : "Remarks",
			value : '{/tranDetail/kb31remarksSet}',
			width : "100%",
			rows : 5,
			enabled: false
		});

		oCell = new sap.ui.commons.layout.MatrixLayoutCell({
			colSpan : 4,
			hAlign : sap.ui.commons.layout.HAlign.Left,
			vAlign : sap.ui.commons.layout.VAlign.Bottom,
			content : [ oTRemarks2 ]
		});
		
		oRemarks2.createRow(null,oCell);
		
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
        	template: new sap.ui.commons.TextView().bindProperty("text" , {
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
        	template: new sap.ui.commons.TextView().bindProperty("text", "C05CommentsSet").addStyleClass("sapUiTv1"),
        	editable: false
        }));
		
		tblApprovers.setModel(this.getModel());
		tblApprovers.bindRows("/tranDetail/kb05approversSet"); 
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
        
     	//Payment Application
        var oBasicLayout = new sap.ui.commons.layout.MatrixLayout({
			columns : 2,
			width : "100%",
			widths : [ '80%', '20%' ]
        });

        oCell = new sap.ui.commons.layout.MatrixLayoutCell({vAlign : sap.ui.commons.layout.VAlign.Bottom, colSpan: 1});
        oCell.addContent(oHdrDetails);
        oBasicLayout.createRow(oCell);
        oBasicLayout.createRow(null);

        oCell = new sap.ui.commons.layout.MatrixLayoutCell({vAlign : sap.ui.commons.layout.VAlign.Bottom, colSpan: 1});
        oCell.addContent(tblBasic);
        oBasicLayout.createRow(oCell);

        oBasicLayout.createRow(null);
        oCell = new sap.ui.commons.layout.MatrixLayoutCell({vAlign : sap.ui.commons.layout.VAlign.Bottom, colSpan: 1});
        oCell.addContent(oTCPDetails);
        oBasicLayout.createRow(oCell);
		
     	//Basic Details
        var oSection1 = new sap.ui.commons.AccordionSection();     
        oSection1.setTitle("Basic Details");		
        oSection1.setTooltip("Basic Details");
        oSection1.addContent( oBasicLayout );
        oAccordion.addSection( oSection1 );

        oCell = new sap.ui.commons.layout.MatrixLayoutCell({colSpan: 5, content: [oAccordion]})
        oLayout.createRow(oCell);

        oAccordion = new sap.ui.commons.Accordion();
        oAccordion.setWidth("99.8%")
     	//Summary
        var oSection2 = new sap.ui.commons.AccordionSection();     
        oSection2.setTitle("Summary");		
        oSection2.setTooltip("Summary");
        oSection2.addContent( oSummary);
        oAccordion.addSection( oSection2 );

        oCell = new sap.ui.commons.layout.MatrixLayoutCell({colSpan: 5, content: [oAccordion]})
        oLayout.createRow(oCell);

        oAccordion = new sap.ui.commons.Accordion();
        oAccordion.setWidth("99.8%")
     	//Background and Recommendation
        var oSection3a = new sap.ui.commons.AccordionSection();     
        oSection3a.setTitle("Background and Recommendation");		
        oSection3a.setTooltip("Background and Recommendation");
        oSection3a.addContent( oBackground );
        oAccordion.addSection( oSection3a );

        oCell = new sap.ui.commons.layout.MatrixLayoutCell({colSpan: 5, content: [oAccordion]})
        oLayout.createRow(oCell);

        oAccordion = new sap.ui.commons.Accordion();
        oAccordion.setWidth("99.8%")
     	//Proposed Payment Schedule Details
        var oPropPayLayout = new sap.ui.commons.layout.MatrixLayout({
			columns : 6,
			width : "100%",
			widths : [ '490px', '160px', '160px', '160px', '170px', '20%' ]
        });

        oCell = new sap.ui.commons.layout.MatrixLayoutCell({vAlign : sap.ui.commons.layout.VAlign.Bottom, colSpan: 5});
        oCell.addContent(tblProposedPay);
        oPropPayLayout.createRow(oCell);
        oPropPayLayout.createRow(null);
        
        /***********************TOTALS*************************/
        var oLblTotal = new sap.ui.commons.Label({text: "TOTALS", width: "100%"}).addStyleClass("font14ptBold");
        var oTFTCP = new sap.ui.commons.TextField({
        	value:"{/tranDetail/TotalSpreadSet/totalTCP}", 
        	width: "100%", 
        	textAlign: "End", 
        	enabled : false
        }).addStyleClass("font14ptBold");
        
        var oTFTTFE = new sap.ui.commons.TextField({
        	value:"{/tranDetail/TotalSpreadSet/totalTTFE}", 
        	width: "100%", 
        	textAlign: "End", 
        	enabled : false
        }).addStyleClass("font14ptBold");
        
        var oTFTotalSp = new sap.ui.commons.TextField({
        	value:"{/tranDetail/TotalSpreadSet/totalSpread}", 
        	width: "100%", 
        	textAlign: "End", 
        	enabled : false
        }).addStyleClass("font14ptBold");

        var oTFTotalPayApp = new sap.ui.commons.TextField({
        	value:"{/tranDetail/TotalSpreadSet/totalPayApp}", 
        	width: "100%", 
        	textAlign: "End", 
        	enabled : false
        }).addStyleClass("font14ptBold");
        
        oPropPayLayout.createRow(oLblTotal,oTFTCP,oTFTTFE,oTFTotalSp, oTFTotalPayApp, null);
        /***********************TOTALS*************************/

        var oSection3 = new sap.ui.commons.AccordionSection();     
        oSection3.setTitle("Proposed Payment Schedule Details");		
        oSection3.setTooltip("Proposed Payment Schedule Details");
        oSection3.addContent( oPropPayLayout );
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
     	//Remarks
        var oSection4 = new sap.ui.commons.AccordionSection();     
        oSection4.setTitle("Remarks");		
        oSection4.setTooltip("Remarks");
        oSection4.addContent( oRemarks2);
        oAccordion.addSection( oSection4 );

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
			tooltip : "Approve KB Incentive",
			width : "100px",
			height : "30px",
			text : "Approve",
			press : function() {
				sap.ui.commons.MessageBox.show(
					      "Are you sure you want to approve request for KB Incentive?",
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
			tooltip : "Disapprove KB Incentive",
			width : "100px",
			height : "30px",
			text : "Disapprove",
			press : function() {
				sap.ui.commons.MessageBox.show(
					      "Are you sure you want to disapprove request for KB Incentive?",
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