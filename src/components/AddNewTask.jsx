import React, {useContext, useState} from 'react';
import {FormContext} from "./context/FormContext";
import {ThemeContext} from "./context/ThemeContext";

const AddNewTask = () => {

    const [name, setName] = useState('');
    const {onAddTask} = useContext(FormContext)
    const {isDark, setIsDark} = useContext(ThemeContext)

    const handleThemeChange = () => {
        setIsDark(!isDark)
    }

    return (
        <div>
                <input type='text' value={name} onChange={(e) => setName(e.target.value)}/>
                <button onClick={() => onAddTask(name)}>Add</button>
                <button onClick={handleThemeChange}>Change theme</button>
        </div>
    );
};

export default AddNewTask;