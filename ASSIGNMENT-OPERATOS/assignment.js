document.getElementById('ao').innerHTML="JavaScript Assignment Operators";
document.getElementById('ass').innerHTML="Assignment operators are used to assign values to Javascript variables";
document.getElementById('o1').innerHTML="1. Operator ( = )";
document.getElementById('o2').innerHTML="2. Operator ( += )";
document.getElementById('o3').innerHTML="3. Operator ( -= )";
document.getElementById('o4').innerHTML="4. Operator ( *= )";
document.getElementById('o5').innerHTML="5. Operator ( /= )"
document.getElementById('o6').innerHTML="6. Operator ( %= )"
document.getElementById('o7').innerHTML="7. Operator ( **= )"



let a = 12;
let b = 12;
let c = a;

let d = 12;
let e = 3;
let f = d += e;
let g = d -= e;
let h = d *= e;
let i = d /= e;
let j = d %= e;
let k = d ** e;


document.getElementById('b').innerHTML= c ;
document.getElementById('o-2').innerHTML= f ;
document.getElementById('o-3').innerHTML= g ;
document.getElementById('o-4').innerHTML= h ;
document.getElementById('o-5').innerHTML= i ;
document.getElementById('o-6').innerHTML= j ;
document.getElementById('o-7').innerHTML= k  ;





document.getElementById('sa').innerHTML="Shift Assignment Operator"
document.getElementById('s1').innerHTML="1. Operator ( <<= )"
document.getElementById('s2').innerHTML="2. Operator ( >>= )"
document.getElementById('s3').innerHTML="3. Operator ( >>>= )"



let l = d << e;
let m = d >>= e;
let n = d >>>= e;


document.getElementById('s-1').innerHTML= l;
document.getElementById('s-2').innerHTML= m;
document.getElementById('s-3').innerHTML= n;




document.getElementById('ba').innerHTML="Bitwise Assignment Operator"
document.getElementById('b1').innerHTML="1. Operator ( &= )"
document.getElementById('b2').innerHTML="2. Operator ( ^= )"
document.getElementById('b3').innerHTML="3. Operator ( |= )"



let o = d &= e;
let p = d ^= e;
let q = d |= e;


document.getElementById('b-1').innerHTML= o;
document.getElementById('b-2').innerHTML= p;
document.getElementById('b-3').innerHTML= q;



document.getElementById('la').innerHTML="Logical Assignment Operator"
document.getElementById('l1').innerHTML="1. Operator ( &&= )"
document.getElementById('l2').innerHTML="2. Operator ( ||= )"
document.getElementById('l3').innerHTML="3. Operator ( ??= )"



let r = d &= e;
let s = d ^= e;
let t = d |= e;


document.getElementById('l-1').innerHTML= r;
document.getElementById('l-2').innerHTML= s;
document.getElementById('l-3').innerHTML= t;