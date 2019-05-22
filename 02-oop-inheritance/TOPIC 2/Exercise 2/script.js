class EventEmitter {

    constructor () {
      this.events = {}; 
    }

    on (eventName, callback) {
      if (!this.events[eventName]) {
        this.events[eventName] = [];
      }
      this.events[eventName].push(callback);
    }

    emit(eventName) {
        if (this.events[eventName]) {
            this.events[eventName].forEach(cback => {
                cback();
            });
        }
    }

    off (eventName, callback) {
        let ls = this.events[eventName]; 
        if (ls) {
          let i = ls.indexOf(callback);
          if (i !== -1) {
            ls.splice(i, 1);
          }
        }
      }

}

class Actor {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Movie {
    constructor(name, year, duration) {
        this.name = name;
        this.year = year;
        this.duration = duration;
    }
    play(logger) {
        let play = new CustomEvent("play");
        this.on(play, logger);
        this.emit(play);
    }
    pause(logger) {
        let pause = new CustomEvent("pause");
        this.on(pause);
        this.emit(pause);
    }
    resume(logger) {
        let resume = new CustomEvent("resume");
        this.on(resume);
        this.emit(resume);
    }
}