const React = require('react');
const Grid = require('react-bootstrap').Grid;
const Row = require('react-bootstrap').Row;
const Col = require('react-bootstrap').Col;
const Button = require('react-bootstrap').Button;
const Tabs = require('react-bootstrap').Tabs;
const Tab = require('react-bootstrap').Tab;
const Tooltip = require('react-bootstrap').Tooltip;
const OverlayTrigger = require('react-bootstrap').OverlayTrigger;
const _ = require('lodash');

const SideMenu = require('./components/side-menu.js');

// to be removed
const mockData = require('../../../tests/mock-data.js');

module.exports = React.createClass({
    getInitialState: function () {
        return {isEditing: false};
    },
    componentDidMount: function () {
    },
    enterEditing: function () {
        this.setState({isEditing: true});
    },
    cancelEditing: function () {
        this.setState({isEditing: false});
    },
    render: function () {
        var tabs = [];
        var that = this;
        _.forEach(mockData.remote.tabs, function (t, i) {
            var buttons = [];
            _.forEach(t.buttons, function (b, j) {
                buttons.push(<RemoteButton key={j} data={b} isEditing={that.state.isEditing} />)
            });
            tabs.push(
                <Tab key={i} eventKey={i+1} title={t.name} style={{marginTop: '1em'}}>
                    <Row style={{marginLeft: '0'}}>
                        {buttons}
                    </Row>
                </Tab>
            );
        });

        return (
            <Grid>
                <Row>
                    <Col xs={12} md={6} mdPush={4}>
                        <div className={this.state.isEditing && 'hidden'}>
                            <OverlayTrigger overlay={<Tooltip id="edit-this-remote">Edit this remote</Tooltip>} placement="top" onClick={this.enterEditing}>
                                <Button bsStyle="link" className="pull-right"><i className="fa fa-cog"></i></Button>
                            </OverlayTrigger>
                        </div>
                        <Tabs defaultActiveKey={1}>
                            {tabs}
                        </Tabs>
                        <Row className={this.state.isEditing || 'hidden'} style={{marginBottom: '1em'}}>
                            <Col xs={6}><Button bsStyle="default" block onClick={this.cancelEditing}><i className="fa fa-times"></i> Cancel</Button></Col>
                            <Col xs={6}><Button bsStyle="primary" block><i className="fa fa-check"></i> Submit</Button></Col>
                        </Row>
                    </Col>
                    <Col xs={12} md={2} mdOffset={2} mdPull={6}>
                        <SideMenu />
                    </Col>
                </Row>
            </Grid>
        );
    }
});

const RemoteButton = React.createClass({
    render: function () {
        var buttonStyle = {height: '5.5em', padding: '.1em', marginBottom: '1em'};
        var labelStyle = {fontSize: '.8em', marginTop: '.5em'};

        if (_.isEmpty(this.props.data)) {
            buttonStyle.borderStyle = 'dashed';
            if (!this.props.isEditing) {
                buttonStyle.visibility = 'hidden';
            }
            return (
                <Col xs={3} style={{paddingLeft: '0', opacity: '.3'}}>
                    <Button bsStyle="default" block style={buttonStyle}>
                        <i className="fa fa-2x fa-plus"></i>
                        <div style={labelStyle}>Empty</div>
                    </Button>
                </Col>
            );
        } else {
            return (
                <Col xs={3} style={{paddingLeft: '0'}}>
                    <Button bsStyle="default" block style={buttonStyle}>
                        <i className={'fa fa-2x fa-' + this.props.data.icon}></i>
                        <div style={labelStyle}>{this.props.data.label}</div>
                    </Button>
                </Col>
            );
        }
    }
});
