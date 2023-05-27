import React, { useEffect, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import L from 'leaflet';
import ambulance from '../assets/ambulance.svg'
import {useLocation} from 'react-router-dom'
import {collection,query,where,onSnapshot} from 'firebase/firestore'
import { db } from '../firebase';

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

  // FOR THE TIPS SECTION
  const [tip,setTip] = useState(0);


  return (
    <div className='md:flex-row flex-col-reverse' style={{display:'flex'}}>
    
    <div className='bg-red-200 p-5' style={{width:'100%',marginRight:'15px',height:'90vh',position:'relative'}}>
        <h1 className='text-center font-bold text-2xl mb-5'>What is the casualty facing?</h1>
        {tip==1 && <div>
        <p className='text-md mt-2'>• If the casualty is struggling to breathe, the best position for them to be in is sitting down in an upright position.</p>
        <p className='text-md mt-2'>• Try and establish why they are having difficulty and if they have any medication to help – are they asthmatic? Could they be having an acute allergic reaction? If so help them administer their medication straight away.</p>
        <p className='text-md mt-2'>• If the casualty is struggling to breathe, the best position for them to be in is sitting down in an upright position.</p>
        <p className='text-md mt-2'>• If the casualty is struggling to breathe, the best position for them to be in is sitting down in an upright position.</p>
        <button onClick={()=>setTip(0)} className='bg-red-400 p-2 text-white font-bold mt-5 hover:bg-red-500'>Back</button>
        </div>}
        {tip==2 && <div>
        <p className='text-md mt-2'>• For someone showing signs of a heart attack sit them down in an upright position, preferably a lazy W. Encourage them to take their GTN spray if they have one.</p>
        <p className='text-md mt-2'>•  If they do not feel better and have been prescribed a 300mg Aspirin they should chew this.</p>
        <p className='text-md mt-2'>•  If they become unconscious and stop breathing, start CPR and if possible, get someone to bring the defibrillator quickly.</p>
        <div className='flex justify-between'>
          <img style={{width:'25%'}} src='https://firstaidforlife.org.uk/wp-content/uploads/2022/02/heart-attack-recovery-225x300.jpg' />
          <iframe width="360" height="215" src="https://www.youtube.com/embed/-NodDRTsV88" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <button onClick={()=>setTip(0)} className='bg-red-400 p-2 text-white font-bold mt-5 hover:bg-red-500'>Back</button>
        </div>}
        {tip==3 && <div>
        <p className='text-md mt-2'>• If a person is unconscious and breathing and has no other life-threatening conditions – place in the recovery position to protect their airway.</p>

          <img style={{width:'50%'}} src='https://onlinefirstaid.com/wp-content/uploads/2018/01/adult-recovery-position-2-300x225.jpg' />
        <button onClick={()=>setTip(0)} className='bg-red-400 p-2 text-white font-bold mt-5 hover:bg-red-500'>Back</button>
        </div>}
        {tip==4 && <div>
        <p className='text-md mt-2'>• If they are conscious and you are concerned that they may have damaged their spine, get them to stay still and explain how important it is that they avoid twisting their back or neck.</p>
        <p className='text-md mt-2'>• You can help them to remain still by lying behind their head, supporting the head and neck with your hands in the neutral position.</p>
        <p className='text-md mt-2'>• If they are unconscious and breathing, (even if you are worried about their spine), if you are concerned about their airway, you should try and get help to very carefully log roll them into the recovery position, protecting their neck and back to avoid twisting.</p>
        <button onClick={()=>setTip(0)} className='bg-red-400 p-2 text-white font-bold mt-5 hover:bg-red-500'>Back</button>
        </div>}
        {tip==5 && <div>
        <p className='text-md mt-2'>• Don’t Try To Drive The Person Closer To The Hospital – You might think that cutting down the distance between the hospital and the emergency scene could be helpful, but if the dispatcher doesn’t know your precise location, they aren’t going to be able to give reliable directions to the ambulance. </p>
        <p className='text-md mt-2'>• Don’t Provide Medication Unless Instructed – If the emergency involves an allergic reaction, possible heart attack or diabetic episode, it’s helpful to see if the individual is carrying any medication that could prove beneficial. However, never administer medication without running it by the dispatcher. Improper dosage or administering certain medications can interfere with how the paramedics provide lifesaving care. Never administer medication unless directed.</p>
        <p className='text-md mt-2'>• Don’t Leave The Person Alone – Finally, never leave the victim alone unless it is absolutely necessary in order to get a signal to call 102. Stay with the victim so that you can monitor their vitals and intervene if necessary. You can send others to wait outside for the ambulance or check for a defibrillator, but never leave the injured party alone if you can help it.</p>
        <button onClick={()=>setTip(0)} className='bg-red-400 p-2 text-white font-bold mt-5 hover:bg-red-500'>Back</button>
        </div>}
        {tip==0 && <div style={{justifyContent:'center',alignItems:'center',display:'flex',flexDirection:'column'}}>
          <div>
            <button onClick={()=>setTip(1)} className='bg-red-300 p-2 rounded-lg shadow-sm text-lg font-semibold hover:shadow-lg'>Difficulty Breathing</button>
          </div>
          <div>
            <button onClick={()=>setTip(2)} className='bg-red-300 p-2 rounded-lg shadow-sm text-lg font-semibold hover:shadow-lg mt-4'>Possible Heart Attack</button>
          </div>
          <div>
            <button onClick={()=>setTip(3)}  className='bg-red-300 p-2 rounded-lg shadow-sm text-lg font-semibold hover:shadow-lg mt-4 '>No response from casualty</button>
          </div>
          <div>
            <button onClick={()=>setTip(4)}  className='bg-red-300 p-2 rounded-lg shadow-sm text-lg font-semibold hover:shadow-lg mt-4 '>Possible Spinal Injury</button>
          </div>
          <div>
            <button onClick={()=>setTip(5)}  className='bg-red-300 p-2 rounded-lg shadow-sm text-lg font-semibold hover:shadow-lg mt-4 '>Other necessary Tips</button>
          </div>


        </div>}
        <div style={{position:'absolute',bottom:0,display:'flex',flexDirection:'column'}}>
          <h2 className='text-xl font-bold'>General Instructions</h2>
          <p style={{marginLeft:'15px'}} className='text-lg'>Make sure that your Door is Open</p>
          <p style={{marginLeft:'15px'}} className='text-lg'>Avoid Panicking</p>
          <p style={{marginLeft:'15px'}} className='text-lg'>Clear Pathways for the casualty</p>

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
            you <br /> 
            </Popup>
        </Marker>
        <div>
        <div>
          {ambList.map((ambs)=>(
            <div key={ambs.id}>
              <Marker position={[ambs.latitude,ambs.longitude]} icon={iconPerson}>
               <Popup>
            ambulance. <br /> 
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