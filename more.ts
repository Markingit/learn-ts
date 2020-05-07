
// 类型别名
type PlusType = (x: number, y: number) => number
function sum(x: number, y: number) {
    return x + y
}

const sum2: PlusType = sum



type NameResolve = () => string
type NameOrResolver = string | NameResolve// 联合类型

function getName(n: NameOrResolver): string {
    if (typeof n ==='string') {
        return n
    } else {
        return n()
    }
}


// 类型断言 联合类型的共有属性

function getLength(input: string | number): number {
    // const str = input as String
    // if (str.length) {
    //     return str.length
    // } else {
    //     const number = input as Number
    //     return number.toString().length
    // }

    if ((<string>input).length){
        return (<string>input).length
    } else {
     return input.toString().length
    }
}