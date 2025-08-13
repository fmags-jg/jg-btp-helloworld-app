// export var app = sap.m.App("zlui5salesops",{});
var app = new sap.m.App("ZLUI5SALESOPS",{});

var sessionCache = {};


function initPage() {
	sap.ui.localResources("view");
	var view = sap.ui.view({id:"homePage", viewName:"view.Home", type:sap.ui.core.mvc.ViewType.JS}).placeAt("content");
	app.addPage(view);
	app.placeAt("content");
}

function showContent(pageID ,viewName , pageTitle, _contextData) {
	sessionCache["pageID"] = pageID;
	if (pageID == "") {
		alert("Alert from " + viewName);
	}
	else {

		document.getElementById("currentItem").innerHTML = " > " + pageTitle;
		document.getElementById("hdrTitle").innerHTML = pageTitle;

		var oPage = sap.ui.getCore().byId(pageID);
		sap.ui.getCore().byId('homePage').removeAllContent();
		if(oPage == undefined) {
			var oPage = sap.ui.view({id:pageID, viewName:viewName, type:sap.ui.core.mvc.ViewType.JS});
			app.addPage(oPage);
			if (_contextData) {
				var _oModel = new sap.ui.model.json.JSONModel();
				_oModel.setData({tranDetail: _contextData});
				oPage.setModel(_oModel);
				document.getElementById("closeWin").style.visibility = "visible";
			}
		}
		else {
			app.addPage(oPage);
			if (pageID == 'homePage') {
				oPage.oController.refreshItems();
				document.getElementById("closeWin").style.visibility = "hidden";
			} else if (_contextData) {
				oPage.getModel().setProperty("/tranDetail",_contextData);
				document.getElementById("closeWin").style.visibility = "visible";
			}
		}
		app.placeAt("content");
		app.to(pageID,"show");

		/*****************PRINT*****************/
		(function() {
			var oSecRemark = sap.ui.getCore().byId(pageID + "oSectionRemarks");
			var elmnt = document.getElementsByTagName("textarea");
			var defDimension = [];

			for(var i=0;i<elmnt.length;i++){
				defDimension.push(elmnt[i].offsetHeight + 'px');
			}

			var beforePrint = function() {
				for(var i=0;i<elmnt.length;i++){
					//elmnt[i].style.width= '100%';
					elmnt[i].style.height = elmnt[i].scrollHeight+ 'px';
				}
			};

			var afterPrint = function() {
				for(var i=0;i<defDimension.length;i++){
					//elmnt[i].style.width= '100%';
					elmnt[i].style.height = defDimension[i];
				}
			};

			    if (window.matchMedia) {
			        var mediaQueryList = window.matchMedia('print');
			        mediaQueryList.addListener(function(mql) {
			            if (mql.matches) {
			                beforePrint();
			            } else {
			                afterPrint();
			            }
			        });
			    }

			    //window.onbeforeprint = beforePrint;
			    //window.onafterprint = afterPrint;
			}());
		/*****************PRINT*****************/
		
		return;
	}
}

function closePage() {

	document.getElementById("currentItem").innerHTML = "";
	showContent("homePage" ,"views.Home");
}