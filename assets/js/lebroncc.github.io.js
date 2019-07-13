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
    // Slider触摸事件
    var sliderdom=document.querySelector('.slider-container');
    sliderdom.addEventListener('touchstart', function(){
      alert('touchstart');
    });

    // 调用初始化方法，浏览器不支持addEventListener时，直接在onload中执行初始化body的高度
    if(!window.addEventListener){
      pageObj.pageInit();
    }
  }

  // 监听DOMContentLoaded事件
  if(window.addEventListener){
    document.addEventListener('DOMContentLoaded', function(){
      console.log('page DOMContentLoaded');
      pageObj.pageInit();
    });
  }
})(window, document);