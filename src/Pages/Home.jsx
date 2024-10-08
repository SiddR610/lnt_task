import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero/Hero";
import Clients from "../Components/Clients/Clients";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <div className="w-[80%] mx-auto ">
                <Clients />
            </div>

            <Footer />
        </div>
    );
};

export default Home;
