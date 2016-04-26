define([
 //view
 'view/CoinsImage',
 'view/CoinsList',
 'view/SimpleCoinsInfo',
  //stores
 'collection/Coins'
], 
function(CoinsImage, CoinsList, SimpleCoinsInfo, CoinsStore ){
	var CoinsController = function(layout){
		this.store = new CoinsStore();

        this._views = {
            list : new CoinsList({
		        el: layout.getChild('master_list'),
		        collection: this.store,
        		config:{
        			minWidth:230, 
        			width: 230
        		}
	        }),
	        image: new CoinsImage({
        		el: layout.getChild('img_view'),
        		collection: this.store
        	}),
            coins: new SimpleCoinsInfo({
		        el: layout.getChild('coins'),
		        collection: this.store
	        }),
            /*state: new SimpleStateInfo({
                el: layout.getChild('state')
            })*/

        };
        console.log(layout.getChild('coins'));
        this.store.SetSelected(0);
	};

	return CoinsController;
})