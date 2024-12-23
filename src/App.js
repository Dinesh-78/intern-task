import React from 'react'
import Topbar from './global/Topbar'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Students from './components/Students'
import Chapter from './components/Chapter'
import Help from './components/Help'
import Reports from './components/Reports'
import Settings from './components/Settings'
import SidebarMenu from "./global/Sidebar"

const App = () => {
  return (
    <div className='app'>
      <SidebarMenu />
      <main className='content'>
      <Topbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/students" element={<Students />} />
        <Route path="/chapter" element={<Chapter />} />
        <Route path="/help" element={<Help />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
      </main>
    </div>
  )
}

export default App