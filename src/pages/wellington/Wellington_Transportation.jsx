import React from 'react'

const Wellington_Transportation = () => {
    return (
        <main className="wellington_transportation">
            <h1><span>wellington</span><span>transportation</span></h1>
            <section className="card_container">
                <article className="card">
                    <div className="image">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191973.4764886705!2d174.5894475301424!3d-41.2525845065755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d38b1fc49e974cb%3A0xa00ef63a213b470!2z5aiB6Z2I6aCT57SQ6KW_6Jit!5e0!3m2!1szh-TW!2shk!4v1756285121210!5m2!1szh-TW!2shk"
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
                            There are no direct flights from Hong Kong International Airport (HKG) to Wellington International Airport (WLG). Common connecting routes involve one stop, typically via Auckland International Airport (AKL) with Air New Zealand or Sydney Airport (SYD) with Qantas. The fastest flight time is approximately 13 hours 15 minutes, while average total duration including layovers is 14-15 hours. Average one-way flight fee is HKD 3,200-4,000 (round-trip HKD 5,600-6,200).
                        </p>
                        <h2> <i class="fa-solid fa-car-side"></i> airport to city center</h2>
                        <p>
                            Public transportation is available via the Airport Express (AX) bus operated by Metlink, running every 10-20 minutes from the airport terminal to Wellington Railway Station or Courtenay Place in the city center (route via State Highway 1 and city streets). The bus takes 20-30 minutes and costs approximately HKD 48 (adult fare). Alternatively, taxis take 10-15 minutes and cost HKD 192-288, depending on traffic and provider.
                        </p>
                        <h2> <i class="fa-solid fa-bus"></i> local transportation</h2>
                        <p>
                            Public transport includes buses (main network), trains (to suburbs like Porirua and Upper Hutt), and the historic cable car (to Kelburn). No trams are available. Fees range from HKD 12-48 per trip (zone-based, with 2.2% increase in 2025; Snapper card offers 30% off-peak discount). Schedules operate from around 5 AM to midnight, with buses every 10-30 minutes during peak hours (7-9 AM, 4-6 PM) and less frequent off-peak.
                        </p>
                        <h2> <i class="fa-solid fa-taxi"></i> taxi</h2>
                        <p>
                            Taxis have a base fare of HKD 19, plus HKD 16 per kilometer, and a waiting fee of HKD 480 per hour. Additional charges may apply for airport pickups or peak times, with total fares varying by distance and traffic.
                        </p>
                        <h2> <i class="fa-solid fa-car"></i> car renting</h2>
                        <p>
                            Car rental services are widely available from companies like Hertz, Budget, and Avis at the airport or city locations. Average daily fees range from HKD 86-720 (economy cars from HKD 86, mid-size from HKD 240-480), excluding insurance and fuel; prices are higher in peak season.
                        </p>
                    </div>
                </article>
            </section>
        </main>
    );
}

export default Wellington_Transportation