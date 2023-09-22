import React, { useState, useEffect } from "react";

const Edit = ({ index, list, setList }) => {
    const [flag, setFlag] = useState(false);
    const [data, setData] = useState({
        title: "",
        desc: "",
    });

    // Update the data state with the current item's values when the component mounts
    useEffect(() => {
        if (list[index]) {
            setData(list[index]);
        }
    }, [list, index]);

    const handle = (e) => {
        const { name, value } = e.target;
        setData((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });
    };

    const update = () => {
        setList((prev) => {
            const updatedList = [...prev];
            updatedList[index] = data;
            return updatedList;
        });
        setFlag(false);
    };

    return (
        <div>
            <button onClick={() => setFlag(!flag)}>Edit</button>
            {flag && (
                <div>
                    <input
                        name="title"
                        value={data.title}
                        onChange={handle}
                    />
                    <input
                        name="desc"
                        value={data.desc}
                        onChange={handle}
                    />
                    <button onClick={update}>Update</button>
                </div>
            )}
        </div>
    );
};

export default Edit;
