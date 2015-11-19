const React = require('react');
const Paper = require('material-ui/lib/paper');
const IconButton = require('material-ui/lib/icon-button');
const Dialog = require('./editing-dialog.js');

module.exports = React.createClass({
    render: function () {
        var buttons = [];
        for (var i = 0; i < 6; i++) {
            buttons.push(<Button key={i} />);
        }
        return (
            <div>
                {buttons}
            </div>
        );
    }
});

const Button = React.createClass({
    getInitialState: function () {
        return {isEditing: false};
    },
    showDialog: function () {
        this.refs.dialog.setState({isOpen: true});
        this.setState({isEditing: true});
    },
    handleCloseDialog: function () {
        this.setState({isEditing: false});
    },
    render: function () {
        var bgColor = this.state.isEditing ? '#00bcd4' : '#fff';
        return (
            <Paper style={{display: 'inline-block', marginRight: '.5em', marginBottom: '.5em', backgroundColor: bgColor}}>
                <IconButton iconClassName="material-icons" onTouchTap={this.showDialog} style={{opacity: '.3'}}>add</IconButton>
                <Dialog ref="dialog" onCloseDialog={this.handleCloseDialog} />
            </Paper>
        );
    }
});
