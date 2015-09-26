define([
 'view/MainView',
 //Роутер
 'CoinsViewerRouter'

], function(MainView, CoinsViewerRouter) {
	//
/*	webix.ui.fullScreen();
	var router = new CoinsViewerRouter();
   	console.log("AAAA");*/
/*
	var coins = new CoinsCollection();
	var main_grid = new WebixView({
		el: 'body',
		config:{
			isolate:true,
			id: 'main_view',
			cols:[
				{id:'master_list'},
				{view: "resizer"},
				{
					rows:[
						{id:'img_view'},
						{view: 'layout', cols:[{id:'detail'}, {id: 'country'}]},
						{}
					]
				}
			], 
			autoHeight: true
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

	var country_info = new SimpleStateInfo({
		el: main_grid.getChild('country'),
		collection: null
	});
	*/
	return {
		initialize: function(){
			
			var main_view = new MainView();
			main_view.render();
			var coins_router = new CoinsViewerRouter({view: main_view});
			
            Backbone.history.start({pushState: true});

		}
	}
});