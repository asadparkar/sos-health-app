import React, { useEffect, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import L from 'leaflet';
import ambulance from '../assets/ambulance.svg'
import {useLocation} from 'react-router-dom'
import {collection,query,where,onSnapshot} from 'firebase/firestore'
import { db } from '../../firebase';

const Sos = () => {
  const [latitude,setLatitude] = useState();
  const [longitude,setLongitude] = useState();
  const [ambList,setAmbList] = useState([{
    latitude:1,
    longitude:1
  }])
  const iconPerson = new L.Icon({
      iconUrl: ambulance,
      iconAnchor: [17,46],
      iconSize: new L.Point(35, 35),
  });
  const location = useLocation();

  useEffect(()=>{
    setLongitude(location.state.longitude);
    setLatitude(location.state.latitude);
    console.log(latitude,longitude)
    getAmbList();
  },[])

  // ambulance data collection ref
  const ambRef = collection(db,'ambulancedata')

   // making query to get "busy" ambulance data
   const q2 = query(ambRef, where("ambStatus","==","busy")
   )

   // getting real time "busy" ambulance data
   const getAmbList = onSnapshot(q2, (snapshott)=>{
    const filteredData = snapshott.docs.map((doc)=> ({...doc.data(),
      id: doc.id,
     }))
setAmbList(filteredData)
  })


  return (
    <div className='md:flex-row flex-col-reverse' style={{display:'flex'}}>
    
    <div className='bg-red-200 p-5' style={{width:'100%',marginRight:'15px',height:'90vh',position:'relative'}}>
        <h1>TIPS GO HERE</h1>
        <div style={{position:'absolute',bottom:0,display:'flex',flexDirection:'column'}}>
          <h2 className='text-xl font-bold'>General Instructions</h2>
          <p style={{marginLeft:'15px'}} className='text-lg'>Make sure that your Door is Open</p>
          <p style={{marginLeft:'15px'}} className='text-lg'>Make sure that the house isn't crowded</p>
        </div>
    </div>

    <div>
        <MapContainer style={{height:'90vh',width:'50vw',flex:'1 !important'}} center={[19.047321, 73.119908]} zoom={10} scrollWheelZoom={false}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[latitude, longitude]}>
            <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
        </Marker>
        <div>
        <div>
          {ambList.map((ambs)=>(
            <div key={ambs.id}>
              <Marker position={[ambs.latitude,ambs.longitude]} icon={iconPerson}>
               <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
               </Popup>
             </Marker>
              {/* <div>{ambs.latitude}</div>
              <div>{ambs.longitude}</div> */}
            </div>
          ))}
        </div>
        </div>
        </MapContainer>
    </div>
    </div>
  )
}

export default Sos;