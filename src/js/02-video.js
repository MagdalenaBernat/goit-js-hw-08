"use strict";
// const video = require("@vimeo/player");
// import { VimeoCuePointData } from "@vimeo/player";
// import { VimeoTimeRange } from "@vimeo/player";
import Player from '@vimeo/player';

const player = new Player('handstick', {
    id: "vimeo-player",
    width: 640
});

// timeupdate
// Triggered as the currentTime of the video updates. It generally fires every 250ms, but it may vary depending on the browser.
{
    duration: 61.857
    percent: 0.049
    seconds: 3.034
};

// progress
// Triggered as the video is loaded. Reports back the amount of the video that has been buffered.
{
    duration: 61.857
    percent: 0.502
    seconds: 31.052
};

// seeking
// Triggered when the player starts seeking to a specific time. A timeupdate event will also be fired at the same time.
{
    duration: 61.857
    percent: 0.485
    seconds: 30
};

// seeked
// Triggered when the player seeks to a specific time. A timeupdate event will also be fired at the same time.
{
    duration: 61.857
    percent: 0.485
    seconds: 30
};

player.on('play', function() {
    console.log('played the video!');
});

// const videoPlayer = document.getElementById("vimeo-player");

const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);

    player.on('play', function() {
        console.log('played the video!');
    });

    // player.getVideoTitle().then(function(title) {
    //     console.log('title:', title);
    // });

player.getCurrentTime().then(function(seconds) {
    // seconds = the current playback position
}).catch(function(error) {
    // an error occurred
});

player.setCurrentTime(30.456).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});


localStorage.setItem("player", player);
localStorage.getItem("player", player);


// const validator = require("validator");

// const validateEmail = email => {
//   return validator.isEmail(email);
// };

