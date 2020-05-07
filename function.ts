function add(x: number, y: number, z:number = 10): number {

    if (typeof z === 'number') {
        return x + y + z
    }
    return x + y
}

let result = add(2, 5)
// ts :后面都是生命类型 => 表示函数声明中返回值的方法

const add2: (x: number, y: number, z:number) => number = add

