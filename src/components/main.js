var React = require('react');
var $ = require('jquery');

const RaisedButton = require('material-ui/lib/raised-button');

module.exports = React.createClass({
    render: function () {
        return <RaisedButton label="Primary" primary={true} />;
    }
});
