import { Button, Card } from '@mui/material'
import React, { useState } from 'react'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import EditBook from "./EditBook";

const BookCard = ({ items }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <Card sx={{ minWidth: 275 }} key={items.id || i}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Title- {items.title}
                </Typography>
                <Typography variant="h5" component="div">
                    Author - {items.author}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Language: {items.language}
                </Typography>
                <Typography variant="body2">
                    Country: {items.country}
                    <br />
                    Published: {items.year}
                </Typography>
            </CardContent>
            <CardActions>
                {!isOpen && <Button size="small" onClick={() => setIsOpen(true)}>Edit✒️</Button>}
            </CardActions>
            {isOpen && <EditBook items={items} setIsOpen={setIsOpen} />}
        </Card>
    )
}

export default BookCard;
