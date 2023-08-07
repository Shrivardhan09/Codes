// TaskDetails.js
import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { TaskJsonContext } from './PassJson';

const TaskDetails = () => {
    const [details, setDetails] = useState({});
    const { id } = useParams();
    const holdJson = useContext(TaskJsonContext);

    useEffect(() => {
        const productDetails = holdJson.find(item => item.id === parseInt(id));
        setDetails(productDetails || {});
    }, [id, holdJson]);

    return (
        <div>
            <Link to="/">Home</Link>
            {Object.keys(details).length > 0 && (
                <div key={details.id}>
                    <p>{details.title}</p>
                    <p>{details.description}</p>
                </div>
            )}
        </div>
    );
};

export default TaskDetails;
