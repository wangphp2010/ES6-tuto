// 类继承


 
 
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
 