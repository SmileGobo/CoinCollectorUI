define(['model/Coin','json!data/coins.json'], function(Coin, data){
    return Backbone.Collection.extend({
        model: Coin,
        initialize: function(){
            this.sync();
            this.SetSelected(0);
        },
        sync: function(){
            this.set(data);
        },
        SetSelected: function(index){
            if (index > this.length || index < 0){
                throw "collection.Coins.SetSelected(): bad index";
            }
            this._cur = index;
            this.trigger('CurrentChange', this.GetCurrent());
        },
        GetCurrentIndex: function(){
            return this._cur;
        },
        GetCurrent: function(){
            return this.at(this.GetCurrentIndex());
        },
        GetCurrentId: function(){
            var item = this.GetCurrent();
            return item.get('id');
        },
        SwitchToNext: function(up){
            var index = this.GetCurrentIndex();
            if (up){
                if (index == this.collection.length - 1) return;
                index++;
            }
            else{
                if (index == 0) return;
                index--;

            }
            SetSelected(index);
        }
        
    });
});