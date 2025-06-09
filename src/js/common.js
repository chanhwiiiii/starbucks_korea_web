// search 부분에 포커스가 적용되면 search영역의 넓이값이 변경되고 동시에 통합검색이 표시되도록 처리, 포커스 해제되면 넓이값이 축소되고 통합검색이 빈 문자열이 되도록 처리
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', ()=>{
  searchInputEl.focus()
});
searchInputEl.addEventListener('focus', function() {
  searchEl.classList.add('focused')
  this.setAttribute('placeholder','통합검색');
});
searchInputEl.addEventListener('blur', function() {
  searchEl.classList.remove('focused')
  this.setAttribute('placeholder','');
});

//footer year
const thisYear = document.querySelector('footer .this-year');
thisYear.textContent = new Date().getFullYear();

