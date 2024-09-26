import { Flex } from '@chakra-ui/react'
import React, { useState } from 'react'

const Mcqmodel = () => {

   const [isselected,setisselected]=useState(false)
   const [isselected2,setisselected2]=useState(false)
   const [isselected3,setisselected3]=useState(false)
   const [isselected4,setisselected4]=useState(false)
   console.log(isselected)

    return (
    <Flex flexDir={'column'}
    width={'100%'}
    mx={'auto'}
    mt={'5'}
    >
    <Flex 
    flexDir={'column'}
    fontSize={'18px'}
    alignSelf={'center'}
    fontWeight={'550'}
    >
    1. Which of the following is not a feature of Java?
    </Flex>

    <Flex flexDir={'column'}
    ml={'10'}
    mt={'5'} 
    gap={'5'}
    alignItems={'center'}
    >
     <Flex mt={''}
     fontSize={'16px'}
     fontWeight={'550'}
     height={'40px'}
     alignItems={'center'}
     width={'35%'}
     cursor={'pointer'}
     pl={'2'}
     border={'2px solid'}
     borderColor={'blue.300'}
     borderRadius={'5px'}
     bg={isselected ? 'blue.300' :''}
     onClick={()=>{
        setisselected(!isselected)
        setisselected2(false)
        setisselected4(false)
        setisselected3(false)
    }}
   >
   (a) Platform-independent 
     </Flex>
     <Flex mt={''}
     height={'40px'}
     fontSize={'16px'}
     fontWeight={'550'}
     width={'35%'}
     cursor={'pointer'}
     pl={'2'}
     border={'2px solid'}
     borderColor={'blue.300'}
     borderRadius={'5px'}
     alignItems={'center'}
     bg={isselected2 ? 'blue.300' :''}
     onClick={()=>{
        setisselected2(!isselected2)
        setisselected4(false)
        setisselected(false)
        setisselected3(false)
    }}
     >
      (b) Object-oriented
     </Flex>
     <Flex mt={''}
     height={'40px'}
     fontSize={'16px'}
     fontWeight={'550'}
     width={'35%'}
     cursor={'pointer'}
     pl={'2'}
     alignItems={'center'}
     border={'2px solid'}
     borderColor={'blue.300'}
     borderRadius={'5px'}
     bg={isselected3 ? 'blue.300' :''}
     onClick={()=>{
        setisselected3(!isselected3)
        setisselected2(false)
        setisselected(false)
        setisselected4(false)
    }}
     >
     (c) Dynamic binding
     </Flex>
     <Flex mt={''}
     fontSize={'16px'}
     fontWeight={'550'}
     width={'35%'}
     height={'40px'}
     cursor={'pointer'}
     pl={'2'}
     alignItems={'center'}
     border={'2px solid'}
     borderColor={'blue.300'}
     borderRadius={'5px'}
     bg={isselected4 ? 'blue.300' :''}
     onClick={()=>{
        setisselected4(!isselected4)
        setisselected2(false)
        setisselected(false)
        setisselected3(false)
    }}
     >
     (d) Pointer manipulation
     </Flex>
    </Flex>
    </Flex>
  )
}

export default Mcqmodel