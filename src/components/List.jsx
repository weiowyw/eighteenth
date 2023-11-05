import React, {useContext} from 'react';
import {FormContext} from "./context/FormContext";

const List = () => {

    const {tasks} = useContext(FormContext);

    return (
        <div>
            <ul>
                {tasks.map(task => (
                    <li key={task}>{task}</li>
                ))}
            </ul>
        </div>
    );
};

export default List;