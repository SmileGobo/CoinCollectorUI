define(['view/TabView'],
function(TabView){
	/*var coins_tab = {
		view: 'multiview',
		rows: [
			{id:'detail', template: 'bbbbb'},
			{id:'state', template: 'aaaaa'}
		]
	};

	var  Tab = TabView.extend({
        beforeRender: function(){
            this.AddTab({
                header: 'Основное',
                body:{ rows: [{id: 'coins', view: 'template', template: '1'}]}
            });

            this.AddTab({
                header: 'Страна',
                body:{ rows: [{id: 'state', view: 'template', template: '2'}]}
            });
        },
        Init: function(){ }
   	});*/

    var MakeTab = function(header, id){
    	return {
            header: header,
            body:{ rows: [{id: id, view: 'template', template: '1'}]}
        };
    }
    var tab_view = {
    	view: 'tabview',
    	cells:[
    		MakeTab('Основное', 'coins'),
    		MakeTab('Страна', 'state')
    	]
    }
	var MainView = WebixView.extend({
		el: 'body',			
		config:{
			//type: 'space',
			isolate:true,
			cols:[
				{id:'master_list'},
				//{view: 'resizer'},
				{
					rows:[
						{id:'img_view'},
						//{id: 'tab'},
						tab_view,
						{}
					]
				}
			], 
			autoHeight: true
		},
		initialize: function(){
			this.render();
			//console.log(this.getChild('tab'));
			//var tabview = new Tab({el: this.getChild('tab')});

		}
	});

	return MainView;
});