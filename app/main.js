requirejs([
  //view
  'view/Main',
  'view/CoinsList',
  'view/CoinInfo',
  //stores
  'collection/Coins'

], function(MainView, ListView, DeviceInfo, CoinsCollection) {
	var coins = new CoinsCollection();
	
	
	var main_view = new MainView();
	main_view.render();
	
	var list_view = new ListView({
	  el: main_view.Location('ListView'),
	  collection: coins
	});
	
	var info_panel = new DeviceInfo({
	  el: main_view.Location('InfoView'),
	  collection: coins
	});
	
	
	
});