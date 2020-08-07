 import React, { Component } from 'react'
 import States from "./States.js"


 export default class Task extends Component {
    
    constructor(){
        super()
        this.status = {completed: false, state = "new"};
        this.setState = this.setState.bind(this)
    }

    getColorForState(){
        switch(this.status.state){
            case "new":
                return "#white"
            case "active":
                return "#blue"
            case "closed":
                return "#green"
            case "blocked":
                return "#red"
            default:
                return "#grey"
        }
    }

    setStatus(status){
        if(States.includes(status)){
            this.setState(prevState => {
                return { ...prevState, state: status}
            })
        } else {
            console.error(`wrong state: "${status}"`)
        }
    }

     render() {
         this.status["name"] = this.props.item.name
         this.status["description"] = this.props.item.description
         this.status["acceptanceCriteria"] = this.props.item.acceptanceCriteria
         this.status["id"] = this.props.item.id
         this.status["priority"] = this.props.priority
         return (
             <div className = "task-item">
                 <h3>{this.status.name}</h3>
                 <p style={{color: this.getColorForState()}}>state: {this.props.item.state}</p>
                 <p>{this.props.item.description}</p>
                 <p>Acceptance criteria:</p>
                 <ul>
                 {this.props.item.acceptanceCriteria.map(i => {
                     <li>i</li>
                 })}
                 </ul>
                <p>priority: {this.props.item.priority}</p>
                <hr/>
             </div>
         )
     }
 }
 