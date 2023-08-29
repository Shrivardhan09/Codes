let arr = [
    [1, 2, 3, 3],
    [4, 5, 6],
    [7, 8, 9]
]


// let arr2 = [1, 1, 1, 2, 2, 4]
// let uni = arr2.reduce((acc, val) => {
//     if (!acc.includes(val)) {
//         acc.push(val)
//     }
//     return acc
// }, [])
// console.log(uni)


for (let i = 0; i < arr.length; i++) {
    let rowU = [...new Set(arr[i])]
    let temp = []
    for (let j = 0; j < arr.length; j++) {
        temp.push(arr[j][i])
    }
    let colU = new Set(temp)

    if (temp.length === colU.size) {
        console.log(temp)
    }
}

