import "./component";
import "./config";
import "./preview";

Shopware.Service("cmsService").registerCmsElement({
    name: "partner-form",
    label: "Partner Form",
    component: "sw-cms-el-partner-form",
    configComponent: "sw-cms-el-config-partner-form",
    previewComponent: "sw-cms-el-preview-partner-form",
    defaultConfig: {
        title: {
            source: "static",
            value: "Partner registration",
        },
        fullName: {
            source: "static",
            value: "",
        },
        phoneNumber: {
            source: "static",
            value: "",
        },
        phoneNumber: {
            source: "static",
            value: "",
        },
        address: {
            source: "static",
            value: "",
        },
        email: {
            source: "static",
            value: "",
        },
    },
});
