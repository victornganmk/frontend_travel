import React from 'react'
import { wellington_food_01 } from "/img/wellington/wellington_food_01.avif"
import { wellington_food_02 } from "/img/wellington/wellington_food_02.avif"
import { wellington_food_03 } from "/img/wellington/wellington_food_03.avif"
import { wellington_food_04 } from "/img/wellington/wellington_food_04.avif"
import { wellington_food_05 } from "/img/wellington/wellington_food_05.avif"
import { wellington_food_06 } from "/img/wellington/wellington_food_06.avif"
import { wellington_food_07 } from "/img/wellington/wellington_food_07.avif"
import { wellington_food_08 } from "/img/wellington/wellington_food_08.avif"
import { wellington_food_09 } from "/img/wellington/wellington_food_09.avif"
import { wellington_food_10 } from "/img/wellington/wellington_food_10.avif"
import { wellington_food_11 } from "/img/wellington/wellington_food_11.avif"
import { wellington_food_12 } from "/img/wellington/wellington_food_12.avif"


const Wellington_Food = () => {
    return (
        <main className="wellington_food">
            <h1><span>wellington</span><span>food</span></h1>
            <section className="card_container">
                <article className="card">
                    <div className="image">
                        <img src={ wellington_food_01 } alt="" />
                    </div>
                    <div className="info">
                        <h2>Flat White</h2>
                        <p>A creamy espresso-based coffee with steamed milk and microfoam, a Kiwi classic perfected in Wellington’s cafes.</p>
                    </div>
                </article>
                <article className="card">
                    <div className="image">
                        <img src={ wellington_food_02 } alt="" />
                    </div>
                    <div className="info">
                        <h2>Pavlova</h2>
                        <p>A meringue dessert with a crisp shell, soft center, topped with whipped cream and fresh fruit.</p>
                    </div>
                </article>
                <article className="card">
                    <div className="image">
                        <img src={ wellington_food_03 } alt="" />
                    </div>
                    <div className="info">
                        <h2>Lamb Rump</h2>
                        <p>Tender, locally-sourced lamb, often roasted with rosemary, served with seasonal vegetables at fine-dining spots like Logan Brown.</p>
                    </div>
                </article>
                <article className="card">
                    <div className="image">
                        <img src={ wellington_food_04 } alt="" />
                    </div>
                    <div className="info">
                        <h2>Seafood Platter</h2>
                        <p>Fresh local seafood like green-lipped mussels, prawns, and oysters, served at restaurants like Ortega Fish Shack.</p>
                    </div>
                </article>
                <article className="card">
                    <div className="image">
                        <img src={ wellington_food_05 } alt="" />
                    </div>
                    <div className="info">
                        <h2>WCF Calzone</h2>
                        <p>Folded pizza filled with Nutella custard and Wellington Chocolate Factory chocolate, a sweet treat at Scopa Pizzeria.</p>
                    </div>
                </article>
                <article className="card">
                    <div className="image">
                        <img src={ wellington_food_06 } alt="" />
                    </div>
                    <div className="info">
                        <h2>Cheese Scones</h2>
                        <p>Fluffy, savory scones packed with sharp cheddar, a breakfast staple at cafes like Pravda.</p>
                    </div>
                </article>
                <article className="card">
                    <div className="image">
                        <img src={ wellington_food_07 } alt="" />
                    </div>
                    <div className="info">
                        <h2>Mee Goreng</h2>
                        <p>Spicy stir-fried noodles with prawns and lap cheong, a Malaysian favorite at Little Penang.</p>
                    </div>
                </article>
                <article className="card">
                    <div className="image">
                        <img src={ wellington_food_08 } alt="" />
                    </div>
                    <div className="info">
                        <h2>Sourdough Crumpets</h2>
                        <p>Sourdough crumpets topped with berry compote, whipped cream, and local honey, served at Squirrel.</p>
                    </div>
                </article>
                <article className="card">
                    <div className="image">
                        <img src={ wellington_food_09 } alt="" />
                    </div>
                    <div className="info">
                        <h2>Craft Beer</h2>
                        <p>Locally brewed Garage Project lager or IPA, pairing perfectly with Wellington’s vibrant dining scene.</p>
                    </div>
                </article>
                <article className="card">
                    <div className="image">
                        <img src={ wellington_food_10 } alt="" />
                    </div>
                    <div className="info">
                        <h2>Smoked Fish Croquettes</h2>
                        <p>Crispy croquettes with locally-sourced smoked fish, a flavorful starter at restaurants like Noble Rot.</p>
                    </div>
                </article>
                <article className="card">
                    <div className="image">
                        <img src={ wellington_food_11 } alt="" />
                    </div>
                    <div className="info">
                        <h2>Hāngi-inspired Dishes</h2>
                        <p>Modern takes on Māori hāngi, with slow-cooked pork and root vegetables, served at venues like Hiakai.</p>
                    </div>
                </article>
                <article className="card">
                    <div className="image">
                        <img src={ wellington_food_12 } alt="" />
                    </div>
                    <div className="info">
                        <h2>Rewena Bread</h2>
                        <p>Māori sourdough bread made with fermented potato starter, often paired with local butter at cafes.</p>
                    </div>
                </article>
            </section>
        </main>
    );
}

export default Wellington_Food