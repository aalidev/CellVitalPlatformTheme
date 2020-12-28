import "./component";
import "./preview";

Shopware.Service("cmsService").registerCmsBlock({
    name: "ask-anything",
    label: "Ask Anything",
    category: "text",
    component: "sw-cms-block-ask",
    previewComponent: "sw-cms-preview-ask",
    defaultConfig: {
        marginBottom: "20px",
        marginTop: "20px",
        marginLeft: "",
        marginRight: "",
        sizingMode: "boxed",
    },
    slots: {
        content: "image",
    },
});
