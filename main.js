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
let a=20
if (a==undefined) {
    console.log('variable is undefined')
    return undefined
} else{
    console.log(typeof a)
    return a
}