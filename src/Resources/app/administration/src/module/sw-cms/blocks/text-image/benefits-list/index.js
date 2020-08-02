import "./component";
import "./preview";

Shopware.Service("cmsService").registerCmsBlock({
    name: "benefits-list",
    label: "Benefits List",
    category: "text-image",
    component: "sw-cms-block-benefits-list",
    previewComponent: "sw-cms-preview-benefits-list",
    defaultConfig: {
        marginBottom: "",
        marginTop: "",
        marginLeft: "",
        marginRight: "",
    },
    slots: {
        one: "text",
        two: "text",
        three: "text",
        four: "text",
    },
});
