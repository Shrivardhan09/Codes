Array.prototype.myFilter = function (callback) {
    let arr = []
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], this, i)) arr.push(this[i])
    }
    return arr;
}
let arr = [1, 3, 4, 5, 6, 7, 8, 9]
let f = arr.myFilter((items) => items !== 6)
console.log(f)


