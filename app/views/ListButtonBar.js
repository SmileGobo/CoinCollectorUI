define(['text!template/ListButtonBar.html'], function(template){
   return Backbone.View.extend({
       template: _.template(template),
       initialize: function(){
           this.render();
           this._btns = {
            remove: $(this.$el.find('#rem')),
            add: $(this.$el.find('#add'))
           };
           _.each(this._btns, function(btn){
            btn.jqxButton();
           });
       },
       render: function () {
           this.$el.html(this.template());
           this.$el.find('input').jqxToggleButton({ width: '200', toggled: true});
       },
       collection: null,
       model: null
   });
});