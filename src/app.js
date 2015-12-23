const React = require('react');
const ReactDOM = require('react-dom');
const injectTapEventPlugin = require('react-tap-event-plugin');
const Router = require('react-router').Router;
const Route = require('react-router').Route;
const IndexRedirect = require('react-router').IndexRedirect;
const createHistory = require('history').createHashHistory;

const Header = require('./header.js');
const Remotes = require('./routes/remotes/index.js');
const Devices = require('./routes/devices/index.js');
const NewDevice = require('./routes/devices/new-device.js');
const EditDevice = require('./routes/devices/edit-device.js');

// needed for React Developer Tools
window.React = React;

// needed for onTouchTap
injectTapEventPlugin();

var history = createHistory({
    queryKey: false
});

// fixme
const remotes = require('../tests/remotes.js');

var indexRedirectTo = remotes.length
    ? 'remotes/' + remotes[0].id + '/'
    : 'devices/new'
;

const App = React.createClass({
    render: function () {
        return (
            <div>
                <Header />
                {this.props.children}
            </div>
        );
    }
});

ReactDOM.render((
    <Router history={history}>
        <Route path="/" component={App}>
            <IndexRedirect to={indexRedirectTo} />
            <Route path="remotes/:deviceId/" component={Remotes} />
            <Route path="devices/" component={Devices}>
                <Route path="new/" component={NewDevice} />
                <Route path="edit/:id/" component={EditDevice} />
            </Route>
        </Route>
    </Router>
), document.getElementById('app'));
