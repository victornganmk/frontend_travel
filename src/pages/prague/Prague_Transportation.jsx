import React from 'react'

const Prague_Transportation = () => {
    return (
        <main className="prague_transportation">
            <h1><span>prague</span><span>transportation</span></h1>
            <section className="card_container">
                <article className="card">
                    <div className="image">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d163930.37332784952!2d14.300874501632814!3d50.05984380473828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b939c0970798b%3A0x400af0f66164090!2z5o235YWL5biD5ouJ5qC8!5e0!3m2!1szh-TW!2shk!4v1756289215309!5m2!1szh-TW!2shk"
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
                            There are no direct flights from Hong Kong International Airport (HKG) to Václav Havel Airport Prague (PRG). Common connecting routes involve one stop, typically via Doha Hamad International Airport (DOH) with Qatar Airways, Dubai International Airport (DXB) with Emirates, or Frankfurt Airport (FRA) with Lufthansa. The fastest flight time is approximately 14 hours, while average total duration including layovers is 15-18 hours. Average one-way flight fee is HKD 3,000-4,000 (round-trip HKD 5,200-6,200).
                        </p>
                        <h2> <i class="fa-solid fa-car-side"></i> airport to city center</h2>
                        <p>
                            Public transportation is available via Prague Integrated Transport (PID) buses, such as Bus 119 from the airport terminal to Nádraží Veleslavín (metro Line A station), then metro to the city center (e.g., Můstek or Staroměstská stations). The journey takes 30-40 minutes and costs HKD 15 (90-minute ticket). Alternatively, taxis take 25-50 minutes (depending on traffic) and cost HKD 240-280.
                        </p>
                        <h2> <i class="fa-solid fa-bus"></i> local transportation</h2>
                        <p>
                            Public transport includes buses (extensive network covering suburbs), metro (three lines A, B, C for rapid city travel), and trams (day and night lines for central areas). Fees range from HKD 11 (30-minute ticket) to HKD 122 (72-hour pass), with single tickets zone-based. Schedules operate from around 5 AM to midnight (metro and day trams every 2-10 minutes peak, buses every 10-30 minutes), with night services until 4:30 AM.
                        </p>
                        <h2> <i class="fa-solid fa-taxi"></i> taxi</h2>
                        <p>
                            Taxis have a base fare of HKD 15, plus HKD 13 per kilometer, and a waiting fee of HKD 2 per minute. Additional charges may apply for airport trips or peak times, with total fares regulated but varying by provider.
                        </p>
                        <h2> <i class="fa-solid fa-car"></i> car renting</h2>
                        <p>
                            Car rental services are widely available from companies like Sixt, Hertz, and Budget at the airport or city locations. Average daily fees range from HKD 200-500 (economy cars from HKD 200, mid-size from HKD 300-400), excluding insurance and fuel; prices are higher in peak season.
                        </p>
                    </div>
                </article>
            </section>
        </main>
    );
}

export default Prague_Transportation