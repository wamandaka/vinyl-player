const turnArm = document.getElementById("tone-arm");
const playBtn = document.getElementById("playBtn");
const vinyl = document.getElementById("vinyl");
const indicator = document.getElementById("indicator");
const audioPlayer = document.getElementById("audioPlayer");
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

audioPlayer.addEventListener("timeupdate", function () {
  updateLyrics(audioPlayer.currentTime);
});

audioPlayer.addEventListener("ended", function () {
  playBtn.click();
})

playBtn.addEventListener("click", function () {
  if (turnArm.classList.contains("rotate-12")) {
    turnArm.classList.remove("rotate-12");
    vinyl.classList.toggle("animate-spin");
    indicator.classList.replace("bg-green-600", "bg-red-600");
    playBtn.textContent = "START";
    playBtn.append(indicator);
    audioPlayer.pause();
  } else {
    turnArm.classList.add("animate-turnArmMovement");
    turnArm.classList.add("rotate-12");
    vinyl.classList.toggle("animate-spin");
    indicator.classList.replace("bg-red-600", "bg-green-600");
    playBtn.textContent = "PAUSE";
    playBtn.append(indicator);
    audioPlayer.play();
  }
});

const audioVolume = (amount) => {
  let adjustVolume = document.getElementsByTagName("audio")[0];
  adjustVolume.volume = amount;
};
