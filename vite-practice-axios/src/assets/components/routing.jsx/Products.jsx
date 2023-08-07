import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

const Products = () => {
    const [list, setList] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();

    const [input, setInput] = useState([
        {
            label: "laptops",
            ischecked: false,
            value: "laptops",
            products: []
        },

    ]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        productList();
    }, []);

    const productList = () => {
        axios.get("https://dummyjson.com/products")
            .then(res => {
                setList(res.data.products);
                setFilteredProducts(res.data.products);
            })
            .catch(error => console.error(error));
    }

    const handleInputChange = (e) => {
        const { name, checked, value } = e.target;
        setInput(prevInput => prevInput.map(jsonData => ({
            ...jsonData,
            ischecked: jsonData.label === name ? checked : jsonData.ischecked
        })));
        searchParams.set(name, value)
        setSearchParams(searchParams)
    }

    useEffect(() => {
        const filteredProducts = list.filter(item => {
            return (
                searchParams.set(item.category, item.title),
                input.some(category => category.ischecked && category.value === item.category)
            )
        }
        );
        setSearchParams(searchParams)
        setFilteredProducts(filteredProducts);
    }, [list, input]);

    return (
        <>
            <Link to={"/search"} > Search Products</Link>

            {input.map((items) => {
                return (
                    <div key={items.label}>
                        <input
                            type="checkbox"
                            name={items.label}
                            value={items.value}
                            checked={items.ischecked}
                            onChange={handleInputChange}
                        />
                        <label htmlFor={items.label}>{items.label}</label>
                    </div>
                )
            })}

            {
                filteredProducts.length > 0 ? (
                    filteredProducts.map(item => (
                        <Link key={item.id} to={`/prod-desc/${item.id}`}>
                            <ul style={{ border: "1px solid black", listStyle: "none" }}>
                                <li>{item.title}</li>
                                <li>{item.description}</li>
                                <li>{item.category}</li>
                                <li>{item.price}</li>
                            </ul>
                        </Link>
                    ))
                ) : (
                    list.map((items) => (
                        <Link key={items.id} to={`/prod-desc/${items.id}`}>
                            <ul style={{ border: "1px solid black", listStyle: "none" }}>
                                <li>{items.title}</li>
                                <li>{items.description}</li>
                                <li>{items.category}</li>
                                <li>{items.price}</li>
                            </ul>
                        </Link>
                    ))
                )
            }
        </>
    );
}

export default Products;
