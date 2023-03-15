import { Route, Routes } from 'react-router-dom'
import Login from './auth/Login'
import Register from './auth/Register'
import Main from './components/Main'
import Runners from './api/runners/Runners'
import Teams from './api/teams/Teams'
import ProfileLayout from './components/ProfileLayout'
import Profile from './components/Profile'
import MainLayout from './components/MainLayout'
import SuccessRegister from './auth/SuccessRegister'
import { axiosApi } from './api/axios'
import { configure } from 'axios-hooks'
import Test from './components/Test'

configure({ axios: axiosApi })

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Main />} />
        <Route path='login' element={<Login />} />
        <Route path='test' element={<Test />} />
        <Route path='register'>
          <Route index element={<Register />} />
          <Route path='success' element={<SuccessRegister />} />
        </Route>

        {/* Protected routes (require auth) */}

        <Route path='profile' element={<ProfileLayout />}>
          <Route index element={<Profile />} />
          <Route path='runners' element={<Runners />} />
          <Route path='teams' element={<Teams />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App
