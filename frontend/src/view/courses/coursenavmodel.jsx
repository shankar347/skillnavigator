import React, { useContext } from 'react'
import logoimg from '../../assets/logo1.png'
import { Flex, Image, Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { skillcontext } from '../components/skillcontext'


const Coursenavmodel = () => {
    const {setsidebaractive}=useContext(skillcontext) 
    const navigate=useNavigate()
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
  >
    Leaderboard
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

export default Coursenavmodel