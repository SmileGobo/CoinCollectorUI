define(['view/MyTabView'], function(MyTabView){
	
	var TestController = function(layout, config){
		this.view = new MyTabView({el: layout.$$('center')});
		
	}

	return TestController;
})