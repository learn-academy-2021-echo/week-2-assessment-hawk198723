// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.

var num1 = 15
// Expected output: "15 is divisible by three"
var num2 = 0
// Expected output: "0 is divisible by three"
var num3 = -7
// Expected output: "-7 is not divisible by three"

// a describe method that lists the name of the function OR naming of the particular test.
describe("evenlyDivisibleByThreeOrNot", () => {

    // a test/it method, nested within the describe block, that in plain words, describes that the function does.
    it("logs decides if the number is evenly divisble by three or not", () => {
  
      //an expect method, nested within the test block, calling on the evenlyDivisibleByThreeOrNot() function, followed by the .toEqual() matcher that checks the expected output of the function return.
      expect(evenlyDivisibleByThreeOrNot(15)).toEqual("15 is divisible by three")
      expect(evenlyDivisibleByThreeOrNot(0)).toEqual("0 is divisible by three")
      expect(evenlyDivisibleByThreeOrNot(-7)).toEqual("-7 is not divisible by three")
    })
  })

// b) Create the function that makes the test pass.

// create a function that takes in an number and returns the number wheather is divisible by three or not
const evenlyDivisibleByThreeOrNot = (number) => {
  //create a if statement see if the "parameter's modular is not equal 0" true or not
    if (number % 3 !== 0) {
      //if it's ture then return the number is not divisible by three
        return number + ' is not divisible by three'
      //else then return the number is divisible by three  
    }else{
        return number + ' is divisible by three'
    }
  }
//logging the fuction and pass in the num1
console.log(evenlyDivisibleByThreeOrNot(num1));



//-------------------------------------------------------------------------------------------------------------------------------------
// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

var randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
var randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

// a describe method that lists the name of the function OR naming of the particular test.
describe("capitalizer", () => {
    // redeclare the arrays in the test
    var array1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
    var array2 = ["temperature", "database", "chopsticks", "mango", "deduction"]

    // a test/it method, nested within the describe block, that in plain words, describes that the function does.
    it("logs decides if the number is evenly divisble by three or not", () => {
  
      //an expect method, nested within the test block, calling on the capitalizer() function, followed by the .toEqual() matcher that checks the expected output of the function return.
      expect(capitalizer(array1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
      expect(capitalizer(array2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
    })
  })

// b) Create the function that makes the test pass.

  //declare a function that takes in an array
  const capitalizer = (array) => {
    // create a local variable that maps through the array
    let eachItem = array.map(value => {
      // with each value access the first index and capitalize the letter then concatenate the remainder of the word
      return value[0].toUpperCase() + value.substring(1)
    })
    // return the local variable
    return eachItem
  }
  //logging the function and pass in the array
  console.log(capitalizer(randomNouns1));

//-------------------------------------------------------------------------------------------------------------------------------------
// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

var vowelTester1 = "learn"
// Expected output: 1
var vowelTester2 = "academy"
// Expected output: 0
var vowelTester3 = "challenges"
// Expected output: 2

//  a) Create a test with expect statements for each of the variables provided.

// describe method that lists the name of the function OR naming of the particular test.
  describe("firstVowellocator", () => {
    // redeclare the arrays in the test
    let string1 = "learn"
    let string2 = "academy"
    let string3 = "challenges"
    // a test/it method, nested within the describe block, that in plain words, describes that the function does.
    it("logs the index of the first vowel", () => {
  
      //an expect method, nested within the test block, calling on the firstVowellocator() function, followed by the .toEqual() matcher that checks the expected output of the function return.
      expect(firstVowellocator(string1)).toEqual(1)
      expect(firstVowellocator(string2)).toEqual(0)
      expect(firstVowellocator(string3)).toEqual(2)
    })
  })



// b) Create the function that makes the test pass.


// declare a function that takes in an string
// const firstVowellocator = (string) => {
       // my thought is to split the string into a single letter and store in an array     
//     let array = string.slipt("") // But when I run this code by using "yarn jest", it shows TypeError: string.slipt is not a function
//     // return a higher-order function that takes in the value and the index
//     return array.filter((value, index) => {
//       // return only the values that have an odd index
//       return value  === "a" || value  === "e"|| value  === "i"|| value  === "o"|| value  === "u"
//     })
//   }

//Since I don't know how to make this function work, so I google it, and find this Youtube video.
//here is the refrecen link https://www.youtube.com/watch?v=Xxgauhcq_y8

  // declare a function that takes in an string
  const firstVowellocator = (string) => {
      //declare test and use .search method
    let test = string.search(/[a,e,i,o,u,A,E,I,O,U]/g)
    // return a value 
    return test
  }
  //logging the function and pass in the string
  console.log(firstVowellocator(vowelTester3));