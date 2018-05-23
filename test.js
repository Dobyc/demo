var data = {
    search: {
        field: [
            {
                name: '',
                component: '',
                ajax: {
                    url: '',
                    method: '',
                    postData: {}
                },
                data: [],
                value: '',
                showValue: '',
                visible: true,
                beforeCreate: function () {},
                beforeSubmit: function () {},
                change: function () {}
            }
        ]
    },
    result: {
        field: [
            {
                width: 55,
                fixed: true,
                type: 'selection'   //selection,cell,btn
            },
            {
                name: 'date',
                label: '日期',
                width: 150,
                fixed: false,
                type: 'cell',
                render: function(data){}
            },
            {
                name: '',
                label: '',
                width: 1,
                fixed: false,
                type: 'cell',
                render: function(data){}
            },
            {
                name: '',
                label: '',
                width: 1,
                fixed: false,
                type: 'cell',
                render: function(data){}
            },
            {
                name: '',
                label: '',
                width: 1,
                fixed: false,
                type: 'cell',
                render: function(data){}
            },
            {
                name: '',
                label: '',
                width: 1,
                fixed: false,
                type: 'cell',
                render: function(data){}
            },
            {
                name: '',
                label: '',
                width: 1,
                fixed: false,
                type: 'cell',
                render: function(data){}
            },
            {
                name: '',
                label: '',
                width: 1,
                fixed: false,
                type: 'cell',
                render: function(data){}
            }
        ]
    }
};
// <!--<el-table :data="tableData3" style="width: 100%" height="250">-->
// <!--<el-table-column fixed type="selection" width="55"></el-table-column>-->
//     <!--<el-table-column prop="date" label="日期" width="150"></el-table-column>-->
//     <!--<el-table-column prop="name" label="姓名" width="120"></el-table-column>-->
//     <!--<el-table-column prop="province" label="省份" width="120"></el-table-column>-->
//     <!--<el-table-column prop="city" label="市区" width="120"></el-table-column>-->
//     <!--<el-table-column prop="address" label="地址" width="300"></el-table-column>-->
//     <!--<el-table-column prop="zip" label="邮编" width="120"></el-table-column>-->
//     <!--<el-table-column fixed="right" label="操作" width="100">-->
//     <!--<template slot-scope="scope">-->
//     <!--<el-button type="text" size="small">查看</el-button>-->
//     <!--<el-button type="text" size="small">编辑</el-button>-->
//     <!--</template>-->
//     <!--</el-table-column>-->
//     <!--</el-table>-->

var router = [{
    path: '/',
    //dataUrl: '',
    data: {},
    mixin: {}
},{
    path: 'a',
    //dataUrl: '',
    data: {},
    mixin: {}
}];

var vm = new Vue({
    el: '#app2',
    data: function () {
        return {
            a: 2123124
        }
    }
});

// window.onload = function(){
    var assembly = new Assembly(router);
    console.log(assembly,assembly.vm);
// };

