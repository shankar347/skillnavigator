import { Box, Flex, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import Dashboardsidebar from './dashboardsidebar'
import Dashboardcontainer from './dashboardcontainer'
import Leaderboardcontainer from './leaderboardcontainer'
import Reportcontainer from './reportcontainer'
import Trackprogress from './track-progress'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { skillcontext } from '../components/skillcontext'
import Dashboardnavmodel from './dashboardnavmodel'

const Dashboard = () => {
  const {sidbaractive,setsidebaractive,
  }=useContext(skillcontext)
   const navigate=useNavigate()
   const location=useLocation()
   const checkloation=location.pathname.startsWith('/dashboard')
   
  return (
   <Flex 
    height={'93vh'}>
    <Box 
        h={'full'}
        visibility={{
         md:'visible',
         lg:'visible',
         sm:'visible',
         base:'hidden'
        }}
        w={{
          md:'15%',
          lg:'15%',
          sm:'15%',
          base:'0%'}}
        position={'fixed'}
       top={'12'}
       left={'0'}
    >
    <Dashboardsidebar/>
    </Box>
    <Box 
    ml={{
    md:'15%',
    lg:'15%',
    sm:'15%',
    base:'0%'
    }}
    overflowY={'scroll'}
    width={'full'}
    >
      {sidbaractive && checkloation &&  <Dashboardnavmodel/>}   
    <Outlet/>
    </Box>
   </Flex>
  )
}

export default Dashboard