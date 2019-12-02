
var array = [1, 2, 4, 5, 6, 3, 8]

//1:pop 删除数组的最后一个元素  返回值是该删除的元素
//会改变原数组
console.log(array.pop())
console.log(array)

// 2:push 数组最后添加元素  返回值数组的长度 
//改变原数组
console.log(array.push(3))

//3:shift  返会值是删除的第一个元素  删除数组第一个元素
//改变原数组
console.log(array.shift())
console.log(array)

console.log('----------------------')

//4:unshift  
//改变原数组  在数组最前边添加元素  返回值数组的长度
console.log(array.unshift(18))
console.log(array)

// 5：sort 数组排序  回调函数可以控制如何排序
//改变原数组  返回值为该数组
var array = [5, 6, 4, 3, 2]
var result = array.sort((a, b) => {
    return b - a; //倒序
})
console.log(array)
console.log(result)
console.log('------------------')

//6:reverse
//倒序 返回值为该数组 改变原数组
var result = array.reverse()
console.log(result)
console.log(array)
console.log('------------------')


// 7:splice
// 三个参数  删除的索引 ，删除几位 ，添加的元素
var result = array.splice(0)
console.log(result) //返回值为删除的元素
console.log(array)  //改变原数组

//8:连接数组  不改变原数组
const arr1 = [1, 2, 3]
const arr2 = [3, 2, 1]
const arr3 = [3, 2, 1, 8]
var result = arr1.concat(arr2, arr3)
console.log(result)
console.log(arr1)
console.log(arr2)

//9: copyWithin 改变原数组 返回结果 改变后的数组 
const array1 = ['a', 'b', 'c', 'd', 'e'];
// 第一个参数表示复制到的开始索引
//第二个参数表示开始复制的索引
//第三个表示结束的索引  
console.log(array1.copyWithin(0, 3, 4));
console.log(array1)

//10: fill
var arr4 = [0, 1, 2, 3, 4, 5]
// 只有一个参数表示全部换成 此值
console.log(arr4.fill(1))
// 第二个参数表示从那个索引开始替换
console.log(arr4.fill(5, 3))
// 第三个参数表示到那结束
console.log(arr4.fill(8, 4, 5))

// 11:flat  可以降维 
var array = [1, 2, [8, 2, [9, 5]]]
console.log(array.flat(Infinity)) //多少都降维1维
console.log(array)

//12: includes方法 返回boolean值 
//第二个值是从那个索引开始 如果索引为负数  则加上数组的长度
var arr8 = [1, 8, 5, 6, 3, 3]
console.log(arr8.includes(2))
console.log(arr8.includes(1, 1))

//13: indexOf 返回所找值的第一个索引 没有则为-1 
console.log(arr8.indexOf(3))

//14:join 连接数组的每一项
//默认是以',' 连接
console.log(arr8.join('+'))

//15: keys() 迭代器的索引  values() 迭代器的值
//方法返回一个新Array Iterator对象，该对象包含数组中每个索引的键。

//16: lastIndexOf  数组中值最后的索引  不存在返回 -1
console.log(arr8.lastIndexOf(3))
console.log('-------------------------')

//17: reduce 不会改变原数组 从左往右 累加器 参数(callback(){},initnim=>默认为零)
var arr9 = [1, 5, 9, 7, 5, 3]
console.log(arr9.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue
}, 20))
console.log(arr9)

// 18: reduceRight   从右向左
arr9 = [[1, 2], [3, 4], [5, 6]]
console.log(arr9.reduceRight(function (accumulator, currentValue) {
    return accumulator.concat(currentValue)
}))    // [5,6,3,4,1,2]

//19:slice  截取数组 不改变原数组  (开始索引,结束索引)
var arr10 = [1, 2, 3, 4, 5, 6]
console.log(arr10.slice(2, 3))

//20: toSting 将数组转化为字符串
var arr11 = [1,2,3]
console.log(arr11.toString())
console.log(arr11)


