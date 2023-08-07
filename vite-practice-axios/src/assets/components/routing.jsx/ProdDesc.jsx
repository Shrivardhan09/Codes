import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ProdDesc = () => {
    const [prodDesc, setProdDesc] = useState({});
    const { productId } = useParams();

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${productId}`)
            .then(res => {
                setProdDesc(res.data);
            })
            .catch(error => {
                console.error(error);
                setProdDesc(null);
            });
    }, [productId]);

    console.log(prodDesc);

    if (!prodDesc) {
        return <p>Please wait, we are loading details</p>;
    }

    return (
        <div>
            <Link to={"/"}>Go Back</Link>

            <ul style={{ border: "1px solid black", listStyle: "none" }}>
                <li>{prodDesc.title}</li>
                <li>{prodDesc.description}</li>
                <li>{prodDesc.price}</li>
                <img src={prodDesc.images} alt={prodDesc.title} width={300} />
            </ul>
        </div>
    );
}

export default ProdDesc;
