//如果return语句已经执行就不会在执行return后面的语句
function sum(num1,num2)
{
    return num1+num2;
    
}
var result=sum(3);
console.info(result);


//arguments对象与数组类似可以用方括号访问他每一个元素
/**
 * 
 * arguments对象中的length属性可以判断传进来多少个参数
 */
function howManyArgs()
{
    console.info(arguments.length);
}
howManyArgs("hello world",2);

//如果函数中定义了相同的函数，则改名字只属于最后一个函数