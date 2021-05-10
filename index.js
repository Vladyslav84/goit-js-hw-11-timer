// new CountdownTimer({
//     selector: '#timer-1',
//     targetDate: new Date('Jul 17, 2019'),
// });

const clockFace = document.getElementById('clockFace');
const clockDays = document.getElementById('clockDays');
const clockHours = document.getElementById('clockHours');
const clockMins = document.getElementById('clockMins');
const clockSesc = document.getElementById('clockSesc');

// function init() {

//     const stepCountDonw = countDown(time);

//     updateClockFace(stepCountDonw);
// };

let time = 172801000;

// class Timer {
//     constructor() {


//     }
// }

setInterval(() => {

    time -= 1000;
    const stepCountDonw = countDown(time);

    updateClockFace(stepCountDonw);

}, 1000);




function pad(value) {
    return String(value).padStart(2, '0');

}


function countDown(time) {

    const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));

    const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));

    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));

    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

    return scoreboard = { days, hours, mins, secs };
};

function updateClockFace({ days, hours, mins, secs }) {

    clockFace.textContent = `${ days }:${ hours }:${ mins }:${ secs }`;
    clockDays.textContent = `${ days }`;
    clockHours.textContent = `${ hours }`;
    clockMins.textContent = `${ mins }`;
    clockSesc.textContent = `${ secs }`;

};





