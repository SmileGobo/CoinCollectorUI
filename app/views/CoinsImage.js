define([], function(){
	var CoinsImage = WebixView.extend({
		
		config:{
			isolate:true,
			view:'template', 
			//height: 180,
			scroll: false,
			minHeight: 305,
			template: '<img src="#avers#" width=300 height=300 /><img src="#revers#" width=300 height=300 /><img src="#edge#" width=300 height=300 />',
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
			console.log(data);
		}
	}, {id_val: 0});
	return CoinsImage;
});