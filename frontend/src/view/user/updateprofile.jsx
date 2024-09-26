import { Button, Flex, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Select, Text } from '@chakra-ui/react'
import React from 'react'

const Updateprofile = ({isOpen,onClose,onOpen}) => {


  return (
    <>
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
                    phone no
                </FormLabel>
                <Input
                placeholder='Ex.9121313131'
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
                    Github
                </FormLabel>
                <Input
                placeholder='Enter github link'
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
                    Linkedin
                </FormLabel>
                <Input
                placeholder='Enter Linkedin link'
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

export default Updateprofile