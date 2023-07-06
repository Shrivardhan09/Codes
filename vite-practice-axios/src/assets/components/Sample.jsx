import axios from "axios";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import styled from 'styled-components'
import { Link } from "react-router-dom";


const Axiosjson = () => {
    const [jsonList, setJsonList] = useState([]);

    useEffect(() => {
        axios
            .get("https://fakestoreapi.com/products")
            .then((response) => setJsonList(response.data))
            .catch((error) => console.log(error));
    }, []);

    // useEffect(() => {
    //     const getData = async () => {
    //         const res = await axios('https://fakestoreapi.com/products')
    //         setJsonList(res.data)
    //     }
    //     getData()
    // }, [])

    const Pdiv = styled.div`
    display: flex ;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: grey; 
    gap:12px;
    `

    return (
        <Pdiv>
            {jsonList.map((data) => {
                const { id, title, price, description, category, image } = data;
                return (
                    <Pdiv key={id}>
                        <Link to={`/details/${id}`}>
                            <div className="card mb-3" style={{ maxWidth: "540px" }}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img
                                            src={image}
                                            className="img-fluid rounded-start"
                                            alt="..."
                                        />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">{title}</h5>
                                            <p className="card-text">{description}</p>
                                            <p className="card-text">{price}</p>
                                            <p className="card-text">
                                                <small className="text-muted">{category}</small>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </Pdiv>
                );
            })}
        </Pdiv>
    );
};

export default Axiosjson;
