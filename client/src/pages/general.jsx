import React from 'react'
import { Link } from 'react-router-dom'

const General = () => {
  return (
    <div className='font-medium' style={{fontFamily:'Raleway'}}>
      <h1 className='text-2xl'>What Service Would you Like?</h1>
        <div className='flex md:flex-row flex-col items-center justify-center'>
          <div className='bg-red-300 p-5 w-80 h-80 flex flex-col justify-center items-center shadow-md mt-10 md:mr-10 '>
            <h2 className='font-bold text-3xl'>Procedures</h2>
            <svg style={{fill:'white',width:'105px'}} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M10.865 17.097c-2.289.805-5.172-.535-5.755-2.756-2.878-.005-5.086-1.408-5.11-3.886-.038-4.031 4.516-9.448 12-9.455 7.485-.007 11.996 5.312 12 10.329.004 5.017-4.182 6.897-7.607 6.263-.364 1.507-.171 3.578.232 4.747l-2.109.661c-.813-2.788-2.2-4.967-3.651-5.903zm-.692-9.276c-.691-.314-1.173-1.012-1.173-1.821 0-1.104.896-2 2-2s2 .896 2 2c0 .26-.05.509-.14.738 1.214.911 2.405 1.855 3.599 2.794.425-.333.96-.532 1.541-.532 1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5c-1.171 0-2.155-.807-2.426-1.895-1.201.098-2.404.173-3.606.254-.169.933-.987 1.641-1.968 1.641-1.104 0-2-.896-2-2 0-1.033.785-1.884 1.79-1.989.121-.731.252-1.46.383-2.19zm2.06-.246c-.297.232-.661.383-1.058.417l-.363 2.18c.504.224.898.651 1.08 1.177l3.647-.289c.047-.267.137-.519.262-.749l-3.568-2.736z"/></svg>
            <p className='text-md text-center'>View Procedures for various Injuries and prevent serious Injuries</p>
            <Link to='/procedures'>
              <button className='bg-gray-200 bg-opacity-50 p-3 w-28 mt-4 rounded-lg shadow-md text-xl hover:scale-105'>View</button>
            </Link>
          </div>

          <div className='bg-red-300 p-5 w-80 h-80 flex flex-col justify-center items-center shadow-md mt-10'>
            <h2 className='font-bold text-3xl'>ChatBot</h2>
            <svg style={{fill:'white',width:'105px'}} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M24 20h-3v4l-5.333-4h-7.667v-4h2v2h6.333l2.667 2v-2h3v-8.001h-2v-2h4v12.001zm-6-6h-9.667l-5.333 4v-4h-3v-14.001h18v14.001zm-13-8c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm4 0c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm4 0c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z"/></svg>
            <p className='text-md text-center'>Use our AI Powered ChatBot for health related queries</p>
            <Link to='/chatbot'>
            <button className='bg-gray-200 bg-opacity-50 p-3 w-28 mt-4 rounded-lg shadow-md text-xl hover:scale-105'>Chat</button>
            </Link>
          </div>
        </div>
    </div>
  )
}

export default General