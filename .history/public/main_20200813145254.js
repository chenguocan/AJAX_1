console.log("我是main.js");
const request = new XMLHttpRequest();
const getCSS = document.querySelector(".getCSS")
getCSS.onclick = () => {
    request.open("GET", "/style.css")
    console.log(request.response);
    request.onload = (() => {
        console.log("成功了")
    });
    request.onerror = (() => {
        console.log("失败了");
    });
    request.send();
}
