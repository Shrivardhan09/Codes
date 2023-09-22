//[1,2,3,1,3,4,5,2,3,5]

// const duplicateElem = (arr) => {
//     let obj = {}
//     for (let i = 0; i < arr.length; i++) {
//         obj[arr[i]] = arr[i]
//     }
//     return Object.keys((obj)).map((items) => Number(items))
// }
// console.log(duplicateElem([1, 2, 3, 1, 3, 4, 5, 2, 3, 5]))


const duplicateElem = (arr) => {
    let obj = {}
    for (let i = 0; i < arr.length; i++) {
        obj.hasOwnProperty(arr[i]) ? obj[arr[i]]++ : obj[arr[i]] = 1
    }
    return obj
}
console.log(duplicateElem([1, 2, 3, 1, 3, 4, 5, 2, 3, 5]))


// AAAABBBCCDAA -> 4A3B2C1D2A
function countChar(str) {
    let flag = ''
    let count = 1
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            count += 1
        } else {
            flag += count + str[i]
            count = 1
        }
    }
    return flag;
}
console.log(countChar('AAAABBBCCDAA'))
