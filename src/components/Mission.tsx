import { useRef } from "react";

const Mission = ({ handleClick }: {
  handleClick: (id: string) => void;
}) => {  
  const nameRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <h1>Mission here</h1>
      <button onClick={() => handleClick(nameRef.current?.value as string)}>Hot</button>
      <input type="text" ref={nameRef}/>
    </>
  )
}

export default Mission;
