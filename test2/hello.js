/**
 * Created by zhangyanlei on 2017/5/10.
 */



/*
exports.world = function() {
    console.log('Hello World');
}
*/




//hello.js
function Hello() {
    var name;
    this.setName = function(thyName) {
        name = thyName;
    };
    this.sayHello = function() {
        console.log('Hello ' + name);
    };
};
module.exports = Hello;
