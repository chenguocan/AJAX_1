console.log("我是main.js");
const request = new XMLHttpRequest();
const getCSS = document.querySelector(".getCSS")
getCSS.onclick = () => {
    request.open("GET", "/style.css")
    request.onload = (() => {
        console.log("成功了")
        console.log(request.response);
        const style = document.createElement("style");
        style.innerHTML = request.response;
        document.head.appendChild(style);
    });
    request.onerror = (() => {
        console.log("失败了");
    });
    request.send();
}
