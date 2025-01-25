
import HomePage from '../pages/homePage'
import { Route, Routes } from "react-router-dom";
import PageNotFound from '../pages/pageNotFound';
import AboutPage from '../pages/aboutPage';
import ResumePage from '../pages/resumePage';
import Services from '../pages/servicesPage';
import Skills from '../pages/skills';
import ContactPage from '../pages/contactPage';

const StaticRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/resume' element={<ResumePage/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/skills' element={<Skills/>}/>
        {/* <Route path='/projects' element={<Projects/>}/> */}
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </>
  )
}

export default StaticRouter
