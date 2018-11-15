// Exercice
/*
Voici deux interfaces créez un sujet User qui implémente l'interface ISubject

Le sujet sera donc observé par des Observers Log et Model

User possède une méthode create, c'est quand cette méthode est appelée que tous les obersers
sont notifiés de ce fait et affiche un message (pour l'exemple)

Trouvez un exemple simple pour implémenter ce design pattern pour le rendre effectif.

*/


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

    // TODO ...

}

class Log implements IObserver {
  // dit quelque chose
}

class Model implements IObserver {
  // dit quelque chose
}

// Testez le code ici ...