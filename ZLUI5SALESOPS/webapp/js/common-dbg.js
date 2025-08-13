var oBPType, oBuyerMStatus, oCBICitizen, oAgentTitle; 
var oPlanRev_Type,oEMI_Type, oRefundType;
var assessdate;
//Add Christian de Leon 06/01/2018
var olastApprover;
var oShowEscalate;
var oDatepicker;
//End Add Christian de Leon 06/01/2018

//set i18n model 
var i18nModel = new sap.ui.model.resource.ResourceModel({ bundleUrl : "i18n/messageBundle.properties" }); 
sap.ui.getCore().setModel(i18nModel, "i18n");
			
function showActionMsg(oAction,msgType,addtlMsg,parm1, parm2, parm3) {
	jQuery.sap.require("sap.m.MessageBox");
	var msg,icon1;
	
	oAction = oAction.toUpperCase();
	//get Message bundle
	var bundle = sap.ui.getCore().getModel("i18n").getResourceBundle();

	switch(msgType) {
    case "ERROR":
		msg = bundle.getText(oAction+"-ERROR") + "\nError: " + addtlMsg;
		icon1 = sap.m.MessageBox.Icon.ERROR;
        break;
    case "SUCCESS":
		msg = bundle.getText(oAction+"-SUCCESS") + "\n" + addtlMsg;
		icon1 = sap.m.MessageBox.Icon.SUCCESS;
        break;
    case "WARNING":
		msg = bundle.getText(oAction+"-WARNING") + "\n" + addtlMsg;
		icon1 = sap.m.MessageBox.Icon.WARNING;
        break;
    default:
		msg = bundle.getText(oAction+"-INFORMATION") + "\n" + addtlMsg;
		icon1 = sap.m.MessageBox.Icon.INFORMATION;
        break;
	} 
	
	if(parm1 != "" && parm1 != undefined) msg = msg.replace(/1%/g,parm1);
	if(parm2 != "" && parm2 != undefined) msg = msg.replace(/2%/g,parm2);
	if(parm3 != "" && parm3 != undefined) msg = msg.replace(/3%/g,parm3);
	
	sap.m.MessageBox.show(msg
		, {  icon: icon1 //(msgType == "ERROR") ? sap.m.MessageBox.Icon.ERROR : sap.m.MessageBox.Icon.SUCCESS
			,title: bundle.getText(oAction+"-TITLE")
		,actions: [sap.m.MessageBox.Action.OK]
	})
}