### 关于两栏布局

1: 定位
```shell
用定位的情况下  如果定位元素的高度高于 大于非定位的高度
不能保证 父级元素完全包裹里面的元素(因为块级元素看不到定位元素)
所以万不得已不要使用定位   
```

2:浮动
```shell
浮动还可以 兼容性好
在兼容多个浏览器的情况下可以使用 
```

3:inline-block 
```shell
这个可以借助 calc(100% - 300px) 完成
另外 还必须让包裹元素的font-size 为0 
因为inline-block 具有文字属性  
```

4:flex 
```shell

flex  特别完美的
给父级加display : flex;
.main {
    width : 300px
}
.right{
    flex : 1
}
推荐使用
```

5:grid布局
```shell 
    <style>
        section {
            display : grid;
            grid-template-columns: 200px 1fr;
            grid-template-areas: "a b";
        }
        .left {
            height: 600px;
            background-color: aqua;
            grid-area: a;
        }
        .main {
            height: 400px;
            background-color: blue;
            grid-area: b
        }
    </style>
 <section>
 <div class="left"><div>
 <div class="main"><div>
 </section>
```


