const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input')

// search 라는 클래스를 가지고 있는 div요소를 클릭하면 함수가 실행. 검색요소에 포커스를 해라.
searchEl.addEventListener('click', function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus',function(){
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색')
});

searchInputEl.addEventListener('blur',function(){
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '')
});


const thisYear = document.querySelector('.this-year');
 thisYear.textContent = new Date().getFullYear(); // 2021