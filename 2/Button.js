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


//Need to program logic for fibonacci sequence

var i;
for (i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
}
