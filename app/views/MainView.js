define([],
function(){
	var coins_tab = {
		view: 'tabview',
		cells: [
			{header: 'Основное', body: {id:'detail', template: 'bbbbb'}},
			{header: 'Дополнительно', body: {id:'more_detail', template: 'aaaaa'}}
		]
	};
	return WebixView.extend({
		el: 'body',			
		config:{
			//type: 'space',
			isolate:true,
			id: 'main_view',
			cols:[
				{id:'master_list'},
				//{view: 'resizer'},
				{
					rows:[
						{
							cols:[{id:'img_view'}, coins_tab]
						},
						{

						}
					]
				}
			], 
			autoHeight: true
		}
	});
});