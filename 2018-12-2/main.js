var $allBtn = $('.button span')
for (var i=0; i<$allBtn.length; i++) {
    $allBtn[i].onclick = function (x) {
        var $theBtn = $(x.currentTarget || x.target)
        // x为浏览器传递进来的触发元素信息，
        // 使用 trigger 触发事件时，x.currentTarget为undefined
        // 获取此节点是其爸爸的第几个子元素：$('x').index()
        n = $theBtn.index()
        var offset = n * (-400)
        nextSlide($theBtn, offset)
    }
}

var n = 0
var size = $allBtn.length

// 自动轮播
var timerId = setTimer()

$('.images-window').on({
    mouseenter: function(){
        window.clearInterval(timerId)
    },
    mouseleave: function(){
        timerId = setTimer()
    }
})

function activeBtn(index) {
    $allBtn.eq(index).trigger('click')
}

function nextSlide($theBtn, offset) {
    $('.images').css('transform', 'translateX(' + offset + 'px)')
    $theBtn.addClass('red').siblings('.red').removeClass('red')
}

function setTimer() {
    return setInterval(function () {
        n += 1
        activeBtn(n % size)
    }, 3000)

}