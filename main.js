const add = (num1, num2) => console.log(num1 + num2)
const subtract = (num1, num2) => console.log(num1 + num2)

add(34,56)
subtract(14,7)

const calc = (num1, num2, oper) => {
    oper(num1, num2)
}

calc(34, 21, add )

