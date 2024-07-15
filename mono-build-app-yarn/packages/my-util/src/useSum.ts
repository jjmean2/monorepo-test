import * as R from "remeda";
import { useState } from "react";

export function useSum() {
  const [sum, setSum] = useState(0);
  const add = (a: number, b: number) => setSum(a + b);
  return { sum, add };
}
