var allBtn = $('.button span')
for(var i=0; i<allBtn.length; i++) {
    allBtn[i].onclick = function(x) {
      // 获取此节点为第几个子元素
      var index = $(x.currentTarget).index()
      var offset = index * -400
      $('.images').css('transform', 'translate('+ offset +'px)')
      
      $(x.currentTarget).addClass('red')
        .siblings('.red').removeClass('red')
    }
}