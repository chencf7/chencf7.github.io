# lebroncc.github.io
lebroncc的个人博客

***
### 日常联系demos
##### dialy-practise/201812
1. 圣杯布局的实现
2. 双飞翼布局的实现

##### dialy-practise/201906
1. css实现各种图案
2. 瀑布流网站的实现

***
### 人力资源系统框架
##### hr-system
1. 采用框架: react+react-router+typescript+redux+redux-thunk+scss

***
### 其他待实现
1. js文件上传的几种方式
2. css盒子模型margin塌陷
3. 深入理解CSS行高line-height与文本垂直居中的原理：https://www.jb51.net/css/484756.html
4. 函数式编程，柯里化：https://www.jianshu.com/p/d4acb140eb3d

5. 轮播图初始化时就设置好div的宽高，以及img的宽高，两者宽高相同；随着屏幕大小进行按照比列重新设置图片宽高
6. rxjs
7. ES6 迭代器：http://es6.ruanyifeng.com/#docs/iterator
8. rxjs的FromEvent事件，如何触发已监听的事件
9. 如何使用扫描二维码登陆网页
10. angular 搭建网站
11. css transform导致fixed属性重新起点，border-radius导致z-index失效？
12. transform: translateZ(0)提升性能
有关CSS的overflow和border-radius的那些事，你的圆角被覆盖了吗？
https://www.cnblogs.com/sanshi/p/9712426.html

13. angular ngmodule各种声明属性，entrycomponent， declaretion...
14. js面向对象编程到底是什么，rxjs源码，FromEvent， Create继承Observable
15. CSS 同级元素position:fixed和margin-top共同使用的问题
https://segmentfault.com/a/1190000016377243


16，函数式编程
主旨在于将复杂的函数符合成简单的函数（计算理论，或者递归论，或者拉姆达演算）
（1）函数是一等公民
（2）纯函数
（3）函数的柯里化
柯里化是一种“预加载”函数的方法，通过传递较少的参数，得到一个已经记住了这些参数的新函数，某种意义上讲，这是一种对参数的“缓存”，是一种非常高效的编写函数的方法。
（4）函数组合
（5）高阶函数
高阶函数，就是把函数当参数，把传入的函数做一个封装，然后返回这个封装函数,达到更高程度的抽象
（6）递归与尾递归
指函数内部的最后一个动作是函数调用。该调用的返回值，直接返回给函数。函数调用自身，称为递归。
通俗点说，尾递归最后一步需要调用自身，并且之后不能有其他额外操作。
```javascript
// 递归
function sum(n) {
  if (n === 1) return 1;
  return n + sum(n - 1);
}
// 运算过程，嵌套保存运算结果
sum(5)
(5 + sum(4))
(5 + (4 + sum(3)))
(5 + (4 + (3 + sum(2))))
(5 + (4 + (3 + (2 + sum(1)))))
(5 + (4 + (3 + (2 + 1))))
(5 + (4 + (3 + 3)))
(5 + (4 + 6))
(5 + 10)
15 // 递归非常消耗内存，因为需要同时保存很多的调用帧，这样，就很容易发生“栈溢出”

// 尾递归
function sum(x, total) {
  if (x === 1) {
    return x + total;
  }
  return sum(x - 1, x + total);
}
// 运算过程
sum(5, 0)
sum(4, 5)
sum(3, 9)
sum(2, 12)
sum(1, 14)
15
```
https://www.cnblogs.com/tjyoung/p/8976013.html