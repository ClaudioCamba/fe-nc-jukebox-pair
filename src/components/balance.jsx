import { useState } from "react";

const Balance = () => {
    const [credit, increaseBalance] = useState(0);

    return (
      <div>
        <p>£{credit}</p>
        <button onClick={()=>{
          increaseBalance(credit + 1);
        }} >
          Add Credit!
        </button>
      </div>
    )
  }

export default Balance;