define([], function(){
    
    var img_path = window.location.href + 'app/img/coins';
    var cap_img =  window.location.href + 'app/img/cap.png';
    return Backbone.Model.extend({
        defaults:{
		    country:"",
		    state:"",
		    flag:null,
            emblem:null,
            yearStart: 0,
            yearEnd: null

        },
        GetAttrs:function (){
            var rslt = _.clone(this.attributes);
            rslt.flag = this._CreateImg('flag');
            rslt.emblem = this._CreateImg('emblem');
            return rslt;
        },
        _CreateImg: function(name){
            var rslt = this.get(name);
            if (rslt === null){
                rslt = cap_img;
            }
           // console.log(rslt);
            return img_path + rslt;  
        }
        
        
		
    });
});