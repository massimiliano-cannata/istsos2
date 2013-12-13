/*
 * File: app/view/ui/ProcedureGridEditor.js
 * Date: Fri Dec 13 2013 10:56:51 GMT+0100 (CET)
 *
 * This file was generated by Ext Designer version 1.2.3.
 * http://www.sencha.com/products/designer/
 *
 * This file will be auto-generated each and everytime you export.
 *
 * Do NOT hand edit this file.
 */

Ext.define('istsos.view.ui.ProcedureGridEditor', {
    extend: 'Ext.panel.Panel',
    requires: [
        'istsos.view.ProcedureGrid'
    ],

    id: 'proceduregrideditor',
    minWidth: 350,
    width: 350,
    layout: {
        type: 'border'
    },
    collapsed: false,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'panel',
                    border: 0,
                    height: 30,
                    itemId: 'buttonspanel',
                    layout: {
                        type: 'fit'
                    },
                    title: '',
                    region: 'north',
                    items: [
                        {
                            xtype: 'form',
                            border: 0,
                            id: 'chartfilterFrm',
                            layout: {
                                align: 'middle',
                                type: 'hbox'
                            },
                            bodyPadding: '0 10 0 10',
                            collapseFirst: false,
                            collapsed: false,
                            title: '',
                            items: [
                                {
                                    xtype: 'combobox',
                                    id: 'oeCbEditableProcedures',
                                    name: 'procedure',
                                    fieldLabel: 'Procedure',
                                    labelWidth: 70,
                                    allowBlank: false,
                                    displayField: 'name',
                                    queryMode: 'local',
                                    store: 'editableProcedure',
                                    valueField: 'name',
                                    flex: 1
                                },
                                {
                                    xtype: 'button',
                                    hidden: true,
                                    id: 'btnCancelEditor',
                                    minWidth: 60,
                                    text: 'Cancel',
                                    flex: 0.5
                                },
                                {
                                    xtype: 'button',
                                    id: 'btnStartEditor',
                                    minWidth: 60,
                                    text: 'Start editing',
                                    flex: 0.5
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'proceduregrid',
                    region: 'center',
                    id: 'proceduregrid'
                }
            ]
        });

        me.callParent(arguments);
    }
});