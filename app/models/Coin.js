define(['backbone'], function(){
    var img_path = '/app/coinsimg/';
    return Backbone.Model.extend({
        defaults:{
            id:1,
		    countryName:"",
		    denomination:"",
		    year:0,
		    avers:"",
		    revers:""    
        },
        GetAttrs:function (){
            var rslt = _.clone(this.attributes);
            rslt.avers = this._CreateImg('avers');
            rslt.revers = this._CreateImg('revers');
            return rslt;
        },
        _CreateImg: function(name){
            var rslt = this.get(name);
           // console.log(rslt);
            return img_path + rslt;  
        },
        GetAversImg: function(){
            return this._CreateImg('avers');
        },
        
        GetReversImg: function(){
            this._CreateImg('revers');
        }
        
        
		
    });
});