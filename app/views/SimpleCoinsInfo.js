define(['view/SimpleFormInfo'], function(SimpleFormInfo) {
    'use stirct';
    var form = [
            //{ view:"text", name:"countryName", label:"Страна"},
            { view:"text", name:"currency", label:"Валюта"},
            { view:"text", name:"denomination", label:"Номинал"},
            { view:"text", name:"name", label:"Название"},
            { view:"text", name:"year", label:"Год"},
    ];
    return SimpleFormInfo(form, 'монета');
});