var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var injectTapEventPlugin = require('react-tap-event-plugin');

const RaisedButton = require('material-ui/lib/raised-button');

// needed for onTouchTap
injectTapEventPlugin();

ReactDOM.render(
    <RaisedButton label="Super Secret Password" primary={true} />,
    document.getElementById('app')
);
