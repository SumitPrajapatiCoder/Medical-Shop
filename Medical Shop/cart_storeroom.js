const data=[];

function addData(name,value){
   data.push({name:name,value:value});
}

function getData(){
   return data;
}


export {addData,getData};