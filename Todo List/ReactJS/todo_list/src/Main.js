import React, { useState } from 'react'

export default function Main() {
    // Hooks
    const [taskName, settaskName] = useState('');
    const [taskList, settaskList] = useState([]);
    function addTask() {
        settaskList([...taskList, taskName])
    };

    const taskListContent = taskList.map((task, index) => {
        return (
            <div>
                <p>{task}</p>
                <i class="far fa-trash-alt" onClick={() => deleteTask(index)}></i>
            </div>
        )
    })

    // Deleting and Updating Original Array using duplicate array.
    function deleteTask(index) {
        var dupArray = [...taskList]
        dupArray.splice(index, 1)
        settaskList(dupArray)
    }


    return (
        <div>
            <div className='row justify-content-center'>

                <div className='col-md-5 shadow-lg p-3 mb-5 bg-white rounded'>
                    {/* Header */}
                    <h1> React ToDo List </h1>

                    {/* Input */}
                    <input type='text' placeholder='Enter task' className='form-control' value={taskName}
                        onChange={(e) => { settaskName(e.target.value) }}
                    />

                    {/* Button */}
                    <button className='btn btn-success' onClick={addTask}>ADD</button>

                    <br />
                    {taskListContent}
                </div>

            </div>
        </div>
    )
}
