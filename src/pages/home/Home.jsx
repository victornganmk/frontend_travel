import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <main className="hero" id="home">
                <div className="container">
                    <h1>worldwide year trip</h1>
                    <p>Across Europe, Africa, Oceania and South America</p>
                    <a href="#home_about" class="btn">explore more</a>
                </div>
            </main>
            <section className="home_about" id="home_about">
                <article>
                    <h2>about</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque eveniet perferendis pariatur! Rerum, beatae quibusdam? Maiores eaque blanditiis velit nulla cum libero similique. Explicabo minima, aspernatur illum quae blanditiis voluptatibus assumenda dolorum nam laboriosam. Odio praesentium quos nisi tenetur eius repellendus maiores dolorem odit? Modi adipisci id incidunt sint odit?</p>
                </article>
                <div className="image">
                    <div className="card_container">
                        <Link className="card" to="/wellington_about">
                            <h3>Wellington/ New Zealand</h3>
                            <div className="card-image">
                                <img src="/img/home/home_card_image_01.avif" alt="" />
                                <p>Feb</p>
                            </div>
                        </Link>
                        <Link className="card" to="/prague_about">
                            <h3>Prague/ Czech Republic</h3>
                            <div className="card-image">
                                <img src="/img/home/home_card_image_02.avif" alt="" />
                                <p>Apr</p>
                            </div>
                        </Link>
                        <Link className="card" to="/cusco_about">
                            <h3>Cusco/ Peru</h3>
                            <div className="card-image">
                                <img src="/img/home/home_card_image_03.avif" alt="" />
                                <p>Jun</p>
                            </div>
                        </Link>
                        <Link className="card" to="/arusha_about">
                            <h3>Arusha/ Tanzania</h3>
                            <div className="card-image">
                                <img src="/img/home/home_card_image_04.avif" alt="" />
                                <p>Aug</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

        </>
    );
}

export default Home