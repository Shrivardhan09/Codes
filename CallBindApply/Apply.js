Function.prototype.MyApply = function (obj, args) {
    obj.applying = this;
    return obj.applying(...args);
}

const x = {
    a: 89,
    b: 69,

};
const abc = {
    applying: function (city, secondName) {
        return `${this.a}a , ${this.b}b , ${city}city ${secondName}LN`;
    },
}
console.log(abc.applying.MyApply(x, ['nzb', 'secondApplycustom']))
console.log(abc.applying.apply(x, ['nzb', 'secondApply']))