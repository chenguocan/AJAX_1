console.log("我是main.js");
const request = new XMLHttpRequest();

request.open("GET", "/style.css")
request.onload(() => {
    console.log("成功了")
});
request.onerror(() => {
    console.log("失败了");
});
request.send();