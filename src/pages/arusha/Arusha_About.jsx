import React from 'react'
import { arusha_about_01 } from "/img/arusha/arusha_about_01.avif"
import { arusha_about_02 } from "/img/arusha/arusha_about_02.avif"
import { arusha_about_03 } from "/img/arusha/arusha_about_03.avif"

const Arusha_About = () => {
    return (
        <>
            <main className="arusha_about">
                <h1><span>arusha</span><span>about</span></h1>
                <section className="card_container">
                    <article className="video_container">
                        <iframe
                            src="https://www.youtube.com/embed/-e40FKkbRdA?si=-ODcgbqMJkdrjaNL"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer;
                            autoplay;
                            clipboard-write;
                            encrypted-media;
                            gyroscope;
                            picture-in-picture;
                            web-share"
                            referrerpolicy="strict-origin-when-cross-origin"
                            allowfullscreen
                        >
                        </iframe>
                    </article>
                    <article className="card">
                        <div className="image">
                            <img src={ arusha_about_01 } alt="" />
                        </div>
                        <div className="info">
                            <h2>history</h2>
                            <p>Arusha, a bustling city in northern Tanzania, serves as the capital of the Arusha Region and is often called the "Safari Capital" of East Africa due to its proximity to world-renowned national parks like Serengeti, Ngorongoro Crater, and Mount Kilimanjaro. Situated at the base of Mount Meru, it has a population of approximately 600,000 residents in the urban area, blending urban development with rural landscapes. Founded as a colonial outpost, Arusha today is a hub for tourism, international conferences—including hosting the East African Community and the International Criminal Tribunal for Rwanda—and agriculture, particularly coffee and horticulture exports. Its mild climate and strategic location make it a gateway for adventurers exploring Tanzania's natural wonders, with attractions like the Arusha Clock Tower symbolizing its central position between Cairo and Cape Town.</p>
                            <p>The history of Arusha dates back to the early 19th century when Maasai pastoralists settled the area around 1830, drawn by its fertile soil, high ground, and water sources. In the late 1800s, German colonizers arrived, with Captain Johannes establishing a fort at the foot of Mount Meru in the 1890s to facilitate colonization. By 1900, it became a minor German military garrison and trading post for the local Waarusha people. After World War I, British mandate took over in 1916, developing it into an administrative center. Post-independence in 1961, Arusha played a pivotal role in Tanzania's history; the Arusha Declaration of 1967 by President Julius Nyerere outlined socialist policies, and independence documents were signed there. In the 20th century, it grew rapidly due to tourism and international significance, hosting key events like the 1994 Rwanda tribunal. Today, Arusha honors its colonial and indigenous past through museums and cultural sites, evolving into a modern city while preserving its Maasai heritage.</p>
                        </div>
                    </article>
                    <article className="card">
                        <div className="image">
                            <img src={ arusha_about_02 } alt="" />
                        </div>
                        <div className="info">
                            <h2>culture</h2>
                            <p>Arusha's culture is a vibrant mosaic reflecting Tanzania's diversity, with over 120 ethnic groups contributing to its traditions, arts, and daily life. As a multicultural hub, it blends indigenous Maasai customs with influences from Arab, Indian, and European communities, creating an eclectic mix of urban and rural elements. The Maasai, known for their warrior traditions, colorful attire (shuka cloths and beaded jewelry), and nomadic pastoralism, are prominent; visitors often experience their jumping dances (adumu) and communal rituals honoring nature and livestock. Local markets buzz with Swahili influences, where bargaining for spices, textiles, and handicrafts is a social art.</p>
                            <p>Central to Arusha's cultural scene is the Cultural Heritage Centre, often dubbed "Africa's Guggenheim," showcasing art from 120 tribes and over 1,500 artists, including traditional sculptures, paintings, and gemstones like Tanzanite. Festivals highlight this richness: the annual Karibu Travel Market celebrates tourism with music and dance, while Maasai ceremonies mark rites of passage. Cuisine features staples like ugali (maize porridge), nyama choma (grilled meat), and fresh produce from nearby farms, often shared in communal meals emphasizing hospitality. Art and crafts thrive, with wood carvings, beadwork, and batik fabrics reflecting storytelling and spiritual beliefs. The city's chequered past—colonial history mixed with African roots—is evident in its architecture and museums, fostering a sense of resilience and pride. Volunteer opportunities and homestays allow immersion in local life, from hiking with guides to learning Swahili phrases. Overall, Arusha's culture pulsates with African energy, inviting visitors to engage with its traditions while supporting sustainable community initiatives.</p>
                        </div>
                    </article>
                    <article className="card">
                        <div className="image">
                            <img src={ arusha_about_03 } alt="" />
                        </div>
                        <div className="info">
                            <h2>geography</h2>
                            <p>Arusha is located on the continent of Africa, specifically in northern Tanzania, East Africa, at coordinates approximately 3.37°S latitude and 36.68°E longitude. Nestled at the foot of Mount Meru (an active stratovolcano rising to 4,566 meters), the city sits at an elevation of about 1,400 meters (4,600 feet) in the eastern branch of the Great Rift Valley. Its geography features fertile volcanic soils supporting agriculture, rolling savannas, and proximity to iconic landmarks like Mount Kilimanjaro (60 km east) and the Serengeti plains. The landscape includes Arusha National Park to the north, with diverse ecosystems from montane forests to alkaline lakes like Momella, hosting wildlife such as giraffes and flamingos. Rivers like the Themi flow through the city, contributing to its lush greenery despite semi-arid surroundings. This highland setting creates a temperate climate, cooler than coastal areas, with risks of altitude-related issues for visitors.</p>
                            <p>Arusha's climate is equatorial highland, with two rainy seasons: short rains (November-December) and long rains (March-May), and dry periods in between. Temperatures average 15-25°C (59-77°F) year-round, with cooler nights. The best time to visit is during the dry season from June to October, when wildlife viewing in nearby parks is optimal, roads are accessible, and weather is sunny and mild—ideal for safaris, hiking Mount Meru, or climbing Kilimanjaro. This peak period coincides with the Great Migration, but expect crowds and higher prices. Shoulder seasons like January-February offer hot, dry weather for birdwatching and fewer tourists. Avoid the wet seasons for travel, as heavy rains can cause flooding and muddy trails, though they bring lush scenery and lower costs. Arusha's geography enhances its appeal as a year-round destination, but dry months suit most activities.</p>
                        </div>
                    </article>
                </section>
            </main>
        </>
    );
}

export default Arusha_About