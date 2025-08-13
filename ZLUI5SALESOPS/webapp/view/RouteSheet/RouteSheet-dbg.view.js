sap.ui.jsview("views.RouteSheet.RouteSheet", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf views.RouteSheet.RouteSheet
	*/ 
	getControllerName : function() {
		return "views.RouteSheet.RouteSheet";
	},
 
	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf views.RouteSheet.RouteSheet
	*/ 
	/**
	 * 
	 */
	createContent : function(oController) {
		var oCell;
		var _this = this;
		
		//Create a matrix layout for Panel
        var oLayout = new sap.ui.commons.layout.MatrixLayout({
			columns : 6,
			width : "100%",
			widths : [ '100px', '150px', '8%', '150px', '150px', '22%' ]});

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

		var oFields = [{row1: [{type:"Label",value:"Date",align: ""}
							  ,{type:"Text",value:"{/tranDetail/zrs_routesheet_headerSet/0/Date}",align: ""}
							  ,{type:"",value:"",align: ""}
							  ,{type:"Label",value:"Status",align: ""}
							  ,{type:"Text",value:"{/tranDetail/zrs_routesheet_headerSet/0/Procstatus}",align: ""}
					  ]}
					 ,{row1: [{type:"Label",value:"Project",align: ""}
					  ,{type:"Text",value:"{/tranDetail/zrs_routesheet_headerSet/0/Project}",align: ""}
					  ,{type:"",value:"",align: ""}
					  ,{type:"Label",value:"Brand",align: ""}
					  ,{type:"Text",value:"{/tranDetail/zrs_routesheet_headerSet/0/Brand}",align: ""}
					  ]}
					 ,{row1: [{type:"Label",value:"Unit",align: ""}
					  ,{type:"Text",value:"{/tranDetail/zrs_routesheet_headerSet/0/Unit}",align: ""}
					  ,{type:"",value:"",align: ""}
					  ,{type:"Label",value:"AA Type",align: ""}
					  ,{type:"Text",value:"{/tranDetail/zrs_routesheet_headerSet/0/Aatype}",align: ""}
					  ]}
					 ,{row1: [{type:"Label",value:"Unit Type",align: ""}
					  ,{type:"Text",value:"{/tranDetail/zrs_routesheet_headerSet/0/Unittype}",align: ""}
					  ,{type:"",value:"",align: ""}
					  ,{type:"Label",value:"Approved AA Number",align: ""}
					  ,{type:"Text",value:"{/tranDetail/zrs_routesheet_headerSet/0/Aanumber}",align: ""}
					  ]}
					 ,{row1: [{type:"Label",value:"Appurtenant Parking",align: ""}
					  ,{type:"Text",value:"{/tranDetail/zrs_routesheet_headerSet/0/Parking}",align: "",}
					  ,{type:"",value:"",align: ""}
					  ,{type:"Label",value:"AA Date Created",align: ""}
					  ,{type:"Text",value:"{/tranDetail/zrs_routesheet_headerSet/0/Aadate}",align: ""}
					  ]}
					 ,{row1: [{type:"Label",value:"Principal Buyer",align: ""}
					  ,{type:"Text",value:"{/tranDetail/zrs_routesheet_headerSet/0/Principalbuyer}",align: ""}
					  ,{type:"",value:"",align: "",}
					  ,{type:"Label",value:"With Plan Revision?",align: ""}
					  ,{type:"Text",value:"{/tranDetail/zrs_routesheet_headerSet/0/Planrevision}",align: ""}
					  ]}
					 ,{row1: [{type:"Label",value:"SaleDate",align: ""}
					  ,{type:"Text",value:"{/tranDetail/zrs_routesheet_headerSet/0/SaleDate}",align: ""}
					  ,{type:"",value:"",align: ""}
					  ,{type:"Label",value:"ATMI No./Status",align: ""}
					  ,{type:"Text",value:"{/tranDetail/zrs_routesheet_headerSet/0/Atmistatus}",align: ""}
					  ]}
					 ,{row1: [{type:"Label",value:"TCP",align: ""}
					  ,{type:"Text",value:"{/tranDetail/zrs_routesheet_headerSet/0/Contractprice}",align: ""}
					  ,{type:"",value:"",align: ""}
					  ,{type:"Label",value:"Manual ATMI",align: ""}
					  ,{type:"Text",value:"{/tranDetail/zrs_routesheet_headerSet/0/Manualatmi}",align: ""}
					  ]}
					 ,{row1: [{type:"Label",value:"Total Area",align: ""}
					  ,{type:"Text",value:"{/tranDetail/zrs_routesheet_headerSet/0/Totalarea}",align: ""}
					  ,{type:"",value:"",align: ""}
					  ,{type:"Label",value:"EMI Number",align: ""}
					  ,{type:"Text",value:"{/tranDetail/zrs_routesheet_headerSet/0/Eminumber}",align: ""}
					  ]}
					 ,{row1: [{type:"Label",value:"Old Contract Number",align: ""}
					  ,{type:"Text",value:"{/tranDetail/zrs_routesheet_headerSet/0/Oldcontnumber}",align: ""}
					  ,{type:"",value:"",align: ""}
					  ,{type:"",value:"",align: ""}
					  ,{type:"",value:"",align: ""}
					  ]}
					 ,{row1: [{type:"Label",value:"New Contract Number",align: ""}
					  ,{type:"Text",value:"{/tranDetail/zrs_routesheet_headerSet/0/Newcontnumber}",align: ""}
					  ,{type:"",value:"",align: ""}
					  ,{type:"",value:"",align: ""}
					  ,{type:"",value:"",align: ""}
					  ]}
					 ];
		
		var oRSDetails = formDynamic(oFields, [], [ '140px', '180px', '8%', '130px', '200px','30%' ]);

		//***************************** ROUTING MATRIX ******************************************/
		var tblRouteMatrix = new sap.ui.table.Table({
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
		tblRouteMatrix.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Department", textAlign: "Center"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "Department"),
        	editable: false,
        	width: "250px"
        }));
*/
		tblRouteMatrix.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Approver", textAlign: "Center"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "CompleteName1"),
        	editable: false,
        	width: "300px"
        }));

		tblRouteMatrix.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Alternative Approver", textAlign: "Center"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "AlternateName"),
        	editable: false,
        	width: "300px"
        }));
		
		tblRouteMatrix.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Level", textAlign: "Center"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "Level"),
        	editable: false,
        	width: "120px"
        }));

		tblRouteMatrix.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Status", textAlign: "Center"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "Status"),
        	editable: false,
        	width: "120px"
        }));

		tblRouteMatrix.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Status Date", textAlign: "Center"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", {
                parts: ["Date","Time" ],
                formatter: function(odate, otime) {
        				return sapDateFormat(odate) + " " + sapTimeFormat(otime) ;
        			}
        	}),
        	editable: false,
        	width: "180px"
        }));

		tblRouteMatrix.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Comments", textAlign: "Center"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "approverComment").addStyleClass("sapUiTv1"),
        	editable: false
        }));
		
		tblRouteMatrix.setModel(this.getModel());
		tblRouteMatrix.bindRows("/tranDetail/approverSet");

		//************************ UNIT DETAILS *******************************************/
		/*
		oFields = [{row1: [{type:"Label",value:"Current Unit Price",align: ""}
			  		 ,{type:"Text",value:"{/tranDetail/zrs_routesheet_detailsSet/0/Currentunitprice}",align: ""}
			  		 ,{type:"",value:"",align: ""}
			  		 ,{type:"Label",value:"Valid From Date",align: ""}
			  		 ,{type:"Text",value:"{/tranDetail/zrs_routesheet_detailsSet/0/CValidFrom}",align: ""}
			  		 ]}
					 ,{row1: [{type:"Label",value:"New Unit Price",align: ""}
			  		 ,{type:"TextEnabled",value:"{/tranDetail/zrs_routesheet_detailsSet/0/Newunitprice}",align: ""}
			  		 ,{type:"",value:"",align: ""}
			  		 ,{type:"Label",value:"Valid From Date",align: ""}
			  		 ,{type:"TextEnabled",value:"{/tranDetail/zrs_routesheet_detailsSet/0/NValidFrom}",align: ""}
			  		 ]}
					 ,{row1: [{type:"Label",value:"",align: ""}
			  		 ,{type:"",value:"",align: ""}
			  		 ,{type:"",value:"",align: ""}
			  		 ,{type:"",value:"",align: ""}
			  		 ,{type:"",value:"",align: ""}
			  		 ]}
					 ];


		var oUnitDtl = formDynamic(oFields, [], [ '115px', '150px', '5%', '100px', '150px','30%' ]);

        var oLayout1 = new sap.ui.layout.VerticalLayout({
			content:[
				new sap.ui.layout.HorizontalLayout({
					content:[
						new sap.ui.commons.Label({text:"Unit ID", width: "160px"}),
						new sap.ui.commons.TextField({enabled:false ,textAlign: "End"
							, width: "150px", value : '{/tranDetail/zrs_routesheet_detailsSet/0/Unitid}'
		    			}),
						new sap.ui.commons.Label({text:"", width: "150px"}),
					]
				})
				]
		});
*/
        var oUnitLayout = new sap.ui.commons.layout.MatrixLayout({width : "100%"});

        /*var oUnitLayout = new sap.ui.commons.layout.MatrixLayout({width : "100%", columns: 6
        	, widths: [ '115px', '150px', '5%', '70px', '150px','30%' ]});
        
		oCell = new sap.ui.commons.layout.MatrixLayoutCell({
			content : [ oUnitDtl ],
			colSpan : 6,
		});
		oUnitLayout.createRow(oCell)*/
		
        var oLayout2 = new sap.ui.layout.VerticalLayout({
        	id: "testLayout",
			content:[
			    //Unit ID
				new sap.ui.layout.HorizontalLayout({
					content:[
						new sap.ui.commons.Label({text:"Unit ID", width: "160px"}),
						new sap.ui.commons.TextField({enabled:false ,textAlign: "End"
							, width: "150px", value : '{/tranDetail/zrs_routesheet_detailsSet/0/Unitid}'
		    			})
					]
				}).addStyleClass("padBottom5"),
				
				//New Unit Status
				new sap.ui.layout.HorizontalLayout({
					content:[
					new sap.ui.commons.Label({text:"New Unit Status", width: "160px", required: true}),
					new sap.ui.commons.ComboBox({	
						//Christian de Leon 05/28/2018
						id: "iNewUnitStatus",
						required: true,
						//Christian de Leon 05/28/2018
						tooltip: "New Unit Status",
						width: "150px",
						value : '{/tranDetail/zrs_routesheet_detailsSet/0/Newunitstatus}',
						items: [new sap.ui.core.ListItem("HOLD",{id: "HOLD" ,text: "Internal Hold" }),
						        new sap.ui.core.ListItem("AVBL",{id: "AVBL" ,text: "Available"}),
						        new sap.ui.core.ListItem("NSLE",{id: "NSLE" ,text: "Not for Sale"}),
						        new sap.ui.core.ListItem("ROPN",{id: "ROPN" ,text: "Re-Opening"}),
						        new sap.ui.core.ListItem("MDUT",{id: "MDUT" ,text: "Model Unit"})],						
						change: function(oEvent){
							_this.getModel().setProperty("/tranDetail/zrs_routesheet_detailsSet/0/Newunitstatus",oEvent.oSource.getSelectedItemId());
						}
						}),
						new sap.ui.commons.Label({text:"Current Unit Status ", width: "160px", textAlign: "End"}).addStyleClass("labelPad"),
						new sap.ui.commons.TextField({enabled:false ,textAlign: "End"
							, width: "150px", value : '{/tranDetail/zrs_routesheet_detailsSet/0/Currentunitstatus}'
		    			})
					]
				}).addStyleClass("padBottom5"),
				//Current Unit Price/ Valid From Date
				new sap.ui.layout.HorizontalLayout({
					content:[
						new sap.ui.commons.Label({text:"Current Unit Price", width: "160px"}),
						new sap.ui.commons.TextField({enabled:false ,textAlign: "End"
							, width: "150px", value : '{/tranDetail/zrs_routesheet_detailsSet/0/Currentunitprice}'
		    			}),
						new sap.ui.commons.Label({text:"Valid From Date  ", width: "160px", textAlign: "End"}).addStyleClass("labelPad"),
						new sap.ui.commons.TextField({enabled:false ,textAlign: "End"
							, width: "150px", value : '{/tranDetail/zrs_routesheet_detailsSet/0/CValidFrom}'
		    			})
					]
				}).addStyleClass("padBottom5"),

				//New Unit Price/ Valid From Date				
				new sap.ui.layout.HorizontalLayout({
					content:[
						new sap.ui.commons.Label({text:"New Unit Price", width: "160px", required: true}),
						new sap.ui.commons.TextField({textAlign: "End"
							//Christian de Leon 05/28/2018
							, id: "iNewUnitPrice" 
							, required: true		
							//Christian de Leon 05/28/2018
						    , width: "150px", value : '{/tranDetail/zrs_routesheet_detailsSet/0/Newunitprice}'
							, change : function(oEvent) {  
						        var value = oEvent.getSource().getValue();  
						        if(value == "NaN" || value == ""){
						        	value = "0.00";
						        }
						        var floatValue = parseFloat(value.replace(/,/g,""));
						        this.setValue(util.Formatter.amount(floatValue));  
						      }
							}).attachBrowserEvent("keypress",function(e){  
								  var key_codes = [46, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 0, 8];  
						            if (!($.inArray(e.which, key_codes) >= 0)) {  
						              e.preventDefault();  
						            }   
		    			}),
						new sap.ui.commons.Label({text:"Valid From Date  ", width: "160px", textAlign: "End"}).addStyleClass("labelPad"),
						new sap.ui.commons.DatePicker( {
		    				yyyymmdd: "{/tranDetail/zrs_routesheet_detailsSet/0/NValidFrom}"
		    			}).attachBrowserEvent("keypress",function(e){  
		    	            e.preventDefault();   
		    			  }).setWidth("150px").setLocale("en-US").attachChange(function(oEvent) {
		    				if (oEvent.getParameter("invalidValue")) {
		    					oEvent.oSource.setValueState(sap.ui.core.ValueState.Error);
		    					this.setValue("");
		    					return;
		    				} else {
		    					oEvent.oSource.setValueState(sap.ui.core.ValueState.None);
		    				}
		    			})
					]
				}).addStyleClass("padBottom10"),
				
				// Current Lot Price/ Valid From Date ***03/10/2020
				new sap.ui.layout.HorizontalLayout({
					content:[
						new sap.ui.commons.Label({text:"Current Lot Price", width: "160px"}),
						new sap.ui.commons.TextField({enabled:false, textAlign: "End"
						    , width: "150px", value : '{/tranDetail/zrs_routesheet_detailsSet/0/Currentlotprice}'
							, change : function(oEvent) {  
						        var value = oEvent.getSource().getValue();  
						        if(value == "NaN" || value == ""){
						        	value = "0.00";
						        }
						        var floatValue = parseFloat(value.replace(/,/g,""));
						        this.setValue(util.Formatter.amount(floatValue));  
						      }
							}),
						new sap.ui.commons.Label({enabled:false, text:"Valid From Date  ", width: "160px", textAlign: "End"}).addStyleClass("labelPad"),
						new sap.ui.commons.TextField({enabled:false ,textAlign: "End"
							, width: "150px", value : '{/tranDetail/zrs_routesheet_detailsSet/0/Clvalidfrom}'
		    			})
					]
				}).addStyleClass("padBottom10"),
				// New Lot Price/ Valid From Date ***03/10/2020
				new sap.ui.layout.HorizontalLayout({
					content:[
						new sap.ui.commons.Label({text:"New Lot Price", width: "160px", required: true}),
						new sap.ui.commons.TextField({textAlign: "End"
							//Christian de Leon 05/28/2018
							, id: "iNewLotPrice" 
							, required: true
							//Christian de Leon 05/28/2018
						    , width: "150px", value : '{/tranDetail/zrs_routesheet_detailsSet/0/Newtlotprice}'
							, change : function(oEvent) {  
						        var value = oEvent.getSource().getValue();  
						        if(value == "NaN" || value == ""){
						        	value = "0.00";
						        }
						        var floatValue = parseFloat(value.replace(/,/g,""));
						        this.setValue(util.Formatter.amount(floatValue));  
						      }
							}).attachBrowserEvent("keypress",function(e){  
								  var key_codes = [46, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 0, 8];  
						            if (!($.inArray(e.which, key_codes) >= 0)) {  
						              e.preventDefault();  
						            }   
		    			}),
						new sap.ui.commons.Label({text:"Valid From Date  ", width: "160px", textAlign: "End"}).addStyleClass("labelPad"),
		    			new sap.ui.commons.DatePicker( {
		    				id: "iNewLotPriceValidFrom",
		    				yyyymmdd: "{/tranDetail/zrs_routesheet_detailsSet/0/Nlvalidfrom}"
		    			}).attachBrowserEvent("keypress",function(e){  
		    	            e.preventDefault();   
		    			  }).setWidth("150px").setLocale("en-US").attachChange(function(oEvent) {
		    				if (oEvent.getParameter("invalidValue")) {
		    					oEvent.oSource.setValueState(sap.ui.core.ValueState.Error);
		    					this.setValue("");
		    					return;
		    				} else {
		    					oEvent.oSource.setValueState(sap.ui.core.ValueState.None);
		    				}
		    			})
					]
				}).addStyleClass("padBottom10"),
				// Current House Price/ Valid From Date ***03/10/2020
				new sap.ui.layout.HorizontalLayout({
					content:[
						new sap.ui.commons.Label({text:"Current House Price", width: "160px"}),
						new sap.ui.commons.TextField({enabled:false, textAlign: "End"
						    , width: "150px", value : '{/tranDetail/zrs_routesheet_detailsSet/0/Currenthouseprice}'
							, change : function(oEvent) {  
						        var value = oEvent.getSource().getValue();  
						        if(value == "NaN" || value == ""){
						        	value = "0.00";
						        }
						        var floatValue = parseFloat(value.replace(/,/g,""));
						        this.setValue(util.Formatter.amount(floatValue));  
						      }
							}),
						new sap.ui.commons.Label({enabled:false, text:"Valid From Date  ", width: "160px", textAlign: "End"}).addStyleClass("labelPad"),
						//new sap.ui.commons.TextField({textAlign: "End"
						//	, width: "150px", value : '{/tranDetail/zrs_routesheet_detailsSet/0/NValidFrom}'
						new sap.ui.commons.TextField({enabled:false ,textAlign: "End"
							, width: "150px", value : '{/tranDetail/zrs_routesheet_detailsSet/0/Chvalidfrom}'
		    			})
					]
				}).addStyleClass("padBottom10"),
				// New House Price/ Valid From Date ***03/10/2020
				new sap.ui.layout.HorizontalLayout({
					content:[
						new sap.ui.commons.Label({text:"New House Price", width: "160px", required: true}),
						new sap.ui.commons.TextField({textAlign: "End"
							//Christian de Leon 05/28/2018
							, id: "iNewHousePrice" 
							, required: true
							//Christian de Leon 05/28/2018
						    , width: "150px", value : '{/tranDetail/zrs_routesheet_detailsSet/0/Newhouseprice}'
							, change : function(oEvent) {  
						        var value = oEvent.getSource().getValue();  
						        if(value == "NaN" || value == ""){
						        	value = "0.00";
						        }
						        var floatValue = parseFloat(value.replace(/,/g,""));
						        this.setValue(util.Formatter.amount(floatValue));  
						      }
							}).attachBrowserEvent("keypress",function(e){  
								  var key_codes = [46, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 0, 8];  
						            if (!($.inArray(e.which, key_codes) >= 0)) {  
						              e.preventDefault();  
						            }   
		    			}),
						new sap.ui.commons.Label({text:"Valid From Date  ", width: "160px", textAlign: "End"}).addStyleClass("labelPad"),
		    			new sap.ui.commons.DatePicker( {
		    				id: "iNewHousePriceValidFrom",
		    				yyyymmdd: "{/tranDetail/zrs_routesheet_detailsSet/0/Nhvalidfrom}"
		    			}).attachBrowserEvent("keypress",function(e){  
		    	            e.preventDefault();   
		    			  }).setWidth("150px").setLocale("en-US").attachChange(function(oEvent) {
		    				if (oEvent.getParameter("invalidValue")) {
		    					oEvent.oSource.setValueState(sap.ui.core.ValueState.Error);
		    					this.setValue("");
		    					return;
		    				} else {
		    					oEvent.oSource.setValueState(sap.ui.core.ValueState.None);
		    				}
		    			})
					]
				}).addStyleClass("padBottom10"),
				//Other Details
				new sap.ui.layout.HorizontalLayout({
					content:[
						new sap.ui.commons.TextView({text:"", width: "160px"}),
						new sap.ui.commons.TextField({textAlign : 'Center',enabled:false
							, value:"Marketing", width: "150px"
		    			}).addStyleClass("fontBold"),
						new sap.ui.commons.TextField({textAlign : 'Center',enabled:false
							, value:"As-Built", width: "150px"
		    			}).addStyleClass("fontBold")
					]
				}),
				new sap.ui.layout.HorizontalLayout({
					content:[
						new sap.ui.commons.Label({text:"Condominium Area (sqm)", width: "160px"}),
						new sap.ui.commons.TextField({enabled:false ,textAlign: "End"
							, width: "150px", value : '{/tranDetail/zrs_routesheet_detailsSet/0/Mcondolotarea}'
		    			}),
						new sap.ui.commons.TextField({enabled:false ,textAlign: "End"
							, width: "150px", value : '{/tranDetail/zrs_routesheet_detailsSet/0/Bcondolotarea}'
		    			})
					]
				}),
				new sap.ui.layout.HorizontalLayout({
					content:[
						new sap.ui.commons.Label({text:"Balcony Area (sqm)", width: "160px"}),
						new sap.ui.commons.TextField({enabled:false ,textAlign: "End"
							, width: "150px", value : '{/tranDetail/zrs_routesheet_detailsSet/0/Mbalconyarea}'
		    			}),
						new sap.ui.commons.TextField({enabled:false ,textAlign: "End"
							, width: "150px", value : '{/tranDetail/zrs_routesheet_detailsSet/0/Bbalconyarea}'
		    			})
					]
				}),
				new sap.ui.layout.HorizontalLayout({
					content:[
						new sap.ui.commons.Label({text:"Garden Area (sqm)", width: "160px"}),
						new sap.ui.commons.TextField({enabled:false ,textAlign: "End"
							, width: "150px", value : '{/tranDetail/zrs_routesheet_detailsSet/0/Mgardenarea}'
		    			}),
						new sap.ui.commons.TextField({enabled:false ,textAlign: "End"
							, width: "150px", value : '{/tranDetail/zrs_routesheet_detailsSet/0/Bgardenarea}'
		    			})
					]
				}),
				new sap.ui.layout.HorizontalLayout({
					content:[
						new sap.ui.commons.Label({text:"AC Ledge (sqm)", width: "160px"}),
						new sap.ui.commons.TextField({enabled:false ,textAlign: "End"
							, width: "150px", value : '{/tranDetail/zrs_routesheet_detailsSet/0/Macledgearea}'
		    			}),
						new sap.ui.commons.TextField({enabled:false ,textAlign: "End"
							, width: "150px", value : '{/tranDetail/zrs_routesheet_detailsSet/0/Bacledgearea}'
		    			})
					]
				}),
				// Lot Area ***03/10/2020
				new sap.ui.layout.HorizontalLayout({
					content:[
						new sap.ui.commons.Label({text:"Lot Area", width: "160px"}),
						new sap.ui.commons.TextField({enabled:false ,textAlign: "End"
							, width: "150px", value : '{/tranDetail/zrs_routesheet_detailsSet/0/Mlotarea}'
		    			}),
						new sap.ui.commons.TextField({enabled:false ,textAlign: "End"
							, width: "150px", value : '{/tranDetail/zrs_routesheet_detailsSet/0/Blotarea}'
		    			}) 
					]
				}),
				// House Area ***03/10/2020
				new sap.ui.layout.HorizontalLayout({
					content:[
						new sap.ui.commons.Label({text:"House Area", width: "160px"}),
						new sap.ui.commons.TextField({enabled:false ,textAlign: "End"
							, width: "150px", value : '{/tranDetail/zrs_routesheet_detailsSet/0/Mhousearea}'
		    			}),
						new sap.ui.commons.TextField({enabled:false ,textAlign: "End"
							, width: "150px", value : '{/tranDetail/zrs_routesheet_detailsSet/0/Bhousearea}'
		    			})
					]
				}),
				new sap.ui.layout.HorizontalLayout({
					content:[
						new sap.ui.commons.Label({text:"Total Floor Area", width: "160px"}),
						new sap.ui.commons.TextField({enabled:false ,textAlign: "End"
							, width: "150px", value : '{/tranDetail/zrs_routesheet_detailsSet/0/Mtotalarea}'
		    			}),
						new sap.ui.commons.TextField({enabled:false ,textAlign: "End"
							, width: "150px", value : '{/tranDetail/zrs_routesheet_detailsSet/0/Btotalarea}'
		    			})
					]
				})
			]
		});
        /*
        var oLayout1 = new sap.ui.layout.VerticalLayout({
			content:[
				new sap.ui.layout.HorizontalLayout({
					content:[
						new sap.ui.commons.Label({text:"Unit ID", width: "125px"}),
						new sap.ui.commons.TextField({enabled:false ,textAlign: "End"
							, width: "158px", value : '{/tranDetail/zrs_routesheet_detailsSet/0/Unitid}'
		    			}),
					]
				})
				]
		});

        var oLayout3 = new sap.ui.layout.VerticalLayout({
			content:[
				new sap.ui.layout.HorizontalLayout({
					content:[
						new sap.ui.commons.Label({text:"New Unit Status", width: "125px"}),
						new sap.ui.commons.ComboBox({
							tooltip: "New Unit Status",
							width: "158px",
							items: [new sap.ui.core.ListItem("HOLD",{id: "HOLD" ,text: "Internal Hold" ,additionalText:"Germany" }),
							        new sap.ui.core.ListItem("AVBL",{id: "AVBL" ,text: "Available", additionalText:"Germany"}),
							        new sap.ui.core.ListItem("NSLE",{id: "NSLE" ,text: "Not for Sale", additionalText:"Germany"}),
							        new sap.ui.core.ListItem("ROPN",{id: "ROPN" ,text: "Re-Opening", additionalText:"Germany"})],
							change: function(oEvent){
								_this.getModel().setProperty("/tranDetail/zrs_routesheet_detailsSet/0/Newunitstatus",oEvent.oSource.getSelectedItemId());
							}
							})
					]
				}),
				]
		});
*/
	//	oUnitLayout.createRow(oLayout1);	
	//	oUnitLayout.createRow(oLayout3);		
	//	oUnitLayout.createRow(oUnitDtl);
		oUnitLayout.createRow(oLayout2);

		/*var tblUnit = new sap.ui.table.Table({
            selectionMode : sap.ui.table.SelectionMode.Single,
        	selectionBehavior : sap.ui.table.SelectionBehavior.RowOnly,
        	editable: false,
        	//height : "300px",
        	visibleRowCount: 5,
			enabled : false 
		});
		
		tblUnit.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Marketing", textAlign: "Center"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "Requirement"),
        	editable: false,
        	width: "50%"
        }));

		tblUnit.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "As-Built", textAlign: "Center"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "AmountDue"),
        	editable: false,
        	width: "50%"
        }));
		
		tblUnit.setModel(this.getModel());
		tblUnit.bindRows("/tranDetail/ATMI_AMR_DetailSet"); 

		oCell = new sap.ui.commons.layout.MatrixLayoutCell({
			content : [ tblUnit ],
			colSpan : 3,
			rowSpan : 6
		});
		
		oUnitLayout.createRow(null, oCell);
		
		var lblCondo = new sap.ui.commons.Label({text: "Condominium Area (sqm)"});
		oUnitLayout.createRow(lblCondo);
		var lblBalcon = new sap.ui.commons.Label({text: "Balcony Area (sqm)"});
		oUnitLayout.createRow(lblBalcon);
		var lblGarden = new sap.ui.commons.Label({text: "Garden Area (sqm)"});
		oUnitLayout.createRow(lblGarden);
		var lblACLed = new sap.ui.commons.Label({text: "AC Ledge (sqm)"});
		oUnitLayout.createRow(lblACLed);
		var lblTotalFA = new sap.ui.commons.Label({text: "Total Floor Area"});
		oUnitLayout.createRow(lblTotalFA);*/
		//************************ UNIT DETAILS *******************************************/

		//************************ REMARKS ***********************************************/
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
		//************************ REMARKS ***********************************************/
		
		//************************ ATTACHMENTS *******************************************/

		var oTableDocs = new sap.ui.table.Table({
			width : "80%",
			noData : "No attachments.",
	        visibleRowCount: 5,
			selectionMode : sap.ui.table.SelectionMode.None
		});
		
		var oColumnOther = new sap.ui.table.Column({
			label : new sap.ui.commons.Label({
				text : "File Name"
			}),
			template : new sap.ui.commons.Link({
				text : "{Filename}",
				href: "{Url}",
				target:"_blank",
				enabled:"{enable}"
			}),
        	width: "60%",
		});
	
		oTableDocs.addColumn(oColumnOther);
		oTableDocs.addColumn(new sap.ui.table.Column(
				{
					template : new sap.ui.commons.Link(
							{
								text : "Delete",
								press : function() {	
									var _this = this;
									var index = _this.getParent().getIndex();
									var oAttachModel = _this.getModel().getProperty("/tranDetail/Attachments");
									sap.ui.commons.MessageBox.show(
										      "Are you sure you want to delete?",
										      sap.ui.commons.MessageBox.Icon.INFORMATION,
										      "Delete Attachment",
										      [sap.ui.commons.MessageBox.Action.YES, sap.ui.commons.MessageBox.Action.NO],
										      function(bResult) { 
													if (bResult == "YES") {
														oController.delAttachment1(index, oTableDocs,oSectionDoc);

													}
										      }
									);
									
									//var index = this.getParent().getIndex();
									//oController.delAttachment1(index, oTableDocs,oSectionDoc);
									//oAccordion.closeSection(oSectionDoc);
									//oAccordion.openSection(oSectionDoc);
								}
							}).addStyleClass("delAttach"),
				    width: "20%",
				}));

		oTableDocs.setModel(this.getModel());
		oTableDocs.bindRows("/tranDetail/Attachments");

		var oCellOther = new sap.ui.commons.layout.MatrixLayoutCell({
			content:[oTableDocs],
			colSpan: 2
		});
		
		var oSimpleFileUploaderOther = new sap.ui.unified.FileUploader(
		{
			uploadUrl : "",
			name : "simpleUploader",
			multiple:false,
			useMultipart:true,        
			change:function(oEvent){
				oController.fileUpload1(oEvent.mParameters.files[0]);
			}
		});
		
		var oLayoutAttach = new sap.ui.commons.layout.MatrixLayout({
			columns:1,
			width:"80%"//,
			//widths:["25%","75%"]
		});
		
	  var oBtnBrowse = new sap.ui.commons.Button({
             text: "Add document", 
             press:function(){
            	 oFirstDialog2.open();
             }
      })
		var oMatCellAttach = new sap.ui.commons.layout.MatrixLayoutCell({
			content:[oBtnBrowse,null]
		}); 
				
	  oLayoutAttach.createRow(oMatCellAttach);
	  oLayoutAttach.createRow(oCellOther);	

	    // ***********************  ATTACHMENT DIALOG **************************************//
	    var oFirstDialog2 = new sap.ui.commons.Dialog({modal: true, width : "400px"});
	    oFirstDialog2.setTitle("Attach Document");
	    oFirstDialog2.addContent(oSimpleFileUploaderOther);
	    oFirstDialog2.addButton(new sap.ui.commons.Button({
	      		       text: "Done", 
	      		       press:function(oEvent){
	      		    	   if(oSimpleFileUploaderOther.getValue() != ""){ //kpartidas - 11/10/2015

	      		    		//fhizon 11.25.2015 - added checking for special chars
	      		    		var regex = new RegExp(/[\/:*?"<>|#{}%~&]/gi);
	      		    		if(regex.test(oSimpleFileUploaderOther.getValue()) == true) {
	      		    			showMsg("Attach Document", 'The file name 	is invalid. A file name cannot contain any of the following special characters: \ / : * ? " < > | # { } % ~ &', "ERROR");
	      		    			return;
	      		    		}
	      		    		 oController.doneUpload(oTableDocs, oSimpleFileUploaderOther, oFirstDialog2, oAccordion, oSectionDoc);
	      		    	   }
	      		    	   oFirstDialog2.close();
	      		       }
	      		}));
	    oFirstDialog2.addButton(new sap.ui.commons.Button({
	      		       text: "Cancel", 
	      		       press:function(){
	      		    	   oFirstDialog2.close();
	      		    	   oSimpleFileUploaderOther.setUploadUrl("");
	      		    	   oSimpleFileUploaderOther.clear();
	      		    	   var obj = {
		      		    			"Refnumber" : "",
		      						"Attachtype" : "",
		      						"Filecategory" : "",
		      						"Filelocation" : "",
		      						"Filename"  : "",
		      						"PhysLocation"  : "SHAREPT",
		      						"Url"      : "",
		      						"file"      :"",
		      						"enable"    :false
						  		 };
	      		    	   _this.getModel().setProperty("/tranDetail/newAttach", obj);
	      		       }
	    }));
	      		
		//************************ ATTACHMENTS *******************************************/

		
        //************************ ACCORDION *********************************************/
        var oAccordion = new sap.ui.commons.Accordion();
        oAccordion.setWidth("99.8%")
        
     	//Route Sheet Details
        var oSection1 = new sap.ui.commons.AccordionSection();     
        oSection1.setTitle("Route Sheet Details");		
        oSection1.setTooltip("Route Sheet Details");
        oSection1.addContent( oRSDetails);
        oAccordion.addSection( oSection1 );

        oCell = new sap.ui.commons.layout.MatrixLayoutCell({colSpan: 6, content: [oAccordion]})
        oLayout.createRow(oCell);

        oAccordion = new sap.ui.commons.Accordion();
        oAccordion.setWidth("99.8%")
     	//Routing Matrix
        var oSection3 = new sap.ui.commons.AccordionSection();     
        oSection3.setTitle("Routing Matrix");		
        oSection3.setTooltip("Routing Matrix");
        oSection3.addContent( tblRouteMatrix);
        oAccordion.addSection( oSection3 );

        oCell = new sap.ui.commons.layout.MatrixLayoutCell({colSpan: 6, content: [oAccordion]})
        oLayout.createRow(oCell);

        oAccordion = new sap.ui.commons.Accordion();
        oAccordion.setWidth("99.8%")
     	//Unit Details
        var oSection4 = new sap.ui.commons.AccordionSection();     
        oSection4.setTitle("Unit Details");		
        oSection4.setTooltip("Unit Details");
        oSection4.addContent( oUnitLayout);
        oAccordion.addSection( oSection4 );

        oCell = new sap.ui.commons.layout.MatrixLayoutCell({colSpan: 6, content: [oAccordion]})
        oLayout.createRow(oCell);

        oAccordion = new sap.ui.commons.Accordion();
        oAccordion.setWidth("99.8%")
     	//Attachments
        var oSectionDoc = new sap.ui.commons.AccordionSection();     
        oSectionDoc.setTitle("Attachments");		
        oSectionDoc.setTooltip("Attachments");
        oSectionDoc.addContent( oLayoutAttach);
        oAccordion.addSection( oSectionDoc );

        oCell = new sap.ui.commons.layout.MatrixLayoutCell({colSpan: 6, content: [oAccordion]})
        oLayout.createRow(oCell);

        oAccordion = new sap.ui.commons.Accordion();
        oAccordion.setWidth("99.8%")
     	//Remarks
        var oSection7 = new sap.ui.commons.AccordionSection();     
        oSection7.setTitle("Approver's Remarks");		
        oSection7.setTooltip("Approver's Remarks");
        oSection7.addContent( oRemarksLayout);
        oAccordion.addSection( oSection7 );
       
        oCell = new sap.ui.commons.layout.MatrixLayoutCell({colSpan: 6, content: [oAccordion]})
        oLayout.createRow(oCell);
        

        //************************  BUTTONS *********************************************/
		jQuery.sap.require("sap.ui.commons.MessageBox");
		var oBtnApprove = new sap.ui.commons.Button(sessionCache["pageID"] + "oBtnApprove",{
			tooltip : "Approve Route Sheet",
			width : "100px",
			height : "30px",
			text : "Approve",
			press : function() {
				sap.ui.commons.MessageBox.show(
					      "Are you sure you want to approve request for Route Sheet?",
					      sap.ui.commons.MessageBox.Icon.INFORMATION,
					      "Approve Request",
//					      function(){
//					    	  var nameText = sap.ui.getCore().byId("iNewUnitStatus");
//					  		if(nameText.getValue() === ""){
//					  			alert("Please enter New Unit Status.");
//					  		}
//					      },
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
						    			//oBtnApprove.setEnabled(false);
						    			//oBtnDisapprove.setEnabled(false);
						    			//oTAComments.setValue("");
									}
									
								}
							}
						 );
			},
			icon : sap.ui.core.IconPool.getIconURI("accept")
		});
		

		/*var oBtnDisapprove = new sap.ui.commons.Button(sessionCache["pageID"] + "oBtnDisapprove",{
			tooltip : "Disapprove Transfer of Ownership",
			width : "100px",
			height : "30px",
			text : "Disapprove",
			press : function() {
				sap.ui.commons.MessageBox.show(
					      "Are you sure you want to disapprove request for Transfer of Ownership?",
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
									var oArray = oTAComments.getValue().split("\n");
									for(var a = 0; a < oArray.length; a++){
										tdline = {"Line":oArray[a]};
										tdlines.push(tdline);
									}

									if (oController.approveDisapprove("Disapprove",tdlines)) {
						    			oBtnApprove.setEnabled(false);
						    			oBtnDisapprove.setEnabled(false);
						    			oTAComments.setValue("");
									}

									}
								}
						 );
			},
			icon : sap.ui.core.IconPool.getIconURI("action")
		});*/

		var oBtnClose = new sap.ui.commons.Button(sessionCache["pageID"] + "oBtnClose",{
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
        oLayout.createRow(null,null,oBtnApprove );
        
		return oLayout;
	}

});