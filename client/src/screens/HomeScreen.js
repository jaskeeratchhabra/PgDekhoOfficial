import React from 'react'
import { useState,useEffect } from 'react'
import axios from "axios"
import Rooms from '../components/Rooms.js';
function HomeScreen() {

  const [rooms,setRooms]=useState([]);
  const [loading,setLoading]=useState();
  const [error,setError]=useState()
  useEffect(()=>{
    const fetchData=async()=>{
      try{
        setLoading(true);
         const data=(await axios.get('/api/rooms/getallrooms')).data;
         setRooms(data);
         setLoading(false);
         console.log(data);
      }
      catch(error){
        setError(true);
         console.log(error);
         setLoading(false)
      }
    }
    fetchData();
},[])


  return (
    <div  className="flex flex-wrap dark:bg-gray-700">
       {loading?<h1>Loading...</h1>: error?(<h1>error</h1>):(
        rooms.map((room,id)=>{
          return <div key={id}>
            <Rooms room={room}/>
          </div>
        }))
       }
  </div>
)
}

export default HomeScreen;