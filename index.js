// Code your solutions in this file

function writeCards(arr1, name){
    const emptyA = [];
    for (let i = 0; i < arr1.length; i++){
        emptyA.push(`Thank you, ${arr1[i]}, for the wonderful ${name} gift!`)
    };
    return emptyA;
};

function countDown(numb){
    let i = 0;
    while (i <= numb) {
        console.log(numb);
        numb--;
        };
    };


