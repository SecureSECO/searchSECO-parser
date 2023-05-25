
class Test {
    test() {
        const i = 3
        const j = 5
        console.log(i * j)
    }

    multiply(a,b) {
        return a * b
    }
}

function main() {
    const p = new Test()
    const a = p.multiply(3,4)
    p.test()
    console.log("Hello World")
}