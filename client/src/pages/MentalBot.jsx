import React, { useState } from 'react'
import axios from 'axios';
import chatbot from '../assets/chatbot.png'
import.meta.env.OPENAPI_KEY
const MentalBot = () => {

    const [message,setMessage] = useState('');
    const [isLoading,setLoading] = useState(false);
    const [reply,setReply] = useState("Hello! I am your Support Bot. Feel Free to share anything with me .. About how you are feeling , Your plans or really anything that you feel like talking")
    const [chats,setChats] = useState([{
        message:'Hello',
        reply:reply
    }]);
    const handleClick = async()=>{
        const key = 'key'
        if (!message){
            return
        }
        setLoading(true)
        await axios.post('https://api.openai.com/v1/chat/completions',{
            "model":"gpt-3.5-turbo",
            "messages":[
                {
                    "role":"system",
                    "content":"You are a support chat bot meant to support people dealing with mental health issues. Be positive and give people hope to the questions they ask. You are a therapist to the users. Be interactive with users. Behave like a mental therapy bot."
                },
                {
                    "role":"user",
                    "content":`${message}`
                }
            ]

        },{
            headers:{
                'Authorization':`Bearer ${key}`
            }
        }).then((response)=>{
            setLoading(false)
            setChats(chats => [...chats, {
                message:message,
                reply:response.data.choices[0].message.content
            }]);
            console.log(chats)
        }).catch((err)=>{console.log(err)})

    }
  return (
    <div style={{display:'flex',justifyContent:'space-around',fontFamily:'Raleway'}}>
        <div className='w-1/2 flex flex-col p-5'>
            <h1 className='text-3xl font-bold'>E-Therapist</h1>
            <img src='https://cdn-icons-png.flaticon.com/512/3203/3203873.png' style={{width:'20rem'}} alt='HealthBot' />

        </div>
        <div className='w-1/2 '>
            <div className='p-4 border-red-500 rounded-lg chatarea' style={{height:'60vh',borderWidth:'3px',overflow:'scroll'}}>
                {!chats[0] && !isLoading && <h1 className='opacity-70 text-lg'>Your Chats will be visible here</h1>}
                
                {chats.map((index)=>(
                    
                    <div className='mt-2' key={index.id}>
                        <div>
                            <h1><span className='font-bold'>You: </span>{index.message}</h1>
                        </div>
                        <div style={{}} className='bg-red-300 p-1'>
                            <h1>{index.reply}</h1>
                        </div>
                    </div>
                ))}
                {isLoading && <div className='font-bold text-red-600 mt-2'>🤖 HealthBot is Thinking ...</div>}

            </div>
            <div className='flex justify-center items-center mt-8 '>
                <input value={message} onChange={(e)=>setMessage(e.target.value)} placeholder='Send a Message' className='border-red-500 h-10 p-2 rounded-xl' style={{borderWidth:'2px',width:'70%'}}>
                </input>
                
                <button onClick={handleClick} className='border-red-500 p-2 rounded-lg ml-5' style={{borderWidth:'2px'}}><svg style={{fill:'red'}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z"/></svg></button>
            </div>
        </div>

    </div>
  )
}

export default MentalBot