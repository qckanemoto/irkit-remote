var React = require('react');
var ReactDOM = require('react-dom');
var injectTapEventPlugin = require('react-tap-event-plugin');
var Main = require('./components/main.js');

// needed for React Developer Tools
window.React = React;

// needed for onTouchTap
injectTapEventPlugin();

ReactDOM.render(<Main />, document.getElementById('app'));
