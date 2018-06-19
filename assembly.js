;(function () {
    var Assembly = function(routerConfig) {
        var _vm;

        var _routers = [];

        var _config = {};

        var _init = function(){
            _initRouter();
            _initVue();
            _loadData('/');
            _bindRouter();
            _hashChangeEvent();
        };

        var _initVue = function(){
            _vm = new Vue({
                el: '#app',
                data: function() {
                    return {
                        loading: true,
                        pageData: {
                            search: {},
                            insert: {},
                            result: {}
                        },
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

        var _initTemplate = function(){
            var template = `<el-container class="fullHeight">
            <el-header>Header</el-header>
            <el-container>
                <el-aside width="200px">
                    <div class="">
                        <div data-link="a">aaaaaa</div>
                        <div data-link="b">bbbbbbbbbbbb</div>
                        <div data-link="c">cccccccccc</div>
                    </div>
                </el-aside>
                <el-main v-loading="loading">
                    <div class="result" v-if="!loading">
                        <div class="searchField">
                            <div v-for="item in pageData.search.field">
                                <component v-if="item.model == undefined || item.model"
                                           :is="item.component" v-model="item.showValue"
                                           :placeholder="item.props.placeholder"
                                           :type="item.props.type"
                                           :maxlength="item.props.maxlength || 9999"
                                           :minlength="item.props.minlength || 0"
                                           :clearable="item.props.clearable || false"
                                           :disabled="item.props.disabled"
                                           :size="item.props.size"
                                           :rows="item.props.rows || 2"
                                           :autosize="item.props.autosize || false"
                                           :name="item.props.name"
                                           :readonly="item.props.readonly"
                                           :max="item.props.max"
                                           :min="item.props.min"
                                           :step="item.props.step"
                                           :resize="item.props.resize"
                                           :autofocus="item.props.autofocus"
                                           :form="item.props.form"
                                           :label="item.props.label"
                                           :tabindex="item.props.tabindex"
                                           :text-color="item.props.textColor || '#ffffff'"
                                           :fill="item.props.fill || '#409EFF'"
                                           :prefix-icon="item.props.prefixIcon"
                                           :suffix-icon="item.props.suffixIcon"
                                           :auto-complete="item.props.autoComplete || 'off'"
                                           :true-label="item.props.trueLabel"
                                           :false-label="item.props.falseLabel"
                                           :border="item.props.border"
                                           :checked="item.props.checked"
                                           :indeterminate="item.props.indeterminate"
                                >
                                    <template v-if="item.children && item.children.length">
                                        <component v-for="childItem in item.children" :is="childItem.component"
                                                   :label="childItem.props.label"
                                                   :key="childItem.props.label || childItem.props.text"
                                                   :disabled="childItem.props.disabled"
                                                   :name="childItem.props.name"
                                                   :border="childItem.props.border"
                                                   :size="childItem.props.size"
                                                   :true-label="childItem.props.trueLabel"
                                                   :false-label="childItem.props.falseLabel"
                                                   :checked="childItem.props.checked"
                                        >
                                            {{childItem.props.label}}
                                            {{childItem.props.text}}
                                        </component>
                                    </template>
                                </component>
                                <component v-else :is="item.component"></component>
                            </div>
                        </div>
                    </div>
                </el-main>
            </el-container>
        </el-container>`;
            return template;
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
            _vm.loading = true;
            var router = _getRouterByPath(path);
            if(router.dataUrl){
                axios({
                    method: router.method || 'get',
                    url: router.dataUrl
                }).then(function(response) {
                    _vm.loading = false;
                    _vm.pageData = response.data;
                });
            }else if(router.data){
                _vm.loading = false;
                _vm.pageData = router.data;
            }else{
                throw 'router配置错误';
            }
        };

        var _getRouterByPath = function(path){
            for(var a in _routers){
                console.log(_routers[a].path,path);
                if(_routers[a].path == path){
                    return _routers[a];
                }
            }
        };

        var _hashChangeEvent = function(){
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