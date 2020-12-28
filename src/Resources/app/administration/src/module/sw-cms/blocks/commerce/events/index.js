import "./component";
import "./preview";

Shopware.Service("cmsService").registerCmsBlock({
    name: "events",
    label: "Events",
    category: "commerce",
    component: "sw-cms-block-events",
    previewComponent: "sw-cms-preview-events",
    defaultConfig: {
        marginBottom: "",
        marginTop: "24px",
        marginLeft: "",
        marginRight: "",
        sizingMode: "boxed",
    },
    slots: {
        media: "image",
    },
});
