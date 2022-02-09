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
        <Link id='back-to-shopping' to="/">Back To Shopping</Link>
        </header>
        <divh1>{item.name}</divh1>
        <main className='details-container'>
        <img src={item.img} alt="" />
        </main>
        </>
    )
}

export default ItemDetailPage;