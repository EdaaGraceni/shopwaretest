"use strict";(window["webpackJsonpPluginswag-extension-store"]=window["webpackJsonpPluginswag-extension-store"]||[]).push([[234],{1234:function(e,n,s){s.r(n),s.d(n,{default:function(){return t}});var t={template:"{% block sw_extension_type_label %}\n    <div>\n        {% block sw_extension_type_label_self_hosted %}\n            <sw-extension-label>\n                {{ $tc('sw-extension-store.typeLabels.self-hosted') }}\n            </sw-extension-label>\n        {% endblock %}\n\n        {% block sw_extension_type_label_cloud %}\n            <sw-extension-label v-if=\"isApp\"\n                class=\"sw-extension-type-label__cloud-label\">\n                {{ $tc('sw-extension-store.typeLabels.cloud') }}\n            </sw-extension-label>\n        {% endblock %}\n    </div>\n{% endblock %}\n",props:{type:{type:String,required:!0,validator(e){return["app","plugin"].includes(e)}}},computed:{isApp(){return"app"===this.type}}}}}]);