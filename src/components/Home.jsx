import React from "react";
import Navbar from "./Navbar";
import Stats from "./Stats";
import Service from "./Service";
import Product from "./Product";
import Staff from "./Staff";
import Video from "./Video";
import Contact from "./Contact";
import News from "./News";
import Inventory from "./Inventory";

const Home = () => {

    return (
        <main>
            <Navbar />
            <Stats />
            <Service />
            <Product />
            <Staff />
            <Video />
            <Contact />
            <News />
            <Inventory />
        </main>
    )
}

export default Home;