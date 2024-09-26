
import { Button, Flex, Image, keyframes, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import ailogo from '../../assets/ailogo.jpg'
import encypt from '../../assets/encrypted.png'
import encrypt1 from '../../assets/encrypted1.png'
import linkedin from '../../assets/linkedin.png'
import github from '../../assets/github.png'
import determin from '../../assets/determining.png'
import ui from '../../assets/friends.png'
import optim from '../../assets/optimization.png'
import usergather from '../../assets/profile.png'
import tracking from '../../assets/tracking.png'
import feedback from '../../assets/user-comments.png'
import Homepagedetail from './homepagedetail'
import Helphomecontainer from './helphomecontainer'
import Footer from './footer'
import { useLocation, useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import authatom from '../atom/authatom'
import { useMediaQuery } from 'react-responsive'
import Homenavmodel from './homenavmodel'
import { skillcontext } from './skillcontext'

const Homepage = () => {

  const scrollAnimation=keyframes`0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }`
  const animation=`${scrollAnimation} 15s linear infinite `
  const animation2=`${scrollAnimation} 16s linear infinite `
  const checkscreen=useMediaQuery({maxWidth:'400px'})
  const {sidbaractive,setsidebaractive,
 }=useContext(skillcontext)
  const navigate=useNavigate()
  const location=useLocation()
  const checkloation=location.pathname === '/'
  const [authstate,setuathstate]=useRecoilState(authatom)
  return (
     <Flex flexDir={'column'}
     h={'auto'}
     pb={'0'}
     >
      <Flex flexDir={'column'} 
      height={'93vh'}
      overflow={'hidden'}
      position={'relative'}
      >
       {sidbaractive && checkloation &&  <Homenavmodel/>}
        <Flex position={'absolute'}
        top={'0'}
        objectFit={'cover'}
        left={'0'}
        height={'100%'}
        width={'100%'}
        background={'rgba(0,0,0,0.5)'}
        zIndex={'1'}
        >
        </Flex>
       <Image  src={ailogo}
       h={'full'}
       />
        <Flex position={'absolute'} 
      top={{
        md:'28',
        lg:'28',
        base:'16',
        sm:'28'
      }}
      left={{
        md:'5',
        lg:'5',
        sm:'5',
        base:'3'
      }}
      flexDir={'column'}
      zIndex={'2'}
      >
        <Text color={'white'}
         fontSize={{
          md:'40px',
          lg:'40px',
          sm:'40px',
          base:'24px'
         }}
        // fontWeight={'bold'}
        textShadow={'3px 4px 6px gray'}
        >
        Unlock Your Future with skillPro
        </Text>
        <Text 
        mt={'50px'}
        color={'white'}
        fontSize={{
          md:'30px',
          lg:'30px',
          sm:'30px',
          base:'22px'
         }}
        textShadow={'3px 4px 6px gray'}
        > 
Smart Batch Allocation  {checkscreen ? '' : '& Training Progress Tracking'}
        </Text>
        <Flex   mt={{
          md:'150px',
          lg:'150px',
          sm:'150px',
          base:'120px'
        }} 
        flexDir={{
          md:'row',
          lg:'row',
          sm:'row',
          base:'column'
        }}
        >
        <Flex flexDir={'column'} 
          gap={{
            md:'40px',
            lg:'40px',
            sm:'40px',
            base:'20px'
          }}
       
        >
        <Text 
          color={'white'}
          fontSize={{
            md:'25px',
            lg:'25px',
            sm:'25px',
            base:'20px'
           }}
          textShadow={'3px 4px 6px gray'} 
        >
        Comprehensive Candidate Profiles
        </Text>
        <Text 
         color={'white'} 
         fontSize={{
          md:'25px',
          lg:'25px',
          sm:'25px',
          base:'20px'
         }}
         textShadow={'3px 4px 6px gray'}
       
        >
        Detailed Reporting
        </Text>
        <Text 
         color={'white'} 
         fontSize={{
          md:'25px',
          lg:'25px',
          sm:'25px',
          base:'20px'
         }}
         textShadow={'3px 4px 6px gray'}
        
        >
        Real-Time Feedback Collection
        </Text>
        </Flex>
        <Flex height={''}
        ml={{
          md:'200px',
          lg:'200px',
          sm:'100px',
          base:'0'
        }}
        mt={{
          md:'0px',
          lg:'0px',
          sm:'0px',
          base:'50px'
        }}
        alignItems={'end'}
        // width={'full'}
        justify={'center'}
        gap={'50px'}
        >
         <Button 
         _hover={{
          bg:'blue.200'
         }}
        //  className='explorebtn'
         borderRadius={'5px'}
         bg={'rgba(75, 144, 255, 0.767)'}
        //  className='navbar'
         color={'gray.200'}
         width={{
          md:'170px',
          lg:'170px',
          sm:'14  0px',
          base:'140px'
         }}
         height={'50px'}  
         >
          Get Started
         </Button>
         <Button 
          _hover={{
            bg:'red.200'
           }}
         color={'gray.200'}

          borderRadius={'5px'}
          bg={'red.400'}
          width={{
            md:'170px',
            lg:'170px',
            sm:'14  0px',
            base:'140px'
           }}
          height={'50px'}
          onClick={()=>{navigate('/auth')
            setuathstate('Register')
          }}
         >
          Sign Up
         </Button>
        </Flex>
        </Flex>
      </Flex>
      </Flex>
      <Flex mt={'2'}
      ml={'2'}
      fontSize={'20px'}
      fontWeight={'650'}
      >
        Features of skillPro
      </Flex>
      <Flex 
      animation={animation}
      mx={{
        md:'16',
        lg:'16',
        sm:'16',
        base:'2'  
      }}

      // width={'100vw'}
      // whiteSpace={'nowrap'}
      // position={'relative'}
      gap={'40'}
      // overflow={'hidden'}
      mt={'12'}
      >
      <Homepagedetail image={encypt} 
      header={'Smart Batch Allocation'}
      descreption={'Automatically assign candidates to batches based on certifications'}
      />
      <Homepagedetail image={determin}
      header={'Progress Tracking'}
      descreption={'Monitor course completion, evaluation scores, and feedback'}
      />
      <Homepagedetail image={tracking} 
       header={'Detailed Reporting'}
       descreption={'Gain insights with comprehensive reporting and analysis'}  
      />
      <Homepagedetail image={github} 
      header={'Integration with  GitHub'}
      descreption={' Seamlessly validate candidate skills from GitHub'}
      />
       <Homepagedetail image={encrypt1} 
      header={'Comprehensive profiles'}
      descreption={' Collect essential details including certifications and  internships'}
      />
      </Flex>
      <Flex 
      animation={animation2}
       mx={{
        md:'16',
        lg:'16',
        sm:'16',
        base:'2'  
      }}
      mt={'12'}
      // width={'100vw'}
      // whiteSpace={'nowrap'}
      // position={'relative'}
      gap={'40'}
      // overflow={'hidden'}
      //  flexWrap={'wrap'}
      //  overflow={'scroll'}
      >
      <Homepagedetail image={optim} 
      header={'eCertificate Uploads'}
      descreption={'Candidates can upload eCertificates for Internship'}
      />
      <Homepagedetail  image={feedback}
      header={'Real-Time Feedback Collection'}
      descreption={'Collect feedback from candidates in real-time to improve training'}
      />
      <Homepagedetail image={linkedin}
      header={'Integration with LinkedIn'}
      descreption={' Seamlessly validate candidate profiles from LinkedIn'}
      />
      <Homepagedetail image={ui}
      header={'User-Friendly Interface'}
      descreption={'Intuitive and easy-to-navigate interface for candidates'}
      />
      <Homepagedetail image={usergather} 
      header={'Data Security & Privacy'}
      descreption={'Robust measures to ensure that candidate data is securely stored'}
      />
      </Flex>
      <Text 
      mt={'10'}
      textAlign={'center'}
       fontSize={'20px'}
       fontWeight={'650'}
      >
        Healp and Contact
      </Text>
      <Helphomecontainer/>
      <Footer/>
     </Flex>
  )
}

export default Homepage