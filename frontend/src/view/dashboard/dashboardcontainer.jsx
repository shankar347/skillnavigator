import React from 'react'
import { Flex, Text } from '@chakra-ui/react'

const Dashboardcontainer = () => {
  return (
    <Flex flexDir={'column'}
    pb={'2'}
    >
   <Flex flexDir={'column'}
     ml={'5'}
     alignSelf={'start'}
     alignItems={'center'}
   >
   <Flex fontSize={'lg'}
      fontWeight={'550'}
      mt={'2'}
      >
        Your course
      </Flex>
      <Flex
    width={'50px'}
    height={'3.5px'}
    bg={'blue.600'}
    // ml={'5px'}
    borderRadius={'5px'}
    >
    </Flex>
   </Flex>
     <Flex 
     mx={{
      md:'10',
      lg:'10',
      sm:'10',
      base:'4'
     }}
     mt={'5'} 
     flexDir={{
      md:'row',
      lg:'row',
      sm:'row',
      base:'column'
     }}
    
     gap={{
      md:'28',
      lg:'28',
      sm:'28',
      base:'2'
     }}
    //  alignItems={'center'}
     >
      <Flex flexDir={'column'}
      alignSelf={'start'}
      ml={{
        base:'1'
      }}
      // width={'full'}
      alignItems={'center'}
      >
        <Flex width={'100px'}
        height={'100px'}
        borderRadius={'50%'}
        border={'7px solid'}
        borderColor={'gray.300'}
        alignItems={'center'}
        justify={'center'}
        color={'yellow.400'}
        fontSize={'25px'}
        fontWeight={'550'}
        >
          48%
        </Flex> 
        <Flex 
        fontWeight={'550'}
        >
          Completed
        </Flex>
      </Flex>
      <Flex flexDir={'column'}>
        <Text fontWeight={'550'}
        fontSize={'19px'}
        color={'blue.600'}
        mt={'2'}
        >
          Course Details
        </Text>
         <Text fontSize={'17px'}
         fontWeight={'550'}
         mt={'3'}
         >
            Java courses
         </Text>
         <Text 
         fontWeight={'550'}>
           completed java beginner level course for user
         </Text>
      </Flex>
      <Flex flexDir={'column'}
      >
      <Text fontWeight={'550'}
        fontSize={'19px'}
        color={'blue.600'}
        mt={'2'}
        >
          No. of Lessons
        </Text>
        <Text 
        mt={'5'}
        fontSize={'17px'}
        fontWeight={'550'}
        textAlign={{
          md:'center',
          lg:'center',
          sm:'center',
          base:'left'
        }}
        >
            10
        </Text>
      </Flex>
     <Flex 
    flexDir={{
      md:'row',
      lg:'row',
      sm:'row',
      base:'row'
     }}
    
     gap={{
      md:'28',
      lg:'28',
      sm:'28',
      base:'0'
     }}
     mr={{
      base:'3'
     }}
     justify={{
      base:'space-between'
     }}
     >
     <Flex flexDir={'column'}>
      <Text fontWeight={'550'}
        fontSize={'19px'}
        color={'blue.600'}
        mt={'2'}
        >
         Level
        </Text>
        <Text 
        mt={'5'}
        fontSize={'17px'}
        fontWeight={'550'}
        textAlign={'center'}>
          Beginner
        </Text>
      </Flex>
      <Flex flexDir={'column'}>
      <Text fontWeight={'550'}
        fontSize={'19px'}
        color={'blue.600'}
        mt={'2'}
        >
          Duration
        </Text>
        <Text 
        mt={'5'}
        fontSize={'17px'}
        fontWeight={'550'}
        textAlign={'center'}>
            10 hr
        </Text>
      </Flex>
     </Flex>
     </Flex>
     <Flex flexDir={'column'}
     width={'140px'}
     ml={{
      md:'5',
      lg:'5',
      sm:'5',
     base:'2'}}
     alignItems={'center'}
   >
   <Flex fontSize={'18px'}
      fontWeight={'550'}
      mt={'8'}
      >
        Course Lessons
      </Flex>
      <Flex
    width={'70px'}
    height={'3.5px'}
    bg={'blue.600'}
    mt={'2px'}
    // ml={'5px'}
    borderRadius={'5px'}
    >
    </Flex>
   </Flex>
   <Flex 
   mx={{
    md:'20',
    lg:'20',
    sm:'20',
    base:'4' 
  }}
   mt={'4'}
   >
    <Text fontWeight={'550'}
        fontSize={{
          md:'19px',
          lg:'19px',
          sm:'19px',
          base:'16px'
        }}
        color={'blue.600'}
        mt={'2'}
        textAlign={'center'}
        width={'150px'}
        >
          S.No
        </Text>
    <Text fontWeight={'550'}
         fontSize={{
          md:'19px',
          lg:'19px',
          sm:'19px',
          base:'16px'
        }}
        color={'blue.600'}
        mt={'2'}
        width={'700px'}
        textAlign={'center'}
        >
          Course code
        </Text>
        <Text fontWeight={'550'}
        fontSize={{
          md:'19px',
          lg:'19px',
          sm:'19px',
          base:'16px'
        }}
        color={'blue.600'}
        mt={'2'}
        width={'150px'}
        textAlign={'center'}
        >
          Rating
        </Text>
   </Flex>
   <Flex 
    mx={{
      md:'20',
      lg:'20',
      sm:'20',
      base:'4' 
    }}   
   mt={'4'}>
     <Text 
     width={'150px'}
     fontSize={'16px'}
     fontWeight={'550'}
     textAlign={'center'}
     >
        1
     </Text>
     <Text 
     pl={'50px'}
      width={'700px'}
      fontSize={'16px'}
     fontWeight={'550'}
     >
        Introduction to Java
     </Text>
     <Text fontSize={'16px'}
     fontWeight={'550'}
     width={'150px'}
     textAlign={'center'}
     >
        8/10
     </Text>
    </Flex>
    <Flex 
    mx={{
      md:'20',
      lg:'20',
      sm:'20',
      base:'4' 
    }}   
   mt={'4'}>
     <Text 
     width={'150px'}
     fontSize={'16px'}
     fontWeight={'550'}
     textAlign={'center'}
     >
        2
     </Text>
     <Text 
     pl={'50px'}
      width={'700px'}
      fontSize={'16px'}
     fontWeight={'550'}
     >
        Introduction to Java
     </Text>
     <Text fontSize={'16px'}
     fontWeight={'550'}
     width={'150px'}
     textAlign={'center'}
     >
        8/10
     </Text>
    </Flex>
    <Flex 
    mx={{
      md:'20',
      lg:'20',
      sm:'20',
      base:'4' 
    }}   
   mt={'4'}>
     <Text 
     width={'150px'}
     fontSize={'16px'}
     fontWeight={'550'}
     textAlign={'center'}
     >
        3
     </Text>
     <Text 
     pl={'50px'}
      width={'700px'}
      fontSize={'16px'}
     fontWeight={'550'}
     >
        Introduction to Java
     </Text>
     <Text fontSize={'16px'}
     fontWeight={'550'}
     width={'150px'}
     textAlign={'center'}
     >
        8/10
     </Text>
    </Flex>
     </Flex>
  )
}

export default Dashboardcontainer