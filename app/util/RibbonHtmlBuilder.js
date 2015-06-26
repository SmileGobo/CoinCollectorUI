define(['jquery'], function(){
    var _panels = null;
        var _dom = {
            header: $('<ul>'),
            panel: $('<div>')
        }
        //var _container =$('<div>');
    var RibbonHtmlBuilder = function(panels){
        _panels = panels
        _panels.forEach(function(panel){
            var item = {
                header: $('<li>').html(panel.caption),
                panel:  $('<div>').html(panel.caption).attr('id', panel.name)
            }
            _dom.header.append(item.header);
            _dom.panel.append(item.panel);
        });
        
    }
    
    RibbonHtmlBuilder.prototype.AddPanel = function(panel){
        _panels[panel.name] = panel.caption;    
    }
    
    RibbonHtmlBuilder.prototype.GetPanelDom = function(name){
        return _dom.panel.find('#' + name)[0];
    }
    
    RibbonHtmlBuilder.prototype.RenderTo = function(dom){
        dom.append(_dom.header).append(_dom.panel);
    }
    return RibbonHtmlBuilder;
});