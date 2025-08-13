
function formCreatewCSS(oFields,oWidths) {
	var oCell;
	var oTTfield1;

	//Create a matrix layout for Panel
    var oFormLayout = new sap.ui.commons.layout.MatrixLayout({
		columns : oWidths.length,
		width : "100%",
		widths : oWidths});
    
	for (var i = 0; i < oFields.length; i++) {
		var oLable1 = new sap.ui.commons.Label({text : oFields[i].label1});
		
		oTTfield1 = new sap.ui.commons.TextField({
			width : "100%",
			value : oFields[i].field1
			,enabled : false
		});
		oTTfield1.setTextAlign("End");
		if(oFields[i].lbl1css != ""){
			oLable1.addStyleClass(oFields[i].lbl1css);
		}
		if(oFields[i].fld1css != ""){
			oTTfield1.addStyleClass(oFields[i].fld1css);
		}
	
		var oDesc = new sap.ui.commons.TextView({text : oFields[i].field1desc});
		if (oFields[i].label2 != "") {
			var oLable2 = new sap.ui.commons.Label({text : oFields[i].label2});
			var oTTfield2 = new sap.ui.commons.TextField({
				width : "100%",
				value : oFields[i].field2
				,enabled : false
			});
			//if (oFields[i].fld2align != "") {
				//oTTfield2.setTextAlign(oFields[i].fld2align);
				oTTfield2.setTextAlign("End");
			//}
			if(oFields[i].lbl2css != ""){
				oLable2.addStyleClass(oFields[i].lbl2css);
			}
			if(oFields[i].fld2css != ""){
				oTTfield2.addStyleClass(oFields[i].fld2css);
			}
		
			oFormLayout.createRow(oLable1, oTTfield1 , oDesc ,oLable2, oTTfield2);
		} else {
			oFormLayout.createRow(oLable1, oTTfield1, oDesc);
		}
	}
	
	return oFormLayout;
}

function formCreate(oFields,oWidths) {
	var oCell;

	//Create a matrix layout for Panel
    var oFormLayout = new sap.ui.commons.layout.MatrixLayout({
		columns : oWidths.length,
		width : "100%",
		widths : oWidths});
    
	for (var i = 0; i < oFields.length; i++) {
		var oLable1 = new sap.ui.commons.Label({text : oFields[i].label1});
		var oTTfield1 = new sap.ui.commons.TextField({
			width : "100%",
			value : oFields[i].field1
			,enabled : false
		});
		oTTfield1.setTextAlign("End");

		var oDesc = new sap.ui.commons.TextView({text : oFields[i].field1desc});
		if (oFields[i].label2 != "") {
			var oLable2 = new sap.ui.commons.Label({text : oFields[i].label2});
			var oTTfield2 = new sap.ui.commons.TextField({
				width : "100%",
				value : oFields[i].field2
				,enabled : false
			});
			//if (oFields[i].fld2align != "") {
				//oTTfield2.setTextAlign(oFields[i].fld2align);
				oTTfield2.setTextAlign("End");
			//}
		
			oFormLayout.createRow(oLable1, oTTfield1 , oDesc ,oLable2, oTTfield2);
		} else {
			oFormLayout.createRow(oLable1, oTTfield1, oDesc);
		}
	}
	
	return oFormLayout;
}


function formCreate6Cols(oFields,oWidths,hide2FromTO) {
	var oCell;

	//Create a matrix layout for Panel
    var oFormLayout = new sap.ui.commons.layout.MatrixLayout({
		columns : oWidths.length,
		width : "100%",
		widths : oWidths});
    
    var oLableFr = new sap.ui.commons.layout.MatrixLayoutCell({content: [new sap.ui.commons.Label({text : "FROM"}).addStyleClass("font14ptBold").addStyleClass("underline")]}).addStyleClass("alignTextCenter");
    var oLableTo = new sap.ui.commons.Label({text : "TO", width: '100%'}).addStyleClass("font14ptBold").addStyleClass("underline").addStyleClass("alignTextCenter");
	if (!hide2FromTO) {
		var oLableFr2 = new sap.ui.commons.Label({text : "FROM", width: '100%'}).addStyleClass("font14ptBold").addStyleClass("underline").addStyleClass("alignTextCenter");
		var oLableTo2 = new sap.ui.commons.Label({text : "TO", width: '100%'}).addStyleClass("font14ptBold").addStyleClass("underline").addStyleClass("alignTextCenter");
		oFormLayout.createRow(null, oLableFr, null , oLableTo , null, null, oLableFr2, null,oLableTo2);
	} else {
		oFormLayout.createRow(null, oLableFr, null , oLableTo);
	}
	
	var oTTfield1;
	for (var i = 0; i < oFields.length; i++) {
		
		var oLable1 = new sap.ui.commons.Label({text : oFields[i].label1});
		if (oFields[i].field1 != "") {
			oTTfield1 = new sap.ui.commons.TextField({
				width : "100%",
				value : oFields[i].field1
				,enabled : false
			});
			oTTfield1.setTextAlign("End");
		} else {
			oTTfield1 = new sap.ui.commons.Label("");
		}

		
		var oTTfield1a = null;
		if (oFields[i].field1a != "") {
			oTTfield1a = new sap.ui.commons.TextField({
				width : "100%",
				value : oFields[i].field1a
				,enabled : false
			});
			oTTfield1a.setTextAlign("End");
		}
		var oDesc = new sap.ui.commons.TextView({text : oFields[i].field1desc});
		if (oFields[i].label2 != "") {
			var oLable2 = new sap.ui.commons.Label({text : oFields[i].label2});
			var oTTfield2 = new sap.ui.commons.TextField({
				width : "100%",
				value : oFields[i].field2
				,enabled : false
			});
			oTTfield2.setTextAlign("End");

			var oTTfield2a = null;
			if (oFields[i].field2a != "") {
				oTTfield2a = new sap.ui.commons.TextField({
					width : "100%",
					value : oFields[i].field2a
					,enabled : false
				});
				oTTfield2a.setTextAlign("End");
			}
			//if (oFields[i].fld2align != "") {
				//oTTfield2.setTextAlign(oFields[i].fld2align);
				//oTTfield2a.setTextAlign(oFields[i].fld2align);
			//}
			oFormLayout.createRow(oLable1, oTTfield1, null , oTTfield1a , null, oLable2, oTTfield2, null,oTTfield2a);
		} else {
			oFormLayout.createRow(oLable1, oTTfield1, null, oTTfield1a);
		}
	}
	
	return oFormLayout;
}


function formDynamic(oFields,oTopLabels,oWidths) {
	var oCell;

	//Create a matrix layout for Panel
    var oFormLayout = new sap.ui.commons.layout.MatrixLayout({
		columns : oWidths.length,
		width : "100%",
		widths : oWidths});

	if (oTopLabels.length != 0) {
        var oRow = new sap.ui.commons.layout.MatrixLayoutRow();
        oFormLayout.addRow(oRow);

		for (var i = 0; i < oTopLabels.length; i++) {
			if (oTopLabels[i] != "") {
				oCell = new sap.ui.commons.layout.MatrixLayoutCell({content: [new sap.ui.commons.Label({text : oTopLabels[i]}).addStyleClass("font14ptBold").addStyleClass("underline")]}).addStyleClass("alignTextCenter");
			} else {
				//oCell = null;
				oCell = new sap.ui.commons.layout.MatrixLayoutCell({content: [new sap.ui.commons.Label("",{width: "100%"})]});
			}
	        oRow.addCell(oCell);
		}
	}
	
	for (var i = 0; i < oFields.length; i++) {
        var oRow = new sap.ui.commons.layout.MatrixLayoutRow();
        oFormLayout.addRow(oRow);
        
        if (oFields[i].row1.length > 0) {
			for (var j = 0; j < oFields[i].row1.length; j++) {

				switch(oFields[i].row1[j].type) {
				case "Label":
					oCell = new sap.ui.commons.Label({text:oFields[i].row1[j].value});
					oCell.setTextAlign("Begin");
					break;
				case "Text":
					oCell = new sap.ui.commons.TextField({value:oFields[i].row1[j].value});
					oCell.setTextAlign("End");
					oCell.setEnabled(false);
					break;
				case "View":
					oCell = new sap.ui.commons.TextView({text:oFields[i].row1[j].value });
					oCell.setTextAlign("End");
					break;
				case "TextEnabled":
					oCell = new sap.ui.commons.TextField({value:oFields[i].row1[j].value});
					oCell.setTextAlign("End");
					oCell.setEnabled(true);
					break;
				case "CheckBox":
					oCell = new sap.ui.commons.CheckBox({checked:oFields[i].row1[j].value,text:oFields[i].row1[j].text});
					oCell.setEditable(false);
					break;
				case "DatePicker":
					oCell = new sap.ui.commons.DatePicker( {
								yyyymmdd: oFields[i].row1[j].value
							}).attachBrowserEvent("keypress",function(e){  
									e.preventDefault();   
							});
					oCell.setLocale("en-US");
					oCell.attachChange(function(oEvent) {
								if (oEvent.getParameter("invalidValue")) {
									oEvent.oSource.setValueState(sap.ui.core.ValueState.Error);
									this.setValue("");
									return;
								} else {
									oEvent.oSource.setValueState(sap.ui.core.ValueState.None);
								}
							});
					oCell.setEnabled(true);
					break;
				default:
					oCell = new sap.ui.commons.Label("");
					break;
				}
				
				//Force column width to 100%
				oCell.setWidth("100%");
/*
				//Set Text/Value alignment
				if(oFields[i].row1[j].align != undefined){
					if (oFields[i].row1[j].align != "") { //Begin/Center/End
						oCell.setTextAlign(oFields[i].row1[j].align);
					}
				} */
				
				//Set CSS to be used
				if(oFields[i].row1[j].css != undefined){
					if(oFields[i].row1[j].css != ""){
						oCell.addStyleClass(oFields[i].row1[j].css);
					}
				}
				//add cell contents
				oRow.addCell(new sap.ui.commons.layout.MatrixLayoutCell({content: [oCell]}));
			}
		
        } else {
        	//add blank line
        	oFormLayout.createRow(null);
        }
	}
	
	return oFormLayout;
}
