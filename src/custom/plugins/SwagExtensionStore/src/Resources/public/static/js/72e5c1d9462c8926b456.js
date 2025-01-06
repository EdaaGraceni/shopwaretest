"use strict";(window["webpackJsonpPluginswag-extension-store"]=window["webpackJsonpPluginswag-extension-store"]||[]).push([[957],{957:function(n,e,s){s.r(e),s.d(e,{default:function(){return a}});let{Utils:t}=Shopware;var a={template:'<sw-modal\n    :title="$tc(\'sw-extension-store.detail.inAppPurchases.label\')"\n    :subtitle="extension.name"\n    variant="default"\n    class="sw-extension-store-detail-in-app-purchases-listing-modal"\n    @modal-close="closeInAppPurchasesListingModal"\n>\n    {% block sw_extension_store_detail_in_app_purchases_listing_modal_content %}\n        <sw-collapse v-for="inAppPurchase in inAppPurchases" class="sw-extension-store-detail-in-app-purchases-listing-modal-content__collapse">\n            <template #header="{ expanded }">\n                <div class="sw-extension-store-detail-in-app-purchases-listing-modal-content__title">\n                    {{ inAppPurchase.name }}\n                    {% block sw_extension_store_detail_in_app_purchases_listing_modal_header_icon %}\n                        {% block sw_extension_store_detail_in_app_purchases_listing_modal_header_icon_expanded %}\n                            <sw-icon\n                                v-if="expanded"\n                                class="sw-extension-store-detail-in-app-purchases-listing-modal-content__button"\n                                name="regular-chevron-down-xs"\n                                size="12px"\n                            ></sw-icon>\n                        {% endblock %}\n\n                        {% block sw_extension_store_detail_in_app_purchases_listing_modal_header_icon_not_expanded %}\n                            <sw-icon\n                                v-else\n                                class="sw-extension-store-detail-in-app-purchases-listing-modal-content__button"\n                                name="regular-chevron-right-xs"\n                                size="12px"\n                            ></sw-icon>\n                        {% endblock %}\n                    {% endblock %}\n                </div>\n            </template>\n            <template #content>\n                <span class="sw-extension-store-detail-in-app-purchases-listing-modal-content__description">\n                    {{ inAppPurchase.description }}\n                </span>\n\n                <span class="sw-extension-store-detail-in-app-purchases-listing-modal-content__description">\n                    {{ $tc(\'sw-extension-store.detail.inAppPurchases.paymentOptions\') }}\n                </span>\n\n                <ul class="sw-extension-store-detail-in-app-purchases-listing-modal-content__payment-options">\n                    {{ formatCurrency(inAppPurchase.priceModel.price, inAppPurchase.priceModel.currency) }}* {{ inAppPurchase.priceModel.duration }}\n                </ul>\n            </template>\n        </sw-collapse>\n    {% endblock %}\n    <span class="sw-extension-store-detail-in-app-purchases-listing-modal-content__tax-notice">\n        {{ $tc(\'sw-extension-store.general.taxNotice\') }}\n    </span>\n\n    <template #modal-footer>\n        <mt-button\n            variant="context"\n            size="small"\n            @click="closeInAppPurchasesListingModal">\n            {{ $tc(\'global.default.close\') }}\n        </mt-button>\n    </template>\n</sw-modal>\n',props:{extension:{type:Object,required:!0},inAppPurchases:{type:Array,required:!0}},methods:{closeInAppPurchasesListingModal(){this.$emit("modal-close")},formatCurrency(n,e){return t.format.currency(n,e)}}}}}]);