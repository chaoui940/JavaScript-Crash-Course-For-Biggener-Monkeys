
function repeatString (numbre,str) {
    let NewString="";
    for (let i = 0; i < numbre; i++) {
        NewString+=str;
        
    }
    return NewString;
}
console.log(repeatString(5,"Baku "));