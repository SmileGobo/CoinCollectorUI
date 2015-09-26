define(['text!template/CoinsImage.html'], function(tmpl){
	var CoinsImage = WebixView.extend({
		
		config:{
			isolate:true,
			view:'template', 
			//height: 180,
			scroll: false,
			minHeight: 230,
			template: tmpl,
			html: ''
		},
		widget: null,
		afterRender: function(){
			this.widget = $$(this.config.id);
		},
		initialize: function(opts){
			//console.log(opts);
			if(opts.config){
				_.extend(this.config, opts.config);
			}
			this.config.id = 'imgView' + CoinsImage.id_val;
			this.listenTo(this.collection, 'CurrentChange', _.bind(this.OnItemSelect, this));
			this.render();
			this.OnItemSelect(this.collection);
			//console.log(this.widget); 
		},
		OnItemSelect: function(store){
			var item = store.GetCurrent();
			var data = item.GetAttrs();

			this.widget.setValues(data);
			////console.log(data);
		}
	}, {id_val: 0});
	return CoinsImage;
});