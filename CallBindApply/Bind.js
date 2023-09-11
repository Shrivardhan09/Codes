Function.prototype.MyBind = function (obj, ...args) {
    obj.func = this
    return function () {
        return obj.func(...args)
    }
}

const x = {
    a: 89,
    b: 69,

};
const abc = {
    applying: function (city, secondName) {
        return `${this.a}a , ${this.b}b , ${city} city ${secondName} LN`;
    },
}

function fullName(lastname) {
    return `${this.a} a ${lastname}ln  ${this.b} b`
};
const mybind = abc.applying.MyBind(x, 'nzb', 'secondApplycustom')
const mybind2 = fullName.MyBind(x, 'nzb', 'secondApplycustom')
console.log(mybind())