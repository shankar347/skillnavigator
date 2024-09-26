import { Flex, Image } from '@chakra-ui/react'
import React from 'react'
import logoimg from '../../assets/logo1.png'
import { useNavigate } from 'react-router-dom'

const Coursesidebar = () => {

  const lessonid='121aafalj1131'
  const navigate=useNavigate()
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
    // fontSize={'17px'}
    height={'full'}
    >
    <Flex color={'blue.700'}
    fontSize={'18px'}
    mt={'4'}
    alignSelf={'center'}
    fontWeight={'600'}
    >
      Courses
    </Flex>    
    <Flex width={'40px'}
    height={'4px'}
    bg={'red.300'}
    alignSelf={'center'}
    borderRadius={'5px'}
    >
    </Flex>
    <Flex color={'blue.600'}
    fontSize={'16px'}
    mt={'5'}
    width={'full'}
    alignSelf={'center'}
    justify={'center'}
    height={'40px'}
    alignItems={'center'}
    _hover={{
        bg:'blue.500',
        color:'white'
    }}
    cursor={'pointer'}
    onClick={()=>navigate('/courses')}
    fontWeight={'550'}
    >
      Java 
    </Flex>

   <Flex color={'blue.600'}
    fontSize={'16px'}
    mt={'0'}
    width={'full'}
    alignSelf={'center'}
    justify={'center'}
    height={'40px'}
    alignItems={'center'}
    _hover={{
        bg:'blue.500',
        color:'white'
    }}
    cursor={'pointer'}
    onClick={()=>navigate(`/courses/${lessonid}/lessons`)}
    fontWeight={'550'}
    >
      Lesson 1 
    </Flex>
    <Flex color={'blue.600'}
    fontSize={'16px'}
    // mt={'10'}
    width={'full'}
    alignSelf={'center'}
    justify={'center'}
    height={'40px'}
    alignItems={'center'}
    _hover={{
        bg:'blue.500',
        color:'white'
    }}
    cursor={'pointer'}
    onClick={()=>navigate(`/courses/${lessonid}/lessons`)}
    fontWeight={'550'}
    >
      Lesson 2 
    </Flex>
    <Flex color={'blue.600'}
    fontSize={'16px'}
    // mt={'10'}
    width={'full'}
    alignSelf={'center'}
    justify={'center'}
    height={'40px'}
    alignItems={'center'}
    _hover={{
        bg:'blue.500',
        color:'white'
    }}
    cursor={'pointer'}
    onClick={()=>navigate(`/courses/${lessonid}/lessons`)}
    fontWeight={'550'}
    >
      Lesson 3 
    </Flex>
    <Flex color={'blue.600'}
    fontSize={'16px'}
    // mt={'10'}
    width={'full'}
    alignSelf={'center'}
    justify={'center'}
    height={'40px'}
    alignItems={'center'}
    _hover={{
        bg:'blue.500',
        color:'white'
    }}
    cursor={'pointer'}
    onClick={()=>navigate(`/courses/${lessonid}/lessons`)}
    fontWeight={'550'}
    >
      Lesson 4 
    </Flex>
    <Flex color={'blue.600'}
    fontSize={'16px'}
    // mt={'10'}
    width={'full'}
    alignSelf={'center'}
    justify={'center'}
    height={'40px'}
    alignItems={'center'}
    _hover={{
        bg:'blue.500',
        color:'white'
    }}
    cursor={'pointer'}  
    onClick={()=>navigate(`/courses/${lessonid}/lessons`)}
    fontWeight={'550'}
    >
      Lesson 5 
    </Flex>
    <Flex color={'blue.600'}
    fontSize={'16px'}
    // mt={'10'}
    width={'full'}
    alignSelf={'center'}
    justify={'center'}
    height={'40px'}
    alignItems={'center'}
    _hover={{
        bg:'blue.500',
        color:'white'
    }}
    cursor={'pointer'}
    onClick={()=>navigate(`/courses/${lessonid}/lessons`)}
    fontWeight={'550'}
    >
      Lesson 6 
    </Flex>
    <Flex color={'blue.600'}
    fontSize={'16px'}
    // mt={'10'}
    width={'full'}
    alignSelf={'center'}
    justify={'center'}
    height={'40px'}
    alignItems={'center'}
    _hover={{
        bg:'blue.500',
        color:'white'
    }}
    cursor={'pointer'}
    onClick={()=>navigate(`/courses/${lessonid}/lessons`)}
    fontWeight={'550'}
    >
      Lesson 7 
    </Flex>
    <Flex color={'blue.600'}
    fontSize={'16px'}
    // mt={'10'}
    width={'full'}
    alignSelf={'center'}
    justify={'center'}
    height={'40px'}
    alignItems={'center'}
    _hover={{
        bg:'blue.500',
        color:'white'
    }}
    cursor={'pointer'}
    onClick={()=>navigate(`/courses/${lessonid}/lessons`)}
    fontWeight={'550'}
    >
      Lesson 8 
    </Flex>
    <Flex color={'blue.600'}
    fontSize={'16px'}
    // mt={'10'}
    width={'full'}
    alignSelf={'center'}
    justify={'center'}
    height={'40px'}
    alignItems={'center'}
    _hover={{
        bg:'blue.500',
        color:'white'
    }}
    cursor={'pointer'}
    onClick={()=>navigate(`/courses/${lessonid}/lessons`)}
    fontWeight={'550'}
    >
      Lesson 9 
    </Flex>
    <Flex color={'blue.600'}
    fontSize={'16px'}
    // mt={'10'}
    width={'full'}
    alignSelf={'center'}
    justify={'center'}
    height={'40px'}
    alignItems={'center'}
    _hover={{
        bg:'blue.500',
        color:'white'
    }}
    cursor={'pointer'}
    onClick={()=>navigate(`/courses/${lessonid}/lessons`)}
    fontWeight={'550'}
    >
      Lesson 10 
    </Flex>
    <Flex color={'blue.600'}
    fontSize={'16px'}
    // mt={'10'}
    width={'full'}
    alignSelf={'center'}
    justify={'center'}
    height={'40px'}
    alignItems={'center'}
    _hover={{
        bg:'blue.500',
        color:'white'
    }}
    cursor={'pointer'}
    onClick={()=>navigate('/courses/report')}
    fontWeight={'550'}
    >
       report 
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

export default Coursesidebar