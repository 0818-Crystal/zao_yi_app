function Queue() {
  this.dataStore = [];
}

Queue.prototype = {
  // 向队尾添加一个元素
  enqueue: function(element) {
    this.dataStore.push(element);
  },
  // 删除队首的元素
  dequeue: function() {
    return this.dataStore.shift();
  },
  // 读取队首的元素
  front: function() {
    return this.dataStore[0];
  },
  // 读取队尾的元素
  back: function() {
    return this.dataStore[this.dataStore.length - 1];
  },
  // 显示队列内的所有元素
  toString: function() {
    var retStr = "";
    for (var i = 0; i < this.dataStore.length; ++i) {
      retStr += this.dataStore[i] + "\n";
    }
    return retStr;
  },
  // 判断队列是否为空
  empty: function() {
    if (this.dataStore.length == 0) {
      return true;
    } else {
      return false;
    }
  }
};
export { Queue };
