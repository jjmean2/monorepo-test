import { useState, version } from "react";
import React from "react";
import * as ReactDOM from "react-dom";
import { useSum } from "my-util";

console.log("React Version in my-second-app", version);

function App() {
  const [state, setState] = useState(0);
  const { sum, add } = useSum();

  return (
    <div onClick={() => add(1, 3)}>
      {sum}
      {state}
    </div>
  );
}

const rootDiv = document.getElementById("root");
if (rootDiv !== null) {
  ReactDOM.render(<App />, rootDiv);
}
