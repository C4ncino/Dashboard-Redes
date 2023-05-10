import React from 'react';
import data from '../Home/data.json';

const Navbar = ({ logged, setLogged, setLogIn, setSignIn, user, setUser, setPage }) => {

    const pages = [
        { 'title': 'Home', 'name': 'home' },
        { 'title': 'Valores Actuales', 'name': 'live' },
        { 'title': 'Historial', 'name': 'record' },
    ]

    const onClick = (e) => {
        if (e.target.name === 'logOut') {
            setUser('')
            setLogged(false)
        }
        else if (e.target.name === 'logIn') {
            setLogIn(true)
            setLogged(false)
        }
        else if (e.target.name === 'signIn') {
            setLogIn(true)
            setSignIn(true)
            setLogged(false)
        }
        else if (e.target.name === 'home') {
            setPage('home')
        }
        else if (e.target.name === 'live') {
            if (logged == false) {
                alert('Necesita Iniciar Sesión')
            }
            else {
                setPage('live')
            }
        }
        else if (e.target.name === 'record') {
            if (logged == false) {
                return (
                    alert('Necesita Iniciar Sesión')
                )
            }
            else {
                setPage('record')
            }
        }
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg w-100 text-light blur">
                <div className="container-fluid">
                    <button className="navbar-brand m-2 fs-3 fw-bold border-0 bg-transparent text-light" name='home' onClick={onClick}>Dashboard</button>
                    <button className="navbar-toggler mx-2 p-2 border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <i className='bi bi-list fs-1 p-0 m-0 text-light'></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav mt-2 my-lg-0 navbar-nav-scroll me-auto">
                            {pages.map((page, i) =>
                                <li className="nav-item border-start border-3 ps-3 py-1 ms-3" key={i}>
                                    <button className="nav-link active text-light" onClick={onClick} name={page.name}> {page.title} </button>
                                </li>
                            )}
                        </ul>

                        {logged ? (
                            <div className='ps-2 ms-2 d-flex flex-row align-items-center' style={{ 'height': '3rem' }}>
                                <p className='m-0 p-0'>Bienvenido, {user}</p>
                            </div>
                        ) : (
                            <></>
                        )}
                        <div className='border-start border-2 ps-3 ms-3 d-flex flex-row align-items-center' style={{ 'height': '3.5rem' }}>
                            {logged ? (
                                <>
                                    <button className="btn btn-outline-danger border border-3 border-danger fs-6 fw-bold text-light" name='logOut' onClick={onClick}>Cerrar Sesión</button>
                                </>
                            ) : (
                                <>
                                    <button className="btn border border-3 border-light btn-outline-primary me-3 fw-bold fs-6 text-light" name='logIn' onClick={onClick}>Inicia Sesión</button>
                                    <button className="btn border border-3 border-light btn-outline-primary ms-2 fw-bold fs-6 text-light" name='signIn' onClick={onClick}>Crear Cuenta</button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </nav>


            <div className='header m-4 mb-0'>
                <h1 className='text-center w-75 mx-auto text-light fw-bold'>{data.title}</h1>
            </div>

            <img className='banner' src="/images/banner.jpg" alt="nada" />
        </>
    );
}

export default Navbar;