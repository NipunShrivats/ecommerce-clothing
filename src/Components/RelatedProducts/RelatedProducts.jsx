import Rect from 'react'
import "./RelatedProducts.css";
import Item from "../../Components/Item/Item";
import data_products from "../../assets/Frontend_Assets/data"

export default function RelatedProducts() {
    return (
        <>
            <div className='relatedProducts container'>
                <div className='title-box'>
                    <h1>Relared Products</h1>
                    <div className='title-line'></div>
                </div>
                <div className='relatedProducts-item'>
                    {data_products.map((item, i) => {
                        return <Item
                            key={i}
                            id={item.id}
                            name={item.name}
                            image={item.image}
                            new_price={item.new_price}
                            old_price={item.old_price} />
                    })}
                </div>
            </div>
        </>
    )
}
