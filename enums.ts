// enum Direction {
//     Up = 10,
//     Down,
//     Left,
//     Right
// }
// console.log(Direction.Up)

enum Direction {
    Up = 'UP',
    Down = 'DOWN',
    Left = 'LEFT',
    Right = 'RIGHT'
}

const value = 'UP'
if (value === Direction.Up) {
    console.log('go')
}