// export let A=123;
//
// export function test(){
//   console.log('test');
// }
//
// export class Hello{
//   test(){
//     console.log('class');
//   }
// }

let A=123;
let test=function(){
  console.log('test');
}
class Hello{
  test(){
    console.log('class');
  }
}

//导出变量名默认，即不起名。起名权交给导入方
//导入方式为import x from '../class/Module' 
//x.A  x.test
export default {
  A,
  test,
  Hello
}

