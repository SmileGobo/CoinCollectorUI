define([], function(){
    
    var img_path = window.location.href + 'app/img/coins/';
    var cap_img =  window.location.href + 'app/img/cap.png';
    return Backbone.Model.extend({
        defaults:{
            id:1,
            name:"",
            currency:"",
		    countryName:"", //удалить
		    denomination:"",
		    year:0,
		    avers:null,
		    revers:null,
            edge:null, 
            stateId: null
        },
        GetAttrs:function (){
            var rslt = _.clone(this.attributes);
            rslt.avers = this._CreateImg('avers');
            rslt.revers = this._CreateImg('revers');
            rslt.edge = this._CreateImg('edge');
            return rslt;
        },
        _CreateImg: function(name){
            var rslt = this.get(name);
            if (rslt === null){
                return cap_img;
            }
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