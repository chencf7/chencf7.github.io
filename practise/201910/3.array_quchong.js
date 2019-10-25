function array_distinct_reduce(array1){
  if(array1 instanceof Array){
    let result=[];
    array1.reduce((acc, crtvalue, index)=>{
      if(acc.findIndex((v)=>v==crtvalue)<0){
        acc.push(crtvalue);
      }
      return acc;
    }, result)
    return result;
  }
}

function array_distinct_map(array1){
  if(array1 instanceof Array){
    let result=new Set(array1);
    return [...result];
  }
}

function array_distinct_objkeys(array1){
  if(array1 instanceof Array){
    let to={};
    for(let i of array1){
      to[i]=i;
    }
    return Object.keys(to).map(d=>parseInt(d));
  }
}

let arr=[1,5,3,4,23,12,3,54,3,23];
// let test=[{'name': 1},{'name':2},{'name':1}];
var ret=array_distinct_objkeys(arr);
console.log(ret);
