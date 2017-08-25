/**
 * Created by zhangyanlei on 2017/5/10.
 */

/*var hello = require('./hello');
console.log(hello);
hello.world();*/



//main.js
var Hello = require('./hello');
hello = new Hello();
hello.setName('BYVoid');
hello.sayHello();
