import template from "./template.twig";

const { Component, Mixin } = Shopware;

Component.register("sw-cms-el-config-partner-form", {
    template,

    mixins: [Mixin.getByName("cms-element")],

    created() {
        this.createdComponent();
    },

    methods: {
        createdComponent() {
            this.initElementConfig("partner-form");
        },
    },
});
