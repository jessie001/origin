let person={
    name:'王',
    age:40,
    height:'185CM',
    weight:'80KG',
    1:100
   
};
删除属性
// =>真删除：把属性彻底干掉
delete person[1];
// =>假删除：属性还在，值为空
person.weight = null;
// 也可以是undefined 当属性名不存在
console.log(person);



  设置属性名和属性值
// =>属性名不能重复，如果属性名已经存在，不属于新增，属于修改属性值
person .GF ='圆圆';
person.name='李易峰'
console.log(person['GF']);
console.log(person['name']);//=>李易峰



// 获取属性名对应的属性值
//属性名是数字或者字符串的形式
// ＝>对象，属性名
// => 对象［属性名］
// ＝>如果当前的属性名不存在，默认的属性值是undefined
// =>如果属性名是数字，则不能使用点的方式获取属性值
/* console.log(person.name);
console.log(person['age']);字符串需要加单引号 或者双引号
console.log(person.sex);//=>undefined
console.log(person[1]);
console.log(person.1);//=>SyntaxError  语法错误 */