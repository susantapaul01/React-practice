import React, { Component } from 'react';

export class Form extends Component {
    state = {
        title: '',
        textarea: '',
        myselect: '',
        checkOne: false
    }

    handelChange = (event) => {
        if(event.target.type === 'text') {
            this.setState({
                title: event.target.value
            })
        } 
        else if(event.target.type === 'textarea') {
            this.setState({
                textarea: event.target.value
            })
        } 
        else if(event.target.type === 'select-one') {
            this.setState({
                myselect: event.target.value
            })
        } else if(event.target.type === 'checkbox') {
            this.setState({
                checkOne: event.target.checked
            })
        }
        else {
            console.log('Nothing here')
        }
    }
    mySubmitHandeler = (event) => {
        const { title, textarea, myselect, checkOne } = this.state;
        event.preventDefault();
        console.log(title, textarea, myselect, checkOne)
    }
    render() {
        const { title, textarea, myselect, checkOne } = this.state;
        return (
            <div>
                <form onSubmit={this.mySubmitHandeler}>
                    <input type='text' placeholder='Enter name' value={title} onChange={this.handelChange} />
                    <br /><br />
                    <textarea placeholder='Enter Text' value={textarea} onChange={this.handelChange}></textarea>
                    <br /><br />
                    <select value={myselect} onChange={this.handelChange}>
                        <option value='react'>React</option>
                        <option value='angular'>Angular</option>
                        <option value='vue'>Vue</option>
                    </select>
                    <br /><br />
                    <input type='checkbox' checked={checkOne} value='Car' onChange={this.handelChange} /> Car
                    <br /><br />
                    <input type='submit' value='Submit' />
                </form>
            </div>
        )
    }
}

export default Form;
