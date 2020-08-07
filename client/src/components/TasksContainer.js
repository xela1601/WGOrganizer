import React, { Component } from 'react'
import TasksData from "../data/TasksData.js"
import Task from "./Task.js"
import "../containers/App.css"
class TasksContainer extends Component
{


    constructor(){
        super()
        this.state = {data: TasksData}
        this.getTaskCompontents = this.getTaskCompontents.bind(this)
    }

    getTaskCompontents(){
        return this.state.data.map(
            t => <Task key={t.id} item={t}/>    
            )
    }


    render() {
        return (
            <div className="task-list">
                {this.getTaskCompontents()}
            </div>
        )
    }
}
export default TasksContainer