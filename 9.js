//  简单迭代生成器

/*
 function* {}
 yield : 迭代返回
*/

function* myGene()
{
    yield '一';
    yield '条';
    yield '大';
    yield '狗';
    
    
}
for(let val of myGene())
{
    console.log(val)
}

function* countDown(begin)
{
    while(begin>0)
    {
        yield begin-- ;
    }
}

for(let val of countDown(10))
{
    console.log(val)
}