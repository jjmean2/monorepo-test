import * as R from "remeda";
import { useState, version } from "react";

console.log("[Good] React version in my-util", version);

export function useSum() {
  const [sum, setSum] = useState(0);
  const add = (a: number, b: number) => setSum(a + b);
  return { sum, add };
}
