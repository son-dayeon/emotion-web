const musicData = {
  joy: [
    { title: '고백(Go Back)', artist: '다이나믹 듀오', gradient: 'linear-gradient(to right,rgb(255, 154, 72), #a6c1ee)', image: 'assets/icons/monkey.png',  audio: 'assets/music/goback.mp3' },
    { title: 'Hello Mr.my yesterday', artist: 'AllThatMerona', gradient: 'linear-gradient(to right,rgb(255, 34, 34),rgb(255, 243, 71))', image: 'assets/icons/bowtie.png', audio: 'assets/music/conan.mp3' },
    { title: 'Mars', artist: 'D.O.', gradient: 'linear-gradient(to right, #f7797d, #FBD786)', image: 'assets/icons/mars.png', audio: 'assets/music/mars.mp3' },
    { title: '몽환의 숲', artist: '키네틱 플로우', gradient: 'linear-gradient(to right,rgb(173, 125, 210),rgb(103, 105, 215), #667db6)', image: 'assets/icons/flower.png', audio: 'assets/music/forest.mp3' },
    { title: 'Again? Again!', artist: 'Xdinary Heroes', gradient: 'linear-gradient(to right,rgb(255, 77, 37),rgb(0, 0, 0))', image: 'assets/icons/heart.png', audio: 'assets/music/againagain.mp3' }
  ],
  anger: [   { title: '범퍼카', artist: '한요한', gradient: 'linear-gradient(to right,rgb(175, 0, 0),rgb(255, 117, 117))', image: 'assets/icons/car.png',  audio: 'assets/music/bumpercar.mp3' },
    { title: '400km', artist: '한요한', gradient: 'linear-gradient(to right,rgb(60, 190, 255),rgb(207, 244, 255))', image: 'assets/icons/400km.png', audio: 'assets/music/400km.mp3' },
    { title: '파이팅해야지', artist: '부석순', gradient: 'linear-gradient(to right,rgb(128, 87, 254),rgb(107, 255, 151))', image: 'assets/icons/fighting.png', audio: 'assets/music/fighting.mp3' },
    { title: 'Wish You Hell', artist: '웬디', gradient: 'linear-gradient(to right,rgb(255, 115, 171),rgb(97, 229, 255), #667db6)', image: 'assets/icons/angel.png', audio: 'assets/music/wishyouhell.mp3' },
    { title: '네모의 꿈', artist: '화이트', gradient: 'linear-gradient(to right,rgb(173, 255, 105),rgb(211, 255, 153))', image: 'assets/icons/nemo.png', audio: 'assets/music/nemo.mp3' }],
  sadness: [   { title: 'Lost Stars', artist: 'Adam Levine', gradient: 'linear-gradient(to right,rgb(248, 255, 60),rgb(253, 255, 245))', image: 'assets/icons/star.png',  audio: 'assets/music/loststars.mp3' },
    { title: '괜찮아도 괜찮아', artist: 'D.O.', gradient: 'linear-gradient(to right,rgb(16, 58, 71),rgb(16, 124, 156))', image: 'assets/icons/cloud.png', audio: 'assets/music/thatsokay.mp3' },
    { title: '자각몽', artist: '유아', gradient: 'linear-gradient(to right,rgb(255, 78, 234),rgb(185, 134, 251))', image: 'assets/icons/dream.png', audio: 'assets/music/dream.mp3' },
    { title: 'Dali, Van, Picasso', artist: '빈지노', gradient: 'linear-gradient(to right,rgb(0, 194, 155),rgb(142, 240, 44), #667db6)', image: 'assets/icons/van.png', audio: 'assets/music/DaliVanPicasso.mp3' },
    { title: 'Circus', artist: '태연', gradient: 'linear-gradient(to right,rgb(43, 26, 154),rgb(222, 222, 222))', image: 'assets/icons/circus.png', audio: 'assets/music/circus.mp3' }],
  fun: [   { title: '질풍가도', artist: '유정석', gradient: 'linear-gradient(to right,rgb(255, 154, 72),rgb(76, 44, 255))', image: 'assets/icons/naruto.png',  audio: 'assets/music/wind.mp3' },
    { title: 'Beautiful Christmas', artist: 'Red Velvet, aespa', gradient: 'linear-gradient(to right,rgb(0, 190, 51),rgb(255, 25, 25))', image: 'assets/icons/christmas.png', audio: 'assets/music/christmas.mp3' },
    { title: 'Hold On Tight', artist: 'aespa', gradient: 'linear-gradient(to right,rgb(255, 21, 247),rgb(146, 37, 255))', image: 'assets/icons/tetris.png', audio: 'assets/music/tetris.mp3' },
    { title: '不可幸力', artist: 'Vaundy', gradient: 'linear-gradient(to right,hsl(187, 100.00%, 72.70%),rgb(255, 75, 186), #667db6)', image: 'assets/icons/bird.png', audio: 'assets/music/vaundy.mp3' },
    { title: 'Journey', artist: 'WOODZ', gradient: 'linear-gradient(to right,rgb(92, 255, 209),rgb(57, 27, 255))', image: 'assets/icons/journey.png', audio: 'assets/music/journey.mp3' }]
};

window.onload = () => {
  document.getElementById('menu-toggle').addEventListener('click', toggleMenu);
  setEmotion('joy');
};

function toggleMenu() {
  document.getElementById('emotion-menu').classList.toggle('hidden');
}

function setEmotion(emotion) {
  document.getElementById('current-emotion').textContent = {
    joy: '喜',
    anger: '怒',
    sadness: '哀',
    fun: '樂'
  }[emotion];

  const container = document.getElementById('image-area');
  container.innerHTML = '';

  clearInterval(window.spawnInterval);
  window.spawnInterval = setInterval(() => {
    const track = musicData[emotion][Math.floor(Math.random() * musicData[emotion].length)];
    spawnFloatingIcon(track);
  }, 800);

  document.getElementById('emotion-menu').classList.add('hidden');
}







function spawnFloatingIcon(track) {
  const container = document.getElementById('image-area');
  const icon = document.createElement('div');
  icon.className = 'emotion-icon';

  // 🎯 info 태그 포함!
  icon.innerHTML = `
    <img src="${track.image}" alt="${track.title}" class="icon-img" />
    <div class="info">${track.title}<hr>${track.artist}</div>
  `;

  // 아이콘 위치 초기값 (중앙)
  const centerX = container.clientWidth / 2;
  const centerY = container.clientHeight / 2;
  icon.style.left = `${centerX - 70}px`; // 아이콘 크기 고려
  icon.style.top = `${centerY - 70}px`;
  icon.style.transform = `translate(0px, 0px) scale(0.5)`;
  icon.style.transition = 'transform 17s ease-out, opacity 0.5s ease-in';

  icon.style.opacity = '0';

  container.appendChild(icon);

  // 강제 Reflow로 transition 작동 유도
  icon.getBoundingClientRect();

  // 퍼질 방향 계산
  const angle = Math.random() * Math.PI * 2;
  const distance = 1500 + Math.random() * 400;
  const dx = Math.cos(angle) * distance;
  const dy = Math.sin(angle) * distance;

  // 퍼져나가는 애니메이션
  icon.style.transform = `translate(${dx}px, ${dy}px) scale(2)`;
  icon.style.opacity = '1';


  icon.addEventListener('click', () => {
    document.getElementById('track-info').innerText = `${track.title} - ${track.artist}`;
    document.body.style.background = track.gradient || 'white';
  
    const audioPlayer = document.getElementById('audio-player');
    if (track.audio) {
      audioPlayer.src = track.audio;
      audioPlayer.play();
    } else {
      audioPlayer.pause();
      audioPlayer.removeAttribute('src');
    }
  
    // ✅ 흐릿한 배경 아이콘 표시
    const bg = document.getElementById('selected-background');
    bg.style.backgroundImage = `url('${track.image}')`;
  });

  

  // 서서히 사라짐
  setTimeout(() => {
    icon.style.opacity = '0';
  }, 10000);

  // 제거
  setTimeout(() => {
    icon.remove();
  }, 16000);
}





