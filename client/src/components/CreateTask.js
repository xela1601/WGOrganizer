import React, { Component } from 'react'

export default class CreateTask extends Component {

    constructor(){
        super()
        this.state = {
            name: '', 
            description:'', 
            acceptanceCriteria: [],
            effortPoints:0}
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit(event){
        alert('A name was submitted: ' + this.state.name)
        event.preventDefault();
    }

    handleChange(event){
        const target = event.target
        const name = target.name
        this.setState(prevState => {
            switch(name) {
                case 'acceptanceCriteria':
                    return { ...prevState, acceptanceCriteria: target.value.split('\n')}
                case 'effortPoints':
                    return {...prevState, effortPoints: Number(target.value)}
                default:
                    return {...prevState, [name]: target.value}
            }
        })
        console.log(this.state)
    }
        
    render() {
        return (
            <div className="create-task">
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:             
                        <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                    </label>
                    <br/>
                    <label>
                        Description:       
                        <textarea name= "description" rows="5" cols="30" value={this.state.description} onChange={this.handleChange} />
                    </label>
                    <br/>
                    <label>
                        Acceptance Critera:
                        <textarea name="acceptanceCriteria" rows="5" cols="30" onChange= {this.handleChange} />
                    </label>
                    <br/>
                    <label>
                        Effort points:
                        <select name="effortPoints" size="7" onChange={this.handleChange}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="5">5</option>
                            <option value="8">8</option>
                            <option value="13">13</option>
                            <option value="21">21</option>
                        </select>
                        <input type="text" value={this.state.name} onChange={this.handleChange} />
                    </label>
                    <br/>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}
