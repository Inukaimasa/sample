// 画像上乗せ

// headerをcallback関数を使って、フェイドアウトして、そのあとにheaderのfadeinを
// する


 
 

$(function() {
  var h = $(window).height();
  // $('.header').hide();
  $('.header').hide().fadeIn(3000);
  // $('.header').fadeOut();

  $('#loader-bg ,#loader').height(h).css('display','block');
});
  
$(window).on("load",function () { //全ての読み込みが完了したら実行
  $('#loader-bg').delay(900).fadeOut(800);
  $('#loader').delay(600).fadeOut(300);
  $('#wrap').css('display', 'block');
});

$(function () {
  // ナビ
  $(".menu_btn").on("click", function () {
    $(".sp_nav").toggleClass("on");
  });

  //トップへ戻る
  $('.to_top').on('click', function () {
    $('body,html').animate({ scrollTop: 0 }, 500);
  })

  //
  $('.to_top').hide();
  $(window).on('scroll', function () {
    var topHeight = $(window).scrollTop();
    if (topHeight > 500) {
      $('.to_top').fadeIn();
    } else {
      $('.to_top').fadeOut();
    }
  });

  //メニューページ、タブ
  $(".tab_contents").hide();
  $(".menu main ul li:first-child a").addClass("checked");
  $("#thisMonth").show();
  $(".menu main ul li a").on("click", function () {
    $(".menu main ul li a").removeClass("checked");
    $(".tab_contents").hide();
    $(this).addClass("checked");
    var target = $(this).attr("href");
    $(target).fadeIn();
    return false;
  })
});//////////////////