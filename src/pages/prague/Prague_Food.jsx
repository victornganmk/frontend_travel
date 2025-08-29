import React from 'react'
import { prague_food_01 } from "/img/prague/prague_food_01.avif"
import { prague_food_02 } from "/img/prague/prague_food_02.avif"
import { prague_food_03 } from "/img/prague/prague_food_03.avif"
import { prague_food_04 } from "/img/prague/prague_food_04.avif"
import { prague_food_05 } from "/img/prague/prague_food_05.avif"
import { prague_food_06 } from "/img/prague/prague_food_06.avif"
import { prague_food_07 } from "/img/prague/prague_food_07.avif"
import { prague_food_08 } from "/img/prague/prague_food_08.avif"
import { prague_food_09 } from "/img/prague/prague_food_09.avif"
import { prague_food_10 } from "/img/prague/prague_food_10.avif"
import { prague_food_11 } from "/img/prague/prague_food_11.avif"
import { prague_food_12 } from "/img/prague/prague_food_12.avif"


const Prague_Food = () => {
    return (
        <main className="prague_food">
            <h1><span>prague</span><span>food</span></h1>
            <section className="card_container">
                <article className="card">
                    <div className="image">
                        <img src={ prague_food_01 } alt="" />
                    </div>
                    <div className="info">
                        <h2>Svíčková na smetaně</h2>
                        <p>Tender beef sirloin in creamy vegetable sauce, served with bread dumplings, whipped cream, and cranberries.</p>
                    </div>
                </article>
                <article className="card">
                    <div className="image">
                        <img src={ prague_food_02 } alt="" />
                    </div>
                    <div className="info">
                        <h2>Vepřo knedlo zelo</h2>
                        <p>Roast pork with bread dumplings and sauerkraut, a hearty Czech classic paired with beer.</p>
                    </div>
                </article>
                <article className="card">
                    <div className="image">
                        <img src={ prague_food_03 } alt="" />
                    </div>
                    <div className="info">
                        <h2>Goulash</h2>
                        <p>Thick beef stew with onions and paprika, served with bread dumplings, milder than Hungarian versions.</p>
                    </div>
                </article>
                <article className="card">
                    <div className="image">
                        <img src={ prague_food_04 } alt="" />
                    </div>
                    <div className="info">
                        <h2>Pork Knuckle (Koleno)</h2>
                        <p>Slow-roasted pork knee, marinated in dark beer, served with mustard, horseradish, and pickles.</p>
                    </div>
                </article>
                <article className="card">
                    <div className="image">
                        <img src={ prague_food_05 } alt="" />
                    </div>
                    <div className="info">
                        <h2>Kulajda</h2>
                        <p>Creamy South Bohemian soup with mushrooms, potatoes, sour cream, dill, and poached egg.</p>
                    </div>
                </article>
                <article className="card">
                    <div className="image">
                        <img src={ prague_food_06 } alt="" />
                    </div>
                    <div className="info">
                        <h2>Chlebíčky</h2>
                        <p>Open-faced sandwiches with ham, egg, potato salad, or cheese, perfect for snacks or parties.</p>
                    </div>
                </article>
                <article className="card">
                    <div className="image">
                        <img src={ prague_food_07 } alt="" />
                    </div>
                    <div className="info">
                        <h2>Smažený sýr</h2>
                        <p>Breaded, fried Edam or Gouda cheese, served with tartar sauce and potato salad.</p>
                    </div>
                </article>
                <article className="card">
                    <div className="image">
                        <img src={ prague_food_08 } alt="" />
                    </div>
                    <div className="info">
                        <h2>Bramboráky</h2>
                        <p>Crispy potato pancakes with marjoram, served with garlic sauce or yogurt, popular street food.</p>
                    </div>
                </article>
                <article className="card">
                    <div className="image">
                        <img src={ prague_food_09 } alt="" />
                    </div>
                    <div className="info">
                        <h2>Pilsner Urquell</h2>
                        <p>World-famous Czech pale lager, crisp and refreshing, a staple in Prague’s pubs.</p>
                    </div>
                </article>
                <article className="card">
                    <div className="image">
                        <img src={ prague_food_10 } alt="" />
                    </div>
                    <div className="info">
                        <h2>Moravian Wine</h2>
                        <p>Locally produced white or red wines, like Müller-Thurgau, from Moravia’s lush vineyards.</p>
                    </div>
                </article>
                <article className="card">
                    <div className="image">
                        <img src={ prague_food_11 } alt="" />
                    </div>
                    <div className="info">
                        <h2>Becherovka</h2>
                        <p>Herbal liqueur with anise and cinnamon, served chilled as a digestif or shot.</p>
                    </div>
                </article>
                <article className="card">
                    <div className="image">
                        <img src={ prague_food_12 } alt="" />
                    </div>
                    <div className="info">
                        <h2>Kofola</h2>
                        <p>Czech cola alternative, less sweet, with herbal notes, a refreshing non-alcoholic drink.</p>
                    </div>
                </article>
            </section>
        </main>
    );
}

export default Prague_Food