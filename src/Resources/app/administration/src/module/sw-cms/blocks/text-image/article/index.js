import "./component";
import "./preview";

Shopware.Service("cmsService").registerCmsBlock({
    name: "article",
    label: "Article",
    category: "text-image",
    component: "sw-cms-block-article",
    previewComponent: "sw-cms-preview-article",
    defaultConfig: {
        marginBottom: "",
        marginTop: "",
        marginLeft: "",
        marginRight: "",
    },
    slots: {
        one: "text",
    },
});
