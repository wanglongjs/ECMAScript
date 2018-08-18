// var num=0;
// for(var i=1;i<10;i++){
//     if(i%5==0)
//     {
//         continue;
//     }
//     num++;
// }

// console.info(num);

var num=0;

outermost:
for(var i=0;i<10;i++)
{
    for(var j=0;j<10;j++)
    {
        if(i==9&&j==9){
            break outermost;
        }
        num++;
    }
}
console.info(num);