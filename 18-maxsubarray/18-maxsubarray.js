
const { Heap} = require('heap-js');
let findMaxSubarray = (array,k) =>{
    let n = array.length;
    let max = -Infinity;
    for (let idx = 0;idx<=n-k;idx++) {
        // first idx in every run but the first contains the max from the prev array
        max = array[idx];
        let secondmax = array[idx+1];
        for (let j=idx+1;j<idx+k;j++){
            if (array[j] > max) max = array[j];
            
        }
    }
}


let test= [10,5,2,7,8,7]

findMaxSubarray(test,3)