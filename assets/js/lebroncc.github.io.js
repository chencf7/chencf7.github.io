(function(window, document){
  // document.body.clientHeight
  var currentH=window.innerHeight||window.screen.availHeight||window.screen.height;
  var pageObj={

    // 页面初始化方法
    pageInit: function(){
      var contentEl=document.querySelector('.fcc-content');
      contentEl.style.height=currentH+'px';
      // contentEl.style.background="#f1f1f1";
    }
  }

  window.onload=function(){
    // 判断浏览器类型
    var isMobileUserAgent=false;
    var ua = navigator.userAgent.toLowerCase();
    //mozilla/5.0 (windows nt 6.1; wow64) applewebkit/537.36 (khtml, like gecko) chrome/74.0.3729.169 safari/537.36
    //mozilla/5.0 (linux; android 6.0; nexus 5 build/mra58n) applewebkit/537.36 (khtml, like gecko) chrome/74.0.3729.169 mobile safari/537.36
    //mozilla/5.0 (iphone; cpu iphone os 11_0 like mac os x) applewebkit/604.1.38 (khtml, like gecko) version/11.0 mobile/15a372 safari/604.1
    if(ua.indexOf('mobile')>0){
      isMobileUserAgent=true;
    }

    // Slider触摸事件
    var sliderdom=document.querySelector('.slider-container');
    // Slider内容需要偏移所属的外部wrapper
    var sliderwpel = document.querySelector('.slider-wrapper');
    var sliderwidth=sliderwpel.clientWidth||sliderwpel.offsetWidth;
    // 判断浏览器种类以及为桌面端还是移动端

    // 设备支持触摸事件
    //if("ontouchstart" in window){}
    if(isMobileUserAgent){
      // 移动端，触摸屏幕开始事件
      //sliderdom.addEventListener('touchstart', handleStartFunc, false);
      sliderdom.addEventListener('touchend', handleEndFunc, false);
      sliderdom.addEventListener('touchmove', handleMoveFunc, false);
      //function handleStartFunc(){}
      function handleEndFunc(){
        
      }
      function handleMoveFunc(event){
        // clientX、clientY 点击位置距离当前body可视区域的x，y坐标
        var points = event.changedTouches[0];
        // console.log(points);
        // console.log(points.clientX);
        sliderwpel.style.transform='translate3d('+(points.clientX-sliderwidth)+'px,0,0)';

      }
    }

    // 支持鼠标事件
    if("onmousestart" in window){

    }

    // 调用初始化方法，浏览器不支持addEventListener时，直接在onload中执行初始化body的高度
    if(!window.addEventListener){ pageObj.pageInit(); }
  }

  // 监听DOMContentLoaded事件
  if(window.addEventListener){
    document.addEventListener('DOMContentLoaded', function(){
      console.log('page DOMContentLoaded');
      pageObj.pageInit();
    });
  }
})(window, document);