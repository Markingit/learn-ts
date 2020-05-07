function echo<T>(arg: T): T {
    return arg
}
const res = echo(123)

function swap<T, U>(tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]]
}

const res2 = swap(['string', 123])


function echoWithArr<T>(arg: T[]): T[] {
    console.log(arg.length)
    return arg
}

const arrrs = echoWithArr([1, 2, 3])


interface IWithLength {
    length: number
}

function echoWithLength<T extends IWithLength>(arg: T): T {
    console.log(arg.length)
    return arg
}

const str = echoWithLength('str')
const obj = echoWithLength({length: 10})
const arrs = echoWithLength([1, 2, 3])




class Queue<T> {
    private data = []
    push(item: T) {
        return this.data.push(item)
    }
    pop(): T {
        return this.data.shift()
    }
}

const queue = new Queue<number>()
queue.push(1)
console.log(queue.pop().toFixed())

const queue2 = new Queue<string>()
queue2.push('str')
console.log(queue2.pop().length)


interface IPlus<T> {
    (a: T, b: T): T
}

function plus(a: number, b: number): number{
    return a + b
}

function connect(a: string, b: string): string {
    return a + b
}

const  a: IPlus<number> = plus
const  b: IPlus<string> = connect