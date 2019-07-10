// 基本对象定义

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