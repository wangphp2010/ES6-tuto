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


//  简单迭代类

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



