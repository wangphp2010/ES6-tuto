git remote add origin https://github.com/wangphp2010/ES6-tuto.git

git push -u origin master

## 函数 用法  
### `` 用法

```js
let name = "koma"
let adresse = "网把"
let fmtstr = markdown `你好,${name}!
晚上一去去${adresse}玩吗?
等你回信.`

console.log(fmtstr)

function markdown(formats , ...args)
{
    console.log(formats)
    console.log(args)
    console.log(formats.length)
    var re = "#信息标题\n";
    for(var i = 0 ; i<formats.length;i++)
    {
        re += formats[i] +  ( args[i] ? "**" +   args[i]  + "**" : '' );
    }
    return re ; 
}
```


## 函数默认值

```js
let required = () =>{throw new Error(参数为指定)}

let sayBye = ( name = required())=>{
    console.log(`${name} bye !` )
}

sayBye( `koma`  );
```



## 基本对象定义

```js
let title = " ES6 入门"
let price = 25 ;
let publish = "明明出版社"

let book = {
    
    title , price , publish ,
    log()
    {
        console.log(`<< ${this.title}>> is ${price} 元`)
    }
}

console.log(book)

book.log()
```


## 箭头函数

```js
//箭头函数没有自己的this，它会捕获自己在定义时（注意，是定义时，不是调用时）所处的外层执行环境的this，并继承这个this值。所以，箭头函数中this的指向在它被定义的时候就已经确定了，之后永远不会改变。

//箭头函数不能作为构造函数使用



//如果箭头函数的函数体只有一句代码，就是简单返回某个变量或者返回一个简单的JS表达式，可以省去函数体的大括号{ }。
// 用小括号包裹要返回的对象，不报错
let getTempItem = id => ({ id: id, name: "Temp" });

// 但绝不能这样写，会报错。
// 因为对象的大括号会被解释为函数体的大括号
let getTempItem = id => { id: id, name: "Temp" };

 
 let fun = (val) => {
    console.log(val);   // 111
    // 下面一行会报错
    // Uncaught ReferenceError: arguments is not defined
    // 因为外层全局环境没有arguments对象
    console.log(arguments); 
};
fun(111);

// 例子二
function outer(val1, val2) {
    let argOut = arguments;
    console.log(argOut);    // ①
    let fun = () => {
        let argIn = arguments;
        console.log(argIn);     // ②
        console.log(argOut === argIn);  // ③
    };
    fun();
}

// 箭头函数没有原型prototype

// 箭头函数不能用作Generator函数，不能使用yeild关键字

```

## 为对象添加函数  
// 这其实是 一般js的方法
```js
Array.prototype.len = function(){};
```

 ## 类继承


 ```js
 
class Car{
    constructor(brand)
    {
        this.brand = brand ;
    }
    showBrand(){
        console.log(`本台车的品牌是${this.brand}`);
    }
}
//super关键字，它在这里表示父类的构造函数，用来新建父类的this对象。

// 子类必须在constructor方法中调用super方法，否则新建实例时会报错。这是因为子类自己的this对象，必须先通过父类的构造函数完成塑造，得到与父类同样的实例属性和方法，然后再对其进行加工，加上子类自己的实例属性和方法。如果不调用super方法，子类就得不到this对象
class lexus extends Car{
    
    constructor(brand,lineup){
        super(brand); //父类的brand;
        this.lineup = lineup ; 
    }
    getPrice()
    {
        switch(this.lineup){
            case "RX":
                return 60 ;
            case "NX":
                return 40 ;
            default:
                throw new Error("未知车类型");
        }
    }
}
 
```


## 循环我的对象

```js 
 
 let list = [ 10 , 20 , 30 ]
 let mystr = '你好啊'
 let mymap = new Map()
 mymap.set('JS','Javascript')
 mymap.set('PL','Perl')
 mymap.set('PY','Python')
 
 for(let val of list ){
     console.log(val)

 }
 for(let val of mystr ){
     console.log(val)

 }
  for(let [key,val] of mymap ){
     console.log(key,val)

 }
 
 let it = mymap.values(); // it 为迭代器
 console.log(it) ;
 let tmp ; 
 while(tmp = it.next()){
     if(tmp.done) break; // done 表示没有下一个数据了
     
     console.log( tmp.value , tmp.done )
 }
 ```


 // 可迭代对象
// 指可以循环的对象


class Player{
    constructor(list)
    {
        this.list = list ;
    }
    // 制作迭代器 把本来不可以迭代的对象player 变成可迭代的对象
    // Symbol.iterator
    [Symbol.iterator](){
        let current = 0 ;
        let that = this ; 
        return {
            next(){
                return current < that.list.length ? { value:that.list[current++],done:false } : {done:true }
            }
        }
    }
    
}
let player = new Player(['Curry','Harden','Lebron']);

for(let tmp of player){
    console.log(tmp);
}


## 简单迭代类
```js
class MyList{
    constructor(list)
    {
        this.list=list;
        this[Symbol.iterator] = function*(){
            let current = 0 ;
            let that = this ;
            while(current < that.list.length){
                yield that.list[current++];
            }
        }
    }
    
}

let mylist = new MyList([100,200,300,400,500]);

for(let val of mylist){
    console.log(val)
}
```

##  简单迭代生成器
```js
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
```

##  模块化设计


```js
//建立模块math.mjs
//导入模块

import {add,minus} from './math';

console.log(add(10,20));
console.log(minus(30,20));

// nodejs 执行命令
// node --experimental-modules 10.mjs 
 
``` 
##    类模块化设计

```js
import Player  from './Player';

 let nima = new Player('nima');
 
 nima.sayHelo();
 
 

// nodejs 执行命令
// node --experimental-modules 11.mjs 
```



