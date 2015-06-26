define(['text!template/CoinsListItem.html','backbone', 'jqx-all'], function(tmpl){
	return Backbone.View.extend({
		template: _.template(tmpl),

		render: function(){
			this.$el.jqxListBox({
			    source: this.collection.map(function(item){ 
			        return {value: item.GetAttrs()};
			    }),
			    width: 240, 
			    height: '100%',
			    renderer: _.bind(this._RenderItem, this)
			});
			
		},
		_OnItemSelect: function(e){
			this.collection.SetSelected(e.args.index);
		},
		_RenderItem: function(index, label, val){
		        
		      return this.template(val);
		},
		initialize:function(){
			this.render();
			this.$el.on('select', _.bind(this._OnItemSelect, this));
		}
	});

});