import React from 'react'
import Child from './Child'

const Parent = () => {
  return (
    <div>
      <Child name="Sumedha" age ={24} isActive={true} food={["Biryani","Dosa","Idli","Salad"]}
      contact={{
        mobile:8659920482,
        email:"vsa071906@gmail.com"
      }}/>
      <Child name="medha" age ={24} isActive={true} food={["Biryani","Dosa","Idli","Salad"]}
      contact={{
        mobile:9988997766,
        email:"medha@gmail.com"
      }}/>
    </div>
  )
}

export default Parent
