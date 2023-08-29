Array.prototype.myReduce = function (callBack, intialValue) {
    let accumulator = intialValue;
    for (let i = 0; i < this.length; i++) {
        accumulator = accumulator ?
            callBack(accumulator, this[i], i, this) :
            accumulator = this[i]
    }
    return accumulator;
}


let arr = [1, 2, 3, 5, 6, 2, 6]
let r = arr.myReduce((acc, items) => {
    if (items === 2) {
        acc.push(items)
    }
    return acc;
}, [])
console.log(r)