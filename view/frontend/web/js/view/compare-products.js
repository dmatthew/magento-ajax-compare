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

    return Component.extend({
        options: {
            classes: {
                addToCompareClass: 'tocompare'
            },
            formKeyInputSelector: 'input[name="form_key"]'
        },

        initialize: function () {
            this._super();
            this.compareProducts = customerData.get('compare-products');

            this._initSidebar();
        },

        _initSidebar: function () {
            /**
             * When a .tocompare is clicked, get its data from its data-compare attribute.
             * Then add its data to this.compareProducts.items.
             */
            if (sidebarInitialized) {
                return;
            }
            sidebarInitialized = true;

            this._setupChangeEvents();
        },

        _setupChangeEvents: function () {

            var $widget = this;

            $('.' + this.options.classes.addToCompareClass).on('click', function () {
                var element = $(this);
                var found = $widget._itemExists(element.data('compare'));
                if (found) {
                    $widget._addItem({
                        'id': $(this).data('compare').id,
                        'product_url': $(this).data('compare').product_url,
                        'name': $(this).data('compare').name,
                        'remove_data': $(this).data('compare').remove_data,
                        'add_data': $(this).data('compare').add_data
                    });
                }
            });
        },

        _itemExists: function (compare) {
            var found = $.map(this.compareProducts().items, function (item) {
                if (item.id == compare.id) {
                    return item.id;
                }
            });
            return $.isEmptyObject(found);
        },

        _addItem: function (item) {
            this.compareProducts().items.push(item);
            this.compareProducts().count++;
            this.compareProducts().countCaption = this.compareProducts().count == 1 ? this.compareProducts().count + ' Item' : this.compareProducts().count + ' Items';
            this.compareProducts.valueHasMutated(); // HACK: Does not update view if called from within jQuery.on(), so this is needed for some reason.

            var addData = JSON.parse(item.add_data);
            // TODO: Add form key to data.
            var formKey = $(this.options.formKeyInputSelector).val();
            if (formKey) {
                addData.data.form_key = formKey;
            }
            $.ajax({
                url: addData.action,
                type: 'POST',
                data: addData.data,
                success: function (data, testStatus, jqXHR) {
                    alert('Success');
                    // TODO: Check for data.success === true to determine if it was an actual success.
                    if (data.success == false) {
                        alert('actually false');
                    }
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    alert('failure');
                }
            })
        }
    });
});
