import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";


const EditBook = ({ items, setIsOpen }) => {
    const { id, author, country, language, link, page, title, year } = items;
    const [edit, setEdit] = useState({
        author: author,
        country: country,
        language: language,
        link: link,
        page: page,
        title: title,
        year: year,
    });
    const updateBook = async () => {
        let edited = await axios.put(`http://68.178.162.203:8080/application-test-v1.1/books/${id}`, edit)
        console.log(edited.data)
        setIsOpen(false)
    }
    const handleChange = (e) => {
        const { name, value } = e.target
        setEdit((prev) => ({ ...prev, [name]: value }))
    }
    return (
        <div style={{ position: 'fixed', zIndex: 1000, top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ backgroundColor: 'white', borderRadius: 8, padding: 20, boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.2)', width: '100%', textAlign: 'center' }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                    <TextField
                        required
                        id="filled-required"
                        label="Author"
                        variant="filled"
                        onChange={handleChange}
                        name='author'
                        value={edit.author}
                    />
                    <TextField
                        required
                        id="filled-required"
                        label="BookName"
                        variant="filled"
                        onChange={handleChange}
                        name='title'
                        value={edit.title}

                    />
                    <TextField
                        required
                        id="filled-required"
                        label="Country"
                        variant="filled"
                        onChange={handleChange}
                        name='country'
                        value={edit.country}

                    />
                    <TextField
                        required
                        id="filled-required"
                        label="YOP"
                        variant="filled"
                        onChange={handleChange}
                        name='year'
                        value={edit.year}

                    />
                    <TextField
                        required
                        id="filled-required"
                        label="Language"
                        variant="filled"
                        onChange={handleChange}
                        name='language'
                        value={edit.language}

                    />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 7 }}>
                    <Button variant="contained" style={{ marginTop: 5 }} onClick={updateBook}>UpdateBook</Button>
                    <Button onClick={() => setIsOpen(false)}>Close</Button>
                </div>

            </div>

        </div>
    )
}

export default EditBook
