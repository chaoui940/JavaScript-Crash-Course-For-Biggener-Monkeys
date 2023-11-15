function counterOfSheeps (arrayOfsheep) {
    let counter = 0 ;
    arrayOfsheep.map ((m) => {
        if (m === true) counter++;
    });
    return counter;
}
console.log(counterOfSheeps([true,false,true,true,true]));