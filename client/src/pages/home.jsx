import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='font-medium' style={{fontFamily:'Raleway'}}>
      <h1 className='text-2xl'>What Service Would you Like?</h1>
        <div className='flex md:flex-row flex-col items-center justify-center'>
          <div className='bg-red-300 p-5 w-80 h-80 flex flex-col justify-center items-center shadow-md mt-10 md:mr-10 '>
            <h2 className='font-bold text-3xl'>Emergency</h2>
            <svg className='' style={{width:'105px',fill:'white'}} clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12.002 21.534c5.518 0 9.998-4.48 9.998-9.998s-4.48-9.997-9.998-9.997c-5.517 0-9.997 4.479-9.997 9.997s4.48 9.998 9.997 9.998zm0-1.5c-4.69 0-8.497-3.808-8.497-8.498s3.807-8.497 8.497-8.497 8.498 3.807 8.498 8.497-3.808 8.498-8.498 8.498zm0-6.5c-.414 0-.75-.336-.75-.75v-5.5c0-.414.336-.75.75-.75s.75.336.75.75v5.5c0 .414-.336.75-.75.75zm-.002 3c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z" fill-rule="nonzero"/></svg>
            <Link to='/sendSos'>
              <button className='bg-gray-200 bg-opacity-50 p-3 w-28 mt-4 rounded-lg shadow-md text-xl hover:scale-105'>SOS</button>
            </Link>
          </div>

          <div className='bg-red-300 p-5 w-80 h-80 flex flex-col justify-center items-center shadow-md mt-10'>
            <h2 className='font-bold text-3xl'>General Services</h2>
            <svg style={{fill:'white',width:'105px'}}  xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 24 24"><path d="M12 0c-3.371 2.866-5.484 3-9 3v11.535c0 4.603 3.203 5.804 9 9.465 5.797-3.661 9-4.862 9-9.465v-11.535c-3.516 0-5.629-.134-9-3zm0 2.544c2.5 1.805 4.555 2.292 7 2.416v9.575c0 3.042-1.686 3.827-7 7.108-5.309-3.278-7-4.065-7-7.108v-9.575c2.447-.124 4.5-.611 7-2.416zm0 3.956c3.036 0 5.5 2.464 5.5 5.5s-2.464 5.5-5.5 5.5-5.5-2.464-5.5-5.5 2.464-5.5 5.5-5.5zm1 2.5h-2v2h-2v2h2v2h2v-2h2v-2h-2v-2z"/></svg>
            <button className='bg-gray-200 bg-opacity-50 p-3 w-28 mt-4 rounded-lg shadow-md text-xl hover:scale-105'>General</button>
          </div>
        </div>
    </div>
  )
}

export default Home