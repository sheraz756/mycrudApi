import React, { useState } from 'react'
import axios from 'axios'
const About = () => {
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
const handlCreate = async () =>{
  const {data} = await axios.post('http://localhost:5000/api/createUser',{name,email,password})
  console.log(data)
  localStorage.setItem('user',JSON.stringify(data))
}
  // const myProfile = {
  //   name :'sheraz',
  //   city:'karachi'
  // }
  // const {name,city} = myProfile
  // console.log(name)
  // console.log(props.kuchBhi)
 const data =  localStorage.getItem('user')
 if(data)
 {
  const user = JSON.parse(data)
  console.log(user.name)
 }
  return (
    <div>
       <input type="text" placeholder='enter your name' onChange={(e)=>{setName(e.target.value)}} />
      <input type="email" placeholder='enter your Email' onChange={(e)=>{setEmail(e.target.value)}} />
      <input type="password" placeholder='enter your Pasword' onChange={(e)=>{setPassword(e.target.value)}} />
      <button onClick={handlCreate}>
        create user
      </button>
    </div>
  )
}

export default About