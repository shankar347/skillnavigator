import { Box, Button, Flex, FormControl, FormLabel, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Select, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import logoimg from '../../assets/logo1.png'
import hexaware from '../../assets/hexaware.jpg'
import java from '../../assets/java.jpeg'

const Courseintrocontainer = () => {
   
    const {onOpen,isOpen,onClose} =useDisclosure()

    return (
        <>
     <Flex
     flexDir={'column'}
     >
      <Flex alignSelf={'center'}
      fontWeight={'600'}
      fontSize={'29px'}
      color={'blue.600'}
      >
        Course Introduction
      </Flex>
      <Box
      mt={'5'}
      borderRadius={'5px'}
      border={'2px solid'}
      borderColor={'gray.400'}
       width={'60%'}
       alignSelf={'center'}
      height={'300px'} 
      >
      <Image 
      borderRadius={'3px'}
      src={java}
      width={'full'}
      height={'full'}
      />
      </Box>
     
    <Flex 
    flexDir={'column'}
    //  alignItems={'end'}
     fontSize={'18px'}
     fontWeight={'550'}
     alignSelf={'center'}
     mt={'5'}
     gap={'2'}
    >
      <Flex 
    gap={'4'}
   >
        <Text 
        fontSize={'19px'}
        color={'blue.600'}
       width={'130px'}
       >
            Title
        </Text>
        <Flex 
     >
        Java Beginner level course
     </Flex>
    </Flex>
    <Flex 
    gap={'4'}
   >
        <Text 
       width={'130px'}
        fontSize={'19px'}
        color={'blue.600'}
        >
          Batch
        </Text>
        <Flex 
     >
        java15
     </Flex>
    </Flex>
    <Flex 
    gap={'4'}
   >
        <Text 
        fontSize={'19px'}
        color={'blue.600'}
       width={'130px'}
       >
            Trainer
        </Text>
        <Flex 
     >
       Dr.visvanath
     </Flex>
    </Flex>
    </Flex>
    
    <Button 
    width={'32'}
    alignSelf={'center'}
    bg={'blue.500'}
    color={'white'}
    height={'45px'}
    mt={'5'}
    _hover={{
        bg: 'blue.600',
    }}
    onClick={()=>onOpen()}
    >
        Enroll now
    </Button>
     </Flex>
     <Modal isOpen={isOpen} 
     onClose={onClose}
     >
        <ModalOverlay/>
        <ModalContent>
         <ModalHeader>
            <Text fontSize={'24px'} color={'blue.600'}>
                Enroll Course
            </Text>
         </ModalHeader>
         <ModalCloseButton 
         onClick={onClose}
         />
         <ModalBody>
            <FormControl 
            isRequired
            >
                <FormLabel>
                    Name
                </FormLabel>
                <Input
                placeholder='Ex. sivashankar9178'
                border={'2px solid '}
                borderColor={'gray.300'}
                 width={'100%'}
                />
            </FormControl>
            <FormControl 
            mt={'3'}
            isRequired
            >
                <FormLabel>
                    Email
                </FormLabel>
                <Input
                placeholder='example@gmail.com'
                border={'2px solid '}
                borderColor={'gray.300'}
                 width={'100%'}
                />
            </FormControl>
            <FormControl 
            mt={'3'}
            isRequired
            >
                <FormLabel>
                  Course Level
                </FormLabel>
                <Select
    color={'gray.400'}
    border={'2px solid'}
                 borderColor={'gray.400'}
                 onChange={(e)=>setactions({...actions
                  ,experience:e.target.value})
                }              
                 >
    <option value="" 
    selected disabled hidden>
      Select level
    </option>
    <option value="beginner" 
    style={{color:'black'}}
    >Beginner</option>
    <option value="intermediate"
    style={{color:'black'}}
    
    >Intermediate</option>
    <option value="advanced"
    style={{color:'black'}}
    
    >Advanced</option>
    </Select>
            </FormControl>

         <Flex flexDir={'column'}
         alignItems={'center'}
         >

         <Button 
    width={'100%'}
    mx={'auto'}
    alignSelf={'center'}
    bg={'blue.500'}
    color={'white'}
    height={'45px'}
    mt={'5'}
    _hover={{
        bg: 'blue.600',
    }}
    >
        Submit
    </Button>
     
     
    <Button 
    width={'100%'}
    mx={'auto'}
    alignSelf={'center'}
    bg={'red.400'}
    color={'white'}
    height={'45px'}
    mt={'2'}
    _hover={{
        bg: 'red.300',
    }}
    >
        Cancel
    </Button>

         </Flex>
         </ModalBody>
        </ModalContent>
     </Modal>
     </>
  )
}

export default Courseintrocontainer