---
date: '2019-11-22'
tag: 
  - throttle
  - debounce
  - underscore
author: hx
location: ShangHai   
---

# throttle&debounce 概念解析 - Underscore 源码分析
throttle和debounce 是解决请求和响应速度不匹配问题的两个方案。二者的差异在于选择不同的策略。
- debounce 的关注点是空闲的间隔时间。
- throttle 的关注点是连续的执行间隔时间。

## throttle&debounce 应用
只要牵涉到连续事件或频率控制相关的应用都可以考虑到这两个函数，如：
- 游戏设计，`keydown` 事件
- 文本输入，自动完成，`keyup` 事件
- 鼠标移动，`mousemove` 事件
- DOM 元素动态定位，window对象的`resize`和`scorll`事件
前两者debounce和throttle都可以按需使用；后两者肯定是用throttle了。

## throttle&debounce 在underscore中文网的定义
throttle `_.throttle(function, wait, [options])`

创建并返回一个像节流阀一样的函数，当重复调用函数的时候，最多每隔 `wait`毫秒调用一次该函数。对于想控制一些触发频率较高的事件有帮助。

默认情况下，throttle将在你调用的第一时间尽快执行这个function，并且，如果你在wait周期内调用任意次数的函数，都将尽快的被覆盖。如果你想禁用第一次首先执行的话，传递`{leading: false}`，还有如果你想禁用最后一次执行的话，传递`{trailing: false}`。

```javascript
var throttled = _.throttle(updatePosition, 100);
$(window).scroll(throttled);
```
### throttle的underscore源码

```javascript
  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time. Normally, the throttled function will run
  // as much as it can, without ever going more than once per `wait` duration;
  // but if you'd like to disable the execution on the leading edge, pass
  // `{leading: false}`. To disable execution on the trailing edge, ditto.
  _.throttle = function(func, wait, options) {
    //timeout 定时器
    //context 上下文
    //args func的参数
    //result func返回的结果
    var timeout, context, args, result;
    
    //previous 距离上一次执行回调的时间戳
    var previous = 0;

    //如果没有传options选项则赋初始值为{}
    if (!options) options = {};

    var later = function() {
      //_now=Date.now
      //leading 是否立即触发 
      previous = options.leading === false ? 0 : _.now();
      timeout = null;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    };

    var throttled = function() {
      var now = _.now();
      //leading 是否立即触发 
      if (!previous && options.leading === false) previous = now;
      //距离下一次执行func还需等待多长时间
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0 || remaining > wait) {
        //如果有定时器 则清除
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        previous = now;
        //执行func
        result = func.apply(context, args);
        //如果没有定时器 上下文和参数则置空
        if (!timeout) context = args = null;

        // 如果有定时器 并且 最后一次触发不是false 则开启定时器
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };
    //取消throttle的函数
    throttled.cancel = function() {
      clearTimeout(timeout);
      previous = 0;
      timeout = context = args = null;
    };

    return throttled;
  };
```

debounce `_.debounce(function, wait, [immediate])`

返回 function 函数的防反跳版本, 将延迟函数的执行(真正的执行)在函数最后一次调用时刻的 wait 毫秒之后. 对于必须在一些输入（多是一些用户操作）停止到达之后执行的行为有帮助。 例如: 渲染一个Markdown格式的评论预览, 当窗口停止改变大小之后重新计算布局, 等等.

传参 `immediate` 为 `true`， debounce会在 `wait` 时间间隔的开始调用这个函数 。（注：并且在 `wait` 的时间之内，不会再次调用。）在类似不小心点了提交按钮两下而提交了两次的情况下很有用。
```javascript
var lazyLayout = _.debounce(calculateLayout, 300);
$(window).resize(lazyLayout);
```
### debounce的underscore源码

```javascript
// Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  _.debounce = function(func, wait, immediate) {
    //timeout 定时器
    //result func的执行结果
    var timeout, result;

    var later = function(context, args) {
      timeout = null;
      if (args) result = func.apply(context, args);
    };

    var debounced = restArguments(function(args) {
      // 如果有定时器则置空，为了重新设置定时器
      if (timeout) clearTimeout(timeout);
      // 如果立即执行，则判断是否是第一次调用，如果是第一次，则立即执行，如果不是，则重新设置定时器
      if (immediate) {
        var callNow = !timeout;
        timeout = setTimeout(later, wait);
        if (callNow) result = func.apply(this, args);
        //如果不是立即执行，则设置定时器
      } else {
        timeout = _.delay(later, wait, this, args);
      }

      return result;
    });

    debounced.cancel = function() {
      clearTimeout(timeout);
      timeout = null;
    };

    return debounced;
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  _.delay = restArguments(function(func, wait, args) {
    return setTimeout(function() {
      return func.apply(null, args);
    }, wait);
  });

  var restArguments = function(func, startIndex) {
  startIndex = startIndex == null ? func.length - 1 : +startIndex;
  return function() {
      var length = Math.max(arguments.length - startIndex, 0),
          rest = Array(length),
          index = 0;
      for (; index < length; index++) {
        rest[index] = arguments[index + startIndex];
      }
      switch (startIndex) {
        case 0: return func.call(this, rest);
        case 1: return func.call(this, arguments[0], rest);
        case 2: return func.call(this, arguments[0], arguments[1], rest);
      }
      var args = Array(startIndex + 1);
      for (index = 0; index < startIndex; index++) {
        args[index] = arguments[index];
      }
      args[startIndex] = rest;
      return func.apply(this, args);
    };
  };
```