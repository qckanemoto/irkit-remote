const React = require('react');
const ReactDOM = require('react-dom');
const injectTapEventPlugin = require('react-tap-event-plugin');
const Router = require('react-router').Router;
const Route = require('react-router').Route;
const IndexRoute = require('react-router').IndexRoute;
const IndexRedirect = require('react-router').IndexRedirect;
const Redirect = require('react-router').Redirect;
const createHistory = require('history').createHashHistory;

const Header = require('./header.js');
const Index = require('./routes/index/index.js');
const Devices = require('./routes/devices/index.js');
const Device = require('./routes/devices/device.js');

// needed for React Developer Tools
window.React = React;

// needed for onTouchTap
injectTapEventPlugin();

var history = createHistory({
    queryKey: false
});

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

// to be removed
const mockData = require('../tests/mock-data.js');

ReactDOM.render((
    <Router history={history}>
        <Redirect from="/" to="/remotes/" />
        <Route path="/" component={App}>
            <Route path="remotes/" component={Index}>
                <IndexRedirect to={mockData.devices[0].id + '/'} />
                <Route path=":deviceId/" component={Index} />
            </Route>
            <Route path="devices/" component={Devices}>
                <Route path=":id/" component={Device} />
            </Route>
        </Route>
    </Router>
), document.getElementById('app'));
