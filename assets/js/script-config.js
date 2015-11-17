(function(){
    var dir = location.href.indexOf('debug=true') > 0 ? 'js' : 'js'; //{{settings.JSMIN}} 线上 src
    seajs.config({
        base:'../assets/'+dir,
        alias:{
            'jquery':'vendors/jQuery.1.11.3.min',
            'bootstrap':'vendors/bootstrap.3.3.5',
            'dialog':'vendors/dialog/dialog-plus',
            'echarts': 'vendors/echarts/echarts-all',
            'json2':'vendors/json2'
        },
        preload: [
            window.$ || window.jQuery ? '' :'jquery',
            window.dialog ? '' : 'dialog',
            window.bootstrap ? '' : 'bootstrap',
            this.JSON ? '' : 'json2'
        ],
        map:[
            ['.css', '.css?v=' + BM_CONFIG.version],
            ['.js', '.js?v=' + BM_CONFIG.version]
        ],
        charset:'utf-8'
    });
    seajs.on('exec', function(module) {
        if (module.uri === seajs.resolve('jquery')) {
            window.$ = window.jQuery = module.exports
        }
        if (module.uri === seajs.resolve('dialog')) {
            window.dialog = module.exports
        }
        if (module.uri === seajs.resolve('bootstrap')) {
            window.bootstrap = module.exports
        }
        if(module.uri === seajs.resolve('json2')){
            window.JSON = module.exports;
        }
    });

})(seajs);