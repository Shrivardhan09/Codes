import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { storeCart, storeProducts } from "./Slice";
import { Link } from "react-router-dom";

const Products = () => {
    const storeProductsAPI = useSelector((state) => state.SliceCart.products);
    const mark = useSelector((state) => state.SliceCart.MarkAdded);
    console.log({ storeProductsAPI });
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then((res) => {
                dispatch(storeProducts(res.data));
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
            });
    }, []);

    return (
        <div style={{
            backgroundImage: "linear-gradient(45deg, #ffcccc, #ffe0b2, #fff7b2, #e0ffb2, #b2ffe0, #b2f7ff, #d9b2ff)"
        }}
        >
            <h1>Product List</h1>
            <Link to='/cart'>
                <button
                    style={{ color: 'black', backgroundColor: 'firebrick', outline: 'none', padding: 10, border: 'none' }}
                >Go To Cart</button>
            </Link>
            <hr />
            <div
                style={{
                    display: "flex",
                    gap: 4,
                    flexWrap: 'wrap',
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "8px",
                }}>
                {storeProductsAPI.map((data) => {
                    const { id, title, price } = data;
                    return (
                        <div className="card"
                            key={id}
                            style={{
                                width: 400,
                                height: 200,
                                border: "1px solid black",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                padding: "8px",
                            }} >
                            <div >
                                <h3>{title}</h3>
                                <p>🤑{price}</p>
                            </div>
                            <div>
                                {id in mark ?
                                    (<button style={{ color: 'aquamarine', backgroundColor: 'black', outline: 'none', padding: 10, border: 'none' }}>
                                        Added to cart
                                    </button>) : (
                                        <button
                                            onClick={() => dispatch(storeCart(data))}
                                            style={{ color: 'pink', backgroundColor: 'black', outline: 'none', padding: 10, border: 'none' }}>
                                            Add to cart
                                        </button>)
                                }
                            </div>
                        </div>
                    );
                })}
            </div>
        </div >
    );
}

export default Products;
