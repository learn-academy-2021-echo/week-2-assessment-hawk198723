// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Echo 2021"
//console.log(cohort.split(""))

// a) Your answer: [ 'E', 'c', 'h', 'o', ' ', '2', '0', '2', '1' ]
// b) Verify and explain: split is a buidt-in function in the javascript,
//    which convert a string into an array and split every word in the array.


// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
//console.log(greeter("LEARN Student"))

// a) Your answer: Hello, LEARN Student!
// b) Verify and explain: I was wrong. I was not pay attention to detail. 
//    So every funtion should have a return value. If we put a "return" 
//    in front `Hello, ${name}!`. that would work.


// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
// console.log(multBy2)

// a) Your answer: [ 8, 10, 12, 14, 16 ]
// b) Verify and explain: .map is a built-in method,in this funtion it  
//    searches every single value of the the given array and muliply by 2, 
//    and return the result back to the array with same length.


// --------------------4) What will this log?

var onlyOdds = [11, 12, 13, 14, 15].filter(value => value % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer:[ 11, 13, 15 ]
// b) Verify and explain:.filter is a built-in method, in this funtion, 
//    it searches every single value of the the given array and modular by 2, 
//    if it doesn't equal 0, means it is a odd, and filter out other values are not odd,
//    return the result back to the array, the length of the array denpends.


// --------------------5) What will this log?

var myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
// console.log(myCodingSkills.languages[0])

// a) Your answer: [JavaScript]
// b) Verify and explain: There's is an object called myCodingSkills, 
//    inside the object, there are four keys, and each key has some value in it.
//    the value of key languages has an array. and languages[0] means the first
//    index of that value is JavaScript. and we console.log that value by calling 
//    myCodingSkills.languages[0], otherwise, the system won't find it and log it.


// --------------------STRETCH: What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Delta",
    this.year = 2021
  }
}
var learnStudent = new Learn("George")
//console.log(learnStudent)

// a) Your answer: student: 'George', cohort: 'Delta', year: 2021
// b) Verify and explain: I am not totally right. It should log 
//    Learn { student: 'George', cohort: 'Delta', year: 2021 }, the whole process is
//    we made a class called Learn and we also use constructor to creating and 
//    initializing an object, and the object only has one parameter called name,
//    there are three keys belongs to this object. Line 81 : we create a new Learn 
//    type instance called learnStudent, the argument is "George". 
//    Line 82: we consle.log this instance, and pass the argument "George" to the parameter
//    of the object, and all the way into the key's value. and print the object out. 
//    With the name of the class and curly braces. 