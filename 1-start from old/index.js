const name = "Yoav" //string
const num = 5 //number
const bol = true // boolean
const obj = {} //object
const arr = [] //array
// undefined
// null

const name2 = function (a, b) {//parameter

    return a + b
}
console.log(name2(2, 5))

function nameFuc() { //regular function
    //can use this
}

() => { } //unonymus

const nameunonymus = () => { } //arrow func

//objects -> this

//OBJ
const newobk = {
    name: "Yoav",
    age: 12,
    getName: function () {
        return this.name
    },
    getAge: function (text = "tratra ") {
        return `${text} ${this.age}`
    }
}

console.log(newobk.getName())
console.log(newobk.getAge("the age is:"))
// console.log(newobk.getAge())

const arrnew = [{ name: "weiijfeo", age: "wef" }, { name: "qqqqq", age: 123 }, { name: "qqqqwwwww", age: 54 }]
arrnew[-1]
arrnew[arrnew.length-1]
const arr11 = [1,2,3,5]
const arr22 = ["qwe","dfgh"]
const arr33 = ["qwe",3, true, "rwer", false]

// console.log(arrnew.forEach(){})
arrnew.forEach(obInArr => {
    console.log(obInArr.name)
})

//each of section find at least 4 methods
//1. search in the internt methods of array and use them.
//2. search methods of object and use them
//3. search methods of string
//4. check in internet loop function and how many options of loop we have.
//5. write if function - in addition use if else and else 
