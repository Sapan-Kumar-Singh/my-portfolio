
import HomePage from '../pages/homePage'
import { Route, Routes } from "react-router-dom";
import PageNotFound from '../pages/pageNotFound';

const StaticRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </>
  )
}

export default StaticRouter
