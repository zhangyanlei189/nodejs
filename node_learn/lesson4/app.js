/**
 * Created by zhangyanlei on 2017/9/7.
 */
var eventproxy = require('eventproxy');
var superagent = require('superagent');
var cheerio = require('cheerio');
var express = require('express');
var app = new express();
// url 模块是 Node.js 标准库里面的
// http://nodejs.org/api/url.html
var url = require('url');

var cnodeUrl = 'http://hotel.meituan.com/beijing/';

superagent.get(cnodeUrl)
    .end(function (err, res) {
        if (err) {
            return console.error(err);
        }
        var topicUrls = [];
        var $ = cheerio.load(res.text);
        console.log($);
        // 获取首页所有的链接
        $('#list-view .poi-title').each(function (idx, element) {
            var $element = $(element);
            // $element.attr('href') 本来的样子是 /topic/542acd7d5d28233425538b04
            // 我们用 url.resolve 来自动推断出完整 url，变成
            // https://cnodejs.org/topic/542acd7d5d28233425538b04 的形式
            // 具体请看 http://nodejs.org/api/url.html#url_url_resolve_from_to 的示例
            //var href = url.resolve(cnodeUrl, $element.attr('href'));
            topicUrls.push($element.text());
        });
        console.log(topicUrls);
    });


app.listen(3000, function (req, res) {
    console.log('app is running at port 3000');
});