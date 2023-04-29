import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SignIn = ({users, setSignIn, setLogIn, url, setLogged}) => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [passwordR, setPasswordR] = useState('');
    const [exists, setExists] = useState(false)
    const [submit, setSubmit] = useState(false)

    useEffect(() => {
        if (exists && submit){
            alert('Usuario Existente')
        }
        else if (!exists && submit){
            axios.post(url, {
                username : user,
                password : password
            })
            .then((response) => {
                console.log(response)
            });

            setSignIn(false)
            setLogIn(false)
            setLogged(true)
        }
    }, [exists, submit]);

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
            
            setSubmit(true)
        }
        else{
            alert('Las contraseñas deben coincidir')
            setPasswordR('')
        }
    }

    const onClick = (e) => {
        if (e.target.name === 'create'){
            setSignIn(false)
        }
        else if (e.target.name === 'cancel'){
            setSignIn(false)
            setLogIn(false)
        }
    }

    return (  
        <>
        <div className='py-5' style={{"width" : "25rem"}}>
            <h1>Crear Usuario</h1>
            <div className='d-flex flex-column g-2'>
            <div className="mb-3">
                <label className="form-label">Nombre de Usuario</label>
                <input 
                    type="text"     
                    className="form-control"
                    name='user_input'
                    value={user}
                    onChange={onChange}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Contraseña</label>
                <input 
                    type="password" 
                    className="form-control"
                    name='pass_input'
                    value={password}
                    onChange={onChange}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Repita la Contraseña</label>
                <input 
                    type="password" 
                    className="form-control"
                    name='passR_input'
                    value={passwordR}
                    onChange={onChange}
                />
            </div>
            <div className='d-flex flex-column g-2'>
                {passwordR ? (
                    <button className='btn btn-primary' onClick={onSubmit}>Crear Usuario</button>
                ):(
                    <button className='btn btn-secondary'>Crear Usuario</button>
                )}
                <br/>
                <div className='d-flex align-items-baseline'>
                    <p> Ya tiene Usuario? </p>
                    <button className='btn border border-0 border-bottom border-2 border-primary-subtle rounded-0 mx-1' name='create' onClick={onClick}>Iniciar Sesion</button> 
                </div>
                <button className='btn text-start w-25 mx-0 p-0 text-primary' name='cancel' onClick={onClick}>Cancelar</button>
            </div>
            </div>
        </div>
        </>
    );
}
 
export default SignIn;