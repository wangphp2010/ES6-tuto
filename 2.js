// 函数默认值

let required = () =>{throw new Error(参数为指定)}

let sayBye = ( name = required())=>{
    console.log(`${name} bye !` )
}

sayBye( `koma`  );

