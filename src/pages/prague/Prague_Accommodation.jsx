import React from 'react'
import { prague_accommodation_01 } from "/img/prague/prague_accommodation_01.avif"
import { prague_accommodation_02 } from "/img/prague/prague_accommodation_02.avif"
import { prague_accommodation_03 } from "/img/prague/prague_accommodation_03.avif"
import { prague_accommodation_04 } from "/img/prague/prague_accommodation_04.avif"

const Prague_Accommodation = () => {
    return (
        <main className="prague_accommodation">
            <h1><span>prague</span><span>accommodation</span></h1>
            <section className="card_container">
                <article className="card">
                    <div className="image">
                            <img src={ prague_accommodation_01 } alt="" />
                    </div>
                    <div className="info">
                            <h2>Four Seasons Hotel Prague</h2>
                            <p>
                                <i class="fa-solid fa-house"></i>
                                Hotel
                            </p>
                            <p>
                                <i class="fa-solid fa-bookmark"></i>
                                A luxurious 5-star hotel blending Renaissance and Baroque buildings, offering elegant rooms, fine dining, and Vltava River views, steps from Charles Bridge and Old Town Square.
                            </p>
                            <p>
                                <i class="fa-solid fa-comment-dollar"></i>
                                HK$3,900
                            </p>
                            <p>
                                <i class="fa-solid fa-location-dot"></i>
                                Veleslavínova 2a/1098, 110 00 Praha 1, Czech Republic
                            </p>
                            <p>
                                <i class="fa-solid fa-paper-plane"></i>
                                <a 
                                    href="https://www.fourseasons.com/prague"
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    https://www.fourseasons.com/prague
                                </a>
                            </p>
                    </div>
                </article>
                <article className="card">
                    <div className="image">
                            <img src={ prague_accommodation_02 } alt="" />
                    </div>
                    <div className="info">
                            <h2>Numa I Republika Rooms & Apartments</h2>
                            <p>
                                <i class="fa-solid fa-house"></i>
                                Aparthotel
                            </p>
                            <p>
                                <i class="fa-solid fa-bookmark"></i>
                                Modern aparthotel near Powder Tower, offering stylish rooms and apartments with kitchens, WiFi, and city views, close to Old Town and public transport hubs.
                            </p>
                            <p>
                                <i class="fa-solid fa-comment-dollar"></i>
                                HK$1,170
                            </p>
                            <p>
                                <i class="fa-solid fa-location-dot"></i>
                                5 Petrská, 110 00 Praha 1, Czech Republic
                            </p>
                            <p>
                                <i class="fa-solid fa-paper-plane"></i>
                                <a 
                                    href="https://www.numastays.com/en/hotels/czech-republic/prague/numa-republika-rooms-apartments"
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    https://www.numastays.com/en/hotels/czech-republic/prague/numa-republika-rooms-apartments
                                </a>
                            </p>
                    </div>
                </article>
                <article className="card">
                    <div className="image">
                            <img src={ prague_accommodation_03 } alt="" />
                    </div>
                    <div className="info">
                            <h2>Art Deco Imperial Hotel</h2>
                            <p>
                                <i class="fa-solid fa-house"></i>
                                Hotel
                            </p>
                            <p>
                                <i class="fa-solid fa-bookmark"></i>
                                A 5-star Art Deco gem with elegant rooms, a spa, sauna, and conference facilities, centrally located near Republic Square, perfect for luxury and business travelers.
                            </p>
                            <p>
                                <i class="fa-solid fa-comment-dollar"></i>
                                HK$1,794
                            </p>
                            <p>
                                <i class="fa-solid fa-location-dot"></i>
                                Na Poříčí 15, 110 00 Praha 1, Czech Republic
                            </p>
                            <p>
                                <i class="fa-solid fa-paper-plane"></i>
                                <a 
                                    href="https://www.hotel-imperial.cz"
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    https://www.hotel-imperial.cz
                                </a>
                            </p>
                    </div>
                </article>
                <article className="card">
                    <div className="image">
                            <img src={ prague_accommodation_04 } alt="" />
                    </div>
                    <div className="info">
                            <h2>B&B Hotel Prague City</h2>
                            <p>
                                <i class="fa-solid fa-house"></i>
                                Hotel
                            </p>
                            <p>
                                <i class="fa-solid fa-bookmark"></i>
                                Budget-friendly hotel offering clean, modern rooms with free WiFi, near Vltava River and Prague Castle, ideal for travelers seeking affordability in a central location.
                            </p>
                            <p>
                                <i class="fa-solid fa-comment-dollar"></i>
                                HK$593
                            </p>
                            <p>
                                <i class="fa-solid fa-location-dot"></i>
                                Prvního pluku 29, 186 00 Praha 8, Czech Republic
                            </p>
                            <p>
                                <i class="fa-solid fa-paper-plane"></i>
                                <a 
                                    href="https://www.hotel-bb.com/en/hotel/prague-city"
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    https://www.hotel-bb.com/en/hotel/prague-city
                                </a>
                            </p>
                    </div>
                </article>
            </section>
        </main>
    );
}

export default Prague_Accommodation