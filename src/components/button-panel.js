const React = require('react');
const Paper = require('material-ui/lib/paper');
const IconButton = require('material-ui/lib/icon-button');
const MuiDialog = require('material-ui/lib/dialog');

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
    showDialog: function () {
        this.refs.dialog.setState({isOpen: true});
    },
    render: function () {
        // todo
        // var bgColor = this.refs.dialog ? '#00bcd4' : '#fff';
        var bgColor = '#fff';
        return (
            <Paper style={{display: 'inline-block', marginRight: '.5em', marginBottom: '.5em', backgroundColor: bgColor}}>
                <IconButton iconClassName="material-icons" onTouchTap={this.showDialog} style={{opacity: '.3'}}>add</IconButton>
                <Dialog ref="dialog" />
            </Paper>
        );
    }
});

const Dialog = React.createClass({
    getInitialState: function () {
        return {isOpen: false};
    },
    handleRequestClose: function () {
        this.setState({isOpen: false});
    },
    handleDialogSubmit: function () {
        console.log('submitted');
    },
    render: function () {
        var standardActions = [
            {text: 'Cancel'},
            {text: 'Submit', onTouchTap: this.handleDialogSubmit, ref: 'submit'}
        ];
        return (
            <MuiDialog
                title="Edit button"
                actions={standardActions}
                actionFocus="submit"
                open={this.state.isOpen}
                onRequestClose={this.handleRequestClose}>
            </MuiDialog>
        );
    }
});
