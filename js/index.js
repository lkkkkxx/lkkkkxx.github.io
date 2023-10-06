window.onload=function(){
    //1 获取固定定位aside的第四个按钮
    var topbtn=document.getElementById('aside-container-btn4')
    // 给按钮注册回到顶部事件
    topbtn.onclick=function(){
        document.documentElement.scrollIntoView({
            behavior:"smooth"
        })
    }

    //1 获取固定定位aside的第一个按钮
    
var btn1=document.getElementById("aside-container-btn1")
btn1.onclick=function(){
    window.location.href='index.html'
}
var btn2=document.getElementById("aside-container-btn2")
btn2.onclick=function(){
    window.location.href='articles1.html'
}
var btn3=document.getElementById("aside-container-btn3")
btn3.onclick=function(){
    window.location.href='articles2.html'
}





}