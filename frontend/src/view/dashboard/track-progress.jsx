import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import CourseProgressPage from './chartmapcontainer'

const Trackprogress = () => {
  return (
    <>
     <Flex  
     flexDir={'column'}
     width={'full'}
     >
      <Flex 
         gap={'1'}
         flexDir={'column'}
         alignSelf={'start'}
          alignItems={'center'}
      >
          <Flex mt={'4'}
      ml={'4'}
      fontSize={'lg'}
      fontWeight={'550'}
      >
        Course Progress
      </Flex>
      <Flex
    width={'90px'}
    height={'3.5px'}
    bg={'blue.600'}
    // ml={'5px'}
    borderRadius={'5px'}
    >
    </Flex>
      </Flex> 
      <CourseProgressPage/>
      <Flex 
      fontWeight={'550'}
      fontSize={'18px'}
      mt={'4'}
      alignSelf={'center'}
      textAlign={'center'}
      >
      MCQ scores
      </Flex>
      <Flex
    width={'50px'}
    alignSelf={'center'}
    height={'3.5px'}
    bg={'blue.600'}
    // ml={'5px'}
    borderRadius={'5px'}
    >
    </Flex>
    <Flex 
     mt={'5'}
     mx={'40'}
     >
     <Text fontWeight={'550'}
        fontSize={'19px'}
        color={'blue.600'}
        mt={'2'}
        textAlign={'center'}
        width={'200px'}
        >
         Lesson code 
        </Text>
        <Text fontWeight={'550'}
        fontSize={'19px'}
        color={'blue.600'}
        mt={'2'}
        textAlign={'center'}
        width={'500px'}
        >
         Lesson Title
        </Text>
        <Text fontWeight={'550'}
        fontSize={'19px'}
        color={'blue.600'}
        mt={'2'}
        textAlign={'center'}
        width={'200px'}
        >
          Mark
        </Text>
     </Flex>
    {
      Array(10).fill(null).map((_,i)=>(
        <Flex 
        mt={'5'}
        mx={'40'}
        key={i}
        >
        <Text fontWeight={'550'}
           fontSize={'17px'}
           color={'black'}
           mt={'2'}
           textAlign={'center'}
           width={'200px'}
           >
            1A2AB322
           </Text>
           <Text fontWeight={'550'}
           fontSize={'17px'}
           color={'black'}
           mt={'2'}
           textAlign={'center'}
           width={'500px'}
           >
            Java classification
           </Text>
           <Text fontWeight={'550'}
           fontSize={'17px'}
           color={'black'}
           mt={'2'}
           textAlign={'center'}
           width={'200px'}
           >
             10
           </Text>
        </Flex>
      ))
    }
     </Flex>
     </>
  )
}
    
export default Trackprogress