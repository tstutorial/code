(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    } else if (typeof define === 'function' && define.amd) {
        define(['require', 'exports', './utils'], factory);
    }
})(function (require, exports) {
    var utils_1 = require('./utils');
    var total = utils_1.add(1, 2);
    console.log(total);
});
