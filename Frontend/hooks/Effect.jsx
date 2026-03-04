import React, { useEffect, useState } from 'react'

const Effect = () => {
    const [count,setCount]=useState(0);
    const [value,setValue]=useState(0);
    //Syntax
    //useEffect(callback Funcion,[dependence array])
    //dependence array is optional if it not given then it will run one time
    //useEffect(()=>{
        //statement
    //},[dependence])

    //without depend array
    //useEffect(()=>{
        //console.log("useEffect Mounted")
    //})

    //with Empty depend array
    //useEffect(()=>{
      //  console.log("useEffect Mounted")
    //},[])



    //with depend array
    useEffect(()=>{
        console.log("useEffect Mounted")
    },[count])

    const handleIncrement=()=>{
        setCount((count)=>count+1);
        setCount((count)=>count+1);
        setCount((count)=>count+1);
    }

  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={()=>setCount(count+1)}>Inc</button>
      <h1>Value : {value}</h1>
      <button onClick={()=>setValue(value+1)}>+</button>
    </div>
  )
}

export default Effect
