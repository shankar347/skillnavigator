import { Button, Flex } from '@chakra-ui/react'
import React, { useState } from 'react'
import Courseslidemodel from './courseslidemodel'
import Mcqmodel from './mcqmodel'
import Mcqrestult from './mcqrestult'

const Coursecontainer = () => {

   const[currentslide,setcurrentslide]=useState(1)
   const totalside=16
   
   
   const handleNextslide=()=>{
    if(currentslide <= totalside)
    {
        setcurrentslide((prevslide)=>prevslide+1)
    }
   }
   console.log(currentslide)
   return (
    <Flex flexDir={'column'}>
       <Flex 
       alignSelf={'center'}
       fontSize={'19px'}
    //    textAlign={'center'}
    fontWeight={'660'}
     color={'blue.700'}
     mt={'5'}
       >
         Introduction to Java
       </Flex>
      
    
    {
        currentslide <= 10 &&  <Courseslidemodel slidenumber={currentslide}/> 
    }

     {
        currentslide > 10  && currentslide <=15  &&<Mcqmodel/> 
     }      
     
     {
        currentslide === 16 && <Mcqrestult/>
     }
       <Button 
    width={'32'}
    alignSelf={'center'}
    bg={'blue.500'}
    color={'white'}
    height={'45px'}
    mt={'16'}
    _hover={{
        bg: 'blue.600',
    }}
    // isDisabled={currentslide === totalside}
    onClick={currentslide !==16 ?  handleNextslide : ''}
    >
        Next
    </Button>
    </Flex>
  )
}

export default Coursecontainer