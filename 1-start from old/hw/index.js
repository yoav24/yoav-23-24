// array's methods:
//1 map
const map = [1, 3, 5, 7, 15]
const map2 = map.map((x) => x + 2)
// console.log(map2)

//2 slice
const slice = ["yoav", "itay", "amit", "noam", "roy"]
// console.log(slice.slice(1, 3))
// console.log(slice.slice(1, -1))

//3 sort
const sort = ['f', 'g', 'a', 'p', 'h']
sort.sort()
// console.log(sort)
const sort2 = [8, 5, 9, 10, 1]
sort2.sort()
// console.log(sort2)
// const sort3 = sort2.sort((a, b) => a + b)
// console.log(sort3)

//4 indexof
const indexof = ["dog", "cat", "wolf", "horse", "pig", "cow", "dog"]
// console.log(indexof.indexOf("dog"))
// console.log(indexof.indexOf("dog", 1))



//string's methods:
//1 slice
const slice1 = "apple,banana,melon"
// console.log(slice1.slice(0, 7))

//2 lenght
const lenght = "alon,yonatan,omer"
// console.log(lenght.length)

//3 replace
const replace = "hey i love football"
// console.log(replace.replace('football', 'basketball'))

//4 concat 
const text1 = "hello"
const text2 = "world"
const text3 = text1.concat(' ', text2)
// console.log(text3)

//object's methods
//1 assign 
const obj1 = { a: 2, b: 10 }
const obj2 = { c: 4, d: 7 }
const objassign = Object.assign(obj1, obj2)
// console.log(objassign)

//2 create
const person = {
    iHuman: "no",
    name: "itamar",
    print: function () { console.log(`My name is ${this.name}. Am I human? ${this.iHuman}`) }

}
// person.print()
const person2 = Object.create(person)
person2.name = "yoav"
person2.iHuman = "yes"
// person2.print()

//3 keys
const objkeys = {
    name: "daniel",
    age: 13
}
// console.log(Object.keys(objkeys))

//3 has own
const hasOwnobj = {
    age: "13"
}
// console.log(Object.hasOwn(hasOwnobj, 'age'));
// console.log(Object.hasOwn(hasOwnobj, 'name'));

//4 values
const values1 = {
    age: 13,
    name: "lior"
}
// console.log(Object.values(values1))

// if
const num1 = 5
const num2 = 10
if (num1 + num2 == 12) {
    // console.log(12)
}
else {
    // console.log(`the number dont = 12`) //equal 
}
const text = "hello world"

if (text.length == 12) {
    // console.log("text length = 12")
}
else if (text.length == 13) {
    // console.log('text length = 13')
}
else {
    // console.log('text length is not 12 or 13')
}