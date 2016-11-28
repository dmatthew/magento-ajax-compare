define([
    'jquery',
    "jquery/ui"
], function ($) {
    'use strict';

    $.widget('dmatthew.CompareRenderer', {
        options: {
            compareClass: 'tocompare'
        },

        _create: function () {
            alert('_create called');
            // Use _create to build and inject markup, bind events, etc.
            // $('.something').CompareRenderer().CompareRenderer() will call _create once.
        },
        
        _init: function () {
            // Place default functionality in _init().
            // _init will be called each time .CompareRenderer() is called.
            // $('.something').CompareRenderer().CompareRenderer() will call _init twice.
            alert('_init called');
            // this._RenderControls();
        },

        _RenderControls: function () {
            var $widget = this;

            // Handle events like click or change
            $widget._EventListener();
            
            // Initialize mini compare on page (Get data from session. Some jsonConfig value?)
        },

        _EventListener: function () {

            var $widget = this;

            $widget.element.on('click', '.' + this.options.compareClass, function () {
                return $widget._OnClick($(this), $widget);
            });
        },

        _OnClick: function ($this, $widget) {
            
            alert('_OnClick called');

            // 1. Add product to mini compare.
            // 2. Make AJAX call to add product to compare list in session.

        }
    });

    return $.dmatthew.CompareRenderer;
});