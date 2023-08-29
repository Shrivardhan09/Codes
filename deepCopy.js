

// const deepObj = {
//     name: 'shrivardhan',
//     secondName: {
//         lastName: 'Gopishetty '
//     }
// }

// const acheiveDeepCopy = structuredClone(deepObj)
// console.log({ acheiveDeepCopy })

// const lodashWay = ._cloneDeep(deepObj)

var lodash = require('lodash')

const deepObj = {
    name: 'shrivardhan',
    secondName: {
        lastName: 'Gopishetty'
    }
}

const lodashWay = lodash.cloneDeep(deepObj);
console.log({ lodashWay });

