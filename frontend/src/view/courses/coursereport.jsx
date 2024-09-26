import { Flex } from '@chakra-ui/react'
import React from 'react'

const Coursereport = () => {
  return (
    <Flex 
     flexDir={'column'}    
    >
        <Flex 
        ml={'5'}
        mt={'2'}
        fontSize={'18px'}
        fontWeight={'650'}
        color={'blue.700'}
        >
            Your course report
        </Flex>
        <Flex
        flexDir={'column'}
        fontSize={'17px'}
        fontWeight={'550'}
        alignSelf={'center'}
        height={'75vh'}
        justify={'center'}
        justifyItems={'center'}
        justifySelf={'center'}
        >
          No Reports have been generated yet
        </Flex>
    </Flex>
  )
}

export default Coursereport