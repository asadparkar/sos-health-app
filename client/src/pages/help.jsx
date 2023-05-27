import React, { useState } from 'react'
import heart from '../assets/heart.svg'
import bleeding from '../assets/bleeding.svg'
import choking from '../assets/choking.svg'
import burns from '../assets/burns.svg'
import fracture from '../assets/fracture.svg'
import electroinduction from '../assets/electroinduction.svg'
import seizures from '../assets/seizures.svg'
import bites from '../assets/bites.svg'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Textarea,
  Box,
} from '@chakra-ui/react'

import Cardiac from '../components/cardiac';
import Bleeding from '../components/bleeding'
import Chocking from '../components/chocking'
import Burns from '../components/burns'



const Help = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [current,settCurrent] = useState(0)
  const [title,setTitle] = useState('Cardiac Arrest Guidelines')
  return (
    <div>
        <div className='flex p-3 flex-col' style={{fontFamily:'Raleway'}}>

        <div className='flex justify-evenly flex-wrap'>
        
          <div  onClick={()=>{onOpen();settCurrent(0);setTitle('Cardiac Arrest Guidelines')}} className='flex flex-col border-red-500 p-4 rounded-lg shadow-lg hover:shadow-2xl' style={{borderWidth:'2px',transition:'all 0.3s'}}>
            <div className='border-black flex flex-col justify-center items-center' style={{border:'1px solid'}}>
             <img className='proc_img' style={{width:170,transition:'all 0.5s'}} src={heart} alt='heart' />
            </div>
             <h1 className='text-center mt-2 text-2xl font-black opacity-70 text-gray-500' id='proc_text'>Cardiac Arrest</h1>
          </div>
          <div onClick={()=>{onOpen();settCurrent(1);setTitle('Bleeding Guidelines')}} className='flex flex-col border-red-500 p-4 rounded-lg shadow-lg hover:shadow-2xl' style={{borderWidth:'2px',transition:'all 0.3s'}}>
            <div className='border-black flex flex-col justify-center items-center' style={{border:'1px solid'}}>
             <img className='proc_img' style={{width:170,transition:'all 0.5s'}} src={bleeding} alt='heart' />
            </div>
             <h1 className='text-center mt-2 text-2xl font-black opacity-70 text-gray-500' id='proc_text'>Bleeding</h1>
          </div>
          <div onClick={()=>{onOpen();settCurrent(3);setTitle('Chocking Guidelines')}} className='flex flex-col border-red-500 p-4 rounded-lg shadow-lg hover:shadow-2xl' style={{borderWidth:'2px',transition:'all 0.3s'}}>
            <div className='border-black flex flex-col justify-center items-center' style={{border:'1px solid'}}>
             <img className='proc_img' style={{width:170,transition:'all 0.5s'}} src={choking} alt='heart' />
            </div>
             <h1 className='text-center mt-2 text-2xl font-black opacity-70 text-gray-500' id='proc_text'>Choking</h1>
          </div>
          <div onClick={()=>{onOpen();settCurrent(4);setTitle('Burns Guidelines')}} className='flex flex-col border-red-500 p-4 rounded-lg shadow-lg hover:shadow-2xl' style={{borderWidth:'2px',transition:'all 0.3s'}}>
            <div className='border-black flex flex-col justify-center items-center' style={{border:'1px solid'}}>
             <img className='proc_img' style={{width:170,transition:'all 0.5s'}} src={burns} alt='heart' />
            </div>
             <h1 className='text-center mt-2 text-2xl font-black opacity-70 text-gray-500' id='proc_text'>Burns</h1>
          </div>

        </div>

        <div className='flex justify-evenly flex-wrap mt-10'>
        
          <div className='flex flex-col border-red-500 p-4 rounded-lg shadow-lg hover:shadow-2xl' style={{borderWidth:'2px',transition:'all 0.3s'}}>
            <div className='border-black flex flex-col justify-center items-center' style={{border:'1px solid'}}>
             <img className='proc_img' style={{width:170,transition:'all 0.5s'}} src={fracture} alt='heart' />
            </div>
             <h1 className='text-center mt-2 text-2xl font-black opacity-70 text-gray-500' id='proc_text'>Fracture</h1>
          </div>
          <div className='flex flex-col border-red-500 p-4 rounded-lg shadow-lg hover:shadow-2xl' style={{borderWidth:'2px',transition:'all 0.3s'}}>
            <div className='border-black flex flex-col justify-center items-center' style={{border:'1px solid'}}>
             <img className='proc_img' style={{width:170,transition:'all 0.5s'}} src={electroinduction} alt='heart' />
            </div>
             <h1 className='text-center mt-2 text-2xl font-black opacity-70 text-gray-500' id='proc_text'>Electroduction</h1>
          </div>
          <div className='flex flex-col border-red-500 p-4 rounded-lg shadow-lg hover:shadow-2xl' style={{borderWidth:'2px',transition:'all 0.3s'}}>
            <div className='border-black flex flex-col justify-center items-center' style={{border:'1px solid'}}>
             <img className='proc_img' style={{width:170,transition:'all 0.5s'}} src={seizures} alt='heart' />
            </div>
             <h1 className='text-center mt-2 text-2xl font-black opacity-70 text-gray-500' id='proc_text'>Seizures</h1>
          </div>
          <div className='flex flex-col border-red-500 p-4 rounded-lg shadow-lg hover:shadow-2xl' style={{borderWidth:'2px',transition:'all 0.3s'}}>
            <div className='border-black flex flex-col justify-center items-center' style={{border:'1px solid'}}>
             <img className='proc_img' style={{width:170,transition:'all 0.5s'}} src={bites} alt='heart' />
            </div>
             <h1 className='text-center mt-2 text-2xl font-black opacity-70 text-gray-500' id='proc_text'>Bites</h1>
          </div>

        </div>

      <Modal onClose={onClose} size='full' isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody className='mt-5'>
          {current ===0 && <Cardiac />}
          {current ===1 && <Bleeding />}
          {current ===3 && <Chocking />}
          {current ===4 && <Burns />}

          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
        </div>

    </div>
  )
}

export default Help