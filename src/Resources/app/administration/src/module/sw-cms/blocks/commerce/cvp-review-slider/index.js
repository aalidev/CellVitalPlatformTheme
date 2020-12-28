import "./component";
import "./preview";

Shopware.Service("cmsService").registerCmsBlock({
    name: "cvp-review-slider",
    label: "CVP Review Slider",
    category: "commerce",
    component: "sw-cms-block-cvp-review-slider",
    previewComponent: "sw-cms-preview-cvp-review-slider",
    defaultConfig: {
        marginBottom: "20px",
        marginTop: "20px",
        marginLeft: "20px",
        marginRight: "20px",
        sizingMode: "boxed",
    },
    slots: {
        reviewSlider: "product-slider",
    },
});
