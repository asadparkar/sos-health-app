import { Box } from '@chakra-ui/react'
import React from 'react'

const Cardiac = () => {
  return (
    <div style={{fontFamily:"Raleway"}}>
        <h1 className='text-2xl font-bold text-red-500'>If a person’s heart is not beating, they could die. When a person is in cardiac arrest, doing CPR and/or using an AED could save their life.</h1>
        <p className='mt-5 font-bold text-xl'>How to Perform CPR?</p>
        <div className='bg-blue-200 p-5 rounded-xl'>
           <p className='text-xl'>The following steps apply to adults and to children over 8 years old.</p>
           <div className='mt-5 font-medium'>
                <p className='mt-2'>1. Place your hands on the person's chest. Imagine a line between the nipples and put the heel of one hand directly on that line, in the center of the chest (i.e., the sternum). Place your other hand on top of that hand. Center your weight directly over your hands.</p>

                <p className='mt-2'>2. Perform chest compressions. Push hard, to a depth of at least 2 inches (but no deeper than 2.4 inches) and fast—about twice per second until the person responds. Your hands shouldn't bounce, but you should lift your entire body weight off the patient in between each compression.</p>

                <p className='mt-2'>3. If you have had CPR training and feel comfortable performing the steps, push on the chest 30 times, then give two rescue breaths.</p>

                <p className='mt-2'>4. Repeat. Repeat cycles in the CPR ratio of 30:2 (chest compressions and breaths) until help arrives or the patient wakes up.</p>
           </div>
        </div>
        <div className='bg-blue-200 p-5 rounded-xl mt-2'>
           <p className='text-xl'>Children 1 to 8 years old</p>
           <div className='mt-5 font-medium'>
                <p className='mt-2'>1.	Place your hands on the child's chest. Place two hands (or one hand if the child is very small) on the child's sternum.</p>

                <p className='mt-2'>2.	Perform chest compressions. Push hard, to a depth of at least 2 inches (but no deeper than 2.4 inches) and fast—about twice per second until the person responds.</p>

                <p className='mt-2'>3.	Give rescue breaths. If you have had CPR training and feel comfortable performing the steps, push on the chest 30 times, then give two rescue breaths..</p>

                <p className='mt-2'>4.	Repeat. Repeat cycles of 30 chest compressions and two breaths until help arrives or the patient wakes up.</p>
           </div>
        </div>
        <div className='bg-blue-200 p-5 rounded-xl mt-2'>
           <p className='text-xl'>Infants</p>
           <div className='mt-5 font-medium'>
                <p className='mt-2'>1.	Flick the bottom of the foot to elicit a response. This takes the place of shaking the shoulders of an older person.</p>

                <p className='mt-2'>2.	Place two fingers of one hand in the center of the chest.</p>

                <p className='mt-2'>3.	Give chest compressions. Gently use your fingers to compress the chest about 1.5 inches deep. Perform two compressions per second, just as you would when giving an adult CPR.</p>

                <p className='mt-2'>4. Perform rescue breathing. If you are comfortable giving rescue breaths, give two of them between each series of 30 chest compressions, just as you would with an older person.</p>
           </div>
        </div>
      <Box style={{display:'flex',justifyContent:'center'}}> 
        <img src='https://cdn.discordapp.com/attachments/835850564771643402/1096529100711149670/image.png' />
       </Box>
    </div>
  )
}

export default Cardiac