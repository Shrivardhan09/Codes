import { useEffect, useState } from "react"
import axios from 'axios'

const ListData = () => {
    let intialArray = []
    let peopleData = []

    const [name, setName] = useState([])
    // console.log("rerender")
    useEffect(() => {
        const t0 = performance.now();
        //Logic
        const result = async () => {
            try {
                let i = 1
                let listCompleted = false
                while (!listCompleted) {
                    const listRes = await axios.get(`https://swapi.dev/api/species/?page=${i}`)
                    const { results, next } = listRes.data
                    // console.log({ listRes })
                    if (results) {
                        intialArray = [...intialArray, ...results]
                        // console.log({ intialArray })
                    }
                    if (!next) {
                        listCompleted = true;
                        intialArray.map((item) => {
                            const { people } = item
                            return peopleData = [...peopleData, ...people]
                            // console.log({ people })
                        })
                    }
                    i++;
                }
                //console.log({intialArray})
                Promise.all(peopleData.map(u => fetch(u)))    //array fetch
                    .then(responses =>
                        // //console.log(responses)
                        Promise.all(responses.map(res => res.json()))
                    )
                    .then(res => {
                        NameFuntion(res)
                        const t1 = performance.now();
                        console.log(`Call to doSomething took ${t1 - t0} milliseconds.`);
                    }
                    )
            } catch (err) {
                console.log(err)
            }
            // //console.log({ peopleData })
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
    // //console.log({ name })
    return (
        <div>
            {name.map((items, id) => {
                return (
                    <div key={id}>
                        Name:  {items}
                    </div>
                )
            })}
        </div>
    )
}

export default ListData
