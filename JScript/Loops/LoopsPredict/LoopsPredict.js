for(var num = 0; num < 15; num++){
    console.log(num);
}
// Predict: 0-14
// Result: Correct



for(var i = 1; i < 10; i+=2){
    if(i % 3 == 0){
        console.log(i);
    }
}
// Predict: 3
// Result: 3 & 9


for(var j = 1; j <= 15; j++){
    if(j % 2 == 0){
        j+=2;
    }
    else if(j % 3 == 0){
        j++;
    }
    console.log(j);
}
// Predict: 1,4,6,8,10,12,14,16
// Result: 1,4,5,8,10,11,14,16

