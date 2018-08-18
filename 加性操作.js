//一个数是字符串另一个将被强转成字符串将两个字符串拼接
var num1=5+"5"+10;
console.info(num1);

//如果其中含有字符串拼接数字时就会强转成字符串
var num2=5;
var num3=10;
var message="The sum of 5 and 10 is "+(num2+num3);//如果先让执行数字就得让加法执行的优先级高于字符串加括号执行完之后在执行字符串拼接
console.info(message);//由于加法运算是独立执行的如果加字符串就会默认成字符串

