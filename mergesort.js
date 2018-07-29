let mergeArr = [2,4,1,6,8,5,3,7];

function mergesort(arr) {
    if (arr.length === 1) {
        return arr;
    }
    let middle = Math.floor(arr.length/2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle, arr.length);  
    return merge(mergesort(left), mergesort(right)); 
 }

function merge(left, right) {
    let finalArr = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while(leftIndex<left.length && rightIndex<right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            finalArr.push(left[leftIndex]);
            leftIndex++;
        }
        else {
            finalArr.push(right[rightIndex]);
            rightIndex++;
        }
    }
    return finalArr.concat(left.slice(leftIndex).concat(right.slice(rightIndex)));

}
mergesort(mergeArr);
console.log(mergesort(mergeArr));
console.log(mergeArr);