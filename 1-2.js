// console.log([val]):在控制台输出内容
// console.log('hello world~~');
==: (两个等号）进行比较
 console.log(1 == 2); 
 console.log('AA'== NaN);
 console.log(NaN == NaN);

// isNan([val])
console.log(isNaN(10));//=>flase
console.log(isNaN('AA'));//=>ture
 Number('AA')=>NaN
 isNaN(NaN)=>True 


console.log(isNaN('10'));//=>flase

 Number('10')=>10
 isNaN(10)=>flase

//把字符串转换成数字，只要字符串中包含任意一个非有效数字（第一个点除外）结果都是NaN  空字符串会变为0；
// ======Number=====
console.log(Number('12.5'))//=>12.5
console.log(Number('12.5px'))//=>NaN
console.log(Number('12.5.5'))//=>NaN
console.log(Number(''))//=>0

console.log(Number(true));//=>1
console.log(Number (false));//=>0
console.log(isNaN (false));//=>false

console.log(Number(null));//=>0
console.log(Number(undefined));//=>NaN 

// 把引用数据类型转换为数字，是先把他基于toString方法转换成字符串，然后再转换成数字
console.log(Number({name:'10'}));//=>NaN
console.log(Number({}));//=>NaN
console.log(Number({}));//=>NaN
console.log(Number([]));//=>0
console.log(Number([12]));//=>12
//[12].toString()-> 12

console.log(Number([12,23]));//=>MaN
//[12,23].toString()->'12,23'



let str = '12.5px'
console.log(Number(str));//=>NaN
console.log(parseInt(str));//=>12
console.log(parseFloat(str));//=>12.5
console.log(parseFloat('width:12.5px'));//=>NaN




