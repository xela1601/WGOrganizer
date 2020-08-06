import React, { Component } from 'react'
import TasksData from "../data/TasksData.js"
import Task from "./Task.js"
export default class TasksContainer extends Component {

    constructor(){
        super();
        this.state = {data: TasksData}
        
    }

    getTaskCompontents(){
        return this.state.data.map(
            t => 
                <div>
                    <Task key={t.id} item={t}/>
                </div>
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
