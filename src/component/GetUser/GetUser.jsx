import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
const GetUser = () => {
    const [users,setUsers] = useState([])
  useEffect(()=>{
    const getAllUser = async ()=>{
      const {data} = await axios.get('http://localhost:5000/api/getAllUser')
      setUsers(data)
      console.log(data)
    }
    getAllUser()
  },[])
  return (
    <div>
        {
        users.map((user,index)=>{
          return(
            <div key={user._id}>
            <Link to = {`/singleUser/${user._id}`}>
            <div>{user.name}</div>
             <div>{user.email}</div>
            </Link>
            </div>
            
          )
        })
      } 
    </div>
  )
}

export default GetUser