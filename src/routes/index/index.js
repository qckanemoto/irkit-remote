const React = require('react');
const Grid = require('react-bootstrap').Grid;
const Row = require('react-bootstrap').Row;
const Col = require('react-bootstrap').Col;

const SideMenu = require('./components/side-menu.js');
const Remote = require('./components/remote.js');

// to be removed
const mockData = require('../../../tests/mock-data.js');

module.exports = React.createClass({
    getInitialState: function () {
        return {
            isEditing: false
        };
    },

    componentDidMount: function () {
    },

    sendSignal: function (signal) {
        console.log(mockData.remote.device, signal);
    },

    enterEditing: function () {
        this.setState({
            isEditing: true
        });
    },

    cancelEditing: function () {
        this.setState({
            isEditing: false
        });
    },

    submitEditing: function () {
        console.log('Submitted editing');
    },

    render: function () {
        return (
            <Grid>
                <Row>
                    <Col xs={12} md={6} mdPush={4}>
                        <Remote
                            isEditing={this.state.isEditing}
                            layout={mockData.remote.layout}
                            onClickButton={this.sendSignal}
                            onEnterEditing={this.enterEditing}
                            onCancelEditing={this.cancelEditing}
                            onSubmitEditing={this.submitEditing}
                        />
                    </Col>
                    <Col xs={12} md={2} mdOffset={2} mdPull={6}>
                        <SideMenu />
                    </Col>
                </Row>
            </Grid>
        );
    }
});
