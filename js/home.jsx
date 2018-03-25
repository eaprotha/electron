const React = require('react');
const ReactDOM = require('react-dom');
const renderer = require('../renderer-home.js');

const firebase = require("firebase");

class Home extends React.Component {

    constructor(props)  {
        super(props)
        this.state = {user: '', firstname: '', lastname: '', headline: '', suggestions: ''};
    }
    componentDidMount() {
        let self = this
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                let nodeid = user.uid
                firebase.database().ref('ws/' + nodeid).once('value').then((snapshot) => {
                    let user = snapshot.val()
                    self.setState({
                        // user: user
                        firstname: user.profile.firstName,
                        lastname: user.profile.lastName,
                        suggestions:user.suggestions,
                        headline: user.profile.headline
                    })
                })
            } else {
                // User is signed out.
                // ...
            }
        })
    }

    render() {
        return (
            <div>
                Hello {this.state.lastname} {this.state.firstname} {this.state.headline}
            </div>

        );
    }
}

ReactDOM.render(
    <Home />,
    document.getElementById('home')
);