// Object.prototype.DeepCopy = function () {
//     let objkeys = Object.keys(this);
//     let deepobj = {};
//     for (let i = 0; i < objkeys.length; i++) {
//         if (typeof this[objkeys[i]] === 'object') {
//             deepobj[objkeys[i]] = Object.prototype.DeepCopy(this[objkeys[i]]);
//         } else {
//             deepobj[objkeys[i]] = this[objkeys[i]];
//         }
//     }
//     return deepobj;
// };




const arr = [1, 1, 2, 2, 2, 3, 3, 4, 5, 5]

let usingReduce = arr.reduce((acc, intialV) => {
    if (!acc.includes(intialV)) {
        acc.push(intialV)
    }
    return acc
}, [])
console.log(usingReduce)

//normal object literals
//function constructor
//class constructor
//new object()
//Object.create()