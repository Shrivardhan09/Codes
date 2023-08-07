import { useState } from "react"
const screenWidth = window.innerWidth


export const UseState1 = () => {
    const [person, setPerson] = useState({ name: "vardhan", age: 22 })



    const onClickChange = () => {
        setPerson((prevData) => ({ ...prevData, name: prevData.name, age: prevData.age + 1 }))
    }


    return (
        <div>
            <div>
                <h1>Name : {person.name} </h1>
                <h1>Age: {person.age} </h1>
                <button onClick={onClickChange}>To Increase My Age</button>
                <p>{screenWidth}</p>
            </div>
        </div>
    )
}