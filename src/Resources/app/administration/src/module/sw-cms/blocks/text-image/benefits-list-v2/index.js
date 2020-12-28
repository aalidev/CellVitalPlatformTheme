import "./component";
import "./preview";

Shopware.Service("cmsService").registerCmsBlock({
    name: "benefits-list-v2",
    label: "Benefits List V2",
    category: "text-image",
    component: "sw-cms-block-benefits-list-v2",
    previewComponent: "sw-cms-preview-benefits-list-v2",
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
