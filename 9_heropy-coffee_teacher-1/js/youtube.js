// Youtube Ifram API 비동기로 로드
// api를 사용하지 않고 iframe 태그만 써서 영상 삽입이 가능한데 태그 속성만으로 커스텀하기에 한계가 있음
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    // height: '360',
    // width: '640',
    videoId: '_YuNSVDJOaM',
    events: {
      // 'onReady': onPlayerReady,
      // 'onStateChange': onPlayerStateChange
    },
    playVars: { // 자세한 옵션은 플레이어 매개 변수 메뉴 확인
      autoplay: true, // 자동재생 유무
      loop: true, // 반복 재생 유무(아래 플레이이스트 옵션 필수)
      playlist: '_YuNSVDJOaM' // 반복 재생할 유튜브 영상ID 목록
    }, 
    event: {
      // 영상이 준비되었을 때(재생 될 때)
      onReady: function (event) {
        event.target.mute(); //음소거 시키기
      }
    }
  });
}

// 유튜브 섹션 위에 부유 요소 애니메이션 처리

  gsap.to('.floating1', 1.5, {
    delay: 1, //얼마나 늦게 애니메이션을 시작할 겻인지 지연시간 지정
    y: 15, // 수직으로 얼마나 움직일지 설정
    repeat:-1, // 몇번 반복할지 설정, -1은 무한 반복
    yoyo: true, // 한 번 재생되는 것을 다시 뒤로 재생
    ease: Power1.easeInout // Easing 함수 적용
  }); 

  gsap.to('.floating2', 1, {
    delay: 1, //얼마나 늦게 애니메이션을 시작할 겻인지 지연시간 지정
    y: 10, // 수직으로 얼마나 움직일지 설정
    repeat:-1, // 몇번 반복할지 설정, -1은 무한 반복
    yoyo: true, // 한 번 재생되는 것을 다시 뒤로 재생
    ease: Power1.easeInout // Easing 함수 적용
  }); 

  gsap.to('.floating3', 2, {
    delay: 1, //얼마나 늦게 애니메이션을 시작할 겻인지 지연시간 지정
    y: 20, // 수직으로 얼마나 움직일지 설정
    repeat:-1, // 몇번 반복할지 설정, -1은 무한 반복
    yoyo: true, // 한 번 재생되는 것을 다시 뒤로 재생
    ease: Power1.easeInout // Easing 함수 적용
  }); 
