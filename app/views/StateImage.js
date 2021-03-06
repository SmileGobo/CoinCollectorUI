define(['text!template/StateImage.html'], function(tmpl){
	var StateImage = WebixView.extend({
		
		config:{
			isolate:true,
			view:'template', 
			//height: 180,
			scroll: false,
			//minHeight: 305,
			template: tmpl,
			html: ''
		},
		widget: null,
		afterRender: function(){
			this.widget = $$(this.config.id);
		},
		initialize: function(opts){
			if(opts.config){
				_.extend(this.config, opts.config);
			}
			this.config.id = 'ContryImgView' + StateImage.id_val;
			this.listenTo(this.collection, 'CurrentChange', _.bind(this.OnItemSelect, this));
			this.render();
			this.OnItemSelect(this.collection);
		},
		OnItemSelect: function(store){
			var item = store.GetCurrent();
			var data = item.GetAttrs();
			this.widget.setValues(data);
			//console.log(rslt);
		}
	}, {id_val: 0});
	return StateImage;
});