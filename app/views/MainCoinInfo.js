define(['text!template/MainInfo.html', 'backbone'], function(TEMPLATE) {
    return Backbone.View.extend({
        template: _.template(TEMPLATE),
        initialize: function(){
            this.render()
        },
        render: function(){
            this.$el.html(this.template())
        }
    });
    
    
    
    
    
    
});