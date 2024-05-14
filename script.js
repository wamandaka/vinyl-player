document.addEventListener("DOMContentLoaded", function () {
  const audioPlayer = document.getElementById("audioPlayer");
  const playButton = document.getElementById("playButton");
  const pauseButton = document.getElementById("pauseButton");
  const playPauseButton = document.getElementById("playPauseButton");
  const lyricsDisplay = document.getElementById("lyricsDisplay");
  const spin = document.getElementById("spin");

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
    { time: 81, text: "ima anata ni omoi nosete" },
    { time: 85, text: "hora sunao ni naru no watashi" },
    { time: 90, text: "kono saki motto soba ni ite mo ii ka na?" },
    { time: 95, text: "koi to koi ga kasanatte" },
    { time: 99, text: "suki yo" },
    {
      time: 100,
      text: "malas ngetik. lirik lanjutan nya ada di link di bawah ini",
    },
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
      spin.classList.add("spin-effect");
    } else {
      spin.classList.remove("spin-effect");
      audioPlayer.pause();
    }
  });

  audioPlayer.addEventListener("timeupdate", function () {
    updateLyrics(audioPlayer.currentTime);
  });
});

const turnArm = document.getElementById("turn-arm");

turnArm.addEventListener("click", function () {
  if (turnArm.classList.contains("rotate-12")) {
    turnArm.classList.remove("rotate-12");
  } else {
    turnArm.classList.add("rotate-12");
  }
});
