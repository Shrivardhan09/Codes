import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const searchingBar = (str, char) => {
    if (!str) return false
    str = str.toLowerCase()
    char = char.toLowerCase()
    return str.includes(char)
}


const Search = () => {
    const [cards, setCards] = useState([]);
    const [prod, setProd] = useState([]);
    const [search, setSearch] = useState('')
    useEffect(() => {
        axios.get("https://dummyjson.com/products")
            .then((res) => (setCards(res.data.products), setProd(res.data.products)));
    }, []);

    useEffect(() => {
        const res = prod.filter((items) => {
            const { title, description } = items

            if (searchingBar(title, search)) {
                return true
            }
            if (searchingBar(description, search)) {
                return true
            }
            return false
        })
        setCards(res)
    }, [prod, cards])

    return (
        <>
            <Link to={"/"}>Products</Link>
            <div>
                <div>
                    <input value={search} onChange={(e) => setSearch(e.target.value)} />
                </div>
                <div>
                    <h1>My Products</h1>
                    {cards.map((item) => {
                        return (
                            <ul key={item.id}>
                                <li >{item.title}</li>
                                <li>{item.description}</li>
                            </ul>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Search
