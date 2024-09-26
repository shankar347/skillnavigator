import { Flex, Image } from '@chakra-ui/react'
import React, { useState } from 'react'
import logoimg from '../../assets/logo1.png'
import { useNavigate } from 'react-router-dom'

const Dashboardsidebar = () => {
    const navigate=useNavigate()
   const [leaderboardactive,setleaderboardactive]=useState(false)

    return (
    <Flex 
    className='dashboard'
    color={'gray'}
    mt={'0px'}
    h={'full'}
    flexDir={'column'}
    boxShadow={'0px 0px 10px 0px'}
    alignItems={'center'}
    justify={'space-between'}
>   
    <Flex flexDir={'column'} 
    width={'full'}
    >
    <Flex color={'blue.700'}
    fontSize={'18px'}
    mt={'5'}
    alignSelf={'center'}
    fontWeight={'600'}
    >
        Dashboard
    </Flex>    
    <Flex width={'50px'}
    height={'4px'}
    bg={'red.300'}
    alignSelf={'center'}
    borderRadius={'5px'}
    >
    </Flex>
    <Flex color={'blue.600'}
    fontSize={'18px'}
    mt={'10'}
    width={'full'}
    alignSelf={'center'}
    justify={'center'}
    height={'50px'}
    alignItems={'center'}
    _hover={{
        bg:'blue.500',
        color:'white'
    }}
    cursor={'pointer'}
    onClick={()=>navigate('/dashboard')}
    fontWeight={'550'}
    >
        Your courses
    </Flex>
    <Flex color={'blue.600'}
    fontSize={'18px'}
    mt={'0'}
    width={'full'}
    alignSelf={'center'}
    justify={'center'}
    height={'50px'}
    alignItems={'center'}
    _hover={{
        bg:'blue.500',
        color:'white'
    }}
    cursor={'pointer'}
    onClick={()=>navigate('/dashboard/leaderboard/batch-wise')}
    fontWeight={'550'}
    onMouseOver={()=>setleaderboardactive(true)}
    onMouseLeave={()=>setleaderboardactive(false)}
    >
        Leaderboard
    </Flex>
       
    {
        leaderboardactive &&
        <Flex width={'full'}
        flexDir={'column'}
        >
    <Flex color={'blue.600'}
        fontSize={'18px'}
        mt={'0'}
        width={'full'}
        alignSelf={'center'}
        justify={'center'}
        height={'50px'}
        alignItems={'center'}
        _hover={{
            bg:'blue.500',
            color:'white'
        }}
        cursor={'pointer'}
        onClick={()=>navigate('/dashboard/leaderboard/batch-wise')}
        fontWeight={'550'}
        onMouseOver={()=>setleaderboardactive(true)}
        onMouseLeave={()=>setleaderboardactive(false)}
        >
            Batch wise
        </Flex>
      
        <Flex color={'blue.600'}
        fontSize={'18px'}
        mt={'0'}
        width={'full'}
        alignSelf={'center'}
        justify={'center'}
        height={'50px'}
        alignItems={'center'}
        _hover={{
            bg:'blue.500',
            color:'white'
        }}
        onMouseOver={()=>setleaderboardactive(true)}
        onMouseLeave={()=>setleaderboardactive(false)}
        cursor={'pointer'}
        onClick={()=>navigate('/dashboard/leaderboard/college-wise')}
        fontWeight={'550'}
        >
            College wise
        </Flex>
        <Flex color={'blue.600'}
        fontSize={'18px'}
        mt={'0'}
        width={'full'}
        alignSelf={'center'}
        justify={'center'}
        height={'50px'}
        alignItems={'center'}
        _hover={{
            bg:'blue.500',
            color:'white'
        }}
        onMouseOver={()=>setleaderboardactive(true)}
        onMouseLeave={()=>setleaderboardactive(false)}
        cursor={'pointer'}
        onClick={()=>navigate('/dashboard/leaderboard/course-wise')}
        fontWeight={'550'}
        >
            Course wise
        </Flex>
        </Flex>
    }
    <Flex color={'blue.600'}
    fontSize={'18px'}
    mt={'0'}
    width={'full'}
    alignSelf={'center'}
    justify={'center'}
    height={'50px'}
    onClick={()=>navigate('/dashboard/track-progress')}
    alignItems={'center'}
    _hover={{
        bg:'blue.500',
        color:'white'
    }}
    cursor={'pointer'}
    fontWeight={'550'}
    >
        Course progress
    </Flex>
    <Flex color={'blue.600'}
    fontSize={'18px'}
    mt={'0'}
    width={'full'}
    alignSelf={'center'}
    justify={'center'}
    height={'50px'}
    alignItems={'center'}
    _hover={{
        bg:'blue.500',
        color:'white'
    }}
    cursor={'pointer'}
    onClick={()=>navigate('/dashboard/reports')}
    fontWeight={'550'}
    >
        Reports
    </Flex>
    </Flex>
   <Flex justifySelf={'end'}
//    alignSelf={'end'}
mb={'14'}
   >
   <Image src={logoimg} width={'30px'}
    height={'30px'}
    />
   </Flex>
    </Flex>
  )
}

export default Dashboardsidebar