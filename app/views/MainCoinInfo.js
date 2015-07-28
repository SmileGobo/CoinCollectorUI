define([], function() {
    'use stirct';
    var form = [
        {
            cols:[
                { view:"text", name:"countryName", label:"Страна"},
                { view:"text", name:"year", label:"Год"},
                { view:"text", name:"denomination", label:"Название"}
        ]}
    ];
    var cfg ={
        //edit: false, 
        readonly: true,
        labelPosition:'top'
    };
    var MainCoinsInfo = WebixView.extend({
        config:{
            isolate: true,
            elements: form,
            elementsConfig: cfg,
            view:'form',
            editable:false,
            id: 'coins_main_view'
            
        },
        afterRender:function(){
            this.widget = $$(this.config.id);
        },
        initialize: function(){
            this.render();

            this.SetValue(this.collection);
            this.collection.on('CurrentChange', _.bind(this.SetValue, this));
            //console.log(this._inpts);
            //this.Enable(false);
        },
        SetValue: function(store){
            var item = store.GetCurrent();
            this.widget.setValues(item.GetAttrs());
        }

    }, {id_val:0});
    //console.log(MainCoinsInfo);
    return MainCoinsInfo;
});