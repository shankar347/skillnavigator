import { Button, Flex, FormControl, FormLabel, Input, InputGroup, InputRightElement, Select, Text, Textarea, useToast } from '@chakra-ui/react'
import React, { act, useState } from 'react'
import {FaEye,FaEyeSlash} from 'react-icons/fa'
import { useRecoilState } from 'recoil'
import authatom from '../atom/authatom'
import useratom from '../atom/useratom'
import { useNavigate } from 'react-router-dom'
import { departments ,hrSpecializations,itSpecializations,financeSpecializations,
  marketingSpecializations
  ,salesSpecializations,operationsSpecializations,
  rAndDSpecializations,customerSupportSpecializations,qualityAssuranceSpecializations,
  logisticsSpecializations,
administrationSpecializations,
  // administrationSpecializations,
  legalSpecializations,productManagementSpecializations,
  businessDevelopmentSpecializations,
  engineeringSpecializations,
  trainingAndDevelopmentSpecializations,

} from './depdetail'
import registeratom from '../atom/registeratom'
import Changefile from '../hooks'

const Register = () => {
 
    const [showPassword,setshowpassword]=useState(false)
    const [actions,setActions]=useState({
      name:'',
      email:'',
      phoneno:'',
      password:'',
      degree:'',
      sepcialization:'',
      linkidin:'',
      github:'',
      programminglanguage:'',
      experience:''
    })  
    // console.log(actions)
    const [auth,setauth]=useRecoilState(authatom)  
    const [registerState,setRegisterState]=useRecoilState(registeratom)
    // console.log(auth) 
    const [user,setuser]=useRecoilState(useratom)
    const toast=useToast()
    const navigate=useNavigate()
    // console.log(registerstate) 
    const {handlechangefile,filetype,fileurl
      ,seturl,filename,file1,setfil1}=Changefile()
  
   
  const getSpecializations = (degree) => {
      switch (degree) {
        case "Human Resources":
          return hrSpecializations;
        case "Information Technology":
          return itSpecializations;
        case "Finance":
          return financeSpecializations;
        case "Marketing":
          return marketingSpecializations;
        case "Sales":
          return salesSpecializations;
        case "Operations":
          return operationsSpecializations;
        case "Research and Development":
          return rAndDSpecializations;
        case "Customer Support":
          return customerSupportSpecializations;
        case "Quality Assurance":
          return qualityAssuranceSpecializations;
        case "Logistics":
          return logisticsSpecializations;
        case "Administration":
          return administrationSpecializations;
        case "Legal":
          return legalSpecializations;
        case "Product Management":
          return productManagementSpecializations;
        case "Business Development":
          return businessDevelopmentSpecializations;
        case "Engineering":
          return engineeringSpecializations;
        case "Training and Development":
          return trainingAndDevelopmentSpecializations;
        default:
          return [];
      }
    }
  
  const handleregister=async()=>{
    if (!actions.name || !actions.email || !actions.phoneno || !actions.password || !actions.isseller )
    {
     toast({
        description:'Provide all the details',
        status:'error',
        duration: 2000,
     })
     return
    } 
    // const res=await fetch('/api/register/',{
    //     method:'POST',
    //     headers:{
    //         'Content-Type':'application/json',
    //         },
    //     body:JSON.stringify(actions)
    // })
    // const data=await res.json()

    // if (data?.error)
    // {
    //   toast({
    //     description:data.error,
    //     status:'error',
    //     duration: 2000,
    //   })
    //   return
    // }
    // console.log(data)
    // setuser(data)
    // localStorage.setItem(JSON.stringify(data))
    // toast({
    //     description:'Registration successful',
    //     status:'success',
    //     duration:2000
    // })
    if (actions.isseller === "true")
    {
     navigate('/upload-shop')   
    }
    else{
        navigate('/')
    }
  }

  return (
    <Flex
    width={'full'}
    height={'auto'}
    justify={'center'}
    alignItems={'center'}
    bg={'white'}
    color={'white'}
  >
    <Flex
      minWidth={{
        lg: 'md',
        md: 'md',
        sm: 'md',
        base: 'full',
      }}
      mt={{
        md:'10',
        lg:'10',
        sm:'10',
        base:'3'}}
      maxWidth={'md'}
      bg={'gray.200'}
      borderRadius={'5px'}
      height={'auto'}
      flexDir={'column'}
      px={'4'}
    >
      <Text
        color={'red.400'}
        fontSize={'2xl'}
        fontWeight={'bold'}
        mt={'8px'}
        fontFamily={'sans-serif'}
        textAlign={'center'}
        textShadow={'1px 1px 0px black'}
        mb={'5'}
      >
        Sign Up
      </Text>

      {registerState === 1 && (
        <Flex flexDir={'column'} height={'440px'}>
          <FormControl isRequired>
            <FormLabel color={'black'}>Name</FormLabel>
            <Input
              type={'text'}
              placeholder={'Enter your name'}
              value={actions.name}
              onChange={(e) => setActions({ ...actions, name: e.target.value })}
              border={'2px solid'}
              borderColor={'gray.400'}
            />
          </FormControl>
          <FormControl isRequired mt={'4'}>
            <FormLabel color={'black'}>Email</FormLabel>
            <Input
              type={'email'}
              placeholder={'Enter your email'}
              border={'2px solid'}
              value={actions.email}
              onChange={(e) => setActions({ ...actions, email: e.target.value })}
              borderColor={'gray.400'}
            />
          </FormControl>
          <FormControl isRequired mt={'4'}>
            <FormLabel color={'black'}>Phone no</FormLabel>
            <Input
              type={'text'}
              placeholder={'Enter your phoneno'}
              border={'2px solid'}
              value={actions.phoneno}
              onChange={(e) => setActions({ ...actions, phoneno: e.target.value })}
              borderColor={'gray.400'}
            />
          </FormControl>
          <FormControl isRequired mt={'4'}>
            <FormLabel color={'black'}>Password</FormLabel>
            <InputGroup>
              <Input
                type={showPassword ? 'text' : 'password'}
                border={'2px solid'}
                value={actions.password}
                placeholder='Enter your password'
                borderColor={'gray.400'}
                onChange={(e) => setActions({ ...actions, password: e.target.value })}
              />
              <InputRightElement h={'70%'} justifySelf={'center'} alignSelf={'center'}>
                <Button
                  variant={'ghost'}
                  onClick={() => setShowPassword((showPassword) => !showPassword)}
                >
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <FormControl isRequired mt={'4'}>
            <FormLabel color={'black'}>LinkedIn Profile Link</FormLabel>
            <Input
              type={'url'}
              placeholder={'Enter LinkedIn Profile Link'}
              border={'2px solid'}
              value={actions.linkidin}
              onChange={(e) => setActions({ ...actions, linkidin: e.target.value })}
              borderColor={'gray.400'}
            />
          </FormControl>
        </Flex>
      )}

      {registerState === 2 && (
        <Flex flexDir={'column'} height={'440px'}>
          <FormControl isRequired mt={'4'}>
            <FormLabel color={'black'}>Github Profile Link</FormLabel>
            <Input
              type={'url'}
              placeholder={'Enter Github Profile Link'}
              border={'2px solid'}
              value={actions.github}
              onChange={(e) => setActions({ ...actions, github: e.target.value })}
              borderColor={'gray.400'}
            />
          </FormControl>

          <FormControl isRequired mt={'4'}>
            <FormLabel color={'black'}>Experience Level</FormLabel>
            <Select
              color={'gray.400'}
              border={'2px solid'}
              borderColor={'gray.400'}
              onChange={(e) => setActions({ ...actions, experience: e.target.value })}
            >
              <option value="" selected disabled hidden>
                Select level
              </option>
              <option value="beginner" style={{ color: 'black' }}>
                Beginner
              </option>
              <option value="intermediate" style={{ color: 'black' }}>
                Intermediate
              </option>
              <option value="advanced" style={{ color: 'black' }}>
                Advanced
              </option>
            </Select>
          </FormControl>

          <FormControl isRequired mt={'4'}>
            <FormLabel color={'black'}>Degree</FormLabel>
            <Select
              onChange={(e) => setActions({ ...actions, degree: e.target.value })}
              color={'gray.400'}
              border={'2px solid'}
              borderColor={'gray.400'}
            >
              <option value="" selected disabled hidden>
                Select option
              </option>
              {departments.map((dep, i) => (
                <option style={{ color: 'black' }} key={i} value={dep}>
                  {dep}
                </option>
              ))}
            </Select>
          </FormControl>

          <FormControl isRequired mt={'4'}>
            <FormLabel color={'black'}>Specialization</FormLabel>
            <Select
              onChange={(e) => setActions({ ...actions, specialization: e.target.value })}
              color={'gray.400'}
              border={'2px solid'}
              borderColor={'gray.400'}
            >
              <option value="" selected disabled hidden>
                Select specialization
              </option>
              {getSpecializations(actions.degree).map((value, i) => (
                <option key={i} value={value} style={{ color: 'black' }}>
                  {value}
                </option>
              ))}
            </Select>
          </FormControl>

          <FormControl isRequired mt={'4'}>
            <FormLabel color={'black'}>Programming Languages known</FormLabel>
            <Input
              type={'text'}
              placeholder={'Ex. JavaScript, HTML, etc.'}
              border={'2px solid'}
              value={actions.programmingLanguages}
              onChange={(e) => setActions({ ...actions, programmingLanguages: e.target.value })}
              borderColor={'gray.400'}
            />
          </FormControl>
        </Flex>
      )}

      {registerState === 3 && (
        <Flex width={'100%'} alignItems={'center'} justify={'center'} height={'440px'} flexDir={'column'}>
          <FormControl isRequired mt={'4'}>
            <FormLabel mt={'-40'} color={'black'}>
              Upload Resume
            </FormLabel>
            <Flex mt={'30px'} width={'full'} alignItems={'center'}>
              <Button
                mt={'20px'}
                mx={'auto'}
                justifySelf={'center'}
                width={'36'}
                bg={'blue.300'}
                border={'2px solid'}
                borderColor={'transparent'}
                _hover={{ bg: 'blue.200' }}
                color={'gray.800'}
                h={'42px'}
                my={'0'}
              >
                Browse File
              </Button>
            </Flex>
          </FormControl>
        </Flex>
      )}

      {registerState === 4 && (
        <Flex height={'440px'} width={'100%'} alignItems={'center'} justify={'center'} flexDir={'column'}>
          <Input type='file' hidden />
          <FormControl isRequired>
            <FormLabel mt={'-40'} color={'black'}>
              Certification
            </FormLabel>
            <Flex mt={'30px'} width={'full'} alignItems={'center'}>
              <Button
                mt={'20px'}
                mx={'auto'}
                justifySelf={'center'}
                width={'36'}
                bg={'blue.300'}
                border={'2px solid'}
                borderColor={'transparent'}
                _hover={{ bg: 'blue.200' }}
                color={'gray.800'}
                h={'42px'}
                my={'0'}
              >
                Upload File
              </Button>
            </Flex>
          </FormControl>
        </Flex>
      )}
      

      <Text color={'black'}
   textAlign={'center'}
   mt={'10px'}
   fontSize={'15px'}
   fontWeight={'550'}
   >
    ({registerState} of 5)
   </Text>

      <Flex alignSelf={'center'} mt={3} justifySelf={'center'}>
        {registerState < 4 ? (
          <Button
          width={'32'}
          my={'1'}
           mx={'auto'}
           borderRadius={'50px'}
            bg={'red.400'}  
            _hover={{
              bg:'red.300'
            }}
            onClick={() => setRegisterState((prev) => prev + 1)}
          >
            Next
          </Button>
        ) : (
          <Button
           width={'32'}
           my={'1'}
            mx={'auto'}
            bg={'red.400'}
            borderRadius={'50px'}
            _hover={{
              bg:'red.300'
            }}
            onClick={() => {
              // Handle registration submission
             handleregister
            }}
          >
            Submit
          </Button>
        )}
      </Flex>

      <Flex alignSelf={'center'} mt={'2'} justifySelf={'center'}>
      {
        registerState !== 1&&
        <Text color={'blue.500'}
        textAlign={'center'}
        mt={'-1'}
        mb={'3'}
        fontSize={'sm'}
        fontWeight={'550'}
_hover={{
    textDecoration:'underline'
}}
        cursor={'pointer'}
        onClick={()=>setRegisterState((prev)=>prev - 1)}
        >
         Back
        </Text>
      }
      </Flex>
      <Flex color={'black'}
      textAlign={'center'}
      alignSelf={'center'}
      fontSize={'sm'}
      fontWeight={'medium'}
      gap={'2'} mb={'3'}
      >  
        <Text >
        Already have an account 
        </Text> 
        <Text color={'blue.400'}
        cursor={'pointer'}
        onClick={()=>setauth('Login')}>
            Login
        </Text>
        </Flex>
    </Flex>
  </Flex>
);
};

export default Register;