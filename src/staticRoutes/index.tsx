
import HomePage from '../pages/homePage'
import { Route, Routes } from "react-router-dom";
import PageNotFound from '../pages/pageNotFound';
import AboutPage from '../pages/aboutPage';

const StaticRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </>
  )
}

export default StaticRouter
