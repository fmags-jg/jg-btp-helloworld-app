sap.ui.jsview("views.ATMI.ATMI", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf views.ATMI.ATMI
	*/ 
	getControllerName : function() {
		return "views.ATMI.ATMI";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf views.ATMI.ATMI
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
			value : '{/tranDetail/AtmiNo}',
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
							  ,{type:"Text",value:"{/tranDetail/PriorityLevel}",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"Label",value:"Reference Number",align: ""}
							  ,{type:"Text",value:"{/tranDetail/AtmiNo}",align: ""}
					  ]}
					 ,{row1: [{type:"Label",value:"Creation Date",align: ""}
					  ,{type:"Text",value:"{/tranDetail/CreationDate}",align: ""}
					  ,{type:"",value:"",align: ""}
					  ,{type:"Label",value:"Building/Land",align: ""}
					  ,{type:"Text",value:"{/tranDetail/BuildLand}",align: ""}
					  ]}
					 ,{row1: [{type:"Label",value:"Principal Buyer",align: ""}
					  ,{type:"Text",value:"{/tranDetail/PBuyer}",align: ""}
					  ,{type:"",value:"",align: ""}
					  ,{type:"Label",value:"Unit",align: ""}
					  ,{type:"Text",value:"{/tranDetail/UnitType}",align: ""}
					  ]}
					 ,{row1: [{type:"Label",value:"Co-Buyer",align: ""}
					  ,{type:"Text",value:"{/tranDetail/CoBuyer}",align: ""}
					  ,{type:"",value:"",align: ""}
					  ,{type:"Label",value:"CTS Area",align: ""}
					  ,{type:"Text",value:"{/tranDetail/CtsArea}",align: ""}
					  ]}
					 ,{row1: [{type:"Label",value:"Contract Number",align: ""}
					  ,{type:"Text",value:"{/tranDetail/ContractNo}",align: "",}
					  ,{type:"",value:"",align: ""}
					  ,{type:"Label",value:"As-Built Area",align: ""}
					  ,{type:"Text",value:"{/tranDetail/AsBuildArea}",align: ""}
					  ]}
					 ,{row1: [{type:"Label",value:"Reservation Date",align: ""}
					  ,{type:"Text",value:"{/tranDetail/ReservationDate}",align: ""}
					  ,{type:"",value:"",align: "",}
					  ,{type:"Label",value:"Main Unit or Parking Slot(s)",align: ""}
					  ,{type:"Text",value:"{/tranDetail/AppParking}",align: ""}
					  ]}
					 ,{row1: [{type:"Label",value:"Unit Type",align: ""}
					  ,{type:"Text",value:"{/tranDetail/UnitTypeDesc}",align: ""}
					  ,{type:"",value:"",align: ""}
					  ,{type:"Label",value:"EMI Reference/Unit ATMI",align: ""}
					  ,{type:"Text",value:"{/tranDetail/EmiRef}",align: ""}
					  ]}
					 ,{row1: [{type:"Label",value:"Priority Number",align: ""}
					  ,{type:"TextEnabled",value:"{/tranDetail/PriorityNo}",align: ""}
					  ,{type:"",value:"",align: ""}
					  ,{type:"Label",value:"Actual Number",align: ""}
					  ,{type:"TextEnabled",value:"{/tranDetail/ActualNo}",align: ""}
					  ]}
					 ];

		/*var oFields = [{ label1: "Priority Level",field1: "{/tranDetail/PriorityLevel}",label2: "Reference Number",field2: "{/tranDetail/AtmiNo}"}
		    		 ,{ label1: "Creation Date",field1: "{/tranDetail/CreationDate}",label2: "Building/Land",field2: "{/tranDetail/BuildLand}",fld2align: ""}
		    		 ,{ label1: "Principal Buyer",field1: "{/tranDetail/PBuyer}",label2: "Unit",field2: "{/tranDetail/Unit}",fld2align: ""}
		    		 ,{ label1: "Co-Buyer",field1: "{/tranDetail/CoBuyer}",label2: "CTS Area",field2: "{/tranDetail/CtsArea}",fld2align: ""}
		    		 ,{ label1: "Contract Number",field1: "{/tranDetail/ContractNo}",label2: "As-Built Area",field2: "{/tranDetail/AsBuildArea}",fld2align: ""}
		    		 ,{ label1: "Reservation Date",field1: "{/tranDetail/ReservationDate}",label2: "Parking Slot(s)",field2: "{/tranDetail/AppParking}",fld2align: ""}
		    		 ,{ label1: "Unit Type",field1: "{/tranDetail/UnitTypeDesc}",label2: "EMI Reference",field2: "{/tranDetail/EmiRef}",fld2align: ""}];*/

		var oATMIDetails = formDynamic(oFields, [], [ '100px', '300px', '60px', '120px', '300px','5%' ]);

       /* var oRemarks = new sap.ui.commons.layout.MatrixLayout({
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
		
		oRemarks.createRow(null,oCell);*/


		//***************************** AMR DETAILS ******************************************/
		var tblAMR = new sap.ui.table.Table({
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
		/*
		tblAMR.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: ""}),
        	template: new sap.ui.commons.TextView({textAlign: "Center"}).bindProperty("text", "Seq"),
        	editable: false,
        	width: "5%"
        }));
      */
		tblAMR.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Requirements"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "Requirement"),
        	editable: false,
        	width: "55%"
        }));

		tblAMR.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Amount Due"}),
        	template: new sap.ui.commons.TextView({textAlign: "End"}).bindProperty("text", "AmountDue"),
        	editable: false,
        	width: "15%"
        }));

		tblAMR.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Amount Paid"}),
        	template: new sap.ui.commons.TextView({textAlign: "End"}).bindProperty("text", "AmountPaid"),
        	editable: false,
        	width: "15%"
        }));

		tblAMR.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Last OR No."}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "LastOrNo"),
        	editable: false,
        	width: "15%"
        }));

		tblAMR.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Last OR Date"}),
        	template: new sap.ui.commons.TextView().bindProperty("text",{
                parts: ["LastOrDate" ],
                formatter: function(odate) {
        			return sapDateFormat(odate) ;
        			}
        	}),
        	editable: false,
        	width: "10%"
        }));
		
		tblAMR.setModel(this.getModel());
		tblAMR.bindRows("/tranDetail/ATMI_AMR_DetailSet"); 

        var oAMRLayout = new sap.ui.commons.layout.MatrixLayout({columns: 2, width : "100%", widths: ["100%", "8px"]});

		oCell = new sap.ui.commons.layout.MatrixLayoutCell({
			content : [ tblAMR ],
			colSpan : 1,
		});
		
        oAMRLayout.createRow(oCell)
        oAMRLayout.createRow(null);

		oFields = [{row1: [{type:"Label",value:"Buyer Requested Viewing Date (For Turnover's confirmation)",align: "", css: "WrapTxt"}
							  ,{type:"Text",value:"{/tranDetail/BuyerReqDate}",align: "", css: "height30px"}
							  ,{type:"",value:"",align: ""}
							  ,{type:"Label",value:"Reason",align: "", css: "WrapTxt"}
							  ,{type:"Text",value:"{/tranDetail/reasonSet/0/Line}",align: "", css: "height30px"}
					  ]}
					 ,{row1: [{type:"Label",value:"Start of Condo Dues",align: "", css: "WrapTxt"}
					  ,{type:"Text",value:"{/tranDetail/CondoDues}",align: "", css: "height30px"}
					  ,{type:"",value:"",align: ""}
					  ,{type:"Label",value:"Remarks",align: "", css: "WrapTxt"}
					  ,{type:"Text",value:"{/tranDetail/remarksSet/0/Line}",align: "", css: "height30px"}
					  ]}
					 ,{row1: [{type:"Label",value:"Financial Institution",align: "", css: "WrapTxt"}
					  ,{type:"Text",value:"{/tranDetail/financial_instSet/0/Message}",align: "", css: "height30px"}
					  ,{type:"",value:"",align: ""}
					  ,{type:"",value:"",align: ""}
					  ,{type:"",value:"",align: ""}
					  ]}
					 /*
					 ,{row1: [{type:"Label",value:"",align: ""}
					  ,{type:"",value:"",align: ""}
					  ,{type:"",value:"",align: ""}
					  ,{type:"",value:"",align: ""}
					  ,{type:"",value:"",align: ""}
					  ]}
					 ,{row1: [{type:"Label",value:"Attachments",align: ""}
					  ,{type:"View",value:"<MISSING FIELD>",align: ""}
					  ,{type:"",value:"",align: ""}
					  ,{type:"",value:"",align: ""}
					  ,{type:"",value:"",align: ""}
					  ]}
					 ,{row1: [{type:"",value:"",align: ""}
					  ,{type:"View",value:"<MISSING FIELD>",align: ""}
					  ,{type:"",value:"",align: ""}
					  ,{type:"",value:"",align: ""}
					  ,{type:"",value:"",align: ""}
					  ]}
					  */
					 ];

				        
		/*oFields = [{ label1: "Buyer Requested Viewing Date (For Turnover's confirmation)",lbl1css: "WrapTxt",field1: "{/tranDetail/BuyerReqDate}",fld1css: "height30px",label2: "Reason",lbl2css: "",field2: "{/tranDetail/reasonSet/0/Line}",fld2css: "height30px"}
		    		 ,{ label1: "Start of Condo Dues",lbl1css: "",field1: "{/tranDetail/CondoDues}",fld1css: "height30px",label2: "Remarks",lbl2css: "",field2: "{/tranDetail/remarksSet/0/Line}",fld2align: "",fld2css: "height30px"}
		    		 ,{ label1: "Financial Institution",lbl1css: "",field1: "{/tranDetail/financial_instSet/0/Message}",fld1css: "height30px",label2: "",lbl2css: "",field2: "",fld2align: "",fld2css: ""}
		    		 ,{ label1: "Attachments",lbl1css: "",field1: "<MISSING FIELD>",fld1css: "",label2: "",lbl2css: "",field2: "",fld2align: "",fld2css: ""}
		    		 ,{ label1: "",lbl1css: "",field1: "<MISSING FIELD>",fld1css: "",label2: "",lbl2css: "",field2: "",fld2align: "",fld2css: ""}];*/

		//var oAMRDetails = formDynamic(oFields, [], [ '120px', '200px', '8%', '50px', '400px','30%' ]);

		//oCell = new sap.ui.commons.layout.MatrixLayoutCell({
		//	content : [ oAMRDetails ],
		//	colSpan : 2
		//});
		
        //oAMRLayout.createRow(oCell)
        ////////////////////////////////////////////////////////////////
        
        var oAMRDtlLayout = new sap.ui.commons.layout.MatrixLayout({
			columns : 6,
			width : "100%",
			widths : [ '150px', '200px', '30px', '50px', '400px', '20%' ]
        });
        //Buyer Requested Viewing Date (For Turnover's confirmation)
        var lblConfirm = new sap.ui.commons.Label({text: "Buyer Requested Viewing Date (For Turnover's confirmation)",wrapping:true});
        //var oConfirm = new sap.ui.commons.TextField({value:"{/tranDetail/BuyerReqDate}",enabled:true});
        var oConfirm = new sap.ui.commons.DatePicker({
            //yyyymmdd: "{/tranDetail/BuyerReqDate}",
            value: {
                path: "/tranDetail/BuyerReqDate",
                type: new sap.ui.model.type.Date({
                    source: {
                        pattern: "yyyyMMdd"
                    },
                    pattern: "MM/dd/yyyy"
                })
            },
            enabled: true,
            displayFormat: "long"
        }).attachBrowserEvent("keypress", function(e) {
            e.preventDefault();
        });
        oConfirm._oFormatYyyymmdd = sap.ui.core.format.DateFormat.getInstance({
        		oFormatYyyymmdd: null,
//        		displayFormat: "medium",
        		valueFormat: "MM/dd/yyyy",
        		pattern: "MM/dd/yyyy",
        		style: "short"});
		oConfirm.setLocale("en-US");
		oConfirm.attachChange(function(oEvent) {
					if (oEvent.getParameter("invalidValue")) {
						oEvent.oSource.setValueState(sap.ui.core.ValueState.Error);
						this.setValue("");
						return;
					} else {
						oEvent.oSource.setValueState(sap.ui.core.ValueState.None);
					}
				});
		
        //Reason
        var lblReason = new sap.ui.commons.Label({text: "Reason"});
        var oReason = new sap.ui.commons.TextArea({
			width : "80%",
			rows : 3,
			enabled: false,
			value : '{/tranDetail/reasonSet}'
		});

		var oCell1 = new sap.ui.commons.layout.MatrixLayoutCell({
			content : [ lblConfirm ],
			vAlign : sap.ui.commons.layout.VAlign.Top
		});
		var oCell2 = new sap.ui.commons.layout.MatrixLayoutCell({
			content : [ oConfirm ],
			vAlign : sap.ui.commons.layout.VAlign.Top,
		});
		var oCell3 = new sap.ui.commons.layout.MatrixLayoutCell({
			content : [ lblReason ],
			vAlign : sap.ui.commons.layout.VAlign.Top,
		});
        
        oAMRDtlLayout.createRow(oCell1, oCell2, null,oCell3,oReason,null);

        //Start of Condo Dues
        var lblCondoDues = new sap.ui.commons.Label({text: "Start of Condo Dues",wrapping:false});
        var oCondoDues = new sap.ui.commons.TextField({value:"{/tranDetail/CondoDues}",enabled:false});

        //Reason
        var lblDuesRem = new sap.ui.commons.Label({text: "Remarks"});
        var oDuesRem = new sap.ui.commons.TextArea({
			width : "80%",
			rows : 3,
			enabled: false,
			value : '{/tranDetail/remarksSet}'
		});

		oCell1 = new sap.ui.commons.layout.MatrixLayoutCell({
			content : [ lblCondoDues ],
			vAlign : sap.ui.commons.layout.VAlign.Top
		});
		oCell2 = new sap.ui.commons.layout.MatrixLayoutCell({
			content : [ oCondoDues ],
			vAlign : sap.ui.commons.layout.VAlign.Top,
		});
		oCell3 = new sap.ui.commons.layout.MatrixLayoutCell({
			content : [ lblDuesRem ],
			vAlign : sap.ui.commons.layout.VAlign.Top,
		});
        
        oAMRDtlLayout.createRow(oCell1, oCell2, null,oCell3,oDuesRem,null);

        //Financial Institution
        var lblFinInst = new sap.ui.commons.Label({text: "Financial Institution",wrapping:true});
        var oFinInst = new sap.ui.commons.TextArea({
			width : "100%",
			rows : 3,
			enabled: false,
			value : '{/tranDetail/financial_instSet/0/Message}',
		});

		oCell1 = new sap.ui.commons.layout.MatrixLayoutCell({
			content : [ lblFinInst ],
			vAlign : sap.ui.commons.layout.VAlign.Top,
		});

		oCell2 = new sap.ui.commons.layout.MatrixLayoutCell({
			colSpan : 3,
			hAlign : sap.ui.commons.layout.HAlign.Left,
			vAlign : sap.ui.commons.layout.VAlign.Bottom,
			content : [ oFinInst ]
		});
		
        oAMRDtlLayout.createRow(oCell1, oCell2);
        
        oAMRLayout.createRow(oAMRDtlLayout)
        ////////////////////////////////////////////////////////////////
		//************************ OPERATION REQUIREMENTS *******************************************/
		var oFields = [{row1: [{type:"Label",value:"Notarized CTS/Addendum Date",align: ""}
				 			,{type:"DatePicker",value:"{/tranDetail/NoteDate}",align: ""}
					  ]}
					 ,{row1: [{type:"Label",value:"Signed DAS/DOAPS Received Date",align: ""}
							  ,{type:"DatePicker",value:"{/tranDetail/SignedDosDate}",align: ""}
					  ]}
					 ,{row1: [{type:"Label",value:"BIR 1904 Received Date",align: ""}
					  		 ,{type:"DatePicker",value:"{/tranDetail/BirDate}",align: ""}
					  ]}
					 ,{row1: [{type:"Label",value:"Birth Certificate",align: ""}
					 		,{type:"DatePicker",value:"{/tranDetail/BirthCert}",align: ""}
					 ]}
					 ,{row1: [{type:"Label",value:"Marriage Contract",align: ""}
			  		 		,{type:"DatePicker",value:"{/tranDetail/MarriageContract}",align: ""}
			  		 ]}
					 ,{row1: [{type:"Label",value:"WR Undertaking",align: ""}
					  		 ,{type:"DatePicker",value:"{/tranDetail/ViewDate}",align: ""}
					 ]}
					 
					 ];

//		Add Christian de Leon for date formatting 08/02/2018  
//        var oOpreqLayout = new sap.ui.commons.layout.MatrixLayout({columns: 2, width : "100%", widths: ["100%", "8px"]});
        var oOpReqLayout = new sap.ui.commons.layout.MatrixLayout({columns: 2, width : "100%", widths: ["30px", "8px"]});
        var oOpReqDtlLayout = new sap.ui.commons.layout.MatrixLayout({
			columns : 2,
			width : "100%",
			widths : [ '30px', '120px', '70%' ]
        });        
//        Notarized CTS/Addendum Date
		var oLblCts = new sap.ui.commons.Label({text : "Notarized CTS/Addendum Date",wrapping:true});					
        var oCts = new sap.ui.commons.DatePicker({
            value: {
                path: "/tranDetail/NoteDate",
                type: new sap.ui.model.type.Date({
                    source: {
                        pattern: "yyyyMMdd"
                    },
                    pattern: "MM/dd/yyyy"
                })
            },
            enabled: true,
            displayFormat: "long"
        }).attachBrowserEvent("keypress", function(e) {
            e.preventDefault();
        });        
        oCts._oFormatYyyymmdd = sap.ui.core.format.DateFormat.getInstance({
        		oFormatYyyymmdd: null,
        		valueFormat: "MM/dd/yyyy",
        		pattern: "MM/dd/yyyy",
        		style: "short"});        
		oCts.setLocale("en-US");		
		oCts.attachChange(function(oEvent) {
					if (oEvent.getParameter("invalidValue")) {
						oEvent.oSource.setValueState(sap.ui.core.ValueState.Error);
						this.setValue("");
						return;
					} else {
						oEvent.oSource.setValueState(sap.ui.core.ValueState.None);
					}
				});		        
		var oCell1 = new sap.ui.commons.layout.MatrixLayoutCell({
			content : [ oLblCts ],
			vAlign : sap.ui.commons.layout.VAlign.Top
		});		
		var oCell2 = new sap.ui.commons.layout.MatrixLayoutCell({
			content : [ oCts ],
			vAlign : sap.ui.commons.layout.VAlign.Top,
		}); 
		oOpReqDtlLayout.createRow(oCell1,oCell2);
//		Signed DAS/DOAPS Received Date
		var oLblSDDate = new sap.ui.commons.Label({text : "Signed DAS/DOAPS Received Date",wrapping:true});					
        var oSDDate = new sap.ui.commons.DatePicker({
            value: {
                path: "/tranDetail/SignedDosDate",
                type: new sap.ui.model.type.Date({
                    source: {
                        pattern: "yyyyMMdd"
                    },
                    pattern: "MM/dd/yyyy"
                })
            },
            enabled: true,
            displayFormat: "long"
        }).attachBrowserEvent("keypress", function(e) {
            e.preventDefault();
        });        
        oSDDate._oFormatYyyymmdd = sap.ui.core.format.DateFormat.getInstance({
        		oFormatYyyymmdd: null,
        		valueFormat: "MM/dd/yyyy",
        		pattern: "MM/dd/yyyy",
        		style: "short"});        
        oSDDate.setLocale("en-US");		
        oSDDate.attachChange(function(oEvent) {
					if (oEvent.getParameter("invalidValue")) {
						oEvent.oSource.setValueState(sap.ui.core.ValueState.Error);
						this.setValue("");
						return;
					} else {
						oEvent.oSource.setValueState(sap.ui.core.ValueState.None);
					}
				});		        
		var oCell3 = new sap.ui.commons.layout.MatrixLayoutCell({
			content : [ oLblSDDate ],
			vAlign : sap.ui.commons.layout.VAlign.Top
		});		
		var oCell4 = new sap.ui.commons.layout.MatrixLayoutCell({
			content : [ oSDDate ],
			vAlign : sap.ui.commons.layout.VAlign.Top,
		}); 
		oOpReqDtlLayout.createRow(oCell3,oCell4);
//		BIR 1904 Received Date
		var oLblBir1904 = new sap.ui.commons.Label({text : "BIR 1904 Received Date",wrapping:true});					
        var oBir1904 = new sap.ui.commons.DatePicker({
            value: {
                path: "/tranDetail/BirDate",
                type: new sap.ui.model.type.Date({
                    source: {
                        pattern: "yyyyMMdd"
                    },
                    pattern: "MM/dd/yyyy"
                })
            },
            enabled: true,
            displayFormat: "long"
        }).attachBrowserEvent("keypress", function(e) {
            e.preventDefault();
        });        
        oBir1904._oFormatYyyymmdd = sap.ui.core.format.DateFormat.getInstance({
        		oFormatYyyymmdd: null,
        		valueFormat: "MM/dd/yyyy",
        		pattern: "MM/dd/yyyy",
        		style: "short"});        
        oBir1904.setLocale("en-US");		
        oBir1904.attachChange(function(oEvent) {
					if (oEvent.getParameter("invalidValue")) {
						oEvent.oSource.setValueState(sap.ui.core.ValueState.Error);
						this.setValue("");
						return;
					} else {
						oEvent.oSource.setValueState(sap.ui.core.ValueState.None);
					}
				});		        
		var oCell5 = new sap.ui.commons.layout.MatrixLayoutCell({
			content : [ oLblBir1904 ],
			vAlign : sap.ui.commons.layout.VAlign.Top
		});		
		var oCell6 = new sap.ui.commons.layout.MatrixLayoutCell({
			content : [ oBir1904 ],
			vAlign : sap.ui.commons.layout.VAlign.Top,
		}); 
		oOpReqDtlLayout.createRow(oCell5,oCell6);
//		Birth Certificate
		var oLblBirth = new sap.ui.commons.Label({text : "Birth Certificate",wrapping:true});					
        var oBirth = new sap.ui.commons.DatePicker({
            value: {
                path: "/tranDetail/BirthCert",
                type: new sap.ui.model.type.Date({
                    source: {
                        pattern: "yyyyMMdd"
                    },
                    pattern: "MM/dd/yyyy"
                })
            },
            enabled: true,
            displayFormat: "long"
        }).attachBrowserEvent("keypress", function(e) {
            e.preventDefault();
        });        
        oBirth._oFormatYyyymmdd = sap.ui.core.format.DateFormat.getInstance({
        		oFormatYyyymmdd: null,
        		valueFormat: "MM/dd/yyyy",
        		pattern: "MM/dd/yyyy",
        		style: "short"});        
        oBirth.setLocale("en-US");		
        oBirth.attachChange(function(oEvent) {
					if (oEvent.getParameter("invalidValue")) {
						oEvent.oSource.setValueState(sap.ui.core.ValueState.Error);
						this.setValue("");
						return;
					} else {
						oEvent.oSource.setValueState(sap.ui.core.ValueState.None);
					}
				});		        
		var oCell7 = new sap.ui.commons.layout.MatrixLayoutCell({
			content : [ oLblBirth ],
			vAlign : sap.ui.commons.layout.VAlign.Top
		});		
		var oCell8 = new sap.ui.commons.layout.MatrixLayoutCell({
			content : [ oBirth ],
			vAlign : sap.ui.commons.layout.VAlign.Top,
		}); 
		oOpReqDtlLayout.createRow(oCell7,oCell8);
//		Marriage Contract
		var oLblMC = new sap.ui.commons.Label({text : "Marriage Contract",wrapping:true});					
        var oMC = new sap.ui.commons.DatePicker({
            value: {
                path: "/tranDetail/MarriageContract",
                type: new sap.ui.model.type.Date({
                    source: {
                        pattern: "yyyyMMdd"
                    },
                    pattern: "MM/dd/yyyy"
                })
            },
            enabled: true,
            displayFormat: "long"
        }).attachBrowserEvent("keypress", function(e) {
            e.preventDefault();
        });        
        oMC._oFormatYyyymmdd = sap.ui.core.format.DateFormat.getInstance({
        		oFormatYyyymmdd: null,
        		valueFormat: "MM/dd/yyyy",
        		pattern: "MM/dd/yyyy",
        		style: "short"});        
        oMC.setLocale("en-US");		
        oMC.attachChange(function(oEvent) {
					if (oEvent.getParameter("invalidValue")) {
						oEvent.oSource.setValueState(sap.ui.core.ValueState.Error);
						this.setValue("");
						return;
					} else {
						oEvent.oSource.setValueState(sap.ui.core.ValueState.None);
					}
				});		        
		var oCell9 = new sap.ui.commons.layout.MatrixLayoutCell({
			content : [ oLblMC ],
			vAlign : sap.ui.commons.layout.VAlign.Top
		});		
		var oCell10 = new sap.ui.commons.layout.MatrixLayoutCell({
			content : [ oMC ],
			vAlign : sap.ui.commons.layout.VAlign.Top,
		}); 
		oOpReqDtlLayout.createRow(oCell9,oCell10);
//		WR Undertaking
		var oLblWR = new sap.ui.commons.Label({text : "WR Undertaking",wrapping:true});					
        var oWR = new sap.ui.commons.DatePicker({
            value: {
                path: "/tranDetail/ViewDate",
                type: new sap.ui.model.type.Date({
                    source: {
                        pattern: "yyyyMMdd"
                    },
                    pattern: "MM/dd/yyyy"
                })
            },
            enabled: true,
            displayFormat: "long"
        }).attachBrowserEvent("keypress", function(e) {
            e.preventDefault();
        });        
        oWR._oFormatYyyymmdd = sap.ui.core.format.DateFormat.getInstance({
        		oFormatYyyymmdd: null,
        		valueFormat: "MM/dd/yyyy",
        		pattern: "MM/dd/yyyy",
        		style: "short"});        
        oWR.setLocale("en-US");		
        oWR.attachChange(function(oEvent) {
					if (oEvent.getParameter("invalidValue")) {
						oEvent.oSource.setValueState(sap.ui.core.ValueState.Error);
						this.setValue("");
						return;
					} else {
						oEvent.oSource.setValueState(sap.ui.core.ValueState.None);
					}
				});		        
		var oCell11 = new sap.ui.commons.layout.MatrixLayoutCell({
			content : [ oLblWR ],
			vAlign : sap.ui.commons.layout.VAlign.Top
		});		
		var oCell12 = new sap.ui.commons.layout.MatrixLayoutCell({
			content : [ oWR ],
			vAlign : sap.ui.commons.layout.VAlign.Top,
		}); 
		oOpReqDtlLayout.createRow(oCell11,oCell12);
		oOpReqLayout.createRow(oOpReqDtlLayout)
//        oOpReqLayout.createRow(oCell1, oCell2);
//      Add Christian de Leon for date formatting 08/02/2018
		var oOPReqmts = formDynamic(oFields ,[]
									,[ '200px', '120px','70%' ]
									);

		//************************ OPERATION REQUIREMENTS *******************************************/

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

		//************************ OPERATIONS REQUIREMENTS *****************************//
		//oFields = [{ label1: "Signed DAS/DOASPS Received Date",lbl1css: "",field1: "{/tranDetail/SignedDosDate}",fld1css: "",label2: "",lbl2css: "",field2: "",fld2css: ""}
		//    		 ,{ label1: "BIR 1904 Received Date",lbl1css: "",field1: "{/tranDetail/BirDate}",fld1css: "",label2: "",lbl2css: "",field2: "",fld2align: "",fld2css: ""}];
		//var oORDetails = formCreatewCSS(oFields,[ '150px', '150px', '30%', '100px', '150px','8px' ]);

        //************************ ACCORDION *********************************************/
        var oAccordion1 = new sap.ui.commons.Accordion({width:"99.8%"});
        
     	//Authority to Move-In Details
        var oSection1 = new sap.ui.commons.AccordionSection();     
        oSection1.setTitle("Authority to Move-In Details");		
        oSection1.setTooltip("Authority to Move-In Details");
        oSection1.addContent( oATMIDetails);
        oAccordion1.addSection( oSection1 );

        oCell = new sap.ui.commons.layout.MatrixLayoutCell({colSpan: 5, content: [oAccordion1]})
        oLayout.createRow(oCell);

        //Accounts Management Requirements
        var oAccordion2 = new sap.ui.commons.Accordion({width:"99.8%"});
        var oSection2 = new sap.ui.commons.AccordionSection();     
        oSection2.setTitle("Accounts Management Requirements");		
        oSection2.setTooltip("Accounts Management Requirements");
        oSection2.addContent( oAMRLayout);
        oAccordion2.addSection( oSection2 );

        oCell = new sap.ui.commons.layout.MatrixLayoutCell({colSpan: 5, content: [oAccordion2]})
        oLayout.createRow(oCell);

        //Operations Requirements
        var oAccordion3 = new sap.ui.commons.Accordion({width:"99.8%"});
        var oSection3 = new sap.ui.commons.AccordionSection();     
        oSection3.setTitle("Operations Requirements");		
        oSection3.setTooltip("Operations Requirements");
//        Change - Christian de Leon 08/02/2018
//        oSection3.addContent( oOPReqmts);
        oSection3.addContent( oOpReqLayout );
//      Change - Christian de Leon 08/02/2018       
        oAccordion3.addSection( oSection3 );

        oCell = new sap.ui.commons.layout.MatrixLayoutCell({colSpan: 5, content: [oAccordion3]})
        oLayout.createRow(oCell);

        //Attachments
        var oAccordion4 = new sap.ui.commons.Accordion({width:"99.8%"});
        var oSection4 = new sap.ui.commons.AccordionSection();     
        oSection4.setTitle("Attachments");		
        oSection4.setTooltip("Attachments");
        oSection4.addContent( oTableDocs);
        oAccordion4.addSection( oSection4 );

        oCell = new sap.ui.commons.layout.MatrixLayoutCell({colSpan: 5, content: [oAccordion4]})
        oLayout.createRow(oCell);

     	//Approval Path
        var oAccordion5 = new sap.ui.commons.Accordion({width:"99.8%"});
        var oSection5 = new sap.ui.commons.AccordionSection();     
        oSection5.setTitle("Approval Path");		
        oSection5.setTooltip("Approval Path");
        oSection5.addContent( tblApprovers);
        oAccordion5.addSection( oSection5 );

        oCell = new sap.ui.commons.layout.MatrixLayoutCell({colSpan: 5, content: [oAccordion5]})
        oLayout.createRow(oCell);

        //Approver's Remarks
        var oAccordion6 = new sap.ui.commons.Accordion({width:"99.8%"});
        var oSection6 = new sap.ui.commons.AccordionSection();     
        oSection6.setTitle("Approver's Remarks");		
        oSection6.setTooltip("Approver's Remarks");
        oSection6.addContent( oRemarksLayout);
        oAccordion6.addSection( oSection6 );
        
        oCell = new sap.ui.commons.layout.MatrixLayoutCell({colSpan: 5, content: [oAccordion6]})
        oLayout.createRow(oCell);
        

        //************************  BUTTONS *********************************************/
		jQuery.sap.require("sap.ui.commons.MessageBox");
		var oBtnApprove = new sap.ui.commons.Button(sessionCache["pageID"] + "oBtnApprove",{
			tooltip : "Approve Authority to Move-In",
			width : "100px",
			height : "30px",
			text : "Approve",
			press : function() {
				sap.ui.commons.MessageBox.show(
					      "Are you sure you want to approve request for Authority to Move-In?",
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
			tooltip : "Disapprove Authority to Move-In",
			width : "100px",
			height : "30px",
			text : "Disapprove",
			press : function() {
				sap.ui.commons.MessageBox.show(
					      "Are you sure you want to disapprove request for Authority to Move-In?",
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