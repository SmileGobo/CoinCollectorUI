define(['text!template/Main.html','backbone', 'jqx-all'], function(template){
	return Backbone.View.extend({
		el: 'body',
		template: _.template(template),

		render: function(){
			this.$el.html(this.template());
			var w = $(window);
			$('#main').jqxSplitter({ 
				height: (w.height() * 0.95),
				width: (w.width() * 0.95), 
				orientation: 'vertical',
				panels: [{ size: '30%' }, { size: '40%' }],
				//resizable: false
			});
		},
		initialize:function(){
			this.render();
			this.locations = {
				ListView: '#master',
				InfoView: '#detail'
			}
		},
		
		Location: function(name){
			var rslt = this.$el.find(this.locations[name])[0];
			//console.log('MainView.Location: ', rslt);
			return rslt;
		}
	});

});