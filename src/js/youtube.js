/* youtube iframe api를 사용한 비동기 로드 */
var tag = document.createElement('script');

  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// onYouTubeIframeAPIReady() 함수 이름은 youtube iframe player api에서 사용하는 이름이기 때문에 다르게 지정하면 동작하지 않는다. 그리고 함수는 전역으로 등록되어야 한다는 점 주의

  function onYouTubeIframeAPIReady() {
   new YT.Player('player', {
      videoId: 'An6LvWQuj_8', /* 최초 재생할 유튜브 영상 id */
      playerVars: {
        autoplay: true,
        loop: true,
        playList : 'An6LvWQuj_8' /* 반복재생할 유튜브 영상 id 목록 */
      },
      events: {
      // 영상이 준비되었을 때
      onReady : function(event) {
        event.target.mute();
      }
    }
  });
};
