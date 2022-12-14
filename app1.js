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
        name: "Паразит",
        source: "https://disk.gozle.com.tm/api/v1/file-entries/download/NjQ0MDB8cGFkZA?shareable_link=2263&password=null.mp3",
        cover: "https://disk.gozle.com.tm/api/v1/file-entries/download/NjExNzN8cGFkZA?shareable_link=2087.png"
    },
    {
        name: "Acid Eyes",
        source: "https://disk.gozle.com.tm/api/v1/file-entries/download/NjQzOTl8cGFkZA?shareable_link=2264&password=null.mp3",
        cover: "https://disk.gozle.com.tm/api/v1/file-entries/download/NjExNzN8cGFkZA?shareable_link=2087.png"
    },
    {
        name: "Эксперементы Лейн",
        source: "https://disk.gozle.com.tm/api/v1/file-entries/download/NjQzOTd8cGFkZA?shareable_link=2265&password=null.mp3",
        cover: "https://disk.gozle.com.tm/api/v1/file-entries/download/NjExNzN8cGFkZA?shareable_link=2087.png"
    },
    {
        name: "Хоть минуту",
        source: "https://disk.gozle.com.tm/api/v1/file-entries/download/NjQzOTV8cGFkZA?shareable_link=2266&password=null.mp3",
        cover: "https://disk.gozle.com.tm/api/v1/file-entries/download/NjExNzN8cGFkZA?shareable_link=2087.png"
    },
    {
        name: "Скучный",
        source: "https://disk.gozle.com.tm/api/v1/file-entries/download/NjQzOTN8cGFkZA?shareable_link=2267&password=null.mp3",
        cover: "https://disk.gozle.com.tm/api/v1/file-entries/download/NjExNzN8cGFkZA?shareable_link=2087.png"
    },
    {
        name: "Придуманное нигде",
        source: "https://disk.gozle.com.tm/api/v1/file-entries/download/NjQzOTJ8cGFkZA?shareable_link=2287&password=null.mp3",
        cover: "https://disk.gozle.com.tm/api/v1/file-entries/download/NjExNzN8cGFkZA?shareable_link=2087.png"
    },
    {
        name: "Позвони мне",
        source: "https://disk.gozle.com.tm/api/v1/file-entries/download/NjQzOTF8cGFkZA?shareable_link=2288&password=null.mp3",
        cover: "https://disk.gozle.com.tm/api/v1/file-entries/download/NjExNzN8cGFkZA?shareable_link=2087.png"
    },
    {
        name: "Диссоциативы",
        source: "https://disk.gozle.com.tm/api/v1/file-entries/download/NjQzOTB8cGFkZA?shareable_link=2289&password=null.mp3",
        cover: "https://disk.gozle.com.tm/api/v1/file-entries/download/NjExNzN8cGFkZA?shareable_link=2087.png"
    },
    {
        name: "А что если мы здохнем?",
        source: "https://disk.gozle.com.tm/api/v1/file-entries/download/NjQzODl8cGFkZA?shareable_link=2290&password=null.mp3",
        cover: "https://disk.gozle.com.tm/api/v1/file-entries/download/NjExNzN8cGFkZA?shareable_link=2087.png"
    },
    {
        name: "Till the night",
        source: "https://disk.gozle.com.tm/api/v1/file-entries/download/NjQzODh8cGFkZA?shareable_link=2291&password=null.mp3",
        cover: "https://disk.gozle.com.tm/api/v1/file-entries/download/NjExNzN8cGFkZA?shareable_link=2087.png"
    },
    {
        name: "Sweet Heart",
        source: "https://disk.gozle.com.tm/api/v1/file-entries/download/NjQzODd8cGFkZA?shareable_link=2292&password=null.mp3",
        cover: "https://disk.gozle.com.tm/api/v1/file-entries/download/NjExNzN8cGFkZA?shareable_link=2087.png"
    },
    {
        name: "Sailor Moon",
        source: "https://disk.gozle.com.tm/api/v1/file-entries/download/NjQzODZ8cGFkZA?shareable_link=2293&password=null.mp3",
        cover: "https://disk.gozle.com.tm/api/v1/file-entries/download/NjExNzN8cGFkZA?shareable_link=2087.png"
    },
    {
        name: "Ok",
        source: "https://disk.gozle.com.tm/api/v1/file-entries/download/NjQzODV8cGFkZA?shareable_link=2294&password=null.mp3",
        cover: "https://disk.gozle.com.tm/api/v1/file-entries/download/NjExNzN8cGFkZA?shareable_link=2087.png"
    },
    {
        name: "Miss Luna",
        source: "https://disk.gozle.com.tm/api/v1/file-entries/download/NjQzODR8cGFkZA?shareable_link=2295&password=null.mp3",
        cover: "https://disk.gozle.com.tm/api/v1/file-entries/download/NjExNzN8cGFkZA?shareable_link=2087.png"
    },
    {
        name: "Fiends",
        source: "https://disk.gozle.com.tm/api/v1/file-entries/download/NjQzODN8cGFkZA?shareable_link=2296&password=null.mp3",
        cover: "https://disk.gozle.com.tm/api/v1/file-entries/download/NjExNzN8cGFkZA?shareable_link=2087.png"
    },
    {
        name: "Falling",
        source: "https://disk.gozle.com.tm/api/v1/file-entries/download/NjQzODJ8cGFkZA?shareable_link=2297&password=null.mp3",
        cover: "https://disk.gozle.com.tm/api/v1/file-entries/download/NjExNzN8cGFkZA?shareable_link=2087.png"
    },
    {
        name: "Cyberbaby",
        source: "https://disk.gozle.com.tm/api/v1/file-entries/download/NjQzODF8cGFkZA?shareable_link=2298&password=null.mp3",
        cover: "https://disk.gozle.com.tm/api/v1/file-entries/download/NjExNzN8cGFkZA?shareable_link=2087.png"
    },
    {
        name: "Katana",
        source: "https://disk.gozle.com.tm/api/v1/file-entries/download/NjQzODB8cGFkZA?shareable_link=2299&password=null.mp3",
        cover: "https://disk.gozle.com.tm/api/v1/file-entries/download/NjExNzN8cGFkZA?shareable_link=2087.png"
    },
    {
        name: "Слышу как ты дышишь",
        source: "https://disk.gozle.com.tm/api/v1/file-entries/download/NjQzNzl8cGFkZA?shareable_link=2300&password=null.mp3",
        cover: "https://disk.gozle.com.tm/api/v1/file-entries/download/NjExNzN8cGFkZA?shareable_link=2087.png"
    },
    {
        name: "Неверно",
        source: "https://disk.gozle.com.tm/api/v1/file-entries/download/NjQzNzh8cGFkZA?shareable_link=2301&password=null.mp3",
        cover: "https://disk.gozle.com.tm/api/v1/file-entries/download/NjExNzN8cGFkZA?shareable_link=2087.png"
    },
    {
        name: "Прости меня",
        source: "https://disk.gozle.com.tm/api/v1/file-entries/download/NjQzNzd8cGFkZA?shareable_link=2302&password=null.mp3",
        cover: "https://disk.gozle.com.tm/api/v1/file-entries/download/NjExNzN8cGFkZA?shareable_link=2087.png"
    },
    {
        name: "Tokyo Ghoul",
        source: "https://disk.gozle.com.tm/api/v1/file-entries/download/NjQzNzZ8cGFkZA?shareable_link=2303&password=null.mp3",
        cover: "https://disk.gozle.com.tm/api/v1/file-entries/download/NjExNzN8cGFkZA?shareable_link=2087.png"
    },
    {
        name: "2DWORLD",
        source: "https://disk.gozle.com.tm/api/v1/file-entries/download/NjQzNzV8cGFkZA?shareable_link=2304&password=null.mp3",
        cover: "https://disk.gozle.com.tm/api/v1/file-entries/download/NjExNzN8cGFkZA?shareable_link=2087.png"
    },
    {
        name: "Форма голоса",
        source: "https://disk.gozle.com.tm/api/v1/file-entries/download/NjQzNzR8cGFkZA?shareable_link=2305&password=null.mp3",
        cover: "https://disk.gozle.com.tm/api/v1/file-entries/download/NjExNzN8cGFkZA?shareable_link=2087.png"
    },
    {
        name: "Твое Имя",
        source: "https://disk.gozle.com.tm/api/v1/file-entries/download/NjQzNzN8cGFkZA?shareable_link=2306&password=null.mp3",
        cover: "https://disk.gozle.com.tm/api/v1/file-entries/download/NjExNzN8cGFkZA?shareable_link=2087.png"
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



/*__________________________________________________________________________________*/


var card = document.getElementById('activator');
        var tl = gsap.timeline({defaults: {ease: "power2.inOut"}})

        var toggle = false;

        tl.to('.activator', {
            background: '#805ad5',
            'borderRadius': '5em 0 0 5em'
        });
        tl.to('nav', {
            'clipPath': 'ellipse(100% 100% at 50% 50%)'
        }, "-=.5")
        tl.to('nav img', {
            opacity: 1,
            transform: 'translateX(0)',
            stagger: .05
        }, "-=.5")
        tl.pause();

        card.addEventListener('click', () => {
            toggle = !toggle;
            if (toggle ? tl.play() : tl.reverse());
        })

   function myFunction() {
      // Declare variables
      var input, filter, span, a, i, txtValue;
      input = document.getElementById('myInput');
      filter = input.value.toUpperCase();
      span = document.getElementById("grid");
      span = span.getElementsByTagName('span');
    
      // Loop through all list items, and hide those who don't match the search query
      for (i = 0; i < span.length; i++) {
        a = span[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          span[i].style.display = "";
        } else {
          span[i].style.display = "none";
        }
      }
    }
