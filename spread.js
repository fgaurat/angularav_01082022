const a = [10,20,30]

const [b,...c] = a


console.log(b)
console.log(c)


o = {theName:"TOTO",firstName:'Tutu',age:25}

const {...o2} = o
console.log(o2)
const o3 = {...o,age:86}
console.log(o3)
// o.theName="TATA"
// console.log(o)
// console.log(o3)
