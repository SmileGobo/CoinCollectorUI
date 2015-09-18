
define([], function(){
	var CoinsList = WebixView.extend({
		config:{
			isolate:true,
			view:"list", 
			scroll: true,
			layout:"y", 
			template:"#denomination# - #countryName#",
			select: true
		},
		widget: null,
		afterRender: function(){
			
			this.widget = $$(this.config.id);
			var self = this;
			this.collection.forEach(function(val, key){
				self.widget.add(val.attributes);
			});
		},
		initialize: function(opts){
			if(opts.config){
				_.extend(this.config, opts.config);
			}
			var base_id = 'coins_list';
			this.config.id = base_id + CoinsList.id_val;
			CoinsList.id_val++;
			this.render();
			//console.log(_.bind);
			this.widget.select(this.collection.GetCurrentId());
			this.widget.attachEvent("onItemClick", _.bind(this.OnItemClick, this));
			
		},
		OnItemClick: function(id){
    		var num = this.widget.getIndexById(id);
    		this.collection.SetSelected(num);
		}
	}, {id_val: 0});
	return CoinsList;
});