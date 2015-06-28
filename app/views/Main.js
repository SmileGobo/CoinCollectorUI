define(['text!template/Main.html','backbone', 'jqx-all'], function(template){
	return Backbone.View.extend({
		el: 'body',
		template: _.template(template),

		render: function(){
			this.$el.html(this.template());
			var wnd = $(window);
			var main_width = wnd.width() * 0.95 
			//$(this.Location('ListView')).width(200);
			//$(this.Location('InfoView')).width(400);

			$('#main').jqxDockPanel({ 
				height: wnd.height(),
				width: main_width, 
				//orientation: 'vertical',
				//panels: [{ size: '30%' }, { size: '40%' }],
				//resizable: false
			});

			
		},
		initialize:function(){
			this.locations = {
				ListView: '#master',
				InfoView: '#detail'
			}
			this.render();
		},
		
		Location: function(name){
			var rslt = this.$el.find(this.locations[name])[0];
			//console.log('MainView.Location: ', rslt);
			return rslt;
		}
	});

});