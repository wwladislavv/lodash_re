// Creates an array of elements split into groups the length of size.
//  - If array can't be split evenly, the final chunk will be the remaining elements.

const chunk = (array, chunkSize) => {
    const result =  [];
    let chunkCount = 0;
    let resultChunkIndex = 0;

    for (i = 0; i < array.length; i++) {
        const element = array[i];
        
        if (!result[resultChunkIndex]) {
            result.splice(resultChunkIndex, 0, []);
        }

        result[resultChunkIndex].push(element);
        chunkCount += 1;

        if (chunkCount === chunkSize) {
            chunkCount = 0;
            resultChunkIndex += 1;
        }
    }
    
    return result;
};

console.log(chunk(['a', 'b', 'c', 'd'], 2));
// => [['a', 'b'], ['c', 'd']]
 
console.log(chunk(['a', 'b', 'c', 'd', 'e'], 3));
// => [['a', 'b', 'c'], ['d']]