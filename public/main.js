
getCSS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/style.css')
    request.onload = () => {
        console.log('request.response');
        console.log(request.response);

        // 创建style 标签
        const style = document.createElement('style')
        // 填写style 内容
        style.innerHTML = request.response
        // 插到头里面
        document.head.appendChild(style)
    }
    request.onerror = () => {
        console.log('失败了');
    }
    request.send()

}

getJS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/2.js')
    request.onload = () => {
        // console.log("成功了2.js");
        // console.log('request.response');
        // console.log(request.response);

        const js = document.createElement('script')
        js.innerHTML = request.response
        document.body.appendChild(js)
    }
    request.onerror = () => {
        console.log('失败了');
    }
    request.send()

}
gethtml.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/3.html')
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const response = request.response
                const div = document.createElement('div')
                div.innerHTML = response
                document.body.appendChild(div)
            } else {
                console.log('3.html 失败了');
            }
        }

    }
    request.send()
}
getXML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', "/4.xml")
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const dom = request.responseXML
                const text = dom.getElementsByTagName('warning')[0].textContent
                console.log(text.trim());
            } else {
                console.log('111');
            }
        }


    }
    request.send()
}
getJSON.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("GET", "/5.json")
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                console.log(request.response);
                const object = JSON.parse(request.response)
                console.log(object);
            }
        }
    }
    request.send()
}
let n = 1
getPage.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', `/page${n + 1}`)
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const array = JSON.parse(request.response)
                array.forEach(item => {
                    const li = document.createElement('li')
                    li.textContent = item.id
                    xxx.appendChild(li)
                });
            }
            n += 1
        }
    }
    request.send()
}