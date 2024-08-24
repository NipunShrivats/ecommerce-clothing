import React from 'react';
import "./Shop.css";
import Hero from "../../Components/Hero/Hero";
import Popular from '../../Components/Popular/Popular';
import Offers from '../../Components/Offers/Offers';
import NewCollection from '../../Components/NewCollection/NewCollection';

export default function Shop() {
    return (
        <>
            <div>
                <Hero />
                <Popular />
                <Offers />
                <NewCollection />
            </div>
        </>
    )
}
