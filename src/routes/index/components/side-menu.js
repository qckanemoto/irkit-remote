const React = require('react');
const Panel = require('react-bootstrap').Panel;
const ListGroup = require('react-bootstrap').ListGroup;
const ListGroupItem = require('react-bootstrap').ListGroupItem;
const LinkContainer = require('react-router-bootstrap').LinkContainer;
const Button = require('react-bootstrap').Button;
const _ = require('lodash');

// to be removed
const mockData = require('../../../../tests/mock-data.js');

module.exports = React.createClass({
    render: function () {
        var listGroupItems = [];
        _.forEach(mockData.devices, function (d, i) {
            listGroupItems.push(
                <LinkContainer to={'/remotes/' + d.id + '/'} key={i}>
                    <ListGroupItem>{d.name}</ListGroupItem>
                </LinkContainer>
            );
        });
        return (
            <div>
                <Panel header={<h4><i className="fa fa-wifi fa-rotate-90"></i> IRKits</h4>}>
                    <ListGroup fill>
                        {listGroupItems}
                    </ListGroup>
                </Panel>
            </div>
        );
    }
});
