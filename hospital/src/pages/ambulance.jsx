import React, { useEffect, useState } from 'react'
import { FaPhoneAlt,FaMapMarker,FaBriefcaseMedical, FaMap} from "react-icons/fa";

const Ambulance = () => {
  const [AmbulanceStatus,setAmbulanceStatus] = useState('free');
  const [latitude,setLatitude] = useState();
  const [longitude,setLongitude] = useState();
  const [render,setRender] = useState(false);

  useEffect(()=>{
    navigator.geolocation.watchPosition((position)=>{
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude)
    })
  },[])
  return (
    <div className=''>
     <p>Latitude:- {latitude}</p>
     <p>Longitude:- {longitude}</p>

      <h1 className='text-3xl text-center' style={{fontFamily:'Raleway',fontWeight:'bold'}}>Ambulance Number 1</h1>

      <div className='mt-5 bg-blue-200 p-4 rounded-lg justify-center flex items-center flex-col' style={{fontFamily:'Raleway'}}>
        <h1 className='text-2xl font-bold text-red-500'>Request</h1>
        {AmbulanceStatus === 'busy'?<div className='flex justify-center items-center flex-col'>
          <div className='flex items-center' style={{fontFamily:'Roboto',fontWeight:'bold',fontSize:20,marginTop:20}}>
            <FaPhoneAlt />
            <p className='ml-2'>7977567790</p>
          </div>
          <div className='flex items-center' style={{fontFamily:'Roboto',fontWeight:'bold',fontSize:20,marginTop:20}}>
            <FaMapMarker/>
            <p className='ml-2'>Some Address will be here</p>
          </div>
          <div className='flex items-center' style={{fontFamily:'Roboto',fontWeight:'bold',fontSize:20,marginTop:20}}>
            <FaBriefcaseMedical/>
            <p className='ml-2'>Emergency Reason</p>
          </div>
          <div className='flex items-center' style={{fontFamily:'Roboto',fontWeight:'bold',fontSize:20,marginTop:20}}>
            <FaMap/>
            <p className='ml-2'>Latitude and Longitude</p>
          </div>
        </div>:<div className='text-center text-2xl'>No Emergencies are there</div>}
        </div>

    </div>
  )
}

export default Ambulance