const arr = ["a", "f", "r", "e", "drt"]
const arr1 = ["a", "f", "r", "e", "drt"]

//for
console.log(`----for-----`)
for (let i = 0; i < arr.length; i++) {
    console.log(i)
    // console.log(arr[i]) //0 => "a"
}

const obj = {
    name: "Yoav",
    hobbie: "Coding and basketball"
}

//for/in
for (const key in obj) { //works on object
    // console.log(key)
    // if (Object.hasOwnProperty.call(object, key)) {
    //     const element = object[key];

    // }
}

//for/of
for (const iterator of arr) { //works on array
    // console.log(iterator)
}

//----
//while
console.log(`----y----`)
let y = 0;
while (y < arr.length) {
    console.log(y)
    y++
}

//----
//do/while
console.log(`----q---`)
let q = 0
do {
    q++
    console.log(q)
} while (q > arr.length);

/*
    1. Create an array of letters (5-6 letters)
    2. By using for show each value of the index in console.log with text "The letter is ..."
    3. Create an object of name, age, eyes color
    4. By using for/in show the keys of the object
    BONUS:  By using for/in show the values of the object
*/