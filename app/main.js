requirejs([
  //view
 // 'view/Main',
  'view/CoinsList',
 // 'view/CoinInfo',
  //stores
  'collection/Coins'

], function(CoinsList, /*DeviceInfo,*/ CoinsCollection) {
	var coins = new CoinsCollection();
	webix.ui.fullScreen();
	//var CoinsList = 
	
	//
	var main_grid = webix.ui({
		container: $('body')[0],
		cols:[
			{minWidth:230, width: 230},
			{view: "resizer"},
			{},
		]
		
	});
	var views = main_grid.getChildViews();
	var location = {
		master: $(views[0].$view),
		detail: $(views[2].$view).empty()
	}
	
	
	var list_view = new CoinsList({el:location.master[0], collection: coins});
	
	
	
	
});