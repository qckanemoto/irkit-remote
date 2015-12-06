const React = require('react');
const Row = require('react-bootstrap').Row;
const Col = require('react-bootstrap').Col;
const Button = require('react-bootstrap').Button;
const Tabs = require('react-bootstrap').Tabs;
const Tab = require('react-bootstrap').Tab;
const Input = require('react-bootstrap').Input;
const _ = require('lodash');

const RemoteButton = require('./remote-button.js');
const TabModal = require('./tab-modal.js');
const ButtonModal = require('./button-modal.js');

module.exports = React.createClass({
    propTypes: {
        isEditing: React.PropTypes.bool,
        layout: React.PropTypes.object,
        onClickButton: React.PropTypes.func.isRequired,
        onCancelEditing: React.PropTypes.func.isRequired,
        onSubmitEditing: React.PropTypes.func.isRequired
    },

    getDefaultProps: function () {
        return {
            layout: {
                tabs: []
            },
            isEditing: false
        };
    },

    getInitialState: function () {
        return {
            editing: {}
        };
    },

    editTab: function () {
        this.refs.tabModal.setState({
            isOpen: true
        });
    },

    editButton: function (button) {
        this.setState({
            editing: button
        });
        this.refs.buttonModal.setState({
            isOpen: true,
            icon: button.icon,
            label: button.label,
            signal: button.signal
        });
    },

    saveTab: function (tabs) {
        console.log(tabs);
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
        var tabs = [];
        _.forEach(this.props.layout.tabs, function (t, i) {

            // build buttons in a tab
            var buttons = [];
            _.forEach(t.buttons, function (b, j) {
                buttons.push(
                    <RemoteButton
                        key={j}
                        config={b}
                        isEditing={that.props.isEditing}
                        onClick={that.props.isEditing ? that.editButton : that.handleClickButton}
                        style={{paddingLeft: '0'}}
                    />
                );
            });
            tabs.push(
                <Tab key={i} eventKey={i} title={t.name} style={{marginTop: '1em'}}>
                    <Row style={{marginLeft: '0'}}>
                        {buttons}
                    </Row>
                </Tab>
            );
        });

        // todo
        var tabNames = [
            {id: 1, value: 'test1'},
            {id: 2, value: 'test2'},
            {id: 3, value: 'test3'}
        ];

        return (
            <div>
                <div className={this.props.isEditing || 'hidden'}>
                    <Button bsStyle="link" className="pull-right" onClick={this.editTab}><i className="fa fa-cog"></i></Button>
                </div>

                <Tabs defaultActiveKey={0}>
                    {tabs}
                </Tabs>

                <Row className={this.props.isEditing || 'hidden'} style={{marginBottom: '1em'}}>
                    <Col xs={6}><Button block onClick={this.props.onCancelEditing}><i className="fa fa-times"></i> Cancel</Button></Col>
                    <Col xs={6}><Button bsStyle="primary" block onClick={this.props.onSubmitEditing}><i className="fa fa-check"></i> Submit</Button></Col>
                </Row>

                <ButtonModal ref="buttonModal" onSave={this.saveButton} />
                <TabModal ref="tabModal" tabNames={tabNames} onSave={this.saveTab} />
            </div>
        );
    }
});
