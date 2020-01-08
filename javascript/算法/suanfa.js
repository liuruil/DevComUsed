// 二分查找 适用情况 ****有序*****  
// desc true 表示倒序  false 表示正序   默认是正序数组
function midFind(link, value, desc = false) {
    var low = 0,
        high = link.length - 1
    // 一直循环查找  不断改变low和high 一半一半查找
    while (low <= high) {
        var mid = Math.floor((low + high) / 2);
        if (link[mid] === value) return mid;
        if (link[mid] > value) !desc ? high = mid - 1 : low = mid + 1
        if (link[mid] < value) !desc ? low = mid + 1 : high = mid - 1
    }
    //当 low > high 时候 还没找到 就说明没有这个值 返回-1
    return -1;
}
