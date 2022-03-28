let str1="abc"
const res1=str1.length
console.log(str1.length)

let str2="waefgsrfdgnb"
        //   01234567891011
let res2=str2.charAt(5)
console.log(res2)

let str3="asdg xfc"
//        01234567
let res3=str3.indexOf("g")
console.log(3)

// split
//split method returning new array
let str4="bidhu"
var res4=str4.split("")
console.log(res4);
console.log(str4);

//string reverse
let str5="bindhu"
var res5=str5.split("").reverse();
console.log(res5);

// join
let str6="bindhu"
var res6=str6.split("").reverse().join("");
console.log(res6);

//trim
let str7="   bindhu    "
var res7= str7.trim()
console.group(res7.length)
console.log(res7);
console.group(res7.length)

//slice
//1. array method
var str8=["hi","hello","bye","goodbye","why","where"]
            // 0     1       2      3        4     5
const res8=str8.slice(1,3)
console.log(res8)

//2. not array
     var str9="bindhu,bin,blink,bank"
     const res9=str9.slice(0,4)
     console.log(res9)

// 3 reverse
    var str10="bindhu,bin,blink,bank"
    const res10=str10.slice(0,-2)
    console.log(res10)

//splice
var str11=["hi","hello","bye","goodbye","why","where"]
            // 0     1       2      3        4     5
const res11=str11.splice(1,3)
console.log(res11)

//2.
var str12=["hi","hello","bye","goodbye","why","where"]
            // 0     1       2      3        4     5
const res12=str12.splice(1,4,"dummy")
console.log(res12);
console.log(str12)

// concatenation
var str13="apple"
var str14="orange"
var str15=str13.concat(" ",str14)
var str15=str13.concat(str14)
console.log(str15);

// replace
let str16="welocme everyone"
const res16=str16.replace("everyone","anyone");
console.log(res16);

// replace all
var str17=" I am from India and India is famous for its culture "
var res17=str17.replaceAll("is", "was")
console.log("res17");

//tolowercase

var str18="bindhu"
var res18=str18.toUpperCase()
console.log(res18)

// touppercase
var str18="BINDHU"
var res18=str18.toLowerCase()
console.log(res18)


     