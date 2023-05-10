import React from 'react';
import About from './About';
import data from './data.json';

const Home = () => {
    return (
        <>
            <div>
                {/* Introducction */}
                <div>
                    <h2> {data.introduction.title} </h2>
                    <div className='d-flex flex-row'>
                        <div>
                            <p>
                                {data.introduction['paragraph 1']}
                            </p>
                            <p>
                                {data.introduction['paragraph 2']}
                            </p>
                            <p>
                                {data.introduction['paragraph 3']}
                            </p>
                        </div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60210.41714889838!2d-98.54064119461106!3d19.40587756538593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1d530961cbc23%3A0x8bf87f0e312b2315!2sRancho%20San%20Isidro%20El%20Moral!5e0!3m2!1ses-419!2smx!4v1683667667442!5m2!1ses-419!2smx"
                            width="300"
                            height="200"
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>

                {/* Development */}
                <div>
                    <h2>{data.development.title}</h2>
                    {data.development.paragraphs.map((p, i) =>
                        <div key={i}>
                            <p>{p}</p>
                        </div>
                    )}
                    <table>
                        {data.development.table.map((info, i) =>
                            <tr key={i}>
                                <td> {info.name} </td>
                                <td> {info.description} </td>
                            </tr>
                        )}
                    </table>
                </div>

                {/* Repositorios */}
                <div>
                    <h2>Repositorios</h2>
                    <div>
                        {data.repositorios.map((repo, i) =>
                            <div key={i}>
                                <h3>{repo.title}</h3>
                                <a href={repo.url}>Haz Click Aquí</a>
                            </div>
                        )}
                    </div>
                </div>

                {/* API */}
                <div>
                    <h3>{data.api.info}</h3>
                    <a href={data.api.url}>Haz Click Aquí</a>
                </div>
            </div>

            <About data={data.about} />
        </>
    );
}

export default Home;