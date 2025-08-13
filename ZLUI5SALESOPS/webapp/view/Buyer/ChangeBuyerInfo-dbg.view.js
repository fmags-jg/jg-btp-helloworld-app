sap.ui.jsview("views.Buyer.ChangeBuyerInfo", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf views.Buyer.ChangeBuyerInfo
	*/ 
	getControllerName : function() {
		return "views.Buyer.ChangeBuyerInfo";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf views.Buyer.ChangeBuyerInfo
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
			value : '{/tranDetail/REFNUMBER}',
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
        var oLayoutHead = new sap.ui.commons.layout.MatrixLayout({
			columns : 2,
			width : "100%",
			widths : [ '120px', '90%']});
        
        var oTTbuyer = new sap.ui.commons.TextField({
			width : '250px',
			value : '{/tranDetail/BUYER_TEXT}'
			,enabled : false
		});
        oLayoutHead.createRow(new sap.ui.commons.Label({text: "Buyer: "}), oTTbuyer);
        var oTTbuyerType = new sap.ui.commons.TextField({
			width : '250px',
			value : '{/tranDetail/BPTYPE_TEXT}'
			,enabled : false
		});
        oLayoutHead.createRow(new sap.ui.commons.Label({text: "Buyer Account Type: "}),oTTbuyerType);
        oCell = new sap.ui.commons.layout.MatrixLayoutCell({vAlign : sap.ui.commons.layout.VAlign.Bottom, colSpan: 4});
        oCell.addContent(oLayoutHead);
        oCell.addStyleClass("padTop3").addStyleClass("padRight1");
        oLayout.createRow(oCell);
        ////////////////////////////////////////////////////////////////////////////////////////////////////
 
        //var bpType;// = this.getModel().getProperty("/tranDetail/buyerInfoFrom/0/BPTYPE");
        var oFields;

        if (oBPType == "1") { //Person 
        	if (!oCBICitizen) {
				oFields = [{ label1: "BP Type",field1: "{/tranDetail/buyerInfoFrom/0/BPTYPE_TEXT}",field1a: "{/tranDetail/buyerInfoTo/0/BPTYPE_TEXT}",label2: "",field2: "" ,field2a: ""}
				    		 ,{ label1: "Title",field1: "{/tranDetail/buyerInfoFrom/0/TITLE_TEXT}",field1a: "{/tranDetail/buyerInfoTo/0/TITLE_TEXT}",label2: "",field2: "",fld2align: "" ,field2a: ""}
				    		 ,{ label1: "First Name",field1: "{/tranDetail/buyerInfoFrom/0/FIRSTNAME}",field1a: "{/tranDetail/buyerInfoTo/0/FIRSTNAME}",label2: "",field2: "",fld2align: "" ,field2a: ""}
				    		 ,{ label1: "Middle Name",field1: "{/tranDetail/buyerInfoFrom/0/MIDDLENAME}",field1a: "{/tranDetail/buyerInfoTo/0/MIDDLENAME}",label2: "",field2: "",fld2align: "" ,field2a: ""}
							 ,{ label1: "Last Name",field1: "{/tranDetail/buyerInfoFrom/0/LASTNAME}",field1a: "{/tranDetail/buyerInfoTo/0/LASTNAME}",label2: "",field2: "",fld2align: "" ,field2a: ""}
							 ,{ label1: "Suffix",field1: "{/tranDetail/buyerInfoFrom/0/SUFFIX_TEXT}",field1a: "{/tranDetail/buyerInfoTo/0/SUFFIX_TEXT}",label2: "",field2: "",fld2align: "" ,field2a: ""}
							 ,{ label1: "Birth Date",field1: "{/tranDetail/buyerInfoFrom/0/BIRTHDATE}",field1a: "{/tranDetail/buyerInfoTo/0/BIRTHDATE}",label2: "",field2: "",fld2align: "" ,field2a: ""}
							 ,{ label1: "Marital Status",field1: "{/tranDetail/buyerInfoFrom/0/MARITALSTATUS_TEXT}",field1a: "{/tranDetail/buyerInfoTo/0/MARITALSTATUS_TEXT}",label2: "",field2: "",fld2align: "" ,field2a: ""}
							 ,{ label1: "Citizenship",field1: "{/tranDetail/buyerInfoFrom/0/CITIZENSHIP_TEXT}",field1a: "{/tranDetail/buyerInfoTo/0/CITIZENSHIP_TEXT}",label2: "",field2: "",fld2align: "" ,field2a: ""}
							 ];
        	} else {
				oFields = [{ label1: "BP Type",field1: "{/tranDetail/buyerInfoFrom/0/BPTYPE_TEXT}",field1a: "{/tranDetail/buyerInfoTo/0/BPTYPE_TEXT}",label2: "",field2: "" ,field2a: ""}
	    		 ,{ label1: "Title",field1: "{/tranDetail/buyerInfoFrom/0/TITLE_TEXT}",field1a: "{/tranDetail/buyerInfoTo/0/TITLE_TEXT}",label2: "",field2: "",fld2align: "" ,field2a: ""}
	    		 ,{ label1: "First Name",field1: "{/tranDetail/buyerInfoFrom/0/FIRSTNAME}",field1a: "{/tranDetail/buyerInfoTo/0/FIRSTNAME}",label2: "",field2: "",fld2align: "" ,field2a: ""}
	    		 ,{ label1: "Middle Name",field1: "{/tranDetail/buyerInfoFrom/0/MIDDLENAME}",field1a: "{/tranDetail/buyerInfoTo/0/MIDDLENAME}",label2: "",field2: "",fld2align: "" ,field2a: ""}
				 ,{ label1: "Last Name",field1: "{/tranDetail/buyerInfoFrom/0/LASTNAME}",field1a: "{/tranDetail/buyerInfoTo/0/LASTNAME}",label2: "",field2: "",fld2align: "" ,field2a: ""}
				 ,{ label1: "Suffix",field1: "{/tranDetail/buyerInfoFrom/0/SUFFIX_TEXT}",field1a: "{/tranDetail/buyerInfoTo/0/SUFFIX_TEXT}",label2: "",field2: "",fld2align: "" ,field2a: ""}
				 ,{ label1: "Birth Date",field1: "{/tranDetail/buyerInfoFrom/0/BIRTHDATE}",field1a: "{/tranDetail/buyerInfoTo/0/BIRTHDATE}",label2: "",field2: "",fld2align: "" ,field2a: ""}
				 ,{ label1: "Marital Status",field1: "{/tranDetail/buyerInfoFrom/0/MARITALSTATUS_TEXT}",field1a: "{/tranDetail/buyerInfoTo/0/MARITALSTATUS_TEXT}",label2: "",field2: "",fld2align: "" ,field2a: ""}
				 ,{ label1: "Citizenship",field1: "{/tranDetail/buyerInfoFrom/0/CITIZENSHIP_TEXT}",field1a: "{/tranDetail/buyerInfoTo/0/CITIZENSHIP_TEXT}",label2: "",field2: "",fld2align: "" ,field2a: ""}
				 ,{ label1: "",field1: "",field1a: "",label2: "",field2: "",fld2align: "" ,field2a: ""}
				 ,{ label1: "Passport Details:",field1: "",field1a: "",label2: "",field2: "",fld2align: "" ,field2a: ""}
				 ,{ label1: "   Passport Number",field1: "",field1a: "{/tranDetail/buyerInfoPassport/0/Idnumber}",label2: "",field2: "",fld2align: "" ,field2a: ""}
				 ,{ label1: "   Place of Issue",field1: "",field1a: "{/tranDetail/buyerInfoPassport/0/Institute}",label2: "",field2: "",fld2align: "" ,field2a: ""}
				 ,{ label1: "   Date of Issue",field1: "",field1a: "{/tranDetail/buyerInfoPassport/0/ValidDateFrom}",label2: "",field2: "",fld2align: "" ,field2a: ""}
				 ,{ label1: "   Expiry Date",field1: "",field1a: "{/tranDetail/buyerInfoPassport/0/ValidDateTo}",label2: "",field2: "",fld2align: "" ,field2a: ""}
				 ];
        	}
        } else {
    		oFields = [{ label1: "BP Type",field1: "{/tranDetail/buyerInfoFrom/0/BPTYPE_TEXT}",field1a: "{/tranDetail/buyerInfoTo/0/BPTYPE_TEXT}",label2: "",field2: "" ,field2a: ""}
   		 	 ,{ label1: "Name 1",field1: "{/tranDetail/buyerInfoFrom/0/NAME1}",field1a: "{/tranDetail/buyerInfoTo/0/NAME1}",label2: "",field2: "",fld2align: "" ,field2a: ""}
			 ,{ label1: "Name 2",field1: "{/tranDetail/buyerInfoFrom/0/NAME2}",field1a: "{/tranDetail/buyerInfoTo/0/NAME2}",label2: "",field2: "",fld2align: "" ,field2a: ""}
			 ,{ label1: "Name 3",field1: "{/tranDetail/buyerInfoFrom/0/NAME3}",field1a: "{/tranDetail/buyerInfoTo/0/NAME3}",label2: "",field2: "",fld2align: "" ,field2a: ""}
			 ,{ label1: "Name 4",field1: "{/tranDetail/buyerInfoFrom/0/NAME4}",field1a: "{/tranDetail/buyerInfoTo/0/NAME4}",label2: "",field2: "",fld2align: "" ,field2a: ""}
			 ];
        	
        }
		var oBuyerDtls = formCreate6Cols(oFields,[ '150px', '250px', '50px', '250px', '10%', '100px', '100px', '5px', '100px','8px' ],true);

        if (oBPType == "1") {
			oFields = [   { label1: "Title",field1: "{/tranDetail/buyerInfoFrom/0/SPOUSE_TITLE_TEXT}",field1a: "{/tranDetail/buyerInfoTo/0/SPOUSE_TITLE_TEXT}",label2: "",field2: "",fld2align: "" ,field2a: ""}
			    		 ,{ label1: "First Name",field1: "{/tranDetail/buyerInfoFrom/0/SPOUSE_FIRSTNAME}",field1a: "{/tranDetail/buyerInfoTo/0/SPOUSE_FIRSTNAME}",label2: "",field2: "",fld2align: "" ,field2a: ""}
			    		 ,{ label1: "Middle Name",field1: "{/tranDetail/buyerInfoFrom/0/SPOUSE_MIDDLENAME}",field1a: "{/tranDetail/buyerInfoTo/0/SPOUSE_MIDDLENAME}",label2: "",field2: "",fld2align: "" ,field2a: ""}
						 ,{ label1: "Last Name",field1: "{/tranDetail/buyerInfoFrom/0/SPOUSE_LASTNAME}",field1a: "{/tranDetail/buyerInfoTo/0/SPOUSE_LASTNAME}",label2: "",field2: "",fld2align: "" ,field2a: ""}
						 ,{ label1: "Suffix",field1: "{/tranDetail/buyerInfoFrom/0/SPOUSE_SUFFIX_TEXT}",field1a: "{/tranDetail/buyerInfoTo/0/SPOUSE_SUFFIX_TEXT}",label2: "",field2: "",fld2align: "" ,field2a: ""}
						 ,{ label1: "Birth Date",field1: "{/tranDetail/buyerInfoFrom/0/SPOUSE_BIRTHDATE}",field1a: "{/tranDetail/buyerInfoTo/0/SPOUSE_BIRTHDATE}",label2: "",field2: "",fld2align: "" ,field2a: ""}
						 ,{ label1: "Citizenship",field1: "{/tranDetail/buyerInfoFrom/0/SPOUSE_CITIZENSHIP_TEXT}",field1a: "{/tranDetail/buyerInfoTo/0/SPOUSE_CITIZENSHIP_TEXT}",label2: "",field2: "",fld2align: "" ,field2a: ""}
						 ,{ label1: "Relationship From",field1: "{/tranDetail/buyerInfoFrom/0/SPOUSE_RELATIONSHIP_FROM}",field1a: "{/tranDetail/buyerInfoTo/0/SPOUSE_RELATIONSHIP_FROM}",label2: "",field2: "",fld2align: "" ,field2a: ""}
						 ,{ label1: "Relationship To",field1: "{/tranDetail/buyerInfoFrom/0/SPOUSE_RELATIONSHIP_TO}",field1a: "{/tranDetail/buyerInfoTo/0/SPOUSE_RELATIONSHIP_TO}",label2: "",field2: "",fld2align: "" ,field2a: ""}
						 ];
        } else {
			oFields = [   { label1: "Representative 1",field1: "{/tranDetail/buyerAttySet/Rep1From}",field1a: "{/tranDetail/buyerAttySet/Rep1To}",label2: "",field2: "",fld2align: "" ,field2a: ""}
						 ,{ label1: "Representative 2",field1: "{/tranDetail/buyerAttySet/Rep2From}",field1a: "{/tranDetail/buyerAttySet/Rep2To}",label2: "",field2: "",fld2align: "" ,field2a: ""}
					  ];
        }
        
		var oSpouseDtls = formCreate6Cols(oFields,[ '150px', '250px', '50px', '250px', '10%', '100px', '100px', '5px', '100px','8px' ],true);

		oFields = [   { label1: "Address Type",field1: "{/tranDetail/buyerInfoAddressFrom/0/ADDRESS_TYPE}",field1a: "{/tranDetail/buyerInfoAddressTo/0/ADDRESS_TYPE}",label2: "",field2: "",fld2align: "" ,field2a: ""}
		 ,{ label1: "House Number",field1: "{/tranDetail/buyerInfoAddressFrom/0/HOUSENUMBER}",field1a: "{/tranDetail/buyerInfoAddressTo/0/HOUSENUMBER}",label2: "",field2: "",fld2align: "" ,field2a: ""}
		 ,{ label1: "Street",field1: "{/tranDetail/buyerInfoAddressFrom/0/STR_SUPPL1}",field1a: "{/tranDetail/buyerInfoAddressTo/0/STR_SUPPL1}",label2: "",field2: "",fld2align: "" ,field2a: ""}
		 ,{ label1: "Street 1",field1: "{/tranDetail/buyerInfoAddressFrom/0/STR_SUPPL3}",field1a: "{/tranDetail/buyerInfoAddressTo/0/STR_SUPPL3}",label2: "",field2: "",fld2align: "" ,field2a: ""}
		 ,{ label1: "Street 2",field1: "{/tranDetail/buyerInfoAddressFrom/0/LOCATION}",field1a: "{/tranDetail/buyerInfoAddressTo/0/LOCATION}",label2: "",field2: "",fld2align: "" ,field2a: ""}
		 ,{ label1: "City",field1: "{/tranDetail/buyerInfoAddressFrom/0/CITY}",field1a: "{/tranDetail/buyerInfoAddressTo/0/CITY}",label2: "",field2: "",fld2align: "" ,field2a: ""}
		 ,{ label1: "Country",field1: "{/tranDetail/buyerInfoAddressFrom/0/COUNTRY}",field1a: "{/tranDetail/buyerInfoAddressTo/0/COUNTRY}",label2: "",field2: "",fld2align: "" ,field2a: ""}
		 ,{ label1: "Postal Code",field1: "{/tranDetail/buyerInfoAddressFrom/0/POSTALCODE}",field1a: "{/tranDetail/buyerInfoAddressTo/0/POSTALCODE}",label2: "",field2: "",fld2align: "" ,field2a: ""}
		 ];

		var oAddressDtls = formCreate6Cols(oFields,[ '150px', '200px', '50px', '200px', '10%', '100px', '100px', '5px', '100px','8px' ],true);


		
        /*
        var oRemarks = new sap.ui.commons.layout.MatrixLayout({
			columns : 6,
			width : "100%",
			widths : [ '100px', '150px', '30%', '130px', '150px','8px' ]});

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
		oRemarks.createRow(oLRemarks, oCell);
		 */
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


		//***************************** CONTRACT DETAILS ******************************************/
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
        	label: new sap.ui.commons.Label({text: "Contract Number"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "Contractnumber"),
        	editable: false,
        	width: "15%"
        }));

		tblContracts.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Building"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "BuildingText"),
        	editable: false,
        	width: "40%"
        }));

		tblContracts.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Land"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "LandText"),
        	editable: false,
        	width: "15%"
        }));
		
		tblContracts.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Unit"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "Unit"),
        	editable: false,
        	width: "15%"
        }));

		tblContracts.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Role"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "RoleText"),
        	editable: false,
        	width: "15%"
        }));

		tblContracts.setModel(this.getModel());
		tblContracts.bindRows("/tranDetail/buyerInfoContracts"); 
		//************************ CONTRACT DETAILS*******************************************/


		//***************************** CONTRACT Address ******************************************/
		var tblContractAdd = new sap.ui.table.Table({
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


		tblContractAdd.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Contract Number"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "CONTRACTNUMBER"),
        	editable: false,
        	width: "10%"
        }));

		/*tblContractAdd.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Project"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "BU_PR_NAME"),
        	editable: false,
        	width: "40%"
        }));*/

		tblContractAdd.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Building"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "BUILDING"),
        	editable: false,
        	width: "8%"
        }));

		tblContractAdd.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Land"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "LAND"),
        	editable: false,
        	width: "10%"
        }));

		tblContractAdd.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Description"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "BU_PR_NAME"),
        	editable: false,
        	width: "15%"
        }));

		tblContractAdd.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Unit"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "UNIT"),
        	editable: false,
        	width: "7%"
        }));
		
		tblContractAdd.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Main Buyer Role"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "MAIN_BUYER_ROLE_TEXT"),
        	editable: false,
        	width: "10%"
        }));

		tblContractAdd.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "From Address Type",wrapping: true}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "FROM_ADDRESS_TYPE"),
        	editable: false,
        	width: "10%"
        }));

		tblContractAdd.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Address Type Description",wrapping: true}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "FROM_ADDRESS_TYPE_TEXT"),
        	editable: false,
        	width: "10%"
        }));

		tblContractAdd.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "To Address Type",wrapping: true}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "TO_ADDRESS_TYPE"),
        	editable: false,
        	width: "10%"
        }));

		tblContractAdd.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Address Type Description",wrapping: true}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "TO_ADDRESS_TYPE_TEXT"),
        	editable: false,
        	width: "10%"
        }));
		
		tblContractAdd.setModel(this.getModel());
		tblContractAdd.bindRows("/tranDetail/buyerInfoContractAddress"); 
		//************************ CONTRACT DETAILS*******************************************/

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

		
        //************************ ACCORDION *********************************************/
        var oAccordion = new sap.ui.commons.Accordion();
        oAccordion.setWidth("99.8%")
        
     	//Current Contract Details
        var oSection1 = new sap.ui.commons.AccordionSection();     
        oSection1.setTitle("Current Contract Details");		
        oSection1.setTooltip("Current Contract Details");
        oSection1.addContent( tblContracts);
        oAccordion.addSection( oSection1 );

     	//Buyer Details

        var oBuyersLayout = new sap.ui.commons.layout.MatrixLayout({
			columns : 2,
			width : "100%",
			widths : [ '70%', '30%' ]
        });

        oBuyersLayout.createRow(oBuyerDtls, null );
        if (oBPType == "1") {
        	if (oBuyerMStatus == "Married") {
	        	oBuyersLayout.createRow(null, null );
		        var oLblSpouse = new sap.ui.commons.Label({text : "Spouse Details"}).addStyleClass("font14ptBold");
		        oBuyersLayout.createRow(oLblSpouse, null );			
		        oBuyersLayout.createRow(oSpouseDtls, null );
	         } 
        } else {
	        var oLblRep = new sap.ui.commons.Label({text : "Authorized Representative"}).addStyleClass("font14ptBold");
	        oBuyersLayout.createRow(oLblRep, null );
			
	        oBuyersLayout.createRow(oSpouseDtls, null );
        	
        }
        
        var oSection2 = new sap.ui.commons.AccordionSection();     
        oSection2.setTitle("Buyer Details");		
        oSection2.setTooltip("Buyer Details");
        oSection2.addContent( oBuyersLayout);
        oAccordion.addSection( oSection2 );

     	//Contract Details
        var oSection3 = new sap.ui.commons.AccordionSection();     
        oSection3.setTitle("Contracts");		
        oSection3.setTooltip("Contracts");
        oSection3.addContent( tblContractAdd);
        oAccordion.addSection( oSection3 );
        

     	//Address Details
        var oSection31 = new sap.ui.commons.AccordionSection();     
        oSection31.setTitle("Address Details");		
        oSection31.setTooltip("Address Details");
        oSection31.addContent( oAddressDtls);
        oAccordion.addSection( oSection31 );
        
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
        
        /*
     	//Upline Details
        var oUplineLayout = new sap.ui.commons.layout.MatrixLayout({
			columns : 3,
			width : "100%",
			widths : [ '49%', '2%','49%' ]
        });

		var oLblOld = new sap.ui.commons.Label({text : "From"}).addStyleClass("font14ptBold").addStyleClass("underline");
		var oLblNew = new sap.ui.commons.Label({text : "To"}).addStyleClass("font14ptBold").addStyleClass("underline");
		
		oUplineLayout.createRow(oLblOld, null,oLblNew );
		oUplineLayout.createRow(tblUpline2, null,tblUpline );
        
        var oSection4 = new sap.ui.commons.AccordionSection();     
        oSection4.setTitle("Upline Details");		
        oSection4.setTooltip("Upline Details");
        oSection4.addContent( oUplineLayout);
        oAccordion.addSection( oSection4 );

     	//Commission Rates
        var oSection5 = new sap.ui.commons.AccordionSection();     
        oSection5.setTitle("Commission Rates");		
        oSection5.setTooltip("Commission Rates");
        oSection5.addContent( tblRates);
        oAccordion.addSection( oSection5 );

     	//Special Rates 

        var oSplRatesLayout = new sap.ui.commons.layout.MatrixLayout({
			columns : 3,
			width : "100%",
			widths : [ '49%', '2%','49%' ]
        });

		var oLblOld = new sap.ui.commons.Label({text : "From"}).addStyleClass("font14ptBold").addStyleClass("underline");
		var oLblNew = new sap.ui.commons.Label({text : "To"}).addStyleClass("font14ptBold").addStyleClass("underline");
		
		oSplRatesLayout.createRow(oLblOld, null,oLblNew );
		oSplRatesLayout.createRow(tblSpclRates2, null,tblSpclRates );
		
        var oSection5a = new sap.ui.commons.AccordionSection();     
        oSection5a.setTitle("Special Commission Rates");		
        oSection5a.setTooltip("Special Commission Rates");
        oSection5a.addContent( oSplRatesLayout);
        oAccordion.addSection( oSection5a );
        */
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
			tooltip : "Approve Change of Buyer Info",
			width : "100px",
			height : "30px",
			text : "Approve",
			press : function() {
				sap.ui.commons.MessageBox.show(
					      "Are you sure you want to approve request for this Change of Buyer Info?",
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
			tooltip : "Disapprove Change of Buyer Info",
			width : "100px",
			height : "30px",
			text : "Disapprove",
			press : function() {
				sap.ui.commons.MessageBox.show(
					      "Are you sure you want to disapprove request for this Change of Buyer Info?",
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