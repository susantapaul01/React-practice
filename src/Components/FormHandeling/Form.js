import React, { Component } from 'react';

export class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            usernamer: '',
            comments: '',
            topic: 'react'
        }
    }

    handelValue = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    handelComments = (event) => {
        this.setState({
            comments: event.target.value
        })
    }
    handelTopic = (event) => {
        this.setState({
            topic: event.target.value
        })
    }
    handelSubmit = (event) => {
        alert(`${this.state.username}, ${this.state.comments}, ${this.state.topic}`)
        event.preventDefault()
    }
    
    render() {
        const { username, comments, topic } = this.state;
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4 offset-4'>
                        <form onSubmit={this.handelSubmit} className='mt-3'>
                            <div className="mb-3">
                                <label className="form-label">User Name</label>
                                <input type="text" value={username} onChange={this.handelValue} className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label for="" class="form-label">Example textarea</label>
                                <textarea value={comments} onChange={this.handelComments} class="form-control" id="" rows="3"></textarea>
                            </div>
                            <div className="mb-3">
                                <select class="form-select" value={topic} onChange={this.handelTopic}>
                                    <option selected value='react'>React</option>
                                    <option value="angular">Angular</option>
                                    <option value="vue">Vue</option>
                                </select>
                            </div>
                            <button type="submit" className="btn btn-primary btn-sm" >Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Form;
