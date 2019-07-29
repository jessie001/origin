let a = 12;
console.log(a. toString());//=>'12'
console.log((NaN). toString());//=>'NaN'
console.log((ture). toString());//=>'ture'
console.log((false). toString());//=>'false'
//null 和undefined 是禁止直接toString
//(null).toString()//=>报错
// null 和undefined一样转换为字符串的结果就是'null'/'undefined'

/* 普通对象.toString()的结果是"[object Object ]"=>?
 =>Object.prototype.toString方法不是转换为字符串的，而是用来检测数据类型 */

//======字符串拼接＝＝＝＝＝
// 四则运算法则中，除加法之外，其余都是数学计算，只有加法可能存在字符串拼接（一旦遇到字符串，则不是数学运算而是字符串拼接）


/* console.log('10'+ 10);//=>'1010'
console.log('10'- 10);//=>0
console.log('10px'- 10);//=>NaN
10px转化成数字是NaN  */


// !: 取反（先转为布尔，然后取反）
// !!:取反再取反，只相当于转换为布尔<=>Boolean
console.log(!1);//=>false
console.log(!!1);//=>true

//如果条件只是一个值，不是==/===/!=/>=等这些，只要这个值先转换为布尔类型，然后验证真假
if(1){}