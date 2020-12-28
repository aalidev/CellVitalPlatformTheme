import { Component, Mixin } from "src/core/shopware";
import template from "./template.twig";
import "./styles.scss";

Component.register("sw-cms-el-partner-form", {
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
