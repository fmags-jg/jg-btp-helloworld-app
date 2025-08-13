sap.ui.jsview("views.Buyer.Reinstatement", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf views.Buyer.Reinstatement
	*/ 
	getControllerName : function() {
		return "views.Buyer.Reinstatement";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf views.Buyer.Reinstatement
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
			value : '{/tranDetail/DateReinst}',
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
       
		var oFields = [{row1: [{type:"Label",value:"Principal Buyer",align: ""}
							  ,{type:"Text",value:"{/tranDetail/oldprinbuyer}",align: ""}
							  ,{type:"Text",value:"{/tranDetail/UnitText}",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"Text",value:"{/tranDetail/newprinbuyer}",align: ""}
							  ,{type:"Text",value:"{/tranDetail/UnitText}",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"",value:"",align: ""}
							  ]}
		    		 ,{row1: [{type:"Label",value:"Co-Buyer's",align: ""}
							  ,{type:"Text",value:"{/tranDetail/oldcobuyers/0/Name}",align: ""}
							  ,{type:"Text",value:"{/tranDetail/UnitText}",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"Text",value:"{/tranDetail/newcobuyers/0/Name}",align: ""}
							  ,{type:"Text",value:"{/tranDetail/UnitText}",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"",value:"",align: ""}
							  ]}
		    		 ,{row1: [{type:"",value:"",align: ""}
							  ,{type:"Text",value:"{/tranDetail/oldcobuyers/1/Name}",align: ""}
							  ,{type:"Text",value:"{/tranDetail/UnitText}",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"Text",value:"{/tranDetail/newcobuyers/1/Name}",align: ""}
							  ,{type:"Text",value:"{/tranDetail/UnitText}",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"",value:"",align: ""}
							  ]}
		    		 ,{row1: [{type:"",value:"",align: ""}
							  ,{type:"Text",value:"{/tranDetail/oldcobuyers/2/Name}",align: ""}
							  ,{type:"Text",value:"{/tranDetail/UnitText}",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"Text",value:"{/tranDetail/newcobuyers/2/Name}",align: ""}
							  ,{type:"Text",value:"{/tranDetail/UnitText}",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"",value:"",align: ""}
							  ]}
		    		 ,{row1: [{type:"",value:"",align: ""}
							  ,{type:"Text",value:"{/tranDetail/oldcobuyers/3/Name}",align: ""}
							  ,{type:"Text",value:"{/tranDetail/UnitText}",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"Text",value:"{/tranDetail/newcobuyers/3/Name}",align: ""}
							  ,{type:"Text",value:"{/tranDetail/UnitText}",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"",value:"",align: ""}
							  ]}
		    		 ,{row1 :[]}
		    		 ,{row1: [{type:"Label",value:"Company",align: ""}
							  ,{type:"Text",value:"{/tranDetail/zri_contractdet/0/CompanycodeText}",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"Text",value:"{/tranDetail/zri_rodetail/0/CompanycodeText}",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"",value:"",align: ""}
					  ]}
		    		 ,{row1: [{type:"Label",value:"Project",align: ""}
								  ,{type:"Text",value:"{/tranDetail/zri_contractdet/0/ProjectText}",align: ""}
								  ,{type:"",value:"",align: ""}
								  ,{type:"",value:"",align: ""}
								  ,{type:"Text",value:"{/tranDetail/zri_rodetail/0/ProjectText}",align: ""}
								  ,{type:"",value:"",align: ""}
								  ,{type:"",value:"",align: ""}
								  ,{type:"",value:"",align: ""}
						  ]}
		    		 ,{row1: [{type:"Label",value:"Building",align: ""}
							  ,{type:"Text",value:"{/tranDetail/zri_contractdet/0/BuildingText}",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"Text",value:"{/tranDetail/zri_rodetail/0/BuildingText}",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"",value:"",align: ""}
					  ]}
		    		 ,{row1: [{type:"Label",value:"Land",align: ""}
							  ,{type:"Text",value:"{/tranDetail/zri_contractdet/0/LandText}",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"Text",value:"{/tranDetail/zri_rodetail/0/LandText}",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"",value:"",align: ""}
					  ]}
		    		 ,{row1: [{type:"Label",value:"Unit Number",align: ""}
							  ,{type:"Text",value:"{/tranDetail/zri_contractdet/0/UnitText}",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"Text",value:"{/tranDetail/zri_rodetail/0/UnitText}",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"",value:"",align: ""}
					  ]}
		    		 ,{row1: [{type:"Label",value:"Unit Type",align: ""}
							  ,{type:"Text",value:"{/tranDetail/zri_contractdet/0/UnittypeText}",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"Text",value:"{/tranDetail/zri_rodetail/0/UnittypeText}",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"",value:"",align: ""}
					  ]}
		    		 ,{row1: [{type:"Label",value:"Floor Area",align: ""}
							  ,{type:"Text",value:"{/tranDetail/zri_contractdet/0/FloorArea}",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"Text",value:"{/tranDetail/zri_rodetail/0/FloorArea}",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"",value:"",align: ""}
					  ]}
		    		 ,{row1: [{type:"Label",value:"Contract Number",align: ""}
							  ,{type:"Text",value:"{/tranDetail/zri_contractdet/0/Contractnumber}",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"Text",value:"{/tranDetail/zri_rodetail/0/Contractnumber}",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"",value:"",align: ""}
					  ]}
		    		 ,{row1: [{type:"Label",value:"Contract Type",align: ""}
							  ,{type:"Text",value:"{/tranDetail/zri_contractdet/0/ContractypeText}",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"Text",value:"{/tranDetail/zri_rodetail/0/ContractypeText}",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"",value:"",align: ""}
					  ]}
		    		 ,{row1:[]}
		    		 ,{row1: [{type:"Label",value:"Date of Sale",align: ""}
							  ,{type:"Text",value:"{/tranDetail/zri_contractdet/0/SaleDate}",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"Text",value:"{/tranDetail/zri_rodetail/0/SaleDate}",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"",value:"",align: ""}
					  ]}
		    		 ,{row1: [{type:"Label",value:"Agents",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"Label",value:"CDAF",align: "Center"}
							  ,{type:"",value:"",align: ""}
							  ,{type:"",value:"",align: ""}
					  ]}
		    		 ,{row1: [{type:"Label",value:"AM",align: ""}
							  ,{type:"Text",value:"{/tranDetail/oldamagent}",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"Text",value:"{/tranDetail/newamagent}",align: ""}
							  ,{type:"Text",value:"{/tranDetail/UnitText}",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"",value:"",align: ""}
					  ]}
		    		 ,{row1: [{type:"Label",value:"SM",align: ""}
							  ,{type:"Text",value:"{/tranDetail/oldsmagent}",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"Text",value:"{/tranDetail/newsmagent}",align: ""}
							  ,{type:"Text",value:"{/tranDetail/UnitText}",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"",value:"",align: ""}
					  ]}
		    		 ,{row1: [{type:"Label",value:"SD",align: ""}
							  ,{type:"Text",value:"{/tranDetail/oldsdagent}",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"Text",value:"{/tranDetail/newsdagent}",align: ""}
							  ,{type:"Text",value:"{/tranDetail/UnitText}",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"",value:"",align: ""}
					  ]}
		    		 ,{row1: [{type:"",value:"",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"Label",value:"ADJUSTMENT",align: "Center"}
					  ]}
		    		 ,{row1: [{type:"Label",value:"Gross TCP",align: ""}
							  ,{type:"Text",value:"{/tranDetail/zri_old_amt/0/TcpGross}",align: "End"}
							  ,{type:"",value:"",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"Text",value:"{/tranDetail/zri_new_amt/0/TcpGross}",align: "End"}
							  ,{type:"",value:"",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"Text",value:"{/tranDetail/zri_adjustment/0/TcpGross}",align: "End"}
					  ]}
		    		 ,{row1: [{type:"Label",value:"Less: Discount/Rebate",align: ""}
							  ,{type:"Text",value:"{/tranDetail/zri_old_amt/0/Discount}",align: "End"}
							  ,{type:"",value:"",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"Text",value:"{/tranDetail/zri_new_amt/0/Discount}",align: "End"}
							  ,{type:"",value:"",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"Text",value:"{/tranDetail/zri_adjustment/0/Discount}",align: "End"}
					  ]}
		    		 /*,{row1: [{type:"Label",value:"Fall in Between Adjustment",align: ""}
					  ,{type:"Text",value:"{/tranDetail/zri_old_amt/0/AmtReinst}",align: "End"}
					  ,{type:"",value:"",align: ""}
					  ,{type:"",value:"",align: ""}
					  ,{type:"Text",value:"{/tranDetail/zri_new_amt/0/AmtReinst}",align: "End"}
					  ,{type:"",value:"",align: ""}
					  ,{type:"",value:"",align: ""}
					  ,{type:"Text",value:"{/tranDetail/zri_adjustment/0/AmtReinst}",align: "End"}
					  ]}*/
		    		 ,{row1: [{type:"Label",value:"Net TCP",align: ""}
							  ,{type:"Text",value:"{/tranDetail/zri_old_amt/0/TcpNet}",align: "End"}
							  ,{type:"",value:"",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"Text",value:"{/tranDetail/zri_new_amt/0/TcpNet}",align: "End"}
							  ,{type:"",value:"",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"Text",value:"{/tranDetail/zri_adjustment/0/TcpNet}",align: "End"}
					  ]}
		    		 ,{row1: [{type:"Label",value:"Total TCP Payments",align: ""}
							  ,{type:"Text",value:"{/tranDetail/zri_old_amt/0/TcpPayments}",align: "End"}
							  ,{type:"",value:"",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"Text",value:"{/tranDetail/zri_new_amt/0/TcpPayments}",align: "End"}
							  ,{type:"",value:"",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"Text",value:"{/tranDetail/zri_adjustment/0/TcpPayments}",align: "End"}
					  ]}
		    		 ,{row1: [{type:"Label",value:"Amount for Deduction",align: ""}
							  ,{type:"Text",value:"{/tranDetail/zri_old_amt/0/Deductions}",align: "End"}
							  ,{type:"",value:"",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"Text",value:"{/tranDetail/zri_new_amt/0/Deductions}",align: "End"}
							  ,{type:"",value:"",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"Text",value:"{/tranDetail/zri_adjustment/0/Deductions}",align: "End"}
					  ]}
		    		 ,{row1: [{type:"Label",value:"Amount for Payment Application",align: ""}
							  ,{type:"Text",value:"{/tranDetail/zri_old_amt/0/PaymentApplc}",align: "End"}
							  ,{type:"",value:"",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"Text",value:"{/tranDetail/zri_new_amt/0/PaymentApplc}",align: "End"}
							  ,{type:"",value:"",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"Text",value:"{/tranDetail/zri_adjustment/0/PaymentApplc}",align: "End"}
					  ]}
		    		 ,{row1: []}
		    		 ,{row1: [{type:"Label",value:"Payment Scheme",align: ""}
							  ,{type:"Text",value:"{/tranDetail/zri_old_amt/0/ZzPaymnt1}",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"Text",value:"{/tranDetail/zri_new_amt/0/ZzPaymnt1}",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"",value:"",align: ""}
					  ]}
		    		 ,{row1: [{type:"Label",value:"Turn-over Taxes, Fees & Expenses (TTFE)",align: ""}
							  ,{type:"Text",value:"{/tranDetail/zri_old_amt/0/Ttfe}",align: "End"}
							  ,{type:"",value:"",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"Text",value:"{/tranDetail/zri_new_amt/0/Ttfe}",align: "End"}
							  ,{type:"",value:"",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"Text",value:"{/tranDetail/zri_adjustment/0/Ttfe}",align: ""}
					  ]}
		    		 ];

		var oBasicInfo = formDynamic(oFields ,[ '', 'Cancelled Unit', '', '', 'New Unit','','','','']
									,[ '200px', '150px','80px', '15px', '150px','80px','8px', '100px','8%' ]
									);


		var oFields = [{row1: [{type:"Label",value:"Payment Scheme Type",align: ""}
		  					  ,{type:"Text",value:"{/tranDetail/zri_summary_old/0/FinanceTerm_Text}",align: ""}
							  ,{type:"",value:"",align: ""}
		  					  ,{type:"Text",value:"{/tranDetail/zri_summary_new/0/FinanceTerm_Text}",align: ""}
					  ]}
					 ,{row1: [{type:"Label",value:"Scheme Overview",align: ""}
					  		 ,{type:"Text",value:"{/tranDetail/zri_summary_old/0/Overview}",align: ""}
							  ,{type:"",value:"",align: ""}
		  					  ,{type:"Text",value:"{/tranDetail/zri_summary_new/0/Overview}",align: ""}
					  ]}
					 ,{row1: [{type:"Label",value:"RF Deduction",align: ""}
					 		 ,{type:"Text",value:"{/tranDetail/zri_summary_old/0/Xmbez}",align: ""}
							  ,{type:"",value:"",align: ""}
		  					  ,{type:"Text",value:"{/tranDetail/zri_summary_new/0/Xmbez}",align: ""}
					  ]}
					 ,{row1: [{type:"Label",value:"Payment Type",align: ""}
			 		 		,{type:"Text",value:"{/tranDetail/zri_summary_old/0/ZzPaytype}",align: ""}
							  ,{type:"",value:"",align: ""}
		  					  ,{type:"Text",value:"{/tranDetail/zri_summary_new/0/ZzPaytype}",align: ""}
			 		  ]}
					 ,{row1: [{type:"Label",value:"Reservation Date",align: ""}
		 		 			 ,{type:"Text",value:"{/tranDetail/zri_summary_old/0/ReserveDate}",align: ""}
							  ,{type:"",value:"",align: ""}
		  					  ,{type:"Text",value:"{/tranDetail/zri_summary_new/0/ReserveDate}",align: ""}
		 		 	  ]}
					 ,{row1: [{type:"Label",value:"Reservation Fee",align: ""}
		 		 			 ,{type:"Text",value:"{/tranDetail/zri_summary_old/0/ReserveFee}",align: ""}
							  ,{type:"",value:"",align: ""}
		  					  ,{type:"Text",value:"{/tranDetail/zri_summary_new/0/ReserveFee}",align: ""}
		 		 	  ]}
					 ,{row1: []}
					 ,{row1: [{type:"Label",value:"Total Down Payment",align: ""}
		 		 			 ,{type:"Text",value:"{/tranDetail/zri_summary_old/0/DpAmt}",align: ""}
							  ,{type:"",value:"",align: ""}
		  					  ,{type:"Text",value:"{/tranDetail/zri_summary_new/0/DpAmt}",align: ""}
		 		 	  ]}
					 ,{row1: [{type:"Label",value:"Number of Months/Monthly",align: ""}
		 		 			 ,{type:"Text",value:"{/tranDetail/zri_summary_old/0/DpMos}",align: ""}
							  ,{type:"",value:"",align: ""}
		  					  ,{type:"Text",value:"{/tranDetail/zri_summary_new/0/DpMos}",align: ""}
		 		 	  ]}
					 ,{row1: [{type:"Label",value:"Down Payment Period",align: ""}
		 		 			 ,{type:"Text",value:"{/tranDetail/zri_summary_old/0/DpPeriod}",align: ""}
							  ,{type:"",value:"",align: ""}
		  					  ,{type:"Text",value:"{/tranDetail/zri_summary_new/0/DpPeriod}",align: ""}
		 		 	  ]}
					 ,{row1: []}
					 ,{row1: [{type:"Label",value:"Total Installment",align: ""}
		 		 			 ,{type:"Text",value:"{/tranDetail/zri_summary_old/0/InstPrinAmt}",align: ""}
							  ,{type:"",value:"",align: ""}
		  					  ,{type:"Text",value:"{/tranDetail/zri_summary_new/0/InstPrinAmt}",align: ""}
		 		 	  ]}
					 ,{row1: [{type:"Label",value:"Interest Rate",align: ""}
		 		 			 ,{type:"Text",value:"{/tranDetail/zri_summary_old/0/InstIntRate}",align: ""}
							  ,{type:"",value:"",align: ""}
		  					  ,{type:"Text",value:"{/tranDetail/zri_summary_new/0/InstIntRate}",align: ""}
		 		 	  ]}
					 ,{row1: [{type:"Label",value:"Number of Months/Monthly",align: ""}
		 		 			 ,{type:"Text",value:"{/tranDetail/zri_summary_old/0/InstPrinMos}",align: ""}
							  ,{type:"",value:"",align: ""}
		  					  ,{type:"Text",value:"{/tranDetail/zri_summary_new/0/InstPrinMos}",align: ""}
		 		 	  ]}
					 ,{row1: [{type:"Label",value:"Installment Period",align: ""}
		 		 			 ,{type:"Text",value:"{/tranDetail/zri_summary_old/0/InstPrinPeriod}",align: ""}
							  ,{type:"",value:"",align: ""}
		  					  ,{type:"Text",value:"{/tranDetail/zri_summary_new/0/InstPrinPeriod}",align: ""}
		 		 	  ]}
					 ,{row1: []}
					 ,{row1: [{type:"Label",value:"Total Retention",align: ""}
		 		 			 ,{type:"Text",value:"{/tranDetail/zri_summary_old/0/RetAmt}",align: ""}
							  ,{type:"",value:"",align: ""}
		  					  ,{type:"Text",value:"{/tranDetail/zri_summary_new/0/RetAmt}",align: ""}
		 		 	  ]}
					 ,{row1: [{type:"Label",value:"Number of Months/Monthly",align: ""}
		 		 			 ,{type:"Text",value:"{/tranDetail/zri_summary_old/0/RetMos}",align: ""}
							  ,{type:"",value:"",align: ""}
		  					  ,{type:"Text",value:"{/tranDetail/zri_summary_new/0/RetMos}",align: ""}
		 		 	  ]}
					 ,{row1: [{type:"Label",value:"Retention Period",align: ""}
		 		 			 ,{type:"Text",value:"{/tranDetail/zri_summary_old/0/RetPeriod}",align: ""}
							  ,{type:"",value:"",align: ""}
		  					  ,{type:"Text",value:"{/tranDetail/zri_summary_new/0/RetPeriod}",align: ""}
		 		 	  ]}
					 ,{row1: []}
					 ,{row1: [{type:"Label",value:"Total TTFE",align: ""}
		 		 			 ,{type:"Text",value:"{/tranDetail/zri_summary_old/0/TtfeAmt}",align: ""}
							  ,{type:"",value:"",align: ""}
		  					  ,{type:"Text",value:"{/tranDetail/zri_summary_new/0/TtfeAmt}",align: ""}
		 		 	  ]}
					 ,{row1: [{type:"Label",value:"TTFE Period",align: ""}
		 		 			 ,{type:"Text",value:"{/tranDetail/zri_summary_old/0/TtfePeriod}",align: ""}
							  ,{type:"",value:"",align: ""}
		  					  ,{type:"Text",value:"{/tranDetail/zri_summary_new/0/TtfePeriod}",align: ""}
		 		 	  ]}
					  ];

		var oSummary = formDynamic(oFields ,[ '', 'Old Unit','','New Unit','']
									,[ '180px', '160px','5%','160px', '30%' ]
									);
		
        var oRemarks = new sap.ui.commons.layout.MatrixLayout({
			columns : 6,
			width : "100%",
			widths : [ '80px', '140px', '30%', '120px', '140px', '30%' ]
        });

		//var oLRemarks = new sap.ui.commons.Label({text : "Remarks: "});	
		//oRemarks.createRow(null,oLRemarks);
		
		var oTRemarks = new sap.ui.commons.TextArea({
			tooltip : "Remarks",
			value : '{/tranDetail/zri_recommendations}',
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
        	width: "70%"
        }));

		tblPayment.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Amount"}),
        	template: new sap.ui.commons.TextView({textAlign: "End"}).bindProperty("text", "Amount", function(cellValue) {  
    			if (cellValue == undefined || cellValue == "") return "0.00";
       	     return util.Formatter.amount(cellValue);
        	}),
        	editable: false,
        	width: "30%"
        }));

		tblPayment.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Payment Application"}),
        	template: new sap.ui.commons.TextView({textAlign: "End"}).bindProperty("text", "AmountPaid", function(cellValue) {  
    			if (cellValue == undefined || cellValue == "") return "0.00";
       	     return util.Formatter.amount(cellValue);
        	}),
        	editable: false,
        	width: "30%"
        }));

		tblPayment.setModel(this.getModel());
		tblPayment.bindRows("/tranDetail/zri_particulars"); 
		//************************ PAYMENT APPLICATION *******************************************/

		//***************************** REMARKS ******************************************/
        var oRemarks1 = new sap.ui.commons.layout.MatrixLayout({
			columns : 6,
			width : "100%",
			widths : [ '80px', '140px', '30%', '120px', '140px', '30%' ]
        });

		var oLRemarks = new sap.ui.commons.Label({text : "Remarks: "});	
		oRemarks1.createRow(null,oLRemarks);
		
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
		
		oRemarks1.createRow(null,oCell);
		//***************************** REMARKS ******************************************/

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
        	template: new sap.ui.commons.TextView({textAlign: "End"}).bindProperty("text", "Tcp", function(cellValue) {  
    			if (cellValue == undefined || cellValue == "") return "0.00";
       	     return util.Formatter.amount(cellValue);
        	}),
        	editable: false,
        	width: "15%"
        }));

		tblProposedPay.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "TTFE",textAlign: "Center"}),
        	template: new sap.ui.commons.TextView({textAlign: "End"}).bindProperty("text", "Ttfe", function(cellValue) {  
    			if (cellValue == undefined || cellValue == "") return "0.00";
       	     return util.Formatter.amount(cellValue);
        	}),
        	editable: false,
        	width: "15%"
        }));

		tblProposedPay.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Total",textAlign: "Center"}),
        	template: new sap.ui.commons.TextView({textAlign: "End"}).bindProperty("text", "Total", function(cellValue) {  
    			if (cellValue == undefined || cellValue == "") return "0.00";
       	     return util.Formatter.amount(cellValue);
        	}),
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
		tblProposedPay.bindRows("/tranDetail/zri_spread"); 
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
		tblContracts.bindRows("/tranDetail/zri_related_contracts"); 
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
		tblApprovers.bindRows("/tranDetail/approver"); 
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
        
     	//Basic Details
        var oSection1 = new sap.ui.commons.AccordionSection();     
        oSection1.setTitle("Basic Details");		
        oSection1.setTooltip("Basic Details");
        oSection1.addContent( oBasicInfo);
        oAccordion.addSection( oSection1 );

        oCell = new sap.ui.commons.layout.MatrixLayoutCell({colSpan: 5, content: [oAccordion]})
        oLayout.createRow(oCell);

        oAccordion = new sap.ui.commons.Accordion();
        oAccordion.setWidth("99.8%")
     	//Payment Application
        var oPaymentLayout = new sap.ui.commons.layout.MatrixLayout({
			columns : 3,
			width : "100%",
			widths : [ '50%', '50%' ]
        });

		oPaymentLayout.createRow(tblPayment, null);
		
        var oSection4 = new sap.ui.commons.AccordionSection();     
        oSection4.setTitle("Payment Application");		
        oSection4.setTooltip("Payment Application");
        oSection4.addContent( oPaymentLayout);
        oAccordion.addSection( oSection4 );

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
        oSection3a.addContent( oRemarks);
        oAccordion.addSection( oSection3a );

        oCell = new sap.ui.commons.layout.MatrixLayoutCell({colSpan: 5, content: [oAccordion]})
        oLayout.createRow(oCell);

        oAccordion = new sap.ui.commons.Accordion();
        oAccordion.setWidth("99.8%")
     	//Remarks
        var oSection3c = new sap.ui.commons.AccordionSection();     
        oSection3c.setTitle("Remarks");		
        oSection3c.setTooltip("Remarks");
        oSection3c.addContent( oRemarks1);
        oAccordion.addSection( oSection3c );

        oCell = new sap.ui.commons.layout.MatrixLayoutCell({colSpan: 5, content: [oAccordion]})
        oLayout.createRow(oCell);

        oAccordion = new sap.ui.commons.Accordion();
        oAccordion.setWidth("99.8%")
     	//Proposed Payment Schedule Details
        /*var oPropPayLayout = new sap.ui.commons.layout.MatrixLayout({
			columns : 6,
			width : "100%",
			widths : [ '490px', '160px', '160px', '160px', '170px', '20%' ]
        });

        oCell = new sap.ui.commons.layout.MatrixLayoutCell({vAlign : sap.ui.commons.layout.VAlign.Bottom, colSpan: 5});
        oCell.addContent(tblProposedPay);
        oPropPayLayout.createRow(oCell);
        oPropPayLayout.createRow(null);*/
        
        /***********************TOTALS*************************/
        /*var oLblTotal = new sap.ui.commons.Label({text: "TOTALS", width: "100%"}).addStyleClass("font14ptBold");
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
        
        oPropPayLayout.createRow(oLblTotal,oTFTCP,oTFTTFE,oTFTotalSp, oTFTotalPayApp, null);*/
        /***********************TOTALS*************************/

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
			tooltip : "Approve Reinstatement",
			width : "100px",
			height : "30px",
			text : "Approve",
			press : function() {
				sap.ui.commons.MessageBox.show(
					      "Are you sure you want to approve request for Reinstatement?",
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
			tooltip : "Disapprove Reinstatement",
			width : "100px",
			height : "30px",
			text : "Disapprove",
			press : function() {
				sap.ui.commons.MessageBox.show(
					      "Are you sure you want to disapprove request for Reinstatement?",
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