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
                    <p>For a year-long global adventure, I’ve chosen four cities across continents for their unique attractions and ideal travel seasons: Wellington (New Zealand, Oceania), Prague (Czech Republic, Europe), Cusco (Peru, South America), and Arusha (Tanzania, Africa).</p>
                    <p>Inspired by Machu Picchu, a New Wonder of the World, Cusco’s mystical Inca ruins captivated me. Next, Arusha, discovered through a YouTube channel on Tanzanian life, offers Mount Kilimanjaro (5,895m) and wildlife-rich national parks. Prague, a vibrant metropolis with a fairy-tale skyline and UNESCO-listed historic center, adds European charm. Wellington, suggested by AI, completes the itinerary, skipping Asia per my preference. Each city’s optimal travel time aligns perfectly for a seamless year-long journey.</p>
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