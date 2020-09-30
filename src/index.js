
exports.min = function min (array) {
    if (array === undefined || array.length === 0){
        return 0;
    }  
    return Math.min.apply(null, array);
}

exports.max = function max (array) {
    if (array === undefined || array.length === 0){
        return 0;
    }  
    return Math.max.apply(null, array);
}

exports.avg = function avg (array) {
    let sum = 0;
    if (array === undefined || array.length === 0){
        return 0;
    }    
    for ( i=0; i<array.length; i++){                
        if(i !== (array.length - 1)){
            sum = sum + array[i];             
        }     
        else {
            sum = (sum + array[array.length-1])/(array.length);
        }
       
    }
    return sum;
}
