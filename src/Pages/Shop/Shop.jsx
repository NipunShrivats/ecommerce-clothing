import React, { useEffect, useState } from 'react'
import { Sugar } from 'react-preloaders';
import "./Shop.css";
import Hero from "../../Components/Hero/Hero";
import Popular from '../../Components/Popular/Popular';
import Offers from '../../Components/Offers/Offers';
import NewCollection from '../../Components/NewCollection/NewCollection';
import NewsLetter from '../../Components/NewsLetter/NewsLetter';

export default function Shop() {

    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000);
    }, [])
    return (
        <>
            {
                loading ?
                    <div className='loader-cover'>
                        <Sugar />
                    </div>
                    :
                    <>
                        <div>
                            <Hero />
                            <Popular />
                            <Offers />
                            <NewCollection />
                            <NewsLetter />
                        </div>
                    </>
            }
        </>
    )
}
