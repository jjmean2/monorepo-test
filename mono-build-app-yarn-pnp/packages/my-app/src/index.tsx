import { type ReactElement, version } from "react";
import { createRoot } from "react-dom/client";
import { useSum } from "my-util";

console.log("React Version in my-app", version);

function App(): ReactElement {
  const { sum, add } = useSum();

  return <div onClick={() => add(1, 3)}>{sum}</div>;
}

const rootDiv = document.getElementById("root");
if (rootDiv !== null) {
  const root = createRoot(rootDiv);
  root.render(<App />);
}
