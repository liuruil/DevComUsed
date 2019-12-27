#### promise

```js
promise出现的原因:
***   提供了异步操作的规范 
***   解决了回调地狱

        两种阶段    三种状态
     (未决)                                                     (已决)
   unsettled                                                  settled

     挂起                                             完成                失败 
  (pending)                                        (resolve)            (reject)  


异步执行的全过程                               拿到结果，无论结果如何    其他的外界因素
```




> 1:promise基本用法
> 成功是调用.then  失败时调用.catch  不管失败或者成功最后都调用.finally
```js
var pi =  new Promise(function(resolve,reject){
    var flag = true
    if(flag){
        resolve('成功了')
    }else{
        reject('失败了')
    }
})
p1.then(val =>{
    console.log(val)
}).catch(err =>{
    console.log(err)
}).finally(()=>{
    console.log('完成了')
})
```

#### promise的其他方法
1: promise.all([p1,p2,p3]) 里面的参数是数组 数组中是promise对象 执行队列 
```js
当所有的子Promise完成并且全部都成功，该Promise成功，
处理并发使用场景  请求不同的地址 拿到全部的数据才能继续向下操作
```
  

2:promise.race([p1,p2])
```js
 promise.race([p1,p2]) 里面的参数是数组 数组中是promise对象 执行队列 
有一个子Promise完成，该Promise就完成
```

#### promise的注意点

1: 状态和阶段变化是不可逆的  一旦从未决推向已决  无法重新改变状态（所有企图改变代码的状态都将失效）
2:以下代码会让任务到达reject状态
{
    调用reject
    代码执行报错
    抛出错误
}
3:得到一个promise对象后  后续处理( .then() 和 .catch() 一定是异步函数,放在微队列中执行)
  promise对象本身是立即执行的  同步代码

