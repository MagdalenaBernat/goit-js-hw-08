"use strict";

import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
player = new Player(iframe);

player.on('timeupdate', function (playedTime) {
    localStorage.setItem('playedTime', playedTime.seconds);
});

window.onload = () => {
    let playedTime = localStorage.getItem('playedTime');
    if (playedTime)
    {
        player.setCurrentTime(playedTime).then();
    }
  };
