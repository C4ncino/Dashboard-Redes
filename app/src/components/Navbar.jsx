import React from 'react';

const Navbar = ({ logged, setLogged, setLogIn, setSignIn, user, setUser }) => {

    const onClick = (e) => {
        if (e.target.name == 'logOut') {
            setUser('')
            setLogged(false)
        }
        else if (e.target.name == 'logIn') {
            setLogIn(true)
            setLogged(false)
        }
        else if (e.target.name == 'signIn') {
            setLogIn(true)
            setSignIn(true)
            setLogged(false)
        }
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg px-5 w-100">
                <div className="container-fluid">
                    <h1 className="navbar-brand m-3 fs-2 fw-bold" href="#">Dashboard</h1>
                    <button className="navbar-toggler mx-2 fs-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <i className='bi bi-list fs-2 p-0 m-0'></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav mt-2 my-lg-0 navbar-nav-scroll me-auto">
                            <li className="nav-item border-start border-2 ps-3 py-1 ms-3">
                                <a className="nav-link active fs-5" aria-current="page" href="#">Valores Actuales</a>
                            </li>
                            <li className="nav-item border-start border-2 ps-3 py-1 ms-3">
                                <a className="nav-link fs-5" href="#">Historial</a>
                            </li>
                        </ul>

                        {logged ? (
                            <div className='ps-3 ms-3 d-flex flex-row align-items-center' style={{ 'height': '3rem' }}>
                                <p className='m-0 p-0'>Bienvenido, {user}</p>
                            </div>
                        ) : (
                            <></>
                        )}
                        <div className='border-start border-2 ps-3 ms-3 d-flex flex-row align-items-center' style={{ 'height': '3.5rem' }}>
                            {logged ? (
                                <>
                                    <button className="btn btn-outline-danger" name='logOut' onClick={onClick}>Cerrar Sesión</button>
                                </>
                            ) : (
                                <>
                                    <button className="btn btn-outline-primary me-3" name='logIn' onClick={onClick}>Inicia Sesión</button>
                                    <button className="btn btn-outline-primary ms-2" name='signIn' onClick={onClick}>Crear Cuenta</button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;