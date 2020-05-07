class Animal {
    name: string;
    constructor(name: string) {
        this.name = name
    }
    run() {
        return `${this.name} is running`
    }
}

// const dog = new Animal('Qiqi')
// console.log(dog.run())

class Snake extends Animal {
    bark() {
        return `${this.name} is barking`
    }
}


// const manba = new Snake('kOBE')
// console.log(manba.run())
// console.log(manba.bark())

class Cat extends Animal {
   constructor(name) {
       super(name)
       console.log(this.name)
   }
   run() {
       return 'Meow,' + super.run()
   }

}

const mao = new Cat('maomao')
console.log(mao.run())