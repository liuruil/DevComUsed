// 1:遍历数组

//forEach
var array = [1, 2, 3, 4, 5, 6]
var result = array.forEach((value, index, array) => {
    array[index] = 'a'
})
console.log(result)
console.log(array)
//返回值是undefined  会改变原数组


// 2:map
var result = array.map((value, index) => {
    return value + 2
})
//返回一个新的数组 不会改变原数组
console.log(result)
console.log(array)

// 3:filter
var result = array.filter((value, index) => {
    return value == 2
})
console.log(result)
console.log(array)
//不会改变原数组  返回一个符合条件新的数组

var array = [1, 2, 3, 8, 5, 4, 6]
// 4: some  不改变原数组
var result = array.some((value) => {
    return value > 2
})
console.log(result)
// 返回值 true 或flase 
// 只要有一个值满足条件就返回true

// 5 :every 不改变原数组
var result = array.every((value) => {
    return value > 10
})
console.log(result)
console.log(array)
// 返回值true 后者false
// 必须全部满足条件才返回true

// 6 :find  返回值  如果找不到 undefind  如果找到了就返回这个值 有多个就返回索引的第一个
var arr5 = [1, 8, 6, 5, 4]
console.log(arr5.find(function (element, index) {
    return index > 8
}))

//7: findIndex  返回值是 第一个符合条件的索引  没有就是 -1
console.log(arr5.findIndex(function (element) {
    return element > 8
}))






