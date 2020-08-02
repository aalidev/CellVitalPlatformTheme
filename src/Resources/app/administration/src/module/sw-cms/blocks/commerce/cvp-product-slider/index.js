import "./component";
import "./preview";

Shopware.Service("cmsService").registerCmsBlock({
    name: "cvp-product-slider",
    label: "CVP Product Slider",
    category: "commerce",
    component: "sw-cms-block-cvp-product-slider",
    previewComponent: "sw-cms-preview-cvp-product-slider",
    defaultConfig: {
        marginBottom: "20px",
        marginTop: "20px",
        marginLeft: "20px",
        marginRight: "20px",
        sizingMode: "boxed",
    },
    slots: {
        productSlider: "product-slider",
    },
});
