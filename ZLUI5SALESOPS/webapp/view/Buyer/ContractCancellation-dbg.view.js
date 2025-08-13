sap.ui.jsview("views.Buyer.ContractCancellation", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf views.Buyer.ContractCancellation
	*/ 
	getControllerName : function() {
		return "views.Buyer.ContractCancellation";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf views.Buyer.ContractCancellation
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
        {row1: [{type:"Label",value:"Priority Level",align: ""}
		  ,{type:"Text",value:"{/tranDetail/PriorityLevel}",align: ""}
		  ,{type:"",value:"",align: ""}
		  ,{type:"Label",value:"Reference Number",align: ""}
		  ,{type:"Text",value:"{/tranDetail/AtmiNo}",align: ""}
]}
		var oFields = [{row1: [{type:"Label",value:"Contract Number",align: ""}
		  					 ,{type:"Text",value:"{/tranDetail/cnContractDetailsSet/0/Contractnumber}",align: ""}
		  					 ,{type:"",value:"",align: ""}
		  					 ,{type:"Label",value:"Date of Sale",align: ""}
		  					 ,{type:"Text",value:"{/tranDetail/cnContractDetailsSet/0/SaleDate}",align: ""}
		  					 ,{type:"",value:"",align: ""}
		  					 ,{type:"CheckBox",value:"{/tranDetail/cnContractOtherDetailsSet/0/Urgent}",align: "",text:"Urgent Request"}
						]}
						,{row1: [{type:"Label",value:"Project",align: ""}
	  					 ,{type:"Text",value:"{/tranDetail/cnContractDetailsSet/0/ProjectText}",align: ""}
	  					 ,{type:"",value:"",align: ""}
	  					 ,{type:"Label",value:"Payment Scheme",align: ""}
	  					 ,{type:"Text",value:"{/tranDetail/cnContractDetailsSet/0/SpScheme}",align: ""}
	  					 ]}
						,{row1: [{type:"Label",value:"Building",align: ""}
	  					 ,{type:"Text",value:"{/tranDetail/cnContractDetailsSet/0/BuildingText}",align: ""}
	  					 ,{type:"",value:"",align: ""}
	  					 ,{type:"Label",value:"Gross TCP",align: ""}
	  					 ,{type:"Text",value:"{/tranDetail/cnContractDetailsSet/0/TcpAmountGross}",align: "End"}
	  					 ]}
						,{row1: [{type:"Label",value:"Land",align: ""}
	  					 ,{type:"Text",value:"{/tranDetail/cnContractDetailsSet/0/LandText}",align: ""}
	  					 ,{type:"",value:"",align: ""}
	  					 ,{type:"Label",value:"Total Discount",align: ""}
	  					 ,{type:"Text",value:"{/tranDetail/cnContractDetailsSet/0/TotalDiscount}",align: "End"}
	  					 ]}
						,{row1: [{type:"Label",value:"Unit Number",align: ""}
	  					 ,{type:"Text",value:"{/tranDetail/cnContractDetailsSet/0/UnitText}",align: ""}
	  					 ,{type:"",value:"",align: ""}
	  					 ,{type:"Label",value:"Net TCP",align: ""}
	  					 ,{type:"Text",value:"{/tranDetail/cnContractDetailsSet/0/TcpAmountNet}",align: "End"}
	  					 ]}
						,{row1: [{type:"Label",value:"Unit Type",align: ""}
	  					 ,{type:"Text",value:"{/tranDetail/cnContractDetailsSet/0/UnittypeText}",align: ""}
	  					 ,{type:"",value:"",align: ""}
	  					 ,{type:"Label",value:"Total TTFE",align: ""}
	  					 ,{type:"Text",value:"{/tranDetail/cnContractDetailsSet/0/TtfeTotal}",align: "End"}
	  					 ]}
						,{row1: [{type:"Label",value:"Floor Area",align: ""}
	  					 ,{type:"Text",value:"{/tranDetail/cnContractDetailsSet/0/FloorArea}",align: ""}
	  					 ,{type:"",value:"",align: ""}
	  					 ,{type:"Label",value:"",align: ""}
	  					 ,{type:"Text",value:"",align: ""}
	  					 ]}
						,{row1: [{type:"Label",value:"Company Code",align: ""}
	  					 ,{type:"Text",value:"{/tranDetail/cnContractDetailsSet/0/CompanycodeText}",align: ""}
	  					 ,{type:"",value:"",align: ""}
	  					 ,{type:"Label",value:"ATMI Number",align: ""}
	  					 ,{type:"Text",value:"{/tranDetail/cnContractDetailsSet/0/Atminum}",align: "End"}
	  					 ]}
						,{row1: [{type:"Label",value:"Contract Type",align: ""}
	  					 ,{type:"Text",value:"{/tranDetail/cnContractDetailsSet/0/ContractypeText}",align: ""}
	  					 ,{type:"",value:"",align: ""}
	  					 ,{type:"Label",value:"EMI Number",align: ""}
	  					 ,{type:"Text",value:"{/tranDetail/cnContractDetailsSet/0/Eminum}",align: "End"}
	  					 ]}
					   ];
		
		var oBasicInfo = formDynamic(oFields,[],[ '90px', '150px', '8%', '80px', '150px','8px','30%' ]);

		oFields = [{ label1: "Maceda Qualified",field1: "{/tranDetail/cnContractOtherDetailsSet/0/Maceda}",label2: "Date of Last TCP Payment",field2: "{/tranDetail/cnContractOtherDetailsSet/0/Lastpaiddateclr}"}
		    		 ,{ label1: "Number of Months Paid",field1: "{/tranDetail/cnContractOtherDetailsSet/0/Monthspaid}",label2: "Date of Last Payment",field2: "{/tranDetail/cnContractOtherDetailsSet/0/Lastpaiddate}",fld2align: ""}
		    		 ,{ label1: "TCP Paid to Date",field1: "{/tranDetail/cnContractOtherDetailsSet/0/Totalpaid}",label2: "Number of Month(s) Past Due",field2: "{/tranDetail/cnContractOtherDetailsSet/0/Pastduecount}",fld2align: ""}
					 ,{ label1: "TCP Paid (in %)",field1: "{/tranDetail/cnContractOtherDetailsSet/0/Totalpaidpercent}",label2: "Date AR/NTC was mailed",field2: "{/tranDetail/cnContractOtherDetailsSet/0/Arntcmailed}",fld2align: ""}
					 ,{ label1: "Remaining PDC Amount",field1: "{/tranDetail/cnContractOtherDetailsSet/0/Remainingpdc}",label2: "Date NOC was mailed",field2: "{/tranDetail/cnContractOtherDetailsSet/0/Nocmailed}",fld2align: ""}
					 ,{ label1: "AA Effectivity Date",field1: "{/tranDetail/cnContractOtherDetailsSet/0/Aaeffectivedate}",label2: "NOC Remarks",field2: "{/tranDetail/cnNocRemarksSet}",fld2align: ""}
					// ,{ label1: "Request Type",field1: "{/tranDetail/cnContractOtherDetailsSet/0/Urgent}",label2: "",field2: "",fld2align: ""}
					 ];
					 
		var oOtherInfo = formCreate(oFields,[ '130px', '150px', '8%', '150px', '150px','35%' ]);

        var oRemarks = new sap.ui.commons.layout.MatrixLayout({
			columns : 6,
			width : "100%",
			widths : [ '80px', '140px', '30%', '120px', '140px', '30%' ]
        });

		var oLRemarks = new sap.ui.commons.Label({text : "Remarks: "});	
		oRemarks.createRow(null,oLRemarks);
		
		var oTRemarks = new sap.ui.commons.TextArea({
			tooltip : "Remarks",
			value : '{/tranDetail/cnRemarksSet}',
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


		//*********************** P A R K I N G ******************************************/
		var tblParking = new sap.ui.table.Table({
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

		tblParking.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Exclude"}),
        	template: new sap.ui.commons.CheckBox({editable:false}).bindProperty("checked", "Exclude"),
        	editable: false,
			enabled : false,
        	width: "5%"
        }));

		tblParking.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Contract"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "Contractnumber"),
        	editable: false,
        	width: "10%"
        }));

		tblParking.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Project"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "ProjectText"),
        	editable: false,
        	width: "10%"
        }));

		tblParking.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Building"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "BuildingText"),
        	editable: false,
        	width: "20%"
        }));

		tblParking.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Unit"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "UnitText"),
        	editable: false,
        	width: "20%"
        }));

		tblParking.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "TCP"}),
        	template: new sap.ui.commons.TextView({textAlign: "End"}).bindProperty("text", "TcpAmount", function(cellValue) {  
    			if (cellValue == undefined || cellValue == "") return "0.00";
        	     return util.Formatter.amount(cellValue);
         	}),
        	editable: false,
        	width: "15%"
        }));

		
		tblParking.setModel(this.getModel());
		tblParking.bindRows("/tranDetail/cnParkedContractsSet"); 
		//************************ P A R K I N G *******************************************/


		//*********************** B U Y E R S ******************************************/
		var tblBuyers = new sap.ui.table.Table({
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

		tblBuyers.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Role"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "Role"),
        	editable: false,
        	width: "10%"
        }));

		tblBuyers.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Role Description"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "RoleText"),
        	editable: false,
        	width: "10%"
        }));

		tblBuyers.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "BP Number"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "Businesspartner"),
        	editable: false,
        	width: "15%"
        }));

		tblBuyers.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Country of Residence"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "CountryResidence"),
        	editable: false,
        	width: "15%"
        }));

		tblBuyers.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Country of Work"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "CountryWork"),
        	editable: false,
        	width: "15%"
        }));

		tblBuyers.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Name"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "Name"),
        	editable: false,
        	width: "20%"
        }));

		tblBuyers.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "JG Summit Employee"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "taffGrp"),
        	editable: false,
        	width: "15%"
        }));

		tblBuyers.setModel(this.getModel());
		tblBuyers.bindRows("/tranDetail/cnBuyersSet"); 
		//************************ B U Y E R S *******************************************/


		//*************** C O M M I S S I O N    D E T A I L S ***************************/
		var tblCommission = new sap.ui.table.Table({
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

		tblCommission.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Contract No."}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "Contract"),
        	editable: false,
        	width: "10%"
        }));
		/*
		tblCommission.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Unit"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "Missing Field"),
        	editable: false,
        	width: "10%"
        }));
		*/
		tblCommission.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Agent"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "Partner"),
        	editable: false,
        	width: "15%"
        }));

		tblCommission.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Name"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "Name"),
        	editable: false,
        	width: "20%"
        }));

		tblCommission.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Position"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "Rltxt"),
        	editable: false,
        	width: "15%"
        }));

		tblCommission.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Commision Net Due"}),
        	template: new sap.ui.commons.TextView({ textAlign: "End"}).bindProperty("text", "CommDue"),
        	editable: false,
        	width: "10%",
        	
        }));

		tblCommission.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Commission Released"}),
        	template: new sap.ui.commons.TextView({ textAlign: "End"}).bindProperty("text", "CommPaid"),
        	editable: false,
        	width: "10%"
        }));
		
		tblCommission.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Commission Balance"}),
        	template: new sap.ui.commons.TextView({ textAlign: "End"}).bindProperty("text", "Balance"),
        	editable: false,
        	width: "10%"
        }));

		tblCommission.setModel(this.getModel());
		tblCommission.bindRows("/tranDetail/cnCommissionDetailsSet"); 
		//*************** C O M M I S S I O N    D E T A I L S ***************************/


		//*************** R E F U N D  ***************************/
		var tblRefund = new sap.ui.table.Table({
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

		tblRefund.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Particulars"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "Particulars"),
        	editable: false,
        	width: "40%"
        }));

		tblRefund.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Unit"}),
        	template: new sap.ui.commons.TextView({ textAlign: "End"}).bindProperty("text", "Unit"),
        	editable: false,
        	width: "20%"
        }));
		
		tblRefund.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "{/tranDetail/cnRefundSet/0/Parkingcn1}"}),
        	template: new sap.ui.commons.TextView({ textAlign: "End"}).bindProperty("text", "Parking1"),
        	editable: false,
        	width: "20%"
        }));
		
		tblRefund.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "{/tranDetail/cnRefundSet/0/Parkingcn2}"}),
        	template: new sap.ui.commons.TextView({ textAlign: "End"}).bindProperty("text", "Parking2"),
        	editable: false,
        	width: "20%"
        }));

		tblRefund.setModel(this.getModel());
		tblRefund.bindRows("/tranDetail/cnRefundSet"); 
		//*************** R E F U N D  ***************************/


		//*************** F O R F E I T U R E  ***************************/
		var tblForfeiture = new sap.ui.table.Table({
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

		tblForfeiture.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Particulars"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "Particulars"),
        	editable: false,
        	width: "40%"
        }));

		tblForfeiture.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Unit"}),
        	template: new sap.ui.commons.TextView({ textAlign: "End"}).bindProperty("text", "Unit"),
        	editable: false,
        	width: "20%"
        }));

		tblForfeiture.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "{/tranDetail/cnForfeitSet/0/Parkingcn1}"}),
        	template: new sap.ui.commons.TextView({ textAlign: "End"}).bindProperty("text", "Parking1"),
        	editable: false,
        	width: "20%"
        }));
		
		tblForfeiture.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "{/tranDetail/cnForfeitSet/0/Parkingcn2}"}),
        	template: new sap.ui.commons.TextView({ textAlign: "End"}).bindProperty("text", "Parking2"),
        	editable: false,
        	width: "20%"
        }));


		tblForfeiture.setModel(this.getModel());
		tblForfeiture.bindRows("/tranDetail/cnForfeitSet"); 
		//*************** F O R F E I T U R E  ***************************/


		//*************** T R A N S F E R    D E T A I L S ***************************/
		var tblTransfer = new sap.ui.table.Table({
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

		tblTransfer.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Principal Buyer"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "Partner"),
        	editable: false,
        	width: "20%"
        }));

		tblTransfer.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Contract"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "Contractnumber"),
        	editable: false,
        	width: "20%",
        	
        }));

		tblTransfer.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Transfer Amount"}),
        	template: new sap.ui.commons.TextView({ textAlign: "End"}).bindProperty("text", "Amount", function(cellValue) {  
    			if (cellValue == undefined || cellValue == "") return "0.00";
        	     return util.Formatter.amount(cellValue);
         	}),
        	editable: false,
        	width: "20%"
        }));
		
		tblTransfer.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Transfer Percentage"}),
        	template: new sap.ui.commons.TextView({ textAlign: "End"}).bindProperty("text", "Percentage"),
        	editable: false,
        	width: "20%"
        }));

		tblTransfer.setModel(this.getModel());
		tblTransfer.bindRows("/tranDetail/cnTransferSet"); 
		//***************  T R A N S F E R    D E T A I L S ***************************/
		
		//*************** C A N C E L L A T I O N  ************************************/
        var oCancellationLayout = new sap.ui.commons.layout.MatrixLayout({
			columns : 7,
			width : "100%",
			widths : [ '250px', '10px','150px', '10px', '150px', '15%','35%' ]
        });

		var olbl1 = new sap.ui.commons.Label({text : "Reason for Cancellation"});
		//var otxt1 = new sap.ui.commons.TextField({
		//	width : "100%",
		//	value : "{/tranDetail/cnCancellationDetailsSet/0/Cancelreason}"
		//	,enabled : false
		//});

		var otxt1 = new sap.ui.commons.TextArea({
			tooltip : "Reason for Cancellation",
			width : "100%",
			rows : 4,
			value : "{/tranDetail/cnCancellationDetailsSet/0/Canceltext}"
			,enabled : false
		});

		oCell = new sap.ui.commons.layout.MatrixLayoutCell({
			colSpan : 4,
			hAlign : sap.ui.commons.layout.HAlign.Left,
			vAlign : sap.ui.commons.layout.VAlign.Bottom,
			content : [ otxt1 ]
		});
		
		oCancellationLayout.createRow(olbl1, null,oCell,null );

		var olbl2 = new sap.ui.commons.Label({text : "Reason for Back-out/Default"});
		/*
		var otxt2 = new sap.ui.commons.TextField({
			width : "100%",
			value : "{/tranDetail/cnCancellationDetailsSet/0/Backoutreason}"
			,enabled : false
		});
*/
		var otxt2 = new sap.ui.commons.TextArea({
			tooltip : "Reason for Back-out/Default",
			width : "100%",
			rows : 4,
			value : "{/tranDetail/cnCancellationDetailsSet/0/Backouttext}"
			,enabled : false
		});

		oCell = new sap.ui.commons.layout.MatrixLayoutCell({
			colSpan : 4,
			hAlign : sap.ui.commons.layout.HAlign.Left,
			vAlign : sap.ui.commons.layout.VAlign.Bottom,
			content : [ otxt2 ]
		});
		
		oCancellationLayout.createRow(olbl2, null,oCell,null );

		var olbl3 = new sap.ui.commons.Label({text : "Other Reason"});
		/*
		var otxt3 = new sap.ui.commons.TextField({
			width : "100%",
			value : "{/tranDetail/cnOtherReasonSet}"
			,enabled : false
		});
*/
		var otxt3 = new sap.ui.commons.TextArea({
			tooltip : "Other Reason",
			width : "100%",
			rows : 4,
			value : "{/tranDetail/cnOtherReasonSet}"
			,enabled : false
		});

		oCell = new sap.ui.commons.layout.MatrixLayoutCell({
			colSpan : 4,
			hAlign : sap.ui.commons.layout.HAlign.Left,
			vAlign : sap.ui.commons.layout.VAlign.Bottom,
			content : [ otxt3 ]
		});
		
		oCancellationLayout.createRow(olbl3, null,oCell,null );
		
		var olbl3 = new sap.ui.commons.Label({text : "Amount(Php)",textAlign: "Center" });
		var olbl3a = new sap.ui.commons.Label({text : "Percentage", textAlign: "Center"});
		oCancellationLayout.createRow(null,null,olbl3, null,olbl3a );

		var olbl4 = new sap.ui.commons.Label({text : "Total TCP Payments Made (Unit and Parking)"});
		var otxt4 = new sap.ui.commons.TextField({
			width : "100%",
			value : "{/tranDetail/cnCancellationDetailsSet/0/Totalpaid}"
			,enabled : false
			,textAlign: "End"
		});
		var otxt4a = new sap.ui.commons.TextField({
			width : "100%",
			value : "{/tranDetail/cnCancellationDetailsSet/0/Totalpaidperc}"
			,enabled : false
			,textAlign: "End"
		});
		
		oCancellationLayout.createRow(olbl4, null,otxt4,null,otxt4a );

		var olbl4c = new sap.ui.commons.Label({text : "Total TTFE Payments Made (Unit and Parking)"});
		var otxt4c = new sap.ui.commons.TextField({
			width : "100%",
			value : "{/tranDetail/cnCancellationDetailsSet/0/Totalttfe}"
			,enabled : false
			,textAlign: "End"
		});
		var otxt4d = new sap.ui.commons.TextField({
			width : "100%",
			value : "{/tranDetail/cnCancellationDetailsSet/0/Totalttfeperc}"
			,enabled : false
			,textAlign: "End"
		});
		
		oCancellationLayout.createRow(olbl4c, null,otxt4c,null,otxt4d );

		var olbl5 = new sap.ui.commons.Label({text : "Total Amount for Refund"});
		var otxt5 = new sap.ui.commons.TextField({
			width : "100%",
			value : "{/tranDetail/cnCancellationDetailsSet/0/Totalrefund}"
			,enabled : false
			,textAlign: "End"
		});
		var otxt5a = new sap.ui.commons.TextField({
			width : "100%",
			value : "{/tranDetail/cnCancellationDetailsSet/0/Totalrefundperc}"
			,enabled : false
			,textAlign: "End"
		});
		
		oCancellationLayout.createRow(olbl5, null,otxt5,null,otxt5a );

		var olbl6 = new sap.ui.commons.Label({text : "Total Amount for Forfeiture"});
		var otxt6 = new sap.ui.commons.TextField({
			width : "100%",
			value : "{/tranDetail/cnCancellationDetailsSet/0/Totalforfeit}"
			,enabled : false
			,textAlign: "End"
		});
		var otxt6a = new sap.ui.commons.TextField({
			width : "100%",
			value : "{/tranDetail/cnCancellationDetailsSet/0/Totalforfeitperc}"
			,enabled : false
			,textAlign: "End"
		});
		
		oCancellationLayout.createRow(olbl6, null,otxt6,null,otxt6a );

		var olbl7 = new sap.ui.commons.Label({text : "Total Amount for Transfer"});
		var otxt7 = new sap.ui.commons.TextField({
			width : "100%",
			value : "{/tranDetail/cnCancellationDetailsSet/0/Totaltransfer}"
			,enabled : false
			,textAlign: "End"
		});
		var otxt7a = new sap.ui.commons.TextField({
			width : "100%",
			value : "{/tranDetail/cnCancellationDetailsSet/0/Totaltransferperc}"
			,enabled : false
			,textAlign: "End"
		});
		
		oCancellationLayout.createRow(olbl7, null,otxt7,null,otxt7a );

		var olbl8 = new sap.ui.commons.Label({text : "Refund:"});
		oCancellationLayout.createRow(olbl8);
		
		oCell = new sap.ui.commons.layout.MatrixLayoutCell({
			colSpan : 6,
			hAlign : sap.ui.commons.layout.HAlign.Left,
			vAlign : sap.ui.commons.layout.VAlign.Bottom,
			content : [ tblRefund ]
		});
		oCancellationLayout.createRow(oCell );

		var olbl8 = new sap.ui.commons.Label({text : "Forfeiture:"});
		oCancellationLayout.createRow(olbl8);
		
		oCell = new sap.ui.commons.layout.MatrixLayoutCell({
			colSpan : 6,
			hAlign : sap.ui.commons.layout.HAlign.Left,
			vAlign : sap.ui.commons.layout.VAlign.Bottom,
			content : [ tblForfeiture ]
		});
		oCancellationLayout.createRow(oCell );

		var olbl9 = new sap.ui.commons.Label({text : "Transfer:"});
		oCancellationLayout.createRow(olbl9);
		
		oCell = new sap.ui.commons.layout.MatrixLayoutCell({
			colSpan : 6,
			hAlign : sap.ui.commons.layout.HAlign.Left,
			vAlign : sap.ui.commons.layout.VAlign.Bottom,
			content : [ tblTransfer ]
		});
		oCancellationLayout.createRow(oCell );
		//*************** C A N C E L L A T I O N   ***********************************/
		

		//*************** RECOMMENDATION/JUSTIFICATION/OTHER INSTRUCTIONS***********************************/
        var oInstructionLayout = new sap.ui.commons.layout.MatrixLayout({
			columns : 8,
			width : "100%",
			widths : [ '150px', '10px','150px', '10px', '100px', '10px', '100px', '50%' ]
        });

		var olbl9 = new sap.ui.commons.Label({text : "Refund Type"});
		var otxt9 = new sap.ui.commons.TextField({
			width : "100%",
			value : "{/tranDetail/cnInstructionsSet/0/Refundtype}"
			,enabled : false
		});
		
		oInstructionLayout.createRow(olbl9, null,otxt9 );

		var olbl10 = new sap.ui.commons.Label({text : "Remarks"});

		var oTRemarks2 = new sap.ui.commons.TextArea({
			tooltip : "Remarks",
			value : '{/tranDetail/cnInstructionRemarksSet}',
			width : "100%",
			rows : 5,
			enabled: false
		});

		oCell = new sap.ui.commons.layout.MatrixLayoutCell({
			colSpan : 6,
			hAlign : sap.ui.commons.layout.HAlign.Left,
			vAlign : sap.ui.commons.layout.VAlign.Bottom,
			content : [ oTRemarks2 ]
		});
		oInstructionLayout.createRow(olbl10, null,oCell);
		oInstructionLayout.createRow(null);
		

		var olbl11 = new sap.ui.commons.Label({text : "Dollar Rate"});
		var otxt11 = new sap.ui.commons.TextField({
			width : "100%",
			value : "{/tranDetail/cnAmtConversionSet/0/ExchangeRate}"
			,enabled : false
			,textAlign: "End"
		});
		var olbl12 = new sap.ui.commons.Label({text : "Date",width : "100%",textAlign: "End"});
		var otxt12 = new sap.ui.commons.TextField({
			width : "100%",
			value : "{/tranDetail/cnAmtConversionSet/0/Date}"
			,enabled : false
			,textAlign: "End"
		});

		oInstructionLayout.createRow(olbl11, null,otxt11,null,olbl12,null,otxt12 );

		var olbl13 = new sap.ui.commons.Label({text : "PHP",width : "100%", textAlign: "Center"});
		var olbl14 = new sap.ui.commons.Label({text : "USD",width : "100%",textAlign: "Center"});
		
		oInstructionLayout.createRow(null, null,null,null,olbl13,null,olbl14 );
		
		var olbl15 = new sap.ui.commons.Label({text : "Amount for Refund"});
		var otxt15 = new sap.ui.commons.TextField({
			width : "100%",
			value : "{/tranDetail/cnAmtConversionSet/0/RefundAmount}"
			,enabled : false
			,textAlign: "End"
		});
		var otxt16 = new sap.ui.commons.TextField({
			width : "100%",
			value : "{/tranDetail/cnAmtConversionSet/0/RefundAmountConv}"
			,enabled : false
			,textAlign: "End"
		});
		
		oInstructionLayout.createRow(olbl15, null,null,null,otxt15,null,otxt16 );

		var olbl17 = new sap.ui.commons.Label({text : "Less: Telegraphic Trasfer Fee"});
		var otxt17 = new sap.ui.commons.TextField({
			width : "100%",
			value : "{/tranDetail/cnAmtConversionSet/0/TeleAmount}"
			,enabled : false
			,textAlign: "End"
		});
		var otxt18 = new sap.ui.commons.TextField({
			width : "100%",
			value : "{/tranDetail/cnAmtConversionSet/0/TeleAmountConv}"
			,enabled : false
			,textAlign: "End"
		});
		
		oInstructionLayout.createRow(olbl17, null,null,null,otxt17,null,otxt18 );

		var olbl19 = new sap.ui.commons.Label({text : "Total Amount for Refund"});
		var otxt19 = new sap.ui.commons.TextField({
			width : "100%",
			value : "{/tranDetail/cnAmtConversionSet/0/TotalAmount}"
			,enabled : false
			,textAlign: "End"
		});
		var otxt20 = new sap.ui.commons.TextField({
			width : "100%",
			value : "{/tranDetail/cnAmtConversionSet/0/TotalAmountConv}"
			,enabled : false
			,textAlign: "End"
		});
		
		oInstructionLayout.createRow(olbl19, null,null,null,otxt19,null,otxt20 );

		oInstructionLayout.createRow(null );

		var olbl21 = new sap.ui.commons.Label({text : "To allow refund via telegraphic transfer, bank details are as follows:"});

		oCell = new sap.ui.commons.layout.MatrixLayoutCell({
			colSpan : 8,
			hAlign : sap.ui.commons.layout.HAlign.Left,
			vAlign : sap.ui.commons.layout.VAlign.Bottom,
			content : [ olbl21 ]
		});
		oInstructionLayout.createRow(oCell );


		var olbl22 = new sap.ui.commons.Label({text : "Account Name"});
		var otxt22 = new sap.ui.commons.TextField({
			width : "100%",
			value : "{/tranDetail/cnInstructionsSet/0/Accountname}"
			,enabled : false
		});

		oCell = new sap.ui.commons.layout.MatrixLayoutCell({
			colSpan : 4,
			hAlign : sap.ui.commons.layout.HAlign.Left,
			vAlign : sap.ui.commons.layout.VAlign.Bottom,
			content : [ otxt22 ]
		});
		
		oInstructionLayout.createRow(olbl22, null,oCell );

		var olbl23 = new sap.ui.commons.Label({text : "Account Number"});
		var otxt23 = new sap.ui.commons.TextField({
			width : "100%",
			value : "{/tranDetail/cnInstructionsSet/0/Accountnumber}"
			,enabled : false
		});

		oCell = new sap.ui.commons.layout.MatrixLayoutCell({
			colSpan : 4,
			hAlign : sap.ui.commons.layout.HAlign.Left,
			vAlign : sap.ui.commons.layout.VAlign.Bottom,
			content : [ otxt23 ]
		});
		
		oInstructionLayout.createRow(olbl23, null,oCell );

		var olbl24 = new sap.ui.commons.Label({text : "Routing Number"});
		var otxt24 = new sap.ui.commons.TextField({
			width : "100%",
			value : "{/tranDetail/cnInstructionsSet/0/Routingnumber}"
			,enabled : false
		});

		oCell = new sap.ui.commons.layout.MatrixLayoutCell({
			colSpan : 4,
			hAlign : sap.ui.commons.layout.HAlign.Left,
			vAlign : sap.ui.commons.layout.VAlign.Bottom,
			content : [ otxt24 ]
		});
		
		oInstructionLayout.createRow(olbl24, null,oCell );

		var olbl24 = new sap.ui.commons.Label({text : "Swift Code"});
		var otxt24 = new sap.ui.commons.TextField({
			width : "100%",
			value : "{/tranDetail/cnInstructionsSet/0/Swiftcode}"
			,enabled : false
		});

		oCell = new sap.ui.commons.layout.MatrixLayoutCell({
			colSpan : 4,
			hAlign : sap.ui.commons.layout.HAlign.Left,
			vAlign : sap.ui.commons.layout.VAlign.Bottom,
			content : [ otxt24 ]
		});
		
		oInstructionLayout.createRow(olbl24, null,oCell );

		var olbl25 = new sap.ui.commons.Label({text : "Bank"});
		var otxt25 = new sap.ui.commons.TextField({
			width : "100%",
			value : "{/tranDetail/cnInstructionsSet/0/Bank}"
			,enabled : false
		});

		oCell = new sap.ui.commons.layout.MatrixLayoutCell({
			colSpan : 4,
			hAlign : sap.ui.commons.layout.HAlign.Left,
			vAlign : sap.ui.commons.layout.VAlign.Bottom,
			content : [ otxt25 ]
		});
		oInstructionLayout.createRow(olbl25, null,oCell );
		
		var olbl26 = new sap.ui.commons.Label({text : "Bank Address"});
		var otxt26 = new sap.ui.commons.TextField({
			width : "100%",
			value : "{/tranDetail/cnInstructionsSet/0/Bankaddress}"
			,enabled : false
		});

		oCell = new sap.ui.commons.layout.MatrixLayoutCell({
			colSpan : 4,
			hAlign : sap.ui.commons.layout.HAlign.Left,
			vAlign : sap.ui.commons.layout.VAlign.Bottom,
			content : [ otxt26 ]
		});
		
		oInstructionLayout.createRow(olbl26, null,oCell );
		

		var olbl27 = new sap.ui.commons.Label({text : "Home Address"});
		var otxt27 = new sap.ui.commons.TextField({
			width : "100%",
			value : "{/tranDetail/cnInstructionsSet/0/Homeaddress}"
			,enabled : false
		});

		oCell = new sap.ui.commons.layout.MatrixLayoutCell({
			colSpan : 4,
			hAlign : sap.ui.commons.layout.HAlign.Left,
			vAlign : sap.ui.commons.layout.VAlign.Bottom,
			content : [ otxt27 ]
		});
		
		oInstructionLayout.createRow(olbl27, null,oCell );
		//*************** RECOMMENDATION/JUSTIFICATION/OTHER INSTRUCTIONS***********************************/

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

		
        //************************ ACCORDION *********************************************/
        var oAccordion1 = new sap.ui.commons.Accordion({width:"99.8%"});

     	//Current Contract Details
        var oSection1 = new sap.ui.commons.AccordionSection();     
        oSection1.setTitle("Current Contract Details");		
        oSection1.setTooltip("Current Contract Details");
        oSection1.addContent( oBasicInfo);
        oAccordion1.addSection( oSection1 );

        oCell = new sap.ui.commons.layout.MatrixLayoutCell({colSpan: 5, content: [oAccordion1]})
        oLayout.createRow(oCell);
        
        //Parking
        var oAccordion2 = new sap.ui.commons.Accordion({width:"99.8%"});
        
        var oSection2 = new sap.ui.commons.AccordionSection();     
        oSection2.setTitle("Parking");		
        oSection2.setTooltip("Parking");
        oSection2.addContent( tblParking);
        oAccordion2.addSection( oSection2 );

        oCell = new sap.ui.commons.layout.MatrixLayoutCell({colSpan: 5, content: [oAccordion2]})
        oLayout.createRow(oCell);
        
        //Buyers
        var oAccordion3 = new sap.ui.commons.Accordion({width:"99.8%"});
        var oSection3 = new sap.ui.commons.AccordionSection();     
        oSection3.setTitle("Buyers");		
        oSection3.setTooltip("Buyers");
        oSection3.addContent( tblBuyers);
        oAccordion3.addSection( oSection3 );

        oCell = new sap.ui.commons.layout.MatrixLayoutCell({colSpan: 5, content: [oAccordion3]})
        oLayout.createRow(oCell);

     	//Other Details
        var oAccordion4 = new sap.ui.commons.Accordion({width:"99.8%"});
        var oSection4 = new sap.ui.commons.AccordionSection();     
        oSection4.setTitle("Other Details");		
        oSection4.setTooltip("Other Details");
        oSection4.addContent( oOtherInfo);
        oAccordion4.addSection( oSection4 );

        oCell = new sap.ui.commons.layout.MatrixLayoutCell({colSpan: 5, content: [oAccordion4]})
        oLayout.createRow(oCell);

        var oAccordion5 = new sap.ui.commons.Accordion({width:"99.8%"});
        var oSection5 = new sap.ui.commons.AccordionSection();     
        oSection5.setTitle("Commission Details");		
        oSection5.setTooltip("Commission Details");
        oSection5.addContent( tblCommission);
        oAccordion5.addSection( oSection5 );

        oCell = new sap.ui.commons.layout.MatrixLayoutCell({colSpan: 5, content: [oAccordion5]})
        oLayout.createRow(oCell);
        
        //Cancellation Details
        var oAccordion6 = new sap.ui.commons.Accordion({width:"99.8%"});
        var oSection6 = new sap.ui.commons.AccordionSection();     
        oSection6.setTitle("Cancellation Details");		
        oSection6.setTooltip("Cancellation Details");
        oSection6.addContent( oCancellationLayout);
        oAccordion6.addSection( oSection6 );

        oCell = new sap.ui.commons.layout.MatrixLayoutCell({colSpan: 5, content: [oAccordion6]})
        oLayout.createRow(oCell);
        
        //Recommendation/Justification/Other Instructions
        var oAccordion7 = new sap.ui.commons.Accordion({width:"99.8%"});
        var oSection7 = new sap.ui.commons.AccordionSection();     
        oSection7.setTitle("Recommendation/Justification/Other Instructions");		
        oSection7.setTooltip("Recommendation/Justification/Other Instructions");
        oSection7.addContent( oInstructionLayout);
        oAccordion7.addSection( oSection7 );

        oCell = new sap.ui.commons.layout.MatrixLayoutCell({colSpan: 5, content: [oAccordion7]})
        oLayout.createRow(oCell);
        
     	//Remarks
        var oAccordion8 = new sap.ui.commons.Accordion({width:"99.8%"});
        var oSection8 = new sap.ui.commons.AccordionSection();     
        oSection8.setTitle("Remarks");		
        oSection8.setTooltip("Remarks");
        oSection8.addContent( oRemarks);
        oAccordion8.addSection( oSection8 );

        oCell = new sap.ui.commons.layout.MatrixLayoutCell({colSpan: 5, content: [oAccordion8]})
        oLayout.createRow(oCell);
        
        //Attachments
        var oAccordion9 = new sap.ui.commons.Accordion({width:"99.8%"});
        var oSection9 = new sap.ui.commons.AccordionSection();     
        oSection9.setTitle("Attachments");		
        oSection9.setTooltip("Attachments");
        oSection9.addContent( oTableDocs);
        oAccordion9.addSection( oSection9 );

        oCell = new sap.ui.commons.layout.MatrixLayoutCell({colSpan: 5, content: [oAccordion9]})
        oLayout.createRow(oCell);
        
     	//Approval Path
        var oAccordion10 = new sap.ui.commons.Accordion({width:"99.8%"});
        var oSection10 = new sap.ui.commons.AccordionSection();
        oSection10.setTitle("Approval Path");
        oSection10.setTooltip("Approval Path");
        oSection10.addContent( tblApprovers);
        oAccordion10.addSection( oSection10 );

        oCell = new sap.ui.commons.layout.MatrixLayoutCell({colSpan: 5, content: [oAccordion10]})
        oLayout.createRow(oCell);
        
        //Approver's Remarks
        var oAccordion11 = new sap.ui.commons.Accordion({width:"99.8%"});
        var oSection11 = new sap.ui.commons.AccordionSection();     
        oSection11.setTitle("Approver's Remarks");		
        oSection11.setTooltip("Approver's Remarks");
        oSection11.addContent( oRemarksLayout);
        oAccordion11.addSection( oSection11 );
        
        oCell = new sap.ui.commons.layout.MatrixLayoutCell({colSpan: 5, content: [oAccordion11]})
        oLayout.createRow(oCell);
        
        //************************  BUTTONS *********************************************/
		jQuery.sap.require("sap.ui.commons.MessageBox");
		var oBtnApprove = new sap.ui.commons.Button(sessionCache["pageID"] + "oBtnApprove",{
			tooltip : "Approve Cancellation of Contract",
			width : "100px",
			height : "30px",
			text : "Approve",
			press : function() {
				sap.ui.commons.MessageBox.show(
					      "Are you sure you want to approve request for Cancellation of Contract?",
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
			tooltip : "Disapprove Cancellation of Contract",
			width : "100px",
			height : "30px",
			text : "Disapprove",
			press : function() {
				sap.ui.commons.MessageBox.show(
					      "Are you sure you want to disapprove request for Cancellation of Contract?",
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