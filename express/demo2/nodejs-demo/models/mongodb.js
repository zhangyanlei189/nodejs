/**
 * Created by zhangyanlei on 2017/5/25.
 */
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/nodejs');
exports.mongoose = mongoose;