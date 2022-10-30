import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/home/home'
import { Login } from './pages/login/login'
import { NotFound } from './pages/not-found/not-found'

export const Router = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
