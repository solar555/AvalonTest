/**
 * Created by Administrator on 2018/11/5.
 */
var vmodel = avalon.define({
    $id:"test",
    aaa:111,
    bbb:222,
})
vmodel.$watch("$all", function () {
    avalon.log(avalon.slice(arguments))
})
setTimeout(function () {
    vmodel.aaa = 2
    vmodel.bbb = 3
}, 1000)