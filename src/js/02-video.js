"use strict";

import Player from '@vimeo/player';

window.onload = () => {
    const iframe = document.querySelector('iframe');
    const player = new Player(iframe);
    
    player.on('seeking', function (playedTime) {

        localStorage.setItem('playedTime', playedTime.seconds);
    });

    let playedTime = localStorage.getItem('playedTime');
    if (playedTime){
        player.setCurrentTime(playedTime).then();
    }
};
