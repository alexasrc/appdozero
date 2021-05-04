sap.ui.define([

  "sap/ui/core/mvc/XMLView",
  "sap/ui/core/ComponentContainer"

], function (XMLView, ComponentContainer) {
  'user-strict';

  /* XMLView.create({
     viewName: "fiorinet.template.view.App"
   }).then(function (oView) {
     oView.placeAt("content");
   } ); */

  new ComponentContainer({
    name : "fiorinet.template",
    settings : {
      id : "template"
    },
    async : true
  }).placeAt("content");

});
