sap.ui.jsview("views.Agent.NewAgent", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf views.Agent.NewAgent
	*/ 
	getControllerName : function() {
		return "views.Agent.NewAgent";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf views.Agent.NewAgent
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
        /*
		var oFields = [{group: "Basic Details"
					    ,fields: [{ label1: "Title",field1: "{title}",label2: "",field2: ""}
					    		 ,{ label1: "First Name",field1: "{firstName}",label2: "Middle Name",field2: "{middleName}"}
					    		 ,{ label1: "Last Name",field1: "{lastName}",label2: "Marital Status",field2: "{maritalStatus}"}
					    		 ,{ label1: "Citizenship",field1: "{citizenship}",label2: "Birth Date",field2: "{birthDate}"}
					    		 ]
						}
						,{group: "Address Details"
						    ,fields: [{ label1: "House Number",field1: "{houseNumber}",label2: "Telephone",field2: "{telephone}"}
				    				 ,{ label1: "Street",field1: "{street}",label2: "Mobile Number(main)",field2: "{mobileNumber}"}
				    				 ,{ label1: "City",field1: "{city}",label2: "Mobile Number(alternate)",field2: "{mobileNumberalt}"}
				    				 ,{ label1: "Country",field1: "{country}",label2: "Email Address(main)",field2: "{emailAdd}"}
				    				 ,{ label1: "Street",field1: "{street}",label2: "Email Address(alternate)",field2: "{emailAddalt}"}
				    		 ]
						}
						,{group: "Contract Details"
						    ,fields: [{ label1: "Contract Start Date",field1: "{startDate}",label2: "Contract End Date",field2: "{endDate}"}
				    				 ,{ label1: "Brand",field1: "{brand}",label2: "Position",field2: "{position}"}
				    				 ,{ label1: "Sales Group",field1: "{salesGroup}",label2: "Accredited Broker Role",field2: "{brokerRole}"}
				    				 ,{ label1: "Broker Type",field1: "{brokerType}",label2: "Accredited Broker Name",field2: "{brokerName}"}
				    				 ,{ label1: "Agent Status",field1: "{agentStatus}",label2: "Agent Allowance (half-month)",field2: "{agentAllowance}"}
				    				 ,{ label1: "TIN",field1: "{tin}",label2: "Bank Name",field2: "{Bank Name}"}
				    				 ,{ label1: "Deduct Witholding Tax",field1: "{wtax}",label2: "Bank Account",field2: "{bankAccount}"}
				    				 ,{ label1: "iText Group",field1: "{itextGroup}",label2: "",field2: ""}
				    		 ]
						}
		               ];

		for (var i = 0; i < oFields.length; i++) {
			//write Groupings
	        oCell = new sap.ui.commons.layout.MatrixLayoutCell({colSpan: 6, content: [new sap.ui.commons.Label({text: oFields[i].group , design: sap.ui.commons.LabelDesign.Bold}).addStyleClass("headerTitle")]})
	        oCell.addStyleClass("headerTitle");
	        oLayout.createRow(oCell);

			// DIVIDER
			oCell = new sap.ui.commons.layout.MatrixLayoutCell({
				colSpan : 6,
				hAlign : sap.ui.commons.layout.HAlign.Right,
				vAlign : sap.ui.commons.layout.VAlign.Bottom,
				content : [ new sap.ui.commons.HorizontalDivider() ]
			});

			oLayout.createRow(oCell);
			
			//
			oFieldList = oFields[i].fields
			for (var j = 0; j < oFieldList.length; j++) {

				var oLable1 = new sap.ui.commons.Label({text : oFieldList[j].label1});
				var oTTfield1 = new sap.ui.commons.TextField({
					width : "150px",
					value : oFieldList[j].field1
					,enabled : false
				});

				if (oFieldList[j].label2 != "") {
					var oLable2 = new sap.ui.commons.Label({text : oFieldList[j].label2});
					var oTTfield2 = new sap.ui.commons.TextField({
						width : "150px",
						value : oFieldList[j].field2
						,enabled : false
					});
				
					oLayout.createRow(oLable1, oTTfield1 , null,oLable2, oTTfield2);
				} else {
					oLayout.createRow(oLable1, oTTfield1);
				}
				
			}
		}
*/
		var oFields;
		var oBasicInfo;
		if (oAgentTitle == "Company") {
			oFields = [{ label1: "Title",field1: "{/tranDetail/TitleText}",label2: "",field2: ""}
   		 				,{ label1: "Name 1",field1: "{/tranDetail/Firstname}",label2: "",field2: "",fld2align: ""}
   		 				,{ label1: "Name 2",field1: "{/tranDetail/Lastname}",label2: "",field2: "",fld2align: ""}];

			oBasicInfo = formCreate(oFields,[ '100px', '200px', '8%', '100px', '100px','30%' ]);
		} else {
			oFields = [{ label1: "Title",field1: "{/tranDetail/TitleText}",label2: "Middle Name",field2: "{/tranDetail/Middlename}",fld2align: ""}
			    		 ,{ label1: "First Name",field1: "{/tranDetail/Firstname}",label2: "Suffix",field2: "{/tranDetail/SuffixText}",fld2align: ""}
			    		 ,{ label1: "Last Name",field1: "{/tranDetail/Lastname}",label2: "Marital Status",field2: "{/tranDetail/CivilstatusText}",fld2align: ""}
			    		 ,{ label1: "Citizenship",field1: "{/tranDetail/CitizenshipText}",label2: "Birth Date",field2: "{/tranDetail/Birthdate}",fld2align: ""}
						 //Add Christian de Leon 12/11/2018
						 ,{ label1: "REBL No.",field1: "{/tranDetail/basicInfoTobasicInfo2/0/ReblNum}",label2: "Birth Place",field2: "{/tranDetail/basicInfoTobasicInfo2/0/Birthplace}"}
						 ,{ label1: "REBL Expiration Date",field1: "{/tranDetail/basicInfoTobasicInfo2/0/ReblExpdate}",label2: "",field2: ""}];
						 //Add Christian de Leon 12/11/2018
			oBasicInfo = formCreate(oFields,[ '100px', '150px', '8%', '100px', '150px','30%' ]);
		}

		oFields = [{ label1: "House Number",field1: "{/tranDetail/basicInfoToAddressInfo/0/Housenumber}",label2: "Telephone",field2: "{/tranDetail/basicInfoToAddressInfo/0/Telephone}",fld2align: ""}
						 ,{ label1: "Street",field1: "{/tranDetail/basicInfoToAddressInfo/0/StrSuppl1}",label2: "Mobile Number(main)",field2: "{/tranDetail/basicInfoToAddressInfo/0/Mobilemain}",fld2align: ""}
						 ,{ label1: "City",field1: "{/tranDetail/basicInfoToAddressInfo/0/City}",label2: "Mobile Number(alternate)",field2: "{/tranDetail/basicInfoToAddressInfo/0/MobileAlt}",fld2align: ""}
						 ,{ label1: "Country",field1: "{/tranDetail/basicInfoToAddressInfo/0/CountryText}",label2: "Email Address(main)",field2: "{/tranDetail/basicInfoToAddressInfo/0/Email}",fld2align: ""}
						 ,{ label1: "Postal",field1: "{/tranDetail/basicInfoToAddressInfo/0/Postalcode}",label2: "Email Address(alternate)",field2: "{/tranDetail/basicInfoToAddressInfo/0/EmailAlt}",fld2align: ""}
						 ];

		var oAddress = formCreate(oFields,[ '100px', '200px', '8%', '130px', '200px','30%' ]);
		
		oFields = [{ label1: "Contract Start Date",field1: "{/tranDetail/basicInfoToContract1/0/Contractstart}",label2: "Contract End Date",field2: "{/tranDetail/basicInfoToContract1/0/Contractend}",fld2align: ""}
				 ,{ label1: "Brand",field1: "{/tranDetail/basicInfoToContract1/0/BrandText}",label2: "Position",field2: "{/tranDetail/basicInfoToContract1/0/PositionText}",fld2align: ""}
				 ,{ label1: "Sales Group",field1: "{/tranDetail/basicInfoToContract1/0/SalesGroupText}",label2: "Accredited Broker Role",field2: "{/tranDetail/basicInfoToContract1/0/BrokerRoleText}",fld2align: ""}
				 ,{ label1: "Broker Type",field1: "{/tranDetail/basicInfoToContract1/0/BrokerText}",label2: "Accredited Broker Name",field2: "{/tranDetail/basicInfoToContract1/0/BrokerName}",fld2align: ""}
				 ,{ label1: "Agent Status",field1: "{/tranDetail/basicInfoToContract1/0/AgentStatusTxt}",label2: "Agent Allowance (full-month)",field2: "{/tranDetail/basicInfoToContract1/0/AgentAllowance}",fld2align: "End"}
				 ,{ label1: "TIN",field1: "{/tranDetail/basicInfoToContract1/0/Tin}",label2: "Bank Name",field2: "{/tranDetail/basicInfoToContract1/0/Bankname}",fld2align: ""}
				 ,{ label1: "Deduct Witholding Tax",field1: "{/tranDetail/basicInfoToContract1/0/DeductText}",label2: "Bank Account",field2: "{/tranDetail/basicInfoToContract1/0/Bankacct}",fld2align: ""}
				 ,{ label1: "iText Group",field1: "{/tranDetail/basicInfoToContract1/0/ItextGroupText}",label2: "Input Tax Code",field2: "{/tranDetail/basicInfoToContract1/0/InputTaxCode}",fld2align: ""}
		 ];

		var oContract = formCreate(oFields,[ '110px', '200px', '8%', '150px', '200px','20%' ]);
		
		//Add Christian de Leon 12/11/2018 TR#JGDK901786
		//***************************** BANK DETAILS ******************************************/
		oFields = [{ label1: "Payment Method",field1: "{/tranDetail/basicInfoTobankDetails/0/PaymentMethods}",label2: "",field2: ""}
				 ,{ label1: "Account Name",field1: "{/tranDetail/basicInfoTobankDetails/0/AccountName}",label2: "",field2: ""}
				 ,{ label1: "Branch",field1: "{/tranDetail/basicInfoTobankDetails/0/Branch}",label2: "",field2: ""}
				 ,{ label1: "IBAN",field1: "{/tranDetail/basicInfoTobankDetails/0/Iban}",label2: "",field2: ""}
				 ,{ label1: "SWIFT Code",field1: "{/tranDetail/basicInfoTobankDetails/0/SwiftCode}",label2: "",field2: ""}
				 ,{ label1: "Currency",field1: "{/tranDetail/basicInfoTobankDetails/0/MinorityInd}",label2: "",field2: ""}
				 ,{ label1: "Authorized Representative",field1: "{/tranDetail/basicInfoTobankDetails/0/AuthRep}",label2: "",field2: ""}
				 ];

		var oBank = formCreate(oFields,[ '130px', '150px', '8%', '100px', '150px','30%' ]);
		//***************************** BANK DETAILS ******************************************/
		//End Add Christian de Leon 12/11/2018 TR#JGDK901786
		
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

		//***************************** TERMINATION REMARKS ******************************************/

        var oTermRemarks = new sap.ui.commons.layout.MatrixLayout({
			columns : 6,
			width : "100%",
			widths : [ '80px', '140px', '30%', '120px', '140px', '30%' ]
        });

		var oLTermRemarks = new sap.ui.commons.Label({text : "Remarks: "});	
		oTermRemarks.createRow(null,oLTermRemarks);
		
		var oTTermRemarks = new sap.ui.commons.TextArea({
			tooltip : "Termination Remarks",
			value : '{/tranDetail/termRemarks}',
			width : "100%",
			rows : 5,
			enabled: false
		});

		oCell = new sap.ui.commons.layout.MatrixLayoutCell({
			colSpan : 4,
			hAlign : sap.ui.commons.layout.HAlign.Left,
			vAlign : sap.ui.commons.layout.VAlign.Bottom,
			content : [ oTTermRemarks ]
		});
		
		oTermRemarks.createRow(null,oCell);

		//***************************** UPLINE DETAILS ******************************************/
		var tblUpline = new sap.ui.table.Table({
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

		tblUpline.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Upline Position"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "RoleText"),
        	editable: false,
        	width: "20%"
        }));

		tblUpline.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Agent Code"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "Agent"),
        	editable: false,
        	width: "20%"
        }));

		tblUpline.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Agent Name"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "AgentName"),
        	editable: false,
        	width: "30%"
        }));
		
		tblUpline.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Valid From"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "ValidFrom"),
        	editable: false,
        	width: "15%"
        }));

		tblUpline.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Valid To"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "ValidTo"),
        	editable: false,
        	width: "15%"
        }));

		tblUpline.setModel(this.getModel());
		tblUpline.bindRows("/tranDetail/basicInfoToUpline"); 
		//************************ UPLINE POSITION*******************************************/


		//***************************** COMMISSION RATES ******************************************/
		var tblRates = new sap.ui.table.Table({
            selectionMode : sap.ui.table.SelectionMode.Single,
        	selectionBehavior : sap.ui.table.SelectionBehavior.RowOnly,
        	editable: false,
        	height : "300px",
        	visibleRowCount: 5,
           // cellClick : function(oEvent){
           // 	tblItems.setSelectedIndex(oEvent.getParameter("rowIndex"));
           // },
			enabled : false 
		});


		tblRates.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Project"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "ProjectName"),
        	editable: false,
        	width: "45%"
        }));

		tblRates.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Building"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "BuildingName"),
        	editable: false,
        	width: "20%"
        }));

		tblRates.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Unit Type"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "UnitName"),
        	editable: false,
        	width: "20%"
        }));

		tblRates.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Rate"}),
        	template: new sap.ui.commons.TextView({textAlign : 'End'}).bindProperty("text", "Rate"),
        	editable: false,
        	width: "15%"
        }));
		
		tblRates.setModel(this.getModel());
		tblRates.bindRows("/tranDetail/basicInfoToCommission"); 
		//************************ Commission Rates*******************************************/

		//***************************** SPECIAL RATES ******************************************/
		var tblRates2 = new sap.ui.table.Table({
            selectionMode : sap.ui.table.SelectionMode.Single,
        	selectionBehavior : sap.ui.table.SelectionBehavior.RowOnly,
        	editable: false,
        	height : "300px",
        	visibleRowCount: 5,
           // cellClick : function(oEvent){
           // 	tblItems.setSelectedIndex(oEvent.getParameter("rowIndex"));
           // },
			enabled : false 
		});


		tblRates2.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Project"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "ProjectName"),
        	editable: false,
        	width: "45%"
        }));

		tblRates2.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Building"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "BuildingName"),
        	editable: false,
        	width: "20%"
        }));

		tblRates2.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Unit Type"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "UnitName"),
        	editable: false,
        	width: "20%"
        }));

		tblRates2.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Rate"}),
        	template: new sap.ui.commons.TextView({textAlign : 'End'}).bindProperty("text", "Rate"),
        	editable: false,
        	width: "15%"
        }));
		
		tblRates2.setModel(this.getModel());
		tblRates2.bindRows("/tranDetail/basicInfoToSpecialCommission"); 
		//************************ Special Rates*******************************************/

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
		tblApprovers.bindRows("/tranDetail/basicInfoToApprover"); 
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

        oCell = new sap.ui.commons.layout.MatrixLayoutCell({colSpan: 5, content: [oAccordion]})
        oLayout.createRow(oCell);

        oAccordion = new sap.ui.commons.Accordion();
        oAccordion.setWidth("99.8%")
     	//Address Details
        var oSection2 = new sap.ui.commons.AccordionSection();     
        oSection2.setTitle("Address Details");		
        oSection2.setTooltip("Address Details");
        oSection2.addContent( oAddress);
        oAccordion.addSection( oSection2 );

        oCell = new sap.ui.commons.layout.MatrixLayoutCell({colSpan: 5, content: [oAccordion]})
        oLayout.createRow(oCell);

        oAccordion = new sap.ui.commons.Accordion();
        oAccordion.setWidth("99.8%")
     	//Contract Details
        var oSection3 = new sap.ui.commons.AccordionSection();     
        oSection3.setTitle("Contract Details");		
        oSection3.setTooltip("Contract Details");
        oSection3.addContent( oContract);
        oAccordion.addSection( oSection3 );

        oCell = new sap.ui.commons.layout.MatrixLayoutCell({colSpan: 5, content: [oAccordion]})
        oLayout.createRow(oCell);

        oAccordion = new sap.ui.commons.Accordion();
        oAccordion.setWidth("99.8%")
        //Add Christian de Leon 12/11/2018 TR#JGDK901786
        //Bank Details
        var oSection8 = new sap.ui.commons.AccordionSection();     
        oSection8.setTitle("Bank Details");		
        oSection8.setTooltip("Bank Details");
        oSection8.addContent( oBank);
        oAccordion.addSection( oSection8 );

        oCell = new sap.ui.commons.layout.MatrixLayoutCell({colSpan: 5, content: [oAccordion]})
        oLayout.createRow(oCell);

        oAccordion = new sap.ui.commons.Accordion();
        oAccordion.setWidth("99.8%")
        //End Add Christian de Leon 12/11/2018 
        
     	//Upline Details
        var oSection4 = new sap.ui.commons.AccordionSection();     
        oSection4.setTitle("Upline Details");		
        oSection4.setTooltip("Upline Details");
        oSection4.addContent( tblUpline);
        oAccordion.addSection( oSection4 );

        oCell = new sap.ui.commons.layout.MatrixLayoutCell({colSpan: 5, content: [oAccordion]})
        oLayout.createRow(oCell);

        oAccordion = new sap.ui.commons.Accordion();
        oAccordion.setWidth("99.8%")
     	//Commission Rates
        //var oSection5 = new sap.ui.commons.AccordionSection();     
        //oSection5.setTitle("Commission Rates");		
        //oSection5.setTooltip("Commission Rates");
        //oSection5.addContent( tblRates);
        //oAccordion.addSection( oSection5 );

     	//Commission Rates
        var oSection5a = new sap.ui.commons.AccordionSection();     
        oSection5a.setTitle("Commission Rates");		
        oSection5a.setTooltip("Commission Rates");
        oSection5a.addContent( tblRates2);
        oAccordion.addSection( oSection5a );

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
     	//Termination Remarks
        var oSection3b = new sap.ui.commons.AccordionSection();     
        oSection3b.setTitle("Termination Remarks");		
        oSection3b.setTooltip("Termination Remarks");
        oSection3b.addContent( oTermRemarks);
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
			tooltip : "Approve New Agent",
			width : "100px",
			height : "30px",
			text : "Approve",
			press : function() {
				sap.ui.commons.MessageBox.show(
					      "Are you sure you want to approve request for this new Agent?",
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
			tooltip : "Disapprove New Agent",
			width : "100px",
			height : "30px",
			text : "Disapprove",
			press : function() {
				sap.ui.commons.MessageBox.show(
					      "Are you sure you want to disapprove request for this new Agent?",
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