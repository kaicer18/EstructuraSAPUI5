jQuery.sap.require("sap.m.MessageBox");
sap.ui.define([
   "sap/ui/sta/controller/BaseController",
   "sap/m/MessageToast"
], function (BaseController, MessageToast) {
   "use strict";
   return BaseController.extend("sap.ui.sta.controller.Cabecera", {

       onInit: function(oEvent) {
       },
       onDetalle: function(oEvent){
       	this.getRouter().navTo("detalle");
       }
   });
});