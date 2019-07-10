//  模块化设计



//建立模块math.mjs
//导入模块

import {add,minus} from './math';

console.log(add(10,20));
console.log(minus(30,20));

// nodejs 执行命令
// node --experimental-modules 10.mjs 