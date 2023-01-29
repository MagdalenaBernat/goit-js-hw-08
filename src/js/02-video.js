"use strict";

import Player from '@vimeo/player';


window.onload = () => {
    console.log('cycki');
    const iframe = document.querySelector('iframe');
    player = new Player(iframe);
    
    player.on('timeupdate', function (playedTime) {

        localStorage.setItem('playedTime', playedTime.seconds);
    });

    let playedTime = localStorage.getItem('playedTime');
    if (playedTime)
    {
        player.setCurrentTime(playedTime).then();
    }
  };