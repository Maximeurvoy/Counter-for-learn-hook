import React, { useState } from 'react';

function Counter() {
  // Déclare une nouvelle variable d'état, qu’on va appeler « count »
  // Déclare une fonction setCount qui permet de modifier la valeur de count
  // const [count, setCount] = useState(0);
  
  const [start,setStart]= useState(0)
 
  let handleChange=(event)=>{
   setStart(parseInt(event.target.value))
  }

  return (
    <div>
      <p>Le compteur est  à : {start} </p>
      <input value={start} onChange={handleChange}/>
      <button onClick={() => setStart(start + 1)}>
        +1
      </button>
      <button onClick={() => setStart(start - 1)}>
        -1
      </button>
    </div>
  );
}

export default Counter;