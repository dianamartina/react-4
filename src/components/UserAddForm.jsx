import React from "react";
import './UserAddForm.css'

class UserAddForm extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            isGoldClient: false
        }
    }

    handleNameChange(event) {
        const value = event.target.value;
        // console.log(value);
        this.setState({
            name: value
        });
    }

    handleEmailChange(event) {
        const value = event.target.value;
        // console.log(value);
        this.setState({
            email: value
        });
    }

    handleGoldClientChange(event) {
        const value= event.target.checked;
        this.setState({
            isGoldClient: value
        });
    }

    handleSubmit(event) {
        // console.log(event);
        event.preventDefault();// pentru a nu mai face refresh la pagina

        const user = {
            name: this.state.name,
            email: this.state.email,
            isGoldClient: this.state.isGoldClient
        }
        console.log(user)
        
        this.props.addNewUser(user);
    }

    render() {
        return(
            <form className="user-add-form" onSubmit={(event)=>this.handleSubmit(event)}>
                <h2>Adauga utilizatori:</h2>
                <label htmlFor="name">Nume:</label>
                <input 
                    type="text" 
                    id="name" 
                    value={this.state.name}
                    onChange={(event)=>this.handleNameChange(event)}
                />

                <label htmlFor="email">Email:</label>
                <input 
                    type="email" 
                    id="email" 
                    value={this.state.email}
                    onChange={(event)=>this.handleEmailChange(event)}/>

                <label htmlFor="gold-client">Client Gold:</label>
                <input 
                    type="checkbox" 
                    id="gold-client" 
                    checked={this.state.isGoldClient}
                    onChange={(event)=>this.handleGoldClientChange(event)}


                />

                <button type="submit">Adauga user </button>
            </form>
        )
    }
}

export default UserAddForm;