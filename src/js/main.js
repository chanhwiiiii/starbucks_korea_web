
// 스크롤 값에 따라 뱃지 영역이 보이거나 안보이게 처리
const badgeEl = document.querySelector('header .badges');

// top scroll button
const toTopEl = document.querySelector('#to-top');

// 스크롤 이벤트가 발생하면 매번 값을 반환하는 것이 아닌,
// 콜백함수로 lodash의 throttle을 활용하여 0.3초마다 실행한 결과를 반환
// _.throttle(콜백함수, 시간)
window.addEventListener('scroll', _.throttle(function() {
  // 스크롤 값이 500이상이면 보이지 않게 처리하고 그렇지 않다면 보이게 처리
  if(window.scrollY>500) {
    // badgeEl.style.display = 'none';
    // 스크롤 값이 500이상이 되면 부드러운 효과를 적용
    // gsap.to(요소, 지속시간, {옵션})
    gsap.to(badgeEl, .6, {
      opacity:0,
      display : 'none'
    });
    gsap.to(toTopEl, .7, {
      x:0,
      opacity : 1,
    });
  } else {
    // badgeEl.style.display = 'block';
    gsap.to(badgeEl, .6, {
      opacity : 1,
      display : 'block'
    });
    gsap.to(toTopEl, .7, {
      x:100,
      opacity : 0
    });
  };
}, 300));

//top button click event -> scroll to top
toTopEl.addEventListener('click', function(){
  gsap.to(window, .7 , {
    //plugin이 연결되어야 작동
    scrollTo : 0
  });
});

// visual 영역의 이미지를 순차적으로 보여주도록 처리
// 이미지 영역을 fade--in으로 그룹화
const fadeIns = document.querySelectorAll('.visual .fade--in');

fadeIns.forEach(function(fadeEl, index){
  // gsap.to(요소, 지속시간, {옵션})
  gsap.to(fadeEl, 1, {
    // index를 활용해서 순차적으로 화면에 출력
    // 0.7, 1.4 , 2.1 ,2.8초 순으로
    delay : (index + 1) * 0.7,
    opacity : 1
  });
});

// 공지사항 부분의 슬라이드 구현
const swiper = new Swiper('.notice-line .swiper', {
  direction : 'vertical',
  autoplay : true,
  loop : true
});

// promotion swiper
const swiper2 = new Swiper('.promotion .swiper' ,{
  // direction: 'horizontal',
  slidesPerView: 3, // 보여줄 요소 3개
  spaceBetween: 10, // 슬라이드 사이의 여백
  centeredSlides: true, // 1번 슬라이드 가운데
  loop: true,
  autoplay: {
    delay: 5000
  },
  pagination: {
    el: '.promotion .swiper-pagination',
    // 페이지 표시(원)를 클릭하면 해당하는 슬라이드로 이동
    clickable: true 
  },
  navigation: {
    prevEl: '.promotion .swiper-button-prev',
    nextEl: '.promotion .swiper-button-next'
  }
});

//awards swiper
const swiper3 = new Swiper('.awards .swiper', {
  autoplay : true,
  loop : true,
  spaceBetween : 30,
  slidesPerView : 5,
  navigation : {
    prevEl : '.awards .swiper-button-prev',
    nextEl : '.awards .swiper-button-next'
  } 
});

// 토글버튼 클릭하면 프로모션 영역보이기&닫기
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');

let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function(){
  isHidePromotion = !isHidePromotion;
  if(isHidePromotion) {
    promotionEl.classList.add('hide');
  } else {
    promotionEl.classList.remove('hide');
  }
});


// 범위 내의 숫자를 랜덤함수(숫자 2자리까지)
// ramdom 함수 인자 최소값 최대값
function random(min,max) {
  // .toFixed()를 통한 반환된 문자 데이터 
  // parseFloat()를 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
};

// 유튜브 위 이미지 애니메이션 효과
// gsap,to(요소, 지속시간 , {옵션})
function floatingObject(selector, delay, size) {
  gsap.to(selector, random(1.5,2.5), {
    y : size,
    repeat : -1, //무한 반복, 자바스크립트에서 지원하는 동작
    yoyo : true, // 한번 재생된 애니메이션을 다시 실행
    //gsap의 easing효과
    ease: "power1.inOut",
    delay : random(0, delay)
  });
}

floatingObject('img.floating1', 1, 15);
floatingObject('img.floating2', .5, 15);
floatingObject('img.floating3', 1.5, 20);

//scrollMagic
const spyEls = document.querySelectorAll('.scroll-spy');

spyEls.forEach(function(spyEl){
  //Scene() 메소드를 통해 여러 객체들을 변화에 대한 감시옵션
  //addTo() 라이브러리를 사용하기 위한 옵션들
  new ScrollMagic
  .Scene({
    //보여질 여부를 검사, 요소를 지정
    triggerElement : spyEl,
    // 화면의 높이를 0에서 1이라 가정하면 적용위치 점을 0.8위치에 적용
    //기능이 걸려 있는 부분(실행 위치)
    triggerHook : .8
  })
  .setClassToggle(spyEl, 'show') //show 클래스를 높이에 따라 추가 또는 삭제
  .addTo(new ScrollMagic.Controller()); //새롭게 객체를 생성하고 객체를 감시, 제어
});



