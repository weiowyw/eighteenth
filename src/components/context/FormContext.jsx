import {createContext, useState} from "react";


export const FormContext = createContext(null);

const FormContextProvider = ({children}) => {

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
            <FormContext.Provider value={value}>
                {children}
            </FormContext.Provider>

        </div>
    );
};

export default FormContextProvider;