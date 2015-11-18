const React = require('react');
const AppBar = require('material-ui/lib/app-bar');

module.exports = React.createClass({
    handleLeftIconButtonTouchTap: function () {
        console.log('tapped');
    },
    render: function () {
        return (
            <AppBar title="IRKit Remote" onLeftIconButtonTouchTap={this.handleLeftIconButtonTouchTap} />
        );
    }
});
