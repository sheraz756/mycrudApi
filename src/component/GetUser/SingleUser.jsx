import React,{useEffect, useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
const SingleUser = () => {
  const [data,setData] = useState({})
  const {id} = useParams()
  console.log(id)
useEffect(()=>{
  const getSingleUser = async()=>{
    try{
const {data} = await axios.get(`http://localhost:5000/api/getAllUser/${id}`)
setData(data)

    }catch(e){console.log(e)}
  }
  getSingleUser()
},[])
  return (
    <div>
      <div>{data.name}</div>
    </div>
  )
}

export default SingleUser