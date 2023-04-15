import { Box } from '@chakra-ui/react'
import React from 'react'

const Chocking = () => {
  return (
    <div style={{fontFamily:"Raleway"}}>
        <h1 className='text-2xl font-bold text-red-500'>The Heimlich maneuver is a series of abdominal thrusts that can help dislodge the thing a person is choking on. This first aid technique should only be done if someone is truly choking.</h1>
        <p className='mt-5 font-bold text-xl'>Here are the steps</p>
        <div className='bg-blue-200 p-5 rounded-xl'>
           <div className='mt-5 font-medium'>
                <p className='mt-2'>1.	Stand behind the person and lean them slightly forward.</p>

                <p className='mt-2'>2.	Put your arms around their waist.</p>

                <p className='mt-2'>3.	Clench your fist and place it between their belly button (navel) and rib cage.</p>

                <p className='mt-2'>4.	Grab your fist with your other hand..</p>

                <p className='mt-2'>5.	Pull your clenched fist sharply backward and upward under the person’s rib cage in 5 quick thrusts.</p>

                <p className='mt-2'>6.	Repeat until the object is coughed up.</p>
                
                <p className='mt-5 font-bold'>For someone who is obese or pregnant, perform the thrusts around the chest instead of the abdomen.</p>
                <p className='mt-2'>1.	Place them on their back and kneel over them.</p>
                <p className='mt-2'>2.	Place the heel of your hand slightly above their belly button..</p>
                <p className='mt-2'>3.	Place your other hand on top of it.</p>
                <p className='mt-2'>4.	Give quick upward thrusts to dislodge the object..</p>


           </div>
        </div>
        <div className='bg-blue-200 p-5 rounded-xl mt-2'>
           <p className='text-xl'>Helping a Choking Infant</p>

                <p className='mt-5 font-bold'>Start with Back Blows</p>
           <div className='mt-5 font-medium'>
                <p className='mt-2'>1.	Lay the baby across your forearm, face down</p>

                <p className='mt-2'>2.	Support them with your lap or upper thigh</p>

                <p className='mt-2'>3.	Hold their chest in your hand and jaw between your fingers (the baby’s head should be pointed down so it’s lower than their body)</p>

                <p className='mt-2'>4.	With the heel of your free hand, give five quick, forceful blows to the baby’s back between the shoulder blades</p>
           </div>
        </div>
        <div className='bg-blue-200 p-5 rounded-xl mt-2'>
           <p className='text-xl'>If back blows don’t work, try chest thrusts:</p>
           <div className='mt-5 font-medium'>
                <p className='mt-2'>1.	Turn the baby face-up, keeping them on your lap for support</p>

                <p className='mt-2'>2.	Keeping their head angled down, lower than their body, hold the back of their head with your hand to steady it.</p>

                <p className='mt-2'>3.	Place two or three of your fingers in the center of the baby’s chest just below the nipples.</p>

                <p className='mt-2'>4.	Give five quick thrusts downward so the breastbone gets pushed in about 1 and a half inches</p>
           </div>
        </div>
      <Box style={{display:'flex',justifyContent:'center'}}> 
        <img src='https://cdn.discordapp.com/attachments/835850564771643402/1096600158743035964/image.png' />
       </Box>
    </div>
  )
}

export default Chocking