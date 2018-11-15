

interface IObserver {
    update(subject: ISubject): void;
}

interface ISubject {
    attach(observer: IObserver): void;
    detach(observer: IObserver): void;
    notify(): void;
}

// Subject 
class User implements ISubject {

    private _observers: Array<IObserver> = [];
    private _name: string;

    set name(name: string) { this._name = name; }
    get name() { return this._name; }

    attach(observer: IObserver) {
        this._observers.push(observer);
    }

    detach(observer: IObserver) { }

    notify() {
        this._observers.forEach(o => { o.update(this); })
    }

    create(name: string) {
        this.name = name;

        this.notify();
    }

}

class Log implements IObserver {
    update(subject) {
        console.log(subject.name)
    }
}

class Model implements IObserver {
    update(subject) {
        console.log(subject.name)
    }
}

// Testez le code ici ...

let user = new User;
user.attach(new Model);
user.attach(new Log);

user.create('Alan');
