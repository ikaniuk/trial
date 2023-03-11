// ---------------------------------CODEWARS---------------------------------
// 1)Given a string of digits, you should replace any digit below 5 with '0' and
// any digit 5 and above with '1'.Return the resulting string.

// function fakeBin(x) {
//   x = x.split('');
//   for (let i = 0; i < x.length; i += 1){
//     if (x[i] < 5) {
//       x[i] = 0;
//     } else {
//       x[i] = 1;
//     }
//   }
//   return x.join('');
    
// }

// 2)-------------------------------------------
// поиск гласных букв
//  const vowels = 'aeiou';
//   let count = 0;
//   for(let i = 0; i < str.length; i += 1){
//     if(vowels.includes(str[i])){
//       count += 1
//     }
//   }
//   return count;

// ------------------------------------------------------------
// Задание:
// Создайте функцию, которая принимает массив значений и возвращает массив с
// дублирующимися значениями или null если повторяющихся значений в массиве нет.

// function findDuplicateNumbers(numbers) {
//     const duplicateNumbers = [];
//     for (let i = 0; i < numbers.length; i += 1){
//         for (let j = i + 1; j < numbers.length; j += 1){
//             if (numbers[i] === numbers[j]) {
//                 duplicateNumbers.push(numbers[i]);
//             }
//         }
//     }

//     return duplicateNumbers.length === 0 ? null : duplicateNumbers;
// }

// console.log(findDuplicateNumbers([1, 2, 4, 5, 6, 10, 22, 33, 44, 11, 2]))


// ----------------------------------------------------------------------
// Create a function that returns the sum of the two lowest positive numbers given an
// array of minimum 4 positive integers.No floats or non - positive integers will be passed.

// For example, when an array is passed like[19, 5, 42, 2, 77], the output should be 7

// function sumOfTwoLowestNumbers(numbers) {
//     let firstSmallestNumber = numbers[0];

//     for (const number of numbers) {
//         if (number < firstSmallestNumber) {
//             firstSmallestNumber = number;
//        }
//     }

//     const minNumbers = numbers.splice(numbers.indexOf(firstSmallestNumber), 1);

//     let secondSmallestNumber = numbers[0];

//     for (const number of numbers) {
//         if (number < secondSmallestNumber) {
//             secondSmallestNumber = number;
//        }
//     }

//     minNumbers.push(secondSmallestNumber);
    
//     return minNumbers[0] + minNumbers[1];
// }

// console.log(sumOfTwoLowestNumbers([10, 2, 1, 4, 5]));
// console.log(sumOfTwoLowestNumbers([10, 3453445, 3453545353453]));

// ----------------------------------------------------------------------------
// function sumTwoSmallestNumbers(numbers) {
//   let smallestNumber = Infinity;
//   let secondSmallestNumber = Infinity;
  
//   for (const number of numbers) {
//     if (number < smallestNumber) {
//       secondSmallestNumber = smallestNumber;
//       smallestNumber = number;
//     } else if (number < secondSmallestNumber) {
//       secondSmallestNumber = number;
//     }
//   }
  
//   return smallestNumber + secondSmallestNumber;
// }



// --------------------------------------------------------------------
// function sumTwoSmallestNumbers(numbers) {
//   // Сортировка массива по возрастанию
//   numbers.sort((a, b) => a - b);

//   // Нахождение суммы двух первых элементов в массиве
//   return numbers[0] + numbers[1];
// }


// function filter_list(values) {
//     const newArr = [];
//     for (const value of values) {
//         if (typeof (value) === 'number') {
//             newArr.push(value);

//         }

        
//     }

//     return newArr;
// }

// console.log(filter_list([1, 2, 34, 'gh', '1']));


// ----------------------------------------------------------------------
// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the
// vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return
// a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would
// become "Ths wbst s fr lsrs LL!".

// function disemvowel(str) {
//     for (let i = 0; i < str.length; i += 1){
//         console.log(str[i]);
//     }
// }

// disemvowel("This website is for losers LOL!")
