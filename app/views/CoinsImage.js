define(['text!template/CoinsImage.html', 'backbone'], fuction(template){
	return Backnone.View.extend({
		template: _.template(template),
		initialize: fuction(){
			this.render();
		},
		render:fuction(){
			this.$el.html(this.template());
			this._img = {};
			var self = this;
			_.each(['avers', 'revers', 'edge'], fuction(item){
				self._img[item] = $(self.$el.find('#' + item));
			});
		}
	});
});