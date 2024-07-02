// typecast to Number 
let a=Number("gg")
let ab=Number(true)
let ac=Number(false)
let ad=Number("")
let ae=Number(NaN)
let af=Number(null)
let ag=Number(undefined)


console.table([a,ab,ac,ad,ae,af,ag]);

// typecast to Boolean

let b=Boolean(0)
let c=Boolean("")
let d=Boolean(NaN)
let e=Boolean(null)
let f=Boolean("hello world")
let fh=Boolean(undefined)

console.table([b,c,d,e,f,fh]);

// Convert to String

let g=String(12)
let h=String(true)
let i=String(false)
let j=String(NaN)
let hh=String(null)
let k=String(undefined)

console.table([g,h,i,j,hh,k])

