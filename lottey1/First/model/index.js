/**
 * Created by zhangyanlei on 2017/8/25.
 */
var conn = require("../db/db");

function IndexModel(){

}

IndexModel.prototype = {
    constructor:IndexModel,
    list:function(fn){
        var sql = "select u.no,u.name,u.rate,COUNT(r.no) t,SUM(money) money from user u LEFT JOIN record r ON u.no = r.no GROUP BY u.no";
        conn.query(sql,function(err,result){
            if(result.length>0){
                fn({flag:true,data:result});
            }else{
                fn({flag:false,data:[]});
            }
        });
    },
    luck:function(fn){

    }
}




module.exports = IndexModel;
