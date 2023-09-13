import React, { useState } from 'react';

const Optimise = () => {
    const [data, setData] = useState([]);
    console.log(data, 'data')
    const [change, setChange] = useState({
        title: '',
        desc: '',
        isCompleted: false,
    });
    const [isEdit, setIsEdit] = useState([]);
    console.log(isEdit, 'edit')

    // onchange function
    const onChangeValue = (e) => {
        const { name, value } = e.target;
        setChange((prevData) => ({ ...prevData, [name]: value }));
    };

    // add functionality
    const onAddInput = () => {
        setData((prev) => [...prev, { ...change }]);
        setChange({
            title: '',
            desc: '',
            isCompleted: false,
        });
        setIsEdit((prevEdit) => [...prevEdit, false]); // Add a new edit state for the added item
    };

    // checkbox functionality
    const onChecked = (i) => {
        setData((prev) =>
            prev.map((items, index) =>
                index === i ? { ...items, isCompleted: !items.isCompleted } : items
            )
        );
    };

    // edit functionality
    const onEdit = (i) => {
        // Update the edit state for the specific item at index i
        setIsEdit((prevEdit) =>
            prevEdit.map((editState, index) => (index === i ? !editState : editState))
        );
    };

    // update functionality
    const onUpdate = (i) => {
        setData((prev) =>
            prev.map((items, index) =>
                index === i ? { ...items, ...change } : items
            )
        );
        setChange({
            title: '',
            desc: '',
            isCompleted: false,
        });
        // Disable edit mode after updating
        setIsEdit((prevEdit) =>
            prevEdit.map((editState, index) => (index === i ? false : editState))
        );
    };

    // delete functionality
    const onDelete = (i) => {
        setData((prev) => prev.filter((_, index) => index !== i));
        setIsEdit((prevEdit) => prevEdit.filter((_, index) => index !== i));
    };

    return (
        <>
            <div>
                <h1>Todo Task</h1>
                <input
                    type="text"
                    value={change.title}
                    onChange={onChangeValue}
                    name="title"
                />
                <input
                    type="text"
                    value={change.desc}
                    onChange={onChangeValue}
                    name="desc"
                />
                <button onClick={onAddInput}>add</button>
            </div>
            <div>
                <h2>Todo List</h2>
                <div>
                    {data.map((items, i) => {
                        return (
                            <div key={i}>
                                <ul>
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
                                {isEdit[i] && (
                                    <div>
                                        <input
                                            type="text"
                                            value={change.title}
                                            onChange={onChangeValue}
                                            name="title"
                                        />
                                        <input
                                            type="text"
                                            value={change.desc}
                                            onChange={onChangeValue}
                                            name="desc"
                                        />
                                        <button onClick={() => onUpdate(i)}>update</button>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default Optimise;
