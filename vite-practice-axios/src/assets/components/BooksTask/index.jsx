import axios from "axios"
import { useCallback, useEffect, useState } from "react"
import Button from '@mui/material/Button';
import BooksPost from "./BooksPost";
import { TextField } from "@mui/material";
import BookCard from "./BookCard";
import { debounce } from "./Helper/debounce";
import Pagination from "./Helper/pagination";

const Books = () => {
    const [bookStore, setBookStore] = useState([])
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)
    const [isClicked, setClicked] = useState(false)
    const [search, setSearch] = useState('')
    const [sort, setSort] = useState('DESC')
    const [viewSort, setViewSort] = useState(true)
    // console.log({ totalPages })
    // console.log(bookStore)

    let fetchBooks = async (page, search, sort) => {
        try {
            let getData = await axios.get(`http://68.178.162.203:8080/application-test-v1.1/books?page=${page}&title=${search}&DIR=${sort}`)
            console.log(getData.data)
            setBookStore(getData.data.data)
            setTotalPages(getData.data.pagination.totalPages)
        }
        catch (err) { console.error(err, 'Successfull Error') }
    }

    const debouncedBookSearch = useCallback(
        debounce(fetchBooks, 500), [])

    useEffect(() => {
        debouncedBookSearch(page, search, sort)
    }, [page, search, sort, debouncedBookSearch])

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
                <h1 style={{ fontFamily: 'cursive', margin: 10 }}>Books And The Authors:</h1>
                <TextField id="standard-basic" label="Search" variant="standard" onChange={(e) => setSearch(e.target.value)} />

                <Button onClick={() => {
                    setSort(sort === 'DESC' ? 'ASC' : 'DESC')
                    setViewSort(!viewSort)
                }}>{viewSort ? 'Sort by Z-A' : 'Sort by A-Z'}</Button>

                <Button variant="outlined" onClick={() => setClicked(!isClicked)}>Add Books</Button>
            </div>
            {isClicked && <BooksPost setClicked={setClicked} />}
            <div style={{ margin: 10, display: 'grid', gap: '5px', placeItems: "center", gridTemplateColumns: '1fr 1fr 1fr 1fr' }}>
                {bookStore.map((items, i) => (
                    <BookCard items={items} key={items.id} />
                ))}
            </div>
            <Pagination totalPages={totalPages} currentPage={page} onPageChange={setPage} />
        </>
    )
}
export default Books;