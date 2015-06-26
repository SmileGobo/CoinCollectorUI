define(['backbone'], function(){
   return Backbone.View.extend({
       template: _.template('<input type="button" value="Toggled On" style="margin: 5px;"/>'),
       initialize: function(){
           this.render();
           this._btn = this.$el.find('input');
       },
       render: function () {
           this.$el.html(this.template());
           this.$el.find('input').jqxToggleButton({ width: '200', toggled: true});
       },
       collection: null,
       model: null
   });
});