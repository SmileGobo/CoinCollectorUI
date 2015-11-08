define([],
function(){
	return WebixView.extend({
		el: 'body',			
		config:{
			//type: 'space',
			isolate:true,
			id: 'main_view',
			cols:[
				{id:'master_list'},
				{view: 'resizer'},
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
});