import React, { Component } from 'react'

class AddCitater extends Component {
    state = {
        title: null,
        citatText: null,
        forfatter: null
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addCitat(this.state);
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" onChange={this.handleChange}/>
                    <label htmlFor="citatText">citatText:</label>
                    <input type="text" id="citatText" onChange={this.handleChange}/>
                    <label htmlFor="forfatter">Forfatter:</label>
                    <input type="text" id="forfatter" onChange={this.handleChange}/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddCitater
