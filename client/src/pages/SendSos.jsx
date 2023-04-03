import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const SendSos = () => {
    const [isLocation,setLocation] = useState(false);
    const [render,setRender] = useState(false)
    const [latitude,setLatitude] = useState();
    const [longitude,setLongitude] = useState();
    const  [suburb,setSuburb] = useState('')
    const [village,setVillage] = useState('')
    const [phone,setPhone] = useState('')
    const navigate = useNavigate();
    const redirectToSos = ()=>{
      navigate('/sos',{
        state:{
          latitude:latitude,
          longitude:longitude
        }
      })
    }
    useEffect(()=>{
        navigator.geolocation.getCurrentPosition((position)=>{
            setLocation(true);
            axios.get(`https://us1.locationiq.com/v1/reverse?key=pk.53979086dda35ec34044c026cbb68f5d&lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json`).then((response)=>{
                setSuburb(response.data.address.suburb)
                setVillage(response.data.address.village)
            }).catch((err)=>{
                setRender(!render)
            })
            setLatitude(position.coords.latitude)
            setLongitude(position.coords.longitude)
        })
    },[render])
  return (
    <div className='font-medium flex justify-center' style={{fontFamily:'Raleway',height:'60vh'}}>
        <div className='p-4 bg-red-300 sm:w-1/2 w-full flex flex-col items-center'>
          <h1 className='text-3xl font-black mt-10'>Phone Number</h1>
          <input onChange={(e)=>{setPhone(e.target.value)}} className='p-2 bg-gray-200 rounded-md w-5/6 mt-12' placeholder='Phone Number'/>
          <div className='flex justify-center items-center mt-5'>

          <div>
          {isLocation?
          <p className='sm:text-lg text-md text-green-800 font-bold'>Your Location has been autodetected</p> :
          <p className='text-lg text-red-800 font-bold'>Location Not detected. Allow Access</p>}
          </div>
          </div>

          {isLocation && <div className='flex justify-center items-center mt-2'>
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 10c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2m0-5c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3m-7 2.602c0-3.517 3.271-6.602 7-6.602s7 3.085 7 6.602c0 3.455-2.563 7.543-7 14.527-4.489-7.073-7-11.072-7-14.527m7-7.602c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602"/></svg>
            <p className='text-md font-medium'>{suburb}, {village}</p>
          </div>}

          <button className='bg-red-500 text-white p-2 rounded-md hover:bg-red-600 mt-7' onClick={redirectToSos}>Send SOS</button>
        </div>        
    </div>
  )
}

export default SendSos