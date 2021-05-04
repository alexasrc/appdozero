sap.ui.define([
  "sap/ui/core/UIComponent",
], function (UIComponent) {

  'use strict';

  return UIComponent.extend("fiorinet.template.Component", {

    metadata: {
      manifest: "json"
    },

    ////// Initialization /////
    init: function () {

      //// Chama a superclasse
      UIComponent.prototype.init.apply(this, arguments);

    },

    ///// Implementacao customizada /////

    /////////////////////////////

  });

});