# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

  Your answer: When we build a function or a method, sometimes we need to pass a parameter into it. When we call a function or a method, we pass an argument into the function or the method.

  Researched answer: Function parameters are the names listed in the function's definition. Function arguments are the real values passed to the function. Parameters are initialized to the values of the arguments supplied.



2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

  Your answer: value, index, array. The value is required. The index and array are optional.

  Researched answer: What the parameters are named is arbitrary, but the order will always be the same. The higher-order functions have to take at least one argument (value) but can take two or three if needed.
   .map(value, index, array)
  The value of the array at the current iteration (required).

  The index of the array at the current iteration (optional).

  The array the higher-order function was called on (optional).




3. What is object destructuring?

  Your answer: Destructuring is an opposite way to assign the object. 
  for example:  
  
  var car= { 
      color: "white"
      brand: "Tesla"
  }
  but we can destructure it :  var {color, brand} = car
  and we can use it later by just typing the key, other than typing the whole path, improve efficiency.

  Researched answer: The object destructuring is a useful JavaScript feature to extract properties from objects and bind them to variables. What's better, object destructuring can extract multiple properties in one statement, can access properties from nested objects, and can set a default value if the property doesn't exist.



4. What is the difference between a function and a method?

  Your answer: Function is a tool that can take any kind of data as an input, and return the data. When a function belongs to an object it is called a method.

  Researched answer: A method is a function which is a property of an object. In JavaScript functions themselves are objects, so, in that context, a method is actually an object reference to a function. A function can pass the data that is operated and may return the data. The method operates the data contained in a Class. Data passed to a function is explicit. A method implicitly passes the object on which it was called.



5. What is the difference between a class and an object?

  Your answer: An object is a member or an "instance" of a class.

  Researched answer: A class is a template for creating objects in program, the object is an instance of a class. A class is a logical entity, Object is a physical entity. You can declare class only once. Exp Car. You can create more than one object using a class. Exp Jaguar, BMW, Tesla. Class generates objects; Class generates objects. You can create class using “class” keyword. You can create object using “new” keyword.



6. STRETCH: What is hoisting in JavaScript?

  Your answer: I have no idea..

  Researched answer: In JavaScript, Hoisting is the default behavior of moving all the declarations at the top of the scope before code execution. Basically, it gives us an advantage that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local.



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Class Inheritance: Inheritance enables you to define a class that takes all the functionality from a parent class and allows you to    
   add more. Using class inheritance, a class can inherit all the methods and properties of another class. 

2. React: React is used to build webpages, mobile web pages, and even native mobile applications.

3. React state: State is a plain JavaScript object used by React to represent an information about the component's current situation.  
   It's managed in the component (just like any variable declared in a function).

4. React lifecycle methods: Mounting, Dismounting and updating along with few others are the phases that form the lifecycle of any and 
   every component in Reactjs. These built-in methods are popularly called Reactjs lifecycle methods. They perform specific functions in every phase.

5. DOM: The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change 
   the document structure, style, and content.
