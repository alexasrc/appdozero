sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/MessageToast",
  "sap/ui/model/json/JSONModel"

], function (Controller, MessageToast, JSONModel) {
  'use strict';

  return Controller.extend("fiorinet.template.controller.App", {

    //// Initialization ////
    onInit: function () {

      //defnindo um objeto de dados
      var oMsg = {
        MsgInicial: "Seja bem vindo",
        Msg2: "Boa noite"
      };

      // cria modelo json
      var oMsgModel = new JSONModel();
      oMsgModel.setData(oMsg);

      // data binding 
      // adiciona dados na view
      var view = this.getView();
      view.setModel(oMsgModel, "messages");

      // modelo 2
      // cria um modelo ja definindo o objeto
      var oPessoalModel = new JSONModel({
        nome: "Steven",
        sobrenome: "Job",
        habilitado: true,
        endereco: {
          rua: "Avenida Pastor Victor Hugo, 156",
          cidade: "Paris",
          cep: "12345",
          pais: "França"
        }
      });

      // Atribui o modelo à view
      this.getView().setModel(oPessoalModel, "pessoa");


      // Tabela interna (array)
      var oFuncionarios = {

        Funcionarios: [
          {
            nome: "Steven",
            sobrenome: "Job",
            habilitado: true,
          },
          {
            nome: "Burt",
            sobrenome: "Preynolds",
            habilitado: false,
          },
          {
            nome: "Maiqe",
            sobrenome: "Taison",
            habilitado: true,
          }
        ]
      };

      // Atribui o modelo à view
      var oFunModel = new JSONModel(oFuncionarios);
      this.getView().setModel(oFunModel, "empregados");

    },

    //// MODULE PBO - AT SELECTION SCREEN OUTPUT
    onBeforeRendering: function () {
      //  alert("onBeforeRendering");
    },

    //// MODULE PAI - AT SELECTION SCREEN
    onAfterRendering: function () {
      //  alert("onAfterRendering");
    },


    //// AT EXIT COMMAND
    onExit: function () {
      //  alert("onExit");
    },

    //// Metodos Customizados /////
    onClique: function () {
      // MessageToast.show("Ola pessoal")

      // coletar o modelo que esta na tela
      var oModel = this.getView().getModel("messages");

      // coletar os dados do model
      var oDados = oModel.getData();

      MessageToast.show(oDados.MsgInicial);

    },

    onFuncionarioSelected: function (oEvent) {
      var oSelectedItem = oEvent.getSource();
      var oContext = oSelectedItem.getBindingContext("empregados");
      var sPath = oContext.getPath();
      var oPanel = this.byId("detalhePanel");

      oPanel.bindElement({
        path: sPath,
        model: "empregados"
      });
    }

  });

});