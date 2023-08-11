import axios from "axios"
import { useEffect, useState } from "react"
import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Chip from '@mui/joy/Chip';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const JsonList = () => {
    const [jsonList, setJsonList] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        onLoadProducts()
    }, [])

    const onLoadProducts = async () => {
        const result = await axios.get("https://fakestoreapi.com/products")
        if (result.data) {
            setJsonList(result.data)
        }
    }

    const onRemoveItem = async (productId) => {
        const result = await axios.delete(`https://fakestoreapi.com/cart/${productId}`)
        if (!result.data) {
            toast("No product removed from the cart")
            // return;
        } else {
            toast.success("Product removed from the cart!", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
        setCart((prevData) => {
            return {
                ...prevData,
                [productId]: !prevData[productId],
            }
        })
    }

    const onAddToCart = async (productId) => {
        const payload = { productId };
        const result = await axios.post("https://fakestoreapi.com/cart", payload);
        if (!result.data) {
            // Show Error message
            toast("No product added to the cart");
            // return;
        }
        toast.success("Product Added to Cart!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
        setCart((prevData) => {
            return {
                ...prevData,
                [productId]: !prevData[productId],
            }
        })

    }
    return (
        <>
            <Link to={"/cart"}>
                <Button>Show Cart</Button>
            </Link>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: 15 }}>
                {jsonList.map((prod) => {
                    const { id, title, category, price, image } = prod
                    return <Card sx={{ width: 320, maxWidth: '100%', boxShadow: 'lg' }} key={id}>
                        <CardOverflow>
                            <AspectRatio sx={{ minWidth: 200 }} objectFit="contain">
                                <img
                                    src={image}
                                    srcSet={image}
                                    loading="lazy"
                                    alt=""
                                />
                            </AspectRatio>
                        </CardOverflow>
                        <CardContent>
                            <Typography level="body3">{title}</Typography>
                            <Link
                                href="#product-card"
                                fontWeight="xl"
                                color="neutral"
                                textColor="text.primary"
                                overlay
                                endDecorator=''
                            >
                                {category}
                            </Link>
                            <Typography
                                fontSize="xl"
                                fontWeight="xl"
                                sx={{ mt: 1 }}
                                endDecorator={
                                    <Chip component="span" size="sm" variant="soft" color="success">
                                        ₹{price}
                                    </Chip>
                                }
                            >
                                Price:
                            </Typography>
                        </CardContent>
                        <CardOverflow>
                            {cart[prod.id] ?
                                <Button variant="solid" color="danger" size="lg" onClick={() => onRemoveItem(prod.id)}> Remove Item </Button> :
                                <Button variant="solid" color="danger" size="lg" onClick={() => onAddToCart(prod.id)}>Add to cart</Button>
                            }
                        </CardOverflow>
                    </Card>
                })}
            </div>
        </>
    )
}

export default JsonList
