function createTrackItem(index,name,duration){
    var trackItem = document.createElement('div');
    trackItem.setAttribute("class", "playlist-track-ctn");
    trackItem.setAttribute("id", "ptc-"+index);
    trackItem.setAttribute("data-index", index);
    document.querySelector(".playlist-ctn").appendChild(trackItem);

    var playBtnItem = document.createElement('div');
    playBtnItem.setAttribute("class", "playlist-btn-play");
    playBtnItem.setAttribute("id", "pbp-"+index);
    document.querySelector("#ptc-"+index).appendChild(playBtnItem);

    var btnImg = document.createElement('i');
    btnImg.setAttribute("class", "fas fa-play");
    btnImg.setAttribute("width", "40");
    btnImg.setAttribute("id", "p-img-"+index);
    document.querySelector("#pbp-"+index).appendChild(btnImg);

    var trackInfoItem = document.createElement('div');
    trackInfoItem.setAttribute("class", "playlist-info-track");
    trackInfoItem.innerHTML = name
    document.querySelector("#ptc-"+index).appendChild(trackInfoItem);

    var trackDurationItem = document.createElement('div');
    trackDurationItem.setAttribute("class", "playlist-duration");
    trackDurationItem.innerHTML = duration
    document.querySelector("#ptc-"+index).appendChild(trackDurationItem);
  }

  var listAudio = [
    {
      name:"Любить",
      file:"https://disk.gozle.com.tm/api/v1/file-entries/download/NjEwODl8cGFkZA?shareable_link=2046.mp3",
      duration:"1:58"
    },
    {
      name:"Милашка",
      file:"https://disk.gozle.com.tm/api/v1/file-entries/download/NjExNDZ8cGFkZA?shareable_link=2070.mp3",
      duration:"1:47"
    },
    {
      name:"Клинок рассекающий демонов",
      file:"https://disk.gozle.com.tm/api/v1/file-entries/download/NjExNDd8cGFkZA?shareable_link=2071.mp3",
      duration:"3:08"
    },

    {
    name:"Arthas Mode",
    file:"https://disk.gozle.com.tm/api/v1/file-entries/download/NjExNDh8cGFkZA?shareable_link=2072.mp3",
    duration:"2:42"
    },
    {
    name:"Как же хочется каточку",
    file:"https://disk.gozle.com.tm/api/v1/file-entries/download/NjExNDl8cGFkZA?shareable_link=2073.mp3",
    duration:"3:16"
    },
    {
    name:"Waveform",
    file:"https://disk.gozle.com.tm/api/v1/file-entries/download/NjExNTB8cGFkZA?shareable_link=2074.mp3",
    duration:"1:53"
    },
    {
    name:"Беды с башкой",
    file:"https://disk.gozle.com.tm/api/v1/file-entries/download/NjExNTJ8cGFkZA?shareable_link=2075.mp3",
    duration:"2:31"
    },
    {
    name:"Лучик",
    file:"https://disk.gozle.com.tm/api/v1/file-entries/download/NjExNTN8cGFkZA?shareable_link=2076.mp3",
    duration:"2:52"
    },
    {
    name:"Руки на стол",
    file:"https://disk.gozle.com.tm/api/v1/file-entries/download/NjExNTR8cGFkZA?shareable_link=2077.mp3",
    duration:"1:47"
    },
    {
    name:"Герой из аниме",
    file:"https://disk.gozle.com.tm/api/v1/file-entries/download/NjExNTV8cGFkZA?shareable_link=2078.mp3",
    duration:"2:46"
    },
    {
    name:"Terrorblade",
    file:"https://disk.gozle.com.tm/api/v1/file-entries/download/NjExNTd8cGFkZA?shareable_link=2079.mp3",
    duration:"2:10"
    },
    {
    name:"Кинь мне крест",
    file:"https://disk.gozle.com.tm/api/v1/file-entries/download/NjExNTh8cGFkZA?shareable_link=2080.mp3",
    duration:"2:21"
    },
    {
    name:"Пиво",
    file:"https://disk.gozle.com.tm/api/v1/file-entries/download/NjExNTl8cGFkZA?shareable_link=2081.mp3",
    duration:"2:30"
    },
    {
    name:"Сларк",
    file:"https://disk.gozle.com.tm/api/v1/file-entries/download/NjExNjB8cGFkZA?shareable_link=2082.mp3",
    duration:"2:15"
    },
    {
    name:"Трон",
    file:"https://disk.gozle.com.tm/api/v1/file-entries/download/NjExNjF8cGFkZA?shareable_link=2083.mp3",
    duration:"2:25"
    },






  ]

  for (var i = 0; i < listAudio.length; i++) {
      createTrackItem(i,listAudio[i].name,listAudio[i].duration);
  }
  var indexAudio = 0;

  function loadNewTrack(index){
    var player = document.querySelector('#source-audio')
    player.src = listAudio[index].file
    document.querySelector('.title').innerHTML = listAudio[index].name
    this.currentAudio = document.getElementById("myAudio");
    this.currentAudio.load()
    this.toggleAudio()
    this.updateStylePlaylist(this.indexAudio,index)
    this.indexAudio = index;
  }

  var playListItems = document.querySelectorAll(".playlist-track-ctn");

  for (let i = 0; i < playListItems.length; i++){
    playListItems[i].addEventListener("click", getClickedElement.bind(this));
  }

  function getClickedElement(event) {
    for (let i = 0; i < playListItems.length; i++){
      if(playListItems[i] == event.target){
        var clickedIndex = event.target.getAttribute("data-index")
        if (clickedIndex == this.indexAudio ) { // alert('Same audio');
            this.toggleAudio()
        }else{
            loadNewTrack(clickedIndex);
        }
      }
    }
  }

  document.querySelector('#source-audio').src = listAudio[indexAudio].file
  document.querySelector('.title').innerHTML = listAudio[indexAudio].name


  var currentAudio = document.getElementById("myAudio");

  currentAudio.load()
  
  currentAudio.onloadedmetadata = function() {}.bind(this);
  var interval1;

  function toggleAudio() {

    if (this.currentAudio.paused) {
      document.querySelector('#icon-play').style.display = 'none';
      document.querySelector('#icon-pause').style.display = 'block';
      document.querySelector('#ptc-'+this.indexAudio).classList.add("active-track");
      this.playToPause(this.indexAudio)
      this.currentAudio.play();
    }else{
      document.querySelector('#icon-play').style.display = 'block';
      document.querySelector('#icon-pause').style.display = 'none';
      this.pauseToPlay(this.indexAudio)
      this.currentAudio.pause();
    }
  }

  function pauseAudio() {
    this.currentAudio.pause();
    clearInterval(interval1);
  }

  var timer = document.getElementsByClassName('timer')[0]

  var barProgress = document.getElementById("myBar");


  var width = 0;

  function onTimeUpdate() {
    var t = this.currentAudio.currentTime
    timer.innerHTML = this.getMinutes(t);
    this.setBarProgress();
    if (this.currentAudio.ended) {
      document.querySelector('#icon-play').style.display = 'block';
      document.querySelector('#icon-pause').style.display = 'none';
      this.pauseToPlay(this.indexAudio)
      if (this.indexAudio < listAudio.length-1) {
          var index = parseInt(this.indexAudio)+1
          this.loadNewTrack(index)
      }
    }
  }




  function seek(event) {
    var percent = event.offsetX / progressbar.offsetWidth;
    this.currentAudio.currentTime = percent * this.currentAudio.duration;
    barProgress.style.width = percent*100 + "%";
  }

  function forward(){
    this.currentAudio.currentTime = this.currentAudio.currentTime + 5
    this.setBarProgress();
  }

  function rewind(){
    this.currentAudio.currentTime = this.currentAudio.currentTime - 5
    this.setBarProgress();
  }


  function next(){
    if (this.indexAudio <listAudio.length-1) {
        var oldIndex = this.indexAudio
        this.indexAudio++;
        updateStylePlaylist(oldIndex,this.indexAudio)
        this.loadNewTrack(this.indexAudio);
    }
  }

  function previous(){
    if (this.indexAudio>0) {
        var oldIndex = this.indexAudio
        this.indexAudio--;
        updateStylePlaylist(oldIndex,this.indexAudio)
        this.loadNewTrack(this.indexAudio);
    }
  }

  function updateStylePlaylist(oldIndex,newIndex){
    document.querySelector('#ptc-'+oldIndex).classList.remove("active-track");
    this.pauseToPlay(oldIndex);
    document.querySelector('#ptc-'+newIndex).classList.add("active-track");
    this.playToPause(newIndex)
  }

  function playToPause(index){
    var ele = document.querySelector('#p-img-'+index)
    ele.classList.remove("fa-play");
    ele.classList.add("fa-pause");
  }

  function pauseToPlay(index){
    var ele = document.querySelector('#p-img-'+index)
    ele.classList.remove("fa-pause");
    ele.classList.add("fa-play");
  }


  function toggleMute(){
    var btnMute = document.querySelector('#toggleMute');
    var volUp = document.querySelector('#icon-vol-up');
    var volMute = document.querySelector('#icon-vol-mute');
    if (this.currentAudio.muted == false) {
       this.currentAudio.muted = true
       volUp.style.display = "none"
       volMute.style.display = "block"
    }else{
      this.currentAudio.muted = false
      volMute.style.display = "none"
      volUp.style.display = "block"
    }
  }
