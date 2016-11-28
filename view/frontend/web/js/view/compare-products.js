/**
 * Copyright © 2016 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */
define([
    'jquery',
    'ko',
    'uiComponent',
    'Magento_Customer/js/customer-data'
], function ($, ko, Component, customerData) {
    'use strict';

    var sidebarInitialized = false;

    function initSidebar() {
        if (sidebarInitialized) {
            return ;
        }
        sidebarInitialized = true;
        require([
            'jquery',
            'mage/mage'
        ], function ($) {
            $('[data-role=compare-products-sidebar]').mage('compareItems', {
                "removeConfirmMessage": $.mage.__(
                    "Dmatthew: Are you sure you want to remove this item from your Compare Products list?"
                ),
                "removeSelector": "#compare-items a.action.delete",
                "clearAllConfirmMessage": $.mage.__(
                    "Are you sure you want to remove all items from your Compare Products list?"
                ),
                "clearAllSelector": "#compare-clear-all"
            });
        });

        /**
         * When a .tocompare is clicked, get its data from its data-compare attribute.
         * Then add its data to this.compareProducts.items.
         */
    }

    return Component.extend({
        initialize: function () {
            this._super();
            this.compareProducts = customerData.get('compare-products');

            // this.compareProducts.testname = ko.observable('Frank');

            // console.log(this.compareProducts());
            console.log(this.sections);

            // console.log(this.compareProducts().items);
            // this.compareProducts().items.push({
            //     'id': '1',
            //     'product_url': 'www.google.com',
            //     'name': 'This is my name',
            //     'remove_url': 'maps.google.com'
            // });
            // console.log(this.compareProducts().items);
            // initSidebar();
            // this._initSidebar();
        },

        _initSidebar: function () {
            if (sidebarInitialized) {
                return;
            }
            sidebarInitialized = true;

            // var $widget = this;

            // $('.tocompare').on('click', function () {
            //     console.log('Clicked');
            //     console.log($widget.compareProducts().items);
            //     $widget.compareProducts().items.splice(0, $widget.compareProducts().items.length);
            //     console.log($widget.compareProducts().items);
            // });
        }
    });
});
