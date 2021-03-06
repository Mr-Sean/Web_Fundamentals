function a(){
    return 35;
}
console.log(a())
// Predict: 35
// Result: same

function a(){
    return 4;
}
console.log(a()+a());
// Predict: 4
// Result: 8

function a(b){
    return b;
}
console.log(a(2)+a(4));
// Predict: 6
// Result: same


function a(b){
    console.log(b);
    return b*3;
}
console.log(a(3));
// Predict: 3
// Result: 3
//         9


function a(b){
   return b*4;
   console.log(b);
}
console.log(a(10));
// Predict: 40
//          10
// Result: 40


function a(b){
    if(b<10) {
        return 2;
    }
    else     {
        return 4;
    }
    console.log(b);
}
console.log(a(15));
// Predict: No output
// Result: 4


function a(b,c){
    return b*c;
}
console.log(10,3);
console.log( a(3,10) );
// Predict: 10,3
// Result: 10 3
//         30


function a(b){
    for(var i=0; i<10; i++){
        console.log(i);
    }
    return i;
}
console.log(3);
console.log(4);
// Predict: 3
//          4
// Result: same


function a(){
    for(var i=0; i<10; i++){
        i = i +2;
        console.log(i);
    }
}
a();
// Predict: 2,5,8,11
// Result: same


function a(b,c){
    for(var i=b; i<c; i++) {
       console.log(i);
   }
   return b*c;
}
a(0,10);
console.log(a(0,10));
// Predict: 0
// Result: 0-9, 0-9, 0


function a(){
    for(var i=0; i<10; i++){
       for(var j=0; j<10; j++){
           console.log(j);
       }
       console.log(i);
    }
}
// Predict: 0-9, 0-9
// Result: nothing


function a(){
    for(var i=0; i<10; i++){
        for(var j=0; j<10; j++){
            console.log(i,j);
        }
        console.log(j,i);
    }
}
var z = 10;
// Predict: no output
// Result: no output


function a(){
    var z = 15;
    console.log(z);
}
console.log(z);
var z = 10;
// Predict: 15
// Result: Undefined


function a(){
    var z = 15;
    console.log(z);
}
a();
console.log(z);
var z = 10;
// Predict: 15
//          undefined
// Result: same


function a(){
    var z = 15;
    console.log(z);
    return z;
}
z = a();
console.log(z);
// Predict: 15
//          undefined
// Result: 15
//         15