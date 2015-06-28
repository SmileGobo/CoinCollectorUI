define(['text!template/MainInfo.html', 'backbone'], function(TEMPLATE) {
    'use stirct';
    return Backbone.View.extend({

        template: _.template(TEMPLATE),
        initialize: function(){
            this.render();
     		this._inpts = {};
     		this._img = {
     			avers: $(this.$el.find('div > img[name=avers]')),
     			revers: $(this.$el.find('div > img[name=revers]'))
     		};
     		this._btns = {
     			save :$(this.$el.find('#save'))
     		};
     		this._btns.save.jqxButton();
     		this._btns.save.on('click', _.bind(this._OnSave, this));
     		var self = this;
            _.each(this.$el.find('div > div > input[type=text]'), function(item){
            	item = $(item).jqxInput({height: 20});
            	self._inpts[item.attr('name')] = item;
            	//console.log(item);
            });
            this.SetValue(this.collection);
            this.collection.on('CurrentChange', _.bind(this.SetValue, this));
            //console.log(this._inpts);
            //this.Enable(false);
        },
        render: function(){
            this.$el.html(this.template()).css('padding', '15px');
        },
        Enable:function (val){
        	_.each(this._inpts, function(item){
        		item.jqxInput({disabled: !val});
        	});
        },
        SetValue:function(store){
        	var attrs = store.GetCurrent().GetAttrs();
        	var self = this;
        	_.each(attrs, function(value, key){
        		if (_.has(self._inpts, key)){
        			self._inpts[key].jqxInput('val', value);
        		}
        	});
        	_.each(attrs, function(value, key){
        		if (_.has(self._img, key)){
        			self._img[key].attr('src', value);
        		}
        	});
        },
        GetValue: function(){
        	var rslt = {};
        	_.each(this._inpts, function(item, key){
        		rslt[key] = item.jqxInput('val');
        	});
        	/*_.each(this._img, function(item, key){
        		rslt[key] = item.attr('src');
        	});*/
        	return rslt;
        },

        _OnSave: function(){
        	var model = this.collection.GetCurrent();
        	model.set(this.GetValue());
        }

    });
    
});