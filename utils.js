

// TIME FUNCTION
    function display_ct6() {
        var x = new Date()
        var ampm = x.getHours( ) >= 12 ? ' PM' : ' AM';
            hours = x.getHours( ) % 12;
            hours = hours ? hours : 12;
            mins = ('0'+x.getMinutes()).slice(-2)
        var x1=hours + ":" +  mins + ampm;
        document.getElementById('currentTime').innerHTML = x1;
        display_c6();
         }
      function display_c6(){
        var refresh=1000; // Refresh rate in milli seconds
        mytime=setTimeout('display_ct6()',refresh)
        }
        display_c6();

// DATE FUNCTION
      var today = new Date();
      var date =(today.getMonth()+1)+'/'+today.getDate()+'/'+today.getFullYear();
      document.getElementById("currentDate").innerHTML = date;
      
// DROPUP MENUS
      /* When the user clicks on the button, 
      toggle between hiding and showing the dropdown content */
      function showIcons() {
        document.getElementById("moreIcons").classList.toggle("show");
      }

      function showWifi() {
        document.getElementById("myWifi").classList.toggle("show");
      }

      function showPlayer() {
        document.getElementById("myPlayer").classList.toggle("show");
      }
      
      // Close the dropdown if the user clicks outside of it
      window.onclick = function(event) {
        if (!event.target.closest('.more-icons')) {
            var dropdowns = document.getElementsByClassName("dropup-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
            }
          }
        }
      };

// SOUND PLAYER

    // variable for button containing player
    const playerIconContainer = document.getElementById('playerContainer');
    //variable for button containing sound control
    const sounderIconContainer = document.getElementById('soundContainer');
    // variable for the play icon
    const playerIcon = document.getElementById('player');
    // variable for the sound icon
    const soundControl = document.getElementsByClassName('sound');
    // variable for audio
    const playerAudio = document.getElementById('playerAudio');
    const audioPlayerContainer = document.getElementById('audio-player-container');
    const seekSlider = document.getElementById('seek-slider');
    let state = 'play';
    let sound = 'on';
    //console.log(seekSlider.value);

    playerIconContainer.addEventListener('click', () => {
        if (state === 'play') {
            $(playerIcon).removeClass('fa-play');
            $(playerIcon).addClass('fa-pause');
            playerAudio.play();
            requestAnimationFrame(whilePlaying);
            state = 'pause';
        } else {
            $(playerIcon).removeClass('fa-pause');
            $(playerIcon).addClass('fa-play');
            playerAudio.pause();
            cancelAnimationFrame(raf);
            state = 'play';
        }
    });

    sounderIconContainer.addEventListener('click', () => {
        if (sound === 'on') {
            $(soundControl).removeClass('fa-volume-up');
            $(soundControl).addClass('fa-volume-mute');
            playerAudio.muted = true;
            sound = 'off';
        } else {
            $(soundControl).removeClass('fa-volume-mute');
            $(soundControl).addClass('fa-volume-up');
            playerAudio.muted = false;
            sound = 'on';
        }
    });
    const showRangeProgress = (rangeInput) => {
        if(rangeInput === seekSlider) audioPlayerContainer.style.setProperty('--seek-before-width', rangeInput.value / rangeInput.max * 100 + '%');
        else console.log("how")
    }

    seekSlider.addEventListener('input', (e) => {
        showRangeProgress(e.target);
    });

    /** Implementation of the functionality of the audio player */

    const durationContainer = document.getElementById('duration');
    const currentTimeContainer = document.getElementById('current-song-time');
    let raf = null;


    const calculateTime = (secs) => {
        const minutes = Math.floor(secs / 60);
        const seconds = Math.floor(secs % 60);
        const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
        return `${minutes}:${returnedSeconds}`;
    }

    const displayDuration = () => {
        durationContainer.textContent = calculateTime(playerAudio.duration);
    }

    const setSliderMax = () => {
        seekSlider.max = Math.floor(playerAudio.duration);
    }

    const displayBufferedAmount = () => {
        const bufferedAmount = Math.floor(playerAudio.buffered.end(playerAudio.buffered.length - 1));
        audioPlayerContainer.style.setProperty('--buffered-width', `${(bufferedAmount / seekSlider.max) * 100}%`);
    } 

    const whilePlaying = () => {
        seekSlider.value = Math.floor(playerAudio.currentTime);
        currentTimeContainer.textContent = calculateTime(seekSlider.value);
        audioPlayerContainer.style.setProperty('--seek-before-width', `${seekSlider.value / seekSlider.max * 100}%`);
        raf = requestAnimationFrame(whilePlaying);
    }

    if (playerAudio.readyState > 0) {
        displayDuration();
        setSliderMax();
        displayBufferedAmount();
    } else {
        playerAudio.addEventListener('loadedmetadata', () => {
            displayDuration();
            setSliderMax();
            displayBufferedAmount();
        });
    }

    playerAudio.addEventListener('progress', displayBufferedAmount);

    seekSlider.addEventListener('input', () => {
        currentTimeContainer.textContent = calculateTime(seekSlider.value);
        if(!playerAudio.paused) {
            cancelAnimationFrame(raf);
        }
    });


    seekSlider.addEventListener('change', () => {
        playerAudio.currentTime = seekSlider.value;
        if(!playerAudio.paused) {
            requestAnimationFrame(whilePlaying);
        }
    });

    //make toggle class for changing audio