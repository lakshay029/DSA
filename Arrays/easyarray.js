// Easy Level
// 1. Find the Largest Element

// Given an array, return the largest element.

// Input: [2, 5, 1, 9, 3]
// Output: 9

let array=[2,5,1,9,3]
function largestEle(array){
    let max=-Infinity;
    for(let i =0;i<array.length;i++){
        if(array[i]>max){
             max=array[i];
        }
    }
    return max;
}
console.log(largestEle(array))


// 2. Find the Smallest Element

// Return the minimum element from the array.

// Input: [8, 4, 6, 1]
// Output: 1

function smallestEle(arr){
    let min=Infinity;
    for(let i=0;i<arr.length;i++){
        if(arr[i]<min){
            min=arr[i];
        }
    }
    return min;
}
console.log(smallestEle([8,4,6,1]))

// 3. Calculate Sum of Array
// Find the sum of all elements.
// Input: [1, 2, 3, 4]
// Output: 10

function sumof(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
}
console.log(sumof([1,2,3,4]))

// 4. Count Even and Odd Numbers
// Count how many even and odd numbers exist.
// Input: [1, 2, 3, 4, 5]
// Output:
// Even = 2
// Odd = 3


function countEvenandOdd(arr){
    let even=[];
    let odd=[];

    for(let i=0;i<arr.length;i++){
        if(arr[i]%2===0){
            even.push(arr[i])
        }else{
            odd.push(arr[i])
        }
    }
    return {even,
        odd,
    }
}
console.log(countEvenandOdd([1,2,3,4,5,6]))


// 5. Reverse an Array
// Reverse the array without using .reverse().
// Input: [1, 2, 3, 4]
// Output: [4, 3, 2, 1]

function ReverseArray(arr){
    let reverse=[];
    for(let i=arr.length-1;i>=0;i--){
        reverse.push(arr[i])
    }
    return reverse;
}
console.log(ReverseArray([1,2,3,4]))

// Easy → Medium Level

// 6. Find Second Largest Element
// Return the second largest unique element.
// Input: [12, 35, 1, 10, 34, 1]
// Output: 34

function Secondlargest(arr){
    let largest=-Infinity;
    let seclargest=-Infinity;

    for(let i=0;i<arr.length;i++){
        if(arr[i]>largest){
            seclargest=seclargest;
            largest=arr[i];
        }else if(arr[i]>seclargest && arr[i]!==largest){
            seclargest=arr[i]
        }
    }
    return {
        largest,
        seclargest
    }
}
console.log(Secondlargest([12,35,1,10,34,1]))

// 7. Check if Array is Sorted
// Check whether the array is sorted in ascending order.
// Input: [1, 2, 3, 4]
// Output: true
// Input: [1, 5, 3]
// Output: false

function SortedArray(arr){
    for (let i =1;i<arr.length ;i++){
        if(arr[i]<arr[i-1]){
            return false;
            }
        }
        return true;
    }
console.log(SortedArray([1,2,3,4]))
console.log(SortedArray([1,5,3]))


// 8. Remove Duplicates
// Remove duplicate elements from the array.
// Input: [1, 2, 2, 3, 4, 4]
// Output: [1, 2, 3, 4]

function DuplicateRemove(arr) {
    let unique = [];

    for (let i = 0; i < arr.length; i++) {
        if (!unique.includes(arr[i])) {
            unique.push(arr[i]);
        }
    }
    return unique;
}
console.log(DuplicateRemove([1,2,2,3,4,4]));

// 9. Move All Zeros to End
// Move all zeros to the end while maintaining order.
// Input: [0, 1, 0, 3, 12]
// Output: [1, 3, 12, 0, 0]

function MoveZero(arr){
    let index=0;
    for(let i =0; i<arr.length;i++){
        if(arr[i]!==0){
            arr[index]=arr[i];
            index++;
        }
    }
    while(index<arr.length){
        arr[index]=0;
        index++;
    }
    return arr;
}
console.log(MoveZero([1,0,2,3,4]))









// 10. Linear Search

// Find the index of a target element.

// Input:
// arr = [4, 2, 7, 1]
// target = 7

// Output: 2
// Medium Level
// 11. Rotate Array by K Positions

// Rotate array to the right by k steps.

// Input:
// arr = [1,2,3,4,5]
// k = 2

// Output:
// [4,5,1,2,3]
// 12. Find Missing Number

// Numbers from 1 to n are given with one missing number.

// Input: [1,2,4,5]
// Output: 3
// 13. Find Intersection of Two Arrays

// Return common elements.

// Input:
// arr1 = [1,2,3,4]
// arr2 = [3,4,5,6]

// Output:
// [3,4]
// Medium → Hard Level
// 14. Kadane’s Algorithm (Maximum Subarray Sum)

// Find the contiguous subarray with maximum sum.

// Input:
// [-2,1,-3,4,-1,2,1,-5,4]

// Output:
// 6

// Explanation:
// [4,-1,2,1] = 6

// 15. Trapping Rain Water

// Find how much water can be trapped.

// Input:
// [4,2,0,3,2,5]

// Output:
// 9