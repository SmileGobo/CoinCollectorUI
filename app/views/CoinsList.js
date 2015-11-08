
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
		_ignore_select: false,
		afterRender: function(){
			
			var widget = this.root;
			widget.sync(this.collection);
			widget.attachEvent("onItemClick", _.bind(this.OnItemClick, this));
			var store = this.root.data;
			//this.collection.SetSelected(0);
		},
		initialize: function(opts){
			if(opts.config){
				_.extend(this.config, opts.config);
			}
			var base_id = 'coins_list';
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
				//в целом тоже грязный хак
				this.root.select(item.cid);
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