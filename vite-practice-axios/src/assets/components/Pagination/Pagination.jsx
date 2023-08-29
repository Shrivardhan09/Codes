import axios from "axios"
import { useEffect, useState } from "react"


const Pagination = () => {
    const [store, setStore] = useState([])
    const [page, setPage] = useState(1)
    const itemsPerPage = 10
    const pageLength = Math.ceil(store.length / 10)

    useEffect(() => {
        const fetchingList = async () => {
            const listData = await axios.get('https://dummyjson.com/products?limit=100')
            setStore(listData.data.products)
        }
        fetchingList()
    }, [])
    console.log({ store })

    const selectPage = (selectedPage) => {
        if (selectedPage >= 1 && selectedPage <= pageLength)
            setPage(selectedPage)
    }
    return (
        <>
            <div style={{
                backgroundImage: "linear-gradient(45deg, #ffcccc, #ffe0b2, #fff7b2, #e0ffb2, #b2ffe0, #b2f7ff, #d9b2ff)"
            }}>


                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: 10,
                    flexWrap: 'wrap',
                }}>
                    {
                        store.slice((page - 1) * itemsPerPage, page * itemsPerPage).map((items) => {
                            const { images, id, title, brand, description, price } = items
                            return (
                                <div
                                    key={id}
                                    style={{
                                        paddingTop: 10,
                                        border: '1px solid black',
                                        width: 300,
                                        height: 300,
                                        display: "flex",
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}>
                                    <img
                                        src={images[0]}
                                        alt={title}
                                        style={{ width: 100, height: 100, objectFit: 'cover' }} />
                                    <div>{title}</div>
                                    <div style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        flexDirection: 'column',
                                    }}>
                                        <p>Brand: {brand}</p>
                                        <p>{description}</p>
                                        <p>💸{price}</p>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '20px',
                    marginBottom: 20,
                }}>
                    {store.length > 0 && (
                        <div>
                            <span
                                style={{
                                    display: 'inline-block',
                                    padding: '8px 12px',
                                    margin: '0 5px',
                                    cursor: 'pointer',
                                }}
                                onClick={() => selectPage(page - 1)}
                            >
                                ⬅️
                            </span>
                            {[...Array(pageLength)].map((_, i) => (
                                <span
                                    key={i}
                                    onClick={() => selectPage(i + 1)}
                                    style={{
                                        display: 'inline-block',
                                        padding: '8px 12px',
                                        margin: '0 5px',
                                        border: '1px solid #ccc',
                                        backgroundColor: page === i + 1 ? 'cyan' : '#fff',
                                        color: '#333',
                                        cursor: 'pointer',
                                        transition: 'background-color 0.3s ease-in-out, color 0.3s ease-in-out',
                                    }}
                                >
                                    {i + 1}
                                </span>
                            ))}
                            <span
                                style={{
                                    display: 'inline-block',
                                    padding: '8px 12px',
                                    margin: '0 5px',
                                    cursor: 'pointer',
                                }}
                                onClick={() => selectPage(page + 1)}
                            >
                                ➡️
                            </span>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Pagination
