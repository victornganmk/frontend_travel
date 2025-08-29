import React from 'react'
import { cusco_accommodation_01 } from "/img/cusco/cusco_accommodation_01.avif"
import { cusco_accommodation_02 } from "/img/cusco/cusco_accommodation_02.avif"
import { cusco_accommodation_03 } from "/img/cusco/cusco_accommodation_03.avif"
import { cusco_accommodation_04 } from "/img/cusco/cusco_accommodation_04.avif"

const Cusco_Accommodation = () => {
    return (
        <main className="cusco_accommodation">
            <h1><span>cusco</span><span>accommodation</span></h1>
            <section className="card_container">
                <article className="card">
                    <div className="image">
                            <img src={ cusco_accommodation_01 } alt="" />
                    </div>
                    <div className="info">
                            <h2>Inkaterra La Casona Relais & Châteaux</h2>
                            <p>
                                <i class="fa-solid fa-house"></i>
                                Hotel
                            </p>
                            <p>
                                <i class="fa-solid fa-bookmark"></i>
                                A luxurious 5-star colonial manor in Cusco’s heart, offering 11 suites with Andean decor, spa services, and fine dining, near Plaza de Armas and Qorikancha.
                            </p>
                            <p>
                                <i class="fa-solid fa-comment-dollar"></i>
                                HK$2,371
                            </p>
                            <p>
                                <i class="fa-solid fa-location-dot"></i>
                                Plaza Las Nazarenas 113, Cusco 08002, Peru
                            </p>
                            <p>
                                <i class="fa-solid fa-paper-plane"></i>
                                <a 
                                    href="https://www.inkaterra.com/inkaterra/inkaterra-la-casona/"
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    https://www.inkaterra.com/inkaterra/inkaterra-la-casona/
                                </a>
                            </p>
                    </div>
                </article>
                <article className="card">
                    <div className="image">
                            <img src={ cusco_accommodation_02 } alt="" />
                    </div>
                    <div className="info">
                            <h2>Sonesta Hotel Cusco</h2>
                            <p>
                                <i class="fa-solid fa-house"></i>
                                Hotel
                            </p>
                            <p>
                                <i class="fa-solid fa-bookmark"></i>
                                A modern 4-star hotel near Plaza de Armas, featuring 127 rooms, Mamají Restaurant with Peruvian cuisine, a business center, and free airport shuttle, ideal for comfort.
                            </p>
                            <p>
                                <i class="fa-solid fa-comment-dollar"></i>
                                HK$858
                            </p>
                            <p>
                                <i class="fa-solid fa-location-dot"></i>
                                Av. El Sol 954, Cusco 08002, Peru
                            </p>
                            <p>
                                <i class="fa-solid fa-paper-plane"></i>
                                <a 
                                    href="https://www.sonesta.com/sonesta-hotels-resorts/peru/cusco/sonesta-hotel-cusco"
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    https://www.sonesta.com/sonesta-hotels-resorts/peru/cusco/sonesta-hotel-cusco
                                </a>
                            </p>
                    </div>
                </article>
                <article className="card">
                    <div className="image">
                            <img src={ cusco_accommodation_03 } alt="" />
                    </div>
                    <div className="info">
                            <h2>Casa Andina Premium Cusco</h2>
                            <p>
                                <i class="fa-solid fa-house"></i>
                                Hotel
                            </p>
                            <p>
                                <i class="fa-solid fa-bookmark"></i>
                                A 5-star hotel in a colonial mansion, offering cozy rooms, a gourmet restaurant, and a courtyard, blending Inca and Spanish charm near Qorikancha.
                            </p>
                            <p>
                                <i class="fa-solid fa-comment-dollar"></i>
                                HK$1,326
                            </p>
                            <p>
                                <i class="fa-solid fa-location-dot"></i>
                                Plazoleta Limacpampa Chico 473, Cusco 08003, Peru
                            </p>
                            <p>
                                <i class="fa-solid fa-paper-plane"></i>
                                <a 
                                    href="https://www.casa-andina.com/en/hotels/casa-andina-premium-cusco"
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    https://www.casa-andina.com/en/hotels/casa-andina-premium-cusco
                                </a>
                        </p>
                    </div>
                </article>
                <article className="card">
                    <div className="image">
                            <img src={ cusco_accommodation_04 } alt="" />
                    </div>
                    <div className="info">
                            <h2>La Posada del Viajero</h2>
                            <p>
                                <i class="fa-solid fa-house"></i>
                                Hotel
                            </p>
                            <p>
                                <i class="fa-solid fa-bookmark"></i>
                                Budget-friendly hotel near Cusco Cathedral, offering cozy rooms, free WiFi, buffet breakfast, and a shared kitchen, perfect for travelers seeking affordability in the historic center.
                            </p>
                            <p>
                                <i class="fa-solid fa-comment-dollar"></i>
                                HK$390
                            </p>
                            <p>
                                <i class="fa-solid fa-location-dot"></i>
                                Calle Santa Catalina Ancha 500, Cusco 08002, Peru
                            </p>
                            <p>
                                <i class="fa-solid fa-paper-plane"></i>
                                <a 
                                    href="http://www.posadadelviajerocusco.com/"
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    http://www.posadadelviajerocusco.com/
                                </a>
                            </p>
                    </div>
                </article>
            </section>
        </main>
    );
}

export default Cusco_Accommodation