require.config({//第一块，配置
    baseUrl:'',
    paths:{
        jquery:'vendor/jquery/jquery-2.1.1',
        avalon:'vendor/avalon/avalon',
        text:'vendor/require/domReady',
        css:'vendor/require/css.js'
    },
    priority:['text', 'css'],
    shim:{
        jquery:{
            exports:'jQuery'
        },
        avalon:{
            exports:'avalon'
        }
    }
});

require(['avalon','domReady!'],function () { // 第二块，添加根vm（处理共用部分

})