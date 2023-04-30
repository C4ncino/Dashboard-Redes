import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Login from './Login';
import SignIn from './SignIn';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/js/index.esm.js'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import 'modern-normalize/modern-normalize.css'
import '../styles/fonts.css'
import '../styles/main.css'
import Navbar from './Navbar';
import Charts from './Charts/Charts';

function App() {
  const urlUsuarios = 'https://api-sensores-redes.onrender.com/api/usuarios'
  // const urlUsuarios = 'http://127.0.0.1:5000/api/usuarios'
  const [users, setUsers] = useState([{'username': 'hola', 'password' : 'hola'}, {'username': 'adios', 'password' : 'adios'}])
  const [logIn, setLogIn] = useState(false)
  const [signIn, setSignIn] = useState(false)
  const [user, setUser] = useState('')
  const [logged, setLogged] = useState(false)

  useEffect(() => {
    console.log("Getting Data...")

    axios.get(urlUsuarios).then((response) => {
      setUsers(response.data)
      console.log("Done")
    });

}, [urlUsuarios]);
  
  return (
    <>
      <div className='d-flex flex-column align-items-center'>
        {logIn ? (
          <>
            {signIn ? (
              <SignIn users={users} setSignIn={setSignIn} setLogIn={setLogIn} url={urlUsuarios} setLogged={setLogged} setUserMain={setUser}/>
              ) : (
              <Login users={users} setSignIn={setSignIn} setLogIn={setLogIn} setLogged={setLogged} setUserMain={setUser}/>
            )}
          </>
        ) : (
          <>
            <Navbar logged={logged} setLogged={setLogged} setLogIn={setLogIn} setSignIn={setSignIn} user={user} setUser={setUser}/>
            <Charts/>
          </>
        )}
      </div>
    </>
  )
}

export default App
