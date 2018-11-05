/**
 * Created by Administrator on 2018/11/5.
 */
define(["avalon"], function (avalon) {
    avalon.ui["testui"] = function (element, data, vmodels) {
        var innerHTML = element.innerHTML
        avalon.clearHTML(element)
        var model = avalon.define(data.testuiId, function (vm) {
            avalon.mix(vm, data.testuiOptions)

            vm.value = 0;
            vm.plus = function (e) {
                model.value++;
            }
        })
        avalon.nextTick(function () {
            element.innerHTML = innerHTML
            avalon.scan(element, [model].concat(vmodels))
        })
        return model
    }
    avalon.ui["testui"].defaults = {
        aaa:"aaa",
        bbb:"bbb",
        ccc:"ccc"
    }
    return avalon
})