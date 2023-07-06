Object.prototype.DeepCopy = function () {
    let objkeys = Object.keys(this);
    let deepobj = {};
    for (let i = 0; i < objkeys.length; i++) {
        if (typeof this[objkeys[i]] === 'object') {
            deepobj[objkeys[i]] = Object.prototype.DeepCopy(this[objkeys[i]]);
        } else {
            deepobj[objkeys[i]] = this[objkeys[i]];
        }
    }
    return deepobj;
};
