import React from 'react'

const Arusha_Transportation = () => {
    return (
        <main className="arusha_transportation">
            <h1><span>arusha</span><span>transportation</span></h1>
            <section className="card_container">
                <article className="card">
                    <div className="image">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127449.72605586167!2d36.594810041854146!3d-3.397968873303706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18371c88f2387383%3A0xbc1907f7ec497152!2z5Z2m5bCa5bC85Lqe6Zi_6a2v5rKZ!5e0!3m2!1szh-TW!2shk!4v1756289689828!5m2!1szh-TW!2shk"
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
                            There are no direct flights from Hong Kong International Airport (HKG) to Arusha Airport (ARK) or the nearby Kilimanjaro International Airport (JRO, 50 km from Arusha). Common connecting routes involve one or two stops, typically via Guangzhou Baiyun International Airport (CAN) with China Southern Airlines, Zanzibar Airport (ZNZ) with Air Tanzania, or other hubs like Dubai (DXB) with Emirates. The fastest flight time is approximately 18 hours, while average total duration including layovers is 18-24 hours. Average one-way flight fee is HKD 4,196-9,407 (round-trip HKD 8,206-11,755).
                        </p>
                        <h2> <i class="fa-solid fa-car-side"></i> airport to city center</h2>
                        <p>
                            The main airport serving Arusha is Kilimanjaro International Airport (JRO), 50 km away. Public transportation is available via shared shuttles or minibuses from the airport terminal to Arusha city center (e.g., Clock Tower area), with routes along the main highway. The journey takes 60-70 minutes and costs HKD 31 (10,000 TZS). Alternatively, taxis take 52-70 minutes and cost HKD 390 (USD 50).
                        </p>
                        <h2> <i class="fa-solid fa-bus"></i> local transportation</h2>
                        <p>
                            Public transport includes dala dalas (minibuses for urban and intercity routes) and larger buses (for longer distances like to Moshi or Dar es Salaam), with no trains or trams available. Fees range from HKD 1.24-3.11 (400-1,000 TZS) per ride. Schedules operate from around 5 AM to 10 PM, with dala dalas departing when full and running every 5-15 minutes during peak hours (7-9 AM, 4-6 PM).
                        </p>
                        <h2> <i class="fa-solid fa-taxi"></i> taxi</h2>
                        <p>
                            Taxis are not metered and fares are negotiated; typical city rides cost HKD 62-124 (20,000-40,000 TZS), with base fares around HKD 15-31 (5,000-10,000 TZS) plus additional per distance. From airport to center, expect HKD 93-258 (30,000 TZS to 30 EUR).
                        </p>
                        <h2> <i class="fa-solid fa-car"></i> car renting</h2>
                        <p>
                            Car rental services are available from companies like Autounion, Europcar, and local providers at the airport or city locations. Average daily fees range from HKD 257-546 (USD 33-70), excluding insurance and fuel; prices are higher in peak season.
                        </p>
                    </div>
                </article>
            </section>
        </main>
    );
}

export default Arusha_Transportation