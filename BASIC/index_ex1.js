
// one parameter 

// red
// blue
// green

/*

let colors = ["red","blue","green"];
colors.forEach((value)=> {
   console.log(value);
});

*/



// two parameter - value & index

// the value of the element is : red
// the index of the element is : 0
// the value of the element is : blue
// the index of the element is : 1
// the value of the element is : green
// the index of the element is : 2



let colors = ["red","blue","green"];

colors.forEach((value,index)=> {
   console.log("the value of the element is : " + value);
   console.log("the index of the element is : " + index);
});