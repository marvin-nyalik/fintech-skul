import { useState } from "react";

type useCounterProps = {
  initialCount?:number;
}

export const useCounter = ({ initialCount = 0 }: useCounterProps) => {
  const [counter, setCounter] = useState(initialCount);

  const increment = () => {
    setCounter(prev => prev + 1);
  }

  return { counter, increment }
}
