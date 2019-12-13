// 1: 浅复制 (合并对象)  可以用 assign 实现
Object.assign(target, origin)

//深度复制
function deepclon(origin, target = {}) {
    Object.assign(target, origin) //浅复制
    for (const key in target) {
        if (typeof target[key] === 'object' && target[key] !== null) {
            if (target[key] instanceof Array) {
                deepclonarray(target[key])
            } else {
                target[key] = deepclon(target[key])
            }
        }
    }
    function deepclonarray(array) {
        var content = []
        array.forEach((element, index) => {
            if (element === undefined || typeof element === 'function') {
                content.push({
                    index,
                    element
                })
            } else if (element instanceof Array) {
                clonarray(element)
            }
        });
        array = JSON.parse(JSON.stringify(array))
        content.forEach((element) => {
            array[element.index] = element.element
        })
    }
    return target
}