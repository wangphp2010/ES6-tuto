// 函数 用法  
// `` 用法

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