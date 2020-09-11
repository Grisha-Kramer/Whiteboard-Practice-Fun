import React, { useState, useEffect } from 'react';

function Example() {
    const [count, setCount] = useState(0);
    useEffect (() => {
        document.title = 'You clicked ${count} times';
    });

    return (
        <div>
            <p> You clicked {count} times </p>
            <button onClick={() => setCount (count+1)}>
                Click me!
            </button>
        </div>
    )
}

var i;
var fib = []; // Initialize array!

fib[0] = 0;
fib[1] = 1;
for (i = 2; i <= 10; i++) {
  // Next fibonacci number = previous + one before previous
  // Translated to JavaScript:
  fib[i] = fib[i - 2] + fib[i - 1];
  console.log(fib[i]);
}


//Need to program logic for fibonacci sequence
//The Rule is xn = xn−1 + xn−2
// The Fibonacci Sequence is the series of numbers:

//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...

//The next number is found by adding up the two numbers before it:

var i;
for (i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
}
