import React from 'react'
import "./NewCollection.css"

import new_collection from "../../assets/Frontend_Assets/new_collections"
import Item from "../../Components/Item/Item"


export default function NewCollection() {
    return (
        <>
            <div className='newCol container'>
                <div className='newCol-title'>
                    <h1 className='newCol-heading'>popular in women</h1>
                    <div className='title-line'></div>
                </div>
                <div className='newCol-item'>
                    {
                        new_collection.map((item, i) => {
                            return <Item
                                key={i}
                                id={item.id}
                                name={item.name}
                                image={item.image}
                                new_price={item.new_price}
                                old_price={item.old_price} />
                        })
                    }
                </div>
            </div>
        </>
    )
}
