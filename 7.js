// 循环我的对象


 
  
 
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
 
 
 
 