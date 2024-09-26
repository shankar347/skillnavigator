import { Flex } from '@chakra-ui/react'
import React from 'react'

const Courseslidemodel = ({slidenumber}) => {
  return (
     <Flex flexDir={'column'} 
     width={'full'}
     >
 <Flex 
       fontSize={'17px'}
       fontWeight={'550'}
       ml={'7'}
       mt={'5'}
       >
         Creation of Java
       </Flex>
       <Flex flexDir={'column'}
       mx={'40'}
       alignSelf={'center'}
       mt={'7'}
       gap={'5'}
       >
         <Flex
         gap={'4'}
         >
         <Flex 
         width={'10px'}
         height={'10px'}
         bg={'blue.600'}
         mt={'5px'}
         alignSelf={'start'}
         borderRadius={'50px'}
         >
         </Flex>
         <Flex 
         width={'90%'}
         >
         Java was created in 1995 by James Gosling and his team at
          Sun Microsystems. It was designed to be 
          platform-independent, allowing developers to 
          write code once and run it anywhere with the Java
           Virtual Machine (JVM). Java's syntax is largely 
           based on C and C++, with a focus on simplicity,
            object-oriented programming, and security.
             Over the years, Java has become one of the 
             most popular languages for web, desktop,
              and mobile applications.
         </Flex>
        </Flex> 
        <Flex
         gap={'2'}
         >
         <Flex 
         width={'10px'}
         height={'10px'}
         bg={'blue.600'}
         mt={'5px'}
         alignSelf={'start'}
         borderRadius={'50px'}
         >
         </Flex>
         <Flex 
         width={'90%'}
         >
         Java was created in 1995 by James Gosling and his team at
          Sun Microsystems. It was designed to be 
          platform-independent, allowing developers to 
          write code once and run it anywhere with the Java
           Virtual Machine (JVM). 
         </Flex>
        </Flex> 
        <Flex
         gap={'2'}
         >
         <Flex 
         width={'10px'}
         height={'10px'}
         bg={'blue.600'}
         mt={'5px'}
         alignSelf={'start'}
         borderRadius={'50px'}
         >
         </Flex>
         <Flex 
         width={'90%'}
         >
         Java's syntax is largely 
           based on C and C++, with a focus on simplicity,
            object-oriented programming, and security.
             Over the years, Java has become one of the 
             most popular languages for web, desktop,
              and mobile applications.
         </Flex>
        </Flex> 
       </Flex>
     </Flex>
  )
}

export default Courseslidemodel