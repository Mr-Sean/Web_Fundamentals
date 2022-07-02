var arr = [8,6,7,5,3,0,9]
for(var i = 0; i < arr.length; i++){    
    console.log(arr[i]);
}
// Predict = 8,6,7,5,3,0,9
// Result = Correct



var arr = [7,3,8,4,2,0,1];
for(var i = 0; i < arr.length; i++){ 
    if(arr[i] % 2 == 0){
        console.log(arr[i]);
    } 
    else{
        console.log("That is odd!");
    }
}
// Predict = That is odd (x 2), 8, 4, 2, 0, That is odd
// Result = Correct


var arr = [1,3,8,-5,0,-2,4,-1];
var newArr = [];
for(var i = 0; i< arr.length; i++){
    if(arr[i] < 0){
        newArr.push(arr[i]);
        arr[i] = arr[i] * -1;
    }
    else if(arr[i] == 0){
        arr[i] = "Zero";
    }
    else{
        arr[i] = arr[i] * -1;
    }
}
console.log(arr);
console.log(newArr);

// Predict = arr (-1,-3,-8,-5,Zero,-2,-4,-1)
//           newarr (5,2,1)

// Result  = arr (-1,-3,-8,5,Zero,2,-4,1)
//           newarr (-5,-2,-1)

// I was close and I see what I did wrong