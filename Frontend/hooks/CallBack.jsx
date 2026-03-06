import React, { useCallback, useState } from 'react'
import Header from '../src/components/Header';

const CallBack = () => {
    const [count,setCount] = useState(0);
    const demofn=useCallback(()=>{

    },[]);
  return (
    <div>
        <Header demofn={demofn}/>
        <h1>Count : {count}</h1>
        <button onClick={()=>setCount(count+1)}> +</button>
    </div>
  )
}

export default CallBack
