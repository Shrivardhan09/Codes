import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { TaskJsonContext } from './PassJson';

const TaskJson = () => {
    const holdJson = useContext(TaskJsonContext);

    return (
        <div>
            {holdJson.map((item) => (
                <Link key={item.id} to={`/${item.id}`}>
                    <div>{item.title}</div>
                </Link>
            ))}
        </div>
    );
};

export default TaskJson;
