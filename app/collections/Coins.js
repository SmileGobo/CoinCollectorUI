define(['model/Coin','json!data/coins.json', 'backbone'], function(Coin, data){
    return Backbone.Collection.extend({
        model: Coin,
        initialize: function(){
            /*var models = data.map(function(item){
                return new Coin
            });*/
            this.set(data);
            this.SetSelected(0);
           // console.log('coins collection create:', this.at(0));
        },
        SetSelected: function(index){
            if (index > this.length || index < 0){
                throw "collection.Coins.SetSelected(): bad index";
            }
            this._cur = index;
            this.trigger('CurrentChange', this);
        },
        GetCurrentIndex: function(){
            return this._cur;
        },
        GetCurrent: function(){
            return this.at(this.GetCurrentIndex());
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