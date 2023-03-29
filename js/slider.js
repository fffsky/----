$(".slide-items").slick({
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow:5,
    infinite:true,
    slidesToScroll:1,
    dots: true,
    arrows:false,
    responsive: [
      {
        breakpoint: 500,
        settings: {
          centerPadding: '50px',
          slidesToShow: 2,
        }
      }
    ]
  });