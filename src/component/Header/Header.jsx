import React,{useState,useEffect} from 'react'
import axios from 'axios'
const Header = () => {
  const [users,setUsers] = useState([])
  useEffect(()=>{
    const getAllUser = async ()=>{
      const {data} = await axios.get('http://localhost:5000/api/getAllUser')
      setUsers(data)
      console.log(data)
    }
    getAllUser()
  },[])
//   const [count,setCount] = useState(0)
//   const [ hide ,setHide] = useState(false)'
//   const handleCount = ()=>{
//     setCount(count+1)
//     setHide(true)
//   }
//  useEffect(()=>{
//   if(hide){
//     alert('dsfsdf')

//     setHide(false)
//   }
//   // const helo = ()=>{
//   //   console.log('hello')
//   // }
//   // helo()
//  },[count])
  return (
    <div>
      {
        users.map((user,index)=>{
          return(
            <div>
              <div>{user.name}</div>
              <div>{user.email}</div>

            </div>
            
          )
        })
      }
      {/* {count}
      <button onClick={handleCount}>count
       </button>
       <button >
        checkIm
       </button> */}
    </div>
  )
}

export default Header