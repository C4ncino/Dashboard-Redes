import React from 'react';
import About from './About';
import data from './data.json';

const Home = () => {
    return (
        <>
            <div className='d-flex flex-column align-items-center'>
                {/* Introducction */}
                <div className='bg-dark-subtle bg-opacity-10 d-flex justify-content-center py-4'>
                    <div className='w-75'>
                        <h2 className='text-center'> {data.introduction.title} </h2>
                        <div className='row'>
                            <div className='pe-3 me-4 col' >
                                {data.introduction.paragraphs.map((pg, i) =>
                                    <p key={i} className='d-inline-block' style={{ textAlign: "justify" }}>{pg}</p>
                                )}
                            </div>
                            <div className='col-auto' style={{ minHeight: "20rem", maxHeight: "25rem", maxWidth: "100%" }}>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60210.41714889838!2d-98.54064119461106!3d19.40587756538593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1d530961cbc23%3A0x8bf87f0e312b2315!2sRancho%20San%20Isidro%20El%20Moral!5e0!3m2!1ses-419!2smx!4v1683667667442!5m2!1ses-419!2smx"
                                    className='border rounded-2 border-4 p-0'
                                    style={{ minHeight: "20rem", maxHeight: "25rem" }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Development */}
                <div className='w-75 d-flex flex-column align-items-center mt-4'>
                    <h2 className='d-block text-start w-100'>{data.development.title}</h2>
                    {data.development.paragraphs.map((p, i) =>
                        <p key={i} style={{ textAlign: "justify" }}>{p}</p>
                    )}
                    <table className='table w-75'>
                        <thead>
                            <tr>
                                {data.development.table.headers.map((value, i) =>
                                    <th key={i} scope='col'> {value} </th>
                                )}
                            </tr>
                        </thead>
                        <tbody>
                            {data.development.table.info.map((value, i) =>
                                <tr key={i}>
                                    <th scope='row'> {i} </th>
                                    <td> {value.name} </td>
                                    <td> {value.description} </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Repositorios */}
                <div className='d-flex flex-column align-items-center w-100 mt-3 py-4 bg-primary-subtle bg-opacity-25'>
                    <h2 className='text-center'>Repositorios</h2>
                    <div className='d-flex felx-row justify-content-center' style={{ gap: "12rem" }}>
                        {data.repositorios.map((repo, i) =>
                            <div key={i} className='d-flex flex-column align-items-center'>
                                <h4 className='text-center mb-1 fw-bold'>{repo.title}</h4>
                                <a className='btn btn-outline-dark border-0 mt-2 p-3 rounded-circle d-flex align-items-center justify-content-center' style={{ height: "4rem", width: "4rem" }} href={repo.url} target='_blank'>
                                    < i className='bi bi-github fs-1' />
                                </a>
                            </div>
                        )}
                    </div>

                    {/* API */}
                    <div className='d-flex flex-column align-items-center my-3 pt-3 w-75'>
                        <h4 className='text-center w-75'>{data.api.info}</h4>
                        <a className='btn btn-outline-primary mt-2' href={data.api.url} target='_blank'>Haz Click Aquí</a>
                    </div>
                </div >

            </div >

            <About data={data.about} />
        </>
    );
}

export default Home;