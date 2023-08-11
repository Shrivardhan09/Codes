import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TaskJsonContext } from './PassJson';
import axios from 'axios';

const TaskJson = () => {
    const { taskList, setTaskList } = useContext(TaskJsonContext);
    // const [holdJson, setHoldJson] = useState([]);

    useEffect(() => {
        if (taskList.length ===0) {
            axios.get('https://fakestoreapi.com/products')
                .then(res => setTaskList(res.data))
                .catch(error => console.error('Error fetching data', error));
        }
    }, []);

    return (
        <div>
            {taskList.map((item) => (
                <Link key={item.id} to={`/${item.id}`}>
                    <div>{item.title}</div>
                </Link>
            ))}
        </div>
    );
};

export default TaskJson;
