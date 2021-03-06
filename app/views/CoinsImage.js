define(['text!template/CoinsImage.html'], function(tmpl){
	var CoinsImage = WebixView.extend({
		
		config:{
			isolate:true,
			view:'template', 
			scroll: false,
			template: tmpl,
			html: '',
			gravity: 2,
			minHeight: 220
		},
		widget: null,
		afterRender: function(){
			this.widget = $$(this.config.id);
		},
		initialize: function(opts){
			if(opts.config){
				_.extend(this.config, opts.config);
			}
			this.config.id = 'imgView' + CoinsImage.id_val;
			this.listenTo(this.collection, 'CurrentChange', _.bind(this.OnItemSelect, this));
			this.render();
			this.OnItemSelect(this.collection.GetCurrent());
		},
		OnItemSelect: function(item){
			var data = item.GetAttrs();
			this.widget.setValues(data);
		}
	}, {id_val: 0});
	return CoinsImage;
});