
// Task
// Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

// Notes
// Array/list size is at least 2.

// Array/list numbers could be a mixture of positives, negatives also zeroes .

// Input >> Output Examples
// adjacentElementsProduct([1, 2, 3]); ==> return 6



// My solution


function adjacentElementsProduct(array) {
  
    let product = []
    
    for(let i = 0; i < array.length-1; i++){
      product.push(array[i] * array[i+1])
    }
   return Math.max(...product)
  }