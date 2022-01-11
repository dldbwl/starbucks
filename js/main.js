const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

// 돋보기 아이콘 누르면 input 창 focus 되도록
searchEl.addEventListener("click", function () {
  searchInputEl.focus();
});

// placeholder 통합검색 add
searchInputEl.addEventListener("focus", function () {
  searchEl.classList.add("focused");
  searchInputEl.setAttribute("placeholder", "통합검색");
});

// placeholder 통합검색 remove
searchInputEl.addEventListener("blur", function () {
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", "");
});

// 뱃지 사라지게
// window 는 현재 출력되고 있는 화면 자체를 이야기
// _.throttle(함수, 시간)
const badgeEl = document.querySelector("header .badges");
const toTopEl = document.querySelector("#to-top");
window.addEventListener(
  "scroll",
  _.throttle(function () {
    console.log(window.scrollY);
    if (window.scrollY > 500) {
      // 배지 숨기기
      // gsap.to(요소, 지속시간 옵션);
      gsap.to(badgeEl, 0.6, {
        opacity: 0,
        // 시각적으로만 사라지게 하면 안 되고 실제 배지도 사라져야 함
        display: "none",
      });
      // to top 버튼 보이기!!
      gsap.to("#to-top", 0.2, {
        x: 0,
      });
    } else {
      // 배지 보이기
      gsap.to(badgeEl, 0.6, {
        opacity: 1,
        display: "block",
      });
      // to top 버튼 숨기기!!
      gsap.to("#to-top", 0.2, {
        x: 100, // 안 보이게 100px 이동
      });
    }
  }, 300)
);
// to top
toTopEl.addEventListener("click", function () {
  gsap.to(window, 0.7, {
    scrollTo: 0,
  });
});

// fade 효과
const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach(function (fadeEl, index) {
  // gsap.to(요소, 지속시간 옵션);
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7, // 0.7, 1.4, 2.1 초 ...
    opacity: 1,
  });
});

// swiper
// 생성자 (클래스)
// new Swiper(선택자, 옵션)
new Swiper(".notice-line .swiper-container", {
  direction: "vertical",
  autoplay: true,
  loop: true,
});

new Swiper(".promotion .swiper-container", {
  // direction: "horizontal",
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true,
  // autoplay: {
  //   delay: 5000,
  // },
  pagination: {
    el: ".promotion .swiper-pagination", // 페이지 번호 요소 선택자
    clickable: true, // 사용자의 페이지 번호 요소 제어
  },
  navigation: {
    prevEl: ".promotion .swiper-prev",
    nextEl: ".promotion .swiper-next",
  },
});

// 스타벅스 토글 프로모션
const promotionEl = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion");
// let 이니까 다른 값으로 할당 가능 (true)
// 프로모션이 숨겨졌니 > false 니까 보이고 있다라는 뜻
let isHidePromotion = false;
// 클릭하면 반대의 값이 재할당 > 프로모션 숨겨짐
promotionToggleBtn.addEventListener("click", function () {
  isHidePromotion = !isHidePromotion; // ! 는 반대의 값을 반환
  if (isHidePromotion) {
    // true 값이 들어오면 숨김 처리!
    // class 이름만 넣고 빼고 > css로 정의
    promotionEl.classList.add("hide");
  } else {
    // false 면 보임 처리!
    // class 이름만 넣고 빼고 > css로 정의
    promotionEl.classList.remove("hide");
  }
});

// ❗❗
// floating animation
// 범위 랜덤 함수 (소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `.parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat(Math.random() * (max - min).toFixed(2));
}
function floatingObject(selector, delay, size) {
  // gsap.to(요소, 시간, 옵션);
  gsap.to(
    selector, // 선택자
    random(1.5, 2.5), // 애니메이션 동작 시간
    {
      // 옵션
      y: size,
      repeat: -1, // 무한반복
      yoyo: true,
      ease: Power1.easeInOut, // gsap easing
      delay: random(0, delay),
    }
  );
}
floatingObject(".floating1", 1, 15);
floatingObject(".floating2", 0.5, 15);
floatingObject(".floating3", 1.5, 20);

// ❗❗
// scrollMagic
const spyEls = document.querySelectorAll("section.scroll-spy");
spyEls.forEach(function (spyEl) {
  // 생성자 함수랑 메소드 (특정한 section을 라이브러리의 도움을 받아서 감시)
  new ScrollMagic.Scene({
    // 메소드 체이닝
    triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
    triggerHook: 0.8, // viewport 가장 윗 부분이 0, 가장 아래가 1, 중간은 0.5
  })
    .setClassToggle(spyEl, "show") // 메소드 체이닝
    .addTo(new ScrollMagic.Controller()); // 메소드 체이닝
  // 라이브러리 문서에서 시키는 대로 진행해도 괜찮은 방법
});

// 하단 swiper
new Swiper(".awards .swiper-container", {
  // direction: "horizontal";
  autoplay: true,
  look: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: ".awards .swiper-prev",
    nextEl: ".awards .swiper-next",
  },
});

// 푸터 this year
const thisYear = document.querySelector(".this-year");
thisYear.textContent = new Date().getFullYear(); // 2022
