import "./component";
import "./preview";

Shopware.Service("cmsService").registerCmsBlock({
    name: "image-text-background",
    label: "Image Text Background",
    category: "text-image",
    component: "sw-cms-block-image-text-background",
    previewComponent: "sw-cms-preview-image-text-background",
    defaultConfig: {
        marginBottom: "0",
        marginTop: "0",
        marginLeft: "0",
        marginRight: "0",
    },
    slots: {
        left: "text",
        right: "image",
    },
});
