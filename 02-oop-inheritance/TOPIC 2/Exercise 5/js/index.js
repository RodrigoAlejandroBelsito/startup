import Movie from './Movie';
import Social from './Social';
import Actor from './Actor';
import Logger from './Logger';


Object.assign(Movie.prototype, Social);

const logger = new Logger();
const terminator = new Movie('Terminator I', 1985, 60);
const arnold = new Actor('Arnold Schwarzenegger', 50);
const actors = [
    new Actor('Paul Winfield', 50),
    new Actor('Michael Biehn', 50),
    new Actor('Linda Hamilton', 50)
];

terminator.addCast(arnold);
terminator.addCast(actors);
terminator.share("Chuck Norris");
terminator.like("Chuck Norris");