import React from 'react'
import Navbar_Top from '../global_components/Navbar_Top';
import Navbar_Testing from '../global_components/Navbar_Testing'
import Navbar_Testing2 from '../global_components/Navbar_Testing2'

const Home = () => {
    return (
        <>
            <Navbar_Testing />
            <main className="hero" id="home">
                <div className="container">
                    <h1>worldwide year trip</h1>
                    <p>Across Europe, Africa, Oceania and South America</p>
                    <a href="#about" class="btn">explore more</a>
                </div>
            </main>
            <div className="about" id="about">
                <div className="article"></div>
                <div className="card_container"></div>
            </div>
        </>
    );
}

export default Home