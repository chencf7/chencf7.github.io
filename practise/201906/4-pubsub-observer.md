### 观察者模式
1. 观察者模式是由具体目标调度，比如当事件触发，Subject 就会去调用观察者的方法，所以观察者模式的订阅者与发布者之间是存在依赖的。


### 发布/订阅模式
1. 虽然 Observer 模式非常有用，但是在 JavaScript 的世界中，它更多的以一种被称为发布/订阅模式的变种来实现
2. 发布/订阅模式是观察者模式的一种变形，两者区别在于，发布/订阅模式在观察者模式的基础上，在目标和观察者之间增加一个调度中心。
3. 发布/订阅模式由统一调度中心调用，因此发布者和订阅者不需要知道对方的存在。
4. DOM的事件机制就是发布订阅/模式最常见的实现，这大概是前端最常用的编程模型了，监听某事件，当该事件发生时，监听该事件的监听函数被调用。

```javascript
// 以闭包的形式实现
var pubsub=(function(){
  var cache={};

  // 订阅，参数，eventtype，fn
  var subscribe=function(et, fn){
    if(typeof cache[et] === undefined){
      // 消息类型订阅为数组，可订阅多个事件方法
      cache[et]=[];
      cache[et].push(fn);
    }
    esle{
      cache[et].push(fn);
    }
  }

  // 发布
  var publish=function(et, args){
    if(!cache[et]) return;
    let i=cache[type].length;
    while(i>0){
      cache[type][--i].apply(null, args);
    }
  }
})();
// 使用
pubsub.subscribe('fun', function(args1, args2){
  console.log('订阅fun事件，执行1次');
});
pubsub.subscribe('fun', function(args1, args2){
  console.log('订阅fun事件，执行2次');
});

pubsub.publish('fun', ['123', '456']);
```
    

参考：https://www.jianshu.com/p/e37ca8369162