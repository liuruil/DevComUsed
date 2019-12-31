// 点击动画
new Promise((resolve, reject) => {
    var div = document.querySelector('.div')
    var time = null
    function animation() {
        new Promise((resolve, reject) => {
            function move(target) {
                clearInterval(time)
                if (target.offsetLeft !== 500) {
                    time = setInterval(() => {
                        target.style.left = target.offsetLeft + 10 + 'px'
                        move(target)
                    }, 10);
                }
                else {
                    resolve('右移完成')
                }
            }
            move(div)
        }).then((res) => {
            return new Promise((resolve, reject) => {
                function move(target) {
                    clearInterval(time)
                    if (target.offsetTop !== 500) {
                        time = setInterval(() => {
                            target.style.top = target.offsetTop + 10 + 'px'
                            move(target)
                        }, 10);
                    }
                    else {
                        resolve('下移完成')
                    }
                }
                move(div)
            })
        }).then((res) => {
            return new Promise((resolve, reject) => {
                function move(target) {
                    clearInterval(time)
                    if (target.offsetLeft !== 0) {
                        time = setInterval(() => {
                            target.style.left = target.offsetLeft - 10 + 'px'
                            move(target)
                        }, 10);
                    }
                    else {
                        resolve('左移完成')
                    }

                }
                move(div)
            })
        }).then((res) => {
            return new Promise((resolve, reject) => {
                function move(target) {
                    clearInterval(time)
                    if (target.offsetTop !== 0) {
                        time = setInterval(() => {
                            target.style.top = target.offsetTop - 10 + 'px'
                            move(target)
                        }, 10);
                    }
                    else {
                        resolve('全部完成')
                    }

                }
                move(div)


            })
        }).then((res) => {
            resolve('完成')
        })
    }
    div.onclick = animation
}).then((res) => {
    console.log(res + '点击事件')
})



//   监听事件  借助css属性
var div = document.querySelector('div')
var bottom = document.querySelector('button')

bottom.onclick = function () {
    // div执行动画队列
    move(div, '右', 500, 2, () => {
        move(div, '下', 500, 2, () => {
            move(div, '左', 0, 2, () => {
                move(div, '上', 0, 2, () => {
                    console.log('动画完成')
                })
            })
        })
    })


}

function move(target, direction, juli, time, callback) {
    if (direction === '上' || direction === '下') {
        target.style.top = juli + 'px';
    }
    if (direction === '左' || direction === '右') {
        target.style.left = juli + 'px';
    }
    target.style.transition = time + 's'
    callback && target.addEventListener('transitionend', callback, false)

}






