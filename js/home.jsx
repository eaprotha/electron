const React = require('react');
const ReactDOM = require('react-dom');
const renderer = require('../renderer-home.js');

const firebase = require("firebase");

class Home extends React.Component {

    constructor(props)  {
        super(props)
        this.state = {user: '', firstname: '', lastname: '', workNowName: '', workNowDescription: '', suggestions: ''};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            700
        );
    }

    tick() {
        let self = this
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                let nodeid = user.uid
                firebase.database().ref('ws/' + nodeid).once('value').then((snapshot) => {
                    let user = snapshot.val()
                    self.setState({
                        firstname: user.profile.firstName,
                        lastname: user.profile.lastName,
                        suggestions: user.suggestions,
                        workNowName : user.profile.work_now.name,
                        workNowDescription : user.profile.work_now.description
                    });
                })
            } else {
                // User is signed out.
                // ...
            }
        })
    }

    render() {
        let suggestionsList = ''
        if(this.state.suggestions !== undefined) {
            suggestionsList = Object.keys(this.state.suggestions).map((key, value) =>
                <li>{this.state.suggestions[key].lastName} {this.state.suggestions[key].firstName}</li>
            )
        } else {
            suggestionsList = 'NEXT BATCH IN ' + new Date().toLocaleTimeString()
        }


        return (
            <div>
                {this.state.lastname} <br />
                {this.state.firstname} <br />
                {this.state.workNowName} <br />
                {this.state.workNowDescription} <br />
                <ul>
                    { suggestionsList }
                </ul>

            </div>
        );
    }
}

ReactDOM.render(
    <Home />,
    document.getElementById('home')
);