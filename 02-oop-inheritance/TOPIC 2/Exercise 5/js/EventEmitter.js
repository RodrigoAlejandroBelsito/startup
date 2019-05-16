export default class EventEmitter {
    on(event, callback) {
        document.addEventListener(event, callback);
    }
    emit(event) {
        document.dispatchEvent(event);
    }
    off(event) {
        document.removeEventListener(event, callback);
    }
}
