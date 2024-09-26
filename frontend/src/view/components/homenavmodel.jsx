import { Flex, Image, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import logoimg from '../../assets/logo1.png'
import { skillcontext } from './skillcontext'
const Homenavmodel = () => {
  const navigate=useNavigate()
  const {setsidebaractive}=useContext(skillcontext) 
  return (
    <Flex 
    flexDir={'column'}
    alignItems={'center'}
    position={'absolute'}
    height={'100%'}
    my={'0  '}
    gap={'0'}
    justify={'space-between'}
    pt={'5'}
    // className='navbar'
    bg={'blue.700'}
    zIndex={'3'}
    right={'0'}
    color={'gray'}
    boxShadow={'0px 0px 27px 0px '}
    borderRadius={'2px'}
    width={'70%'}
    >
  <Flex flexDir={'column'}
  width={'full'}
  >
  <Flex 
  width={'full'}
  justify={'center'}
  alignItems={'center'}
  alignSelf={'center'}
  textAlign={'center'}
  color={'white'}
  height={'40px'}
  fontWeight={'550'}
  _hover={{
    bg: 'blue.500',
  }}
  onClick={()=>{
    navigate('/')
    setsidebaractive(false)
  }}
  >
    Home
  </Flex>
  
  <Flex 
   width={'full'}
   justify={'center'}
   alignItems={'center'}
   alignSelf={'center'}
   textAlign={'center'}
   color={'white'}
   height={'40px'}
   fontWeight={'550'}
   _hover={{
     bg: 'blue.500',
   }}
   onClick={()=>{
    navigate('/dashboard')
    setsidebaractive(false)
  }}
  >
    Dashboard
  </Flex>
  <Flex 
  width={'full'}
  justify={'center'}
  alignItems={'center'}
  alignSelf={'center'}
  textAlign={'center'}
  color={'white'}
  height={'40px'}
  fontWeight={'550'}
  _hover={{
    bg: 'blue.500',
  }}
  onClick={()=>{
    navigate('/dashboard/reports')
    setsidebaractive(false)
  }}
  >
    Reports
  </Flex>

  <Flex 
  width={'full'}
  justify={'center'}
  alignItems={'center'}
  alignSelf={'center'}
  textAlign={'center'}
  color={'white'}
  height={'40px'}
  fontWeight={'550'}
  _hover={{
    bg: 'blue.500',
  }}
  onClick={()=>{
    navigate('/courses')
    setsidebaractive(false)
  }}
  >
    Courses
  </Flex>

  <Flex 
   width={'full'}
   justify={'center'}
   alignItems={'center'}
   alignSelf={'center'}
   textAlign={'center'}
   color={'white'}
   height={'40px'}
   fontWeight={'550'}
   _hover={{
     bg: 'blue.500',
   }}
   onClick={()=>{
    navigate('/profile')
    setsidebaractive(false)
  }}
  >
    Profile
  </Flex>
  </Flex>
    <Flex 
    // pb={'12'}
    alignSelf={'-moz-initial'}
    justifySelf={'end'}>
   <Image src={logoimg} 
     width={'40px'}
     height={'35px'}/>
       <Text color={'black'} 
     fontFamily={'cursive'}
     fontWeight={'600'}
     fontSize={'21px'}
     >
        skillPro
     </Text>
    </Flex>
    </Flex>
  )
}

export default Homenavmodel