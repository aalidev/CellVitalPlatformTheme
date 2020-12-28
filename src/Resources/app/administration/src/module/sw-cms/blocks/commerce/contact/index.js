import "./component";
import "./preview";

Shopware.Service("cmsService").registerCmsBlock({
    name: "cvp-contact",
    label: "Contact",
    category: "commerce",
    component: "sw-cms-block-cvp-contact",
    previewComponent: "sw-cms-preview-cvp-contact",
    defaultConfig: {
        marginBottom: "48px",
        marginTop: "48px",
        marginLeft: "",
        marginRight: "",
        sizingMode: "boxed",
    },
    slots: {
        media: "image",
    },
});
