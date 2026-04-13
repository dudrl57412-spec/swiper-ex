window.addEventListener("load", () => {
  const visualSwiper = new Swiper(".visual-sw", {
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: false,
    // },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".custom-prev",
      prevEl: ".custom-next",
    },
  });
  // 상품리스트 스와이퍼
  const productSwiper = new Swiper(".itemSwiper", {
    loop: true, //맨마지막 슬라이드에서 맨 처음 슬라이드로 넘어가게하는 방법
    // 초기값 설정 모바일이 제일 먼저!!!
    slidesPerView: 1.3,
    spaceBetween: 10,
    //스와이퍼 반응형 적용
    breakpoints: {
      //브라우저가 1024보다 클때
      1024: {
        slidesPerView: 4.5,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3.3,
        spaceBetween: 10,
      },
      480: {
        slidesPerView: 2.3,
        spaceBetween: 10,
      },
    },
  });
});
