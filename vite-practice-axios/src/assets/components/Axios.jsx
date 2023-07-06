import { useEffect, useState } from "react"
import axios from 'axios'



const Axios = () => {
    const [data, setData] = useState([])
    const [err, setErr] = useState('')

    useEffect(() => {
        // axios.get('https://jsonplaceholder.typicode.com/posts')
        axios.get('https://fakestoreapi.com/products')
            .then((res) => { setData(res.data) })
            .catch((error) => { setErr('404 Not Fount', error) })
    }, [])
    return (
        <div>
            <h1>Axios</h1>
            {data.map((data) => {
                const { id, title, price, image } = data;
                return <div className='card' key={id}>
                    <div>
                        <img src={image} alt="" />
                        <h3>{title}</h3>
                        <p>{price}</p>
                    </div>
                </div>
            })
            }
        </div>
    )
}

export default Axios
