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
          var points = event.changedTouches[0];
          if(currentslider==0){
            if(points.clientX>=directx){
              // 向右滑动，恢复至0
              sliderwpel.style.transform='translate3d(0,0,0)';
            }else{
              // 向左滑动
              sliderpad = startx-points.clientX;
              if(sliderpad>sliderwidth/2){
                sliderpad=-sliderwidth;
                currentslider=1;  //记录当前所在的位置
                // 移除active bullet，添加至相应的bullet为active
                changeActiveBullet(1, 0);
              }else sliderpad=0;
              sliderwpel.style.transform='translate3d('+sliderpad+'px,0,0)';
            }
            startx=directx=0;
            return;
          }
          if(currentslider==1){
            if(points.clientX>=directx){
              sliderpad = points.clientX-startx;
              if(sliderpad>sliderwidth/2){
                // 向右滑动，恢复至第一张轮播
                sliderpad=0;
                currentslider=0;
                changeActiveBullet(0, 1);
              }else sliderpad=-sliderwidth;
              sliderwpel.style.transform='translate3d('+sliderpad+'px,0,0)';
            }else{
              // 向左滑动
              sliderpad = startx-points.clientX;
              if(sliderpad>sliderwidth/2){
                sliderpad=-2*sliderwidth;
                currentslider=2;  //记录当前所在的位置
                changeActiveBullet(2, 1)
              }else sliderpad=-sliderwidth;
              sliderwpel.style.transform='translate3d('+sliderpad+'px,0,0)';
            }
            startx=directx=0;
            return;
          }
          if(currentslider==2){
            if(points.clientX>=directx){
              // 向右滑动，恢复至1
              sliderpad = points.clientX-startx;
              // 滑动距离超过sliderwidth的1/2时，切换到1
              if(sliderpad>sliderwidth/2){
                sliderpad=-sliderwidth;
                currentslider=1;
                changeActiveBullet(1, 2);
              }else sliderpad=-2*sliderwidth;
              sliderwpel.style.transform='translate3d('+sliderpad+'px,0,0)';
            }else{
              // 向左滑动，仍显示当前页
              sliderpad=-2*sliderwidth;
              sliderwpel.style.transform='translate3d('+sliderpad+'px,0,0)';
            }
            startx=directx=0;
            return;
          }
        }
        function handleMoveFunc(event){
          // clientX、clientY 点击位置距离当前body可视区域的x，y坐标
          var points = event.changedTouches[0];
          // console.log(points.clientX);
          if(points.clientX>directx){
            //向右滑动
            if(currentslider==0){
              sliderpad = points.clientX-startx;
              if(sliderpad>(sliderwidth/2)){
                sliderpad=sliderwidth/2;
              }
            }
            if(currentslider==1){
              sliderpad = sliderwidth-(points.clientX-startx);
              if(sliderpad<0) {sliderpad=0;}
              else{
                sliderpad=-sliderpad;
              }
            }
            if(currentslider==2){
              sliderpad = 2*sliderwidth-(points.clientX-startx);
              if(sliderpad<sliderwidth) {sliderpad=-sliderwidth;}
              else{
                sliderpad=-sliderpad;
              }
            }
          }else if(points.clientX<directx){
            //向左滑动
            if(currentslider==0){
              sliderpad = points.clientX-sliderwidth;
              if(sliderpad<=-sliderwidth){
                sliderpad=-sliderwidth;
              }
            }
            if(currentslider==1){
              sliderpad = points.clientX-sliderwidth;
              if(sliderpad<=-sliderwidth){
                sliderpad=-2*sliderwidth;
              }else
                sliderpad=sliderpad+(-sliderwidth);
            }
            if(currentslider==2){
              sliderpad = points.clientX-startx;
              if(sliderpad>(sliderwidth/2)){
                sliderpad=sliderwidth/2;
              }
              sliderpad=-(3*sliderwidth+sliderpad);
            }
          }
          sliderwpel.style.transform='translate3d('+sliderpad+'px,0,0)';
        }
      }

      // 支持鼠标事件
      if("onmousestart" in window){

      }

      function changeActiveBullet(active, inactive){
        // 移除active bullet，添加至相应的bullet为active
        var bullets = document.getElementsByClassName('slider-bullet');
        var bulletsArr = Array.prototype.slice.call(bullets);
        bulletsArr[inactive].className='slider-bullet';
        bulletsArr[active].className+=' slider-bullet-active';
      }
    })();
    // end-Slider图片滑动轮播事件方法

    // artice浏览文件加载方法
    if(window.XMLHttpRequest){
      var xmlhttp=new XMLHttpRequest();
      // 请求静态文件，部分服务器使用post的方式会报错405
      xmlhttp.open('GET', '/assets/data/article.json', true);
      xmlhttp.onreadystatechange=function(){
        if(xmlhttp.readyState===4&&xmlhttp.status===200){
          var data = JSON.parse(xmlhttp.responseText);
          appendArticletohtml(data);
        }
      }
      xmlhttp.send();
    }
    function appendArticletohtml(data){
      if(Object.prototype.toString.call(data)==='[object Array]'){
        var main = document.querySelector('.fcc-main');
        if('content' in document.createElement('template')){
          for(var i=0; i<data.length;i++){
            var template = document.querySelector('#article-detail');
            var tplcontent=template.content;

            var tplclone = document.importNode(tplcontent, true);
            var title=tplclone.querySelector('.entry-title').children[0];
            title.innerHTML=data[i].title;
            title.href=data[i].url;

            tplclone.querySelector('.atl-description').innerHTML=data[i].content;
            
            var tagarr = data[i].tag.split('；');
            var tag = '';
            for(var j=0;j<tagarr.length;j++){
              tag+='<p class="atl-meta-cate"><a href="#">'+tagarr[j]+'</a></p>';
            }
            tplclone.querySelector('.atl-meta').insertAdjacentHTML('afterbegin', tag);
            tplclone.querySelector('.date').innerHTML+=data[i].time;
            // 出入指内容div
            main.appendChild(tplclone);
          }
        }
      }
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