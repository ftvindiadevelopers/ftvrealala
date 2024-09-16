//* 1. First-Class Function:
// - Definition: Functions that can be treated like any other data type, such as being assigned to variables, passed as arguments, returned from other functions, or stored in data structures.

const foo = () => {
    console.log("foobar");
};
foo();

//* 2. Higher-Order Function:
// - Definition: Functions that can accept other functions as arguments and/or return functions as their results.

function callbackFunction(){
    console.log('I am  a callback function');
}

function higherOrderFunction(func){       
    console.log('I am higher order function')
    func()
}

higherOrderFunction(callbackFunction);

//* 3. Pure Function:
// - Definition: A function that always returns the same output for the same input and has no side effects, meaning it doesn't modify any state outside the function's scope.

function calculateGST(productPrice) {
    return productPrice * 0.05;
}
console.log(calculateGST(15))


//* 4. Closures:
// - Definition: Functions that capture variables from their surrounding lexical scope, allowing those variables to be accessed even after the enclosing function has finished executing.

function init() {
    var name = "Mozilla"; // name is a local variable created by init
    function displayName() {
      console.log(name); // use variable declared in the parent function
    }
    displayName();
  }
init();

//* 5. Currying:
// - Definition: The process of transforming a function that takes multiple arguments into a sequence of functions, each taking a single argument. This allows for partial application of the function.

function calculateVolume(length) {
    return function (breadth) {
        return function (height) {
            return length * breadth * height;
        }
    }
}
console.log(calculateVolume(4)(5)(6));

//* 6. Recursion:
// - Definition: The technique of a function calling itself, often used for solving problems that can be broken down into smaller, similar subproblems.

function doSomething(n) {
    if(n === 0) {
      console.log("TASK COMPLETED!")
      return
    }   
    console.log("I'm doing something.")
    doSomething(n - 1)
  }
  doSomething(3)

//* 7. Anonymous Functions:
// - Definition: Functions without a name, typically used for short, one-off tasks or as arguments to higher-order functions.

var greet = function (platform) { 
    console.log("Welcome to ", platform); 
}; 
  
greet("GeeksforGeeks!"); 

//? or 
setTimeout(function () { 
    console.log("Welcome to GeeksforGeeks!"); 
}, 2000); 

//* 8. Map, Filter, Reduce:
// - Definition: Higher-order functions commonly used in functional programming for transforming, selecting, and aggregating data in collections.

//* 9. Immutable Data Structures:
// - Definition: Data structures that cannot be modified after creation, promoting safer programming practices and facilitating the creation of pure functions.

//* 10. Memoization:
// - Definition: Caching the results of expensive function calls to improve performance by returning the cached result when the same inputs occur again.

//todo

// 1. Tools for UI - Done
// 2. Description for Designing plugin in jQuery or javascript - Done
// 3. Concept of media queries - Done
// 4. Basic knowledge MVC - Done
// 5. Basic knowledge of SQL
// 6. How to handle UI code in c#
// 7. Basic knowledge on angular - Done