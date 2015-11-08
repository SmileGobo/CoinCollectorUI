/*конифг приложения*/
'use strict';
requirejs.config({

	/*точка входа main.js*/
	deps:['main'],
	/*debug чтоб не кешировал*/
	//urlArgs: "bust=" + (new Date()).getTime(),
	
	paths: {
		/*Пути к библиотекам*/
	    // 'jquery': 		'/lib/js/jquery-1.11.3.min',
	    // 'underscore': 	'/lib/js/underscore',
	    // 'backbone': 	'/lib/js/backbone',
	    // /*requirejs плагины*/
	    'text': 		'/lib/js/text',
	    'json': 		'/lib/js/json',

	    'view': 		'views',
	    'template':		'templates',
	    'collection':   'collections',
	    'model':		'models',
	    /*jqWidgets*/

  	},

  	/*Экспорт библиотек глобальной области видимости*/
/*  	shim: {
  		jquery: {
            exports: '$'
        },
        underscore: {
            exports: '_',
        },
	    backbone: {
		    deps: ['jquery', 'underscore'],
		    exports: 'Backbone'
	    },

  	}
*/
});
