import React from 'react';

const About = ({ data }) => {
    return (
        <>
            <div className='d-flex flex-column align-items-center p-4' id='about'>
                <h2>Conócenos</h2>

                <div className="d-flex flex-row p-3 m-0 flex-wrap justify-content-center" style={{ gap: '5rem' }}>
                    {data.map((member, i) =>
                        <div key={i} className="card  border-0 bg-transparent text-center" style={{ "height": "auto", "width": "20rem" }}>
                            <div className="pb-0 h-auto" style={{ "height": "5rem" }}>
                                <img src={member.pp} className="card-img-top object-fit-cover rounded-circle" alt="..." style={{ "height": "14rem", "width": "14rem" }} />
                                <h5 className="card-title my-4">{member.name}</h5>
                            </div>
                            <div className='d-flex flex-column align-items-center'>
                                <ul className="list-group list-group-flush border-top border-2 border-dark-subtle w-75 py-2">
                                    <li className="list-group-item bg-transparent">{member.carrer}</li>
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