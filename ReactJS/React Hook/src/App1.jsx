import React, { useState } from "react";

function App1() {
  const [number, setNumber] = useState("");
  const [regularResult, setRegularResult] = useState(null);
  const [arrowResult, setArrowResult] = useState(null);
  const [anonymousResult, setAnonymousResult] = useState(null);

  //Regular Function
  function factorialRegularFunc(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  }

  //Arrow Function
  const factorialArrowFunc = (n) => {
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  };

  //Anonymous Function
  const factorialAnonymousFunc = function (n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }

    return result;
  };

  const calculateFactorial = () => {
    const n = Number(number);

    setRegularResult(factorialRegularFunc(n));
    setArrowResult(factorialArrowFunc(n));
    setAnonymousResult(factorialAnonymousFunc(n));
  };

  return (
    <div>
      <h1>Factorial Calculator</h1>

      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Enter a number"
        min="0"
      /> <br />

      <button onClick={calculateFactorial}>
        Calculate Factorial
      </button>

      {regularResult !== null && (
        <div>
          <h2>Results</h2>

          <p><b>1. Regular Function:</b>{" "}{regularResult}</p>

          <p>
            <b>2. Arrow Function:</b>{" "}{arrowResult}
          </p>

          <p>
            <b>3. Anonymous Function:</b>{" "}{anonymousResult}
          </p>
        </div>
      )}
    </div>
  );
}

export default App1;
