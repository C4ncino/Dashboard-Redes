import React from 'react';

const About = ({ data }) => {
    return (
        <>
            <div className='d-flex flex-column align-items-center bg-secondary-subtle w-100 pt-4' id='about'>
                <h2>Conócenos</h2>

                <div className="d-flex flex-row p-3 m-0 flex-wrap justify-content-center" style={{ gap: '1rem' }}>
                    {data.map((member, i) =>
                        <div key={i} className="card  border-0 bg-transparent text-center p-0" style={{ "height": "auto", "width": "16rem" }}>
                            <div className="pb-0 h-auto" style={{ "height": "5rem" }}>
                                <img src={member.pp} className="card-img-top object-fit-cover rounded-circle" alt="..." style={{ "height": "10rem", "width": "10rem" }} />
                                <h6 className="card-title my-4">{member.name}</h6>
                            </div>
                            <div className='d-flex flex-column align-items-center'>
                                <ul className="list-group list-group-flush border-top border-2 border-dark-subtle w-75 py-1">
                                    <li className="list-group-item bg-transparent fs-6">{member.carrer}</li>
                                </ul>
                                <div className="card-footer bg-transparent border-top border-2 border-dark-subtle w-75">
                                    <small className="text-body-secondary ">{member.semester}</small>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default About;