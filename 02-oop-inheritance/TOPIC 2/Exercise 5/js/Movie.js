import EventEmitter from './EventEmitter';

export default class Movie extends EventEmitter {
    constructor(title, year, duration) {
        super();
        this.title = title;
        this.year = year;
        this.duration = duration;
        this.cast = [];
        this.playEvent = new CustomEvent("play");
        this.pauseEvent = new CustomEvent("pause");
        this.resumeEvent = new CustomEvent("resume");
    }
    play() {
        this.emit(this.playEvent);
    }
    pause() {
        this.emit(this.pauseEvent);
    }
    resume() {
        this.emit(resumeEvent);
    }
    addCast(cast) {
        if (Array.isArray(cast)) {
            this.cast = this.cast.concat(cast);
            return;
        }
        this.cast.push(cast);
    }
}