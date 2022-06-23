sap.ui.define(
    ["./BaseController"],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.myorg.viewSettingsDialogSort.controller.MainView", {
            onInit: function () {},
            handleOpenDialog: async function () {
                this.dialog = await this.loadFragment({
                    id: "ViewSettingsDialog",
                    name: "com.myorg.viewSettingsDialogSort.view.ViewSettingsDialog",
                    controller: this,
                });
                this.dialog.open()
            },
            handleOpenDialogWithModel: async function () {
                this.dialog = await this.loadFragment({
                    id: "ViewSettingsDialogModel",
                    name: "com.myorg.viewSettingsDialogSort.view.ViewSettingsDialogModel",
                    controller: this,
                });
                this.dialog.open()
            }
        });
    }
);
