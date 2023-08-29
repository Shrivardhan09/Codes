Array.prototype.myMap = function (callBack) {
    let arr = []
    for (let i = 0; i < this.length; i++) {
        arr.push(callBack(this[i], i, this))
    }
    return arr;
}

let ar = [1, 2, 3, 4, 5, 5, 6]
let r = ar.myMap((items, i, array) => {
    return (items*2)
})
console.log(r)