import "./component";
import "./preview";

Shopware.Service("cmsService").registerCmsBlock({
    name: "text-image-two-column",
    label: "Text Image Two Column",
    category: "text-image",
    component: "sw-cms-block-text-image-two-column",
    previewComponent: "sw-cms-preview-text-image-two-column",
    defaultConfig: {
        marginBottom: "",
        marginTop: "",
        marginLeft: "",
        marginRight: "",
    },
    slots: {
        left: "text",
    },
});
