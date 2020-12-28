import "./component";
import "./preview";

Shopware.Service("cmsService").registerCmsBlock({
    name: "partner-form",
    label: "Partner Form",
    category: "form",
    component: "sw-cms-block-partner-form",
    previewComponent: "sw-cms-preview-partner-form",
    defaultConfig: {
        marginBottom: "20px",
        marginTop: "20px",
        marginLeft: "",
        marginRight: "",
        sizingMode: "boxed",
    },
    slots: {
        content: {
            type: "partner-form",
        },
        title: "text",
        media: "image",
        description: "text",
    },
});
