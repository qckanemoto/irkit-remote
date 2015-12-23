const React = require('react');
const Breadcrumb = require('react-bootstrap').Breadcrumb;
const BreadcrumbItem = require('react-bootstrap').BreadcrumbItem;
const Grid = require('react-bootstrap').Grid;
const Row = require('react-bootstrap').Row;
const Col = require('react-bootstrap').Col;
const Button = require('react-bootstrap').Button;
const _ = require('lodash');

const TabbedLayout = require('./components/tabbed-layout.js');

// fixme
const remotes = require('../../../tests/remotes.js');
const remote = remotes[0];

module.exports = React.createClass({
    getInitialState: function () {
        return {
            tabs: remote.layout.tabs,
            isEditing: false
        };
    },

    toggleEditing: function () {
        this.setState({
            isEditing: !this.state.isEditing
        });
    },

    sendSignal: function (signal) {
        console.log(signal);
    },

    saveLayout: function () {
        this.setState({
            tabs: this.refs.layout.state.tabs,
            isEditing: false
        }, function () {
            console.log(this.state.tabs);
        });
    },

    render: function () {
        return (
            <Grid>
                <Row>
                    <Col xs={12} md={6} mdPush={3}>
                        <Breadcrumb>
                            <BreadcrumbItem active><i className="fa fa-wifi fa-rotate-90"></i> {remote.name}</BreadcrumbItem>
                            <Button bsSize="xsmall" bsStyle="link" className={'pull-right ' + (this.state.isEditing ? ' hidden' : '')} onClick={this.toggleEditing}>
                                <i className="fa fa-pencil"></i>
                            </Button>
                        </Breadcrumb>

                        <TabbedLayout ref="layout" tabs={this.state.tabs} isEditing={this.state.isEditing} onClickButton={this.sendSignal} />

                        <Row className={this.state.isEditing || 'hidden'} style={{marginBottom: '1em'}}>
                            <Col xs={6}><Button block onClick={this.toggleEditing}><i className="fa fa-times"></i> Cancel</Button></Col>
                            <Col xs={6}><Button bsStyle="primary" block onClick={this.saveLayout}><i className="fa fa-check"></i> Submit</Button></Col>
                        </Row>
                    </Col>
                </Row>
            </Grid>
        );
    }
});
