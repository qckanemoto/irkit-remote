const React = require('react');
const Grid = require('react-bootstrap').Grid;
const Row = require('react-bootstrap').Row;
const Col = require('react-bootstrap').Col;
const Button = require('react-bootstrap').Button;
const Tabs = require('react-bootstrap').Tabs;
const Tab = require('react-bootstrap').Tab;
const _ = require('lodash');

const DeviceSelector = require('./components/device-selector.js');

// to be removed
const mockData = require('../../../tests/mock-data.js');

module.exports = React.createClass({
    render: function () {
        var tabs = [];
        _.forEach(mockData.remote.tabs, function (t, i) {
            var buttons = [];
            _.forEach(t.buttons, function (b, j) {
                buttons.push(<RemoteButton key={j} data={b} />)
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
                        <Tabs defaultActiveKey={1}>
                            {tabs}
                        </Tabs>
                    </Col>
                    <Col xs={12} md={2} mdOffset={2} mdPull={6}>
                        <DeviceSelector />
                    </Col>
                </Row>
            </Grid>
        );
    }
});

const RemoteButton = React.createClass({
    render: function () {
        var buttonStyle = {color: '#666', height: '5.5em', padding: '.1em', marginBottom: '1em'};
        if (_.isEmpty(this.props.data)) {
            buttonStyle.visibility = 'hidden';
        }
        return (
            <Col xs={3} style={{paddingLeft: '0'}}>
                <Button bsStyle="default" block style={buttonStyle}>
                    <i className={'fa fa-2x fa-' + this.props.data.icon}></i>
                    <div style={{fontSize: '.8em', marginTop: '.5em'}}>{this.props.data.label}</div>
                </Button>
            </Col>
        );
    }
});
