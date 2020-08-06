
// here is a scope variable
let bonus=30;
function sum(first,second){
  
    let result=first+second+bonus;
    // scope variable
    // console.log(result);

    if(result>9){
        let mood="happy";
        // console.log(mood);
    }
    console.log(mood);
    return result;
    

}
// here scope variable is not working
// console.log(result);
 const output=sum(3,7);
//  console.log(bonus);
// console.log(output);