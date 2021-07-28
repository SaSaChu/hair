 
$(function() {

  // 手機版Menu
  $('.m_header_r').click(function() {
    $('.m_menu').addClass('menu_open');
  });

  $('.menuClose').click(function() {
    $('.m_menu').removeClass('menu_open');
  });


  // 圖片縮放
  $(".imgSetpBoxs, .imgSerBoxs").imgLiquid ();


  // tag切換
  $('.tagMenu').click(function() {
    $('.tagMenu').removeClass ('loi_s');
    $(this).addClass ('loi_s');

    $('.qaBoxs').removeClass('qaBoxs_show');
    $('.qaBoxs').eq($(this).index()).addClass('qaBoxs_show');
   });

  $('.tagMenu').eq (0).click();


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


});
