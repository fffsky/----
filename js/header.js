const header = $("#js-fixed-header");

$(window).on("scroll", function () {
  // ヘッダーの高さ
  let headerHeight = header.outerHeight();
  // スクロール量
  let scroll = $(window).scrollTop();
  // ヘッダーを表示する高さ = ヘッダーの高さ + 任意の値
  let showHeight = headerHeight + 250;

  if (showHeight < scroll) {
    header.addClass("is-show");
  } else {
    header.removeClass("is-show");
  }
});