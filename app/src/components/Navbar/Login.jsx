import React, { useState, useEffect } from 'react';

const Login = ({users, setSignIn, setLogIn, setLogged, setUserMain}) => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [exists, setExists] = useState(false)
    const [submit, setSubmit] = useState(false)

    
    useEffect(() => {
        if (exists && submit){
            setLogIn(false)
            setLogged(true)
            setUserMain(user)
        }
        else if(!exists && submit){
            alert('Datos Erroneos, Verificar Usuario y Contraseña o Cree un Usuario')
            setUser('')
            setPassword('')
        }
    }, [exists, submit]);

    const onChange = (e) => {
        if (e.target.name === 'user_input'){
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

        setSubmit(true)
    }

    const onClick = (e) => {
        if (e.target.name === 'create'){
            setSignIn(true)
        }
        else if (e.target.name === 'cancel'){
            setLogIn(false)
        }
    }
    
    return (  
        <>
        <div className='py-5' style={{"width" : "25rem"}}>
            <h1>Inicie Sesión</h1>
            <div className='d-flex flex-column g-2'>
            <div className="mb-3 ">
                <label className="form-label">Nombre de Usuario</label>
                <input 
                    type="text"     
                    className="form-control"
                    name='user_input'
                    value={user}
                    onChange={onChange}
                />
            </div>
            <div className="mb-3 ">
                <label className="form-label">Contraseña</label>
                <input 
                    type="password" 
                    className="form-control"
                    name='pass_input'
                    value={password}
                    onChange={onChange}
                />
            </div>
            <div className='d-flex flex-column g-2'>
                {user && password ? (
                    <button className='btn btn-primary w-50 mx-auto' onClick={onSubmit}>Inicie Sesión</button>
                ):(
                    <button className='btn btn-secondary w-50 mx-auto'>Inicie Sesión</button>
                )}
                <div className='d-flex align-items-baseline mt-2'>
                    <p> No tiene Usuario? </p>
                    <button className='btn border border-0 border-bottom border-2 border-primary-subtle rounded-0 mx-1' name='create' onClick={onClick}>Crear Usuario</button> 
                </div>
                <button className='btn text-start w-25 mx-0 p-0 text-primary' name='cancel' onClick={onClick}>Cancelar</button>
            </div>
            </div>
        </div>
        </>
    );
}
 
export default Login;