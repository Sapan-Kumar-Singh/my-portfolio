import React from 'react'
import HomePage from '../pages/homePage/homePage'
import { Route, Routes } from "react-router-dom";

const StaticRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>} />
      </Routes>
    </>
  )
}

export default StaticRouter
