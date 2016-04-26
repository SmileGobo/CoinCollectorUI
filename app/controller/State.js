define(['view/SimpleStateInfo','collection/States'], function(StateInfo, Store){
	var StateController = function(layout){
		this._store = new Store();
		this.view = {
			state : new StateInfo({
				collection: this._store,
				el: layout.getChild('state')
			})
		}
	}

	StateController.prototype.OnCoinsChange = function(coins) {
		//console.log(coins);
		var item = this._store.find('stateId', coins.get('stateId'));
		console.log(item);
		this.view.state.root.setValues(coins.toJSON());
	};

	return StateController;
});