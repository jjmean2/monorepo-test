import type { ReactElement } from "react";
import { useState } from "react";
import { createRoot } from "react-dom/client";
import { useSum } from "my-util";

function App(): ReactElement {
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
  const root = createRoot(rootDiv);
  root.render(<App />);
}
