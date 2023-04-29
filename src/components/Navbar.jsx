import React from 'react';

const Navbar = ({logged, setLogged, setLogIn, setSignIn}) => {

    const onClick = (e) => {
        if (e.target.name == 'logOut'){
            setLogged(false)
        }
        else if (e.target.name == 'logIn'){
            setLogIn(true)
            setLogged(false)
        }
        else if (e.target.name == 'signIn'){
            setLogIn(true)
            setSignIn(true)
            setLogged(false)
        }
    }

    return (  
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary px-5 w-100">
                <div className="container-fluid">
                    <h1 className="navbar-brand m-2" href="#">Dashboard</h1>
                    <button className="navbar-toggler mx-2 fs-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <i className='bi bi-list'></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                            <li className="nav-item">
                                <a className="nav-link active fs-5" aria-current="page" href="#">Valores Actuales</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fs-5" href="#">Historial</a>
                            </li>
                        </ul>
                        {logged ? (
                            <button className="btn btn-outline-danger" name='logOut' onClick={onClick}>Cerrar Sesión</button>
                        ):(
                            <>
                                <button className="btn btn-outline-primary me-3" name='logIn' onClick={onClick}>Inicia Sesión</button>
                                <button className="btn btn-outline-primary" name='signIn' onClick={onClick}>Crear Cuenta</button>
                            </>
                        )}
                    </div>
                </div>
                </nav>
        </>
    );
}
 
export default Navbar;