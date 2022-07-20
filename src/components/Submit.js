import { Component } from "react";

class Submit extends Component {
    state = { value: ''}

    handleChange = (e) => {
        this.setState({value: e.target.value});
    }

    handleSubmit = (e) => {
        // alert('Nama yang dimasukkan:'+ this.state.value);
        
        // untuk mencegah default behaviour dijalankan
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name: <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" onClick={this.handleSubmit}/>
                <h1>{this.state.value}</h1>
            </form>
        );
    }
}

export default Submit