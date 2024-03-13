import { useRef } from "react";
import { useCounter } from "../hooks/useCounter";

const Mission = ({ handleClick }: {
  handleClick: (id: string) => void;
}) => {  
  const nameRef = useRef<HTMLInputElement>(null);
  const { counter, increment } = useCounter({});

  return (
    <>
      <h1>Mission here</h1>
      <h3>Counter: {counter}</h3>
      <button onClick={() => increment()}>Increment</button>
      <button onClick={() => handleClick(nameRef.current?.value as string)}>Hot</button>
      <input type="text" ref={nameRef} placeholder="Enter text"/>
    </>
  )
}

export default Mission;
