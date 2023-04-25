import React, { useState, useEffect } from 'react';
import Login from './Login';
import SignIn from './SignIn';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [users, setUsers] = useState([{'username': 'hola', 'password' : 'hola'}, {'username': 'adios', 'password' : 'adios'}])
  const [logIn, setLogIn] = useState(true)
  const [signIn, setSignIn] = useState(false)

  return (
    <>
      <div class='d-flex flex-column align-items-center'>
        {logIn ? (
          <>
            {signIn ? (
              <SignIn users={users} setSignIn={setSignIn} setLogIn={setLogIn}/>
              ) : (
              <Login users={users} setSignIn={setSignIn} setLogIn={setLogIn}/>
            )}
          </>
        ) : (
          <>
            <h1>Hola</h1>
          </>
        )}
      </div>
    </>
  )
}

export default App
