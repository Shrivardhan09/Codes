import axios from "axios";
import { useEffect, useState } from "react";
import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';




const AddToCart = () => {
    const [data, setData] = useState([]);
    const [cart, setCart] = useState({})


    useEffect(() => {
        axios
            .get("https://fakestoreapi.com/products")
            .then((res) => setData(res.data))
            .catch((err) => console.log(err));
    }, []);

    if (!data) {
        return <h1>Loading</h1>;
    }

    const onClick = (id) => {
        setCart((prevData) => [{ ...prevData, [id]: true }])
        console.log(id)
    }

    return (
        <>
            <div>
                <h1>Total Items: {Object.keys(cart).length}</h1>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap' }}>
                {data && data.map((items) => {
                    const { id, title, price, category, image } = items
                    return < Card variant="outlined" sx={{ width: 320 }} key={id}>
                        <div>
                            <Typography level="h2" fontSize="md" sx={{ mb: 0.5 }}>
                                {title}
                            </Typography>
                            <Typography level="body2">{category}</Typography>
                            <IconButton
                                aria-label="bookmark Bahamas Islands"
                                variant="plain"
                                color="neutral"
                                size="sm"
                                sx={{ position: 'absolute', top: '0.5rem', right: '0.5rem' }}
                            >
                            </IconButton>
                        </div>
                        <AspectRatio minHeight="120px" maxHeight="200px" objectFit="contain" sx={{ backGround: 'white' }}>
                            <img
                                src={image}
                                srcSet={image}
                                loading="lazy"
                                alt=""

                            />
                        </AspectRatio>
                        <CardContent orientation="horizontal">
                            <div>
                                <Typography level="body3">Total price:</Typography>
                                <Typography fontSize="lg" fontWeight="lg">
                                    ${price}
                                </Typography>
                            </div>
                            <Button
                                variant="solid"
                                size="sm"
                                color="primary"
                                aria-label="Explore Bahamas Islands"
                                sx={{ ml: 'auto', fontWeight: 600 }}
                                onClick={() => onClick(items)}
                            >
                                {cart[id] ? 'Added To Cart' : 'Add To Cart'}
                            </Button>
                        </CardContent>
                    </Card >
                })}
            </div >

        </>
    );
};

export default AddToCart;
