import React from 'react'
import { Navbar } from '../components/Navbar'
import { Router, Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { About } from './About'
import { Home } from './Home'
import { Users } from './Users'
import { Userpage } from './Userpage'

export const AllRoutes = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<Userpage />} />
      </Routes>
    </div>
  );
}
