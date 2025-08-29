import React from 'react'
import prague_attractions_01 from "../../img/prague/prague_attractions_01.avif"
import prague_attractions_02 from "../../img/prague/prague_attractions_02.avif"
import prague_attractions_03 from "../../img/prague/prague_attractions_03.avif"
import prague_attractions_04 from "../../img/prague/prague_attractions_04.avif"
import prague_attractions_05 from "../../img/prague/prague_attractions_05.avif"
import prague_attractions_06 from "../../img/prague/prague_attractions_06.avif"

const Prague_Attractions = () => {
    return (
        <>
            <main className="prague_attractions">
                <h1><span>prague</span><span>attractions</span></h1>
                <section className="card_container">
                    <article className="card">
                        <div className="image">
                            <img src={ prague_attractions_01 } alt="" />
                        </div>
                        <div className="info">
                            <h2>Prague Castle</h2>
                            <p>
                                <i class="fa-solid fa-bookmark"></i>
                                Prague Castle, a sprawling 9th-century complex, is one of the largest ancient castles globally, housing St. Vitus Cathedral, royal palaces, and Golden Lane, with stunning city views.
                            </p>
                            <p>
                                <i class="fa-solid fa-location-dot"></i>
                                Hradčany, 119 08 Praha 1, Czech Republic
                            </p>
                            <p>
                                <i class="fa-solid fa-car"></i>
                                15-minute tram ride (No. 22 or 23) from Old Town Square to Pražský hrad stop. 20-30 minute walk from Charles Bridge. Peak traffic: 8-9 AM, 5-6 PM.
                            </p>
                        </div>
                    </article>
                    <article className="card">
                        <div className="image">
                            <img src={ prague_attractions_02 } alt="" />
                        </div>
                        <div className="info">
                            <h2>Charles Bridge</h2>
                            <p>
                                <i class="fa-solid fa-bookmark"></i>
                                Built in the 14th century, Charles Bridge connects Old Town and Lesser Town, lined with baroque statues, offering scenic Vltava River views and vibrant street performances.
                            </p>
                            <p>
                                <i class="fa-solid fa-location-dot"></i>
                                Karlův most, 110 00 Praha 1, Czech Republic
                            </p>
                            <p>
                                <i class="fa-solid fa-car"></i>
                                5-minute walk from Old Town Square. Metro Line A to Malostranská (5 minutes), then 5-minute walk. Pedestrian-only; no traffic issues. Early mornings avoid crowds.
                            </p>
                        </div>
                    </article>
                    <article className="card">
                        <div className="image">
                            <img src={ prague_attractions_03 } alt="" />
                        </div>
                        <div className="info">
                            <h2>Old Town Square</h2>
                            <p>
                                <i class="fa-solid fa-bookmark"></i>
                                Prague’s historic heart, Old Town Square features the Astronomical Clock, Gothic Týn Church, and vibrant markets, surrounded by colorful buildings, hosting festivals and local culture.
                            </p>
                            <p>
                                <i class="fa-solid fa-location-dot"></i>
                                Staroměstské náměstí, 110 00 Praha 1, Czech Republic
                            </p>
                            <p>
                                <i class="fa-solid fa-car"></i>
                                Central location; 2-minute walk from Wenceslas Square. Metro Line A to Staroměstská (5 minutes). No vehicle traffic; pedestrian-friendly. Crowded 10 AM-6 PM.
                            </p>
                        </div>
                    </article>
                    <article className="card">
                        <div className="image">
                            <img src={ prague_attractions_04 } alt="" />
                        </div>
                        <div className="info">
                            <h2>Petřín Hill</h2>
                            <p>
                                <i class="fa-solid fa-bookmark"></i>
                                Petřín Hill, a green oasis, offers walking trails, a lookout tower resembling the Eiffel Tower, rose gardens, and panoramic Prague views, ideal for nature lovers.
                            </p>
                            <p>
                                <i class="fa-solid fa-location-dot"></i>
                                Petřín, 118 00 Praha 1, Czech Republic
                            </p>
                            <p>
                                <i class="fa-solid fa-car"></i>
                                Funicular from Újezd (Malá Strana, 5 minutes) or tram 9/12 to Újezd (10 minutes). 30-minute walk uphill. Peak traffic: 8-9 AM, 5-6 PM.
                            </p>
                        </div>
                    </article>
                    <article className="card">
                        <div className="image">
                            <img src={ prague_attractions_05 } alt="" />
                        </div>
                        <div className="info">
                            <h2>Jewish Quarter (Josefov)</h2>
                            <p>
                                <i class="fa-solid fa-bookmark"></i>
                                Josefov preserves Prague’s Jewish heritage with historic synagogues, the Old Jewish Cemetery, and a museum, showcasing centuries of cultural and historical significance in a compact area.
                            </p>
                            <p>
                                <i class="fa-solid fa-location-dot"></i>
                                U Staré školy, 110 00 Praha 1, Czech Republic
                            </p>
                            <p>
                                <i class="fa-solid fa-car"></i>
                                5-minute walk from Old Town Square. Metro Line A to Staroměstská (5 minutes). Pedestrian-friendly; minimal traffic. Crowds peak 10 AM-4 PM.
                            </p>
                        </div>
                    </article>
                    <article className="card">
                        <div className="image">
                            <img src={ prague_attractions_06 } alt="" />
                        </div>
                        <div className="info">
                            <h2>Vyšehrad Fortress</h2>
                            <p>
                                <i class="fa-solid fa-bookmark"></i>
                                Vyšehrad, a 10th-century fortress on the Vltava, features a basilica, cemetery with notable Czech figures, and serene parks, offering history and views less crowded than Prague Castle.
                            </p>
                            <p>
                                <i class="fa-solid fa-location-dot"></i>
                                V Pevnosti 159/5b, 128 00 Praha 2, Czech Republic
                            </p>
                            <p>
                                <i class="fa-solid fa-car"></i>
                                Metro Line C to Vyšehrad (10 minutes) or tram 3/17 to Výtoň (10-15 minutes). 20-minute drive; peak traffic: 7-9 AM, 4-6 PM.
                            </p>
                        </div>
                    </article>
                </section>
            </main>
        </>
    );
}

export default Prague_Attractions