import React, { useState } from 'react';

const SignIn = ({users, setSignIn, setLogIn}) => {

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [passwordR, setPasswordR] = useState('');
    const [exists, setExists] = useState(false)


    const onChange = (e) => {
        if(e.target.name === 'user_input'){
            setUser(e.target.value)
        }
        else if (e.target.name === 'pass_input'){
            setPassword(e.target.value)
        }
        else if (e.target.name === 'passR_input'){
            setPasswordR(e.target.value)
        }
    }

    const onSubmit = () => {
        if (password === passwordR){
            users.map((u) => {
                if (user === u.username && password === u.password){
                    setExists(true)
                }
            })
    
            if (exists){
                alert('Usuario Existente')
            }
            else{
                setSignIn(false)
                setLogIn(false)
            }
        }
        else{
            alert('Las contraseñas deben coincidir')
            setPasswordR('')
        }
    }

    const onClick = () => {
        setSignIn(false)
    }

    return (  
        <>
        <div className='p-5 w-25'>
            <h1>Crear Usuario</h1>
            <div className='d-flex flex-column g-2'>
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
            <div class="mb-3 ">
                <label class="form-label">Repeat Password</label>
                <input 
                    type="password" 
                    class="form-control"
                    name='passR_input'
                    value={passwordR}
                    onChange={onChange}
                />
            </div>
            <div class='d-flex flex-column g-2'>
                <button class='btn btn-primary' onClick={onSubmit}>Crear Usuario</button>
                <br/>
                <div class='d-flex align-items-baseline'>
                    <p> Ya tiene Usuario? </p>
                    <button class='btn border border-0 border-bottom border-2 border-primary-subtle rounded-0 mx-1' onClick={onClick}>Iniciar Sesion</button> 
                </div>
            </div>
            </div>
        </div>
        </>
    );
}
 
export default SignIn;