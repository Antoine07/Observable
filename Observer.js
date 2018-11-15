// Subject 
class User {
    constructor() {
        this._observers = [];
    }
    set name(name) { this._name = name; }
    get name() { return this._name; }
    attach(observer) {
        this._observers.push(observer);
    }
    detach(observer) { }
    notify() {
        this._observers.forEach(o => { o.update(this); });
    }
    create(name) {
        this.name = name;
        this.notify();
    }
}
class Log {
    update(subject) {
        console.log(subject.name);
    }
}
class Model {
    update(subject) {
        console.log(subject.name);
    }
}
// Testez le code ici ...
let user = new User;
user.attach(new Model);
user.attach(new Log);
user.create('Alan');
