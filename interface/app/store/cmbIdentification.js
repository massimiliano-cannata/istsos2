/*
 * File: app/store/cmbIdentification.js
 * Date: Fri Dec 13 2013 10:56:51 GMT+0100 (CET)
 *
 * This file was generated by Ext Designer version 1.2.3.
 * http://www.sencha.com/products/designer/
 *
 * This file will be auto-generated each and everytime you export.
 *
 * Do NOT hand edit this file.
 */

Ext.define('istsos.store.cmbIdentification', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'identification',
            proxy: {
                type: 'ajax',
                url: 'app/data/cmbIdentification.json',
                reader: {
                    type: 'json',
                    idProperty: 'definition',
                    root: 'data'
                }
            },
            fields: [
                {
                    name: 'name',
                    type: 'string'
                },
                {
                    name: 'definition',
                    type: 'string'
                }
            ]
        }, cfg)]);
    }
});