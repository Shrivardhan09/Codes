import { useState } from "react"


const Todo = () => {
    const [inputText, setInputText] = useState({
        title: '',
        description: '',
    })
    const [add, setAdd] = useState([])
    console.log(add)

    const onChangeInput = (e) => {
        const { name, value } = e.target
        console.log(name, value, 'jskjbkj')
        setInputText((prevInput) => {
            return {
                ...prevInput, [name]: value
            }
        })
    }
    const onClick = () => {
        setAdd((prev) => {
            return [
                ...prev, inputText
            ]
        })
        setInputText({
            title: '',
            description: ''
        })
    }

    return (
        <div>
            <input
                type="text"
                name="title"
                value={inputText.title}
                onChange={onChangeInput} />

            <input
                type="text"
                name="description"
                value={inputText.description}
                onChange={onChangeInput} />
            <button onClick={onClick}>
                Add Todo
            </button>
            {add.map((items, id) => {
                return (
                    <div key={id}>
                        <p>{items.title} </p>
                        <p>{items.description} </p>
                    </div>
                )
            })
            }
        </div>
    )
}

export default Todo
