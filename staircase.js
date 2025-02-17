function test(n){
    for (let i=1 ;i <=n ;i++ ){
      // console.log(i) 
      let hash = "#".repeat(i);
      let space = " ".repeat (n-i)
      console.log( space + hash) 
    }
   }
   test(6)