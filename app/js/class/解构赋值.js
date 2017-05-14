//数组解构赋值
{
  let a,b,rest;
  [a,b]=[1,2];
  console.log(a,b);
}

{
  let a,b,rest;
  [a,b,...rest]=[1,2,3,4,5,6];
  console.log(a,b,rest);
}

//对象解构赋值
{
  let a,b;
  ({a,b}={a:1,b:2})
  console.log(a,b);
}

//初始值防止匹配不上
{
  let a,b,c,rest;
  [a,b,c=3]=[1,2];
  console.log(a,b,c);
}

//解构赋值特别适合变量交换
{
  let a=1;
  let b=2;
  [a,b]=[b,a];
  console.log(a,b);
}

//接受函数返回的数组
{
  function f(){
    return [1,2]
  }
  let a,b;
  [a,b]=f();
  console.log(a,b);
}

//接收函数返回的数组中第1 4个值
{
  function f(){
    return [1,2,3,4,5]
  }
  let a,b,c;
  [a,,,b]=f();
  console.log(a,b);
}

//取出第一个元素，抛弃第二个，其余取出数组
{
  function f(){
    return [1,2,3,4,5]
  }
  let a,b,c;
  [a,,...b]=f();
  console.log(a,b);
}



//对象解构赋值
{
  let o={p:42,q:true};
  let {p,q}=o;
  console.log(p,q);
}

//给默认值，输出3 5
{
  let {a=10,b=5}={a:3};
  console.log(a,b);
}

{
  let metaData={
    title:'abc',
    test:[{
      title:'test',
      desc:'description'
    }]
  }
  let {title:esTitle,test:[{title:cnTitle}]}=metaData;
  console.log(esTitle,cnTitle);
}
