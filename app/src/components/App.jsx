import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Login from './Navbar/Login';
import SignIn from './Navbar/SignIn';
import Navbar from './Navbar//Navbar';
import Home from './Home/Home';
import Live from './Live/Live';
import Record from './Record/Record';

function App() {
  const urlUsuarios = 'https://api-sensores-redes.onrender.com/api/usuarios'
  // const urlUsuarios = 'http://127.0.0.1:5000/api/usuarios'
  const [users, setUsers] = useState([{ 'username': 'hola', 'password': 'hola' }, { 'username': 'adios', 'password': 'adios' }])
  const [logIn, setLogIn] = useState(false)
  const [signIn, setSignIn] = useState(false)
  const [user, setUser] = useState('')
  const [logged, setLogged] = useState(false)
  const [page, setPage] = useState('home')

  useEffect(() => {
    console.log("Getting Data...")

    axios.get(urlUsuarios).then((response) => {
      setUsers(response.data)
      console.log("Done")
    });

    setPage('home')

  }, [logged]);

  function Pages(page) {
    if (page === 'home') {
      return (
        <Home />
      )
    }
    else if (page === 'live') {
      return (
        <Live />
      )
    }
    else if (page === 'record') {
      return (
        <Record />
      )
    }
  }

  return (
    <>
      <div className='d-flex flex-column align-items-center'>
        {logIn ? (
          <>
            {signIn ? (
              <SignIn users={users} setSignIn={setSignIn} setLogIn={setLogIn} url={urlUsuarios} setLogged={setLogged} setUserMain={setUser} />
            ) : (
              <Login users={users} setSignIn={setSignIn} setLogIn={setLogIn} setLogged={setLogged} setUserMain={setUser} />
            )}
          </>
        ) : (
          <>
            <Navbar logged={logged} setLogged={setLogged} setLogIn={setLogIn} setSignIn={setSignIn} user={user} setUser={setUser} setPage={setPage} />
            {Pages(page)}
          </>
        )}
      </div>
    </>
  )
}

export default App
