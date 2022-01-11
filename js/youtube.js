// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
  // <div id="player"></div>
  new YT.Player("player", {
    height: "360",
    width: "640",
    // url에서 맨 뒤에 아이디만 복사
    videoId: "An6LvWQuj_8", //최초 재생할 유튜브 영상 ID
    playerVars: {
      autoplay: true,
      loop: true,
      playlist: "An6LvWQuj_8",
    },
    events: {
      // 영상이 준비가 되면 익명의 함수가 실행이 되고, 영상을 음소거 처리하겠다
      onReady: function (event) {
        event.target.mute(); // 음소거
      },
    },
  });
}
