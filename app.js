// media controllers
const playPause = document.querySelector("#play-stop");
const backward = document.querySelector("#backward");
const forward = document.querySelector("#forward");

// record player animation
const circleBig = document.querySelector("#circle-bg");
const circleSm = document.querySelector("#circle-sm");

// playing song
const songName = document.querySelector("#song-name");
const audio = document.querySelector("#audio");
const coverArt = document.querySelector("#cover");
const musicbox = document.querySelector("#musicbox");

// control button images
let playImg = "https://disk.gozle.com.tm/api/v1/file-entries/download/NjM2MTN8cGFkZA?shareable_link=2212.png";
let pauseImg = "https://disk.gozle.com.tm/api/v1/file-entries/download/NjM2MTR8cGFkZA?shareable_link=2213.png";

// default controls
playPause.src = playImg;
let isPlaying = true;

const songList = [
    {
        name: "Любить",
        source: "https://disk.gozle.com.tm/api/v1/file-entries/download/NjEwODl8cGFkZA?shareable_link=2046.mp3",
        cover: "https://disk.gozle.com.tm/api/v1/file-entries/download/NjExNjl8cGFkZA?shareable_link=2085.png"
    },
    {
        name: "Милашка",
        source: "https://disk.gozle.com.tm/api/v1/file-entries/download/NjExNDZ8cGFkZA?shareable_link=2070.mp3",
        cover: "https://disk.gozle.com.tm/api/v1/file-entries/download/NjExNjl8cGFkZA?shareable_link=2085.png"
    },
    {
        name: "Клинок рассекающий демонов",
        source: "https://disk.gozle.com.tm/api/v1/file-entries/download/NjExNDd8cGFkZA?shareable_link=2071.mp3",
        cover: "https://disk.gozle.com.tm/api/v1/file-entries/download/NjExNjl8cGFkZA?shareable_link=2085.png"
    },
    {
        name: "Arthas Mode",
        source: "https://disk.gozle.com.tm/api/v1/file-entries/download/NjExNDh8cGFkZA?shareable_link=2072.mp3",
        cover: "https://disk.gozle.com.tm/api/v1/file-entries/download/NjExNjl8cGFkZA?shareable_link=2085.png"
    },
    {
        name: "Как же хочется каточку",
        source: "https://disk.gozle.com.tm/api/v1/file-entries/download/NjExNDl8cGFkZA?shareable_link=2073.mp3",
        cover: "https://disk.gozle.com.tm/api/v1/file-entries/download/NjExNjl8cGFkZA?shareable_link=2085.png",
    },
    {
        name: "Waveform",
        source: "https://disk.gozle.com.tm/api/v1/file-entries/download/NjExNTB8cGFkZA?shareable_link=2074.mp3",
        cover: "https://disk.gozle.com.tm/api/v1/file-entries/download/NjExNjl8cGFkZA?shareable_link=2085.png"
    },
    {
        name: "Беды с башкой",
        source: "https://disk.gozle.com.tm/api/v1/file-entries/download/NjExNTJ8cGFkZA?shareable_link=2075.mp3",
        cover: "https://disk.gozle.com.tm/api/v1/file-entries/download/NjExNjl8cGFkZA?shareable_link=2085.png"
    },
    {
        name: "Лучик",
        source: "https://disk.gozle.com.tm/api/v1/file-entries/download/NjExNTN8cGFkZA?shareable_link=2076.mp3",
        cover: "https://disk.gozle.com.tm/api/v1/file-entries/download/NjExNjl8cGFkZA?shareable_link=2085.png"
    },
    {
        name: "Руки на стол",
        source: "https://disk.gozle.com.tm/api/v1/file-entries/download/NjExNTR8cGFkZA?shareable_link=2077.mp3",
        cover: "https://disk.gozle.com.tm/api/v1/file-entries/download/NjExNjl8cGFkZA?shareable_link=2085.png"
    },
    {
        name: "Герой из аниме",
        source: "https://disk.gozle.com.tm/api/v1/file-entries/download/NjExNTV8cGFkZA?shareable_link=2078.mp3",
        cover: "https://disk.gozle.com.tm/api/v1/file-entries/download/NjExNjl8cGFkZA?shareable_link=2085.png"
    },
    {
        name: "Terrorblade",
        source: "https://disk.gozle.com.tm/api/v1/file-entries/download/NjExNTd8cGFkZA?shareable_link=2079.mp3",
        cover: "https://disk.gozle.com.tm/api/v1/file-entries/download/NjExNjl8cGFkZA?shareable_link=2085.png"
    },
    {
        name: "Кинь мне крест",
        source: "https://disk.gozle.com.tm/api/v1/file-entries/download/NjExNTh8cGFkZA?shareable_link=2080.mp3",
        cover: "https://disk.gozle.com.tm/api/v1/file-entries/download/NjExNjl8cGFkZA?shareable_link=2085.png"
    },
    {
        name: "Пиво",
        source: "https://disk.gozle.com.tm/api/v1/file-entries/download/NjExNTl8cGFkZA?shareable_link=2081.mp3",
        cover: "https://disk.gozle.com.tm/api/v1/file-entries/download/NjExNjl8cGFkZA?shareable_link=2085.png"
    },
    {
        name: "Сларк",
        source: "https://disk.gozle.com.tm/api/v1/file-entries/download/NjExNjB8cGFkZA?shareable_link=2082.mp3",
        cover: "https://disk.gozle.com.tm/api/v1/file-entries/download/NjExNjl8cGFkZA?shareable_link=2085.png"
    },
    {
        name: "Трон",
        source: "https://disk.gozle.com.tm/api/v1/file-entries/download/NjExNjF8cGFkZA?shareable_link=2083.mp3",
        cover: "https://disk.gozle.com.tm/api/v1/file-entries/download/NjExNjl8cGFkZA?shareable_link=2085.png"
    },

];
// helper function
function createEle(ele) {
    return document.createElement(ele);
}
function append(parent, child) {
    return parent.append(child);
}
// creating track list
const ul = createEle('ul')
function createPlayList() {
    songList.forEach((song) => {
        let h3 = createEle('a');
        let li = createEle('li');

        li.classList.add("track-item");
        h3.innerText = song.name;
        append(li,h3);
        append(ul,li)
    })
    append(musicbox, ul);
}

let songIndex = 0;
// preloaded song
loadMusic(songList[songIndex]);


function loadMusic() {
    coverArt.src = songList[songIndex].cover;
    songName.innerText = songList[songIndex].name;
    audio.src = songList[songIndex].source;
}

function playSong() {
    playPause.src = pauseImg;
    circleBig.classList.add("animate");
    circleSm.classList.add("animate");

    audio.play();
}

function pauseSong() {
    playPause.src = playImg;
    circleBig.classList.remove("animate");
    circleSm.classList.remove("animate");

    audio.pause();
}

function nextPlay() {
    songIndex++;
    if(songIndex > songList.length - 1) {
        songIndex = 0;
    }
    loadMusic(songList[songIndex]);
    playSong()
}

function backPlay() {
    songIndex--;
    if(songIndex < 0) {
        songIndex = songList.length - 1;
    }
    loadMusic(songList[songIndex]);
    playSong()
}
function playHandler() {
    isPlaying = !isPlaying;
    //console.log("Change: ",isPlaying)
    isPlaying ? pauseSong() : playSong();
}


// player event 
playPause.addEventListener("click", playHandler);
backward.addEventListener("click", backPlay);
forward.addEventListener("click", nextPlay);

createPlayList()
