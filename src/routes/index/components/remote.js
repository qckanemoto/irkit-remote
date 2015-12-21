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
        layout: React.PropTypes.shape({
            tabs: React.PropTypes.array
        }),
        onClickButton: React.PropTypes.func.isRequired,
        onCancelEditing: React.PropTypes.func.isRequired,
        onSubmitEditing: React.PropTypes.func.isRequired
    },

    getDefaultProps: function () {
        return {
            isEditing: false,
            layout: {
                tabs: []
            }
        };
    },

    getInitialState: function () {
        var tabNames = [];
        _.forEach(this.props.layout.tabs, function (tab, i) {
            tabNames.push({
                index: i,
                name: tab.name
            });
        });

        return {
            tabs: this.props.layout.tabs,
            tabNames: tabNames,
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
        var that = this;
        var buf = [];
        _.forEach(tabs, function (tab, i) {
            that.state.tabs[tab.index].name = tab.name;
            buf.push(that.state.tabs[tab.index]);
        });

        this.setState({
            tabs: buf
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
                        isEditing={that.props.isEditing}
                        onClick={that.props.isEditing ? that.editButton : that.handleClickButton}
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
                <div className={this.props.isEditing || 'hidden'}>
                    <Button bsStyle="link" className="pull-right" onClick={this.editTab}><i className="fa fa-cog"></i></Button>
                </div>

                <Tabs defaultActiveKey={0}>
                    {tabContents}
                </Tabs>

                <Row className={this.props.isEditing || 'hidden'} style={{marginBottom: '1em'}}>
                    <Col xs={6}><Button block onClick={this.props.onCancelEditing}><i className="fa fa-times"></i> Cancel</Button></Col>
                    <Col xs={6}><Button bsStyle="primary" block onClick={this.props.onSubmitEditing}><i className="fa fa-check"></i> Submit</Button></Col>
                </Row>

                <ButtonModal ref="buttonModal" onSave={this.saveButton} />
                <TabModal ref="tabModal" tabs={this.state.tabNames} onSave={this.saveTab} />
            </div>
        );
    }
});
