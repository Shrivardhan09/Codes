import { Box, Button, TextField } from "@mui/material"
import axios from "axios"
import { useState } from "react"


const BooksPost = ({ }) => {
    const [inputValue, setInputValues] = useState({
        Author: '',
        BookName: '',
        Country: '',
        Language: '',
        YOP: '',
    })

    const onPostClick = async () => {
        const response = await axios.post('http://68.178.162.203:8080/application-test-v1.1/books', inputValue)
        console.log(response.data)
    }
    const handleChange = (e) => {
        const { name, value } = e.target
        setInputValues((prev) => ({ ...prev, [name]: value }))
    }

    return (
        <Box sx={{ p: 2, border: '1px dashed grey', m: 3 }}>
            <div style={{ display: 'flex', gap: 7, justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                <TextField
                    required
                    id="filled-required"
                    label="Author"
                    variant="filled"
                    onChange={handleChange}
                    name={inputValue.Author}
                />
                <TextField
                    required
                    id="filled-required"
                    label="BookName"
                    variant="filled"
                    onChange={handleChange}
                    name={inputValue.BookName}
                />
                <TextField
                    required
                    id="filled-required"
                    label="Country"
                    variant="filled"
                    onChange={handleChange}
                    name={inputValue.Country}
                />
                <TextField
                    required
                    id="filled-required"
                    label="YOP"
                    variant="filled"
                    onChange={handleChange}
                    name={inputValue.YOP}
                />
                <TextField
                    required
                    id="filled-required"
                    label="Language"
                    variant="filled"
                    onChange={handleChange}
                    name={inputValue.Language}
                />
            </div>
            <Button variant="contained" style={{ marginTop: 5 }} onClick={onPostClick}>Add to BookStore</Button>
        </Box>
    )
}

export default BooksPost;
