import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import LoginPage from './pages/Login'
import './assets/styles/index.css'
import AuthLayout from './layouts/AuthLayout'
import RegisterPage from './pages/Register'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/Home'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
        </Route>

        <Route element={<MainLayout />}>
          <Route path='/' element={<HomePage />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
