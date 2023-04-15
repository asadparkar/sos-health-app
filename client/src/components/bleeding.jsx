import { Box } from '@chakra-ui/react'
import React from 'react'

const Bleeding = () => {
  return (
    <div style={{fontFamily:"Raleway"}}>

        <div className='bg-blue-200 p-5 rounded-xl'>
           <div className='mt-5 font-medium'>
                <p className='mt-2'>1.	Wash your hands or put on disposable gloves if you have them. This will protect you from infectious diseases like viral hepatitis and HIV/AIDS that can be spread in a person’s blood.</p>

                <p className='mt-2'>2.	Rinse the wound with water</p>

                <p className='mt-2'>3.	Cover the wound with a gauze or cloth (e.g., towel, blanket, clothing).</p>

                <p className='mt-2'>4.	Apply direct pressure to stop the flow of blood and encourage clotting (when blood naturally thickens to stop blood loss).</p>

                <p className='mt-2'>5.	Elevate the bleeding body part above the person’s head if you can.</p>

                <p className='mt-2'>6.	Do not remove the cloth if it becomes soaked. Removing the first layer will interfere with the clotting process and result in more blood loss. Instead, add more layers if needed.</p>

                <p className='mt-2'>7.	Once bleeding has stopped, put a clean bandage on the wound.</p>
           </div>
        </div>
        <div className='bg-blue-200 p-5 rounded-xl mt-2'>
           <p className='text-xl'>Get Medical Help if</p>
           <div className='mt-5 font-medium'>
                <p className='mt-2'>• The wound is deep</p>

                <p className='mt-2'>• The injury oozes blood after pressure has been applied</p>

                <p className='mt-2'>• The injury is from an animal or human bite</p>

                <p className='mt-2'>• Blood is soaking through the bandages</p>
           </div>
        </div>
      <Box style={{display:'flex',justifyContent:'center'}}> 
        <img src='https://thumbs.dreamstime.com/b/first-aid-wound-skin-treatment-procedure-bleeding-cut-bandage-injured-palm-emergency-situation-safety-infographic-199136671.jpg' />
       </Box>
    </div>
  )
}

export default Bleeding