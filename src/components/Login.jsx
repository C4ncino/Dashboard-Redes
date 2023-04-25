import React, { useState, useEffect } from 'react';

const Login = ({users, setSignIn, setLogIn}) => {

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [exists, setExists] = useState(false)

    
    useEffect(() => {
        if (exists){
            setLogIn(false)
        }
        else if (!exists && user){
            alert('Usuario No Existente')
            setUser('')
            setPassword('')
        }
    }, [exists]);

    const onChange = (e) => {
        if(e.target.name === 'user_input'){
            setUser(e.target.value)
        }
        else if (e.target.name === 'pass_input'){
            setPassword(e.target.value)
        }
    }

    const onSubmit = () => {
        users.map((u) => {
            if (user === u.username && password === u.password){
                setExists(true)
            }
        })
    }

    const onClick = () => {
        setSignIn(true)
    }
    
    return (  
        <>
        <div class='p-5 w-25'>
            <h1>Inicie Sesión</h1>
            <div class='d-flex flex-column g-2'>
            <div class="mb-3 ">
                <label class="form-label">Username</label>
                <input 
                    type="text"     
                    class="form-control"
                    name='user_input'
                    value={user}
                    onChange={onChange}
                />
            </div>
            <div class="mb-3 ">
                <label class="form-label">Password</label>
                <input 
                    type="password" 
                    class="form-control"
                    name='pass_input'
                    value={password}
                    onChange={onChange}
                />
            </div>
            <div class='d-flex flex-column g-2'>
                <button class='btn btn-primary' onClick={onSubmit}>Inicie Sesión</button>
                <br/>
                <div class='d-flex align-items-baseline'>
                    <p> No tiene Usuario? </p>
                    <button class='btn border border-0 border-bottom border-2 border-primary-subtle rounded-0 mx-1' onClick={onClick}>Crear Usuario</button> 
                </div>
            </div>
            </div>
        </div>
        </>
    );
}
 
export default Login;