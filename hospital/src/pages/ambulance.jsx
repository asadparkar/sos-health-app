import React, { useEffect, useState } from 'react'
import { FaPhoneAlt,FaMapMarker,FaBriefcaseMedical, FaMap} from "react-icons/fa";
import {doc, getDoc, query, where, collection, onSnapshot, getDocs,setDoc, updateDoc} from 'firebase/firestore'
import { db } from '../firebase';

let myvariable;

// ambulance data collection ref
const getAmbRef = async() =>{
  const ambcolRef = collection(db,'ambulancedata')
  console.log(`amb ref gotten `)
  return ambcolRef;
}
  
  // query to get amb data having our user's id 
  const getAmbQuery = async() =>{
   const ambcolRef= await getAmbRef()
  const q = query(ambcolRef, where("ambStatus","==","busy"))
  console.log(`amb query made`)
  return q;
}
  // real time ambulance data
  const getAmbs = async()=>{
    const q = await getAmbQuery();
    onSnapshot(q,(snapshot)=>{
      let ambss= []
      snapshot.docs.forEach((doc)=>{
              ambss.push({...doc.data(),id: doc.id})
            })
            console.log(ambss)
            console.log(`ambulance data fetched`)
            myvariable=ambss[0].userId;
            console.log(myvariable)
    })
    return myvariable;
  }

  const getUserRef = async()=>{
  const userRef = collection(db,'userdata')
  console.log(`now, user ref gotten `)
  return userRef;
}
const getUserQuery = async()=>{
  const userRef = await getUserRef();
  const myvariable = await getAmbs()
  const q2 = query(userRef, where("reason","==",myvariable))
  console.log(`user query made and with user id ${myvariable}`)
  return q2;
}
const realTimeUser = async() =>{
  const q2 = await getUserQuery();
  onSnapshot(q2,(snapshot)=>{
      let client = []
      snapshot.docs.forEach((doc)=>{
        client.push({...doc.data(), id: doc.id})
      })
      console.log(client)
    })
    const done=1;
    return done;
}
const gettingAll = async () => {
  const done= await realTimeUser();
  console.log(`all done`)
}


const Ambulance = () => {
  const [AmbulanceStatus,setAmbulanceStatus] = useState('busy');
  const [latitude,setLatitude] = useState(1);
  const [longitude,setLongitude] = useState(2);
  const [render,setRender] = useState(false);
  const [ambs,setAmbs] = useState([])
  const [idFromAmb,setIdFromAmb] = useState('')
  const [counter, setCounter] = useState(0);
  useEffect(()=>{
    navigator.geolocation.watchPosition((position)=>{
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude)
    })
    getAmbs();
  },[])


//   const ambdocRef = doc(db, "ambulancedata", "sf");
//  const docSnap = async() => await getDoc(ambdocRef);
//   console.log("Document data:", docSnap.data());

//   // ambulance data collection ref
//   const getAmbRef = async() =>{
//   const ambcolRef = collection(db,'ambulancedata')
//   console.log(`amb ref gotten `)
//   return ambcolRef;
// }
  
//   // query to get amb data having our user's id 
//   const getAmbQuery = async() =>{
//    const ambcolRef= await getAmbRef()
//   const q = query(ambcolRef, where("ambStatus","==","busy"))
//   console.log(`amb query made`)
//   return q;
// }
//   // real time ambulance data
//  const getAmbs = async()=>{
//   const q = await getAmbQuery();
//   onSnapshot(q,(snapshot)=>{
//     snapshot.docs.forEach((doc)=>{
//             setAmbs({...doc.data(),id: doc.id})
//           })
//           console.log(ambs)
//           console.log(`ambulance data fetched`)
//   })
// }
// const getUserRef = async()=>{
//   const userRef = collection(db,'userdata')
//   console.log(`now, user ref gotten `)
//   return userRef;
// }
// const getUserQuery = async()=>{
//   const userRef = await getUserRef();
//   const myvariable = await getAmbs();
//   const q2 = query(userRef, where("reason","==",myvariable))
//   console.log(`user query made and with user id ${myvariable}`)
//   return q2;
// }
// const realTimeUser = async() =>{
//   const q2 = await getUserQuery();
//   onSnapshot(q2,(snapshot)=>{
//       let client = []
//       snapshot.docs.forEach((doc)=>{
//         client.push({...doc.data(), id: doc.id})
//       })
//       console.log(client)
//     })
//     const done= 1;
//     return done;
// }
// const gettingAll = async () => {
//   const done= await realTimeUser();
//   console.log(`all done`)
// }

// gettingAll();
  // user data collection ref

// let q2;
// const userdocRef = doc(db, "userdata", ambs[0].userId);
// query to get the user we need
// const gettingUser = (aa) =>{
//   q2 = query(userRef, where("reason","==",aa))
// }
// // real time user data
// onSnapshot(q2,(snapshot)=>{
//   let client = []
//   snapshot.docs.forEach((doc)=>{
//     client.push({...doc.data(), id: doc.id})
//   })
//   console.log(client)
// })
const docRef = doc(db, "ambulancedata", "w1ZP2HRRF81uo6IKrcli");
const data = {
  latitude: latitude,
  longitude: longitude
}
setDoc(docRef, data, { merge:true })
.then(docRef => {
    console.log("Document Field has been updated successfully")
})
.catch(error => {
    console.log(error);
})
//  updateDoc(docRef, {
//   latitude: latitude,
//   longitude: longitude
// }).then(()=>{
//   console.log("updated")
// })

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