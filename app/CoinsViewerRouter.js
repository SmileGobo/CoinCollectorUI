define([
 //view
 'view/CoinsImage',
 'view/CoinsList',
 'view/SimpleCoinsInfo',
 'view/StateImage',
  //stores
 'collection/Coins'
], 
function(CoinsImage, CoinsList, SimpleCoinsInfo, StateImage, CoinsStore ){
    console.log("router loaded!");
    var CoinsViewerRouter = Backbone.Router.extend({
        routes: {
            "": "Init"
        },
        constructor: function(opt){
            console.log(opt.view);
            this.store = new CoinsStore();
            this._views = {
                list : new CoinsList({
		            el: opt.view.getChild('master_list'),
		            collection: this.store,
            		config:{
            			minWidth:230, 
            			width: 230
            		}
	            }),
	            image: new CoinsImage({
            		el: opt.view.getChild('img_view'),
            		collection: this.store
            	}),
            	info: new SimpleCoinsInfo({
		            el: opt.view.getChild('detail'),
		            collection: this.store
	            })
            };
        },
        Init: function(){
            console.log("create");
        }
    });
    return CoinsViewerRouter;
});

/*
	var coins_image = ;

	var main_info = );*/