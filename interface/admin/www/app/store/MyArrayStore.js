/*
 * File: app/store/MyArrayStore.js
 * Date: Thu May 22 2014 15:17:28 GMT+0200 (CEST)
 *
 * This file was generated by Ext Designer version 1.2.3.
 * http://www.sencha.com/products/designer/
 *
 * This file will be auto-generated each and everytime you export.
 *
 * Do NOT hand edit this file.
 */

Ext.define('istsos.store.MyArrayStore', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'MyArrayStore',
            proxy: {
                type: 'ajax',
                reader: {
                    type: 'array',
                    idProperty: 'xx'
                }
            }
        }, cfg)]);
    }
});