import { useState } from 'react'
import reactLogo from './assets/react.svg'

import Login from './components/Login'
import Profile from './components/Profile'
import viteLogo from '/vite.svg'
import './App.css'
import UserContextProvider from './context/UserContextProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
   <> <UserContextProvider>
    <h1>
      Aditya and chai
      </h1>
      <Login />
      <Profile />

      </UserContextProvider> </>
  )
}

export default App
