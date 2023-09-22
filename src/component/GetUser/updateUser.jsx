import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
const updateUser = () => {
    const {id} = useParams()
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const updateUser = async() =>{
        try{
            const {data} = await axios.put(`http://localhost:5000/api/${id}`,{name,email,password})
        }catch(e){console.log(e)}
    }
  return (
    <div>updateUser</div>
  )
}

export default updateUser