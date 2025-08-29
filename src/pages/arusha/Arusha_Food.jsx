import React from 'react'
import arusha_food_01 from "../../img/arusha/arusha_food_01.avif"
import arusha_food_02 from "../../img/arusha/arusha_food_02.avif"
import arusha_food_03 from "../../img/arusha/arusha_food_03.avif"
import arusha_food_04 from "../../img/arusha/arusha_food_04.avif"
import arusha_food_05 from "../../img/arusha/arusha_food_05.avif"
import arusha_food_06 from "../../img/arusha/arusha_food_06.avif"
import arusha_food_07 from "../../img/arusha/arusha_food_07.avif"
import arusha_food_08 from "../../img/arusha/arusha_food_08.avif"
import arusha_food_09 from "../../img/arusha/arusha_food_09.avif"
import arusha_food_10 from "../../img/arusha/arusha_food_10.avif"
import arusha_food_11 from "../../img/arusha/arusha_food_11.avif"
import arusha_food_12 from "../../img/arusha/arusha_food_12.avif"

const Arusha_Food = () => {
    return (
        <main className="arusha_food">
            <h1><span>arusha</span><span>food</span></h1>
            <section className="card_container">
                <article className="card">
                    <div className="image">
                        <img src={ arusha_food_01 } alt="" />
                    </div>
                    <div className="info">
                        <h2>Nyama Choma</h2>
                        <p>Grilled beef or goat, lightly seasoned, served with ugali or chips, a Tanzanian BBQ staple.</p>
                    </div>
                </article>
                <article className="card">
                    <div className="image">
                        <img src={ arusha_food_02 } alt="" />
                    </div>
                    <div className="info">
                        <h2>Ugali</h2>
                        <p>Stiff maize porridge, a national dish, eaten with stews or beans, affordable and filling.</p>
                    </div>
                </article>
                <article className="card">
                    <div className="image">
                        <img src={ arusha_food_03 } alt="" />
                    </div>
                    <div className="info">
                        <h2>Pilau</h2>
                        <p>Spiced rice with beef or vegetables, flavored with cloves and cinnamon, a Swahili favorite.</p>
                    </div>
                </article>
                <article className="card">
                    <div className="image">
                        <img src={ arusha_food_04 } alt="" />
                    </div>
                    <div className="info">
                        <h2>Chipsi Mayai</h2>
                        <p>French fries cooked in an omelet, topped with kachumbari salad, popular street food.</p>
                    </div>
                </article>
                <article className="card">
                    <div className="image">
                        <img src={ arusha_food_05 } alt="" />
                    </div>
                    <div className="info">
                        <h2>Mchicha</h2>
                        <p>Spinach and peanut curry, a vegetarian dish, often served with ugali or rice.</p>
                    </div>
                </article>
                <article className="card">
                    <div className="image">
                        <img src={ arusha_food_06 } alt="" />
                    </div>
                    <div className="info">
                        <h2>Mbege</h2>
                        <p>Fermented banana beer, a tangy Chagga drink, popular in Kilimanjaro region celebrations.</p>
                    </div>
                </article>
                <article className="card">
                    <div className="image">
                        <img src={ arusha_food_07 } alt="" />
                    </div>
                    <div className="info">
                        <h2>Kachumbari</h2>
                        <p>Tangy tomato and onion salad with chili, a refreshing side for nyama choma.</p>
                    </div>
                </article>
                <article className="card">
                    <div className="image">
                        <img src={ arusha_food_08 } alt="" />
                    </div>
                    <div className="info">
                        <h2>Mishkaki</h2>
                        <p>Marinated beef or chicken skewers, grilled over charcoal, a beloved street food snack.</p>
                    </div>
                </article>
                <article className="card">
                    <div className="image">
                        <img src={ arusha_food_09 } alt="" />
                    </div>
                    <div className="info">
                        <h2>Samosas</h2>
                        <p>Deep-fried pastries with spiced beef or vegetable filling, influenced by Indian cuisine.</p>
                    </div>
                </article>
                <article className="card">
                    <div className="image">
                        <img src={ arusha_food_10 } alt="" />
                    </div>
                    <div className="info">
                        <h2>Ndizi Nyama</h2>
                        <p>Plantain and beef stew with coconut milk, a Chagga specialty, rich and savory.</p>
                    </div>
                </article>
                <article className="card">
                    <div className="image">
                        <img src={ arusha_food_11 } alt="" />
                    </div>
                    <div className="info">
                        <h2>Supu ya Ndizi</h2>
                        <p>Creamy plantain soup with spices, a Chagga comfort food, often served with bread or ugali.</p>
                    </div>
                </article>
                <article className="card">
                    <div className="image">
                        <img src={ arusha_food_12 } alt="" />
                    </div>
                    <div className="info">
                        <h2>Chai Masala</h2>
                        <p>Spiced tea with cardamom, cinnamon, and ginger, a warm, aromatic drink popular in Arusha cafes.</p>
                    </div>
                </article>
            </section>
        </main>
    );
}

export default Arusha_Food