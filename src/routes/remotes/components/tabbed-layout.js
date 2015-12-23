const React = require('react');
const Tabs = require('react-bootstrap').Tabs;
const Tab = require('react-bootstrap').Tab;
const Row = require('react-bootstrap').Row;
const Button = require('react-bootstrap').Button;
const _ = require('lodash');

const RemoteButton = require('./remote-button.js');
const TabModal = require('./tab-modal.js');
const ButtonModal = require('./button-modal.js');

module.exports = React.createClass({
    propTypes: {
        tabs: React.PropTypes.array,
        isEditing: React.PropTypes.bool,
        onClickButton: React.PropTypes.func
    },

    getDefaultProps: function () {
        return {
            tabs: [],
            isEditing: false,
            onClickButton: function () {}
        };
    },

    getInitialState: function () {
        return {
            tabs: this.props.tabs,
            isEditing: this.props.isEditing
        };
    },

    componentWillReceiveProps: function (nextProps) {
        this.setState({
            tabs: nextProps.tabs,
            isEditing: nextProps.isEditing
        });
    },

    editButton: function (button) {
        this.refs.buttonModal.setState({
            isOpen: true,
            icon: button.icon,
            label: button.label,
            signal: button.signal
        });
    },

    editTab: function () {
        this.refs.tabModal.setState({
            isOpen: true
        });
    },

    saveTab: function (tabs) {
        this.setState({
            tabs: tabs
        });
    },

    saveButton: function (button) {
        console.log(button);
    },

    handleClickButton: function (button) {
        this.props.onClickButton(button.signal);
    },

    render: function () {
        var that = this;

        // build tabs
        var tabContents = [];
        _.forEach(this.state.tabs, function (t, i) {

            // build tabContents
            var buttons = [];
            _.forEach(t.buttons, function (b, j) {
                buttons.push(
                    <RemoteButton
                        key={j}
                        config={b}
                        isEditing={that.state.isEditing}
                        onClick={that.state.isEditing ? that.editButton : that.handleClickButton}
                        style={{paddingLeft: '0'}}
                    />
                );
            });
            tabContents.push(
                <Tab key={i} eventKey={i} title={t.name} style={{marginTop: '1em'}}>
                    <Row style={{marginLeft: '0'}}>
                        {buttons}
                    </Row>
                </Tab>
            );
        });

        return (
            <div>
                <div className={this.state.isEditing || 'hidden'}>
                    <Button bsStyle="link" className="pull-right" onClick={this.editTab}><i className="fa fa-cog"></i></Button>
                </div>

                <Tabs defaultActiveKey={0}>
                    {tabContents}
                </Tabs>

                <ButtonModal ref="buttonModal" onSave={this.saveButton} />
                <TabModal ref="tabModal" tabs={this.state.tabs} onSave={this.saveTab} />
            </div>
        );
    }
});
