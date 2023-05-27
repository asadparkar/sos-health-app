import React from 'react'
import { Link } from 'react-router-dom'

const Mental = () => {
  return (
    <div className='font-medium' style={{fontFamily:'Raleway'}}>
      <h1 className='text-2xl'>What Service Would you Like?</h1>
        <div className='flex md:flex-row flex-col items-center justify-center'>
          <div className='bg-red-300 p-5 w-80 h-80 flex flex-col justify-center items-center shadow-md mt-10 md:mr-10 '>
            <h2 className='font-bold text-3xl'>E-therapy</h2>
                <svg style={{fill:'white',width:'105px'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 1c-6.338 0-12 4.226-12 10.007 0 2.05.738 4.063 2.047 5.625.055 1.83-1.023 4.456-1.993 6.368 2.602-.47 6.301-1.508 7.978-2.536 9.236 2.247 15.968-3.405 15.968-9.457 0-5.812-5.701-10.007-12-10.007zm0 15c-.565 0-1.024-.459-1.024-1.025 0-.565.459-1.024 1.024-1.024.566 0 1.024.459 1.024 1.024 0 .566-.458 1.025-1.024 1.025zm1.606-4.858c-.74.799-.775 1.241-.766 1.785h-1.643c-.006-1.208.016-1.742 1.173-2.842.469-.446.84-.799.788-1.493-.047-.66-.599-1.004-1.117-1.004-.581 0-1.261.432-1.261 1.649h-1.646c0-1.966 1.155-3.237 2.941-3.237.849 0 1.592.278 2.09.783.468.473.709 1.125.7 1.883-.013 1.134-.704 1.878-1.259 2.476z"/></svg>
            <p className='text-md text-center'>Share how you are feeling with our AI powered support bot.</p>
            <Link to='/mental-health'>
              <button className='bg-gray-200 bg-opacity-50 p-3 w-28 mt-4 rounded-lg shadow-md text-xl hover:scale-105'>Talk</button>
            </Link>
          </div>

          <div className='bg-red-300 p-5 w-80 h-80 flex flex-col justify-center items-center shadow-md mt-10 mr-10'>
            <h2 className='font-bold text-3xl'>Meditation</h2>
            <svg style={{fill:'white',width:'105px'}} clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m19.023 7c-.389 0-3.3 1-7.023 1-3.75 0-6.605-1-7.024-1-.538 0-.976.438-.976.976 0 .453.321.854.757.951 2.162.563 4.571.948 4.571 3.132 0 3.565-2.321 6.899-3.26 8.476-.086.149-.131.319-.131.489 0 .539.438.976.977.976.261 0 .508-.103.694-.29.769-.772 2.292-3.072 2.989-4.182.391-.622.791-1.18 1.409-1.181.603.001 1.005.559 1.397 1.181.697 1.11 2.219 3.41 2.988 4.182.185.187.432.29.695.29.538 0 .976-.437.976-.976 0-.17-.045-.339-.141-.505-.962-1.617-3.25-4.891-3.25-8.46 0-2.309 2.751-2.661 4.563-3.13.443-.099.766-.5.766-.953 0-.538-.439-.976-.977-.976zm-7-5c1.374 0 2.488 1.12 2.488 2.5s-1.114 2.5-2.488 2.5c-1.373 0-2.489-1.12-2.489-2.5s1.116-2.5 2.489-2.5z" fill-rule="nonzero"/></svg>
            <p className='text-md text-center'>Use our guided meditation for our well being.</p>
            <Link to='/meditation'>
            <button className='bg-gray-200 bg-opacity-50 p-3 w-28 mt-4 rounded-lg shadow-md text-xl hover:scale-105'>Meditate</button>
            </Link>
          </div>
        </div>
    </div>
  )
}

export default Mental