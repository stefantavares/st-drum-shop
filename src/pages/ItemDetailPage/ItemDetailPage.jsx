import './ItemDetailPage.css';
import * as itemsAPI from '../../utilities/items-api';
import { useState, useEffect, useRef } from 'react';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';


function ItemDetailPage({ menuItems }) {
    const [item, setItem] = useState({});
    let { itemName } = useParams();
    const isMounted = useRef(true);

    async function getItem() {
        const itemOne = await itemsAPI.getById(itemName)
        console.log(itemOne);
        setItem(itemOne);
    }

    useEffect(function() {
        if(isMounted.current) {
            getItem();
        }
        return () => {
            isMounted.current = false
        }
    })

    return (
        <>
        <header>
        <Link className='grow' id='back-to-shopping' to="/"><i className="fa-regular fa-angle-left"></i> Back To Shopping</Link>
        </header>
        <main className='page-container'>
        <div className='details-container'>
        <h3 className='price-container'><span className='price'>${item.price}</span></h3>
        {/* <div className="buy">
        <span>${item.price.toFixed(2)}</span>
        <button className="btn-sm grow" id="buy-button" >
        <i className="far fa-cart-plus"></i>
        <span id="add-to-cart">ADD TO CART</span>
        </button>
        </div> */}
        <img className='item-details-img grow' src={item.img} alt="" />
        <h4 id='item-name'>{item.name}</h4>
        <div className='item-details-container'>
        <div className='item-property'><span className='bold'>Size(s):</span></div>
        <div><span className='smaller'>{item.size}</span></div>
        <div className='item-property'><span className='bold'>Description:</span></div>
        <div className='description'><span className='smaller'>{item.description}</span></div>
        </div>
        </div>
        </main>
        </>
    )
}

export default ItemDetailPage;