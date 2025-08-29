import React from 'react'
import { prague_about_01 } from "/img/prague/prague_about_01.avif"
import { prague_about_02 } from "/img/prague/prague_about_02.avif"
import { prague_about_03 } from "/img/prague/prague_about_03.avif"

const Prague_About = () => {
    return (
        <>
            <main className="prague_about">
                <h1><span>prague</span><span>about</span></h1>
                <section className="card_container">
                    <article className="video_container">
                        <iframe
                            src="https://www.youtube.com/embed/idg6vW3vXtE?si=xkRYR_L7RNFtX-ss"
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
                            <img src={ prague_about_01 } alt="" />
                        </div>
                        <div className="info">
                            <h2>history</h2>
                            <p>Prague, the capital and largest city of the Czech Republic, is situated in the heart of Bohemia on the banks of the Vltava River in Central Europe. With a population of approximately 1.3 million in the city and over 2.7 million in the metropolitan area, it is a vibrant metropolis renowned for its stunning architecture, fairy-tale skyline, and UNESCO-listed historic center. Often called the "City of a Hundred Spires," Prague blends medieval charm with modern life, serving as the political, cultural, and economic hub of the nation. Its strategic location has made it a crossroads of European history, attracting visitors with landmarks like Prague Castle, Charles Bridge, and the Old Town Square.</p>
                            <p>The history of Prague dates back to prehistoric times, with the first significant settlement in the 9th century at Vyšehrad fortress, established by the Přemyslid dynasty. By the 10th century, Prague Castle was founded, becoming a symbol of Czech power. The medieval period flourished under Charles IV in the 14th century, who made it the capital of the Holy Roman Empire, constructing iconic sites like the Charles University and St. Vitus Cathedral. The Renaissance brought cultural advancements, while the Jewish quarter developed as a center of learning. The 17th century saw the Thirty Years' War ignite with the Defenestration of Prague. In the 18th and 19th centuries, under Habsburg rule, the city industrialized and experienced a national revival. The 20th century was tumultuous: independence in 1918 as part of Czechoslovakia, Nazi occupation during WWII, communist rule from 1948, the Prague Spring of 1968, and the Velvet Revolution in 1989 leading to democracy. Today, Prague stands as a resilient testament to its layered past, evolving from a Bohemian stronghold to a modern European gem.</p>
                        </div>
                    </article>
                    <article className="card">
                        <div className="image">
                            <img src={ prague_about_02 } alt="" />
                        </div>
                        <div className="info">
                            <h2>culture</h2>
                            <p>Prague's culture is a rich mosaic shaped by its Central European location, Slavic roots, and historical influences from Germanic, Jewish, and neighboring traditions, fostering a bohemian spirit that celebrates arts, literature, and intellectual freedom. As a multiethnic city for centuries, with significant Czech, German, and Jewish populations, it embodies a blend of straightforward communication, honesty, and a love for cottage retreats and weekend escapes. The city's architectural heritage spans Romanesque, Gothic, Renaissance, and Baroque styles, evident in its preserved historic core.</p>
                            <p>At its heart, Prague is a cultural capital teeming with theaters, music clubs, galleries, and festivals that highlight its vibrant scene. Traditional Czech activities include classical music performances at venues like the National Theatre, folk dances, and puppetry, a UNESCO-recognized art form. Literature thrives here, with icons like Franz Kafka and Václav Havel influencing global thought; the city's cafes and bookstores echo its bohemian legacy. Culinary culture features hearty dishes like goulash, dumplings, and world-famous beers from local breweries, often enjoyed in beer gardens. Annual events such as the Prague Spring International Music Festival and Christmas markets showcase seasonal traditions, while modern art installations and street performances add contemporary flair. The Jewish heritage is preserved in the Josefov quarter, with synagogues and the Old Jewish Cemetery reflecting centuries of cultural contributions. Overall, Prague's culture is dynamic and inclusive, balancing historical depth with innovative expressions in film, design, and visual arts, making it a haven for creative souls.</p>
                        </div>
                    </article>
                    <article className="card">
                        <div className="image">
                            <img src={ prague_about_03 } alt="" />
                        </div>
                        <div className="info">
                            <h2>geography</h2>
                            <p>Prague is located in Europe, specifically Central Europe, as the capital of the Czech Republic. It sits in the Bohemia region on the Vltava River, which winds through the city, creating a picturesque landscape of hills, valleys, and bridges. The geography features a continental climate with distinct seasons, influenced by its landlocked position and elevation of about 200-400 meters above sea level. The historic center is compact, spanning roughly 8.66 square kilometers as a UNESCO site, surrounded by rolling terrain that includes parks like Petřín Hill and the Prague Plateau. This setting contributes to occasional fog and variable weather, but also offers scenic views and outdoor spaces.</p>
                            <p>Prague experiences hot summers, cold winters, and mild transitions in spring and autumn. Summers (June-August) average 20-25°C with long days, ideal for sightseeing but crowded and prone to rain. Winters (December-February) drop to 0-5°C, often snowy, perfect for Christmas markets but chilly for outdoor activities. The best times to visit are spring (March-May) and autumn (September-November), when temperatures range from 10-20°C, crowds are moderate, and weather is pleasant with blooming flowers or colorful foliage. These shoulder seasons offer festivals, lower prices, and comfortable conditions for exploring castles and riversides. Year-round, the city's geography enhances its appeal, but avoid peak summer heat or winter extremes unless seeking specific events.</p>
                        </div>
                    </article>
                </section>
            </main>
        </>
    );
}

export default Prague_About