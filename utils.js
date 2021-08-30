// RECYCLE BIN   
        var recycleBin = top.document.getElementById('recycle');
        let trash = 'full';

        if (recycleBin) {
            recycleBin.addEventListener('click', () => {
                if (trash === 'full') {
                    recycleBin.src = ("icons/trashempty.png");
                    trash = 'empty';
                } else {
                    recycleBin.src = ("icons/trashfull.png");
                    trash = 'full';
                }
            });
        };
        

// TIME FUNCTION
    var timeCurrent = top.document.getElementById('currentTime');
    var dateCurrent =  top.document.getElementById("currentDate")

    function display_ct6() {
        var x = new Date()
        var ampm = x.getHours( ) >= 12 ? ' PM' : ' AM';
            hours = x.getHours( ) % 12;
            hours = hours ? hours : 12;
            mins = ('0'+x.getMinutes()).slice(-2)
        var x1=hours + ":" +  mins + ampm;
        (timeCurrent) && 
            (top.document.getElementById('currentTime').innerHTML = x1);
        //document.getElementById('currentTime').innerHTML = x1;
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
      (dateCurrent) && (top.document.getElementById("currentDate").innerHTML = date);
      
// DROPUP MENUS
      /* When the user clicks on the button, 
      toggle between hiding and showing the dropdown content */
      function showIcons() {
        top.document.getElementById("moreIcons").classList.toggle("show");
      }

      function showWifi() {
        top.document.getElementById("myWifi").classList.toggle("show");
      }

      function showPlayer() {
        top.document.getElementById("myPlayer").classList.toggle("show");
      }

      function showAppInTaskbar(multiApp) {
        top.document.getElementById(multiApp).classList.toggle("show");
      }
      
      // Close the dropdown if the user clicks outside of it
      window.onclick = function(event) {
        if (!event.target.closest('.more-icons')) {
            var dropdowns = top.document.getElementsByClassName("dropup-content");
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
    const playerIconContainer = top.document.getElementById('playerContainer');
    //variable for button containing sound control
    const sounderIconContainer = top.document.getElementById('soundContainer');
    // variable for the play icon
    const playerIcon = top.document.getElementById('player');
    // variable for the sound icon
    const soundControl = top.document.getElementsByClassName('sound');
    // variable for audio
    const playerAudio = top.document.getElementById('playerAudio');
    const audioPlayerContainer = top.document.getElementById('audio-player-container');
    const seekSlider = top.document.getElementById('seek-slider');
    let state = 'play';
    let sound = 'on';
    //console.log(seekSlider.value);

    if (playerIconContainer) {
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
    }



    /** Implementation of the functionality of the audio player */

    const durationContainer = top.document.getElementById('duration');
    const currentTimeContainer = top.document.getElementById('current-song-time');
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

    if (playerAudio) {
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
    }
    


    //make toggle class for changing audio

// DRAGGABLE IFRAMES FOR APPS

    // Make the DIV element draggable:
    var appDrags = Object.values(top.document.getElementsByClassName('iframeHolder'));
    appDrags.map((item) =>{
        dragElement(item);
    })
    
    


    function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (top.document.getElementById(elmnt.id + "header")) {
        // if present, the header is where you move the DIV from:
        top.document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        // otherwise, move the DIV from anywhere inside the DIV:
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        top.document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        top.document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        top.document.onmouseup = null;
        top.document.onmousemove = null;
    }
}
// SHOW HIDE APPS
    var regex2 = /icon+/g

    function showApp(desktopicon) {
        top.document.getElementById(desktopicon).classList.toggle("show");
        console.log(top.document.getElementById(desktopicon + "icon").classList);
        if (!top.document.getElementById(desktopicon).classList.contains("minimized")) {
            (top.document.getElementById(desktopicon + "icon")).classList.toggle("running");
            ((top.document.getElementById(desktopicon + "icon")).classList.contains("no-always-show")) &&
                ((top.document.getElementById(desktopicon + "icon")).classList.toggle("hidden"));
        } else {
            top.document.getElementById(desktopicon).classList.remove("minimized");
        }      
    } 

    function minimizeApp(app) {
        top.document.getElementById(app).classList.toggle("show");
        top.document.getElementById(app).classList.add("minimized");
    }

    function maximizeApp(app, iframe) {
        top.document.getElementById(app).classList.toggle("maximized");
    }

    // add get element by class that contains "multiple-icons-show"
    // show multiApp(multiapp) 
    // check how many elements contain class "multipleIcons + nameoflist
    // if id ends in txt or if id ends in png/jpg (idk)
    // if txt then check how many elements in the multiple icons contain show
    // if none than close div
    // if there are than do not close div

    function showMultiApp(multiapp) {        
        top.document.getElementById(multiapp).classList.toggle("show");
        showMultiIcon(multiapp);
    }

    

    function showMultiIcon(multiAppIcon) {
        var txtShown = (top.document.getElementsByClassName('notesApp show')).length > 0 ? 'notesOpen' : 'notesClosed';
        if (multiAppIcon.match(/txt/g)) {
            if (txtShown === 'notesClosed') {
                console.log('notes are closed');
                $(top.document.getElementById('notesicon')).addClass("hidden");
                $(top.document.getElementById('notesicon')).removeClass("running")
            } 
            if (txtShown === 'notesOpen') {
                console.log('notes are open');
                $(top.document.getElementById('notesicon')).removeClass("hidden")
                $(top.document.getElementById('notesicon')).addClass("running")
            }
        } else {
            console.log("function no work");
        }
    }

    // get element by id and show, check if class contains 
// TASKBAR ICON CHANGE WHEN CLICKED

        function checkFocus() { 
            var taskbarIcons = top.document.getElementsByClassName("taskbar-icon");
            var appRunning = Object.values(top.document.getElementsByTagName("iframe"));
            var openApps = top.document.getElementsByClassName("front"); 
        
            window.addEventListener ?
            window.addEventListener('blur', blurHappened, true)
            : window.attachEvent('onfocusout', blurHappened);

            function blurHappened() {
                $(taskbarIcons).removeClass("focus");
                $(openApps).removeClass("front");
                if (appRunning.includes(top.document.activeElement)) {
                    //console.log(top.document.activeElement.id);
                    setFocus(top.document.activeElement.id);
                    var frontal = (top.document.activeElement.id).slice(0, -5);
                    $(top.document.getElementById(frontal)).addClass("front");
                    
                } 
            }
                  
            function setFocus(ff) {
                var regex = /(header)|(frame)+/g
                focusIcone = (ff.replace(regex, 'icon'));
                $(top.document.getElementById(focusIcone)).addClass("focus");
            }
        };

          window.setInterval(checkFocus, 100); 

function goBack() {
    window.history.back();
}

function goForward() {
    window.history.forward();
}

function reloadPage() {
    location.reload();
}
function popUpWindow() {
    var win = window.open();
    win.document.write('<iframe width="560" height="315" src="https://neocities.org" frameborder="0" allowfullscreen></iframe>')
}


         
        
       