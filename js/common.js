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

// 푸터 this year
const thisYear = document.querySelector(".this-year");
thisYear.textContent = new Date().getFullYear(); // 2022
