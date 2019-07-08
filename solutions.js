//JS functions roundup

//1. Sum of evens
const sumOfEvens = numArr => numArr.filter(num => num % 2 === 0).reduce((acc, cur) => acc + cur);

console.log(sumOfEvens([1, 2, 3, 4]));
//6


//2. Number of letters
const numberOfLetters = stringArr => stringArr.map(str => str.length);

console.log(numberOfLetters(["hey", "hello", "hej"]));
//[3, 5, 5]


//3. Sum of evens in mixed array
const sumEvenNums = mixedArr => {
  const evenNums = mixedArr.filter(item => item % 2 === 0 ? item : 0);
  const sumEvens = evenNums.reduce((acc, cur) => acc + cur);
  return sumEvens;
}

console.log(sumEvenNums(["hey", 1, 6, 8, "hello"]));
//14


//4. Total number of letters in mixed array
const totalLetters = mixedArr => {
  const findStrings = mixedArr.filter(item => typeof item === 'string');
  const findLength = findStrings.map(item => item.length);
  return findLength.reduce((acc, cur) => acc + cur);
}

console.log(totalLetters(['hey', 1, 2, 'hello', 1, 5, 'yay']));
//8


//5. Instances of vowels
const vowelCount = wordArr => {
  //define the vowels:
  const vowels = 'aeiouAEIOU';
  //join array into one string to make it easier to iterate through:
  const joinArr = wordArr.join("");
  //use spread syntax to make each letter its own element. Filter out the vowels defined in vowels variable. Sort in the end to get correct order:
  const filterVowels = [...joinArr].filter(letter => vowels.includes(letter)).sort();
  //count instances of each vowel with reduce
  const instancesOfVowels = filterVowels.reduce((allVowels, vowel) => {
    if (vowel in allVowels) {
      allVowels[vowel]++;
    } else {
      allVowels[vowel] = 1;
    }
    return allVowels;
  }, {});
  return instancesOfVowels;
}

console.log(vowelCount(['hey', 'hi', 'hello', "haj"]));
//{ a: 1, e: 2, i: 1, o: 1 }


//6. Even and odd count
const evenOddCount = numArr => {
  const count = {evens: 0, odds: 0};
  numArr.forEach(num => {
    if (num % 2 === 0) {
        count.evens++;
      } else {
        count.odds++;
      }
    });
  return count
}

console.log(evenOddCount([1, 2, 3, 4, 5]));
//{ evens: 2, odds: 3 }


//7. Unique numbers
const uniqueNums = numArr => {
  const sortArr = numArr.sort((num1, num2) => num1 - num2)
  const unique = [];
  sortArr.forEach((num, index) => {
    if (sortArr[index] > sortArr[index - 1] && sortArr[index] < sortArr[index + 1]) {
      unique.push(num);
    }
  })
  return unique;
}
console.log(uniqueNums([1, 1, 2, 3, 4, 5, 6, 3, 6]));


//8. String formatting
const str = 'Greetings to the seals';

const filterOdd = originalStr => originalStr.split(" ").filter(word => word.length % 2 === 1);

const lastToUpper = strArr => strArr.map((word) => word.substring(0, word.length - 1) + word[word.length - 1].toUpperCase()).join(" ");

console.log(lastToUpper(filterOdd(str)));
//GreetingS thE sealS


//9. Remove even squares
const numArr = [1, 2, 3, 4, 5];

//calculate the squares of each number in the array
const squareOfNum = numArr => numArr.map(num => num * num);

//filter so only the odd squares are left in the array
const filterOddSquares = numArr => numArr.filter(num => num % 2 === 1);

//convert each number in the array to a string
const toStrArr = numArr => numArr.map(num => String(num));

console.log(toStrArr(filterOddSquares(squareOfNum(numArr))));
//[ '1', '9', '25' ]


//10. String filter and formatting
const strArr = ['bird', 'cat', 'snake', 'cat', 'dog', 'frog', 'llama'];

//split each str to array, use reverse method on each single word array, join back to string
const reverseString = arr => arr.map(word => word.split("").reverse().join(""));

//filter for all words with l, only push words without l to the new array
const removeLWords = arr => {
  const withoutL = [];
  arr.filter(word => word.includes('l') ? withoutL : withoutL.push(word));
  return withoutL;
};

// if word has even amount of letters, capitalize first letter. If word has odd amount of letters, capitalize last letter
const capitalize = arr => {
  return arr.map(word => {
    if (word.length % 2 === 0) {
      return word[0].toUpperCase() + word.substring(1);
    } else {
      return word.substring(0, word.length - 1) + word[word.length - 1].toUpperCase();
    }
  })
}

console.log(capitalize(removeLWords(reverseString(strArr))));
//[ 'Drib', 'taC', 'ekanS', 'taC', 'goD', 'Gorf' ]


//11. remove duplicate strings etc, return number
const array = ['bird', 'cat', 'snake', 'cat', 'dog', 'frog'];

//remove duplicate strings
const removeDuplicateStr = arr => {
  const uniqueStrings = [];
  arr.forEach(word => uniqueStrings.includes(word) ? null : uniqueStrings.push(word));
  return uniqueStrings;
}

//remove strings with even amount of letters
const removeEvenWords = arr => arr.filter(word => word.length % 2 === 1);

//multiply letter count of each string in array
const multiplyLetterCount = arr => {
  const letterCount = arr.map(word => word.length);
  return letterCount.reduce((acc, cur) => acc * cur)
}

console.log(multiplyLetterCount(removeEvenWords(removeDuplicateStr(array))));
//45



function strongEnough(earthquake, age) {
  const tremor = earthquake.map(tremor => tremor.reduce((acc, cur) => acc + cur))
  const magnitude = tremor.reduce((acc, cur) => acc * cur);
  const buildingStrength = 1000 * Math.pow(Math.E, -(0.01 * age));
  return buildingStrength > magnitude ? 'Safe!' : 'Needs Reinforcement!';
}


console.log(strongEnough([[2,3,1],[3,1,1],[1,1,2]], 2));
