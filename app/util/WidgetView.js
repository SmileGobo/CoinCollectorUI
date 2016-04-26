define([], function(){
	var WidgetView = WebixView.extend({
		config: {
			isolate: true
		},
		initialize:function(){
			this.config = _.extend(this.config, this.Config());
			this.render();
		},
		afterRender: function(){
			this.Init();
		}
	});

	return WidgetView;
});