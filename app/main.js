requirejs([
  //view
 	'view/CoinsImage',
  'view/CoinsList',
 'view/SimpleCoinsInfo',
 'view/CountryImage',
  //stores
  'collection/Coins'

], function(CoinsImage, CoinsList, SimpleCoinsInfo, CountryImage, CoinsCollection) {
	var coins = new CoinsCollection();
	webix.ui.fullScreen();
	//var CoinsList = 
	
	//
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

	var detail_image = new CoinsImage({
		el:main_grid.getChild('img_view'),
		collection: coins
	});

	var main_info = new SimpleCoinsInfo({
		el:main_grid.getChild('detail'),
		collection:coins
	});
	var country_img = new CountryImage({
		el:main_grid.getChild('country_img'),
		collection: null //countries
	});

/*
	var list_view2 = new CoinsList({
		el:main_grid.getChild('detail'),
		collection: coins
	});
	*/
	/*
	var ui_config ={
                    type:"wide", rows:[
                        { template:"top", height:35 },
                        { type:"wide", cols:[
                            { template:"left" },
                            { template:"center" },
                            { template:"right" }
                        ]},
                        { template:"bottom", height:35 }
                    ]
                };

                var view = new WebixView({
                    config: ui_config,
                    el: "body"
                });
                console.log(view);
                view.render();
	*/
});