Function.prototype.MyCall = function (obj, ...args) {
    console.log(obj, ...args, 'this')
    obj.calling = this;
    return obj.calling(args);
};


const x = {
    a: 89,
    b: 69,

};
const abc = {
    applying: function (city, secondName) {
        return `${this.a}a , ${this.b}b , ${city}city ${secondName}LN`;
    },
}

console.log(abc.applying.MyCall(x, 'nzb1', 'secondcallcustom'));
// console.log(abc.applying.call(x, 'nzb1', 'secondcall'));






