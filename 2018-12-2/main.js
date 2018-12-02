var $allBtn = $('.button span')
for (var i=0; i<$allBtn.length; i++) {
    $allBtn[i].onclick = function (x) {
        var $theBtn = $(x.currentTarget || x.target)
        // 获取此节点是其爸爸的第几个子元素：$('x').index()
        var offset = $theBtn.index() * (-400)
        nextSlide($theBtn, offset)
    }
}

// 自动轮播
var n = 0
var size = $allBtn.length
activeBtn(n % size)

var timerId = setInterval(function () {
    n += 1
    activeBtn(n % size)
}, 1200)

function activeBtn(index) {
    //   window['item'+(n % size + 1)].click()  
    //   $allBtn.eq(index)[0].click()
    $allBtn.eq(index).trigger('click')
}

function nextSlide($theBtn, offset) {
    $('.images').css('transform', 'translateX(' + offset + 'px)')
    $theBtn.addClass('red').siblings('.red').removeClass('red')
}