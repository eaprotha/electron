const React = require('react');
const ReactDOM = require('react-dom');
const renderer = require('../renderer.js');

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {email: '', password: ''};

        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeEmail(event) {
        this.setState({email: event.target.value});
    }

    handleChangePassword(event) {
        this.setState({password: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch('/login');
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Email:
                    <input type="text" value={this.state.email} onChange={this.handleChangeEmail} />
                </label>
                <label>
                    Password:
                    <input type="password" value={this.state.password} onChange={this.handleChangePassword} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

ReactDOM.render(
    <NameForm />,
    document.getElementById('root')
);