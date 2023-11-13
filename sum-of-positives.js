function sumOfPostives(arr)  {
    let initialValue=0;
    for (let i=0 ;i < arr.length ; i++) {
        if (arr[i] > 0) {
            initialValue +=arr[i];
            
        }
    }
    return initialValue ;
}
console.log (sumOfPostives([-9,-3,10,9]))