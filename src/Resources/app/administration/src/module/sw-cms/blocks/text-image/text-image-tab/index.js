import "./component";
import "./preview";

Shopware.Service("cmsService").registerCmsBlock({
    name: "text-image-tab",
    label: "Text Image Tab",
    category: "text-image",
    component: "sw-cms-block-text-image-tab",
    previewComponent: "sw-cms-preview-text-image-tab",
    defaultConfig: {
        marginBottom: "",
        marginTop: "",
        marginLeft: "",
        marginRight: "",
    },
    slots: {
        first: "text",
        second: "text",
        third: "text",
        fourth: "text",
        fifth: "text",
    },
});
