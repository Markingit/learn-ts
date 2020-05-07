class Animal {
    public name: string;
    static categoies: string[] = ['mammal', 'bird']
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


// public 默认 private 只能在当前定义类访问  protected 子类可以访问 readonly 只读，不能重新赋值 static 静态属性静态方法与子类没有什么关系可以直接定义静态，直接访问

// 接口 和 类
interface Radio {
    switchRadio(): void
}
// interface Battery {
//     checkBatteryStatus()
// }


interface RadioWithBattery extends Radio {
    checkBatteryStatus()
}
class Car implements Radio {
    switchRadio() {

    }
}
class Cellphone implements RadioWithBattery {
    switchRadio() {

    }
    checkBatteryStatus() {

    }
}