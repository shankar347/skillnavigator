
import React, { useEffect } from 'react'
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  useToast,
  Spinner,
} from '@chakra-ui/react'
import { useState } from 'react'
// import { ViewIcon, ViewOffIcon } from '@chakra-ui/icon'
import { useRecoilState, useSetRecoilState } from 'recoil'
import authatom from '../atom/authatom'
import useratom from '../atom/useratom'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  
   
//   const [showPassword, setShowPassword] = useState(false)
  const [loading,setloading]=useState(false)
  const [showPassword,setshowpassword]=useState(false)

//   const setauthstate=useSetRecoilState(authatom)
const [auth,setauth]=useRecoilState(authatom)  
  const setuserstate=useSetRecoilState(useratom)
  const [actions,setactions]=useState({
    email:'',
    password:''
  })
  const toast=useToast()
  
  const navigate=useNavigate()


  const handlelogin=async(e)=>{
       e.preventDefault();
    try
    {
      setloading(true)
       const res=await fetch('/api/user/login',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(actions)
       })
      const data=await res.json()
      console.log(data.error)
      if(data.error)
      {
        toast({
          title:'Error',
          description:data.error,
          duration:3000
        })
       return;
      }
      localStorage.setItem('token',JSON.stringify(data))
      setuserstate(data)
      toast({
        description:"Logged in Successfully"
      })
      navigate('/')
    }
    catch(e)
    {
      console.log(e)
      // toast({
      //   status:'error',
      //   description:e.message,
      //   duration:3000
      // })
    }
    finally
    {
      setloading(false)
    }
  }



  return (
    <Flex width={'full'} 
    height={'auto'}
    justify={'center'}
    alignItems={'center'}
    bg={'white'} 
    // flexDir={'column'}
    color={'white'}>
      <Flex 
      flexDir={'column'}
    //   minWidth={{
    //     md:'lg',
    //    lg:'lg',
    //   sm:'lg',
    //    base:'95%'}}
    minWidth={{
      lg:'md',
      md:'md',
      sm:'md',
      base:'80%'  
    }}
>
        <Text color={'red.400'}
        fontSize={'2xl'}
        fontWeight={'bold'}
        mt={{
            md:'10',
            lg:'10',
            sm:'10',
            base:'3'}}
        fontFamily={'sans-serif'}
        textAlign={'center'}   
        textShadow={'1px 1px 0px  black'}
        mb={'8'}>

          Login

        </Text>
  
       <FormControl isRequired mt={'4'}>
            <FormLabel color={'black'}>
             Email    
        </FormLabel>
        <Input type={'email'} placeholder={'Enter your email'}
         border={'2px solid'}
         value={actions.email}
         onChange={(e)=>setactions({...actions,email:e.target.value})}
         borderColor={'gray.400'} />
       </FormControl>
    
       <FormControl isRequired  mt={'4'}> 
         <FormLabel color={'black'}>
            Password
         </FormLabel>
         <InputGroup>
         <Input type={showPassword ? 'text' : 'password'} 
                      border={'2px solid'}
                      value={actions.password}
                      placeholder='Enter your password'
                      borderColor={'gray.400'}
                     onChange={(e)=>setactions({...actions,password:e.target.value})}/>
           <InputRightElement h={'70%'}
           justifySelf={'center'} alignSelf={'center'}>
                    <Button 
                      variant={'ghost'}
                      onClick={() => setshowpassword((showPassword) => !showPassword)}>
                      {showPassword ? <FaEye /> : <FaEyeSlash />}
                    </Button>
                    </InputRightElement>
         </InputGroup>
       </FormControl>
      
        <Button width={'32'}
        bg={'red.400'}
        textAlign={'center'}
        borderRadius={'50px'}
        my={'5'}
        mt={'16'}

        onClick={handlelogin}
        alignSelf={'center'}
        _hover={{
          bg:'red.300'
        }}>
           Submit
        </Button>
  
        <Flex color={'black'}
        textAlign={'center'}
        alignSelf={'center'}
        fontSize={'sm'}
        fontWeight={'medium'}
        gap={'2'} mb={'3'}
        >  
          <Text >
          Don't have an account 
          </Text> 
          <Text color={'blue.400'}
          cursor={'pointer'}
          onClick={()=>setauth('Register')}>
             Register
          </Text>
          </Flex>
      </Flex>
    </Flex> 
  )
}

export default Login