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
	var main_grid = new WebixView({
		el: 'body',
		config:{
			isolate:true,
			cols:[
				{id:'master_list'},
				{view: "resizer"},
				{id:'detail'},
			]	
		}
		
	});
	main_grid.render();
	/*var views = main_grid.getChildViews();
	var location = {
		master: $(views[0].$view),
		detail: $(views[2].$view).empty()
	}*/
	
	
	var list_view = new CoinsList({
		el:main_grid.getChild('master_list'),
		collection: coins,
		config:{
			minWidth:230, 
			width: 230
		}
	});

	var list_view2 = new CoinsList({
		el:main_grid.getChild('detail'),
		collection: coins
	});
	
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