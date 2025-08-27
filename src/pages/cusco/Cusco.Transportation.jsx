import React from 'react'

const Cusco_Transportation = () => {
    return (
        <main className="cusco_transportation">
            <h1><span>cusco</span><span>transportation</span></h1>
            <section className="card_container">
                <article className="card">
                    <div className="image">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124130.99944936942!2d-72.02165162304618!3d-13.529838913848309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x916dd5d826598431%3A0x2aa996cc2318315d!2z56eY6a2v5bqr5pav56eR!5e0!3m2!1szh-TW!2shk!4v1756289492541!5m2!1szh-TW!2shk"
                            width="100%" 
                            height="450" 
                            style={{border:0}}
                            allowfullscreen="" 
                            loading="lazy" 
                            referrerpolicy="no-referrer-when-downgrade"
                        >
                        </iframe>
                    </div>
                    <div className="info">
                        <h2> <i class="fa-solid fa-plane"></i> flight</h2>
                        <p>
                            There are no direct flights from Hong Kong International Airport (HKG) to Alejandro Velasco Astete International Airport (CUZ) in Cusco. Common connecting routes involve one or two stops, typically via Jorge Chávez International Airport (LIM) in Lima with airlines like LATAM or Cathay Pacific, or via hubs like Toronto (YYZ) or other international airports. The fastest flight time is approximately 26 hours, while average total duration including layovers is 26-28 hours. Average one-way flight fee is HKD 7,800-10,140 (round-trip HKD 12,480-15,600).
                        </p>
                        <h2> <i class="fa-solid fa-car-side"></i> airport to city center</h2>
                        <p>
                            Public transportation is available via combis (minibuses) from the airport terminal to the city center (e.g., Plaza de Armas), with routes along main roads like Avenida Velasco Astete. The journey takes 40 minutes and costs HKD 2 (1 PEN). Alternatively, taxis take 20-25 minutes and cost HKD 21-31 (10-15 PEN).
                        </p>
                        <h2> <i class="fa-solid fa-bus"></i> local transportation</h2>
                        <p>
                            Public transport includes buses and combis (minivans for urban and suburban routes), with no trains or trams within the city (trains are primarily for intercity travel like to Machu Picchu). Fees range from HKD 1.66-6.21 (0.8-3 PEN) per ride, regardless of distance. Schedules operate from around 5 AM to 10 PM, with buses every 5-15 minutes during peak hours (7-9 AM, 4-6 PM) and less frequent off-peak.
                        </p>
                        <h2> <i class="fa-solid fa-taxi"></i> taxi</h2>
                        <p>
                            Taxis have a base fare of HKD 6-10 (3-5 PEN) during the day and HKD 12-15 (6-7 PEN) at night, plus HKD 9 per kilometer (4.5 PEN/km), with waiting fees of HKD 41 per hour (20 PEN/hour). Fares are not metered, so negotiate in advance.
                        </p>
                        <h2> <i class="fa-solid fa-car"></i> car renting</h2>
                        <p>
                            Car rental services are available from companies like Payless, Europcar, and Flexways at the airport or city locations. Average daily fees range from HKD 148-374 (USD 19-48), excluding insurance and fuel; prices are lower in off-peak months like January.
                        </p>
                    </div>
                </article>
            </section>
        </main>
    );
}

export default Cusco_Transportation
