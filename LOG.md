

调试：


# 目前问题：
  board 的change变量，会变成[]，这个是怎么来的？


  初始化时，是空！

  在debugger;，相当于加了断点。

  ref：https://nodejs.org/dist/latest-v8.x/docs/api/debugger.html



  这样运行：
  mocha debug



  cont, c               Resume execution
next, n               Continue to next line in current file
step, s               Step into, potentially entering a function
out, o                Step out, leaving the current function
backtrace, bt         Print the current backtrace



BUG 位置一：
return JSON.parse(JSON.stringify(this.change));

原因：
原来是：
return this.change;
这样返回数组后，被间接修改为空！



# 已有的问题

对于29，当640000次时，可以正确出现。
当320000，经常出现9，1，9，10；
