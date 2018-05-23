;(function () {
    var Assembly = function(routerConfig) {
        var _data = {
            search: {},
            result: {},
            insert: {},
        };

        var _vm;

        var _routers = [];

        var _config = {};

        var _init = function(){
            _initVue();
            //_initRouter();
            _bindRouter();
            _hashChangeEvent();
        };

        var _initVue = function(){
            _vm = new Vue({
                el: '#app',
                data: function() {
                    return {
                        test: true,
                        tableData3: [
                            {
                                date: '2016-05-03',
                                name: '王小虎',
                                province: '上海',
                                city: '普陀区',
                                address: '上海市普陀区金沙江路 1518 弄',
                                zip: 200333
                            },
                            {
                                date: '2016-05-02',
                                name: '王小虎',
                                province: '上海',
                                city: '普陀区',
                                address: '上海市普陀区金沙江路 1518 弄',
                                zip: 200333
                            },
                            {
                                date: '2016-05-04',
                                name: '王小虎',
                                province: '上海',
                                city: '普陀区',
                                address: '上海市普陀区金沙江路 1518 弄',
                                zip: 200333
                            },
                            {
                                date: '2016-05-01',
                                name: '王小虎',
                                province: '上海',
                                city: '普陀区',
                                address: '上海市普陀区金沙江路 1518 弄',
                                zip: 200333
                            },
                            {
                                date: '2016-05-08',
                                name: '王小虎',
                                province: '上海',
                                city: '普陀区',
                                address: '上海市普陀区金沙江路 1518 弄',
                                zip: 200333
                            },
                            {
                                date: '2016-05-06',
                                name: '王小虎',
                                province: '上海',
                                city: '普陀区',
                                address: '上海市普陀区金沙江路 1518 弄',
                                zip: 200333
                            },
                            {
                                date: '2016-05-07',
                                name: '王小虎',
                                province: '上海',
                                city: '普陀区',
                                address: '上海市普陀区金沙江路 1518 弄',
                                zip: 200333
                            }
                        ]
                    }
                },
                mounted: function () {
                    console.log('mounted');
                }
            });
        };

        var _bindRouter = function(){
            var _domLinks = document.querySelectorAll('[data-link]');
            for(var i =0,len = _domLinks.length;i<len;i++){
                _domLinks[i].onclick = function(){
                    location.hash = this.getAttribute('data-link');
                }
            }
        };

        var _loadData = function(path){
            var router = _getRouterByPath(path);
            if(router.dataUrl){
                axios({
                    method: router.method || 'get',
                    url: router.dataUrl
                }).then(function(response) {
                    _data = response.data;
                });
            }else if(router.data){
                _data = router.data;
            }else{
                throw 'router配置错误';
            }
        };

        var _getRouterByPath = function(path){
            for(var a in _routers){
                if(_routers[a].path === path){
                    return _routers[a];
                }
            }
        };

        var _hashChangeEvent = function(){
            // todo
            var windowHash = window.location.hash.replace('#','');
            // _loadData(windowHash);
            console.log('windowHash',windowHash);
        };

        var _initRouter = function(){
            _routers = arguments[0] || routerConfig;
        };

        var _isObject = function(obj){
            return Object.prototype.toString.call(obj) === '[object Object]';
        };

        var _extend = function(destination,source){
            var obj,copy;
            for(var a in source) {
                obj = source[a];
                if(_isObject(obj)){
                    copy = {};
                    destination[a] = _extend(copy,obj);
                } else {
                    destination[a] = obj;
                }
            }
            return destination;
        };

        window.onhashchange = _hashChangeEvent;


        _init();

        Assembly.prototype.vm = _vm;
        Assembly.prototype.updateRouter = function(routerConfig){
            if(_isObject(routerConfig)){
                _initRouter(routerConfig);
            }else{
                throw 'updateRouter参数错误';
            }
        };

        return this;
    };

    if (typeof module !== 'undefined' && typeof exports === 'object') {
        module.exports = Assembly;
    } else if (typeof define === 'function' && (define.amd || define.cmd)) {
        define(function () {
            return Assembly;
        });
    } else {
        this.Assembly = Assembly;
    }
}).call(function () {
    return this || (typeof window !== 'undefined' ? window : global);
}());