var md5 = require("md5")
var jsdom = require("jsdom")
const { JSDOM } = jsdom;

const dom = new JSDOM('', {url:"https://www.xiaohongshu.com"})

n = "TestJs"
console.log(n >> 6 | 192)
str = String.fromCharCode(n >> 6 | 192)
console.log(str)
str = String.fromCharCode(n >> 6 | 192)
list = {
    "X-s": function(){
        console.log((new Date).getTime())
        return (new Date).getTime();
    }(md5(['T'].join('Date'))),
    "X-t": (new Date).getTime()
}
console.log(list)