/**
 * Created by Asa on 2018/11/1.
 */
define(["avalon", "text!./test.html"], function (avalon, test) {
    avalon.templateCache.test = test
    avalon.define({
        $id:"test",
        firstName:"Asa",
        lastName:"Guo"
    })
    avalon.vmodels.root.page = "test"
})