import React, { useState } from 'react'

const TodoEveningTask = () => {
    const [data, setData] = useState([])
    const [change, setChange] = useState({
        title: '',
        desc: '',
        isCompleted: false
    })
    const [updateStore, setUpdateStore] = useState([])

    //onchange function
    const onChangeValue = (e) => {
        const { name, value } = e.target
        setChange((prevData) => ({ ...prevData, [name]: value }))
    }

    // add functionality
    const onAddInput = () => {
        setData((prev) => [...prev, { ...change }])
        setChange({
            title: '',
            desc: '',
            isCompleted: false
        })
        setUpdateStore((prev) => [...prev, false])
    }


    // checkbox functionality
    const onChecked = (i) => {
        setData((prev) => prev.map((items, index) =>
            index === i ? { ...items, isCompleted: !items.isCompleted } : items
        ))
    }



    // edit functionality
    const onEdit = (i) => {
        setUpdateStore((prev) => prev.map((items, index) =>
            (index === i ? !items : items)
        ))
    }

    // update functionality
    const onUpdate = (i) => {
        setData((prev) => prev.map((items, index) =>
            index === i ? { ...items, ...change } : { items })
        )
        setChange({
            title: '',
            desc: '',
            isCompleted: false
        })

        //disable
        setUpdateStore((prev) => prev.map((items, index) => (index === i ? false : items)))
    }


    // delete functionality
    const onDelete = (i) => {
        setData((prev) => prev.filter((_, index) => index !== i))
        setUpdateStore((prev) => prev.filter((_, index) => index !== i))

    }


    return (
        <>
            <div>
                <h1>Todo Task</h1>
                <input type="text" value={change.title} onChange={onChangeValue} name='title' />
                <input type="text" value={change.desc} onChange={onChangeValue} name='desc' />
                <button onClick={onAddInput}>add</button>
            </div>
            <div>
                <h2>Todo List</h2>
                <div>
                    {data.map((items, i) => {
                        return (
                            <div key={i}>
                                <ul >
                                    <li>{items.title}</li>
                                    <li>{items.desc}</li>
                                </ul>
                                <div>
                                    <input
                                        type="checkbox"
                                        name="checkbox"
                                        id={`checkbox-${i}`}
                                        onChange={() => onChecked(i)}
                                    />
                                    <span>{items.isCompleted ? 'Completed' : 'Pending'}</span>
                                </div>
                                <br />
                                <button onClick={() => onEdit(i)}>Edit</button>
                                <button onClick={() => onDelete(i)}>Delete</button>
                                {updateStore[i] && (<div>
                                    <input
                                        type="text"
                                        value={change.title}
                                        onChange={onChangeValue}
                                        name='title' />
                                    <input
                                        type="text"
                                        value={change.desc}
                                        onChange={onChangeValue}
                                        name='desc' />
                                    <button onClick={() => onUpdate(i)}>update</button>
                                </div>)
                                }
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default TodoEveningTask;
