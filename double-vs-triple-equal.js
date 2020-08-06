const first=2;
const second="2";

// const first=0;
// const second=false;
// == means check only value here check value 2 and 2 that's why its true
// but ===means check value and type here "2" is string type so that it is false

// another things is if i given 1 and true it will be true because true compere 1 
// and if we compere false and 1 it will be false but if we compere 0 and false it will be true

if(first===second){
    console.log("condition is true");
}
else{
    console.log("condition is false");
}