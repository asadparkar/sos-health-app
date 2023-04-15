import { Box } from '@chakra-ui/react'
import React from 'react'

const Burns = () => {
  return (
    <div style={{fontFamily:"Raleway"}}>

        <p className='mt-5 font-bold text-xl'>Treating major burns</p>
        <div className='bg-blue-200 p-5 rounded-xl'>
           <p className='text-xl'>Until emergency help arrives:</p>
           <div className='mt-5 font-medium'>
                <p className='mt-2'>•	Protect the burned person from further harm. If you can do so safely, make sure the person you're helping is not in contact with the source of the burn. For electrical burns, make sure the power source is off before you approach the burned person. Don't try to remove clothing stuck in the burn.</p>

                <p className='mt-2'>•	Make certain that the person burned is breathing. If needed, begin rescue breathing if you know how.</p>

                <p className='mt-2'>•	Remove jewelry, belts and other tight items, especially from the burned area and the neck. Burned areas swell quickly.</p>

                <p className='mt-2'>•	Watch for signs of shock. Signs and symptoms include cool, clammy skin, weak pulse and shallow breathing.</p>
           </div>
        </div>
        <div className='bg-blue-200 p-5 rounded-xl mt-2'>
           <p className='text-xl'>Treating minor burns</p>
           <div className='mt-5 font-medium'>
                <p className='mt-2'>•	Cool the burn. Hold the area under cool (not cold) running water for about 10 minutes. If the burn is on the face, apply a cool, wet cloth until the pain eases. For a mouth burn from hot food or drink, put a piece of ice in the mouth for a few minutes.</p>

                <p className='mt-2'>•	Remove rings or other tight items from the burned area. Try to do this quickly and gently, before the area swells.</p>

                <p className='mt-2'>•	Don't break blisters. Blisters help protect against infection. If a blister does break, gently clean the area with water and apply an antibiotic ointment.</p>

                <p className='mt-2'>•	Apply lotion. After the burn is cooled, apply a lotion, such as one with aloe vera or cocoa butter. This helps prevent drying and provides relief</p>
                <p className='mt-2'>•	Bandage the burn. Cover the burn with a clean bandage. Wrap it loosely to avoid putting pressure on burned skin. Bandaging keeps air off the area, reduces pain and protects blistered skin.</p>
                <p className='mt-2'>•	If needed, take a nonprescription pain reliever, such as ibuprofen (Advil, Motrin IB, others), naproxen sodium (Aleve) or acetaminophen (Tylenol, others).</p>
           </div>
        </div>

      <Box style={{display:'flex',justifyContent:'center'}}> 
        <img src='https://vmedo.com/blog/wp-content/uploads/2018/03/FirstAidForBurn-1.png' />
       </Box>
    </div>
  )
}

export default Burns