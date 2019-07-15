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
    if(ua.indexOf('mobile')>0){
      isMobileUserAgent=true;
    }

    // Slider图片滑动轮播事件方法
    ;(function(){
      var sliderpad=0, 
        currentslider=0;
      var startx=0, directx=0;
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
        sliderdom.addEventListener('touchstart', handleStartFunc, false);
        sliderdom.addEventListener('touchend', handleEndFunc, false);
        sliderdom.addEventListener('touchmove', handleMoveFunc, false);
        function handleStartFunc(event){
          var points = event.changedTouches[0];
          startx=directx=points.clientX;
        }
        function handleEndFunc(event){
          if(currentslider==0){
            var points = event.changedTouches[0];
            if(points.clientX>=directx){
              // 向右滑动，恢复至0
              sliderwpel.style.transform='translate3d(0,0,0)';
            }else{
              // 向左滑动
              sliderpad = points.clientX-sliderwidth;
              if(sliderpad<=-(sliderwidth/2)){
                sliderpad=-sliderwidth;
                currentslider=1;  //季度当前所在的位置

                // 移除active bullet，添加至相应的bullet为active
                var bullets = document.getElementsByClassName('slider-bullet');
                var bulletsArr = Array.prototype.slice.call(bullets);
                bulletsArr[0].className='slider-bullet';
                bulletsArr[1].className+=' slider-bullet-active';
              }else sliderpad=0;
              sliderwpel.style.transform='translate3d('+sliderpad+'px,0,0)';
            }
          }
          startx=directx=0;
        }
        function handleMoveFunc(event){
          // clientX、clientY 点击位置距离当前body可视区域的x，y坐标
          var points = event.changedTouches[0];
          // console.log(points.clientX);
          if(points.clientX>=directx){
            //向右滑动
            if(currentslider==0){
              sliderpad = points.clientX-startx;
              if(sliderpad>(sliderwidth/2)){
                sliderpad=sliderwidth/2;
              }else
                sliderpad=points.clientX;
            }
            if(currentslider==1){
              sliderpad = sliderwidth-(points.clientX-startx);
              if(sliderpad<0) {sliderpad=0;}
              else{
                sliderpad=-sliderpad;
              }
            }
          }else{
            //向左滑动
            if(currentslider==0){
              sliderpad = points.clientX-sliderwidth;
              if(sliderpad<=-sliderwidth){
                sliderpad=-sliderwidth;
              }
            }
          }
          sliderwpel.style.transform='translate3d('+sliderpad+'px,0,0)';
        }
      }

      // 支持鼠标事件
      if("onmousestart" in window){

      }
    })();
    // end-Slider图片滑动轮播事件方法
    
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