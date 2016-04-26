define([
 //Роутер
 'controller/Router'

], function(Router) {
	//
	return {
		initialize: function(){
			
			var coins_router = new Router();
            Backbone.history.start(/*{pushState: true}*/);

		}
	}
});