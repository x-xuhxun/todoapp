import React from "react";
import { MdAddCircle } from 'react-icons/md';
import { useState } from "react";
import "./TodoInsert.css";

const TodoInsert = ({onInsertToggle}) => {
    const [value, setValue] = useState('');
    const onChange = (e) => {
        setValue(e.target.value);
        console.log(e.target.value)
    }

    

    return (
    <div>
        <div className="background" onClick={onInsertToggle}></div>
        <form action="">
            <input placeholder="할일을 적어보세요!" value={value} onChange={onChange} />
            <button type="submit">
                <MdAddCircle/>
            </button>
        </form>
    </div>
   )
}

export default TodoInsert;