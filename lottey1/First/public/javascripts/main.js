/**
 * Created by zhangyanlei on 2017/8/17.
 */


$(function(){
    function menu(){
        $("#top .menu span").hover(function(){$(this).closest(".menu").find(".m-list").show();},function(){$(this).closest(".menu").find(".m-list").hide();});
        $("#top .menu .m-list").hover(function(){$(this).show();},function(){$(this).hide();});
    }
});