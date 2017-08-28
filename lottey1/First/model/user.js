/**
 * Created by zhangyanlei on 2017/8/28.
 */
var conn = require("../db/db");

function UserModel(){
    this.table = "user";
}

UserModel.prototype = {
    constructor:UserModel,
    list:function(fn){//员工列表
        var sql = "select * from "+this.table;
        conn.query(sql,function(err,result){
            if(result.length>0){
                fn({flag:true,data:result});
            }else{
                fn({flag:false,data:[]});
            }
        });
        fn();
    },
    add:function(no,name,fn){//新增员工
        var params = [];
        params.push(no);
        params.push(name);
        var sql = "insert into "+this.table+" set no=?,name=?";
        conn.query(sql,params,function(err,result){
            if(result.affectedRows>0){
                fn({flag:true,mess:"success"});
            }else{
                fn({flag:false,mess:"error"});
            }
        });
    },
    edit:function(params,fn){
        var sql = "update "+this.table+" set no=?,name=? where id=?";
        conn.query(sql,[params.no,params.name,params.id],function(err,result){
            if(result.affectedRows>0){
                fn({flag:true,mess:"success"});
            }else{
                fn({flag:false,mess:"error"});
            }
        });
    },
    del:function(id,fn){
        var sql = "delete from "+this.table+" where id = ?";
        conn.query(sql,id,function(err,result){
            if(result.affectedRows>0){
                fn({flag:true,mess:"success"});
            }else{
                fn({flag:false,mess:"error"});
            }
        });
    }
}
module.exports = UserModel;