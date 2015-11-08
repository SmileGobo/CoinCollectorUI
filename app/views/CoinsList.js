
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
		_ignore_select: false,
		afterRender: function(){
			
			var widget = this.root;
			widget.sync(this.collection);
			widget.attachEvent("onItemClick", _.bind(this.OnItemClick, this));
			var store = this.root.data;
			this.collection.SetSelected(0);
			console.log(this.collection.GetCurrentId());
		},
		initialize: function(opts){
			//console.log(opts);
			if(opts.config){
				_.extend(this.config, opts.config);
			}
			var base_id = 'coins_list';
			//this.config.id = base_id + CoinsList.id_val;
			//CoinsList.id_val++;
			this.collection.on('CurrentChange', _.bind(this.OnItemSelected, this));
			this.render();
		},
		OnItemClick: function(id){
    		var num = this.root.getIndexById(id);
    		console.log(num);
    		this._IgnoreSelect(true);
    		this.collection.SetSelected(num);
		},
		OnItemSelected: function(item){
			if (!this._IsIgnoreSelect()){
				var id = 'c' + item.get('id');//выглядит как грязный хак!!!
				this.root.select(id);
			}
			this._IgnoreSelect();
		},
		_IgnoreSelect: function(val){
			this._ignore_select = val;
		},
		_IsIgnoreSelect: function(){
			return this._ignore_select;
		}
	}, {id_val: 0});
	return CoinsList;
});