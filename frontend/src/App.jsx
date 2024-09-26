
import { Route, Routes, useLocation } from "react-router-dom"
import Auth from "./view/auth/auth"
import Homepage from "./view/components/homepage"
import Navbar from "./view/components/navbar"
import Dashboard from "./view/dashboard/dashboard"
import Profile from "./view/user/profile"
import Reports from "./view/components/reports"
import Courses from "./view/courses/courses"
import Dashboardcontainer from "./view/dashboard/dashboardcontainer"
import Leaderboardcontainer from "./view/dashboard/leaderboardcontainer"
import Reportcontainer from "./view/dashboard/reportcontainer"
import Trackprogress from "./view/dashboard/track-progress"
import Coursewiseleaderboard from "./view/dashboard/coursewiseleaderboard"
import Collegewiseleaderboard from "./view/dashboard/collegewiseleaderboard"
import Courseintrocontainer from "./view/courses/courseintrocontainer"
import Coursecontainer from "./view/courses/coursecontainer"
import Coursereport from "./view/courses/coursereport"




function App() {
 
  const location=useLocation()
  const checkloation=location.pathname === '/auth'
  return (
    <>
   {
    !checkloation && <Navbar/> 
   }
   <Routes>
   <Route path="/auth" element={<Auth/>} />
    <Route path="/" element={<Homepage/>} />
    <Route path="/profile" element={<Profile/>}/>
    <Route path="/courses" element={<Courses/>}>
    <Route index 
    element={<Courseintrocontainer/>} />
    <Route path=":id/lessons" element={<Coursecontainer/>}/>
    <Route path="report" element={<Coursereport/>}/>
    </Route>
    <Route path="/dashboard" element={<Dashboard/>}>
    <Route index  element={<Dashboardcontainer/>}/>
    <Route path="leaderboard/batch-wise" element={<Leaderboardcontainer/>}/>
    <Route  path="leaderboard/course-wise"  element={<Coursewiseleaderboard/>} />
    <Route path="leaderboard/college-wise" element={<Collegewiseleaderboard/>}/>
    <Route path="reports" element={<Reports/>}/>
    <Route path="track-progress" element={<Trackprogress/>}/>
    </Route>
    </Routes>     
    </>
  )
}

export default App

