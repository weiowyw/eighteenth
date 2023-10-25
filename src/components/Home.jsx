import React, {createContext, useState} from 'react';
import Tasks from "./Tasks";
import Form from "./Form";


export const Context = createContext(null);

const Home = () => {

    const [tasks, setTasks] = useState(['ale', 'sda']);

    const addTask = (name) => {
        setTasks([...tasks, name]);
    }

    const value = {
        tasks: tasks,
        onAddTask: addTask
    }

    return (
        <div>
        <Context.Provider value={value}>
            <Form />
            <Tasks />
        </Context.Provider>
        </div>
    );
};

export default Home;