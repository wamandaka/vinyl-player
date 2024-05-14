document.addEventListener("DOMContentLoaded", function () {
  const audioPlayer = document.getElementById("audioPlayer");
  const playButton = document.getElementById("playButton");
  const pauseButton = document.getElementById("pauseButton");
  const playPauseButton = document.getElementById("playPauseButton");
  const lyricsDisplay = document.getElementById("lyricsDisplay");

  // Define lyrics with timestamps
  const lyrics = [
    { time: 3, text: "intro" },
    { time: 22, text: "itsumo itooshii fushigina hitomi" },
    { time: 30, text: "zurui yo ne terekakushite me wo sorasu" },
    { time: 35, text: "sekai ga karafuru ni nuri kaw atteku" },
    { time: 41, text: "mune no oku zutto hajikete mahou mitai" },
    { time: 49, text: "nande ka na anata ni uketomete hoshii" },
    { time: 55, text: "kore ga koi desu ka? koi ga ii na" },
    { time: 60, text: "tooi you de chikaku ni ita" },
    { time: 65, text: "maru de unmei no you ni" },
    { time: 70, text: "itsu datte tonari ni ite" },
    { time: 74, text: "watashi dake wo mitsumete kureta ne" },
    { time: 80, text: "suki yo" },
    // Add more lyrics as needed with their respective timestamps
  ];

  // Update lyrics display
  function updateLyrics(currentTime) {
    for (let i = 0; i < lyrics.length; i++) {
      if (
        lyrics[i].time <= currentTime &&
        (i === lyrics.length - 1 || lyrics[i + 1].time > currentTime)
      ) {
        lyricsDisplay.textContent = lyrics[i].text;
        break;
      }
    }
  }

  // Play/pause button
  playPauseButton.addEventListener("click", function () {
    if (audioPlayer.paused) {
      audioPlayer.play();
    } else {
      audioPlayer.pause();
    }
  });

  audioPlayer.addEventListener("timeupdate", function () {
    updateLyrics(audioPlayer.currentTime);
  });
});
