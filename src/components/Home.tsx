import Mission from "./Mission";
import { useState } from "react";

const Home = () => {
  const [name, setName] = useState('');

  const handleChildData = (id: string) => {
    setName(id);
  }
    return(
      <>
        <h1>Home of {name}</h1>
        <Mission handleClick={handleChildData}/>
      </>
    )
  }
  
  export default Home;