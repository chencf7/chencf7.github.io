(function(window, document){
  // document.body.clientHeight
  var currentH=window.innerHeight||window.screen.availHeight||window.screen.height;
  var pageObj={

    // 页面初始化方法
    pageInit: function(){
      var contentEl=document.querySelector(".fcc-content");
      contentEl.style.height=currentH+"px";
      // contentEl.style.background="#f1f1f1";
    }
  }

  window.onload=function(){

    // 调用初始化方法
    if(!window.addEventListener){
      pageObj.pageInit();
    }
  }


  if(window.addEventListener){
    document.addEventListener('DOMContentLoaded', function(){
      console.log('page DOMContentLoaded');
      pageObj.pageInit();
    });
  }
})(window, document);