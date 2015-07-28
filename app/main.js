requirejs([
  //view
 	'view/CoinsImage',
  'view/CoinsList',
 'view/SimpleCoinsInfo',
 'view/StateImage',
  //stores
  'collection/Coins'

], function(CoinsImage, CoinsList, SimpleCoinsInfo, StateImage, CoinsCollection) {
	var coins = new CoinsCollection();
	webix.ui.fullScreen();

	var main_grid = new WebixView({
		el: 'body',
		config:{
			isolate:true,
			cols:[
				{id:'master_list'},
				{view: "resizer"},
				{
					rows:[
						{id:'img_view'},
						{id:'detail'},
						{id: 'country'}
					]
				}
			]	
		}
		
	});
	main_grid.render();
	
	
	var list_view = new CoinsList({
		el:main_grid.getChild('master_list'),
		collection: coins,
		config:{
			minWidth:230, 
			width: 230
		}
	});

	var coins_image = new CoinsImage({
		el:main_grid.getChild('img_view'),
		collection: coins
	});

	var main_info = new SimpleCoinsInfo({
		el:main_grid.getChild('detail'),
		collection:coins
	});
	var country_img = new StateImage({
		el:main_grid.getChild('country_img'),
		collection: null //countries
	});

});