import { Flex, Image } from '@chakra-ui/react'
import React, { useState } from 'react'
import img from '../../assets/customer-service.png'

const Reports = () => {
   
  const [reports,setreports]=useState([])
  console.log(reports.length)
  return (
     <Flex flexDir={'column'}
     >
         {
          reports?.length === 0 && (
            <Flex 
            height={'93vh'}
            gap={'5'} 
            alignSelf={'center'}
            alignItems={'center'}
            justifySelf={'center'}
            >
              <Image src={img}  
              width={{
                md:'200px',
                lg:'200px',
                sm:'200px',
                base:'150px'
              }}
            //   alignSelf={'end'}
              height={{
                md:'200px',
                lg:'200px',
                sm:'200px',
                base:'150px'
              }}
              /> 
            <Flex 
            // alignSelf={'end'}
            mt={{
                md:'36',
                lg:'36',
                sm:'36',
                base:'20'}}
            flexDir={'column'}
            gap={'2'}
            >
  <Flex 
              // flexDir={'colu'}
              fontWeight={'550'}
              fontSize={'18px'}
              >
                  No Reports yet
              </Flex>
              <Flex 
               fontWeight={'550'}
               fontSize={'16px'}
               color={'blue.600'}
               _hover={{
                 textDecoration:'underline'
               }}
               alignSelf={'center'}
              >
                Go to courses
                </Flex>
              </Flex>
            </Flex>
          )
         }
     </Flex>
  )
}

export default Reports