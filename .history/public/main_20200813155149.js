console.log("我是main.js");
const request = new XMLHttpRequest();
const getCSS = document.querySelector(".getCSS")
const getJS = document.querySelector(".getJS");
const getHTML = document.querySelector(".getHTML");
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
getJS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "/2.js")
    request.onload = (() => {
        console.log(request.response);
        const script = document.createElement("script");
        script.innerHTML = request.response;
        document.body.appendChild(script);
    })
    request.onerror = (() => {
        console.log("失败了");
    })
    request.send();
}
getHTML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "/3.html");
    // request.onload = (() => {
    // const div = document.createElement("div");
    // console.log(request.response);
    // div.innerHTML = request.response;
    // document.body.appendChild(div);
    // })
    // request.onerror = (() => {
    // })
    request.onreadystatechange = () => {
        if (request.status >= 200 && request.status < 300) {
            const div = document.createElement("div");
            console.log(request.response);
            div.innerHTML = request.response;
            document.body.appendChild(div);
        } else {
            alert("加载HTML失败");
        }
    }
    request.send();
}