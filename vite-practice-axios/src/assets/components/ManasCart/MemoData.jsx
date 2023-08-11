import axios from "axios"
import { createContext, useEffect, useState } from "react"

const setUp = createContext()

const MemoData = ({ children }) => {
    const [store, setStore] = useState([])

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then((result) => setStore(result.data))
            .catch((err) => console.log(err))
    }, [])

    return (
        <setUp.Provider value={store}>
            {children}
        </setUp.Provider>
    )
}

export { setUp, MemoData }
