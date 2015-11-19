const React = require('react');
const Dialog = require('material-ui/lib/dialog');
const TextField = require('material-ui/lib/text-field');
const IconButton = require('material-ui/lib/icon-button');

module.exports = React.createClass({
    getInitialState: function () {
        return {
            isOpen: false,
            previewingIconName: ''
        };
    },
    handleRequestClose: function () {
        this.setState({isOpen: false});
        this.props.onCloseDialog();
    },
    handleDialogSubmit: function () {
        console.log('submitted');
    },
    previewIcon: function () {
        this.setState({previewingIconName: this.refs.iconName.getValue().replace(/\s+/g, '_')});
    },
    render: function () {
        var standardActions = [
            {text: 'Cancel'},
            {text: 'Submit', onTouchTap: this.handleDialogSubmit, ref: 'submit'}
        ];
        var menuItems = [];
        return (
            <Dialog
                ref="muiDialog"
                title="Edit button"
                actions={standardActions}
                actionFocus="submit"
                open={this.state.isOpen}
                onRequestClose={this.handleRequestClose}
                autoScrollBodyContent={true}>

                <TextField floatingLabelText="Label" hintText="e.g. TV Power" fullWidth={true} autoFocus />

                <TextField floatingLabelText="Icon name" hintText="e.g. power settings new" style={{width: '70%'}} ref="iconName" onChange={this.previewIcon} />
                <a href="https://www.google.com/design/icons/" target="_blank">
                    <IconButton iconClassName="material-icons" tooltip="Find icons from 'Material icons'" style={{width: '15%'}}>search</IconButton>
                </a>
                <IconButton iconClassName="material-icons" disabled={true} style={{width: '15%', height: '1px'}}>{this.state.previewingIconName}</IconButton>

                <TextField floatingLabelText="IR signal" hintText='e.g. {"format":"raw",...}' fullWidth={true} />

            </Dialog>
        );
    }
});
