// import { app } from "js/navigation";

sap.ui.jsview("view.Home", {
	/**
	 * Specifies the Controller belonging to this View. In the case that it is
	 * not implemented, or that "null" is returned, this View does not have a
	 * Controller.
	 * 
	 * @memberOf cebms_sapui.Home
	 */
	getControllerName : function() {
		return "view.Home";
	},

	/**
	 * Is initially called once after the Controller has been instantiated. It
	 * is the place where the UI is constructed. Since the Controller is given
	 * to this method, its event handlers can be attached right away.
	 * 
	 * @memberOf cebms_sapui.Home
	 */
	createContent : function(oController) {

		 var pdfURL = "http://jgsmlanwgd001.jgsummit.com.ph:8000/sap/opu/odata/sap/ZGW_TEST_PDF_SRV/PDFSet(customer='3')/$value";

			var oButton2 = new sap.ui.commons.Button({
				id : 'POS',
				text : 'getToken',
				width : '10em',
				press : function(){
					oController.sampleGetToken();
				}
			});

			//oButton2.placeAt(this);
		var oButton1 = new sap.ui.commons.Button({
			id : 'Print',
			text : 'Print Form',
			width : '10em',
			press : function(){

		    	var wind = window.open(pdfURL,"Print Window") ;
				//wind.document.write(document.getElementById("content").outerHTML);
				
			//var html1 = new sap.ui.core.HTML();     
		         //        html1.setContent("<iframe id='pdf' src=" + pdfURL + " width='900' height='700'></iframe>");
				//wind.document.write(html1);
				//wind.print();
				//wind.close();
				//document.domain = "http://jgsmlanwgd001.jgsummit.com.ph:8000";
				//varr wind = document.getElementById("pdf").contentWindow;
				//wind.postMessage("please pass","http://www.redbooks.ibm.com")
				//wind.focus();
				//wind.print();
				//wind.close();
			}
			});
		//oButton1.placeAt(this);

		
        //Create an instance of the action List items
        var oTable1 = new sap.ui.table.Table({
        	//title: "ACTION ITEMS",
        	visibleRowCount: 10,
        	//firstVisibleRow: 3,
            selectionMode : sap.ui.table.SelectionMode.Single,
        	selectionBehavior : sap.ui.table.SelectionBehavior.RowOnly,
            rowSelectionChange : function(oEvent){
            	//oDataCFP = oTableCFP.getModel().getProperty(oEvent.getParameter('rowContext').getPath());
            },
        	navigationMode: sap.ui.table.NavigationMode.Paginator,
        	editable: false,
        	cellClick : function(oEvent){
        		//oTable1.setSelectedIndex(oEvent.getParameter("rowIndex"));
        	}
        }).addEventDelegate({  
        	onAfterRendering : function() { 
        		var oBinding = oTable1.getBinding("rows"); 
                oBinding.attachChange(function(sReason) {
                	var rowCount = oBinding.getLength();
        	         for (var i = 0; i < rowCount; i++) {  
        	        	 var rowsPath  = oTable1.getContextByIndex(i).getPath();
        	        	 oTable1.getModel().setProperty(rowsPath+"/rowNumber", i+1);
        	        }  		
                });
        	}
         })
         ;

        //Define the columns and the control templates to be used
        oTable1.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: ""}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "rowNumber"),
        	width: "38px",
        	editable: false
        }));

        oTable1.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Request Number"}),
        	template: new sap.ui.commons.Link({
            	text: "{requestNum}",
            	press: function(oEvent) {
            		var _data = oEvent.getSource().getBindingContext().getObject();
            		
            		oController.displayDetails(_data);
            	}
            }),
        	sortProperty: "requestNum",
        	filterProperty: "requestNum",
        	width: "118px",
        	editable: false
        })//.setSorted(true).setSortOrder(sap.ui.table.SortOrder.Ascending)
        ).attachBrowserEvent("contextmenu", function(oEvent) {
    		//if(oEvent.which == 3)
	  	    //  {
				//oEvent.preventDefault();
            	//oDataCFP = oTableCFP.getModel().getProperty(oEvent.getParameter('rowContext').getPath());
	  			//oController.popMenu2(oEvent.target);
    			//alert("mousedown");
	  			//return false;
	  	    //  }
        	});
        
        oTable1.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Contract Number"}),
        	template: new sap.ui.commons.Link({
            	text: "{contractNum}",
            	press: function(oEvent) {
            		var _data = oEvent.getSource().getBindingContext().getObject();
            		
            		oController.displayDetails(_data);
            	}}),
        	sortProperty: "contractNum",
        	filterProperty: "contractNum",
        	width: "130px",
        	editable: false
        }));

        oTable1.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Principal Buyer"}),
        	template: new sap.ui.commons.TextView().bindProperty("text","principalBuyer"),
        	sortProperty: "principalBuyer",
        	filterProperty: "principalBuyer",
        	//width: "180px",
        	editable: false
        }));

        oTable1.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Building/Project"}),
        	template: new sap.ui.commons.TextView().bindProperty("text","bldg_proj"),
        	sortProperty: "bldg_proj",
        	filterProperty: "bldg_proj",
        	//width: "180px",
        	editable: false
        }));

        oTable1.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Unit"}),
        	template: new sap.ui.commons.TextView().bindProperty("text","unit"),
        	sortProperty: "unit",
        	filterProperty: "unit",
        	width: "100px",
        	editable: false
        }));
                
        oTable1.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Request Type"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "requestType"),
        	sortProperty: "requestType",
        	filterProperty: "requestType",
        	//width: "20%",
        	editable: false
        }));
        oTable1.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Request Date", textAlign : 'Center'}),
        	template: new sap.ui.commons.TextView({textAlign : 'Center'}).bindProperty("text", "requestDate"),
        	sortProperty: "requestDate",
        	filterProperty: "requestDate",
        	width: "200px",
        	editable: false
        }));
/*
        oTable1.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: ""}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "."),
        	//width: "100px",
        	editable: false
        }));
        */
        //var oSorter = new sap.ui.model.Sorter(oTable1.getColumns()[1].getSortProperty(), false);  
        //Create a model and bind the table rows to this model
        oTable1.setModel(this.getModel("group1"));
        oTable1.bindRows("/group1");//.sort(oSorter);
       // oTable1.sort(["requestNum"],sap.ui.table.SortOrder.Ascending,false);
       // for (var i=1;i<oTable1.getColumns().length; i++) { 
       // 	oTable1.getColumns()[i].setSorted(false);  
	   // }                     
        //oTable1.getColumns()[1].setSortOrder(sap.ui.table.SortOrder.Ascending)
        //oTable1.getColumns()[1].setSorted(true);
		
/*
	    //Create R1C1 panel instance
	    var oPanel = new sap.ui.commons.Panel({width:"100%", showCollapseIcon: true, height: 'auto'});
	    oPanel.setAreaDesign(sap.ui.commons.enums.AreaDesign.Plain);
	    oPanel.setBorderDesign(sap.ui.commons.enums.BorderDesign.Box);
	    oPanel.setApplyContentPadding(true);
	    
	    //Set the title of the panel
		var oTitle = new sap.ui.core.Title()
					.setText("Adjustment Advice (Buyers Request)")
					.setIcon("sap-icon://activity-individual")
					.setTooltip("Action Items - Adjustment Advice (Buyers Request)");
		oPanel.setTitle(oTitle);
		
	    //Add the form to the panels content area
	    oPanel.addContent(oTable1);
        */

		// *********************  Group 2 **************************************
        //Create an instance of the action List items
        var oTable2 = new sap.ui.table.Table({
        	visibleRowCount: 10,
        	//firstVisibleRow: 3,
            selectionMode : sap.ui.table.SelectionMode.Single,
        	selectionBehavior : sap.ui.table.SelectionBehavior.RowOnly,
            rowSelectionChange : function(oEvent){
            	//oDataCFP = oTableCFP.getModel().getProperty(oEvent.getParameter('rowContext').getPath());
            },
        	navigationMode: sap.ui.table.NavigationMode.Paginator,
        	editable: false,
        	cellClick : function(oEvent){
        		//oTable1.setSelectedIndex(oEvent.getParameter("rowIndex"));
        	}
        }).addEventDelegate({  
        	onAfterRendering : function() { 
        		var oBinding2 = oTable2.getBinding("rows"); 
                oBinding2.attachChange(function(sReason) {
                	var rowCount = oBinding2.getLength();
        	         for (var i = 0; i < rowCount; i++) {  
        	        	 var rowsPath  = oTable2.getContextByIndex(i).getPath();
        	        	 oTable2.getModel().setProperty(rowsPath+"/rowNumber", i+1);
        	        }  		
                });
        	}
         })
         ;

        //Define the columns and the control templates to be used
        oTable2.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: ""}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "rowNumber"),
        	width: "38px",
        	editable: false
        }));

        oTable2.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Request Number"}),
        	template: new sap.ui.commons.Link({
            	text: "{requestNum}",
            	press: function(oEvent) {
            		var _data = oEvent.getSource().getBindingContext().getObject();
            		
            		oController.displayDetails(_data);
            	}
            }),
        	sortProperty: "requestNum",
        	filterProperty: "requestNum",
        	//width: "118px",
        	editable: false
        })).attachBrowserEvent("contextmenu", function(oEvent) {
    		//if(oEvent.which == 3)
	  	    //  {
				//oEvent.preventDefault();
            	//oDataCFP = oTableCFP.getModel().getProperty(oEvent.getParameter('rowContext').getPath());
	  			//oController.popMenu2(oEvent.target);
    			//alert("mousedown");
	  			//return false;
	  	    //  }
        	});
        
        oTable2.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Business Partner"}),
        	template: new sap.ui.commons.Link({
            	text: "{businessPartner}",
            	press: function(oEvent) {
            		var _data = oEvent.getSource().getBindingContext().getObject();
            		
            		oController.displayDetails(_data);
            	}
            }),
        	sortProperty: "businessPartner",
        	filterProperty: "businessPartner",
        	//width: "118px",
        	editable: false
        }));

        oTable2.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Role"}),
        	template: new sap.ui.commons.TextView().bindProperty("text","role"),
        	sortProperty: "role",
        	filterProperty: "role",
        	//width: "180px",
        	editable: false
        }));
        
        oTable2.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Request Type"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "requestType"),
        	sortProperty: "requestType",
        	filterProperty: "requestType",
        	//width: "120px",
        	editable: false
        }));
        oTable2.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Request Date"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "requestDate"),
        	sortProperty: "requestDate",
        	filterProperty: "requestDate",
        	width: "200px",
        	editable: false
        }));

        //Create a model and bind the table rows to this model
        oTable2.setModel(this.getModel("group2"));
        oTable2.bindRows("/group2");
        oTable2.sort(oTable2.getColumns("requestNum"));
		/*

	    //Create R1C1 panel instance
	    var oPanel2 = new sap.ui.commons.Panel({width:"100%", showCollapseIcon: true, height: 'auto'});
	    oPanel2.setAreaDesign(sap.ui.commons.enums.AreaDesign.Plain);
	    oPanel2.setBorderDesign(sap.ui.commons.enums.BorderDesign.Box);
	    oPanel2.setApplyContentPadding(true);
	    
	    //Set the title of the panel
		oTitle = new sap.ui.core.Title()
					.setText("Master Data Maintenane (Business Partner Only)")
					.setIcon("sap-icon://company-view")
					.setTooltip("Master Data Maintenane (Business Partner Only)");
		oPanel2.setTitle(oTitle);
		
	    //Add the form to the panels content area
	    oPanel2.addContent(oTable2);
        
		oLayout.createRow(oPanel2);
*/

		// *********************  Group 3 **************************************
        //Create an instance of the action List items
        var oTable3 = new sap.ui.table.Table({
        	visibleRowCount: 10,
        	//firstVisibleRow: 3,
            selectionMode : sap.ui.table.SelectionMode.Single,
        	selectionBehavior : sap.ui.table.SelectionBehavior.RowOnly,
            rowSelectionChange : function(oEvent){
            	//oDataCFP = oTableCFP.getModel().getProperty(oEvent.getParameter('rowContext').getPath());
            },
        	navigationMode: sap.ui.table.NavigationMode.Paginator,
        	editable: false,
        	cellClick : function(oEvent){
        		//oTable1.setSelectedIndex(oEvent.getParameter("rowIndex"));
        	}
        }).addEventDelegate({  
        	onAfterRendering : function() { 
        		var oBinding = oTable3.getBinding("rows"); 
                oBinding.attachChange(function(sReason) {
                	var rowCount = oBinding.getLength();
        	         for (var i = 0; i < rowCount; i++) {  
        	        	 var rowsPath  = oTable3.getContextByIndex(i).getPath();
        	        	 oTable3.getModel().setProperty(rowsPath+"/rowNumber", i+1);
        	        }  		
                });
        	}
         })
         ;

        //Define the columns and the control templates to be used
        oTable3.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: ""}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "rowNumber"),
        	width: "38px",
        	editable: false
        }));

        oTable3.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Request Number"}),
        	template: new sap.ui.commons.Link({
            	text: "{requestNum}",
            	press: function(oEvent) {
            		var _data = oEvent.getSource().getBindingContext().getObject();
            		
            		oController.displayDetails(_data);
            	}
            }),
        	sortProperty: "requestNum",
        	filterProperty: "requestNum",
        	width: "128px",
        	editable: false
        })).attachBrowserEvent("contextmenu", function(oEvent) {
    		//if(oEvent.which == 3)
	  	    //  {
				//oEvent.preventDefault();
            	//oDataCFP = oTableCFP.getModel().getProperty(oEvent.getParameter('rowContext').getPath());
	  			//oController.popMenu2(oEvent.target);
    			//alert("mousedown");
	  			//return false;
	  	    //  }
        	});

        oTable3.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Contract Number"}),
        	template: new sap.ui.commons.Link({
            	text: "{contractNum}",
            	press: function(oEvent) {
            		var _data = oEvent.getSource().getBindingContext().getObject();
            		
            		oController.displayDetails(_data);
            	}
            }),
        	sortProperty: "contractNum",
        	filterProperty: "contractNum",
        	width: "128px",
        	editable: false
        }));

        oTable3.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Principal Buyer"}),
        	template: new sap.ui.commons.TextView().bindProperty("text","principalBuyer"),
        	sortProperty: "principalBuyer",
        	filterProperty: "principalBuyer",
        	width: "180px",
        	editable: false
        }));

        oTable3.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Building/Project"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "bldg_proj"),
        	sortProperty: "bldg_proj",
        	filterProperty: "bldg_proj",
        	//width: "150px",
        	editable: false
        }));
        oTable3.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Unit"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "unit"),
        	sortProperty: "unit",
        	filterProperty: "unit",
        	width: "100px",
        	editable: false
        }));

        oTable3.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Request Type"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "requestType"),
        	sortProperty: "requestType",
        	filterProperty: "requestType",
        	width: "120px",
        	editable: false
        }));
        oTable3.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "Request Date"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "requestDate"),
        	sortProperty: "requestDate",
        	filterProperty: "requestDate",
        	width: "180px",
        	editable: false
        }));

        //Create a model and bind the table rows to this model
        oTable3.setModel(this.getModel("group3"));
        oTable3.bindRows("/group3");

        /************* Accordion   *****************************/
        var oAccordion = new sap.ui.commons.Accordion("oAccordion",{width:"99.8%"});        

        var oSection1 = new sap.ui.commons.AccordionSection("HomeSection1");     
        oSection1.setTitle("Adjustment Advice (Buyers Request)");		
        oSection1.setTooltip("Adjustment Advice (Buyers Request)");
        oSection1.addContent( oTable1);
        oAccordion.addSection( oSection1 );

        //Building Section 2
        var oSection2 = new sap.ui.commons.AccordionSection("HomeSection2");   
        oSection2.setTitle("Master Data Maintenance (Business Partner Only)");//	
        oSection2.setTooltip("Master Data Maintenance (Business Partner Only)");
        oSection2.addContent( oTable2);
        oAccordion.addSection( oSection2 );

        //Building Section 3
        var oSection3 = new sap.ui.commons.AccordionSection("HomeSection3");     
        oSection3.setTitle("Other Requests");		
        oSection3.setTooltip("Other Requests");
        oSection3.addContent( oTable3);
        oAccordion.addSection( oSection3 );

        /************* Layout   *****************************/
        var oLayout = new sap.ui.commons.layout.MatrixLayout({layoutFixed: false, width: '100%'});
        oLayout.createRow(oAccordion);
/*
	    //Create R1C1 panel instance
	    var oPanel3 = new sap.ui.commons.Panel({width:"100%", showCollapseIcon: true, height: 'auto'});
	    oPanel3.setAreaDesign(sap.ui.commons.enums.AreaDesign.Plain);
	    oPanel3.setBorderDesign(sap.ui.commons.enums.BorderDesign.Box);
	    oPanel3.setApplyContentPadding(true);
	    
	    //Set the title of the panel
		oTitle = new sap.ui.core.Title()
					.setText("Other Requests")
					.setIcon("sap-icon://physical-activity")
					.setTooltip("Other Requests");
		oPanel3.setTitle(oTitle);
		
	    //Add the form to the panels content area
		oPanel3.addContent(oTable3);
   
		oLayout.createRow(oPanel3);
		 */    
		oLayout.placeAt(this);
		
		oController.refreshItems(oAccordion, oSection2, oSection2);

		//var html = new sap.ui.core.HTML();     
		// html.setContent("<iframe id='pdf' src=" + pdfURL + " width='900' height='700'></iframe>");

		 //html.placeAt(this);
		 
       // return oSplitterV;
	}
});function initPage() {
	sap.ui.localResources("views");
	var view = sap.ui.view({ id: "homePage", viewName: "views.Home", type: sap.ui.core.mvc.ViewType.JS }).placeAt("content");
	app.addPage(view);
	app.placeAt("content");
}

