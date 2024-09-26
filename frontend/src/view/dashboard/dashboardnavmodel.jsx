import { Flex, Image, Text } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logoimg from '../../assets/logo1.png'
import { skillcontext } from '../components/skillcontext'
const Dashboardnavmodel = () => {
  const navigate=useNavigate()
  const [leaderboardactive,setleaderboardactive]=useState(false)
  const {setsidebaractive}=useContext(skillcontext) 
  return (

    <Flex 
    flexDir={'column'}
    alignItems={'center'}
    position={'absolute'}
    height={'100%'}
    my={'0 '}
    gap={'0'}
    justify={'space-between'}
    pt={'5'}
    // className='navbar'
    bg={'blue.700'}
    zIndex={'3'}
    right={'0'}
    // top={'0'}
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
  onClick={()=>{navigate('/dashboard/')
    setsidebaractive(false)  
}
  }
  >
   Your courses
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
   onClick={()=>{navigate('/dashboard/leaderboard/batch-wise')
    setsidebaractive(false)   
}
   }
   onMouseOver={()=>setleaderboardactive(true)}
   onMouseLeave={()=>setleaderboardactive(false)}
  >
    Leaderboard
  </Flex>
  {
    leaderboardactive && 
    <Flex 
    width={'full'}
        flexDir={'column'}
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
    navigate('/dashboard/leaderboard/batch-wise')
    setsidebaractive(false)
}}
   onMouseOver={()=>setleaderboardactive(true)}
   onMouseLeave={()=>setleaderboardactive(false)}
  >
    Batch wise
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
    navigate('/dashboard/leaderboard/college-wise')
    setsidebaractive(false)
}  
}onMouseOver={()=>setleaderboardactive(true)}
   onMouseLeave={()=>setleaderboardactive(false)}
  >
    College wise
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
    navigate('/dashboard/leaderboard/course-wise')
    setsidebaractive(false)
}}
onMouseOver={()=>setleaderboardactive(true)}
   onMouseLeave={()=>setleaderboardactive(false)}
  >
    Course wise
  </Flex>
    </Flex>
  }

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
  onClick={()=>{navigate('/courses')
    setsidebaractive(false)
  }

}>
    Course Progress
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
  onClick={()=>{navigate('/dashboard/reports')
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
  onClick={()=>{navigate('/')
    setsidebaractive(false)
  }}
  >
    Home
  </Flex>


  </Flex>
    <Flex alignSelf={'-moz-initial'}
    justifySelf={'end'}
    pb={'12'}>
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

export default Dashboardnavmodel