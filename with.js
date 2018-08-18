//with语句的目的是为了简化多次编写同一个对象的工作

var s=location.search.substring(1);
var l=location.hostname;
var u=location.href;

//使用with语句关联了location对象
//大量使用with语句会导致性能下降大型网站开发时不建议使用使用with语句
with(location)
{
    var s=search.substring();
    var l=hostname;
    var u=href;
}