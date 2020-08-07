import TasksContainer from "./TasksContainer.js";
import CreateTask from "./CreateTask.js"
import React, { Component } from 'react'

export default class MainContent extends Component {
    render() {
        return (
            <div className="task-list" id="taskList">
                <CreateTask/>
                <TasksContainer/>
            </div>
        )
    }
}
