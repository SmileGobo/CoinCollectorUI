define([
 //view
 'view/MainView',
 'controller/Coins',
 'controller/State'
], function(MainView, CoinsController, StateController){
    //console.log("router loaded!");
    var CoinsViewerRouter = Backbone.Router.extend({
        routes: {
            "": "init",
            "test": "test"
        },
        constructor: function(){
            var layout = new MainView({id: 'main_view'});
            layout.render();

            //var controller = {
            var coins = new CoinsController(layout);
            var state = new StateController(layout);

            //};

            coins.store.on('CurrentChange', state.OnCoinsChange, state);
            //this.test();
        },
        init: function(){
            console.log("router INIT");
        },
        test: function(){
            var main_config = {
                el: $('body'),
                isolate: true,
                cols: [
                    {id: 'left', view: 'template', template: 'left'},
                    {id: 'center', view: 'template', template: 'Center'},
                    {id: 'right', view: 'template', template: 'right'},
                ]
            };

            var layout = webix.ui(main_config);
            

            this.testController = new TestController(layout);
        }
    });
    return CoinsViewerRouter;
});

/*
	var coins_image = ;

	var main_info = );*/