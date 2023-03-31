$(function() {
  let pos = 0;
  $(window).on('scroll', function () {
    const $header = $('header');
    const $main = $('main');
    const headerHeight = $header.outerHeight();
    const currentPos = $(this).scrollTop(); // スクロール量

    // スクロール量がヘッダーの高さより大きい場合
    if (currentPos > headerHeight) {
      // headerを固定
      $header.addClass('is-fixed');
      $main.css('margin-top', 0);
    } else {
      // それ以外は固定を解除
      $header.removeClass('is-fixed');
      $main.css('margin-top', 0);
    }

    // 上スクロール時
    if (currentPos < pos) {
      // header引っ込める
      $header.css('top', 0);
    } else {
      //下スクロール時はheader出す
      $header.css('top', -headerHeight);
    }
    pos = currentPos;
  });
});