(function(global, document){
  global.onload=function(){
    
  }


  if(global.addEventListener){
    document.addEventListener('DOMContentLoaded', function(){
      console.log('page DOMContentLoaded');
    });
  }
})(window, document);