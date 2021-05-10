
const clockFace = document.getElementById('clockFace');
const clockDays = document.getElementById('clockDays');
const clockHours = document.getElementById('clockHours');
const clockMins = document.getElementById('clockMins');
const clockSesc = document.getElementById('clockSesc');


let time = 172801000;

class CountdownTimer {
    constructor({ onTick }) {

        this.onTick = onTick;
    }

    start() {
        setInterval(() => {

            time -= 1000;

            const stepCountDonw = this.countDown(time);

            this.onTick(stepCountDonw);

        }, 1000);
    };


    pad(value) {
        return String(value).padStart(2, '0');

    }

    countDown(time) {

        const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));

        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));

        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));

        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

        return { days, hours, mins, secs };
    };
}

const countdownTimer = new CountdownTimer(
    {
        onTick: updateClockFace,
    }
);


countdownTimer.start();


function updateClockFace({ days, hours, mins, secs }) {

    clockFace.textContent = `${ days }:${ hours }:${ mins }:${ secs }`;
    clockDays.textContent = `${ days }`;
    clockHours.textContent = `${ hours }`;
    clockMins.textContent = `${ mins }`;
    clockSesc.textContent = `${ secs }`;

};





