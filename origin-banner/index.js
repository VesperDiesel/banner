// 获取元素
var bannerCenter = document.getElementById('bannerCenter');
var content = document.querySelector('.content');
var btnRight = document.querySelector('.btn-right');
var btnLeft = document.querySelector('.btn-left');
var lis = document.querySelectorAll('.controls li');
var controls = document.querySelector('.controls');
var index = 0;
var width = bannerCenter.offsetWidth;

// 右侧按钮
btnRight.onclick = function () {
    if (index == 0) {
        content.style.left = 0 + 'px';
    }
    lis[index].className = '';
    index++;
    var v = index * -width;
    move(content, v, 50);
    if (index == 4) {
        index = 0;
    }
    lis[index].className = 'active';
};

// 左侧按钮
btnLeft.onclick = function () {
    lis[index].className = '';
    index--;
    if (index < 0) {
        content.style.left = 4 * -width +'px';
        index = 3;
    }
        var v = index * -width;
        move(content, v, 50);
        lis[index].className = 'active';
};

// 小圆点
// 注册编号
for (var i = 0; i < lis.length; i++) {
    lis[i].num = i;
}
// 事件委托给ul注册点击事件
controls.onclick = function (e) {
    var t = e.target;
    if (t.nodeName == 'LI') {
        lis[index].className = '';
        index = t.num;
        var v = index * -width;
        move(content, v, 50);
        lis[index].className = 'active';
    }
};