var EventUtil = {
    addHandler: function (elememt, type, handler) {
        if (elememt.addEventListener) {
            elememt.addEventListener(type, handler, false);
        }
        else if (element.attachEvent) {
            elememt.attachEvent("on" + type, handler);
        }
        else {
            element["on" + type] = handler;
        }
    },

    getEvent: function (event) {
        return event ? event : window.event;
    },

    getTarget: function (event) {
        return event.target || event.srcElement;
    },

    preventDefault: function (event) {
        if (event.preventDefault) {
            event.preventDefault();
        }
        else {
            event.returnValue = false;
        }
    },

    removeHandler: function (elememt, type, handler) {
        if (elememt.removeEventListener) {
            elememt.removeEventListener(type, handler, false);
        }
        else if (element.detachEvent) {
            elememt.detachEvent("on" + type, handler);
        }
        else {
            element["on" + type] = null;
        }
    },

    stopPropagation: function (event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        }
        else {
            event.cancelBubble = true;
        }
    }
};
function bubbleSort(arr) {
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len - i -1; j++) {
            if (arr[j] > arr[j+1]) {    //相邻元素对比
                var temp = arr[j];      //交换位置
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

