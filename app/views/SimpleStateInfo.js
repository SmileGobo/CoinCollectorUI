define(['view/SimpleFormInfo'], function(SimpleFormInfo){
	var form = [
		{view: 'text', name: 'country', label: 'страна'},
		{view: 'text', name: 'state', label: 'Государство'},
		{
			view: 'layout', 
			cols:[
				{view: 'text', name: 'yearStart', label: 'Начало'},
				{view: 'text', name: 'yearEnd', label: 'Конец'},
			]
		}
	];
	return SimpleFormInfo(form, 'Страна&Государство');
});