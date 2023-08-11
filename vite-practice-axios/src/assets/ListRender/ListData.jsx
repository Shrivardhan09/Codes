import { useEffect, useState } from "react"
import axios from 'axios'

const ListData = () => {
    let intialArray = []
    let peopleData = []
    const [name, setName] = useState([])

    useEffect(() => {
        const result = async () => {
            try {
                for (let i = 1; ; i++) {
                    const listRes = await axios.get(`https://swapi.dev/api/species/?page=${i}`)
                    if (listRes.data.results) {
                        intialArray = [...intialArray, ...listRes.data.results]
                    }
                }
            } catch (err) {
                intialArray.forEach((item) => {
                    const { people } = item
                    peopleData = [...peopleData, ...people]
                    // console.log({ people })
                })
                Promise.all(peopleData.map(u => fetch(u)))
                    .then(responses =>
                        Promise.all(responses.map(res => res.json()))
                        // console.log({responses})
                    ).then(res => NameFuntion(res))
                console.log(err)
            }
            console.log({ peopleData })
        }
        result()
    }, [])

    let NameFuntion = (data) => {
        let nameArray = []
        for (let i = 0; i < data.length; i++) {
            const { name } = data[i]
            nameArray.push(name)
        }
        setName(nameArray)
    }
    // console.log({ name })
    return (
        <div>
            {name}
        </div>
    )
}

export default ListData
