import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MainPage } from '../pages/MainPage/MainPage'
import { ImageDetails } from '../pages/ImageDetails/ImageDetails'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/image/:id" element={<ImageDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export { Router }
