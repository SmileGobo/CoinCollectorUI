define(['view/TabView'], function(TabView){
	var MyTabView = TabView.extend({
		beforeRender: function(){
			this.AddTab({
				header: 'A',
				body:{ 
					id: 'test1',
					view: 'template',
					template: 'AAAAAA'
				}
			});
			this.AddTab({ 
				header: 'B',
				body: {
					id: '2',
					view: 'template',
					template: 'bbbb'
				}
			});
		},
		Init: function(){
			console.log('after');
		}

	});

	return MyTabView;
});