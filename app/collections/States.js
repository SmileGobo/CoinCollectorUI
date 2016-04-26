define(['model/State', 'json!data/state.json'], function(Model, data){
	var StateColletion = Backbone.Collection.extend({
		model: Model,
		initialze: function(){
			this.set(data);
		}
	});

	return StateColletion;
})