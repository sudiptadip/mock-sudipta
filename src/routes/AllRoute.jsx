import React from 'react'
import {Route, Routes } from "react-router-dom"
import Dashboard from '../pages/Dashboard'
import Login from '../pages/Login'
import Portfolio from '../pages/Portfolio'
import Register from '../pages/Register'
import Stocks from '../pages/Stocks'

export default function AllRoute() {
  return (
    <Routes>
        <Route path='/' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/dashbord' element={<Dashboard/>} />
        <Route path='/stock' element={<Stocks/>} />
        <Route path='/portfolio' element={<Portfolio/>} />
    </Routes>
  )
}