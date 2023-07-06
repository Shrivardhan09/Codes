import { useState, useEffect } from "react";
import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import { Link } from "react-router-dom";
import axios from "axios";

const CartList = () => {
    const [list, setList] = useState([]);

    useEffect(() => {
        // onLoadProducts();
    }, []);

    const onLoadProducts = async () => {
        const result = await axios.get("http://localhost:3000/cart");
        if (result.data) {
            // setList(result.data);
            console.log(result.data)
        }
    };

    return (
        <div>
            <Link to={"/"}>
                <Button>Home Page</Button>
            </Link>
            <h1>Cart Items</h1>
            {list.map((cartItems) => {
                const { id, title, price, image, category } = cartItems;
                return (
                    <Card variant="outlined" sx={{ width: 320 }} key={id}>
                        <div>
                            <Typography level="h2" fontSize="md" sx={{ mb: 0.5 }}>
                                {title}
                            </Typography>
                            <Typography level="body2">{category}</Typography>
                        </div>
                        <AspectRatio minHeight="120px" maxHeight="200px">
                            <img src={image} srcSet={image} loading="lazy" alt="" />
                        </AspectRatio>
                        <CardContent orientation="horizontal">
                            <div>
                                <Typography level="body3">Total price:</Typography>
                                <Typography fontSize="lg" fontWeight="lg">
                                    ₹{price}
                                </Typography>
                            </div>
                            <Button
                                variant="solid"
                                size="sm"
                                color="primary"
                                aria-label="Explore Bahamas Islands"
                                sx={{ ml: 'auto', fontWeight: 600 }}

                            >
                                Remove Item
                            </Button>
                        </CardContent>
                    </Card>
                );
            })}
        </div>
    );
};

export default CartList;
