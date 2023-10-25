import React, {useContext} from 'react';
import {Context} from "./Home";

const List = () => {

    const {tasks} = useContext(Context);

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