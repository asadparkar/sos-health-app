import React, { useState } from 'react'

const Meditation = () => {
    const [video,setVideo] = useState(0);
  return (
    <div>
        <h1 className='text-2xl text-red-500 font-semibold text-center'>When we meditate, we inject far-reaching and long-lasting benefits into our lives: We lower our stress levels, we get to know our pain, we connect better, we improve our focus, and we're kinder to ourselves. Let us walk you through the basics in our new mindful guide on how to meditate.</h1>
        <div className='mt-10'>
        <p className='text-green-700 font-bold'>1) Take a Seat. Find a place that feels calm and quiet to you!</p>
        <p className='text-green-700 font-bold'>2) Notice your body throughout the meditation Process.</p>
        <p className='text-green-700 font-bold'>3) Be mindful of your breathing. This step is very important to practice mindfullness.</p>
        <p className='text-green-700 font-bold'>4) Notice When your mind wanders. Dont try to fit the thoughts. Just accept them and let them pass.</p>
        <p className='text-green-700 font-bold'>5) Close with kindness and think about all the great things you have to practice greatfullness.</p>
        </div>

        {video == 1 && <div className='flex justify-center items-center'>
            <iframe className='mt-10' width="660" height="415" src="https://www.youtube.com/embed/ssss7V1_eyA?&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>}
        {video == 2 && <div className='flex justify-center items-center'>
            <iframe className='mt-10' width="660" height="415" src="https://www.youtube.com/embed/ZToicYcHIOU?&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>}
        {video == 3 && <div className='flex justify-center items-center'>
            <iframe className='mt-10' width="660" height="415" src="https://www.youtube.com/embed/W19PdslW7iw?&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>}


        <div className='mt-10'>
            {video!=0?<h1 className='text-xl font-bold'>Update Timer</h1>:<h1 className='text-xl font-bold'>Choose an Appropriate Timer for your meditation</h1>}
            <div className='flex justify-evenly mt-5'>
                <div onClick={()=>setVideo(1)} className='bg-red-300 rounded-full flex justify-center items-center w-52 h-52 cursor-pointer hover:bg-red-500'>
                    <p className='text-2xl font-bold'>5:00 Minutes</p>
                </div>
                <div onClick={()=>setVideo(2)} className='bg-red-300 rounded-full flex justify-center items-center w-52 h-52 cursor-pointer hover:bg-red-500'>
                    <p className='text-2xl font-bold'>10:00 Minutes</p>
                </div>
                <div onClick={()=>setVideo(3)} className='bg-red-300 rounded-full flex justify-center items-center w-52 h-52 cursor-pointer hover:bg-red-500'>
                    <p className='text-2xl font-bold'>15:00 Minutes</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Meditation