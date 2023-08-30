const letters = ['a','b','c','d','e','f','g']
for(let i = 0; i<letters.length;i++){
    // console.log(`the next letter will be ${letters[i]}`)
}
const obj = {
    name:"yoav",
    age:12,
    eyesColor:"blue"
}
for (const key in obj) {
    console.log(key)
}
for (const key in obj) {
    // console.log(Object.values(obj)) 
    console.log(obj[key]) //obj[name] => yoav
}