var React = require('react');
var ReactDOM = require('react-dom');
var injectTapEventPlugin = require('react-tap-event-plugin');
var App = require('./components/app.js');

// needed for React Developer Tools
window.React = React;

// needed for onTouchTap
injectTapEventPlugin();

ReactDOM.render(<App />, document.getElementById('app'));
