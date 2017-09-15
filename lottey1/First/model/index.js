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
    lottey:function(fn){
        var sql = "select no,name,rate from user";
        conn.query(sql,function(err,result){
            var arr = [];
            for(var i = 0;i<result.length;i++){
                for(var j = 0,len = result[i]["rate"];j<len;j++){
                    arr.push({no:result[i]["no"],rate:len});
                }
            };
            var num = Math.floor(Math.random()*arr.length);
            var data = arr[num];
            this.setRate(data);
            //fn({flag:true,data:data});
        });
    },
    setRate:function(data){
        var sql = "update user set rate = ? where no = ?";
        conn.query(sql,[data["rate"]+1,data["no"]],function(err,result) {
            console.log(result);
            console.log("MMMJJJ");
            if(result.affectedRows>0) {
                fn({flag: true,mess:"success"});
            }else{
                fn({flag: false,mess:"error"});
            }
        });
    }
}




module.exports = IndexModel;
