define(
    [
        'util/RibbonHtmlBuilder',
        'view/MainCoinInfo',
        'view/ListButtonBar',
        'backbone'
    ],
    function(Builder, MainInfo, ControlButtonBar) {
       'use strict';
        return Backbone.View.extend({
            initialize: function(){
                this._main_info = null;
                this._control_bar = null;
                
                this.render();
            },
            render: function(){
                var html_builder = new Builder([
                    { name: 'main',
                      caption:'Основное111'},
                    { name: 'more',
                      caption:'Вспомогательная информация'},
                    { name: 'Прочее',
                      caption:'Основное'}
                ]);
                
                html_builder.RenderTo(this.$el);
                
                this.$el.jqxRibbon({
                    width: '100%',
                    height: '100%',
                    position: "top",
                    selectionMode: "click"
                });
                
                this._main_info = new MainInfo({
                    el:html_builder.GetPanelDom('main'),
                    collection: this.collection
                });
                
                this._control_bar = new ControlButtonBar({
                    el:html_builder.GetPanelDom('more')
                })
            }
        });
    }
);