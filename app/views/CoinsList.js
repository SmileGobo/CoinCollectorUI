define(['backbone'], function(tmpl){
	return Backbone.View.extend({
		config:{
			isolaite:true,
			view:"list",
			id:"sidemenu", 
			scroll: true,
			layout:"y", 
			template:"#denomination# - #countryName#",
			select: true, 
			width:230
		},
		widget: null,
		render: function(){
			
		},
		initialize: function(){
			this.config.container = this.el;
			this.widget = webix.ui(this.config);
			var self = this;
			this.collection.forEach(function(val, key){
				self.widget.add(val.attributes);
			});
			this.render();
		}
	});

});