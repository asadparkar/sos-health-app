import React from 'react'
import {useState} from 'react'
import { FaPhoneAlt,FaMapMarker,FaBriefcaseMedical} from "react-icons/fa";
import { db } from '../firebase';
import { addDoc, collection, getDocs, onSnapshot, query, where } from 'firebase/firestore';

const Hospital = () => {
    const [isAmbulanceReady,setAmbulanceStatus] = useState(true);

    //user data collection ref
    const userRef = collection(db,'userdata')
    // getting userdata
    //   onSnapshot(userRef, (snapshot)=>{
    //   let users = [];
    //   snapshot.docs.forEach((doc)=>{
    //     users.push({...doc.data(), id: doc.id})
    //   })
    //   console.log(users)
    // })

    // firing query to get unfulfilled userdata
    const q = query(userRef, where("status","==","unfulfilled"))
    // getting real time unfulfilled data
    onSnapshot(q, (snapshot)=>{
      let pendingusers = [];
      snapshot.docs.forEach((doc)=>{
        pendingusers.push({...doc.data(), id: doc.id})
      })
      console.log(pendingusers)
    })
  return (
    <div className='flex justify-between h-screen' style={{fontFamily:'Raleway',fontWeight:'bold'}}>
        <div style={{}}>
          <h1 className='text-3xl'>Ambulances Available</h1>

        <div className='bg-blue-200 rounded-lg mt-5 p-3'>
          <div className='flex items-center'>
            <div>
             <svg style={{fill:'#576CBC',width:'50px'}} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M13 4v-1h2v1h1.22c.489 0 .947.238 1.228.638.862 1.229 3.552 5.362 3.552 5.362s1.391 1.209 2 1.732c.841.722 1 1.299 1 2.268v2.5c0 .828-.672 1.5-1.5 1.5h-1.5c0 1.656-1.344 3-3 3s-3-1.344-3-3h-6c0 1.656-1.344 3-3 3s-3-1.344-3-3h-2c-.265 0-.52-.105-.707-.293-.188-.187-.293-.442-.293-.707v-12c0-.552.448-1 1-1h12zm-6.936 12.75c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25-1.25-.56-1.25-1.25.56-1.25 1.25-1.25zm12 0c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25-1.25-.56-1.25-1.25.56-1.25 1.25-1.25zm-10.064-9.75h-2v2h-2v2h2v2h2v-2h2v-2h-2v-2zm8.057-1h-3.057v4h5.674l-2.617-4z"/></svg>
            </div>

            <div className='m-5'>
                <p className='text-lg'>Ambulance 1</p>
                <p>Status : <span style={{color:isAmbulanceReady?'green':'red'}}>Ready</span></p>
            </div>
          </div>
          <button className='bg-red-400 p-1 text-white rounded-md'>Dispatch</button>
        </div>

        <div className='bg-blue-200 rounded-lg mt-5 p-3'>
          <div className='flex items-center'>
            <div>
             <svg style={{fill:'#576CBC',width:'50px'}} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M13 4v-1h2v1h1.22c.489 0 .947.238 1.228.638.862 1.229 3.552 5.362 3.552 5.362s1.391 1.209 2 1.732c.841.722 1 1.299 1 2.268v2.5c0 .828-.672 1.5-1.5 1.5h-1.5c0 1.656-1.344 3-3 3s-3-1.344-3-3h-6c0 1.656-1.344 3-3 3s-3-1.344-3-3h-2c-.265 0-.52-.105-.707-.293-.188-.187-.293-.442-.293-.707v-12c0-.552.448-1 1-1h12zm-6.936 12.75c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25-1.25-.56-1.25-1.25.56-1.25 1.25-1.25zm12 0c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25-1.25-.56-1.25-1.25.56-1.25 1.25-1.25zm-10.064-9.75h-2v2h-2v2h2v2h2v-2h2v-2h-2v-2zm8.057-1h-3.057v4h5.674l-2.617-4z"/></svg>
            </div>

            <div className='m-5'>
                <p className='text-lg'>Ambulance 1</p>
                <p>Status : <span style={{color:isAmbulanceReady?'green':'red'}}>Ready</span></p>
            </div>
          </div>
          <button className='bg-red-400 p-1 text-white rounded-md'>Dispatch</button>
        </div>

        <div className='bg-blue-200 rounded-lg mt-5 p-3'>
          <div className='flex items-center'>
            <div>
             <svg style={{fill:'#576CBC',width:'50px'}} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M13 4v-1h2v1h1.22c.489 0 .947.238 1.228.638.862 1.229 3.552 5.362 3.552 5.362s1.391 1.209 2 1.732c.841.722 1 1.299 1 2.268v2.5c0 .828-.672 1.5-1.5 1.5h-1.5c0 1.656-1.344 3-3 3s-3-1.344-3-3h-6c0 1.656-1.344 3-3 3s-3-1.344-3-3h-2c-.265 0-.52-.105-.707-.293-.188-.187-.293-.442-.293-.707v-12c0-.552.448-1 1-1h12zm-6.936 12.75c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25-1.25-.56-1.25-1.25.56-1.25 1.25-1.25zm12 0c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25-1.25-.56-1.25-1.25.56-1.25 1.25-1.25zm-10.064-9.75h-2v2h-2v2h2v2h2v-2h2v-2h-2v-2zm8.057-1h-3.057v4h5.674l-2.617-4z"/></svg>
            </div>

            <div className='m-5'>
                <p className='text-lg'>Ambulance 1</p>
                <p>Status : <span style={{color:isAmbulanceReady?'green':'red'}}>Ready</span></p>
            </div>
          </div>
          <button className='bg-red-400 p-1 text-white rounded-md'>Dispatch</button>
        </div>

        </div>

        <div style={{width:'40vw'}} className='bg-blue-200 p-5'>
          <h1 className='text-3xl'>SOS Requests</h1>
          <div className='bg-white bg-opacity-60 p-2 rounded-lg mt-5'>
        
              <div className='items-center' style={{display:'flex'}}>
                <FaPhoneAlt />
                <p className='ml-2' style={{fontFamily:'Roboto'}}>7977567790</p>
              </div>
              <div className='items-center mt-2' style={{display:'flex'}}>
                <FaMapMarker />
                <p className='ml-2'>Users Location here</p>
              </div>
              <div className='items-center mt-2' style={{display:'flex'}}>
                <FaBriefcaseMedical />
                <p className='ml-2'>Possible Heart Attack</p>
              </div>
              <button className='bg-green-600 p-1 text-white rounded-md mt-3'>Accept</button>

          </div>
        </div>
    </div>
  )
}

export default Hospital