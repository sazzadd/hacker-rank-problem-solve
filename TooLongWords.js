// console.log("hellow");
const n = parseInt(readline());
for(let i=0;i<n;i++){
 const input = readline()
  if(input.length > 10){
    console.log(`${input[0]}${input.length-2}${input[input.length-1]}`)
}
else{
    console.log(input);
}
}
