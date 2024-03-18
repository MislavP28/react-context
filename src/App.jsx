import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/Header.jsx'
import 'bootstrap/dist/css/bootstrap.css'
import { CustomForm } from './components/Form.jsx'


function App() {

const initialUser = {
  id: 1,
  email:"iam@hacker.com",
  name: "Otto Mathias", 
  username:"otto"}
  const [user, setUser] = useState(initialUser);


  return (
    <>
      <div>
        <Header user={user} />
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h2> React Context API</h2>
      <CustomForm user={user} setUserInParentComponent={setUser} />
    </>
  )
}

export default App
