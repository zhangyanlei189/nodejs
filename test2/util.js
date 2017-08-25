/**
 * Created by zhangyanlei on 2017/5/10.
 */

    /*
    //继承
var util = require('util');
function Base() {
    this.name = 'base';
    this.base = 1991;
    this.sayHello = function() {
        console.log('Hello ' + this.name);
    };
}
Base.prototype.showName = function() {
    console.log(this.name);
    this.sayHi = function(){
        console.log("hi");
    }
};
function Sub() {
    this.name = 'sub';
}
util.inherits(Sub, Base);
var objBase = new Base();
objBase.showName();  //base
objBase.sayHello();  //hello base
console.log(objBase);
var objSub = new Sub();
objSub.showName();  //sub
//objSub.sayHello();
console.log(objSub);*/



//对象转为字符串

var util = require('util');
function Person() {
    this.name = 'byvoid';
    this.toString = function() {
        return this.name;
    };
}
var obj = new Person();
console.log(util.inspect(obj));
console.log(util.inspect(obj, true));



