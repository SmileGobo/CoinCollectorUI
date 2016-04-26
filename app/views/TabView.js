define(['util/WidgetView'], function(WidgetView){
	
	var TabView = WidgetView.extend({
		Config: function(){
			return {
				view: 'tabview',
				cells:[]
			};
		},
		/**
			{header: '', }
		*/
		AddTab: function(cfg){
			this.config.cells.push(cfg);
		}
	});

	return TabView;
	
})