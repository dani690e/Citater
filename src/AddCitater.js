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
        this.setState({
            title: '',
            citatText: '',
            forfatter: '',
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" onChange={this.handleChange} value={this.state.title}/>
                    <label htmlFor="citatText">citatText:</label>
                    <input type="text" id="citatText" onChange={this.handleChange} value={this.state.citatText}/>
                    <label htmlFor="forfatter">Forfatter:</label>
                    <input type="text" id="forfatter" onChange={this.handleChange} value={this.state.forfatter}/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddCitater
