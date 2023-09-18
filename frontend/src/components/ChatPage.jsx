import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ChatPage = () => {
    const [chats,setChats]=useState([])
    const fetchData=async()=>{
        const  {data}  = await axios.get('/api/chat');
 console.log(data);
 setChats(data)
    }
    useEffect(() => {
       fetchData()
    }, []);
  return (
    <div>
      {
        chats.map((ch)=>(<div key={ch._id}>
            {ch.chatName}
        </div>))
      }
    </div>
  )
}

export default ChatPage
