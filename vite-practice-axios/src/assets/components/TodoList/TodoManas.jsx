import React, { useState } from "react";
import Edit from "./EditTodo";

const TodoManas = () => {
    const [data, setData] = useState({
        title: "",
        desc: "",
    });
    const [list, setList] = useState([]);

    const handle = (e) => {
        const { name, value } = e.target;
        setData((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });
    };

    const add = () => {
        setList((prev) => {
            return [...prev, data];
        });
        setData({
            title: "",
            desc: "",
        });
    };

    const del = (i) => {
        setList((prev) => prev.filter((_, index) => i !== index));
    };

    return (
        <div>
            Todo
            <input
                type="text"
                name="title"
                value={data.title}
                onChange={handle}
            />
            <input
                type="text"
                name="desc"
                value={data.desc}
                onChange={handle}
            />
            <button onClick={add}>ADD</button>
            <div>Todo list</div>
            {list.map((item, i) => {
                return (
                    <div key={i}>
                        <span>{i}</span>
                        <span> {item.title}</span>
                        <span> {item.desc}</span>
                        <span>
                            <Edit index={i} list={list} setList={setList} />
                            <button onClick={() => del(i)}>Delete</button>
                        </span>
                    </div>
                );
            })}
        </div>
    );
};

export default TodoManas;
