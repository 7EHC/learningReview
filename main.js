let i=1
console.log(i)

//String ไม่สามารถเปลี่ยนค่าข้างในตัวแปลได้ ต้องทำการ re assign กลับมาให้ String ตัวที่เราสร้างก่อน (เรียกว่า immutable obj)
let str='PURIN'
str=str.toLowerCase()
console.log(str)

//obj properties และ array elements สามารถเปลี่ยนค่าข้างในตัวแปลได้เลย (เรียกว่า mutable obj)
let perInfo={Firstname: 'Prayfa', Lastname: 'Peerachotikaphan', Year: 2002, Age: 20} //obj properties
perInfo.Lastname='Gaewgerd'
perInfo.Age=19
console.log(perInfo)

personaInfo=['Purin', 'Gaewgerd', 2003, 19] //array elements
personaInfo[1]='Peerachotikaphan'
personaInfo[personaInfo.length-1]=20 //element ตัวสุดท้ายใช้ length-1 การใส่ตำแหน่งตัวเลขได้
//personaInfo[3]=21
console.log(personaInfo)    

// ถ้าหากไม่ assign ค่าให้ตัวแปลที่สร้าง ตัวแปลนั้นจะมี type เป็น undefined เสมอ
// let b
// if (b===undefined) { //เครื่องหมายเท่ากับ 2 อัน = เช็คแค่ content ไม่สน type, เครื่องหมายเท่ากับ 3 อัน = เช็คทั้ง content และ type ของค่าของตัวแปล ต้องเหมือนกัน
//     console.log('variable is undefined') //result
//     return undefined
// } else{
//     console.log(typeof b)
//     return b
// }

// กรณี assign ค่าให้ตัวแปล และเช็คด้วย if else โดยให้ return เป็นตัวแปล และ print ออกมาเป็น type of ของตัวแปล โดยใช้ backtick เพื่อให้ใส่ค่าของตัวแปลลงไปใน print ได้
// let a=true
// if (a===undefined) {
//     console.log('variable is undefined')
//     return undefined
// } else{
//     console.log(`variable is ${typeof a}`) //result
//     return a
// }

// ตัวแปล const ไม่สามารถเปลี่ยนแปลงค่าได้

// for (const num = 1; num <=5; num++) { //มี ++ เป็นตัวที่จะเปลี่ยนแปลงค่า
//     console.log(num)
// }

// declaration ของ num เป็น blockscope{} console.log ที่อยู่นอก blockscope{} จึงไม่สามารถรันได้
// for (let num = 1; num <=5; num++){
//     console.log(num)
// }
// console.log(num)

// เนื่องจากย้าย let num มาอยู่ด้านนอกกับ console.log จึงสามารถรันได้
let num
for (num = 1; num <=5; num++){
    console.log(num)
}
console.log(num)

// declaration ของ num กลายเป็น var เนื่องจาก var เป็น default หากไม่กำหนดตัวแปล(var เข้าถึงได้ทุกที่)
for (num = 1; num <=5; num++){
    console.log(num)
}
console.log(num)

console.log('----------')
console.log(Number('10')) //String - to number = 10
console.log(Number('')) //empty string - to number = 0
console.log(Number('two')) //Input String to numebr - to number = NaN (Not a number)
console.log(Number(undefined)) //input undefined to number - to number = NaN
console.log(Number(null)) //input null to number - to number = 0
console.log('----------')
console.log(String('one')) //non empty string - return string
console.log(String('')) //empty string - return empty string
console.log(String(-0)) //input -0 to string - to string = 0
console.log('----------')
console.log(Boolean(undefined)) //input undefined to boolean - to boolean = false
console.log(Boolean(null)) //input null to boolean - to boolean = false
console.log(Boolean('')) //empty string - to boolean = false
console.log(Boolean(3)) //non empty, numeric - to boolean = true
console.log(Boolean('three')) //input non empty, non numeric to boolean - to boolean = true
console.log(Boolean(0)) //input 0 or -0 to boolean - to boolean = false

console.log('----------')
isEmpty = false
let x = isEmpty? 1 /*true*/ : 0 /*false*/
console.log(x)

isEmpty = true
let y = isEmpty? 1 /*true*/ : 0 /*false*/
console.log(y)

let result = 5 ? 'count <= 5' : 'count > 5'
console.log(result)

let age = 65
const greeting = age >= 60 ? 'Welcome!' : 'You are too young!'
console.log(greeting)
console.log('----------')

console.log(`5 < '10' && '1' > 5 is ${5 < '10' && '1' > 5}`) //false
console.log(`5 < '10' || '1' > 5 is ${5 < '10' || '1' > 5}`) //true

let count = 0
count++ //+1
count-- //-1
count += 5 //+5
count *= 50 //*50
count /= 2 // div 2
console.log(`count = ${count}`)

console.log('----------')
let student={firstname: 'Purin', Age: 19}
let id
console.log(id?.Age)
console.log(student)