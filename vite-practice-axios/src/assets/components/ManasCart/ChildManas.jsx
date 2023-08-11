import React, { useContext, useEffect, useState } from 'react'
import { setUp } from './MemoData'
import { Link, useParams } from 'react-router-dom'

const ChildManas = () => {
    const [storeObject, setStoreObject] = useState({})
    const store = useContext(setUp)
    console.log({ store })
    const { id } = useParams()
    // console.log(id, 'id')

    useEffect(() => {
        const mapping = store.find((items) => (items.id === parseInt(id)))
        // console.log(mapping)
        setStoreObject(mapping || {})
    }, [id, store])

    // console.log({ storeObject })


    return (
        <div>
            <Link to={'/'}>Home</Link>
            <p key={storeObject.id}>{storeObject.title}</p>
        </div>
    )
}

export default ChildManas
