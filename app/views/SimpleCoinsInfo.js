define(['view/SimpleFormInfo'], function(SimpleFormInfo) {
    'use stirct';
    var form = [
            { view:"text", name:"currency", label:"Валюта"},
            { view:"text", name:"denomination", label:"Номинал"},
            { view:"text", name:"name", label:"Название"},
            { view:"text", name:"year", label:"Год"},
    ];
    var label = "Монеты";
    return SimpleFormInfo.extend({
        initialize: function(){
            this.SetFields(form);
            this.SetName(label);
            this.Init();
            
            this.SetValue(this.collection.GetCurrent());
            this.collection.on('CurrentChange', _.bind(this.SetValue, this));
        }
    });
});