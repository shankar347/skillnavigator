import { Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

const Homepagedetail = ({image,header,descreption}) => {
  return (
    <Flex 
    width={'350px'}
    height={'80px'} 
    px={2}
    flexShrink={0}
    gap={'5'}
    borderRadius={'5px'}
    color={'gray'}
    alignItems={'center'}
    boxShadow={'0px 0px 15px 0px'}
    >
     <Image width={'60px'} 
     height={'60px'}
     src={image} /> 
     <Flex flexDir={'column'}
       gap={'1'}
     >
       <Text 
       color={'black'}
       fontSize={'16px'}
       fontWeight={'600'}
       >
        {header}
       </Text>
       <Text 
       color={'black'}
       fontSize={'sm'}
       fontWeight={'550'}
       >
        {descreption}        
       </Text>
     </Flex>
    </Flex>
  )
}

export default Homepagedetail