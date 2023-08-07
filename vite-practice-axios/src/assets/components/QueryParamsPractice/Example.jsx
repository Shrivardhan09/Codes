import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const example = () => {
    const [searchP, setSearchP] = useSearchParams()
    const [isChecked, setIsChecked] = useState(false)

    useEffect(() => {
        if (isChecked) {
            searchP.set()
        }
    }, [])

    return (
        <div>

        </div>
    )
}

export default example
