/**
 * Created by zhangyanlei on 2017/8/25.
 */
//路由文件
module.exports = function (app) {
    app.get('/', function (req, res) {
        res.send('Hello world');
    });
    app.get('/customer', function(req, res){
        res.send('customer page');
    });
    app.get('/admin', function(req, res){
        res.send('admin page');
    });
};