define([], function(){
	var CoinsImage = WebixView.extend({
		
		config:{
			isolate:true,
			view:'template', 
			//height: 180,
			scroll: false,
			minHeight: 152,
			template: '<img src="#avers#" width=150 height=150 /> <img src="#revers#" width=150 height=150 />',
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
		},
		OnItemSelect: function(store){
			var item = store.GetCurrent();
			var data = item.GetAttrs();
			this.widget.setValues(data);
			//console.log(rslt);
		}
	}, {id_val: 0});
	return CoinsImage;
});