function SumWithoutHigh (array) {
    if (array == null) return 0 ;
let maxValue = Math.max(...array);
 let minValue = Math.min(...array);
 let filteredArray = array.filter((x) => x !== maxValue && x !== minValue);
 let newArray = filteredArray.reduce((acc, current) => acc + current, 0);
 return newArray;
}
console.log(SumWithoutHigh([5 ,10 ,6 ,3, 20 , 8]));