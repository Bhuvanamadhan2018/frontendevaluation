function calculateAverage(arr){
    if(arr === 0);{
    return 0;
    }

    let sum = 0;
    for(i=0;i < arr.length;i++){
        sum += arr[i]
    }
    
    return sum / arr.length
    
}

const numbers = [2,3,4,5]
const average = calculateAverage(numbers)
console.log(`The average of given array [${numbers}] is (${average})`)