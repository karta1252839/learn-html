// var num1 = 0;
// var btnHtml = document.querySelector('.btnHtml');

// num.document.querySelector('.btn')
//     .addEventListener('click', function () {
//         console.log(num1 += 1);
//     })

// btnHtml.document.addEventListener('click',function () {
//     document.querySelector('.header')
//     .innerHTML = "<h1>LOGO</h1>"
// })

// var xhr = new XMLHttpRequest();
// xhr.open(
//     'get','https://tw.news.yahoo.com/%E5%8F%B0%E7%A9%8D%E5%A6%82%E6%9E%9C%E5%87%BA%E4%BA%8B%E5%85%A8%E7%90%83%E4%B8%80%E8%B5%B7%E7%99%B1%E7%98%93%E6%96%B0%E7%BE%8E%E5%9C%8B%E9%9A%8A%E9%95%B7%E6%8B%9C%E7%99%BB%E4%B9%8B%E7%9B%BE%E5%8F%B0%E7%81%A3-013155243.html'
// );
// xhr.send();
// xhr.onload = function(){
//     console.log(xhr.responseText);
// }

var xhr = new XMLHttpRequest();
xhr.open(
    'get','http://www.yahoo.com.tw'
);
xhr.send();
xhr.onload = function(){
    console.log((xhr.responseText));
}