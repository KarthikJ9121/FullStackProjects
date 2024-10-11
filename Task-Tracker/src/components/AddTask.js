import { useState } from 'react'

import React from 'react'

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [remainder, setRemainder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault();

        if (!text) {
            alert("Please Add Task");
            return;
        }
        if (!day) {
            alert("Please Enter Day and Time");
            return;
        }

        onAdd({ text, day, remainder });

        setText('');
        setDay('');
        setRemainder(false);
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label htmlFor="task">Task</label>
                <input
                    type="text"
                    id='task'
                    placeholder='Add Task'
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label htmlFor="date">Day & Time</label>
                <input
                    type="text"
                    id='date'
                    placeholder='Add Day And Time'
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                />
            </div>
            <div className='form-control form-control-check'>
                <label htmlFor="remainder">Set Remainder</label>
                <input
                    style={{ cursor: 'pointer' }}
                    type="checkbox"
                    checked={remainder} 
                    id='remainder'
                    placeholder='Add Remainder'
                    value={remainder}
                    onChange={(e) => setRemainder(e.target.checked)}
                />
            </div>
            <input className='btn btn-block' type="submit" value='Save Task' />
        </form>
    )
}

export default AddTask
