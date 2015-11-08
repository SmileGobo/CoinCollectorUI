define([
 //view
 'view/MainView',
 'controller/Coins'
], function(MainView, CoinsController){
    console.log("router loaded!");
    var CoinsViewerRouter = Backbone.Router.extend({
        routes: {
            "": "Init"
        },
        constructor: function(){
            var layout = new MainView();
            layout.render();

            var controller = {
                coins: new CoinsController(layout)
            }
        },
        Init: function(){
            console.log("router INIT");
        }
    });
    return CoinsViewerRouter;
});

/*
	var coins_image = ;

	var main_info = );*/