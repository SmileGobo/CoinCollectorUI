define([],function(){
	'use stirct';

    var cfg ={ 
        readonly: true,
        labelPosition:'top'
    };
    var id_count = 0;
   
    var SimpleFormInfo = WebixView.extend({
        config:{
            isolate: true,
            elements:  [{ 
                view:'fieldset',
                label:null,  //тут параметр
                body:{
                    rows:null
                }
            }],
            elementsConfig: cfg,
            view:'form',
            editable:false,
            id: 'simple_form_view'
            
        },
        afterRender:function(){
            this.widget = $$(this.config.id);
        },
        SetValue: function(store){
            var item = store.GetCurrent();
            this.widget.setValues(item.GetAttrs());
        }, 
        SetName: function(name){
            this.config.elements[0].label = name;
        },
        Init: function(){
        	this.config.id += id_count++;
            this.render();
        },
        SetFields: function(fields){
            this.config.elements[0].body.rows = fields;
        },
        Widget: function(){
            return this.widget;
        }
        
    });

    return SimpleFormInfo;

    
});