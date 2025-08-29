import React from 'react'
import { arusha_accommodation_01 } from "/img/arusha/arusha_accommodation_01.avif"
import { arusha_accommodation_02 } from "/img/arusha/arusha_accommodation_02.avif"
import { arusha_accommodation_03 } from "/img/arusha/arusha_accommodation_03.avif"
import { arusha_accommodation_04 } from "/img/arusha/arusha_accommodation_04.avif"

const Arusha_Accommodation = () => {
    return (
        <main className="arusha_accommodation">
            <h1><span>arusha</span><span>accommodation</span></h1>
            <section className="card_container">
                <article className="card">
                    <div className="image">
                            <img src={ arusha_accommodation_01 } alt="" />
                    </div>
                    <div className="info">
                            <h2>Gran Meliá Arusha</h2>
                            <p>
                                <i class="fa-solid fa-house"></i>
                                Hotel
                            </p>
                            <p>
                                <i class="fa-solid fa-bookmark"></i>
                                A luxurious 5-star hotel on a coffee plantation, offering modern rooms, Mount Meru views, a spa, rooftop dining, and conference facilities, ideal for safaris and relaxation.
                            </p>
                            <p>
                                <i class="fa-solid fa-comment-dollar"></i>
                                HK$1,950
                            </p>
                            <p>
                                <i class="fa-solid fa-location-dot"></i>
                                Simeon Road, PO Box 1184, Arusha 23110, Tanzania
                            </p>
                            <p>
                                <i class="fa-solid fa-paper-plane"></i>
                                <a 
                                    href="https://www.melia.com/en/hotels/tanzania/arusha/gran-melia-arusha"
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    https://www.melia.com/en/hotels/tanzania/arusha/gran-melia-arusha
                                </a>
                            </p>
                    </div>
                </article>
                <article className="card">
                    <div className="image">
                            <img src={ arusha_accommodation_02 } alt="" />
                    </div>
                    <div className="info">
                            <h2>Four Points by Sheraton Arusha</h2>
                            <p>
                                <i class="fa-solid fa-house"></i>
                                Hotel
                            </p>
                            <p>
                                <i class="fa-solid fa-bookmark"></i>
                                Historic hotel since 1894, blending colonial charm with modern comforts, offering 114 stylish rooms, a pool, gym, and Parachichi Restaurant, near the Clock Tower.
                            </p>
                            <p>
                                <i class="fa-solid fa-comment-dollar"></i>
                                HK$1,326
                            </p>
                            <p>
                                <i class="fa-solid fa-location-dot"></i>
                                P.O. Box 88, Arusha, Tanzania
                            </p>
                            <p>
                                <i class="fa-solid fa-paper-plane"></i>
                                <a 
                                    href="https://www.marriott.com/hotels/travel/arkfp-four-points-sheraton-arusha"
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    https://www.marriott.com/hotels/travel/arkfp-four-points-sheraton-arusha
                                </a>
                            </p>
                    </div>
                </article>
                <article className="card">
                    <div className="image">
                            <img src={ arusha_accommodation_03 } alt="" />
                    </div>
                    <div className="info">
                            <h2>Arusha Coffee Lodge</h2>
                            <p>
                                <i class="fa-solid fa-house"></i>
                                Resort
                            </p>
                            <p>
                                <i class="fa-solid fa-bookmark"></i>
                                A cozy 5-star resort on a coffee plantation, featuring 30 plantation houses, a spa, dining, and rural ambiance, near Arusha Airport and town.
                            </p>
                            <p>
                                <i class="fa-solid fa-comment-dollar"></i>
                                HK$1,716
                            </p>
                            <p>
                                <i class="fa-solid fa-location-dot"></i>
                                Old Moshi Road, Arusha, Tanzania
                            </p>
                            <p>
                                <i class="fa-solid fa-paper-plane"></i>
                                <a 
                                    href="https://www.elewana.com/en/hotels/arusha-coffee-lodge"
                                >
                                    https://www.elewana.com/en/hotels/arusha-coffee-lodge
                                </a>
                            </p>
                    </div>
                </article>
                <article className="card">
                    <div className="image">
                            <img src={ arusha_accommodation_04 } alt="" />
                    </div>
                    <div className="info">
                            <h2>Tulia Boutique Hotel & Spa</h2>
                            <p>
                                <i class="fa-solid fa-house"></i>
                                Hotel
                            </p>
                            <p>
                                <i class="fa-solid fa-bookmark"></i>
                                Budget-friendly boutique hotel with a pool, high-quality rooms, free WiFi, and breakfast, offering great value near Arusha’s city center, perfect for safari travelers.
                            </p>
                            <p>
                                <i class="fa-solid fa-comment-dollar"></i>
                                HK$468
                            </p>
                            <p>
                                <i class="fa-solid fa-location-dot"></i>
                                Plot No. 15, Block D, Martine Street, Arusha, Tanzania
                            </p>
                            <p>
                                <i class="fa-solid fa-paper-plane"></i>
                                <a 
                                    href="https://www.tuliahotelandspa.com"
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    https://www.tuliahotelandspa.com
                                </a>
                            </p>
                    </div>
                </article>
            </section>
        </main>
    );
}

export default Arusha_Accommodation