 
$(function() {



  // 手機版Menu
  $('.m_header_r').click(function() {
    $('.m_menu').addClass('menu_open');
  });

  $('.menuClose').click(function() {
    $('.m_menu').removeClass('menu_open');
  });


  // 圖片縮放
  if ($.fn.imgLiquid) {
    $(".imgSetpBoxs, .imgService, .imgSerBoxs, .img400 > .content, .img270 > .content, .img335 > .content").imgLiquid ();
  }
  if ($.fn.masonry) {
    $('.masonry').masonry({ itemSelector: '.item' })
  }


  // tag切換
  $('.tagMenu').click(function() {
    $(this).addClass('loi_s').siblings().removeClass('loi_s');

    $('.qaBoxs-list .qaBoxs').eq($(this).index()).addClass('qaBoxs_show').siblings().removeClass('qaBoxs_show');
   });



  // 手機版 select
  $(".k_sel").change(function () {
      let i = $(this).val();
      $(".qaBoxs").removeClass("qaBoxs_show");

      $(this)
          .parents(".allBoxs")
          .find(".qaBoxs")
          .eq(i)
          .addClass("qaBoxs_show");
  });



  // 手風琴
  var oneOpen = true;
  $('.qaBoxs-list .qaBoxs').addClass('qaBoxs_show')
  // 這裡就看你怎麼命名就改就好
  $('.accordion .p_page').each (function () {
    // 內容不用看
    $(this).data ('height', $(this).outerHeight ());
    $(this).get (0).$span = $(this).find ('>span');

    
    $(this).get (0).run = function () {
      if ($(this).hasClass ('show')) $(this).css ({ height: $(this).data ('height') }) && $(this).hasClass ('show') && oneOpen && $(this).siblings ().removeClass ('show').each (function () { if ($(this).get (0).$span) $(this).css ({ height: $(this).get (0).$span.outerHeight (true) }); });
      else $(this).css ({ height: $(this).get (0).$span.outerHeight (true) });
    }.bind ($(this));

    $(this).get (0).$span.click (function () {
      if ($(this).hasClass ('show')) $(this).removeClass ('show');
      else $(this).addClass ('show');
      $(this).get (0).run ();
    }.bind ($(this)));
    
    $(this).get (0).run ();
  });
  $('.tagMenu').eq(0).click();



  // index banner
  $('#banner').each(function() {
    let $that = $(this).attr('data-index', 0)
    let $banner = $that.find('.banner')
    let $points = $that.find('.points')
    let timer = null
    let total = $banner.length

    $that.setIndex = function(index) {
      $(this).attr('data-index', index >= 0 ? index < total ? index : 0 : (total - 1));
      clearInterval(timer)
      timer = setInterval(_ => $next.click(), 5000) // 5秒
    }

    // 點點數量, 產生點點
    for (let i = 0; i < total; i++) {
      $points.append($('<label />').click(function() {
        $that.setIndex($(this).index())
      }))
    }

    // 左邊箭頭
    $that.find('.prve').click(function() {
      $that.setIndex(parseInt($that.attr('data-index'), 10) - 1)
    })

    // 右邊箭頭
    let $next = $that.find('.next').click(function() {
      $that.setIndex(parseInt($that.attr('data-index'), 10) + 1)
    })

    $that.setIndex(0)
  })

});
